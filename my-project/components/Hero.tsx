"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { useUser } from "../app/context/UserContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ECO PARTICLES
const particles = [
  { img: "/images/leaf-2.png", size: 40 },
  { img: "/images/leaf-3.png", size: 40 },
  { img: "/images/recycle-icon.png", size: 28 },
  { img: "/images/leaf.png", size: 22 },
  { img: "/images/leaf.png", size: 35 },
];

const FloatingParticle = ({ img, size, delay }: any) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: [-15, 15, -15], opacity: [0.2, 0.7, 0.2] }}
    transition={{
      repeat: Infinity,
      duration: 8 + Math.random() * 4,
      delay,
      ease: "easeInOut",
    }}
    className="absolute"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  >
    <Image
      src={img}
      alt="particle"
      width={size}
      height={size}
      className="opacity-60 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
    />
  </motion.div>
);

const Hero = () => {
  const { user } = useUser();

  const username =
    (user as any)?.username ||
    (user as any)?.name ||
    ((user as any)?.email ? (user as any).email.split("@")[0] : null);

  const subtitleText = username
    ? "Glad to have you back. Ready for new cleanup quests around Timișoara?"
    : "Let’s clean Timișoara — together.";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-5 sm:px-6 pt-[8rem] md:pt-[6rem]"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />

      {/* MAP BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        {/* GREEN OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/30 via-emerald-800/30 to-emerald-950/70 mix-blend-multiply" />

        {/* SPOTLIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_70%)]" />

        {/* PULSING DOTS */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300/50"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
              </span>
            </div>
          ))}
        </div>

        {/* ECO PARTICLES */}
        {particles.map((p, i) => (
          <FloatingParticle key={i} img={p.img} size={p.size} delay={i * 0.7} />
        ))}
      </div>

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-20 w-full max-w-5xl"
      >
        <div
          className="
            mx-auto max-w-4xl 
            bg-white/5 backdrop-blur-2xl border border-emerald-300/20 
            rounded-3xl px-6 sm:px-10 py-10 sm:py-14 
            shadow-[0_0_26px_rgba(16,185,129,0.45)]
            hover:shadow-[0_0_36px_rgba(16,185,129,0.7)]
            transition-all duration-500
          "
        >
          {/* TOP BADGE */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-300/40 px-4 py-1 text-xs font-semibold text-emerald-100/90">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              Community-driven cleanup platform
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-900/60 border border-slate-700/40 px-3 py-1 text-[11px] text-slate-200/90">
              Live quests • Points • Rewards
            </span>
          </div>

          {/* TITLE */}
          {!username ? (
            // Default title (not logged in)
            <h1
              className={`
                text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight 
                bg-gradient-to-b from-emerald-100 via-white to-emerald-100 
                bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]
                ${montserrat.className}
              `}
            >
              CleanTM ♻️
            </h1>
          ) : (
            // Personalized title (logged in) – softer username highlight
            <h1
              className={`
                text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight 
                text-emerald-50 drop-shadow-[0_0_10px_rgba(16,185,129,0.35)]
                flex flex-wrap items-center justify-center gap-x-2 gap-y-1
                ${montserrat.className}
              `}
            >
              <span className="opacity-80">Welcome</span>
              <span className="relative inline-flex items-center">
                <span
                  className="
                    mx-1 px-3 py-1 rounded-2xl
                    bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-200
                    text-emerald-900
                    shadow-[0_0_12px_rgba(16,185,129,0.45)]
                    text-[1.05em]
                  "
                >
                  {username}
                </span>
                {/* very soft underline */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[60%] h-[1.5px] rounded-full bg-emerald-200/50 blur-[2px]" />
              </span>
              <span className="opacity-80">to CleanTM ♻️</span>
            </h1>
          )}

          <p className="mt-4 text-lg sm:text-2xl font-semibold text-emerald-50/90">
            {subtitleText}
          </p>

          <p className="mt-3 text-sm sm:text-base text-emerald-100/80 max-w-2xl mx-auto">
            Join a city-wide movement to report trash, accept cleanup quests,
            earn points and unlock eco rewards. Every photo, every bag of trash,
            every quest completed keeps Timișoara greener.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col items-center sm:flex-row justify-center gap-5 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Link href="/AboutUs">
                <Button
                  text="About us"
                  className="text-lg font-semibold px-8 py-4 shadow-xl hover:shadow-emerald-300/50 transition-all"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Link href="/Participate">
                <Button
                  text="Participate"
                  className="text-lg font-semibold px-8 py-4 shadow-xl bg-emerald-500/90 hover:bg-emerald-400 text-slate-950 border border-emerald-200 hover:shadow-emerald-300/60 transition-all"
                />
              </Link>
            </motion.div>
          </div>

          {/* STATS / HIGHLIGHTS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-emerald-100/90">
            <div className="rounded-2xl bg-slate-950/50 border border-emerald-400/20 px-4 py-3 flex flex-col gap-1">
              <span className="text-emerald-200 font-semibold text-sm">
                Live quest map
              </span>
              <span className="text-emerald-100/80">
                Discover hotspots of litter and join nearby cleanup missions in
                seconds.
              </span>
            </div>
            <div className="rounded-2xl bg-slate-950/50 border border-emerald-400/20 px-4 py-3 flex flex-col gap-1">
              <span className="text-emerald-200 font-semibold text-sm">
                Points & rewards
              </span>
              <span className="text-emerald-100/80">
                Earn points for verified cleanups and exchange them for
                eco-friendly rewards.
              </span>
            </div>
            <div className="rounded-2xl bg-slate-950/50 border border-emerald-400/20 px-4 py-3 flex flex-col gap-1">
              <span className="text-emerald-200 font-semibold text-sm">
                Team up with friends
              </span>
              <span className="text-emerald-100/80">
                Turn city cleanups into friendly challenges and climb the
                leaderboard together.
              </span>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-6 flex justify-center">
          <div className="flex flex-col items-center text-[11px] text-emerald-100/70">
            <span className="mb-1">Scroll to explore</span>
            <span className="h-8 w-[1px] bg-gradient-to-b from-emerald-200/70 to-transparent animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
