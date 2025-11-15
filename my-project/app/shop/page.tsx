"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopItemCard from "@/components/ShopItemCard";

export default function ShopPage() {
  const [items, setItems] = useState<any[]>([]);
  const [userPoints, setUserPoints] = useState<number>(0);

  const userId = 1; // Replace with context user ID

  useEffect(() => {
    fetch("/api/shop/getItems")
      .then((res) => res.json())
      .then((data) => setItems(data.items));

    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUserPoints(data.user?.points || 0));
  }, []);

  const handleBuy = async (itemId: number) => {
    const res = await fetch("/api/shop/buyItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId, userId }),
    });
    const data = await res.json();

    if (data.success) setUserPoints(data.pointsLeft);
    else alert(data.error);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-12 py-10 flex flex-col items-center bg-gradient-to-b from-purple-50 to-green-50">
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          🎁 Rewards Shop
        </h1>
        <p className="text-green-700 font-semibold mb-5">
          Your Points: 💎 {userPoints}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <ShopItemCard
              key={item.id}
              item={item}
              userPoints={userPoints}
              onBuy={handleBuy}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
