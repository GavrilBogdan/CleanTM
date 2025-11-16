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
      <div className="min-h-screen px-12 py-10 flex flex-col items-center mt-[7rem]">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
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
