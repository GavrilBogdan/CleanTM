"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const TILE_DARK =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

type CleanupLocation = {
  id: number;
  title: string;
  desc: string;
  date: string;
  bags: number;
  pos: { lat: number; lng: number };
};

const LAST_CLEANUPS: CleanupLocation[] = [
  {
    id: 1,
    title: "Bega riverside plastic cleanup",
    desc: "Gathered PET bottles and cans along the river.",
    date: "2025-11-10",
    bags: 4,
    pos: { lat: 45.7489, lng: 21.229 },
  },
  {
    id: 2,
    title: "Neighborhood park trash sweep",
    desc: "Cleaned snack wrappers and cigarette butts around benches.",
    date: "2025-11-05",
    bags: 3,
    pos: { lat: 45.7545, lng: 21.22 },
  },
  {
    id: 3,
    title: "Street-side bottle collection",
    desc: "Focused on glass bottles near the tram station.",
    date: "2025-11-01",
    bags: 2,
    pos: { lat: 45.742, lng: 21.24 },
  },
  {
    id: 4,
    title: "Green area micro-cleanup",
    desc: "Removed mixed waste from a small green strip.",
    date: "2025-10-28",
    bags: 1,
    pos: { lat: 45.761, lng: 21.205 },
  },
];

const IMPACT_TIMELINE = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  bags: [3, 6, 2, 5, 4, 7, 6],
};

type ProfileApiUser = {
  id: number;
  email: string;
  points: number;
  username?: string | null;
  avatarUrl?: string | null;
};

export default function ProfileDashboardPage() {
  const router = useRouter();

  const [profile, setProfile] = useState<ProfileApiUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // local editable fields
  const [editUsername, setEditUsername] = useState("");
  const [editAvatarUrl, setEditAvatarUrl] = useState("");

  // ------------------------------------------------------------------
  // FETCH PROFILE FROM /api/profile
  // ------------------------------------------------------------------
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();
        if (data.user) {
          setProfile(data.user);
          setEditUsername(data.user.username || "");
          setEditAvatarUrl(data.user.avatarUrl || "");
        }
      } catch (err) {
        console.error("Error loading profile:", err);
        setError("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSaveProfile = async () => {
    if (!profile) return;
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: editUsername.trim() || null,
          avatarUrl: editAvatarUrl.trim() || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to save profile.");
      } else if (data.user) {
        setProfile(data.user);
        setSuccess("Profile saved successfully.");
      }
    } catch (err) {
      console.error("Error saving profile:", err);
      setError("Something went wrong while saving.");
    } finally {
      setSaving(false);
      setTimeout(() => setSuccess(null), 2500);
    }
  };

  // DERIVED VALUES FOR UI (fallbacks)
  const displayName =
    profile?.username || profile?.email?.split("@")[0] || "Eco Explorer";

  const usernameHandle = profile?.username
    ? `@${profile.username}`
    : profile?.email
    ? `@${profile.email.split("@")[0]}`
    : "@eco.explorer";

  const avatarSrc =
    profile?.avatarUrl && profile.avatarUrl.length > 0
      ? profile.avatarUrl
      : "/images/rafa.jpg";

  const diamonds = profile?.points ?? 0;

  // demo stats (can be wired later to DB)
  const totalCleanups = 34;
  const totalBags = 96;
  const totalHours = 52;
  const level = 7;
  const rank = 12;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <p className="text-sm text-gray-300">Loading profile…</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold">You’re not logged in.</p>
          <p className="text-sm text-gray-400">
            Please log in to view your dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* HEADER + BACK BUTTON */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-sm text-gray-400 mt-1">
              Track your cleanup impact, badges and latest missions on the map.
            </p>
          </div>

          <button
            onClick={() => router.back()}
            className="
              self-start sm:self-auto
              inline-flex items-center gap-2
              px-4 py-2 rounded-full text-xs font-semibold
              bg-[#020617] border border-emerald-500/50
              text-emerald-200
              hover:bg-emerald-600/10 hover:border-emerald-400
              transition
            "
          >
            <span className="text-sm">←</span>
            Back to last page
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN: PROFILE + STATS + SETTINGS + BADGES */}
          <div className="space-y-6 lg:col-span-1">
            {/* PROFILE CARD */}
            <div className="bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.65)]">
                    <img
                      src={avatarSrc}
                      alt={displayName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-emerald-500 text-[11px] font-semibold">
                    Lv. {level}
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold">{displayName}</p>
                  <p className="text-xs text-gray-400">{usernameHandle}</p>
                  <p className="mt-2 text-xs text-emerald-400 flex items-center gap-1">
                    <span className="text-base">💎</span>
                    <span className="font-semibold">{diamonds} eco points</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="bg-[#020617] border border-[#1e293b] rounded-xl py-3">
                  <p className="text-gray-400 mb-1">Global rank</p>
                  <p className="text-lg font-bold text-white">#{rank}</p>
                </div>
                <div className="bg-[#020617] border border-[#1e293b] rounded-xl py-3">
                  <p className="text-gray-400 mb-1">Cleanups</p>
                  <p className="text-lg font-bold text-emerald-400">
                    {totalCleanups}
                  </p>
                </div>
                <div className="bg-[#020617] border border-[#1e293b] rounded-xl py-3">
                  <p className="text-gray-400 mb-1">Hours</p>
                  <p className="text-lg font-bold text-emerald-400">
                    {totalHours}
                  </p>
                </div>
              </div>
            </div>

            {/* IMPACT STATS */}
            <div className="bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl">
              <h2 className="text-sm font-semibold mb-3 text-gray-100">
                Impact overview
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total bags collected</span>
                  <span className="font-semibold text-emerald-400">
                    {totalBags}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Average bags / cleanup</span>
                  <span className="font-semibold">
                    {(totalBags / totalCleanups).toFixed(1)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Average duration</span>
                  <span className="font-semibold">
                    {(totalHours / totalCleanups).toFixed(1)} h
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-400 mb-1">
                  Progress to next level
                </p>
                <div className="h-2 w-full bg-[#020617] border border-[#1e293b] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"
                    style={{ width: "68%" }}
                  />
                </div>
              </div>
            </div>

            {/* PROFILE SETTINGS (EDITABLE) */}
            <div className="bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl">
              <h2 className="text-sm font-semibold mb-3 text-gray-100">
                Profile settings
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-400 mb-1">
                    Username (public)
                  </label>
                  <input
                    type="text"
                    value={editUsername}
                    onChange={(e) => setEditUsername(e.target.value)}
                    placeholder="Your public username"
                    className="w-full bg-[#020617] border border-[#1e293b] rounded-lg px-3 py-2 outline-none text-sm text-gray-100 placeholder:text-gray-500"
                  />
                  <p className="mt-1 text-[11px] text-gray-500">
                    This will be shown on leaderboards and quests.
                  </p>
                </div>

                <div>
                  <label className="block text-gray-400 mb-1">
                    Avatar image URL
                  </label>
                  <input
                    type="text"
                    value={editAvatarUrl}
                    onChange={(e) => setEditAvatarUrl(e.target.value)}
                    placeholder="https://your-avatar-url.jpg"
                    className="w-full bg-[#020617] border border-[#1e293b] rounded-lg px-3 py-2 outline-none text-sm text-gray-100 placeholder:text-gray-500"
                  />
                  <p className="mt-1 text-[11px] text-gray-500">
                    For now, paste a direct image URL. (Later you can add
                    upload.)
                  </p>
                </div>

                {error && (
                  <p className="text-[11px] text-red-400 mt-1">{error}</p>
                )}
                {success && (
                  <p className="text-[11px] text-emerald-400 mt-1">{success}</p>
                )}

                <button
                  onClick={handleSaveProfile}
                  disabled={saving}
                  className={`mt-2 w-full text-center py-2.5 rounded-full text-sm font-semibold 
                    bg-emerald-600 hover:bg-emerald-500 transition 
                    disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {saving ? "Saving…" : "Save changes"}
                </button>
              </div>
            </div>

            {/* BADGES */}
            <div className="bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl">
              <h2 className="text-sm font-semibold mb-3 text-gray-100">
                Badges & achievements
              </h2>

              <div className="flex flex-wrap gap-3 text-xs">
                <Badge
                  label="River Guardian"
                  desc="5+ river cleanups"
                  icon="🌊"
                />
                <Badge
                  label="Bottle Hunter"
                  desc="200+ bottles collected"
                  icon="🧴"
                />
                <Badge
                  label="Weekend Warrior"
                  desc="Active 4 weekends in a row"
                  icon="📅"
                />
                <Badge
                  label="Early Supporter"
                  desc="Joined in beta"
                  icon="⭐"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MINI MAP + RECENT CLEANUPS + IMPACT TIMELINE */}
          <div className="lg:col-span-2 space-y-6">
            {/* MINI MAP CARD */}
            <div className="bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-lg font-semibold">
                    Last cleanup locations
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    A quick overview of your most recent cleanup spots.
                  </p>
                </div>
                <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                  {LAST_CLEANUPS.length} locations
                </span>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {/* Mini map */}
                <div className="xl:col-span-2">
                  <MiniCleanupMap cleanups={LAST_CLEANUPS} />
                </div>

                {/* List next to map */}
                <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                  {LAST_CLEANUPS.map((c) => (
                    <div
                      key={c.id}
                      className="bg-[#020617] border border-[#1e293b] rounded-xl px-3 py-3 text-xs hover:border-emerald-500/70 hover:bg-[#020617]/60 transition"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-[13px]">{c.title}</p>
                          <p className="text-gray-400 mt-0.5">{c.desc}</p>
                        </div>
                        <span className="text-[11px] text-gray-500 whitespace-nowrap">
                          {c.date}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[11px] text-gray-400">
                        <span>🗑️ {c.bags} bags collected</span>
                        <span>
                          {c.pos.lat.toFixed(3)}, {c.pos.lng.toFixed(3)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* IMPACT TIMELINE MINI CHART CARD */}
            <ImpactTimelineCard />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   MINI MAP COMPONENT (Leaflet) — SSR SAFE VERSION
-------------------------------------------------------------------*/
function MiniCleanupMap({ cleanups }: { cleanups: CleanupLocation[] }) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any>(null);
  const LRef = useRef<any>(null); // ← store Leaflet instance here

  useEffect(() => {
    let isMounted = true;

    (async () => {
      if (typeof window === "undefined") return;
      if (!mapContainerRef.current || mapRef.current) return;

      // Dynamic import Leaflet
      const leaflet = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      const LInstance = leaflet.default || leaflet;
      LRef.current = LInstance; // ← save it for later use

      if (!isMounted) return;

      const map = LInstance.map(mapContainerRef.current, {
        center: [45.7489, 21.2087],
        zoom: 12,
        zoomControl: false,
        attributionControl: false,
      });

      LInstance.tileLayer(TILE_DARK, { maxZoom: 18 }).addTo(map);

      const group = LInstance.layerGroup().addTo(map);

      mapRef.current = map;
      markersRef.current = group;
    })();

    return () => {
      isMounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !markersRef.current || !LRef.current) return;

    const L = LRef.current;

    markersRef.current.clearLayers();

    const points: any[] = [];

    cleanups.forEach((c) => {
      const marker = L.circleMarker([c.pos.lat, c.pos.lng], {
        radius: 7,
        weight: 2,
        color: "#22c55e",
        fillColor: "#22c55e",
        fillOpacity: 0.8,
      });

      marker.bindPopup(
        `<strong>${c.title}</strong><br/>${c.desc}<br/><small>${c.date}</small>`
      );

      marker.addTo(markersRef.current);
      points.push([c.pos.lat, c.pos.lng]);
    });

    if (points.length > 0) {
      const bounds = L.latLngBounds(points);
      mapRef.current.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [cleanups]);

  return (
    <div className="w-full h-[260px] rounded-xl overflow-hidden border border-[#1e293b]">
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}
/* ------------------------------------------------------------------
   IMPACT TIMELINE CARD + MINI CHART
-------------------------------------------------------------------*/
function ImpactTimelineCard() {
  const data = IMPACT_TIMELINE.bags;
  const labels = IMPACT_TIMELINE.labels;
  const best = Math.max(...data);
  const avg = data.reduce((s, v) => s + v, 0) / data.length;

  return (
    <div className="bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-sm font-semibold text-gray-100">
            Impact timeline
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Bags collected across your last 7 cleanups.
          </p>
        </div>
        <span className="text-[11px] text-gray-500">Last 7 sessions</span>
      </div>

      <ImpactTimelineMiniChart data={data} labels={labels} />

      <div className="mt-4 flex items-center justify-between text-[11px] text-gray-400">
        <span>
          Best session:{" "}
          <span className="text-emerald-400 font-semibold">{best} bags</span>
        </span>
        <span>
          Average:{" "}
          <span className="text-emerald-400 font-semibold">
            {avg.toFixed(1)} bags
          </span>
        </span>
      </div>
    </div>
  );
}

function ImpactTimelineMiniChart({
  data,
  labels,
}: {
  data: number[];
  labels: string[];
}) {
  const width = 260;
  const height = 80;
  const maxVal = Math.max(...data, 1);

  const points = data.map((value, index) => {
    const x = data.length > 1 ? (width / (data.length - 1)) * index : width / 2;
    const y = height - (value / maxVal) * (height - 16) - 8;
    return { x, y };
  });

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");

  const areaD =
    pathD +
    ` L${points[points.length - 1]?.x ?? width},${height} L${
      points[0]?.x ?? 0
    },${height} Z`;

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-24 overflow-visible"
      >
        <defs>
          <linearGradient id="impactGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d={areaD}
          fill="url(#impactGradient)"
          stroke="none"
          opacity={0.6}
        />

        <path
          d={pathD}
          fill="none"
          stroke="#22c55e"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={3}
            fill="#22c55e"
            stroke="#022c22"
            strokeWidth={1.4}
          />
        ))}
      </svg>

      <div className="mt-1 flex justify-between text-[10px] text-gray-500">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   SMALL BADGE COMPONENT
-------------------------------------------------------------------*/
function Badge({
  label,
  desc,
  icon,
}: {
  label: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="flex items-start gap-2 bg-[#020617] border border-[#1e293b] rounded-xl px-3 py-2">
      <span className="text-lg">{icon}</span>
      <div className="text-[11px]">
        <p className="font-semibold text-gray-100">{label}</p>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
