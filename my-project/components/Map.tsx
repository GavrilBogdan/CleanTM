"use client";

import L from "leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";

/* ──────────────────────────────────────────
   BASE DATA
   ────────────────────────────────────────── */

const FALLBACK_PROBLEMS = [
  {
    id: 1,
    title: "Pile of trash on Calea Șagului",
    desc: "Torn bags, PET bottles and waste dumped near the sidewalk. Needs quick cleanup.",
    pos: { lat: 45.7225, lng: 21.226 },
    type: "salubritate",
    priority: "mare",
  },
  {
    id: 2,
    title: "Overflowing trash bins",
    desc: "Bins are full, garbage falls on the ground and is blown away by the wind.",
    pos: { lat: 45.7578, lng: 21.229 },
    type: "salubritate",
    priority: "medie",
  },
  {
    id: 3,
    title: "PET bottles on the Bega riverbank",
    desc: "Plastic bottles and bags floating on the water and along the riverbank. Needs an eco-cleanup action.",
    pos: { lat: 45.7705, lng: 21.2444 },
    type: "ecologizare",
    priority: "medie",
  },
  {
    id: 4,
    title: "Dirty tram station",
    desc: "Food leftovers, cigarette butts and packaging thrown next to the bench.",
    pos: { lat: 45.7401, lng: 21.2705 },
    type: "salubritate",
    priority: "mică",
  },
  {
    id: 5,
    title: "Mud and litter after rain",
    desc: "Puddles full of cigarette butts, bags and paper gathered on the edge of the sidewalk.",
    pos: { lat: 45.7642, lng: 21.2041 },
    type: "salubritate",
    priority: "medie",
  },
  {
    id: 6,
    title: "Sidewalk covered in trash",
    desc: "Boxes, cans and paper scattered around, making it hard for pedestrians to pass.",
    pos: { lat: 45.75, lng: 21.3 },
    type: "salubritate",
    priority: "mică",
  },
  {
    id: 7,
    title: "Trash island near crosswalk",
    desc: "Bags, bottles and household waste gathered at the street corner.",
    pos: { lat: 45.79, lng: 21.23 },
    type: "salubritate",
    priority: "mică",
  },
  {
    id: 8,
    title: "Parking area full of litter",
    desc: "Food leftovers, coffee cups and bags left next to cars.",
    pos: { lat: 45.7195, lng: 21.24 },
    type: "salubritate",
    priority: "mică",
  },
  {
    id: 9,
    title: "Containers used incorrectly",
    desc: "Glass and plastic bottles thrown next to the containers instead of inside them.",
    pos: { lat: 45.706, lng: 21.17 },
    type: "deseuri",
    priority: "mică",
  },
  {
    id: 10,
    title: "No recycling bins",
    desc: "Busy area, but only regular bins exist, no separate bins for recycling.",
    pos: { lat: 45.77, lng: 21.26 },
    type: "ecologizare",
    priority: "medie",
  },
  {
    id: 11,
    title: "Trash on the sidewalk near apartment blocks",
    desc: "Cardboard boxes, torn bags and bulky waste left on the sidewalk.",
    pos: { lat: 45.7512, lng: 21.22 },
    type: "salubritate",
    priority: "medie",
  },
  {
    id: 12,
    title: "Waste hanging in trees",
    desc: "Plastic bags stuck in branches, giving the area a neglected look.",
    pos: { lat: 45.7583, lng: 21.214 },
    type: "ecologizare",
    priority: "mare",
  },
  {
    id: 13,
    title: "Bus stop with trash at the base",
    desc: "Cigarette butts, packaging and empty bottles next to the stop pole.",
    pos: { lat: 45.7444, lng: 21.205 },
    type: "salubritate",
    priority: "mică",
  },
  {
    id: 14,
    title: "Pile of waste on green space",
    desc: "Household garbage bags dumped directly on the grass.",
    pos: { lat: 45.7321, lng: 21.197 },
    type: "deseuri",
    priority: "medie",
  },
  {
    id: 15,
    title: "Playground full of packaging",
    desc: "Bottles, bags and paper everywhere, near the slide and swings.",
    pos: { lat: 45.7673, lng: 21.222 },
    type: "salubritate",
    priority: "mare",
  },
  {
    id: 16,
    title: "Debris floating near drains",
    desc: "Leaves mixed with PET bottles and bags blocking the drain.",
    pos: { lat: 45.7811, lng: 21.232 },
    type: "deseuri",
    priority: "medie",
  },
  {
    id: 17,
    title: "Park with dirty alleys",
    desc: "Sunflower seed shells, juice boxes and bottles thrown on the ground.",
    pos: { lat: 45.7485, lng: 21.252 },
    type: "ecologizare",
    priority: "mică",
  },
  {
    id: 18,
    title: "Trash under pedestrian bridge",
    desc: "Bottles, cans and garbage bags dumped under the bridge, hard to access.",
    pos: { lat: 45.754, lng: 21.241 },
    type: "deseuri",
    priority: "mare",
  },
  {
    id: 19,
    title: "Green area full of plastic",
    desc: "Tall grass mixed with lots of PET bottles and cans.",
    pos: { lat: 45.7615, lng: 21.2105 },
    type: "ecologizare",
    priority: "mică",
  },
  {
    id: 20,
    title: "Dirty pedestrian underpass",
    desc: "Papers, cigarette butts and packaging gathered along the stairs.",
    pos: { lat: 45.7452, lng: 21.259 },
    type: "salubritate",
    priority: "mare",
  },
  {
    id: 21,
    title: "School entrance with litter",
    desc: "Students leave packaging and bottles at the gate, not enough bins.",
    pos: { lat: 45.769, lng: 21.216 },
    type: "ecologizare",
    priority: "mare",
  },
  {
    id: 22,
    title: "Unmaintained garbage platform",
    desc: "Waste thrown on the ground around the dumpsters, strong smell.",
    pos: { lat: 45.737, lng: 21.238 },
    type: "salubritate",
    priority: "mare",
  },
  {
    id: 23,
    title: "Construction debris by the roadside",
    desc: "Pieces of concrete, cement bags and rubble left randomly.",
    pos: { lat: 45.713, lng: 21.225 },
    type: "deseuri",
    priority: "mică",
  },
  {
    id: 24,
    title: "Pedestrian bridge with graffiti and trash",
    desc: "Spray paint, papers and empty bottles along the whole bridge.",
    pos: { lat: 45.752, lng: 21.19 },
    type: "ecologizare",
    priority: "medie",
  },
  {
    id: 25,
    title: "Construction site area full of debris",
    desc: "Foil, polystyrene and wood pieces blown onto public space.",
    pos: { lat: 45.776, lng: 21.205 },
    type: "deseuri",
    priority: "mică",
  },
  {
    id: 26,
    title: "Tram stop with broken glass",
    desc: "Shards and glass caps on the ground, danger for pedestrians.",
    pos: { lat: 45.783, lng: 21.246 },
    type: "salubritate",
    priority: "medie",
  },
  {
    id: 27,
    title: "Sports field with litter",
    desc: "PET bottles, bags and packaging left on the field and near the fence.",
    pos: { lat: 45.731, lng: 21.254 },
    type: "ecologizare",
    priority: "mică",
  },
  {
    id: 28,
    title: "Scooter and trash on sidewalk",
    desc: "Scooter left in the middle plus empty bottles around it.",
    pos: { lat: 45.742, lng: 21.218 },
    type: "salubritate",
    priority: "mică",
  },
  {
    id: 29,
    title: "Open dumpsters and scattered trash",
    desc: "Waste blown around by wind and animals around the dumpsters.",
    pos: { lat: 45.755, lng: 21.227 },
    type: "deseuri",
    priority: "medie",
  },
  {
    id: 30,
    title: "Uncleaned public transport stop",
    desc: "Papers, juice boxes and bottles on the ground, no sanitation intervention.",
    pos: { lat: 45.768, lng: 21.234 },
    type: "salubritate",
    priority: "mică",
  },
];

const MAP_CENTER: [number, number] = [45.7489, 21.2087];
const TILE_DARK =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

const THREE_HOURS_MS = 3 * 60 * 60 * 1000;

type BaseProblem = (typeof FALLBACK_PROBLEMS)[number];

interface ProblemWithState extends BaseProblem {
  status?: "pending" | "accepted" | "finished";
  acceptedAt?: number;
  hasImage?: boolean;
  difficulty: number;
  basePoints: number;
  points: number;
}

/* ──────────────────────────────────────────
   HELPERS
   ────────────────────────────────────────── */

function getPriorityColor(priority: string): string {
  if (priority === "mare") return "#ef4444"; // high
  if (priority === "medie") return "#facc15"; // medium
  if (priority === "mică") return "#22c55e"; // low
  return "#22c55e";
}

function getPriorityLabel(priority: string): string {
  if (priority === "mare") return "High";
  if (priority === "medie") return "Medium";
  if (priority === "mică") return "Low";
  return priority;
}

function escapeText(text: string) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// prepare: add state, difficulty, points, shuffle, return 10 + the rest
function prepareProblems(source: BaseProblem[], count: number) {
  const withState: ProblemWithState[] = source.map((p) => {
    const difficulty =
      p.priority === "mare" ? 3 : p.priority === "medie" ? 2 : 1;
    const basePoints = 10;
    const points = basePoints * difficulty;

    return {
      ...p,
      status: "pending",
      hasImage: false,
      difficulty,
      basePoints,
      points,
    };
  });

  const copy = [...withState];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  const sliceIndex = Math.min(count, copy.length);
  return {
    initial: copy.slice(0, sliceIndex),
    rest: copy.slice(sliceIndex),
  };
}

function formatTimeLeft(ms: number): string {
  const clamped = Math.max(0, ms);
  const totalSeconds = Math.floor(clamped / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

/* ──────────────────────────────────────────
   HEATMAP CARD
   ────────────────────────────────────────── */

function HeatmapCard({ problems }: { problems: ProblemWithState[] }) {
  const mapRef = useRef<L.Map | null>(null);
  const heatLayerRef = useRef<any>(null);
  const [heatEnabled, setHeatEnabled] = useState(false);
  const [leaflet, setLeaflet] = useState<any>(null);

  const MAP_CENTER_LOCAL = [45.7489, 21.2087];
  const TILE_DARK_LOCAL =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  useEffect(() => {
    (async () => {
      const leafletModule = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      await import("leaflet.heat");
      const LInstance = leafletModule.default || leafletModule;
      setLeaflet(LInstance);
    })();
  }, []);

  useEffect(() => {
    if (!leaflet || mapRef.current) return;
    const LInstance = leaflet as typeof L;

    const map = LInstance.map("heatmap-container", {
      center: MAP_CENTER_LOCAL as [number, number],
      zoom: 12,
      zoomControl: true,
      attributionControl: false,
      dragging: true,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
    });

    LInstance.tileLayer(TILE_DARK_LOCAL, { maxZoom: 18 }).addTo(map);
    mapRef.current = map;
  }, [leaflet]);

  useEffect(() => {
    if (!leaflet || !mapRef.current) return;
    const LInstance: any = leaflet;

    if (heatEnabled) {
      const heatData = problems.map((p) => [
        p.pos.lat,
        p.pos.lng,
        p.priority === "mare" ? 1.0 : p.priority === "medie" ? 0.8 : 0.6,
      ]);

      if (!heatLayerRef.current) {
        heatLayerRef.current = LInstance.heatLayer(heatData, {
          radius: 40,
          blur: 15,
          maxZoom: 17,
          gradient: {
            0.2: "#00ff5e",
            0.4: "#a3e635",
            0.6: "#facc15",
            0.8: "#f97316",
            1.0: "#dc2626",
          },
        });
      } else {
        heatLayerRef.current.setLatLngs(heatData);
      }

      heatLayerRef.current.addTo(mapRef.current);
    } else if (heatLayerRef.current) {
      mapRef.current!.removeLayer(heatLayerRef.current);
    }
  }, [heatEnabled, leaflet, problems]);

  return (
    <div className="mt-30 w-full">
      <div className="bg-[#020617]/90 border border-[#1e293b] rounded-2xl shadow-xl p-6 max-w-7xl mx-auto backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-emerald-50">
            Heatmap — Problem distribution
          </h2>

          <button
            onClick={() => setHeatEnabled((v) => !v)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              heatEnabled
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-[#1e293b] hover:bg-[#243045]"
            }`}
          >
            {heatEnabled ? "Disable heatmap" : "Enable heatmap"}
          </button>
        </div>

        <div
          id="heatmap-container"
          className="w-full h-[500px] rounded-xl overflow-hidden border border-[#1e293b]"
        />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────── */

export default function TimisoaraProblemsMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const clusterRef = useRef<L.MarkerClusterGroup | null>(null);
  const markersRef = useRef<{ id: number; marker: L.Marker }[]>([]);
  const poolRef = useRef<ProblemWithState[]>([]); // for replacing rejected tasks

  const [problems, setProblems] = useState<ProblemWithState[]>([]);
  const [loadingMap, setLoadingMap] = useState(true);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedProblem, setSelectedProblem] =
    useState<ProblemWithState | null>(null);
  const [filters, setFilters] = useState({ type: "toate", priority: "toate" });

  // Global timer for countdowns
  const [now, setNow] = useState<number>(Date.now());

  // User points (from backend — like TasksPage)
  const [userPoints, setUserPoints] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch user points (same logic as in TasksPage)
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.user && typeof data.user.points === "number") {
          setUserPoints(data.user.points);
        }
      })
      .catch((err) => console.error("Error fetching user points:", err));
  }, []);

  // on mount: load 10 random problems (from API or fallback) + keep the rest in poolRef
  const fetchProblems = useCallback(async () => {
    try {
      const res = await fetch("/api/problems");
      if (!res.ok) throw new Error("No API");
      const json = await res.json();

      const source: BaseProblem[] =
        Array.isArray(json.problems) && json.problems.length > 0
          ? json.problems
          : FALLBACK_PROBLEMS;

      const { initial, rest } = prepareProblems(source, 10);
      setProblems(initial);
      poolRef.current = rest;
    } catch {
      const { initial, rest } = prepareProblems(FALLBACK_PROBLEMS, 10);
      setProblems(initial);
      poolRef.current = rest;
    } finally {
      setLoadingData(false);
    }
  }, []);

  useEffect(() => {
    fetchProblems();
  }, [fetchProblems]);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: MAP_CENTER,
      zoom: 13,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer(TILE_DARK, { maxZoom: 19 }).addTo(map);

    const clusterGroup = (L as any).markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 45,
    });

    clusterGroup.addTo(map);
    clusterRef.current = clusterGroup;
    mapRef.current = map;
    setLoadingMap(false);
  }, []);

  const filteredProblems = useMemo(() => {
    return problems.filter((p) => {
      const okType = filters.type === "toate" || filters.type === p.type;
      const okPr =
        filters.priority === "toate" || filters.priority === p.priority;
      return okType && okPr;
    });
  }, [problems, filters]);

  // markers + popups
  useEffect(() => {
    if (!clusterRef.current || !mapRef.current) return;

    clusterRef.current.clearLayers();
    markersRef.current = [];

    filteredProblems.forEach((p) => {
      const markerIcon = L.divIcon({
        className: "marker-wrapper",
        iconSize: [22, 22],
        iconAnchor: [11, 11],
        html: `
          <div class="marker-pulse"
               style="background:${getPriorityColor(p.priority)};
                      border:2px solid #000;">
          </div>
        `,
      });

      const marker = L.marker([p.pos.lat, p.pos.lng], { icon: markerIcon });

      const popupHtml = `
        <div class="popup-card">
          <div class="popup-title">${escapeText(p.title)}</div>
          <div class="popup-desc">${escapeText(p.desc)}</div>
          <div class="popup-meta">
            <span class="popup-pill">${escapeText(p.type)}</span>
            <span class="popup-pill">${escapeText(
              getPriorityLabel(p.priority)
            )}</span>
            <span class="popup-id">#${p.id}</span>
          </div>
        </div>
     `;

      marker.bindPopup(popupHtml);
      marker.on("click", () => setSelectedProblem(p));

      clusterRef.current!.addLayer(marker);
      markersRef.current.push({ id: p.id, marker });
    });

    if (filteredProblems.length > 0) {
      const bounds = L.latLngBounds(
        filteredProblems.map((p) => [p.pos.lat, p.pos.lng])
      );
      mapRef.current!.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [filteredProblems]);

  const handleListClick = (problem: ProblemWithState) => {
    const found = markersRef.current.find((m) => m.id === problem.id);
    if (!found || !mapRef.current) return;
    mapRef.current.setView(found.marker.getLatLng(), 16, { animate: true });
    found.marker.openPopup();
    setSelectedProblem(problem);
  };

  const handleAccept = (id: number) => {
    setProblems((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              status: "accepted",
              acceptedAt: p.acceptedAt ?? Date.now(),
            }
          : p
      )
    );
  };

  const handleReject = (id: number) => {
    setProblems((prev) => {
      const remaining = prev.filter((p) => p.id !== id);

      if (poolRef.current.length > 0) {
        const [next, ...rest] = poolRef.current;
        poolRef.current = rest;
        return [...remaining, next];
      }

      return remaining;
    });
  };

  const handleImageUploaded = (id: number) => {
    setProblems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, hasImage: true } : p))
    );
  };

  // Finish quest and award points (like TasksPage.finishTask)
  const handleFinish = async (id: number) => {
    const problem = problems.find((p) => p.id === id);
    if (!problem || !problem.hasImage) return;

    try {
      const res = await fetch("/api/tasks/addPoints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ points: problem.points }),
      });
      const data = await res.json();

      if (data.user && typeof data.user.points === "number") {
        setUserPoints(data.user.points);
      }

      setProblems((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: "finished" } : p))
      );
    } catch (err) {
      console.error("Error updating points:", err);
    }
  };

  const totalText = loadingData
    ? "Loading..."
    : `Filtered problems: ${filteredProblems.length}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 pt-28 pb-20 text-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Map quests
              <span className="h-1 w-1 rounded-full bg-emerald-300" />
            </div>
            <h1 className="mt-3 text-3xl font-bold bg-gradient-to-b from-emerald-100 via-white to-emerald-200 text-transparent bg-clip-text drop-shadow-[0_0_24px_rgba(16,185,129,0.8)]">
              Timișoara — Cleanup Quests Map
            </h1>
            <p className="text-sm text-emerald-100/80 mt-1 max-w-xl">
              Every time you open the app, a new random set of 10 sanitation and
              eco-cleanup quests is loaded across the city. Accept a quest,
              clean the area, upload proof and earn points.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* POINTS BADGE — like Weekly Quests page */}
            <div className="px-4 py-2 rounded-xl bg-[#020617]/90 border border-[#1e293b] shadow-lg">
              <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                Your points
              </div>
              <div className="text-lg font-bold text-emerald-400">
                {userPoints}
              </div>
            </div>

            <button
              onClick={() =>
                mapRef.current?.setView(MAP_CENTER, 13, { animate: true })
              }
              className="px-4 py-2 bg-emerald-600 rounded-lg shadow hover:bg-emerald-700 duration-200 transition text-sm font-semibold"
            >
              Reset view
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* MAP */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-[#1d332e] shadow-[0_0_30px_rgba(15,23,42,0.9)] relative bg-slate-900/80 backdrop-blur-xl">
              {loadingMap && (
                <div className="absolute inset-0 bg-[#020617]/80 flex flex-col items-center justify-center gap-2 animate-pulse z-10">
                  <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm text-gray-300">Loading map...</span>
                </div>
              )}
              <div
                ref={mapContainerRef}
                style={{ height: "700px", width: "100%" }}
              />
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="bg-[#020617]/90 border border-[#1e293b] rounded-2xl p-4 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-emerald-50">
                Quests ({filteredProblems.length})
              </h2>
              <span className="text-[11px] text-gray-400">{totalText}</span>
            </div>

            {/* FILTERS */}
            <div className="text-sm text-gray-300 mb-3">
              <label>Filter by type</label>
              <select
                value={filters.type}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, type: e.target.value }))
                }
                className="w-full mt-1 px-2 py-1 bg-[#1e293b] text-gray-200 rounded outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="toate">All</option>
                <option value="salubritate">Cleaning / Sanitation</option>
                <option value="ecologizare">Eco-actions</option>
                <option value="deseuri">Waste dumping</option>
              </select>

              <label className="mt-3 block">Filter by priority</label>
              <select
                value={filters.priority}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, priority: e.target.value }))
                }
                className="w-full mt-1 px-2 py-1 bg-[#1e293b] text-gray-200 rounded outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="toate">All</option>
                <option value="mare">High</option>
                <option value="medie">Medium</option>
                <option value="mică">Low</option>
              </select>
            </div>

            {/* MISSIONS LIST */}
            <ul className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {filteredProblems.map((p) => {
                const status = p.status ?? "pending";
                const isAccepted = status === "accepted";
                const isFinished = status === "finished";
                const timeLeft =
                  isAccepted && p.acceptedAt
                    ? THREE_HOURS_MS - (now - p.acceptedAt)
                    : THREE_HOURS_MS;
                const timeLabel = formatTimeLeft(timeLeft);

                return (
                  <li
                    key={p.id}
                    onClick={() => handleListClick(p)}
                    className={`bg-[#1e293b] px-3 py-3 rounded-xl cursor-pointer hover:bg-[#243045] transition ${
                      isFinished ? "border border-emerald-500" : ""
                    }`}
                  >
                    <div className="flex gap-3">
                      {/* priority dot */}
                      <div className="mt-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: getPriorityColor(p.priority),
                          }}
                        />
                      </div>

                      {/* content + actions */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 className="text-white text-sm font-semibold">
                            {p.title}
                          </h3>
                          <span className="text-[10px] text-gray-400">
                            #{p.id}
                          </span>
                        </div>

                        <p className="text-[12px] text-gray-300 mt-1">
                          {p.desc}
                        </p>

                        {/* difficulty + points (POINT SYSTEM) */}
                        <div className="mt-2 flex items-center justify-between text-[11px] text-gray-400">
                          <span>
                            Difficulty:{" "}
                            {"★".repeat(p.difficulty).padEnd(3, "☆")}
                          </span>
                          <span className="text-emerald-400 font-semibold">
                            +{p.points} pts
                          </span>
                        </div>

                        {/* actions / timer */}
                        {status === "pending" && (
                          <div className="mt-3 flex justify-end gap-2">
                            <button
                              className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAccept(p.id);
                              }}
                            >
                              Accept quest
                            </button>
                            <button
                              className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#111827] hover:bg-[#1f2937] text-gray-200"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReject(p.id);
                              }}
                            >
                              Reject
                            </button>
                          </div>
                        )}

                        {status === "accepted" && (
                          <div className="mt-3 flex flex-col gap-2 text-xs text-gray-300">
                            <div className="flex items-center justify-between">
                              <span>Time left: {timeLabel}</span>
                            </div>

                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <label className="inline-flex items-center gap-2 cursor-pointer">
                                <span className="px-3 py-1 rounded-lg bg-[#111827] text-gray-200">
                                  Upload proof photo
                                </span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    e.stopPropagation();
                                    if (e.target.files && e.target.files[0]) {
                                      handleImageUploaded(p.id);
                                    }
                                  }}
                                />
                              </label>

                              <button
                                className={`px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-600 text-white ${
                                  !p.hasImage
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-emerald-700"
                                }`}
                                disabled={!p.hasImage}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!p.hasImage) return;
                                  handleFinish(p.id);
                                }}
                              >
                                Finish quest
                              </button>
                            </div>
                          </div>
                        )}

                        {isFinished && (
                          <div className="mt-3 text-xs text-emerald-400 font-semibold">
                            Quest completed ✅ You earned {p.points} points!
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>

      {/* STATISTICS CARD */}
      <div className="mt-30 w-full">
        <div className="bg-[#020617]/90 border border-[#1e293b] rounded-2xl p-6 shadow-xl max-w-7xl mx-auto backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-emerald-50 mb-6">
            General statistics — Timișoara (current set of 10 quests)
          </h2>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#1e293b] rounded-xl p-4 flex flex-col gap-1 shadow-md">
              <span className="text-gray-400 text-sm">Total quests</span>
              <span className="text-2xl font-bold text-white">
                {problems.length}
              </span>
            </div>

            <div className="bg-[#1e293b] rounded-xl p-4 flex flex-col gap-1 shadow-md">
              <span className="text-gray-400 text-sm">
                High-priority quests
              </span>
              <span className="text-2xl font-bold text-red-400">
                {problems.filter((p) => p.priority === "mare").length}
              </span>
            </div>

            <div className="bg-[#1e293b] rounded-xl p-4 flex flex-col gap-1 shadow-md">
              <span className="text-gray-400 text-sm">
                Average resolution time (estimate)
              </span>
              <span className="text-2xl font-bold text-yellow-400">
                ~ 3.4 days
              </span>
            </div>

            <div className="bg-[#1e293b] rounded-xl p-4 flex flex-col gap-1 shadow-md">
              <span className="text-gray-400 text-sm">
                Most affected zones (current set)
              </span>

              {Object.entries(
                problems.reduce((acc: Record<string, number>, p) => {
                  const zone = `${p.pos.lat.toFixed(2)}, ${p.pos.lng.toFixed(
                    2
                  )}`;
                  acc[zone] = (acc[zone] || 0) + 1;
                  return acc;
                }, {})
              )
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3)
                .map(([zone, count]) => (
                  <span key={zone} className="text-[13px] text-gray-300">
                    • Zone {zone} — {count} quests
                  </span>
                ))}
            </div>
          </div>

          {/* DONUT + BAR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-gray-300 mb-3 font-medium">
                Overall distribution
              </span>

              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full border-[12px] border-green-400/40" />
                <div className="absolute inset-0 rounded-full border-[12px] border-yellow-400/40 rotate-45" />
                <div className="absolute inset-0 rounded-full border-[12px] border-red-400/40 rotate-90" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {problems.length}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-gray-300 mb-3 font-medium block">
                Quest priority split
              </span>

              <div className="mb-4">
                <p className="text-sm text-red-400">High</p>
                <div className="h-3 bg-red-400/20 rounded">
                  <div
                    className="h-3 bg-red-400 rounded"
                    style={{
                      width: `${
                        problems.length
                          ? (problems.filter((p) => p.priority === "mare")
                              .length /
                              problems.length) *
                            100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-yellow-400">Medium</p>
                <div className="h-3 bg-yellow-400/20 rounded">
                  <div
                    className="h-3 bg-yellow-400 rounded"
                    style={{
                      width: `${
                        problems.length
                          ? (problems.filter((p) => p.priority === "medie")
                              .length /
                              problems.length) *
                            100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-green-400">Low</p>
                <div className="h-3 bg-green-400/20 rounded">
                  <div
                    className="h-3 bg-green-400 rounded"
                    style={{
                      width: `${
                        problems.length
                          ? (problems.filter((p) => p.priority === "mică")
                              .length /
                              problems.length) *
                            100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HEATMAP CARD — uses the same 10 quests */}
      <HeatmapCard problems={problems} />

      {/* MARKER ANIMATIONS + POPUP CSS */}
      <style>{`
        .marker-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marker-pulse {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, .5); }
          70% { box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
          100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }

        .popup-card {
          background: #0f172a;
          padding: 10px;
          border-radius: 10px;
          color: #e2f0e8;
        }
        .popup-title {
          font-weight: bold;
          font-size: 13px;
        }
        .popup-desc {
          font-size: 12px;
          margin-top: 4px;
        }
        .popup-meta {
          margin-top: 6px;
          display: flex;
          gap: 6px;
          font-size: 10px;
        }
        .popup-pill {
          background: #1e293b;
          padding: 3px 6px;
          border-radius: 999px;
        }
        .popup-id {
          margin-left: auto;
          color: #4ade80;
        }

        .leaflet-popup-content-wrapper {
          background: #0f172a !important;
          color: #e2f0e8 !important;
          border-radius: 14px !important;
          border: 1px solid #1e293b !important;
          box-shadow: 0 6px 20px rgba(0,0,0,0.45) !important;
        }
        .leaflet-popup-tip {
          background: #0f172a !important;
          border: 1px solid #1e293b !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          padding: 0 !important;
        }

        .marker-cluster,
        .marker-cluster div,
        .marker-cluster span {
          background-image: none !important;
          box-shadow: none !important;
        }

        .marker-cluster {
          background: none !important;
          border: none !important;
        }

        .marker-cluster div {
          width: 40px !important;
          height: 40px !important;
          background: rgba(0, 153, 102, 0.35) !important;
          border-radius: 50% !important;
          border: 3px solid rgba(42, 117, 92, 0.45) !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          color: white !important;
          font-size: 16px !important;
          font-weight: 600 !important;
        }

        .marker-cluster span {
          line-height: 40px !important;
          font-size: 16px !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
}
