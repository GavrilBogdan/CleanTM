"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <div className="min-h-screen pt-28 px-6 md:px-12 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-b from-white to-neutral-300 text-transparent bg-clip-text tracking-wide drop-shadow-2xl mb-6">
          Weekly Quests
        </h1>

        <div className="relative mb-16 bg-white/40 backdrop-blur-xl px-10 py-4 rounded-full shadow-xl border border-white/40 text-green-900 font-bold text-center">
          Your Points <br />
          <span className="text-3xl font-extrabold">{userPoints}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl pb-20">
          {tasks.map((task, idx) => {
            const cooldownLeft = getCooldownLeft(task.lastCompleted);
            const onCooldown = cooldownLeft > 0;

            return (
              <div
                key={task.id}
                className="group flex flex-col items-center justify-between p-8 rounded-3xl bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-xl border border-white/40 shadow-2xl hover:scale-[1.03] transition-all duration-500"
              >
                <h2 className="text-2xl font-bold bg-white/40 px-6 py-2 rounded-full mb-4 shadow-md text-green-800">
                  Task {idx + 1}
                </h2>

                <div className="flex flex-col items-center mb-4">
                  <span className="text-green-600 font-semibold text-lg mb-1">
                    Difficulty
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(task.difficulty)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-green-700 font-semibold mt-2">
                    {task.points} points
                  </p>
                </div>

                <p className="text-center font-semibold text-black/90 mb-6 min-h-[60px]">
                  {task.title}
                </p>

                {activeTaskId === task.id && (
                  <p className="text-green-700 font-medium mb-4">
                    Time Left: {formatTime(timeLeft)}
                  </p>
                )}

                {activeTaskId === task.id && (
                  <label className="relative mt-4 mb-4 inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-800/30 hover:shadow-emerald-600/40 hover:scale-105 transition-all cursor-pointer">
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

                {!activeTaskId && (
                  <button
                    onClick={() => startTask(task.id)}
                    disabled={onCooldown}
                    className={`mt-2 w-full text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all ${
                      onCooldown ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {onCooldown
                      ? `Cooldown: ${formatTime(cooldownLeft)}`
                      : "Start Task"}
                  </button>
                )}

                {activeTaskId === task.id && (
                  <button
                    onClick={() => finishTask(task.id)}
                    disabled={!task.uploadedImage}
                    className={`mt-2 w-full text-center py-3 rounded-full font-bold transition-all ${
                      task.uploadedImage
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:scale-105"
                        : "bg-gray-400 text-white cursor-not-allowed"
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
