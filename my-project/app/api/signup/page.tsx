"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) setMessage(`❌ ${data.error || "Signup failed"}`);
    else {
      setMessage("✅ Signup successful! Redirecting...");
      setTimeout(() => router.push("/api/login"), 1000);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-bl from-purple-400 to-slate-50">
      <div className="flex p-12 flex-col items-center bg-white/10 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.8)] gap-3 backdrop-blur-xl">
        <h1 className="text-white font-bold text-3xl uppercase">Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md w-64"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md w-64"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md w-64"
        />
        {message && <p className="text-sm text-white">{message}</p>}
        <button
          onClick={handleSignup}
          className="border-2 relative group border-white rounded-lg p-3 font-bold text-white hover:text-purple-500 transition duration-700 uppercase shadow-lg w-64"
        >
          Sign Up
          <span className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full z-[-1]"></span>
        </button>
        <p className="text-white">
          Already have an account?{" "}
          <button
            className="text-purple-500 hover:underline"
            onClick={() => router.push("/api/login")}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
