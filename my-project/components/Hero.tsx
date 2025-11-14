"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Button from "@/components/Button";
import { motion } from "framer-motion";

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
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: [-20, 20, -20], opacity: [0.4, 1, 0.4] }}
    transition={{
      repeat: Infinity,
      duration: 6 + Math.random() * 4,
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
      className="opacity-70 drop-shadow-[0_0_12px_rgba(0,255,120,0.7)]"
    />
  </motion.div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/map-bg.png"
          alt="Map background"
          fill
          className="object-cover grayscale opacity-40"
        />

        {/* GREEN OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/60 via-green-700/50 to-emerald-900/70 mix-blend-multiply" />

        {/* SPOTLIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_75%)]" />

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/70"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
          ))}
        </div>

        {/* ECO PARTICLES */}
        {particles.map((p, i) => (
          <FloatingParticle key={i} img={p.img} size={p.size} delay={i * 0.8} />
        ))}
      </div>

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-full max-w-3xl px-6 text-center 
        bg-white/10 backdrop-blur-2xl border border-white/20 
        rounded-3xl py-14 shadow-[0_0_25px_rgba(0,255,150,0.7)] 
        hover:shadow-[0_0_40px_rgba(0,255,150,1)] 
        transition-all duration-500"
      >
        <h1
          className={` text-5xl sm:text-7xl font-bold drop-shadow-[0_0_20px_rgba(0,255,150,0.9)]
          text-green-50 ${montserrat.className}`}
        >
          CleanTM ♻️
        </h1>

        <p className="mt-4 text-2xl font-semibold text-green-100">
          Let’s clean Timișoara — together.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <Link href="#">
            <Button
              text="About us"
              className="text-lg font-semibold px-8 py-4 shadow-xl hover:scale-105 transition"
            />
          </Link>
          <Link href="#">
            <Button
              text="Participate"
              className="text-lg font-semibold px-8 py-4 shadow-xl hover:scale-105 transition"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
