"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InventoryPage() {
  const [purchases, setPurchases] = useState<any[]>([]);
  const userId = 1; // Replace with context user ID

  useEffect(() => {
    fetch(`/api/shop/getPurchases?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setPurchases(data.purchases));
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-12 py-10 flex flex-col items-center bg-gradient-to-b from-green-50 to-purple-50">
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          🎒 Your Inventory
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {purchases.length === 0 && (
            <p className="text-green-700">You haven't bought anything yet!</p>
          )}
          {purchases.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center p-4 bg-white/80 rounded-2xl shadow-lg w-64"
            >
              <img
                src={p.item.image}
                className="w-32 h-32 object-cover rounded-xl mb-3"
              />
              <h3 className="font-bold text-green-800 text-lg">
                {p.item.name}
              </h3>
              <p className="text-green-700 text-sm">{p.item.description}</p>
              <p className="text-yellow-500 font-bold text-xl">
                💎 {p.item.cost}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
