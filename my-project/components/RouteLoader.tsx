"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./preloader.css";

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="preloader">
      {/* BACKGROUND GLOW */}
      <div className="bg-glow"></div>

      {/* PARTICLES */}
      <div className="particles">
        {Array.from({ length: 25 }).map((_, i) => {
          const style = {
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          };
          return <div key={i} className="particle" style={style} />;
        })}
      </div>

      {/* MAIN LOGO TEXT */}
      <svg width="600" height="250">
        <defs>
          <filter id="neonGlow">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00ff91" />
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="12"
              floodColor="#00ff91"
            />
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="20"
              floodColor="#00ff91"
            />
          </filter>

          <linearGradient id="shineGrad">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        <text
          className="logo-text"
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#neonGlow)"
        >
          CleanTM
        </text>

        <rect className="shine" x="-250" y="0" width="250" height="250" />
      </svg>
    </div>
  );
}
