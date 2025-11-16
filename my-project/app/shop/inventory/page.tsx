"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InventoryPage() {
  const [purchases, setPurchases] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPurchases() {
      try {
        // Get current user from JWT
        const meRes = await fetch("/api/auth/me");
        const meData = await meRes.json();
        const userId = meData.user?.id;
        if (!userId) return;

        // Fetch purchases for this user
        const res = await fetch("/api/shop/getPurchases");
        const data = await res.json();
        setPurchases(data.purchases || []);
      } catch (err) {
        console.error("Error fetching purchases:", err);
      }
    }

    fetchPurchases();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 pt-32 pb-20 px-5 md:px-10 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Inventory
                <span className="h-1 w-1 rounded-full bg-emerald-300" />
              </div>
              <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-b from-emerald-100 via-white to-emerald-200 text-transparent bg-clip-text drop-shadow-[0_0_24px_rgba(16,185,129,0.8)]">
                🎒 Your Inventory
              </h1>
              <p className="mt-2 text-sm md:text-base text-emerald-100/80 max-w-xl">
                All the rewards you have redeemed so far. Show these to partners
                or use them according to the reward instructions.
              </p>
            </div>
          </header>

          {/* Empty state */}
          {purchases.length === 0 && (
            <div className="mt-10 flex justify-center">
              <div className="px-6 py-4 rounded-2xl bg-slate-900/80 border border-emerald-400/30 text-sm md:text-base text-emerald-100 shadow-lg shadow-emerald-900/50">
                You haven&apos;t bought anything yet! Complete cleanup quests,
                earn points and redeem them in the shop to see items here.
              </div>
            </div>
          )}

          {/* Inventory grid */}
          {purchases.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {purchases.map((p: any) => (
                <div
                  key={p.id}
                  className="h-full flex rounded-3xl bg-slate-900/70 border border-emerald-400/25 backdrop-blur-xl shadow-[0_0_30px_rgba(15,23,42,0.9)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:-translate-y-2 transition-all duration-300 p-1"
                >
                  <div className="flex flex-col items-center w-full h-full rounded-3xl bg-slate-900/60 px-6 py-6">
                    <img
                      src={p.item.imageUrl || ""}
                      alt={p.item.name}
                      className="w-28 h-28 object-contain mb-4 drop-shadow-[0_10px_22px_rgba(0,0,0,0.45)]"
                    />
                    <h3 className="font-bold text-lg text-emerald-50 text-center">
                      {p.item.name}
                    </h3>
                    <p className="mt-2 text-sm text-emerald-100/80 text-center">
                      {p.item.description}
                    </p>

                    <div className="mt-3 mb-2 flex items-center gap-2 text-emerald-100 font-semibold">
                      <span className="text-sky-300 text-xl">💎</span>
                      <span>{p.item.price}</span>
                    </div>

                    {/* optional extra info: date, etc dacă ai în p */}
                    {p.createdAt && (
                      <p className="text-[11px] text-emerald-200/70 mt-1">
                        Purchased on{" "}
                        {new Date(p.createdAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
