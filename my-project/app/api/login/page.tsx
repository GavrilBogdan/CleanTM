"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password || loading) return;
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage(`❌ ${data.error || "Login failed"}`);
      } else {
        setMessage("✅ Login successful! Redirecting...");
        setTimeout(() => router.push("/"), 600);
      }
    } catch (err) {
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-teal-500/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute top-10 left-16 h-1 w-1 rounded-full bg-emerald-300 opacity-80 float-slow" />
        <span className="absolute top-32 right-24 h-1 w-1 rounded-full bg-emerald-200 opacity-70 float-slower" />
        <span className="absolute bottom-24 left-20 h-1 w-1 rounded-full bg-emerald-400 opacity-80 float-slow" />
        <span className="absolute bottom-10 right-10 h-1 w-1 rounded-full bg-emerald-300 opacity-80 float-slower" />
        <span className="absolute top-1/2 left-1/4 h-1 w-1 rounded-full bg-emerald-200 opacity-70 float-slow" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md px-8 py-10 rounded-3xl bg-white/5 border border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.35)] backdrop-blur-2xl">
        {/* Badge / title */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Welcome back
            </p>
            <h1 className="mt-1 text-3xl font-extrabold bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent tracking-wide">
              Sign in to CleanTM
            </h1>
          </div>
          <div className="h-10 w-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shadow-lg shadow-emerald-500/40">
            <span className="text-xl">♻️</span>
          </div>
        </div>

        <p className="text-xs text-slate-300/80 mb-6">
          Continue your cleanup quests, earn points and unlock rewards.
        </p>

        {/* Inputs */}
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-200">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full rounded-2xl border border-emerald-500/30 bg-slate-900/40 px-4 py-3 text-sm text-emerald-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40 transition"
              />
              <div className="pointer-events-none absolute inset-px rounded-2xl border border-emerald-400/10 blur-[1px]" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-200">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full rounded-2xl border border-emerald-500/30 bg-slate-900/40 px-4 py-3 text-sm text-emerald-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40 transition"
              />
              <div className="pointer-events-none absolute inset-px rounded-2xl border border-emerald-400/10 blur-[1px]" />
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <p className="mt-4 text-xs font-medium text-emerald-100">{message}</p>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={!email || !password || loading}
          className={`
            group relative mt-6 w-full overflow-hidden rounded-2xl border border-emerald-400/60
            bg-gradient-to-r from-emerald-500/80 via-emerald-600 to-teal-500
            py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-emerald-500/40
            transition-all duration-300
            hover:shadow-emerald-400/60 hover:-translate-y-[1px]
            disabled:opacity-60 disabled:cursor-not-allowed
          `}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading && (
              <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-transparent animate-spin" />
            )}
            {loading ? "Signing in..." : "Sign In"}
          </span>
          <span
            className="
              pointer-events-none absolute inset-0 translate-x-[-100%]
              bg-gradient-to-r from-white/30 via-white/40 to-white/10
              opacity-0 transition-all duration-500
              group-hover:translate-x-0 group-hover:opacity-100
            "
          />
        </button>

        {/* Footer */}
        <div className="mt-6 flex flex-col items-center gap-2 text-xs text-slate-300/80">
          <p>
            Don&apos;t have an account?{" "}
            <button
              className="font-semibold text-emerald-300 hover:text-emerald-200 hover:underline underline-offset-4 transition"
              onClick={() => router.push("/api/signup")}
            >
              Sign Up
            </button>
          </p>
          <p className="text-[11px] text-slate-500">
            By signing in you continue your participation in CleanTM quests.
          </p>
        </div>
      </div>

      {/* Local styles for particle animation */}
      <style>{`
        @keyframes float-slow {
          0% { transform: translate3d(0, 0, 0); opacity: 0.4; }
          50% { transform: translate3d(10px, -20px, 0); opacity: 0.9; }
          100% { transform: translate3d(0, 0, 0); opacity: 0.4; }
        }
        .float-slow {
          animation: float-slow 18s ease-in-out infinite;
        }
        .float-slower {
          animation: float-slow 26s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
