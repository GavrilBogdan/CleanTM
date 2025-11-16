(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Leaderboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeaderboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LeaderboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "eff1d3f516c05df78d92d6320d7af4718bdacc5f10c3b5317b51433c72bb0d64") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eff1d3f516c05df78d92d6320d7af4718bdacc5f10c3b5317b51433c72bb0d64";
    }
    const leaderboard = [
        {
            name: "Andrei Popescu",
            score: 420,
            battles: "69 / 88",
            avatar: "/images/rafa.jpg"
        },
        {
            name: "Mihai Ionescu",
            score: 415,
            battles: "73 / 100",
            avatar: "/images/salam.jpg"
        },
        {
            name: "Robert Vadean",
            score: 390,
            battles: "63 / 89",
            avatar: "/images/guta.jpg"
        },
        {
            name: "Godja Flavius",
            score: 385,
            battles: "59 / 90",
            avatar: "/images/romanes.jpg"
        },
        {
            name: "Costel Marinescu",
            score: 360,
            battles: "53 / 112",
            avatar: "/images/tzanca.jpg"
        },
        {
            name: "Daniel Boloaga",
            score: 324,
            battles: "24 / 76",
            avatar: "/images/minune.jpg"
        },
        {
            name: "Bogdan Georgescu",
            score: 290,
            battles: "32 / 97",
            avatar: "/images/ciorba.jpg"
        }
    ];
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                place: "1st",
                amount: 250
            },
            {
                place: "2nd",
                amount: 200
            },
            {
                place: "3rd",
                amount: 150
            },
            {
                place: "4th",
                amount: 100
            },
            {
                place: "5th",
                amount: 75
            },
            {
                place: "6th",
                amount: 60
            },
            {
                place: "7th",
                amount: 50
            },
            {
                place: "8th",
                amount: 40
            },
            {
                place: "9th",
                amount: 30
            },
            {
                place: "10th",
                amount: 25
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const rewards = t0;
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [minScore, setMinScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [maxScore, setMaxScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [minBattles, setMinBattles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("score");
    let t1;
    if ($[2] !== sortBy) {
        t1 = ({
            "LeaderboardPage[(anonymous)()]": (a, b)=>{
                if (sortBy === "score") {
                    return b.score - a.score;
                }
                return a.name.localeCompare(b.name);
            }
        })["LeaderboardPage[(anonymous)()]"];
        $[2] = sortBy;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const filteredLeaderboard = [
        ...leaderboard
    ].filter({
        "LeaderboardPage[(anonymous)()]": (p)=>{
            if (search.trim().length > 0) {
                const term = search.toLowerCase();
                if (!p.name.toLowerCase().includes(term)) {
                    return false;
                }
            }
            if (minScore !== "" && p.score < Number(minScore)) {
                return false;
            }
            if (maxScore !== "" && p.score > Number(maxScore)) {
                return false;
            }
            if (minBattles !== "") {
                const wins = parseInt(p.battles.split("/")[0].trim(), 10);
                if (wins < Number(minBattles)) {
                    return false;
                }
            }
            return true;
        }
    }["LeaderboardPage[(anonymous)()]"]).sort(t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: globalStyles
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200",
                    children: [
                        "CleanTM • Season 1",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-1 w-1 rounded-full bg-emerald-300"
                        }, void 0, false, {
                            fileName: "[project]/components/Leaderboard.tsx",
                            lineNumber: 160,
                            columnNumber: 222
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 160,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-emerald-100 via-white to-emerald-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.7)]",
                    children: "Leaderboard"
                }, void 0, false, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 160,
                    columnNumber: 284
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm md:text-base text-emerald-100/80 max-w-xl",
                    children: "Track the most active eco-heroes in CleanTM. Complete quests, earn 💎 and climb the rankings every month."
                }, void 0, false, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 160,
                    columnNumber: 517
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] uppercase tracking-[0.18em] text-emerald-200",
            children: "Total users"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "Monthly Leaderboard"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex rounded-full bg-slate-900/80 border border-slate-700/60 p-1 text-xs",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-3 py-1 rounded-full bg-emerald-500 text-slate-900 font-semibold shadow-[0_0_18px_rgba(16,185,129,0.7)]",
                    children: "Monthly"
                }, void 0, false, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 181,
                    columnNumber: 107
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-3 py-1 rounded-full text-slate-200 hover:bg-slate-800/80 transition",
                    children: "All Time"
                }, void 0, false, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 181,
                    columnNumber: 249
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 181,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-gray-300 text-xs uppercase tracking-wide",
            children: "Search user"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 188,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-500 text-sm",
            children: "🔍"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 195,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "LeaderboardPage[<input>.onChange]": (e)=>setSearch(e.target.value)
        })["LeaderboardPage[<input>.onChange]"];
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== search) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 flex items-center gap-2 bg-slate-950/80 border border-slate-700/70 rounded-xl px-3 py-1.5 shadow-inner shadow-black/40",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: search,
                            onChange: t9,
                            placeholder: "Type a name\u2026",
                            className: "bg-transparent flex-1 outline-none text-sm text-gray-100 placeholder:text-gray-500"
                        }, void 0, false, {
                            fileName: "[project]/components/Leaderboard.tsx",
                            lineNumber: 211,
                            columnNumber: 191
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 211,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[12] = search;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-gray-300 text-xs uppercase tracking-wide",
            children: "Min score"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "LeaderboardPage[<input>.onChange]": (e_0)=>setMinScore(e_0.target.value)
        })["LeaderboardPage[<input>.onChange]"];
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== minScore) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    value: minScore,
                    onChange: t12,
                    placeholder: "300",
                    className: "mt-1 w-full bg-slate-950/80 border border-slate-700/70 rounded-xl px-3 py-1.5 outline-none text-sm text-gray-100 placeholder:text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 235,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[16] = minScore;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-gray-300 text-xs uppercase tracking-wide",
            children: "Min quests"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "LeaderboardPage[<input>.onChange]": (e_1)=>setMinBattles(e_1.target.value)
        })["LeaderboardPage[<input>.onChange]"];
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== minBattles) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    value: minBattles,
                    onChange: t15,
                    placeholder: "50",
                    className: "mt-1 w-full bg-slate-950/80 border border-slate-700/70 rounded-xl px-3 py-1.5 outline-none text-sm text-gray-100 placeholder:text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 259,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[20] = minBattles;
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-gray-300 text-xs uppercase tracking-wide",
            children: "Max quests"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "LeaderboardPage[<input>.onChange]": (e_2)=>setMaxScore(e_2.target.value)
        })["LeaderboardPage[<input>.onChange]"];
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] !== maxScore) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    value: maxScore,
                    onChange: t18,
                    placeholder: "450",
                    className: "mt-1 w-full bg-slate-950/80 border border-slate-700/70 rounded-xl px-3 py-1.5 outline-none text-sm text-gray-100 placeholder:text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 283,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[24] = maxScore;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-gray-300 text-xs uppercase tracking-wide",
            children: "Sort by"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "LeaderboardPage[<button>.onClick]": ()=>setSortBy("score")
        })["LeaderboardPage[<button>.onClick]"];
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    const t22 = `flex-1 px-2 py-1.5 text-xs font-medium transition ${sortBy === "score" ? "bg-emerald-500 text-slate-950" : "text-gray-300 hover:bg-slate-800/80"}`;
    let t23;
    if ($[28] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t21,
            className: t22,
            children: "Score"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[28] = t22;
        $[29] = t23;
    } else {
        t23 = $[29];
    }
    let t24;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "LeaderboardPage[<button>.onClick]": ()=>setSortBy("name")
        })["LeaderboardPage[<button>.onClick]"];
        $[30] = t24;
    } else {
        t24 = $[30];
    }
    const t25 = `flex-1 px-2 py-1.5 text-xs font-medium transition ${sortBy === "name" ? "bg-emerald-500 text-slate-950" : "text-gray-300 hover:bg-slate-800/80"}`;
    let t26;
    if ($[31] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t24,
            className: t25,
            children: "Name"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[31] = t25;
        $[32] = t26;
    } else {
        t26 = $[32];
    }
    let t27;
    if ($[33] !== t23 || $[34] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 flex bg-slate-950/80 border border-slate-700/70 rounded-xl overflow-hidden",
                    children: [
                        t23,
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 334,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[33] = t23;
        $[34] = t26;
        $[35] = t27;
    } else {
        t27 = $[35];
    }
    let t28;
    if ($[36] !== t19 || $[37] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2 flex flex-col md:flex-row gap-3",
            children: [
                t19,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = t27;
        $[38] = t28;
    } else {
        t28 = $[38];
    }
    let t29;
    if ($[39] !== t10 || $[40] !== t13 || $[41] !== t16 || $[42] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 mb-3 grid grid-cols-1 md:grid-cols-4 gap-3 text-sm",
            children: [
                t10,
                t13,
                t16,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[39] = t10;
        $[40] = t13;
        $[41] = t16;
        $[42] = t28;
        $[43] = t29;
    } else {
        t29 = $[43];
    }
    const t30 = "mt-2 space-y-3";
    const t31 = filteredLeaderboard.map(_LeaderboardPageFilteredLeaderboardMap);
    let t32;
    if ($[44] !== filteredLeaderboard.length) {
        t32 = filteredLeaderboard.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "text-center text-sm text-gray-500 py-6",
            children: "No users found matching the criteria."
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 365,
            columnNumber: 47
        }, this);
        $[44] = filteredLeaderboard.length;
        $[45] = t32;
    } else {
        t32 = $[45];
    }
    let t33;
    if ($[46] !== t31 || $[47] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: t30,
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[46] = t31;
        $[47] = t32;
        $[48] = t33;
    } else {
        t33 = $[48];
    }
    let t34;
    let t35;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-2 flex items-center gap-2",
            children: "🏆 Monthly Rewards"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-emerald-100/80 mb-5",
            children: "Top 10 receive monthly 💎 bonus based on their final position. Stay active to keep your spot."
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[49] = t34;
        $[50] = t35;
    } else {
        t34 = $[49];
        t35 = $[50];
    }
    let t36;
    if ($[51] !== rewards) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950/70 border border-emerald-500/25 rounded-3xl p-5 shadow-[0_0_35px_rgba(15,23,42,0.9)] backdrop-blur-2xl",
            children: [
                t34,
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: rewards.map(_LeaderboardPageRewardsMap)
                }, void 0, false, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 393,
                    columnNumber: 154
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[51] = rewards;
        $[52] = t36;
    } else {
        t36 = $[52];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white px-4 sm:px-6 py-10 pt-[5rem]",
        children: [
            t2,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl bg-slate-900/70 border border-emerald-500/30 px-5 py-3 shadow-[0_0_30px_rgba(16,185,129,0.6)] text-right",
                                children: [
                                    t4,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-emerald-300",
                                        children: leaderboard.length
                                    }, void 0, false, {
                                        fileName: "[project]/components/Leaderboard.tsx",
                                        lineNumber: 399,
                                        columnNumber: 413
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-emerald-100/70",
                                        children: [
                                            filteredLeaderboard.length,
                                            " currently visible"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Leaderboard.tsx",
                                        lineNumber: 399,
                                        columnNumber: 488
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Leaderboard.tsx",
                                lineNumber: 399,
                                columnNumber: 275
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Leaderboard.tsx",
                        lineNumber: 399,
                        columnNumber: 181
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 xl:grid-cols-3 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "xl:col-span-2 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl bg-slate-950/60 border border-emerald-500/25 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-2xl px-4 sm:px-6 py-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PodiumSection, {
                                            leaderboard: leaderboard
                                        }, void 0, false, {
                                            fileName: "[project]/components/Leaderboard.tsx",
                                            lineNumber: 399,
                                            columnNumber: 844
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Leaderboard.tsx",
                                        lineNumber: 399,
                                        columnNumber: 697
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/70 border border-emerald-500/25 rounded-3xl p-4 sm:p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between pb-4 border-b border-[#1e293b]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            t5,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-emerald-100/70 mt-1",
                                                                children: [
                                                                    filteredLeaderboard.length,
                                                                    " users found •",
                                                                    " ",
                                                                    leaderboard.length,
                                                                    " total"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Leaderboard.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 1157
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Leaderboard.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 1148
                                                    }, this),
                                                    t6
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Leaderboard.tsx",
                                                lineNumber: 399,
                                                columnNumber: 1033
                                            }, this),
                                            t29,
                                            t33
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Leaderboard.tsx",
                                        lineNumber: 399,
                                        columnNumber: 893
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Leaderboard.tsx",
                                lineNumber: 399,
                                columnNumber: 656
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    t36,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MVPCard, {
                                        player: leaderboard[0]
                                    }, void 0, false, {
                                        fileName: "[project]/components/Leaderboard.tsx",
                                        lineNumber: 399,
                                        columnNumber: 1352
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Leaderboard.tsx",
                                lineNumber: 399,
                                columnNumber: 1320
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Leaderboard.tsx",
                        lineNumber: 399,
                        columnNumber: 600
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 399,
                columnNumber: 146
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Leaderboard.tsx",
        lineNumber: 399,
        columnNumber: 10
    }, this);
}
_s(LeaderboardPage, "Gz4QPvnYtQFtirGNptVvuhW7CuI=");
_c = LeaderboardPage;
/* =======================================================================================
   MVP CARD
================================================================================================ */ function _LeaderboardPageRewardsMap(r, i_0) {
    const isTop3 = i_0 < 3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-between px-4 py-3 rounded-2xl border shadow relative overflow-hidden ${isTop3 ? "bg-slate-900/80 border-emerald-400/60" : "bg-slate-950/80 border-slate-700/80 hover:bg-slate-900/90"} transition`,
        style: isTop3 ? {
            backgroundImage: "linear-gradient(135deg, rgba(45,212,191,0.18), rgba(15,23,42,0.9))"
        } : {},
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-lg font-bold ${isTop3 ? "text-emerald-50" : "text-gray-200"}`,
                        children: r.place
                    }, void 0, false, {
                        fileName: "[project]/components/Leaderboard.tsx",
                        lineNumber: 409,
                        columnNumber: 54
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400 text-xs",
                        children: "place"
                    }, void 0, false, {
                        fileName: "[project]/components/Leaderboard.tsx",
                        lineNumber: 409,
                        columnNumber: 156
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 409,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-xl font-extrabold ${isTop3 ? "text-emerald-100" : "text-emerald-400"}`,
                children: [
                    "💎",
                    r.amount
                ]
            }, void 0, true, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 409,
                columnNumber: 214
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/components/Leaderboard.tsx",
        lineNumber: 407,
        columnNumber: 10
    }, this);
}
function _LeaderboardPageFilteredLeaderboardMap(p_0, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-2xl px-4 py-3 hover:bg-slate-800/90 transition shadow-[0_0_18px_rgba(15,23,42,0.9)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 bg-[#0f172a] rounded-full flex items-center justify-center text-2xl overflow-hidden border border-emerald-500/40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: p_0.avatar,
                            alt: p_0.name,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/Leaderboard.tsx",
                            lineNumber: 412,
                            columnNumber: 381
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Leaderboard.tsx",
                        lineNumber: 412,
                        columnNumber: 241
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-emerald-50",
                                children: p_0.name
                            }, void 0, false, {
                                fileName: "[project]/components/Leaderboard.tsx",
                                lineNumber: 412,
                                columnNumber: 470
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-emerald-300/90",
                                children: [
                                    "Quests completed: ",
                                    p_0.battles
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Leaderboard.tsx",
                                lineNumber: 412,
                                columnNumber: 527
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Leaderboard.tsx",
                        lineNumber: 412,
                        columnNumber: 465
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 412,
                columnNumber: 200
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg font-semibold text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]",
                children: [
                    "💎",
                    p_0.score
                ]
            }, void 0, true, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 412,
                columnNumber: 617
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/components/Leaderboard.tsx",
        lineNumber: 412,
        columnNumber: 10
    }, this);
}
function MVPCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "eff1d3f516c05df78d92d6320d7af4718bdacc5f10c3b5317b51433c72bb0d64") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eff1d3f516c05df78d92d6320d7af4718bdacc5f10c3b5317b51433c72bb0d64";
    }
    const { player } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold mb-4 flex items-center gap-2",
            children: "⭐ User of the Week"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 427,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== player.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\n            w-28 h-28 rounded-2xl bg-[#0b0c0d] border-4 border-emerald-400\n            shadow-[0_0_25px_rgba(16,185,129,0.55)] \n            animate-pulse-border\n            flex items-center justify-center overflow-hidden\n          ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrgkEw396ELf_HEc1iX9eAXjAazTMCOpDBA&s",
                alt: player.name,
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 434,
                columnNumber: 268
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 434,
            columnNumber: 10
        }, this);
        $[2] = player.name;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-6 left-1/2 -translate-x-1/2 text-4xl animate-crown-bounce",
            children: "👑"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 442,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 449,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== player.name) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-lg font-semibold text-emerald-50",
            children: player.name
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 457,
            columnNumber: 10
        }, this);
        $[7] = player.name;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\n            absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent\n            translate-x-[-120%] animate-shimmer\n          "
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 465,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== player.score) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\n          mt-2 px-5 py-2 rounded-full bg-[#1e293b]\n          text-emerald-300 font-bold text-lg\n          shadow-lg relative overflow-hidden\n        ",
            children: [
                "💎",
                player.score,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 472,
            columnNumber: 10
        }, this);
        $[10] = player.score;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-400 mb-1 text-center",
            children: "Weekly Progress"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 480,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full mt-6",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-3 bg-[#1e293b] rounded-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-emerald-500 rounded-full animate-grow-bar",
                        style: {
                            width: "78%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Leaderboard.tsx",
                        lineNumber: 487,
                        columnNumber: 113
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 487,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 487,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t4 || $[15] !== t5 || $[16] !== t7) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950/70 border border-emerald-500/25 rounded-3xl p-6 shadow-[0_0_35px_rgba(15,23,42,0.9)] backdrop-blur-2xl animate-fade-in",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        t4,
                        t5,
                        t7,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Leaderboard.tsx",
                    lineNumber: 496,
                    columnNumber: 164
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[14] = t4;
        $[15] = t5;
        $[16] = t7;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    return t10;
}
_c1 = MVPCard;
/* =======================================================================================
   PODIUM + BLOCKS
================================================================================================ */ function PodiumSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "eff1d3f516c05df78d92d6320d7af4718bdacc5f10c3b5317b51433c72bb0d64") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eff1d3f516c05df78d92d6320d7af4718bdacc5f10c3b5317b51433c72bb0d64";
    }
    const { leaderboard } = t0;
    const first = leaderboard[0];
    const second = leaderboard[1];
    const third = leaderboard[2];
    let t1;
    if ($[1] !== second) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-bounce-in opacity-0 delay-[0.15s]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PodiumBlock, {
                place: 2,
                user: second,
                height: "h-40 md:h-48",
                gradient: "from-emerald-700 via-emerald-500 to-emerald-400",
                border: "border-emerald-400",
                scoreColor: "text-emerald-300"
            }, void 0, false, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 526,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 526,
            columnNumber: 10
        }, this);
        $[1] = second;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== first) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-bounce-in opacity-0 delay-[0s]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PodiumBlock, {
                place: 1,
                user: first,
                height: "h-52 md:h-64",
                gradient: "from-emerald-500 via-emerald-400 to-emerald-300",
                border: "border-yellow-400",
                crown: true,
                scoreColor: "text-yellow-300"
            }, void 0, false, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 534,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 534,
            columnNumber: 10
        }, this);
        $[3] = first;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== third) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-bounce-in opacity-0 delay-[0.30s]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PodiumBlock, {
                place: 3,
                user: third,
                height: "h-32 md:h-40",
                gradient: "from-emerald-900 via-emerald-700 to-emerald-500",
                border: "border-emerald-700",
                scoreColor: "text-orange-300"
            }, void 0, false, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 542,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 542,
            columnNumber: 10
        }, this);
        $[5] = third;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center mb-4 select-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-10 md:gap-16 items-end justify-center",
                children: [
                    t1,
                    t2,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 550,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 550,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_c2 = PodiumSection;
function PodiumBlock(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "eff1d3f516c05df78d92d6320d7af4718bdacc5f10c3b5317b51433c72bb0d64") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eff1d3f516c05df78d92d6320d7af4718bdacc5f10c3b5317b51433c72bb0d64";
    }
    const { place, user, height, gradient, border, scoreColor, crown: t1 } = t0;
    const crown = t1 === undefined ? false : t1;
    const t2 = `relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#0f172a] border-4 ${border}
        shadow-[0_0_30px_rgba(34,197,94,0.25)] flex items-center justify-center overflow-hidden`;
    let t3;
    if ($[1] !== user.avatar || $[2] !== user.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: user.avatar,
            alt: user.name,
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 582,
            columnNumber: 10
        }, this);
        $[1] = user.avatar;
        $[2] = user.name;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== crown) {
        t4 = crown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-6 left-1/2 -translate-x-1/2 text-3xl drop-shadow-xl",
            children: "👑"
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 591,
            columnNumber: 19
        }, this);
        $[4] = crown;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t2 || $[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 599,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== user.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-gray-200 text-sm md:text-base",
            children: user.name
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 609,
            columnNumber: 10
        }, this);
        $[10] = user.name;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const t7 = `font-semibold ${scoreColor} text-sm md:text-base`;
    let t8;
    if ($[12] !== t7 || $[13] !== user.score) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1 px-4 py-1 rounded-full bg-[#1e293b] relative overflow-hidden shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: t7,
                children: [
                    "💎",
                    user.score
                ]
            }, void 0, true, {
                fileName: "[project]/components/Leaderboard.tsx",
                lineNumber: 618,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 618,
            columnNumber: 10
        }, this);
        $[12] = t7;
        $[13] = user.score;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const t9 = `${height} w-28 md:w-40 rounded-t-3xl mt-4 flex items-end justify-center pb-4 md:pb-5 border border-[#1e293b]
        bg-gradient-to-b ${gradient}
        shadow-[0_30px_50px_rgba(15,23,42,0.85)]`;
    let t10;
    if ($[15] !== place) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-3xl md:text-5xl text-white font-extrabold opacity-95 drop-shadow-xl",
            children: place
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 630,
            columnNumber: 11
        }, this);
        $[15] = place;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 638,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t11 || $[21] !== t5 || $[22] !== t6 || $[23] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center",
            children: [
                t5,
                t6,
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/Leaderboard.tsx",
            lineNumber: 647,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t5;
        $[22] = t6;
        $[23] = t8;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    return t12;
}
_c3 = PodiumBlock;
/* =======================================================================================
   CSS (Animations)
================================================================================================ */ const globalStyles = `
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
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LeaderboardPage");
__turbopack_context__.k.register(_c1, "MVPCard");
__turbopack_context__.k.register(_c2, "PodiumSection");
__turbopack_context__.k.register(_c3, "PodiumBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_Leaderboard_tsx_bd865977._.js.map