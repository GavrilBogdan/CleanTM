"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CreatorsPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 pt-28 pb-24 px-5 md:px-10 text-white">
        {/* HERO */}
        <section className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold text-emerald-200 tracking-[0.25em] uppercase">
            The humans behind CleanTM
            <span className="h-1 w-1 rounded-full bg-emerald-300" />
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-b from-emerald-100 via-white to-emerald-200 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(16,185,129,0.8)]">
            Meet the Creators
          </h1>

          <p className="mt-4 text-sm md:text-base text-emerald-100/80 max-w-3xl mx-auto">
            CleanTM was built by two 19-year-old computer science students from
            Timișoara who love web development, care about the city, and wanted
            to push themselves by learning Next.js, databases and full-stack
            basics during a hackathon.
          </p>
        </section>

        {/* CREATORS GRID */}
        <section className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BOGDAN */}
          <article className="bg-slate-900/70 border border-emerald-500/20 rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_55px_rgba(16,185,129,0.7)] transition-all duration-500 p-6 md:p-7 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
              {/* Avatar */}
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.8)] bg-slate-950">
                  <Image
                    src="/images/bogdan.jpeg"
                    alt="Gavril Bogdan-Macsimilian"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-[11px] font-semibold shadow-md">
                  Full-stack explorer
                </span>
              </div>

              {/* Text */}
              <div className="text-center sm:text-left space-y-2">
                <h2 className="text-xl md:text-2xl font-bold">
                  Gavril Bogdan-Macsimilian
                </h2>
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                  Universitatea de Vest din Timișoara • Computer Science
                </p>

                <p className="text-sm text-emerald-50/80 mt-2">
                  19-year-old web dev enthusiast who wanted to turn the idea of
                  cleaning Timișoara into a gamified platform. Jumped into
                  Next.js and Prisma even without prior backend comfort to make
                  CleanTM feel like a real product, not just a mockup.
                </p>

                <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start text-[11px]">
                  <Tag>Age 19</Tag>
                  <Tag>Web development</Tag>
                  <Tag>Next.js & Prisma</Tag>
                  <Tag>Hackathon builder</Tag>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-emerald-100/70">
              <span className="font-semibold text-emerald-300">
                Focus on CleanTM:
              </span>{" "}
              idea, UX, task system logic, leaderboard concept and experimenting
              with database integration.
            </div>
          </article>

          {/* MARIAN */}
          <article className="bg-slate-900/70 border border-emerald-500/20 rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_55px_rgba(16,185,129,0.7)] transition-all duration-500 p-6 md:p-7 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
              {/* Avatar */}
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.8)] bg-slate-950">
                  <Image
                    src="/images/marian.jpeg"
                    alt="Vladut Marian"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-[11px] font-semibold shadow-md">
                  UI / UX & maps
                </span>
              </div>

              {/* Text */}
              <div className="text-center sm:text-left space-y-2">
                <h2 className="text-xl md:text-2xl font-bold">Vladut Marian</h2>
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                  Universitatea Politehnica din Timișoara • Computer Science
                </p>

                <p className="text-sm text-emerald-50/80 mt-2">
                  19-year-old CS student obsessed with clean UI and smooth
                  interactions. Worked on the animated hero, glassmorphism
                  navbar, tasks UI and experimented with Leaflet maps to make
                  CleanTM feel alive and interactive during the hackathon.
                </p>

                <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start text-[11px]">
                  <Tag>Age 19</Tag>
                  <Tag>Frontend & design</Tag>
                  <Tag>Leaflet map</Tag>
                  <Tag>Hackathon energy</Tag>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-emerald-100/70">
              <span className="font-semibold text-emerald-300 text-center">
                Focus on CleanTM:
              </span>{" "}
              visual identity, animations, layout consistency and integrating
              the map & quests into a polished experience.
            </div>
          </article>
        </section>

        {/* SMALL HACKATHON NOTE */}
        <section className="mt-10 max-w-4xl mx-auto text-center text-xs md:text-sm text-emerald-100/75">
          <div className="inline-flex flex-col md:flex-row items-center gap-2 bg-slate-900/70 border border-emerald-500/30 rounded-2xl px-4 py-3 shadow-[0_0_25px_rgba(16,185,129,0.5)]">
            <span className="text-lg">⚡</span>
            <p>
              CleanTM started as a hackathon project where we challenged
              ourselves to go beyond a landing page and actually wire up
              authentication, a database, a quest system and a live leaderboard
              — even though we were just getting started with these tools.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full bg-slate-950/70 border border-emerald-500/30 text-emerald-100/90">
      {children}
    </span>
  );
}

export default CreatorsPage;
