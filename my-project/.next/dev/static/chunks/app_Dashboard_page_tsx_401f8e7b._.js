(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/Dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const TILE_DARK = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const LAST_CLEANUPS = [
    {
        id: 1,
        title: "Bega riverside plastic cleanup",
        desc: "Gathered PET bottles and cans along the river.",
        date: "2025-11-10",
        bags: 4,
        pos: {
            lat: 45.7489,
            lng: 21.229
        }
    },
    {
        id: 2,
        title: "Neighborhood park trash sweep",
        desc: "Cleaned snack wrappers and cigarette butts around benches.",
        date: "2025-11-05",
        bags: 3,
        pos: {
            lat: 45.7545,
            lng: 21.22
        }
    },
    {
        id: 3,
        title: "Street-side bottle collection",
        desc: "Focused on glass bottles near the tram station.",
        date: "2025-11-01",
        bags: 2,
        pos: {
            lat: 45.742,
            lng: 21.24
        }
    },
    {
        id: 4,
        title: "Green area micro-cleanup",
        desc: "Removed mixed waste from a small green strip.",
        date: "2025-10-28",
        bags: 1,
        pos: {
            lat: 45.761,
            lng: 21.205
        }
    }
];
const IMPACT_TIMELINE = {
    labels: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ],
    bags: [
        3,
        6,
        2,
        5,
        4,
        7,
        6
    ]
};
function ProfileDashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "Andrei Popescu",
            username: "@andrei.clean",
            avatar: "/images/rafa.jpg",
            level: 7,
            rank: 12,
            diamonds: 420,
            totalCleanups: 34,
            totalBags: 96,
            totalHours: 52
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const user = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold tracking-tight",
                    children: "Profile"
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 94,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400 mt-1",
                    children: "Track your cleanup impact, badges and latest missions on the map."
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 94,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== router) {
        t2 = ({
            "ProfileDashboardPage[<button>.onClick]": ()=>router.back()
        })["ProfileDashboardPage[<button>.onClick]"];
        $[3] = router;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-base",
            children: "←"
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Back to last page"
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t2,
                    className: "self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all",
                    children: [
                        t3,
                        t4
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 122,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    let t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.65)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: user.avatar,
                        alt: user.name,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/Dashboard/page.tsx",
                        lineNumber: 132,
                        columnNumber: 159
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 132,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-emerald-500 text-[11px] font-semibold",
                    children: [
                        "Lv. ",
                        user.level
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 132,
                    columnNumber: 245
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold",
            children: user.name
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400",
            children: user.username
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
    } else {
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t7,
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-xs text-emerald-400 flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base",
                                    children: "💎"
                                }, void 0, false, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 137
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: [
                                        user.diamonds,
                                        " eco points"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 174
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 145,
                            columnNumber: 68
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 145,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#020617] border border-[#1e293b] rounded-xl py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-1",
                    children: "Global rank"
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 152,
                    columnNumber: 81
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-bold text-white",
                    children: [
                        "#",
                        user.rank
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 152,
                    columnNumber: 130
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#020617] border border-[#1e293b] rounded-xl py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-1",
                    children: "Cleanups"
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 159,
                    columnNumber: 81
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-bold text-emerald-400",
                    children: user.totalCleanups
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 159,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid grid-cols-3 gap-3 text-center text-xs",
                    children: [
                        t10,
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#020617] border border-[#1e293b] rounded-xl py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 mb-1",
                                    children: "Hours"
                                }, void 0, false, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 240
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-bold text-emerald-400",
                                    children: user.totalHours
                                }, void 0, false, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 283
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 166,
                            columnNumber: 170
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 166,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-semibold mb-3 text-gray-100",
            children: "Impact overview"
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400",
                    children: "Total bags collected"
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 180,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-emerald-400",
                    children: user.totalBags
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 180,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400",
            children: "Average bags / cleanup"
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: (user.totalBags / user.totalCleanups).toFixed(1)
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 194,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400",
            children: "Average duration"
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 text-sm",
            children: [
                t14,
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t17,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: [
                                (user.totalHours / user.totalCleanups).toFixed(1),
                                " h"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 208,
                            columnNumber: 112
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 208,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    let t19;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 mb-1",
            children: "Progress to next level"
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl",
            children: [
                t13,
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: [
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 w-full bg-[#020617] border border-[#1e293b] rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full",
                                style: {
                                    width: "68%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/Dashboard/page.tsx",
                                lineNumber: 222,
                                columnNumber: 222
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 222,
                            columnNumber: 128
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 222,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[23] = t20;
    } else {
        t20 = $[23];
    }
    let t21;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-semibold mb-3 text-gray-100",
            children: "Badges & achievements"
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[24] = t21;
    } else {
        t21 = $[24];
    }
    let t22;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 lg:col-span-1",
            children: [
                t12,
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl",
                    children: [
                        t21,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                    label: "River Guardian",
                                    desc: "5+ river cleanups",
                                    icon: "\uD83C\uDF0A"
                                }, void 0, false, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 193
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                    label: "Bottle Hunter",
                                    desc: "200+ bottles collected",
                                    icon: "\uD83E\uDDF4"
                                }, void 0, false, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 272
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                    label: "Weekend Warrior",
                                    desc: "Active 4 weekends in a row",
                                    icon: "\uD83D\uDCC5"
                                }, void 0, false, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 355
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                    label: "Early Supporter",
                                    desc: "Joined in beta",
                                    icon: "\u2B50"
                                }, void 0, false, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 444
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 238,
                            columnNumber: 147
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 238,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[25] = t22;
    } else {
        t22 = $[25];
    }
    let t23;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold",
                            children: "Last cleanup locations"
                        }, void 0, false, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 245,
                            columnNumber: 72
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 mt-1",
                            children: "A quick overview of your most recent cleanup spots."
                        }, void 0, false, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 245,
                            columnNumber: 137
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 245,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40",
                    children: [
                        LAST_CLEANUPS.length,
                        " locations"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 245,
                    columnNumber: 240
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[26] = t23;
    } else {
        t23 = $[26];
    }
    let t24;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "xl:col-span-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniCleanupMap, {
                cleanups: LAST_CLEANUPS
            }, void 0, false, {
                fileName: "[project]/app/Dashboard/page.tsx",
                lineNumber: 252,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[27] = t24;
    } else {
        t24 = $[27];
    }
    let t25;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-2 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl",
                            children: [
                                t23,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 xl:grid-cols-3 gap-4",
                                    children: [
                                        t24,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 max-h-[260px] overflow-y-auto pr-1",
                                            children: LAST_CLEANUPS.map(_ProfileDashboardPageLAST_CLEANUPSMap)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Dashboard/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 257
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 197
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 259,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImpactTimelineCard, {}, void 0, false, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 259,
                            columnNumber: 395
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 259,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[28] = t25;
    } else {
        t25 = $[28];
    }
    let t26;
    if ($[29] !== t5) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#020617] text-white px-6 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto space-y-8",
                children: [
                    t5,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/app/Dashboard/page.tsx",
                lineNumber: 266,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[29] = t5;
        $[30] = t26;
    } else {
        t26 = $[30];
    }
    return t26;
}
_s(ProfileDashboardPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfileDashboardPage;
/* ------------------------------------------------------------------
   MINI MAP COMPONENT (Leaflet)
-------------------------------------------------------------------*/ function _ProfileDashboardPageLAST_CLEANUPSMap(c) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#020617] border border-[#1e293b] rounded-xl px-3 py-3 text-xs hover:border-emerald-500/70 hover:bg-[#020617]/60 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-[13px]",
                                children: c.title
                            }, void 0, false, {
                                fileName: "[project]/app/Dashboard/page.tsx",
                                lineNumber: 279,
                                columnNumber: 226
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-0.5",
                                children: c.desc
                            }, void 0, false, {
                                fileName: "[project]/app/Dashboard/page.tsx",
                                lineNumber: 279,
                                columnNumber: 280
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Dashboard/page.tsx",
                        lineNumber: 279,
                        columnNumber: 221
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-gray-500 whitespace-nowrap",
                        children: c.date
                    }, void 0, false, {
                        fileName: "[project]/app/Dashboard/page.tsx",
                        lineNumber: 279,
                        columnNumber: 334
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Dashboard/page.tsx",
                lineNumber: 279,
                columnNumber: 165
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center justify-between text-[11px] text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "🗑️ ",
                            c.bags,
                            " bags collected"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Dashboard/page.tsx",
                        lineNumber: 279,
                        columnNumber: 499
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            c.pos.lat.toFixed(3),
                            ", ",
                            c.pos.lng.toFixed(3)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Dashboard/page.tsx",
                        lineNumber: 279,
                        columnNumber: 539
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Dashboard/page.tsx",
                lineNumber: 279,
                columnNumber: 417
            }, this)
        ]
    }, c.id, true, {
        fileName: "[project]/app/Dashboard/page.tsx",
        lineNumber: 279,
        columnNumber: 10
    }, this);
}
function MiniCleanupMap(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d";
    }
    const { cleanups } = t0;
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "MiniCleanupMap[useEffect()]": ()=>{
                if (!mapContainerRef.current || mapRef.current) {
                    return;
                }
                const map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapContainerRef.current, {
                    center: [
                        45.7489,
                        21.2087
                    ],
                    zoom: 12,
                    zoomControl: false,
                    attributionControl: false
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer(TILE_DARK, {
                    maxZoom: 18
                }).addTo(map);
                const group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layerGroup().addTo(map);
                mapRef.current = map;
                markersRef.current = group;
            }
        })["MiniCleanupMap[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[3] !== cleanups) {
        t3 = ({
            "MiniCleanupMap[useEffect()]": ()=>{
                if (!mapRef.current || !markersRef.current) {
                    return;
                }
                markersRef.current.clearLayers();
                const points = [];
                cleanups.forEach({
                    "MiniCleanupMap[useEffect() > cleanups.forEach()]": (c)=>{
                        const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circleMarker([
                            c.pos.lat,
                            c.pos.lng
                        ], {
                            radius: 7,
                            weight: 2,
                            color: "#22c55e",
                            fillColor: "#22c55e",
                            fillOpacity: 0.8
                        });
                        marker.bindPopup(`<strong>${c.title}</strong><br/>${c.desc}<br/><small>${c.date}</small>`);
                        marker.addTo(markersRef.current);
                        points.push([
                            c.pos.lat,
                            c.pos.lng
                        ]);
                    }
                }["MiniCleanupMap[useEffect() > cleanups.forEach()]"]);
                if (points.length > 0) {
                    const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(points);
                    mapRef.current.fitBounds(bounds, {
                        padding: [
                            20,
                            20
                        ]
                    });
                }
                return ()=>{
                    markersRef.current?.clearLayers();
                };
            }
        })["MiniCleanupMap[useEffect()]"];
        t4 = [
            cleanups
        ];
        $[3] = cleanups;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[260px] rounded-xl overflow-hidden border border-[#1e293b]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapContainerRef,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/app/Dashboard/page.tsx",
                lineNumber: 371,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 371,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_s1(MiniCleanupMap, "TRVeOUIyAu/7SGx3mdQew96D/zE=");
_c1 = MiniCleanupMap;
/* ------------------------------------------------------------------
   IMPACT TIMELINE CARD + MINI CHART
-------------------------------------------------------------------*/ function ImpactTimelineCard() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d";
    }
    const data = IMPACT_TIMELINE.bags;
    const labels = IMPACT_TIMELINE.labels;
    const best = Math.max(...data);
    const avg = data.reduce(_ImpactTimelineCardDataReduce, 0) / data.length;
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-semibold text-gray-100",
                            children: "Impact timeline"
                        }, void 0, false, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 397,
                            columnNumber: 71
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 mt-1",
                            children: "Bags collected across your last 7 cleanups."
                        }, void 0, false, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 397,
                            columnNumber: 143
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 397,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] text-gray-500",
                    children: "Last 7 sessions"
                }, void 0, false, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 397,
                    columnNumber: 238
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 397,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImpactTimelineMiniChart, {
            data: data,
            labels: labels
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 398,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "Best session:",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-emerald-400 font-semibold",
                    children: [
                        best,
                        " bags"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 407,
                    columnNumber: 34
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 407,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#020617] border border-[#1e293b] rounded-2xl p-5 shadow-xl",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex items-center justify-between text-[11px] text-gray-400",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Average:",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-emerald-400 font-semibold",
                                    children: [
                                        avg.toFixed(1),
                                        " bags"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Dashboard/page.tsx",
                                    lineNumber: 414,
                                    columnNumber: 203
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 414,
                            columnNumber: 184
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 414,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 414,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c2 = ImpactTimelineCard;
function _ImpactTimelineCardDataReduce(s, v) {
    return s + v;
}
function ImpactTimelineMiniChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d";
    }
    const { data, labels } = t0;
    const maxVal = Math.max(...data, 1);
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== data || $[2] !== maxVal) {
        let t8;
        if ($[10] !== data.length || $[11] !== maxVal) {
            t8 = ({
                "ImpactTimelineMiniChart[data.map()]": (value, index)=>{
                    const x = data.length > 1 ? 260 / (data.length - 1) * index : 130;
                    const y = 80 - value / maxVal * 64 - 8;
                    return {
                        x,
                        y
                    };
                }
            })["ImpactTimelineMiniChart[data.map()]"];
            $[10] = data.length;
            $[11] = maxVal;
            $[12] = t8;
        } else {
            t8 = $[12];
        }
        const points = data.map(t8);
        const pathD = points.map(_ImpactTimelineMiniChartPointsMap).join(" ");
        const areaD = pathD + ` L${points[points.length - 1]?.x ?? 260},${80} L${points[0]?.x ?? 0},${80} Z`;
        t7 = "w-full";
        t1 = "0 0 260 80";
        t2 = "w-full h-24 overflow-visible";
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "impactGradient",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#22c55e",
                            stopOpacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 470,
                            columnNumber: 82
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#22c55e",
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/app/Dashboard/page.tsx",
                            lineNumber: 470,
                            columnNumber: 140
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Dashboard/page.tsx",
                    lineNumber: 470,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Dashboard/page.tsx",
                lineNumber: 470,
                columnNumber: 12
            }, this);
            $[13] = t3;
        } else {
            t3 = $[13];
        }
        if ($[14] !== areaD) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: areaD,
                fill: "url(#impactGradient)",
                stroke: "none",
                opacity: 0.6
            }, void 0, false, {
                fileName: "[project]/app/Dashboard/page.tsx",
                lineNumber: 476,
                columnNumber: 12
            }, this);
            $[14] = areaD;
            $[15] = t4;
        } else {
            t4 = $[15];
        }
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: pathD,
            fill: "none",
            stroke: "#22c55e",
            strokeWidth: 2.2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 482,
            columnNumber: 10
        }, this);
        t6 = points.map(_ImpactTimelineMiniChartPointsMap2);
        $[1] = data;
        $[2] = maxVal;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
        t7 = $[9];
    }
    let t8;
    if ($[16] !== t1 || $[17] !== t2 || $[18] !== t3 || $[19] !== t4 || $[20] !== t5 || $[21] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: t1,
            className: t2,
            children: [
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 504,
            columnNumber: 10
        }, this);
        $[16] = t1;
        $[17] = t2;
        $[18] = t3;
        $[19] = t4;
        $[20] = t5;
        $[21] = t6;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== labels) {
        t9 = labels.map(_ImpactTimelineMiniChartLabelsMap);
        $[23] = labels;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1 flex justify-between text-[10px] text-gray-500",
            children: t9
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== t10 || $[28] !== t7 || $[29] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t7;
        $[29] = t8;
        $[30] = t11;
    } else {
        t11 = $[30];
    }
    return t11;
}
_c3 = ImpactTimelineMiniChart;
/* ------------------------------------------------------------------
   SMALL BADGE COMPONENT
-------------------------------------------------------------------*/ function _ImpactTimelineMiniChartLabelsMap(label) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: label
    }, label, false, {
        fileName: "[project]/app/Dashboard/page.tsx",
        lineNumber: 548,
        columnNumber: 10
    }, this);
}
function _ImpactTimelineMiniChartPointsMap2(p_0, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
        cx: p_0.x,
        cy: p_0.y,
        r: 3,
        fill: "#22c55e",
        stroke: "#022c22",
        strokeWidth: 1.4
    }, i_0, false, {
        fileName: "[project]/app/Dashboard/page.tsx",
        lineNumber: 551,
        columnNumber: 10
    }, this);
}
function _ImpactTimelineMiniChartPointsMap(p, i) {
    return `${i === 0 ? "M" : "L"}${p.x},${p.y}`;
}
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48988febbb6bc451a349fe037a6578112521b823a016a42f8e9035ade210920d";
    }
    const { label, desc, icon } = t0;
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg",
            children: icon
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 571,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== label) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-semibold text-gray-100",
            children: label
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 579,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== desc) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400",
            children: desc
        }, void 0, false, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 587,
            columnNumber: 10
        }, this);
        $[5] = desc;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[11px]",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 595,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t1 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-2 bg-[#020617] border border-[#1e293b] rounded-xl px-3 py-2",
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/app/Dashboard/page.tsx",
            lineNumber: 604,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_c4 = Badge;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ProfileDashboardPage");
__turbopack_context__.k.register(_c1, "MiniCleanupMap");
__turbopack_context__.k.register(_c2, "ImpactTimelineCard");
__turbopack_context__.k.register(_c3, "ImpactTimelineMiniChart");
__turbopack_context__.k.register(_c4, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_Dashboard_page_tsx_401f8e7b._.js.map