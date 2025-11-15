// "use client";
// import React, { useState, useEffect } from "react";
// import { Star } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const initialTasks = [
//   {
//     id: 1,
//     title: "Collect 25 trash from Calea Aradului",
//     difficulty: 1,
//     basePoints: 10,
//     points: 10, // scaled dynamically
//     startedAt: null,
//     lastCompleted: null,
//     uploadedImage: null,
//   },
//   {
//     id: 2,
//     title: "Collect 25 trash from Calea Aradului",
//     difficulty: 2,
//     basePoints: 10,
//     points: 20,
//     startedAt: null,
//     lastCompleted: null,
//     uploadedImage: null,
//   },
//   {
//     id: 3,
//     title: "Collect 25 trash from Calea Aradului",
//     difficulty: 3,
//     basePoints: 10,
//     points: 30,
//     startedAt: null,
//     lastCompleted: null,
//     uploadedImage: null,
//   },
// ];

export default function TasksPage() {
  return <div></div>;
}
//   const [tasks, setTasks] = useState(initialTasks);
//   const [activeTaskId, setActiveTaskId] = useState(null);
//   const [userPoints, setUserPoints] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0);

//   // Start a task
//   const startTask = (taskId) => {
//     if (!activeTaskId) {
//       const task = tasks.find((t) => t.id === taskId);
//       // Calculate points as basePoints * difficulty
//       setTasks((prev) =>
//         prev.map((t) =>
//           t.id === taskId
//             ? {
//                 ...t,
//                 points: t.basePoints * t.difficulty,
//                 startedAt: Date.now(),
//               }
//             : t
//         )
//       );
//       setActiveTaskId(taskId);
//       setTimeLeft(3 * 60 * 60); // 3 hours in seconds
//     }
//   };

//   // Track timer
//   useEffect(() => {
//     if (!activeTaskId) return;

//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(interval);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [activeTaskId]);

//   // Finish a task
//   const finishTask = (taskId) => {
//     const task = tasks.find((t) => t.id === taskId);
//     setUserPoints((p) => p + task.points);
//     setTasks((prev) =>
//       prev.map((t) =>
//         t.id === taskId
//           ? {
//               ...t,
//               startedAt: null,
//               lastCompleted: Date.now(),
//               uploadedImage: null,
//             }
//           : t
//       )
//     );
//     setActiveTaskId(null);
//     setTimeLeft(0);
//   };

//   // Handle image upload
//   const handleImageUpload = (taskId, file) => {
//     setTasks((prev) =>
//       prev.map((t) => (t.id === taskId ? { ...t, uploadedImage: file } : t))
//     );
//   };

//   // Format time
//   const formatTime = (seconds) => {
//     const h = Math.floor(seconds / 3600);
//     const m = Math.floor((seconds % 3600) / 60);
//     const s = seconds % 60;
//     return `${h}h ${m}m ${s}s`;
//   };

//   return (
//     <>
//       <Navbar className="cursor-pointer" />
//       <div className="min-h-screen pt-24 px-12 md:px-10 md:p-10 flex flex-col items-center justify-center">
//         {/* Header */}
//         <h1 className="text-4xl text-center shadow-[0_0_16px_5px_rgba(0,255,0,0.3)] hover:shadow-[0_0_20px_8px_rgba(0,255,0,0.5)] transition-shadow duration-700 cursor-pointer md:text-4xl font-bold text-white p-5 bg-white/50  backdrop-blur-md px-6 py-3 rounded-full drop-shadow-md mb-12">
//           Daily Tasks
//         </h1>

//         {/* Points */}
//         <div className="relative my-5 bg-white  backdrop-blur-md px-4 py-2 rounded-full shadow-md text-green-700 font-bold text-center">
//           Your Points <br />
//           <span className="text-2xl font-extrabold drop-shadow-[0_0_5px_#00ff91]">
//             {userPoints}
//           </span>
//         </div>

//         {/* Tasks Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
//           {tasks.map((task, idx) => (
//             <div
//               key={task.id}
//               className="flex flex-col items-center p-6 bg-white/50 shadow-[0_0_16px_5px_rgba(0,255,0,0.2)] hover:shadow-[0_0_20px_8px_rgba(0,255,0,0.5)] transition-shadow duration-700 cursor-pointer backdrop-blur-md rounded-2xl  relative"
//             >
//               {/* Task Title */}
//               <h2 className="text-xl font-bold text-green-700 mb-2 px-4 py-2 bg-white/30 rounded-full drop-shadow-md">
//                 Task {idx + 1}
//               </h2>

//               {/* Difficulty */}
//               <div className="flex flex-col items-center mb-4">
//                 <span className="text-green-500 font-semibold text-xl mb-1">
//                   Difficulty
//                 </span>
//                 <div className="flex items-center gap-1">
//                   {[...Array(task.difficulty)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-4 h-4 text-yellow-400 font-bold"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-green-700 font-semibold mt-1">
//                   {task.points} points
//                 </p>
//               </div>

//               {/* Task Description */}
//               <p className="text-center font-semibold mb-6">{task.title}</p>

//               {/* Timer / Info */}
//               {activeTaskId === task.id && (
//                 <p className="text-green-700 font-medium mb-4">
//                   Time Left: {formatTime(timeLeft)}
//                 </p>
//               )}

//               {/* Image Upload */}
//               {activeTaskId === task.id && (
//                 <label className="mb-4 w-fit cursor-pointer relative overflow-hidden bg-green-500 text-white font-bold px-5 py-2 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
//                   {task.uploadedImage ? "✅ File Uploaded" : "Upload Image"}
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) =>
//                       e.target.files &&
//                       handleImageUpload(task.id, e.target.files[0])
//                     }
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                   />
//                 </label>
//               )}

//               {/* Start / Finish Button */}
//               {!activeTaskId && (
//                 <button
//                   onClick={() => startTask(task.id)}
//                   className="border-green-400 shadow-[0_0_16px_5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_8px_rgba(0,255,0,0.5)]  border-2 text-white px-6 py-2 rounded-full font-bold  hover:bg-green-600 transition duration-300 cursor-pointer"
//                 >
//                   Start Task
//                 </button>
//               )}
//               {activeTaskId === task.id && (
//                 <button
//                   onClick={() => finishTask(task.id)}
//                   disabled={!task.uploadedImage}
//                   className={`${
//                     task.uploadedImage
//                       ? "border-green-400 border-2 hover:bg-green-600 cursor-pointer"
//                       : "bg-gray-400 cursor-not-allowed"
//                   } text-white px-6 py-2 rounded-full font-bold shadow-md transition`}
//                 >
//                   Finish Task
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
