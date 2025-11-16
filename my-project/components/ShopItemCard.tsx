"use client";
import React from "react";

interface ShopItemCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  };
  userPoints: number;
  onBuy: (itemId: number) => void;
}

const ShopItemCard: React.FC<ShopItemCardProps> = ({
  item,
  userPoints,
  onBuy,
}) => {
  const canBuy = userPoints >= item.price;

  return (
    <div className="relative flex flex-col items-center bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-32 h-32 object-contain mb-4"
      />
      <h3 className="text-xl font-bold text-green-800 mb-2">{item.name}</h3>
      <p className="text-green-700 text-center mb-4">{item.description}</p>
      <p className="text-green-900 font-extrabold mb-4">💎 {item.price}</p>

      <button
        onClick={() => canBuy && onBuy(item.id)}
        className={`w-full py-2 rounded-full font-bold text-white shadow-md transition-all duration-300
          ${
            canBuy
              ? "bg-green-600 hover:bg-green-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        {canBuy ? "Buy" : "Not enough points"}
      </button>
    </div>
  );
};

export default ShopItemCard;
