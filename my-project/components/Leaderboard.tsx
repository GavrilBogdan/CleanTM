"use client";

import { useState } from "react";

type Player = {
  name: string;
  score: number;
  battles: string;
  avatar: string;
};

type MVPCardProps = {
  player: Player;
};

type PodiumSectionProps = {
  leaderboard: Player[];
};

type PodiumBlockProps = {
  place: number;
  user: Player;
  height: string;
  gradient: string;
  border: string;
  scoreColor: string;
  crown?: boolean;
};

export default function LeaderboardPage() {
  const leaderboard: Player[] = [
    {
      name: "Andrei Popescu",
      score: 420,
      battles: "69 / 88",
      avatar: "/images/rafa.jpg",
    },
    {
      name: "Mihai Ionescu",
      score: 415,
      battles: "73 / 100",
      avatar: "/images/salam.jpg",
    },
    {
      name: "Robert Vadean",
      score: 390,
      battles: "63 / 89",
      avatar: "/images/guta.jpg",
    },
    {
      name: "Godja Flavius",
      score: 385,
      battles: "59 / 90",
      avatar: "/images/romanes.jpg",
    },
    {
      name: "Costel Marinescu",
      score: 360,
      battles: "53 / 112",
      avatar: "/images/tzanca.jpg",
    },
    {
      name: "Daniel Boloaga",
      score: 324,
      battles: "24 / 76",
      avatar: "/images/minune.jpg",
    },
    {
      name: "Bogdan Georgescu",
      score: 290,
      battles: "32 / 97",
      avatar: "/images/ciorba.jpg",
    },
  ];

  const rewards = [
    { place: "1st", amount: 250 },
    { place: "2nd", amount: 200 },
    { place: "3rd", amount: 150 },
    { place: "4th", amount: 100 },
    { place: "5th", amount: 75 },
    { place: "6th", amount: 60 },
    { place: "7th", amount: 50 },
    { place: "8th", amount: 40 },
    { place: "9th", amount: 30 },
    { place: "10th", amount: 25 },
  ];

  // ------------ STATE PENTRU SEARCH + FILTRE + SORTARE ------------
  const [search, setSearch] = useState("");
  const [minScore, setMinScore] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const [minBattles, setMinBattles] = useState("");
  const [sortBy, setSortBy] = useState<"score" | "name">("score");

  // aplica filtrele peste leaderboard
  const filteredLeaderboard = [...leaderboard]
    .filter((p) => {
      // search dupa nume
      if (search.trim().length > 0) {
        const term = search.toLowerCase();
        if (!p.name.toLowerCase().includes(term)) return false;
      }

      // scor minim / maxim
      if (minScore !== "" && p.score < Number(minScore)) return false;
      if (maxScore !== "" && p.score > Number(maxScore)) return false;

      // battles castigate minime (prima cifra din "69 / 88")
      if (minBattles !== "") {
        const wins = parseInt(p.battles.split("/")[0].trim(), 10);
        if (wins < Number(minBattles)) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "score") {
        return b.score - a.score; // scor desc
      }
      // sortare alfabetica
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white px-4 sm:px-6 py-10 pt-[8rem] pb-[5rem]">
      <style>{globalStyles}</style>

      <div className="max-w-7xl mx-auto">
        {/* HEADER + SMALL BADGE */}
        <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
              CleanTM • Season 1
              <span className="h-1 w-1 rounded-full bg-emerald-300" />
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-emerald-100 via-white to-emerald-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.7)]">
              Leaderboard
            </h1>
            <p className="mt-2 text-sm md:text-base text-emerald-100/80 max-w-xl">
              Track the most active eco-heroes in CleanTM. Complete quests, earn
              💎 and climb the rankings every month.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/70 border border-emerald-500/30 px-5 py-3 shadow-[0_0_30px_rgba(16,185,129,0.6)] text-right">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-200">
              Total users
            </p>
            <p className="text-2xl font-bold text-emerald-300">
              {leaderboard.length}
            </p>
            <p className="text-[11px] text-emerald-100/70">
              {filteredLeaderboard.length} currently visible
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* LEFT — PODIUM + BOARD */}
          <div className="xl:col-span-2 space-y-8">
            <div className="rounded-3xl bg-slate-950/60 border border-emerald-500/25 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-2xl px-4 sm:px-6 py-6">
              <PodiumSection leaderboard={leaderboard} />
            </div>

            {/* LEADERBOARD LIST */}
            <div className="bg-slate-950/70 border border-emerald-500/25 rounded-3xl p-4 sm:p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
              {/* HEADER + TABURI + STATISTICI */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pb-4 border-b border-[#1e293b]">
                <div>
                  <h2 className="text-lg font-semibold">Monthly Leaderboard</h2>
                  <p className="text-xs text-emerald-100/70 mt-1">
                    {filteredLeaderboard.length} users found •{" "}
                    {leaderboard.length} total
                  </p>
                </div>

                <div className="inline-flex rounded-full bg-slate-900/80 border border-slate-700/60 p-1 text-xs">
                  <button className="px-3 py-1 rounded-full bg-emerald-500 text-slate-900 font-semibold shadow-[0_0_18px_rgba(16,185,129,0.7)]">
                    Monthly
                  </button>
                  <button className="px-3 py-1 rounded-full text-slate-200 hover:bg-slate-800/80 transition">
                    All Time
                  </button>
                </div>
              </div>

              {/* SEARCH + FILTERS */}
              <div className="mt-4 mb-3 grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
                {/* search */}
                <div className="md:col-span-2">
                  <label className="text-gray-300 text-xs uppercase tracking-wide">
                    Search user
                  </label>
                  <div className="mt-1 flex items-center gap-2 bg-slate-950/80 border border-slate-700/70 rounded-xl px-3 py-1.5 shadow-inner shadow-black/40">
                    <span className="text-gray-500 text-sm">🔍</span>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Type a name…"
                      className="bg-transparent flex-1 outline-none text-sm text-gray-100 placeholder:text-gray-500"
                    />
                  </div>
                </div>

                {/* min score */}
                <div>
                  <label className="text-gray-300 text-xs uppercase tracking-wide">
                    Min score
                  </label>
                  <input
                    type="number"
                    value={minScore}
                    onChange={(e) => setMinScore(e.target.value)}
                    placeholder="300"
                    className="mt-1 w-full bg-slate-950/80 border border-slate-700/70 rounded-xl px-3 py-1.5 outline-none text-sm text-gray-100 placeholder:text-gray-600"
                  />
                </div>

                {/* min battles */}
                <div>
                  <label className="text-gray-300 text-xs uppercase tracking-wide">
                    Min quests
                  </label>
                  <input
                    type="number"
                    value={minBattles}
                    onChange={(e) => setMinBattles(e.target.value)}
                    placeholder="50"
                    className="mt-1 w-full bg-slate-950/80 border border-slate-700/70 rounded-xl px-3 py-1.5 outline-none text-sm text-gray-100 placeholder:text-gray-600"
                  />
                </div>

                {/* max score + sort pe a doua linie */}
                <div className="md:col-span-2 flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <label className="text-gray-300 text-xs uppercase tracking-wide">
                      Max quests
                    </label>
                    <input
                      type="number"
                      value={maxScore}
                      onChange={(e) => setMaxScore(e.target.value)}
                      placeholder="450"
                      className="mt-1 w-full bg-slate-950/80 border border-slate-700/70 rounded-xl px-3 py-1.5 outline-none text-sm text-gray-100 placeholder:text-gray-600"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="text-gray-300 text-xs uppercase tracking-wide">
                      Sort by
                    </label>
                    <div className="mt-1 flex bg-slate-950/80 border border-slate-700/70 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setSortBy("score")}
                        className={`flex-1 px-2 py-1.5 text-xs font-medium transition ${
                          sortBy === "score"
                            ? "bg-emerald-500 text-slate-950"
                            : "text-gray-300 hover:bg-slate-800/80"
                        }`}
                      >
                        Score
                      </button>
                      <button
                        onClick={() => setSortBy("name")}
                        className={`flex-1 px-2 py-1.5 text-xs font-medium transition ${
                          sortBy === "name"
                            ? "bg-emerald-500 text-slate-950"
                            : "text-gray-300 hover:bg-slate-800/80"
                        }`}
                      >
                        Name
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* LISTĂ JUCĂTORI (FILTRATĂ) */}
              <ul className="mt-2 space-y-3">
                {filteredLeaderboard.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-2xl px-4 py-3 hover:bg-slate-800/90 transition shadow-[0_0_18px_rgba(15,23,42,0.9)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#0f172a] rounded-full flex items-center justify-center text-2xl overflow-hidden border border-emerald-500/40">
                        <img
                          src={p.avatar}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-emerald-50">{p.name}</p>
                        <p className="text-xs text-emerald-300/90">
                          Quests completed: {p.battles}
                        </p>
                      </div>
                    </div>

                    <span className="text-lg font-semibold text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]">
                      💎{p.score}
                    </span>
                  </li>
                ))}

                {filteredLeaderboard.length === 0 && (
                  <li className="text-center text-sm text-gray-500 py-6">
                    No users found matching the criteria.
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* RIGHT — REWARDS + MVP CARD */}
          <div className="space-y-6">
            <div className="bg-slate-950/70 border border-emerald-500/25 rounded-3xl p-5 shadow-[0_0_35px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                🏆 Monthly Rewards
              </h2>

              <p className="text-sm text-emerald-100/80 mb-5">
                Top 10 receive monthly 💎 bonus based on their final position.
                Stay active to keep your spot.
              </p>

              <div className="space-y-3">
                {rewards.map((r, i) => {
                  const isTop3 = i < 3;
                  return (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl border shadow relative overflow-hidden ${
                        isTop3
                          ? "bg-slate-900/80 border-emerald-400/60"
                          : "bg-slate-950/80 border-slate-700/80 hover:bg-slate-900/90"
                      } transition`}
                      style={
                        isTop3
                          ? {
                              backgroundImage:
                                "linear-gradient(135deg, rgba(45,212,191,0.18), rgba(15,23,42,0.9))",
                            }
                          : {}
                      }
                    >
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-lg font-bold ${
                            isTop3 ? "text-emerald-50" : "text-gray-200"
                          }`}
                        >
                          {r.place}
                        </span>
                        <span className="text-gray-400 text-xs">place</span>
                      </div>

                      <span
                        className={`text-xl font-extrabold ${
                          isTop3 ? "text-emerald-100" : "text-emerald-400"
                        }`}
                      >
                        💎{r.amount}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ⭐ PLAYER OF THE WEEK — MVP CARD */}
            <MVPCard player={leaderboard[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================================================================================
   MVP CARD
================================================================================================ */
function MVPCard({ player }: MVPCardProps) {
  return (
    <div className="bg-slate-950/70 border border-emerald-500/25 rounded-3xl p-6 shadow-[0_0_35px_rgba(15,23,42,0.9)] backdrop-blur-2xl animate-fade-in">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        ⭐ User of the Week
      </h3>

      <div className="flex flex-col items-center">
        {/* AVATAR LARGE */}
        <div className="relative">
          <div
            className="
            w-28 h-28 rounded-2xl bg-[#0b0c0d] border-4 border-emerald-400
            shadow-[0_0_25px_rgba(16,185,129,0.55)] 
            animate-pulse-border
            flex items-center justify-center overflow-hidden
          "
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrgkEw396ELf_HEc1iX9eAXjAazTMCOpDBA&s"
              alt={player.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Crown */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl animate-crown-bounce">
            👑
          </div>
        </div>

        {/* NAME */}
        <p className="mt-3 text-lg font-semibold text-emerald-50">
          {player.name}
        </p>

        {/* SCORE PILL */}
        <div
          className="
          mt-2 px-5 py-2 rounded-full bg-[#1e293b]
          text-emerald-300 font-bold text-lg
          shadow-lg relative overflow-hidden
        "
        >
          💎{player.score}
          <div
            className="
            absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent
            translate-x-[-120%] animate-shimmer
          "
          />
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full mt-6">
          <p className="text-sm text-gray-400 mb-1 text-center">
            Weekly Progress
          </p>

          <div className="w-full h-3 bg-[#1e293b] rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full animate-grow-bar"
              style={{ width: "78%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================================================================================
   PODIUM + BLOCKS
================================================================================================ */
function PodiumSection({ leaderboard }: PodiumSectionProps) {
  const first = leaderboard[0];
  const second = leaderboard[1];
  const third = leaderboard[2];

  return (
    <div className="w-full flex flex-col items-center mb-4 select-none">
      <div className="flex gap-10 md:gap-16 items-end justify-center">
        {/* 2nd */}
        <div className="animate-bounce-in opacity-0 delay-[0.15s]">
          <PodiumBlock
            place={2}
            user={second}
            height="h-40 md:h-48"
            gradient="from-emerald-700 via-emerald-500 to-emerald-400"
            border="border-emerald-400"
            scoreColor="text-emerald-300"
          />
        </div>

        {/* 1st */}
        <div className="animate-bounce-in opacity-0 delay-[0s]">
          <PodiumBlock
            place={1}
            user={first}
            height="h-52 md:h-64"
            gradient="from-emerald-500 via-emerald-400 to-emerald-300"
            border="border-yellow-400"
            crown
            scoreColor="text-yellow-300"
          />
        </div>

        {/* 3rd */}
        <div className="animate-bounce-in opacity-0 delay-[0.30s]">
          <PodiumBlock
            place={3}
            user={third}
            height="h-32 md:h-40"
            gradient="from-emerald-900 via-emerald-700 to-emerald-500"
            border="border-emerald-700"
            scoreColor="text-orange-300"
          />
        </div>
      </div>
    </div>
  );
}

function PodiumBlock({
  place,
  user,
  height,
  gradient,
  border,
  scoreColor,
  crown = false,
}: PodiumBlockProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Avatar */}
      <div
        className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#0f172a] border-4 ${border}
        shadow-[0_0_30px_rgba(34,197,94,0.25)] flex items-center justify-center overflow-hidden`}
      >
        <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-full object-cover"
        />

        {crown && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl drop-shadow-xl">
            👑
          </div>
        )}
      </div>

      <p className="mt-2 text-gray-200 text-sm md:text-base">{user.name}</p>

      <div className="mt-1 px-4 py-1 rounded-full bg-[#1e293b] relative overflow-hidden shadow-lg">
        <span className={`font-semibold ${scoreColor} text-sm md:text-base`}>
          💎{user.score}
        </span>
      </div>

      <div
        className={`${height} w-28 md:w-40 rounded-t-3xl mt-4 flex items-end justify-center pb-4 md:pb-5 border border-[#1e293b]
        bg-gradient-to-b ${gradient}
        shadow-[0_30px_50px_rgba(15,23,42,0.85)]`}
      >
        <span className="text-3xl md:text-5xl text-white font-extrabold opacity-95 drop-shadow-xl">
          {place}
        </span>
      </div>
    </div>
  );
}

/* =======================================================================================
   CSS (Animations)
================================================================================================ */
const globalStyles = `
@keyframes bounceIn {
  0% { opacity: 0; transform: translateY(60px) scale(0.9); }
  60% { opacity: 1; transform: translateY(-10px) scale(1.05); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.animate-bounce-in {
  animation: bounceIn 0.9s forwards ease-out;
}

/* MVP Card Animations */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
}

@keyframes pulseBorder {
  0%,100% { box-shadow: 0 0 25px rgba(16,185,129,0.5); }
  50% { box-shadow: 0 0 35px rgba(16,185,129,0.75); }
}

.animate-pulse-border {
  animation: pulseBorder 2s infinite ease-in-out;
}

@keyframes shimmerMove {
  0% { transform: translateX(-150%); }
  100% { transform: translateX(200%); }
}

.animate-shimmer {
  animation: shimmerMove 2.5s infinite;
}

@keyframes growBar {
  0% { width: 0%; }
  100% { width: 78%; }
}

.animate-grow-bar {
  animation: growBar 1.2s ease-out forwards;
}

@keyframes crownBounce {
  0% { transform: translate(-50%, -10px); }
  50% { transform: translate(-50%, -18px); }
  100% { transform: translate(-50%, -10px); }
}

.animate-crown-bounce {
  animation: crownBounce 1.8s infinite ease-in-out;
}
`;
