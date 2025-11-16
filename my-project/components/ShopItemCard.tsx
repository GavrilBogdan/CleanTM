"use client";
import React, { useState } from "react";
import confetti from "canvas-confetti";

interface ShopItemCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  };
  userPoints: number;
  onBuy: (itemId: number) => Promise<boolean>; // return success flag
}

const ShopItemCard: React.FC<ShopItemCardProps> = ({
  item,
  userPoints,
  onBuy,
}) => {
  const canBuy = userPoints >= item.price;
  const [isBuying, setIsBuying] = useState(false);

  const handleBuy = async () => {
    if (!canBuy || isBuying) return;

    setIsBuying(true);
    const success = await onBuy(item.id); // expects a boolean
    setIsBuying(false);

    if (success) {
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    // wrapper ca să se întindă pe toată înălțimea coloanei
    <div className="h-full flex">
      {/* cardul efectiv – gri, flex-col, împinge butonul jos */}
      <div className="relative flex flex-col items-center h-full w-full bg-[#5b6470] rounded-[32px] shadow-[0_18px_0_rgba(0,0,0,0.55)] border border-[#7b8490]/60 px-8 py-6">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-32 h-32 object-contain mb-6 mt-2 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
        />

        <h3 className="text-2xl font-extrabold text-[#4db874] mb-2 text-center">
          {item.name}
        </h3>

        <p className="text-[#5acc84] text-center mb-4">{item.description}</p>

        <p className="text-[#46e881] font-extrabold mb-2 flex items-center gap-2">
          <span className="text-sky-300 text-xl">💎</span>
          <span>{item.price}</span>
        </p>

        {/* împinge butonul la baza cardului */}
        <div className="mt-auto w-full">
          <button
            onClick={handleBuy}
            disabled={!canBuy || isBuying}
            className={`w-full py-3 rounded-full font-bold text-white shadow-md transition-all duration-300 text-sm
              ${
                canBuy
                  ? "bg-[#3bab50] hover:bg-[#197e00] hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)] cursor-pointer"
                  : "bg-[#c3c7d0] text-[#5b6470] cursor-not-allowed"
              }`}
          >
            {isBuying ? "Buying..." : canBuy ? "Redeem" : "Not enough points"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopItemCard;
