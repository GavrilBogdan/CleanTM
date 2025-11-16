"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const initialTasks: any[] = [
  {
    id: 1,
    title: "Collect 250 trash from Calea Aradului",
    difficulty: 1,
    basePoints: 10,
    points: 10,
    startedAt: null,
    lastCompleted: null,
    uploadedImage: null,
  },
  {
    id: 2,
    title: "Collect 1000 trash from Zona Soarelui",
    difficulty: 2,
    basePoints: 10,
    points: 20,
    startedAt: null,
    lastCompleted: null,
    uploadedImage: null,
  },
  {
    id: 3,
    title: "Clean the Steaua Park and collect 300 nearby trash.",
    difficulty: 3,
    basePoints: 10,
    points: 30,
    startedAt: null,
    lastCompleted: null,
    uploadedImage: null,
  },
];

const COOLDOWN = 6 * 60 * 60 * 1000; // 6 hours in ms

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>(initialTasks);
  const [activeTaskId, setActiveTaskId] = useState<any>(null);
  const [userPoints, setUserPoints] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // Fetch user points
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.user && typeof data.user.points === "number") {
          setUserPoints(data.user.points);
        }
      })
      .catch((err) => console.error("Error fetching user points:", err));
  }, []);

  // Handle file uploads
  const handleImageUpload = (taskId: any, file: any) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, uploadedImage: file } : t))
    );
  };

  const startTask = (taskId: any) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    // Check cooldown
    if (task.lastCompleted && Date.now() - task.lastCompleted < COOLDOWN) {
      alert("Task is on cooldown!");
      return;
    }

    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? { ...t, points: t.basePoints * t.difficulty, startedAt: Date.now() }
          : t
      )
    );
    setActiveTaskId(taskId);
    setTimeLeft(3 * 60 * 60); // 3 hours timer
  };

  // Timer for active task
  useEffect(() => {
    if (!activeTaskId) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTaskId]);

  // Finish task
  const finishTask = async (taskId: any) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task || !task.uploadedImage) return;

    try {
      const res = await fetch("/api/tasks/addPoints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ points: task.points }),
      });
      const data = await res.json();

      if (data.user && typeof data.user.points === "number") {
        setUserPoints(data.user.points);
      }

      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId
            ? {
                ...t,
                startedAt: null,
                lastCompleted: Date.now(), // set cooldown start
                uploadedImage: null,
              }
            : t
        )
      );

      setActiveTaskId(null);
      setTimeLeft(0);
    } catch (err) {
      console.error("Error updating points:", err);
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const getCooldownLeft = (lastCompleted: number | null) => {
    if (!lastCompleted) return 0;
    const remaining = COOLDOWN - (Date.now() - lastCompleted);
    return remaining > 0 ? Math.floor(remaining / 1000) : 0;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 pt-28 pb-20 px-5 md:px-10 flex flex-col items-center">
        {/* Header */}
        <div className="w-full max-w-7xl flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold text-emerald-200 tracking-[0.18em] uppercase">
            Weekly rotation
            <span className="h-1 w-1 rounded-full bg-emerald-300" />
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-b from-emerald-100 via-white to-emerald-200 text-transparent bg-clip-text tracking-wide drop-shadow-[0_0_25px_rgba(16,185,129,0.8)]">
            Weekly Quests
          </h1>

          <p className="mt-3 max-w-2xl text-sm md:text-base text-emerald-100/80">
            Accept time-limited cleanup quests, upload proof and earn points for
            the global leaderboard and eco rewards.
          </p>

          {/* Points badge */}
          <div className="relative mt-8 bg-slate-950/70 backdrop-blur-xl px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.6)] border border-emerald-400/50 text-emerald-50 font-bold text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-300">
              Your points
            </div>
            <div className="mt-1 text-3xl md:text-4xl font-extrabold">
              {userPoints}
            </div>
            <div className="mt-1 text-[11px] text-emerald-200/80">
              Earn more by completing and verifying quests
            </div>

            {/* subtle top glow bar */}
            <div className="pointer-events-none absolute inset-x-10 -top-3 h-[2px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-80" />
          </div>

          {/* Leaderboard button – soft, below points */}
          <div className="mt-5">
            <Link href="/Leaderboard">
              <button
                className="
                  inline-flex items-center gap-2 
                  px-6 py-2 rounded-full 
                  bg-emerald-500/80 hover:bg-emerald-400 
                  text-slate-950 font-semibold text-sm
                  shadow-lg shadow-emerald-800/40
                  hover:shadow-emerald-500/60
                  transition-all duration-300
                  hover:scale-[1.03] cursor-pointer
                "
              >
                View leaderboard 🏆
              </button>
            </Link>
          </div>
        </div>

        {/* Tasks grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {tasks.map((task, idx) => {
            const cooldownLeft = getCooldownLeft(task.lastCompleted);
            const onCooldown = cooldownLeft > 0;
            const isActive = activeTaskId === task.id;

            return (
              <div
                key={task.id}
                className={`group flex flex-col items-stretch justify-between p-7 rounded-3xl 
                  bg-slate-900/70 backdrop-blur-2xl border border-emerald-500/25 
                  shadow-[0_0_35px_rgba(15,23,42,0.9)]
                  hover:shadow-[0_0_45px_rgba(16,185,129,0.7)]
                  transition-all duration-400 hover:-translate-y-2`}
              >
                {/* Top label */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-emerald-50">
                    Task {idx + 1}
                  </h2>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-400/40 text-emerald-200">
                    +{task.points} pts
                  </span>
                </div>

                {/* Difficulty */}
                <div className="flex flex-col items-start mb-4">
                  <span className="text-xs font-semibold text-emerald-200 uppercase tracking-[0.18em] mb-1">
                    Difficulty
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(task.difficulty)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Title */}
                <p className="text-sm md:text-[15px] font-medium text-emerald-50 mb-4 min-h-[60px]">
                  {task.title}
                </p>

                {/* Active timer / cooldown info */}
                {isActive && (
                  <p className="text-xs font-medium text-emerald-200 mb-4">
                    Time Left:{" "}
                    <span className="text-emerald-300">
                      {formatTime(timeLeft)}
                    </span>
                  </p>
                )}

                {!isActive && onCooldown && (
                  <p className="text-xs font-medium text-amber-300 mb-4">
                    On cooldown: {formatTime(cooldownLeft)}
                  </p>
                )}

                {/* Upload proof (only for active task) */}
                {isActive && (
                  <label className="relative mt-2 mb-4 inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-800/30 hover:shadow-emerald-600/40 hover:scale-[1.02] transition-all cursor-pointer">
                    {task.uploadedImage ? "📁 File Selected" : "⬆ Upload Proof"}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e: any) =>
                        e.target.files &&
                        handleImageUpload(task.id, e.target.files[0])
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Start / Finish buttons */}
                {!activeTaskId && (
                  <button
                    onClick={() => startTask(task.id)}
                    disabled={onCooldown}
                    className={`mt-2 w-full text-center py-3 rounded-full font-bold text-sm
                      bg-gradient-to-r from-emerald-500 to-emerald-600 text-white 
                      shadow-lg shadow-emerald-800/40
                      hover:shadow-emerald-500/60 hover:scale-[1.03] transition-all
                      ${
                        onCooldown
                          ? "opacity-40 cursor-not-allowed hover:scale-100 hover:shadow-none"
                          : ""
                      }`}
                  >
                    {onCooldown
                      ? `Cooldown: ${formatTime(cooldownLeft)}`
                      : "Start Task"}
                  </button>
                )}

                {isActive && (
                  <button
                    onClick={() => finishTask(task.id)}
                    disabled={!task.uploadedImage}
                    className={`mt-2 w-full text-center py-3 rounded-full font-bold text-sm transition-all 
                      ${
                        task.uploadedImage
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-700/50 hover:scale-[1.03]"
                          : "bg-slate-600 text-slate-200 cursor-not-allowed"
                      }`}
                  >
                    Finish Task
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
