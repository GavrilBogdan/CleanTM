"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900 overflow-hidden pt-28">
        {/* Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-emerald-400/60 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Floating leaves layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={i}
              src="/images/leaf.png"
              alt="leaf"
              className="absolute w-10 h-10 opacity-60 animate-fly drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 lg:px-16">
          <div
            className="
              max-w-4xl
              bg-slate-900/70
              backdrop-blur-2xl
              border border-emerald-500/40
              rounded-3xl
              shadow-[0_0_35px_rgba(16,185,129,0.7)]
              hover:shadow-[0_0_55px_rgba(16,185,129,1)]
              transition-all duration-700
              p-10 md:p-14
            "
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-50 mb-6 tracking-tight">
              About <span className="text-emerald-400">CleanTM</span>
            </h1>

            <p className="text-base md:text-lg text-emerald-100/90 font-medium leading-relaxed mb-4">
              CleanTM is a platform built to inspire action for a cleaner city
              and planet. Our mission is simple: turn cleaning into quests,
              rewards and community.
            </p>
            <p className="text-base md:text-lg text-emerald-100/80 leading-relaxed mb-8">
              Collect trash, complete eco-challenges, earn points and see your
              impact grow. Gamified, trackable, and made for people who care
              about where they live.
            </p>

            <button
              onClick={() => (window.location.href = "/Devs")}
              className="
                px-10 py-3.5 rounded-full
                bg-gradient-to-r from-emerald-500 to-green-400
                text-slate-900 font-bold text-base md:text-lg
                shadow-lg shadow-emerald-500/40
                hover:shadow-emerald-400/70
                hover:scale-105
                transition-all duration-300
              "
            >
              Dev Team
            </button>
          </div>
        </section>

        {/* Story Section */}
        <section className="relative z-10 max-w-6xl mx-auto mt-24 px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-50 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.7)]">
              Our Vision
            </h2>
            <p className="text-emerald-100/90 text-base md:text-lg leading-relaxed mb-4">
              CleanTM is designed to turn small actions into visible, local
              impact. Every challenge completed and every bag of trash collected
              contributes to cleaner streets, parks and riverbanks.
            </p>
            <p className="text-emerald-100/80 text-base md:text-lg leading-relaxed">
              We want to make eco-action rewarding and fun: a live map of
              quests, leaderboards, weekly missions and rewards that recognize
              your effort. It’s a movement where anyone can join and see their
              contribution in real time.
            </p>
          </div>

          <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(16,185,129,0.7)] border border-emerald-500/40">
            <img
              src="/images/community-clean.jpg"
              alt="Community cleaning"
              className="w-full h-full object-cover scale-[1.03] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </section>

        {/* Values / Pillars Section */}
        <section className="relative z-10 max-w-6xl mx-auto mt-20 px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 shadow-lg shadow-emerald-500/20">
              <h3 className="text-emerald-300 font-bold text-lg mb-2">
                🌍 Local Impact
              </h3>
              <p className="text-emerald-100/80 text-sm md:text-base">
                Every quest is mapped in Timișoara so you can see exactly where
                you help and how your actions change the city.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 shadow-lg shadow-emerald-500/20">
              <h3 className="text-emerald-300 font-bold text-lg mb-2">
                🎮 Gamified Cleaning
              </h3>
              <p className="text-emerald-100/80 text-sm md:text-base">
                Points, quests, weekly challenges and leaderboards turn cleaning
                into a game that rewards consistency.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 shadow-lg shadow-emerald-500/20">
              <h3 className="text-emerald-300 font-bold text-lg mb-2">
                🤝 Community
              </h3>
              <p className="text-emerald-100/80 text-sm md:text-base">
                You’re not doing it alone. Join others who care about the same
                parks, streets and neighborhoods as you.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative z-10 text-center mt-24 mb-24 px-6">
          <div className="max-w-3xl mx-auto bg-slate-900/80 border border-emerald-500/40 rounded-3xl px-8 py-10 shadow-[0_0_30px_rgba(16,185,129,0.7)]">
            <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-50 mb-5 drop-shadow-[0_0_18px_rgba(16,185,129,0.9)]">
              Join the Movement
            </h2>
            <p className="text-emerald-100/90 text-base md:text-lg mb-8">
              Start a quest, earn points, redeem rewards and help keep Timișoara
              clean. Every action you take moves the city in the right
              direction.
            </p>
            <button
              onClick={() => (window.location.href = "/task")}
              className="
                px-10 py-3.5 rounded-full
                bg-gradient-to-r from-emerald-500 to-green-400
                text-slate-900 font-bold text-base md:text-lg
                shadow-lg shadow-emerald-500/40
                hover:shadow-emerald-400/70
                hover:scale-105
                transition-all duration-300
              "
            >
              Explore Quests
            </button>
          </div>
        </section>
      </div>

      <Footer />

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-18px) translateX(10px);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
        }
        @keyframes fly {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-120px) translateX(30px) rotate(18deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.5;
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
