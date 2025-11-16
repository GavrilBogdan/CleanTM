"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopItemCard from "@/components/ShopItemCard";

export default function ShopPage() {
  const [items, setItems] = useState<any[]>([]);
  const [userPoints, setUserPoints] = useState<number>(0);

  // Fetch items and current user points
  useEffect(() => {
    fetch("/api/shop/getItems")
      .then((res) => res.json())
      .then((data) => setItems(data.items));

    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUserPoints(data.user?.points || 0));
  }, []);

  // Handle purchase
  const handleBuy = async (itemId: number) => {
    try {
      const res = await fetch("/api/shop/buyItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });

      const data = await res.json();

      if (data.success) {
        setUserPoints(data.pointsLeft);
        return true; // signal success for confetti
      } else {
        alert(data.error);
        return false;
      }
    } catch (err) {
      console.error("Error buying item:", err);
      alert("Something went wrong.");
      return false;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 pt-32 pb-20 px-5 md:px-10 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Rewards shop
                <span className="h-1 w-1 rounded-full bg-emerald-300" />
              </div>
              <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-b from-emerald-100 via-white to-emerald-200 text-transparent bg-clip-text drop-shadow-[0_0_24px_rgba(16,185,129,0.8)]">
                🎁 CleanTM Rewards
              </h1>
              <p className="mt-2 text-sm md:text-base text-emerald-100/80 max-w-xl">
                Spend the points you’ve earned from cleanup quests on perks,
                discounts and small rewards from our partners.
              </p>
            </div>

            {/* Points badge */}
            <div className="relative mt-4 md:mt-0 rounded-2xl bg-slate-900/80 border border-emerald-400/60 px-6 py-4 shadow-[0_0_35px_rgba(16,185,129,0.7)] backdrop-blur-xl min-w-[220px] text-center md:text-left">
              <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-200">
                Your points
              </div>
              <div className="mt-1 text-3xl font-extrabold text-emerald-50">
                💎 {userPoints}
              </div>
              <div className="mt-1 text-[11px] text-emerald-200/80">
                Earn more by completing weekly quests and map missions.
              </div>
              <div className="pointer-events-none absolute inset-x-6 -top-2 h-[1px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-80" />
            </div>
          </header>

          {/* Content */}
          {items.length === 0 ? (
            <div className="mt-10 flex justify-center">
              <div className="px-6 py-4 rounded-2xl bg-slate-900/80 border border-emerald-400/30 text-sm text-emerald-100 shadow-lg shadow-emerald-900/50">
                No rewards available yet. Check back soon as partners add new
                items.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
              {items.map((item) => (
                <div key={item.id} className="h-full">
                  <ShopItemCard
                    item={item}
                    userPoints={userPoints}
                    onBuy={handleBuy}
                  />
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
