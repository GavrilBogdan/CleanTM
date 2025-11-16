"use client";

import { useEffect, useState } from "react";

const FALLBACK_AVATAR = "/images/rafa.jpg";

type ApiUser = {
  id: number;
  email: string;
  points: number;
  username?: string | null;
  avatarUrl?: string | null;
};

type Player = {
  id: number;
  name: string;
  score: number;
  questsCompleted: number;
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

export default function LeaderboardPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [search, setSearch] = useState("");
  const [minScore, setMinScore] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const [minWins, setMinWins] = useState("");
  const [sortBy, setSortBy] = useState<"score" | "name">("score");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch("/api/leaderboard");
        const data = await res.json();

        if (!Array.isArray(data.users)) {
          console.error("Invalid leaderboard response:", data);
          setPlayers([]);
          return;
        }

        const mapped: Player[] = data.users.map((u: ApiUser) => ({
          id: u.id,
          name: u.username || u.email.split("@")[0],
          score: u.points,
          questsCompleted: 0, // plug real value later
          avatar:
            u.avatarUrl && u.avatarUrl.trim().length > 0
              ? u.avatarUrl
              : FALLBACK_AVATAR,
        }));

        setPlayers(mapped.sort((a, b) => b.score - a.score));
      } catch (err) {
        console.error("Error loading leaderboard:", err);
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // apply filters
  const filteredLeaderboard = players
    .filter((p) => {
      if (search.trim()) {
        const term = search.toLowerCase();
        if (!p.name.toLowerCase().includes(term)) return false;
      }
      if (minScore !== "" && p.score < Number(minScore)) return false;
      if (maxScore !== "" && p.score > Number(maxScore)) return false;

      // here “wins” is questsCompleted (can be changed later)
      if (minWins !== "" && p.questsCompleted < Number(minWins)) return false;

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "score") return b.score - a.score;
      return a.name.localeCompare(b.name);
    });

  const podiumSource =
    filteredLeaderboard.length >= 3 ? filteredLeaderboard : players;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <p className="text-sm text-gray-300">Loading leaderboard…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 pt-28 pb-24">
      <style>{globalStyles}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* LEFT — PODIUM + BOARD */}
        <div className="xl:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Leaderboard</h1>

          {podiumSource.length >= 3 && (
            <PodiumSection leaderboard={podiumSource} />
          )}

          {/* LEADERBOARD LIST */}
          <div className="bg-[#020819] border border-[#111827] rounded-2xl p-4 shadow-xl">
            {/* HEADER */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-2 pb-4 border-b border-[#111827]">
              <div>
                <h2 className="text-lg font-semibold">Monthly Leaderboard</h2>
                <p className="text-xs text-gray-400 mt-1">
                  {filteredLeaderboard.length} Users found • {players.length}{" "}
                  total
                </p>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-emerald-600 rounded-lg text-sm">
                  Monthly
                </button>
                <button className="px-3 py-1 bg-[#0b1220] rounded-lg text-sm">
                  All Time
                </button>
              </div>
            </div>

            {/* FILTERS */}
            <div className="mt-4 mb-3 grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
              {/* search */}
              <div className="md:col-span-2">
                <label className="text-gray-400 text-xs uppercase tracking-wide">
                  Search player
                </label>
                <div className="mt-1 flex items-center gap-2 bg-[#020617] border border-[#111827] rounded-lg px-2 py-1.5">
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
                <label className="text-gray-400 text-xs uppercase tracking-wide">
                  Min score
                </label>
                <input
                  type="number"
                  value={minScore}
                  onChange={(e) => setMinScore(e.target.value)}
                  placeholder="300"
                  className="mt-1 w-full bg-[#020617] border border-[#111827] rounded-lg px-2 py-1.5 outline-none text-sm"
                />
              </div>

              {/* min wins */}
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wide">
                  Min quests
                </label>
                <input
                  type="number"
                  value={minWins}
                  onChange={(e) => setMinWins(e.target.value)}
                  placeholder="0"
                  className="mt-1 w-full bg-[#020617] border border-[#111827] rounded-lg px-2 py-1.5 outline-none text-sm"
                />
              </div>

              {/* bottom row: max score + sort */}
              <div className="md:col-span-2 flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <label className="text-gray-400 text-xs uppercase tracking-wide">
                    Max score
                  </label>
                  <input
                    type="number"
                    value={maxScore}
                    onChange={(e) => setMaxScore(e.target.value)}
                    placeholder="10000"
                    className="mt-1 w-full bg-[#020617] border border-[#111827] rounded-lg px-2 py-1.5 outline-none text-sm"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-gray-400 text-xs uppercase tracking-wide">
                    Sort by
                  </label>
                  <div className="mt-1 flex bg-[#020617] border border-[#111827] rounded-lg overflow-hidden">
                    <button
                      onClick={() => setSortBy("score")}
                      className={`flex-1 px-2 py-1.5 text-xs font-medium ${
                        sortBy === "score"
                          ? "bg-emerald-600 text-white"
                          : "text-gray-300"
                      }`}
                    >
                      Score
                    </button>
                    <button
                      onClick={() => setSortBy("name")}
                      className={`flex-1 px-2 py-1.5 text-xs font-medium ${
                        sortBy === "name"
                          ? "bg-emerald-600 text-white"
                          : "text-gray-300"
                      }`}
                    >
                      Name
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* LIST */}
            <ul className="mt-2 space-y-3">
              {filteredLeaderboard.map((p) => {
                const avatarSrc =
                  p.avatar && p.avatar.trim().length > 0
                    ? p.avatar
                    : FALLBACK_AVATAR;

                return (
                  <li
                    key={p.id}
                    className="flex items-center justify-between bg-[#06101f] px-4 py-3 rounded-xl hover:bg-[#0b1728] transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center overflow-hidden border border-emerald-400/60">
                        <img
                          src={avatarSrc}
                          alt={p.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = FALLBACK_AVATAR;
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-sm text-emerald-400">
                          Quests completed: {p.questsCompleted} / 0
                        </p>
                      </div>
                    </div>

                    <span className="text-lg font-semibold text-emerald-400">
                      💎{p.score}
                    </span>
                  </li>
                );
              })}

              {filteredLeaderboard.length === 0 && (
                <li className="text-center text-sm text-gray-500 py-6">
                  No players found matching the criteria.
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* RIGHT — REWARDS + MVP CARD */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🏆 Monthly Rewards
          </h2>

          <p className="text-gray-400 mb-6">
            Top 10 receive monthly points rewards based on their position.
          </p>

          <div className="space-y-4">
            {rewards.map((r, i) => {
              const isTop3 = i < 3;
              return (
                <div
                  key={i}
                  className={`
                    flex items-center justify-between px-5 py-4 rounded-2xl border shadow
                    transition relative overflow-hidden
                    ${
                      isTop3
                        ? "bg-[#111827] border-[#1f2937]"
                        : "bg-[#020819] border-[#111827] hover:bg-[#0b1728]"
                    }
                  `}
                  style={
                    isTop3
                      ? {
                          backgroundImage:
                            "linear-gradient(135deg, rgba(148,163,184,0.25), rgba(15,23,42,0.9))",
                        }
                      : {}
                  }
                >
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-lg font-bold ${
                        isTop3 ? "text-white" : "text-gray-200"
                      }`}
                    >
                      {r.place}
                    </span>
                    <span className="text-gray-400 text-sm">place</span>
                  </div>

                  <span
                    className={`text-xl font-extrabold ${
                      isTop3 ? "text-white" : "text-emerald-400"
                    }`}
                  >
                    💎{r.amount}
                  </span>
                </div>
              );
            })}
          </div>

          {/* MVP card */}
          {players[0] && <MVPCard player={players[0]} />}
        </div>
      </div>
    </div>
  );
}

/* ====================== MVP CARD ====================== */
function MVPCard({ player }: MVPCardProps) {
  const avatarSrc =
    player.avatar && player.avatar.trim().length > 0
      ? player.avatar
      : FALLBACK_AVATAR;

  return (
    <div className="mt-10 bg-[#020819] border border-[#111827] rounded-2xl p-6 shadow-xl animate-fade-in">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        ⭐ Player of the Week
      </h3>

      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-28 h-28 rounded-2xl bg-black border-4 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.55)] animate-pulse-border flex items-center justify-center overflow-hidden">
            <img
              src={avatarSrc}
              alt={player.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = FALLBACK_AVATAR;
              }}
            />
          </div>

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl animate-crown-bounce">
            👑
          </div>
        </div>

        <p className="mt-3 text-lg font-semibold text-white">{player.name}</p>

        <div className="mt-2 px-5 py-2 rounded-full bg-[#111827] text-emerald-300 font-bold text-lg shadow-lg relative overflow-hidden">
          💎{player.score}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent translate-x-[-120%] animate-shimmer" />
        </div>

        <div className="w-full mt-6">
          <p className="text-sm text-gray-400 mb-1 text-center">
            Weekly Progress
          </p>

          <div className="w-full h-3 bg-[#111827] rounded-full overflow-hidden">
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

/* ====================== PODIUM ====================== */
function PodiumSection({ leaderboard }: PodiumSectionProps) {
  const first = leaderboard[0];
  const second = leaderboard[1];
  const third = leaderboard[2];

  if (!first || !second || !third) return null;

  return (
    <div className="w-full flex flex-col items-center mb-20 select-none">
      <div className="flex gap-16 items-end justify-center">
        <div className="animate-bounce-in opacity-0 delay-[0.15s]">
          <PodiumBlock
            place={2}
            user={second}
            height="h-48"
            gradient="from-emerald-700 via-emerald-500 to-emerald-400"
            border="border-emerald-400"
            scoreColor="text-emerald-300"
          />
        </div>

        <div className="animate-bounce-in opacity-0 delay-[0s]">
          <PodiumBlock
            place={1}
            user={first}
            height="h-64"
            gradient="from-emerald-500 via-emerald-400 to-emerald-300"
            border="border-yellow-400"
            crown
            scoreColor="text-yellow-300"
          />
        </div>

        <div className="animate-bounce-in opacity-0 delay-[0.30s]">
          <PodiumBlock
            place={3}
            user={third}
            height="h-40"
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
  const avatarSrc =
    user.avatar && user.avatar.trim().length > 0
      ? user.avatar
      : FALLBACK_AVATAR;

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-24 h-24 rounded-2xl bg-black border-4 ${border}
        shadow-[0_0_30px_rgba(34,197,94,0.25)] flex items-center justify-center overflow-hidden`}
      >
        <img
          src={avatarSrc}
          alt={user.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_AVATAR;
          }}
        />

        {crown && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl drop-shadow-xl">
            👑
          </div>
        )}
      </div>

      <p className="mt-2 text-gray-300">{user.name}</p>

      <div className="mt-1 px-4 py-1 rounded-full bg-[#111827] relative overflow-hidden shadow-lg">
        <span className={`font-semibold ${scoreColor}`}>💎{user.score}</span>
      </div>

      <div
        className={`${height} w-40 rounded-t-3xl mt-4 flex items-end justify-center pb-5 border border-[#111827]
        bg-gradient-to-b ${gradient}
        shadow-[0_30px_50px_rgba(16,185,129,0.45)]`}
      >
        <span className="text-5xl text-white font-extrabold opacity-95 drop-shadow-xl">
          {place}
        </span>
      </div>
    </div>
  );
}

/* ====================== ANIMATIONS CSS ====================== */
const globalStyles = `
@keyframes bounceIn {
  0% { opacity: 0; transform: translateY(60px) scale(0.9); }
  60% { opacity: 1; transform: translateY(-10px) scale(1.05); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.animate-bounce-in {
  animation: bounceIn 0.9s forwards ease-out;
}

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
