"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../app/context/UserContext";

const Navbar = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();

  // ✅ Check if user is logged in on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user || null);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, [setUser]);

  const handleScroll = (id: string) => {
    if (id.startsWith("/")) {
      router.push(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
  };

  return (
    <div
      className={`relative z-50 w-screen flex justify-center cursor-pointer ${
        className ?? ""
      }`}
    >
      <nav className="fixed mt-5 flex w-full items-center justify-between mx-auto max-w-7xl px-6 py-3 lg:px-8 lg:py-4 bg-lime-50 rounded-[3rem] shadow-[0_0_16px_5px_rgba(0,255,0,0.3)] hover:shadow-[0_0_20px_8px_rgba(0,255,0,0.5)] transition-shadow duration-700 backdrop-blur-lg">
        {/* LOGO */}
        <div
          onClick={() => handleScroll("/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img
            className="h-8 w-auto"
            src="https://cdn-icons-png.flaticon.com/128/892/892930.png"
            alt="CleanTM Logo"
          />
          <span className="text-xl font-bold text-green-800 md:block">
            CleanTM
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:block">
          <ul className="flex space-x-10 text-lg font-semibold text-green-700">
            <li
              onClick={() => handleScroll("home")}
              className="hover:text-green-900 transition hover:underline-animation-b"
            >
              Home
            </li>
            <li
              onClick={() => handleScroll("map")}
              className="hover:text-green-900 transition hover:underline-animation-b"
            >
              Map
            </li>
            <li
              onClick={() => handleScroll("/task")}
              className="hover:text-green-900 transition hover:underline-animation-b"
            >
              Tasks
            </li>
            <li
              onClick={() => handleScroll("/shop")}
              className="hover:text-green-900 transition hover:underline-animation-b"
            >
              Rewards
            </li>
          </ul>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden lg:flex lg:items-center gap-x-2">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-green-700">{user.email}</span>
              <button
                onClick={handleLogout}
                className="cursor-pointer rounded-full bg-red-500 text-white px-4 py-2 font-bold hover:bg-red-600 shadow-md transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="cursor-pointer rounded-full bg-green-500 text-white px-6 py-2.5 font-bold hover:bg-green-600 shadow-md transition"
              onClick={() => handleScroll("/api/login")}
            >
              Login
            </button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-green-700 focus:outline-none"
        >
          <div className="relative w-8 h-8">
            <span
              className={`absolute top-2 left-0 h-1 w-full bg-green-800 rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`absolute top-3.5 left-0 h-1 w-full bg-green-800 rounded transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute top-5 left-0 h-1 w-full bg-green-800 rounded transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[5.5rem] w-full max-w-7xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl px-8 py-6 transition-all duration-500 ease-in-out mx-auto ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-lg font-semibold text-green-800">
          <li
            onClick={() => handleScroll("home")}
            className="hover:text-green-900 transition hover:underline-animation-b"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll("map")}
            className="hover:text-green-900 transition hover:underline-animation-b"
          >
            Map
          </li>
          <li
            onClick={() => handleScroll("progress")}
            className="hover:text-green-900 transition hover:underline-animation-b"
          >
            Tasks
          </li>
          <li
            onClick={() => handleScroll("/rewards")}
            className="hover:text-green-900 transition hover:underline-animation-b"
          >
            Rewards
          </li>
        </ul>

        <div className="flex flex-col mt-6 gap-y-3">
          {user ? (
            <div className="flex flex-col space-y-2">
              <span className="text-green-800 font-semibold">{user.email}</span>
              <button
                className="rounded-full bg-red-500 text-white py-2.5 font-bold hover:bg-red-600 transition shadow-md w-full"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="rounded-full bg-green-500 text-white py-2.5 font-bold hover:bg-green-600 transition shadow-md w-full"
              onClick={() => handleScroll("/api/login")}
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
