"use client";
import React from "react";

interface ShopItemCardProps {
  item: any;
  userPoints: number;
  onBuy: (id: number) => void;
}

const ShopItemCard: React.FC<ShopItemCardProps> = ({
  item,
  userPoints,
  onBuy,
}) => {
  const affordable = userPoints >= item.cost;

  return (
    <div className="flex flex-col items-center p-4 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer w-64">
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 object-cover rounded-xl mb-3"
      />
      <h3 className="font-bold text-lg text-green-800 mb-1">{item.name}</h3>
      <p className="text-sm text-green-700 mb-2">{item.description}</p>
      <p className="text-yellow-500 font-bold text-xl mb-2">💎 {item.cost}</p>
      <button
        disabled={!affordable}
        onClick={() => onBuy(item.id)}
        className={`w-full py-2 rounded-full font-bold text-white transition ${
          affordable
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {affordable ? "Buy 🛒" : "Not enough points"}
      </button>
    </div>
  );
};

export default ShopItemCard;
