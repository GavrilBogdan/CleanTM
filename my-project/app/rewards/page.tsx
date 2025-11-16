"use client";
import { useEffect, useState } from "react";
import { Gift, Coins } from "lucide-react";

export default function RewardsPage() {
  const [user, setUser] = useState<any>(null);
  const [items] = useState([
    { id: 1, name: "Coffee Coupon", cost: 50 },
    { id: 2, name: "Free Flower Bouquet", cost: 200 },
    { id: 3, name: "Discount 10%", cost: 120 },
  ]);
  const [message, setMessage] = useState("");

  // Fetch user (points)
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      if (data.user) setUser(data.user);
    };
    fetchUser();
  }, []);

  const buyItem = async (item: any) => {
    if (!user) return;

    const res = await fetch("/api/rewards/buy", {
      method: "POST",
      body: JSON.stringify({ itemId: item.id }), // unchanged backend payload
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(`You bought ${item.name}!`);
      setUser({ ...user, points: data.points });
    } else {
      setMessage(data.error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-emerald-50">
        <div className="px-8 py-6 rounded-3xl bg-slate-900/80 border border-emerald-400/40 backdrop-blur-xl shadow-[0_0_35px_rgba(16,185,129,0.6)] flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Loading your rewards profile...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-emerald-50 px-5 sm:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Rewards shop
              <span className="h-1 w-1 rounded-full bg-emerald-300" />
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-emerald-100 via-white to-emerald-200 text-transparent bg-clip-text drop-shadow-[0_0_24px_rgba(16,185,129,0.8)]">
              Redeem your impact
            </h1>
            <p className="mt-2 text-sm sm:text-base text-emerald-100/80 max-w-xl">
              Use the points you’ve earned from cleanup quests to unlock small
              rewards from local partners. Every reward is a “thank you” for
              keeping Timișoara clean.
            </p>
          </div>

          {/* Points card */}
          <div className="relative rounded-2xl bg-slate-900/80 border border-emerald-400/60 px-6 py-4 shadow-[0_0_35px_rgba(16,185,129,0.7)] backdrop-blur-xl min-w-[220px]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/20 border border-emerald-300/60 flex items-center justify-center shadow-[0_0_18px_rgba(16,185,129,0.9)]">
                <Coins className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-200">
                  Your points
                </div>
                <div className="text-2xl font-extrabold text-emerald-50">
                  {user.points}
                </div>
              </div>
            </div>
            <div className="mt-2 text-[11px] text-emerald-200/80">
              Earn more by completing verified cleanup quests.
            </div>
            <div className="pointer-events-none absolute inset-x-6 -top-2 h-[1px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-80" />
          </div>
        </header>

        {/* Message */}
        {message && (
          <div className="mb-6 rounded-2xl border border-amber-300/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100 shadow-md shadow-amber-900/40">
            {message}
          </div>
        )}

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {items.map((item) => {
            const notEnough = user.points < item.cost;
            return (
              <div
                key={item.id}
                className="relative p-6 rounded-3xl bg-slate-900/70 border border-emerald-400/25 backdrop-blur-xl shadow-[0_0_30px_rgba(15,23,42,0.9)] hover:shadow-[0_0_40px_rgba(16,185,129,0.65)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Decorative icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-2xl bg-emerald-500/15 border border-emerald-300/40 flex items-center justify-center">
                      <Gift className="w-5 h-5 text-emerald-200" />
                    </div>
                    <h2 className="text-lg font-semibold text-emerald-50">
                      {item.name}
                    </h2>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                    Reward #{item.id}
                  </span>
                </div>

                <p className="text-sm text-emerald-100/80 mb-4">
                  Cost:{" "}
                  <span className="font-semibold text-emerald-200">
                    {item.cost} points
                  </span>
                </p>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-[11px] text-emerald-200/80 mb-1">
                    <span>Your progress</span>
                    <span>
                      {Math.min(
                        100,
                        Math.floor((user.points / item.cost) * 100)
                      )}
                      %
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                      style={{
                        width: `${Math.min(
                          100,
                          (user.points / item.cost) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1" />

                <button
                  onClick={() => buyItem(item)}
                  className={`mt-4 w-full px-4 py-2.5 rounded-full text-sm font-semibold transition-all 
                    ${
                      notEnough
                        ? "bg-slate-700 text-slate-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-800/40 hover:shadow-emerald-500/60 hover:scale-[1.03]"
                    }`}
                  disabled={notEnough}
                >
                  {notEnough
                    ? "Not enough points"
                    : `Redeem for ${item.cost} pts`}
                </button>

                {notEnough && (
                  <p className="mt-2 text-[11px] text-emerald-200/80">
                    Complete a few more quests to unlock this reward.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
