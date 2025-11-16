"use client";

import { useEffect, useState } from "react";

export default function ProfileSettingsPage() {
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load current user data
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          setLoading(false);
          return;
        }
        const data = await res.json();
        const user = data.user;

        if (user) {
          setUsername(user.username || "");
          setAvatarUrl(user.avatarUrl || "");
        }
      } catch (err) {
        console.error("Error loading user in settings:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    setError(null);

    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, avatarUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to save profile.");
      } else {
        setMessage("Profile updated successfully!");
      }
    } catch (err) {
      console.error("Error saving profile:", err);
      setError("Unexpected error.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <p className="text-sm text-gray-400">Loading profile settings…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-10 flex justify-center">
      <div className="w-full max-w-lg bg-[#020617] border border-[#1e293b] rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold mb-2">Profile settings</h1>
        <p className="text-xs text-gray-400 mb-6">
          Customize your username and avatar. These will appear on leaderboards
          and your profile.
        </p>

        <div className="space-y-4 text-sm">
          <div>
            <label className="block text-gray-300 mb-1">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@eco.hero"
              className="w-full rounded-lg bg-[#020617] border border-[#1e293b] px-3 py-2 outline-none text-sm text-gray-100 placeholder:text-gray-500 focus:border-emerald-500"
            />
            <p className="text-[11px] text-gray-500 mt-1">
              3–20 characters. Unique across the platform.
            </p>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Avatar URL</label>
            <input
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="https://example.com/avatar.png"
              className="w-full rounded-lg bg-[#020617] border border-[#1e293b] px-3 py-2 outline-none text-sm text-gray-100 placeholder:text-gray-500 focus:border-emerald-500"
            />
            <p className="text-[11px] text-gray-500 mt-1">
              For now, paste an image URL. (Later you can add an upload system.)
            </p>
          </div>

          {avatarUrl && (
            <div className="mt-3">
              <p className="text-[11px] text-gray-400 mb-1">Avatar preview:</p>
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#1e293b]">
                <img
                  src={avatarUrl}
                  alt="Avatar preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {error && (
          <p className="mt-4 text-xs text-red-400 bg-red-950/30 border border-red-900/60 rounded-md px-3 py-2">
            {error}
          </p>
        )}
        {message && (
          <p className="mt-4 text-xs text-emerald-300 bg-emerald-950/30 border border-emerald-900/60 rounded-md px-3 py-2">
            {message}
          </p>
        )}

        <button
          onClick={handleSave}
          disabled={saving}
          className={`mt-6 w-full py-2.5 rounded-full text-sm font-semibold 
            bg-emerald-600 hover:bg-emerald-500 transition 
            disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>
    </div>
  );
}
