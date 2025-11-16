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
    <div
      className={`relative z-[9999] w-full flex justify-center ${
        className || ""
      }`}
    >
      <nav
        className="
          fixed top-4 w-[92%] max-w-7xl mx-auto
          flex items-center justify-between
          px-6 md:px-10 py-3
          rounded-full
          shadow-[0_0_25px_rgba(16,185,129,0.6)]
          bg-slate-900/85
          border border-emerald-500/40
          backdrop-blur-2xl
          z-[10000]
        "
      >
        {/* Logo */}
        <div
          onClick={() => handleScroll("/")}
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/892/892930.png"
            alt="CleanTM Logo"
            className="h-9 w-9 drop-shadow-[0_0_10px_rgba(16,185,129,0.9)]"
          />
          <span className="text-xl font-extrabold text-emerald-100 tracking-wide">
            CleanTM
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10 text-emerald-50 font-medium text-sm md:text-base">
          {[
            { label: "Home", id: "/" },
            { label: "Map", id: "/Participate" },
            { label: "Weekly Quests", id: "/task" },
            { label: "Rewards", id: "/shop" },
          ].map((i) => (
            <li
              key={i.label}
              onClick={() => handleScroll(i.id)}
              className="
                relative cursor-pointer group
                transition-colors duration-300
                text-emerald-100
                hover:text-emerald-300
              "
            >
              {i.label}
              <span
                className="
                  absolute left-1/2 -bottom-1 h-[2px] w-0
                  bg-emerald-400 rounded-full
                  group-hover:w-full
                  group-hover:-translate-x-1/2
                  transition-all duration-300
                "
              />
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
                className="
                  font-semibold text-emerald-50 cursor-pointer px-3 py-2
                  rounded-xl
                  bg-emerald-500/5
                  hover:bg-emerald-500/15
                  border border-emerald-400/30
                  transition
                "
              >
                {user.email}
              </div>

              {/* Dropdown */}
              {userMenuOpen && (
                <div
                  className="
                    absolute right-0 top-12
                    bg-slate-900/95
                    rounded-xl shadow-2xl
                    border border-emerald-500/30
                    w-44 py-2 z-[10001]
                    animate-slide-down
                    backdrop-blur-xl
                  "
                >
                  <button
                    onClick={() => handleScroll("/Dashboard")}
                    className="
                      w-full text-left px-4 py-2
                      text-emerald-50 text-sm
                      hover:bg-emerald-500/10
                      transition
                    "
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => handleScroll("/shop/inventory")}
                    className="
                      w-full text-left px-4 py-2
                      text-emerald-50 text-sm
                      hover:bg-emerald-500/10
                      transition
                    "
                  >
                    Inventory
                  </button>
                  <button
                    onClick={handleLogout}
                    className="
                      w-full text-left px-4 py-2
                      text-red-400 text-sm
                      hover:bg-red-500/10
                      transition
                    "
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <button
              onClick={() => handleScroll("/api/login")}
              className="
                px-5 py-2 rounded-full
                bg-emerald-500
                text-white text-sm font-bold
                shadow-lg shadow-emerald-500/40
                hover:bg-emerald-400
                hover:shadow-emerald-400/60
                transition-all
              "
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative w-10 h-10 flex flex-col justify-between items-center z-[10002]"
        >
          <span
            className={`
              block h-[3px] w-8 rounded-full
              bg-emerald-50 shadow
              transition-transform duration-300
              ${open ? "rotate-45 translate-y-3" : ""}
            `}
          ></span>
          <span
            className={`
              block h-[3px] w-8 rounded-full
              bg-emerald-50 shadow
              transition-opacity duration-300
              ${open ? "opacity-0" : ""}
            `}
          ></span>
          <span
            className={`
              block h-[3px] w-8 rounded-full
              bg-emerald-50 shadow
              transition-transform duration-300
              ${open ? "-rotate-45 -translate-y-3" : ""}
            `}
          ></span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`
          lg:hidden fixed top-[5.5rem] left-1/2 -translate-x-1/2 w-[92%] max-w-7xl px-6 py-6
          rounded-3xl
          bg-slate-900/95
          backdrop-blur-2xl
          shadow-[0_20px_40px_rgba(0,0,0,0.8)]
          border border-emerald-500/30
          transition-all duration-500 z-[9999]
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col gap-5 text-base font-medium text-emerald-50">
          <li
            onClick={() => handleScroll("/")}
            className="hover:text-emerald-300 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll("/Participate")}
            className="hover:text-emerald-300 cursor-pointer"
          >
            Map
          </li>
          <li
            onClick={() => handleScroll("/task")}
            className="hover:text-emerald-300 cursor-pointer"
          >
            Weekly Quests
          </li>
          <li
            onClick={() => handleScroll("/shop")}
            className="hover:text-emerald-300 cursor-pointer"
          >
            Rewards
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-3">
          {user ? (
            <>
              <span className="text-emerald-100 font-semibold">
                {user.email}
              </span>
              <button
                onClick={() => handleScroll("/Dashboard")}
                className="
                  w-full py-3 rounded-full
                  bg-emerald-500/10
                  text-emerald-100 font-bold
                  border border-emerald-400/40
                  hover:bg-emerald-500/20
                  transition-all shadow-md
                "
              >
                Dashboard
              </button>
              <button
                onClick={() => handleScroll("/shop/inventory")}
                className="
                  w-full py-3 rounded-full
                  bg-emerald-500/10
                  text-emerald-100 font-bold
                  border border-emerald-400/40
                  hover:bg-emerald-500/20
                  transition-all shadow-md
                "
              >
                Inventory
              </button>
              <button
                onClick={handleLogout}
                className="
                  w-full py-3 rounded-full
                  bg-red-500/15
                  text-red-200 font-bold
                  border border-red-400/40
                  hover:bg-red-500/30
                  transition-all shadow-md
                "
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => handleScroll("/api/login")}
              className="
                w-full py-3 rounded-full
                bg-emerald-500
                text-white font-bold
                hover:bg-emerald-400
                transition-all shadow-lg shadow-emerald-500/50
              "
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
