"use client";
import React from "react";

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton({
  text,
  onClick,
  className = "",
}: AnimatedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-block flex-1 min-w-fit px-3 py-2 border-2  text-green-500 border-t-green-300 border-b-green-400 border-l-green-400 border-r-green-500 rounded-full font-bold text-sm overflow-hidden cursor-pointer hover:text-white  duration-300 ${className}`}
    >
      {text}
      {/* Background animat */}
      <span className="absolute top-0 left-0 w-0 h-full bg-[#12af49] transition-all duration-900 group-hover:w-full z-[-1]"></span>
    </button>
  );
}
