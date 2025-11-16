"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../app/context/UserContext";

const Navbar = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user || null);
        } else setUser(null);
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, [setUser]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = (id: string) => {
    if (id.startsWith("/")) router.push(id);
    else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setOpen(false);
    setUserMenuOpen(false);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
  };

  return (
    <div className={`relative w-full flex justify-center ${className || ""}`}>
      <nav className="fixed top-6 w-full max-w-7xl mx-auto flex items-center justify-between px-10 py-4 rounded-full shadow-lg bg-white/5 backdrop-blur-lg border border-gray-200/10 z-50">
        {/* Logo */}
        <div
          onClick={() => handleScroll("/")}
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/892/892930.png"
            alt="CleanTM Logo"
            className="h-10 w-10"
          />
          <span className="text-xl font-extrabold text-gray-900">CleanTM</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-12 text-gray-700 font-medium text-lg">
          {[
            { label: "Home", id: "/" },
            { label: "Map", id: "map" },
            { label: "Weekly Quests", id: "/task" },
            { label: "Rewards", id: "/shop" },
          ].map((i) => (
            <li
              key={i.label}
              onClick={() => handleScroll(i.id)}
              className="relative cursor-pointer hover:text-green-600 transition-colors duration-300"
            >
              {i.label}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-green-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* User CTA */}
        <div
          className="hidden lg:flex items-center gap-4 relative"
          ref={userMenuRef}
        >
          {user ? (
            <>
              <div
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="font-semibold text-gray-700 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 transition"
              >
                {user.email}
              </div>

              {/* Dropdown */}
              {userMenuOpen && (
                <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-gray-200/20 w-40 py-2 z-50 animate-slide-down">
                  <button
                    onClick={() => handleScroll("/shop/inventory")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Inventory
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <button
              onClick={() => handleScroll("/api/login")}
              className="px-6 py-2 rounded-full bg-green-600 text-white font-bold hover:bg-green-700 transition-all shadow-md"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative w-10 h-10 flex flex-col justify-between"
        >
          <span
            className={`block h-1 w-full bg-gray-900 rounded transition-transform duration-300 ${
              open ? "rotate-45 translate-y-4" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-gray-900 rounded transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-gray-900 rounded transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-4" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`
          lg:hidden fixed top-[6.5rem] w-full max-w-7xl mx-auto px-8 py-6
          rounded-2xl bg-white/95 backdrop-blur-lg shadow-md border border-gray-200/10
          transition-all duration-500
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col gap-6 text-lg font-medium text-gray-700">
          <li
            onClick={() => handleScroll("/")}
            className="hover:text-green-600 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll("map")}
            className="hover:text-green-600 cursor-pointer"
          >
            Map
          </li>
          <li
            onClick={() => handleScroll("/task")}
            className="hover:text-green-600 cursor-pointer"
          >
            Weekly Quests
          </li>
          <li
            onClick={() => handleScroll("/shop")}
            className="hover:text-green-600 cursor-pointer"
          >
            Rewards
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-3">
          {user ? (
            <>
              <span className="text-gray-700 font-semibold">{user.email}</span>
              <button
                onClick={() => handleScroll("/inventory")}
                className="w-full py-3 rounded-full bg-gray-200 text-gray-800 font-bold hover:bg-gray-300 transition-all shadow-md"
              >
                Inventory
              </button>
              <button
                onClick={handleLogout}
                className="w-full py-3 rounded-full bg-red-400 text-white font-bold hover:bg-red-700 transition-all shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => handleScroll("/api/login")}
              className="w-full py-3 rounded-full bg-green-600 text-white font-bold hover:bg-green-700 transition-all shadow-md"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
