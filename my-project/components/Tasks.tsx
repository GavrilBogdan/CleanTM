"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "Collect 25 trash from Calea Aradului",
    difficulty: 1,
    points: 10,
    startedAt: null,
    lastCompleted: null,
  },
  {
    id: 2,
    title: "Collect 25 trash from Calea Aradului",
    difficulty: 2,
    points: 25,
    startedAt: null,
    lastCompleted: null,
  },
  {
    id: 3,
    title: "Collect 25 trash from Calea Aradului",
    difficulty: 3,
    points: 50,
    startedAt: null,
    lastCompleted: null,
  },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [userPoints, setUserPoints] = useState(0);

  const startTask = (taskId) => {
    if (!activeTaskId) setActiveTaskId(taskId);
  };

  const finishTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    setUserPoints((p) => p + task.points);
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? { ...t, startedAt: null, lastCompleted: Date.now() }
          : t
      )
    );
    setActiveTaskId(null);
  };

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-[#e0e0f8] to-[#d0fff0] flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 bg-white/30 backdrop-blur-md px-6 py-3 rounded-full drop-shadow-md mb-12">
        Daily Tasks
      </h1>

      {/* Points */}
      <div className="absolute top-8 right-8 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-green-700 font-bold text-center">
        Your Points <br />
        <span className="text-2xl font-extrabold drop-shadow-[0_0_5px_#00ff91]">
          {userPoints}
        </span>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {tasks.map((task, idx) => (
          <div
            key={task.id}
            className="flex flex-col items-center p-6 bg-white/40 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 relative"
          >
            {/* Task Title */}
            <h2 className="text-xl font-bold text-green-700 mb-2 px-4 py-2 bg-white/30 rounded-full drop-shadow-md">
              Task {idx + 1}
            </h2>

            {/* Difficulty */}
            <div className="flex items-center gap-1 mb-4">
              <span className="text-green-500 font-semibold">Difficulty</span>
              {[...Array(task.difficulty)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>

            {/* Task Description */}
            <p className="text-center font-semibold mb-6">{task.title}</p>

            {/* Timer / Info */}
            <p className="text-green-700 font-medium mb-4">Time Left: 6hr</p>

            {/* Start / Finish Button */}
            {!activeTaskId && (
              <button
                onClick={() => startTask(task.id)}
                className="bg-green-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-green-600 transition"
              >
                Start Task
              </button>
            )}
            {activeTaskId === task.id && (
              <button
                onClick={() => finishTask(task.id)}
                className="bg-green-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-green-600 transition"
              >
                Finish Task
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
