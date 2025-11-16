"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      <div className="relative min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-lime-50 overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating particles */}
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-green-400 opacity-40 animate-float`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center pt-32 px-6 lg:px-16">
          <div className="max-w-4xl bg-white/20 backdrop-blur-xl border border-green-300 rounded-3xl shadow-[0_0_24px_2px_rgba(0,255,0,0.3)] hover:shadow-[0_0_36px_6px_rgba(0,255,0,0.5)] transition-all duration-700 p-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-6">
              About <span className="text-green-400">CleanTM</span>
            </h1>
            <p className="text-lg md:text-xl text-green-700 font-semibold leading-relaxed mb-6">
              CleanTM is a platform built to inspire action for a cleaner
              planet. Our mission is simple: motivate people to collect trash,
              complete challenges, and make a real impact on nature.
            </p>
            <p className="text-green-700 text-lg md:text-xl font-medium leading-relaxed mb-8">
              Earn points for your efforts, track your impact, and exchange them
              for rewards while joining a vibrant, eco-conscious community.
            </p>
            <button
              onClick={() => (window.location.href = "/shop")}
              className="px-10 py-4 rounded-3xl bg-green-400 text-gray-900 font-bold text-lg hover:bg-green-500 shadow-[0_0_16px_rgba(0,255,0,0.4)] hover:shadow-[0_0_32px_rgba(0,255,0,0.6)] transition-all duration-500"
            >
              Explore Rewards
            </button>
          </div>
        </section>

        {/* Flying Elements Layer */}
        <div className="absolute inset-0 z-0">
          {/* Floating leaves */}
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={i}
              src="/images/leaf.png"
              alt="leaf"
              className="absolute w-12 h-12 opacity-70 animate-fly"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Story Section */}
        <section className="relative z-10 max-w-6xl mx-auto mt-32 px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-green-800 mb-6 drop-shadow-[0_0_8px_rgba(0,255,0,0.3)]">
              Our Vision
            </h2>
            <p className="text-green-700 text-lg leading-relaxed mb-4">
              CleanTM is designed to turn small actions into global impact.
              Every challenge completed and every piece of trash collected
              contributes to a cleaner, greener world.
            </p>
            <p className="text-green-700 text-lg leading-relaxed">
              Our platform creates a sense of community, rewards engagement, and
              tracks measurable impact. It's fun, competitive, and meaningful.
            </p>
          </div>
          <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/community-clean.jpg"
              alt="Community cleaning"
              className="w-full h-full object-cover rounded-3xl drop-shadow-[0_0_8px_rgba(0,255,0,0.3)]"
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative z-10 text-center mt-32 mb-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 drop-shadow-[0_0_12px_rgba(0,255,0,0.5)]">
            Join the Movement
          </h2>
          <p className="text-green-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Take part in challenges, collect points, redeem rewards, and
            contribute to a cleaner future for everyone.
          </p>
          <button
            onClick={() => (window.location.href = "/task")}
            className="px-10 py-4 rounded-3xl bg-green-400 text-gray-900 font-bold text-lg hover:bg-green-500 shadow-[0_0_16px_rgba(0,255,0,0.4)] hover:shadow-[0_0_32px_rgba(0,255,0,0.6)] transition-all duration-500"
          >
            Explore Quests
          </button>
        </section>
      </div>

      <Footer />

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.5;
          }
        }
        @keyframes fly {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-100px) rotate(20deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fly {
          animation: fly linear infinite;
        }
      `}</style>
    </>
  );
};

export default AboutUsPage;
