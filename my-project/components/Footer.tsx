"use client";
import React from "react";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-300 pt-16 pb-15 sm:pb-10 ">
      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* BRAND */}
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_12px_rgba(0,255,0,0.5)]">
              <span className="text-green-400">Clean</span>TM
            </h1>
            <p className="text-lg text-gray-400 font-semibold">
              Together to make a change!
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              We are building a greener future through community-driven action.
              Track progress, earn rewards, and contribute to a cleaner world.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 relative w-fit">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-1/2 h-[3px] bg-green-400 rounded-full"></span>
            </h2>
            <ul className="space-y-2 font-medium">
              <li className="hover:text-green-400 transition hover:underline-animation-b w-fit cursor-pointer">
                Home
              </li>
              <li className="hover:text-green-400 transition hover:underline-animation-b w-fit cursor-pointer">
                Map
              </li>
              <li className="hover:text-green-400 transition hover:underline-animation-b w-fit cursor-pointer">
                Tasks
              </li>
              <li className="hover:text-green-400 transition hover:underline-animation-b w-fit cursor-pointer">
                Rewards
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 relative w-fit">
              Follow Us
              <span className="absolute left-0 -bottom-1 w-1/2 h-[3px] bg-green-400 rounded-full"></span>
            </h2>
            <div className="flex gap-4 text-2xl">
              <a
                className="hover:text-green-400 transition hover:bg-green-400 rounded-full p-2 hover:text-white"
                href="#"
              >
                <Facebook className="w-6 h-6  z-50" />
              </a>
              <a
                className="hover:text-green-400 transition hover:bg-green-400 rounded-full p-2 hover:text-white"
                href="#"
              >
                <Instagram className="w-6 h-6 z-50" />
              </a>
              <a
                className="hover:text-green-400 transition hover:bg-green-400 rounded-full p-2 hover:text-white"
                href="#"
              >
                <Twitter className="w-6 h-6 z-50" />
              </a>
              <a
                className="hover:text-green-400 transition hover:bg-green-400 rounded-full p-2 hover:text-white"
                href="#"
              >
                <Github className="w-6 h-6 z-50" />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CleanTM — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
