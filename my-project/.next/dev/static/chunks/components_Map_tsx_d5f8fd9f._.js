(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimisoaraProblemsMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2e$markercluster$2f$dist$2f$leaflet$2e$markercluster$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ──────────────────────────────────────────
   BASE DATA
   ────────────────────────────────────────── */ const FALLBACK_PROBLEMS = [
    {
        id: 1,
        title: "Pile of trash on Calea Șagului",
        desc: "Torn bags, PET bottles and waste dumped near the sidewalk. Needs quick cleanup.",
        pos: {
            lat: 45.7225,
            lng: 21.226
        },
        type: "salubritate",
        priority: "mare"
    },
    {
        id: 2,
        title: "Overflowing trash bins",
        desc: "Bins are full, garbage falls on the ground and is blown away by the wind.",
        pos: {
            lat: 45.7578,
            lng: 21.229
        },
        type: "salubritate",
        priority: "medie"
    },
    {
        id: 3,
        title: "PET bottles on the Bega riverbank",
        desc: "Plastic bottles and bags floating on the water and along the riverbank. Needs an eco-cleanup action.",
        pos: {
            lat: 45.7705,
            lng: 21.2444
        },
        type: "ecologizare",
        priority: "medie"
    },
    {
        id: 4,
        title: "Dirty tram station",
        desc: "Food leftovers, cigarette butts and packaging thrown next to the bench.",
        pos: {
            lat: 45.7401,
            lng: 21.2705
        },
        type: "salubritate",
        priority: "mică"
    },
    {
        id: 5,
        title: "Mud and litter after rain",
        desc: "Puddles full of cigarette butts, bags and paper gathered on the edge of the sidewalk.",
        pos: {
            lat: 45.7642,
            lng: 21.2041
        },
        type: "salubritate",
        priority: "medie"
    },
    {
        id: 6,
        title: "Sidewalk covered in trash",
        desc: "Boxes, cans and paper scattered around, making it hard for pedestrians to pass.",
        pos: {
            lat: 45.75,
            lng: 21.3
        },
        type: "salubritate",
        priority: "mică"
    },
    {
        id: 7,
        title: "Trash island near crosswalk",
        desc: "Bags, bottles and household waste gathered at the street corner.",
        pos: {
            lat: 45.79,
            lng: 21.23
        },
        type: "salubritate",
        priority: "mică"
    },
    {
        id: 8,
        title: "Parking area full of litter",
        desc: "Food leftovers, coffee cups and bags left next to cars.",
        pos: {
            lat: 45.7195,
            lng: 21.24
        },
        type: "salubritate",
        priority: "mică"
    },
    {
        id: 9,
        title: "Containers used incorrectly",
        desc: "Glass and plastic bottles thrown next to the containers instead of inside them.",
        pos: {
            lat: 45.706,
            lng: 21.17
        },
        type: "deseuri",
        priority: "mică"
    },
    {
        id: 10,
        title: "No recycling bins",
        desc: "Busy area, but only regular bins exist, no separate bins for recycling.",
        pos: {
            lat: 45.77,
            lng: 21.26
        },
        type: "ecologizare",
        priority: "medie"
    },
    {
        id: 11,
        title: "Trash on the sidewalk near apartment blocks",
        desc: "Cardboard boxes, torn bags and bulky waste left on the sidewalk.",
        pos: {
            lat: 45.7512,
            lng: 21.22
        },
        type: "salubritate",
        priority: "medie"
    },
    {
        id: 12,
        title: "Waste hanging in trees",
        desc: "Plastic bags stuck in branches, giving the area a neglected look.",
        pos: {
            lat: 45.7583,
            lng: 21.214
        },
        type: "ecologizare",
        priority: "mare"
    },
    {
        id: 13,
        title: "Bus stop with trash at the base",
        desc: "Cigarette butts, packaging and empty bottles next to the stop pole.",
        pos: {
            lat: 45.7444,
            lng: 21.205
        },
        type: "salubritate",
        priority: "mică"
    },
    {
        id: 14,
        title: "Pile of waste on green space",
        desc: "Household garbage bags dumped directly on the grass.",
        pos: {
            lat: 45.7321,
            lng: 21.197
        },
        type: "deseuri",
        priority: "medie"
    },
    {
        id: 15,
        title: "Playground full of packaging",
        desc: "Bottles, bags and paper everywhere, near the slide and swings.",
        pos: {
            lat: 45.7673,
            lng: 21.222
        },
        type: "salubritate",
        priority: "mare"
    },
    {
        id: 16,
        title: "Debris floating near drains",
        desc: "Leaves mixed with PET bottles and bags blocking the drain.",
        pos: {
            lat: 45.7811,
            lng: 21.232
        },
        type: "deseuri",
        priority: "medie"
    },
    {
        id: 17,
        title: "Park with dirty alleys",
        desc: "Sunflower seed shells, juice boxes and bottles thrown on the ground.",
        pos: {
            lat: 45.7485,
            lng: 21.252
        },
        type: "ecologizare",
        priority: "mică"
    },
    {
        id: 18,
        title: "Trash under pedestrian bridge",
        desc: "Bottles, cans and garbage bags dumped under the bridge, hard to access.",
        pos: {
            lat: 45.754,
            lng: 21.241
        },
        type: "deseuri",
        priority: "mare"
    },
    {
        id: 19,
        title: "Green area full of plastic",
        desc: "Tall grass mixed with lots of PET bottles and cans.",
        pos: {
            lat: 45.7615,
            lng: 21.2105
        },
        type: "ecologizare",
        priority: "mică"
    },
    {
        id: 20,
        title: "Dirty pedestrian underpass",
        desc: "Papers, cigarette butts and packaging gathered along the stairs.",
        pos: {
            lat: 45.7452,
            lng: 21.259
        },
        type: "salubritate",
        priority: "mare"
    },
    {
        id: 21,
        title: "School entrance with litter",
        desc: "Students leave packaging and bottles at the gate, not enough bins.",
        pos: {
            lat: 45.769,
            lng: 21.216
        },
        type: "ecologizare",
        priority: "mare"
    },
    {
        id: 22,
        title: "Unmaintained garbage platform",
        desc: "Waste thrown on the ground around the dumpsters, strong smell.",
        pos: {
            lat: 45.737,
            lng: 21.238
        },
        type: "salubritate",
        priority: "mare"
    },
    {
        id: 23,
        title: "Construction debris by the roadside",
        desc: "Pieces of concrete, cement bags and rubble left randomly.",
        pos: {
            lat: 45.713,
            lng: 21.225
        },
        type: "deseuri",
        priority: "mică"
    },
    {
        id: 24,
        title: "Pedestrian bridge with graffiti and trash",
        desc: "Spray paint, papers and empty bottles along the whole bridge.",
        pos: {
            lat: 45.752,
            lng: 21.19
        },
        type: "ecologizare",
        priority: "medie"
    },
    {
        id: 25,
        title: "Construction site area full of debris",
        desc: "Foil, polystyrene and wood pieces blown onto public space.",
        pos: {
            lat: 45.776,
            lng: 21.205
        },
        type: "deseuri",
        priority: "mică"
    },
    {
        id: 26,
        title: "Tram stop with broken glass",
        desc: "Shards and glass caps on the ground, danger for pedestrians.",
        pos: {
            lat: 45.783,
            lng: 21.246
        },
        type: "salubritate",
        priority: "medie"
    },
    {
        id: 27,
        title: "Sports field with litter",
        desc: "PET bottles, bags and packaging left on the field and near the fence.",
        pos: {
            lat: 45.731,
            lng: 21.254
        },
        type: "ecologizare",
        priority: "mică"
    },
    {
        id: 28,
        title: "Scooter and trash on sidewalk",
        desc: "Scooter left in the middle plus empty bottles around it.",
        pos: {
            lat: 45.742,
            lng: 21.218
        },
        type: "salubritate",
        priority: "mică"
    },
    {
        id: 29,
        title: "Open dumpsters and scattered trash",
        desc: "Waste blown around by wind and animals around the dumpsters.",
        pos: {
            lat: 45.755,
            lng: 21.227
        },
        type: "deseuri",
        priority: "medie"
    },
    {
        id: 30,
        title: "Uncleaned public transport stop",
        desc: "Papers, juice boxes and bottles on the ground, no sanitation intervention.",
        pos: {
            lat: 45.768,
            lng: 21.234
        },
        type: "salubritate",
        priority: "mică"
    }
];
const MAP_CENTER = [
    45.7489,
    21.2087
];
const TILE_DARK = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const THREE_HOURS_MS = 3 * 60 * 60 * 1000;
/* ──────────────────────────────────────────
   HELPERS
   ────────────────────────────────────────── */ function getPriorityColor(priority) {
    if (priority === "mare") return "#ef4444"; // high
    if (priority === "medie") return "#facc15"; // medium
    if (priority === "mică") return "#22c55e"; // low
    return "#22c55e";
}
function getPriorityLabel(priority) {
    if (priority === "mare") return "High";
    if (priority === "medie") return "Medium";
    if (priority === "mică") return "Low";
    return priority;
}
function escapeText(text) {
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
// prepare: add state, difficulty, points, shuffle, return 10 + the rest
function prepareProblems(source, count) {
    const withState = source.map((p)=>{
        const difficulty = p.priority === "mare" ? 3 : p.priority === "medie" ? 2 : 1;
        const basePoints = 10;
        const points = basePoints * difficulty;
        return {
            ...p,
            status: "pending",
            hasImage: false,
            difficulty,
            basePoints,
            points
        };
    });
    const copy = [
        ...withState
    ];
    for(let i = copy.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [
            copy[j],
            copy[i]
        ];
    }
    const sliceIndex = Math.min(count, copy.length);
    return {
        initial: copy.slice(0, sliceIndex),
        rest: copy.slice(sliceIndex)
    };
}
function formatTimeLeft(ms) {
    const clamped = Math.max(0, ms);
    const totalSeconds = Math.floor(clamped / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor(totalSeconds % 3600 / 60);
    const s = totalSeconds % 60;
    const pad = (n)=>n.toString().padStart(2, "0");
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
/* ──────────────────────────────────────────
   HEATMAP CARD
   ────────────────────────────────────────── */ function HeatmapCard({ problems }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heatLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [heatEnabled, setHeatEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [leaflet, setLeaflet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const MAP_CENTER_LOCAL = [
        45.7489,
        21.2087
    ];
    const TILE_DARK_LOCAL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeatmapCard.useEffect": ()=>{
            ({
                "HeatmapCard.useEffect": async ()=>{
                    const leafletModule = await __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)");
                    await __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css, async loader)");
                    await __turbopack_context__.A("[project]/node_modules/leaflet.heat/dist/leaflet-heat.js [app-client] (ecmascript, async loader)");
                    const LInstance = leafletModule.default || leafletModule;
                    setLeaflet(LInstance);
                }
            })["HeatmapCard.useEffect"]();
        }
    }["HeatmapCard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeatmapCard.useEffect": ()=>{
            if (!leaflet || mapRef.current) return;
            const LInstance_0 = leaflet;
            const map = LInstance_0.map("heatmap-container", {
                center: MAP_CENTER_LOCAL,
                zoom: 12,
                zoomControl: true,
                attributionControl: false,
                dragging: true,
                scrollWheelZoom: false,
                doubleClickZoom: false,
                boxZoom: false,
                keyboard: false
            });
            LInstance_0.tileLayer(TILE_DARK_LOCAL, {
                maxZoom: 18
            }).addTo(map);
            mapRef.current = map;
        }
    }["HeatmapCard.useEffect"], [
        leaflet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeatmapCard.useEffect": ()=>{
            if (!leaflet || !mapRef.current) return;
            const LInstance_1 = leaflet;
            if (heatEnabled) {
                const heatData = problems.map({
                    "HeatmapCard.useEffect.heatData": (p)=>[
                            p.pos.lat,
                            p.pos.lng,
                            p.priority === "mare" ? 1.0 : p.priority === "medie" ? 0.8 : 0.6
                        ]
                }["HeatmapCard.useEffect.heatData"]);
                if (!heatLayerRef.current) {
                    heatLayerRef.current = LInstance_1.heatLayer(heatData, {
                        radius: 40,
                        blur: 15,
                        maxZoom: 17,
                        gradient: {
                            0.2: "#00ff5e",
                            0.4: "#a3e635",
                            0.6: "#facc15",
                            0.8: "#f97316",
                            1.0: "#dc2626"
                        }
                    });
                } else {
                    heatLayerRef.current.setLatLngs(heatData);
                }
                heatLayerRef.current.addTo(mapRef.current);
            } else if (heatLayerRef.current) {
                mapRef.current.removeLayer(heatLayerRef.current);
            }
        }
    }["HeatmapCard.useEffect"], [
        heatEnabled,
        leaflet,
        problems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-30 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#020617]/90 border border-[#1e293b] rounded-2xl shadow-xl p-6 max-w-7xl mx-auto backdrop-blur-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-emerald-50",
                            children: "Heatmap — Problem distribution"
                        }, void 0, false, {
                            fileName: "[project]/components/Map.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setHeatEnabled((v)=>!v),
                            className: `px-4 py-2 rounded-lg text-sm font-semibold transition ${heatEnabled ? "bg-emerald-600 hover:bg-emerald-700" : "bg-[#1e293b] hover:bg-[#243045]"}`,
                            children: heatEnabled ? "Disable heatmap" : "Enable heatmap"
                        }, void 0, false, {
                            fileName: "[project]/components/Map.tsx",
                            lineNumber: 460,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Map.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "heatmap-container",
                    className: "w-full h-[500px] rounded-xl overflow-hidden border border-[#1e293b]"
                }, void 0, false, {
                    fileName: "[project]/components/Map.tsx",
                    lineNumber: 465,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Map.tsx",
            lineNumber: 454,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Map.tsx",
        lineNumber: 453,
        columnNumber: 10
    }, this);
}
_s(HeatmapCard, "tqtKVslvho0NK4h9u68Mg7M8BCA=");
_c = HeatmapCard;
function TimisoaraProblemsMap() {
    _s1();
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clusterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const poolRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]); // for replacing rejected tasks
    const [problems, setProblems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingMap, setLoadingMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingData, setLoadingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedProblem, setSelectedProblem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "toate",
        priority: "toate"
    });
    // Global timer for countdowns
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    // User points (from backend — like TasksPage)
    const [userPoints, setUserPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimisoaraProblemsMap.useEffect": ()=>{
            const interval = setInterval({
                "TimisoaraProblemsMap.useEffect.interval": ()=>setNow(Date.now())
            }["TimisoaraProblemsMap.useEffect.interval"], 1000);
            return ({
                "TimisoaraProblemsMap.useEffect": ()=>clearInterval(interval)
            })["TimisoaraProblemsMap.useEffect"];
        }
    }["TimisoaraProblemsMap.useEffect"], []);
    // Fetch user points (same logic as in TasksPage)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimisoaraProblemsMap.useEffect": ()=>{
            fetch("/api/auth/me").then({
                "TimisoaraProblemsMap.useEffect": (res)=>res.json()
            }["TimisoaraProblemsMap.useEffect"]).then({
                "TimisoaraProblemsMap.useEffect": (data)=>{
                    if (data.user && typeof data.user.points === "number") {
                        setUserPoints(data.user.points);
                    }
                }
            }["TimisoaraProblemsMap.useEffect"]).catch({
                "TimisoaraProblemsMap.useEffect": (err)=>console.error("Error fetching user points:", err)
            }["TimisoaraProblemsMap.useEffect"]);
        }
    }["TimisoaraProblemsMap.useEffect"], []);
    // on mount: load 10 random problems (from API or fallback) + keep the rest in poolRef
    const fetchProblems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TimisoaraProblemsMap.useCallback[fetchProblems]": async ()=>{
            try {
                const res_0 = await fetch("/api/problems");
                if (!res_0.ok) throw new Error("No API");
                const json = await res_0.json();
                const source = Array.isArray(json.problems) && json.problems.length > 0 ? json.problems : FALLBACK_PROBLEMS;
                const { initial: initial_0, rest: rest_0 } = prepareProblems(source, 10);
                setProblems(initial_0);
                poolRef.current = rest_0;
            } catch  {
                const { initial, rest } = prepareProblems(FALLBACK_PROBLEMS, 10);
                setProblems(initial);
                poolRef.current = rest;
            } finally{
                setLoadingData(false);
            }
        }
    }["TimisoaraProblemsMap.useCallback[fetchProblems]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimisoaraProblemsMap.useEffect": ()=>{
            fetchProblems();
        }
    }["TimisoaraProblemsMap.useEffect"], [
        fetchProblems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimisoaraProblemsMap.useEffect": ()=>{
            if (!mapContainerRef.current || mapRef.current) return;
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapContainerRef.current, {
                center: MAP_CENTER,
                zoom: 13,
                zoomControl: true,
                attributionControl: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer(TILE_DARK, {
                maxZoom: 19
            }).addTo(map);
            const clusterGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].markerClusterGroup({
                showCoverageOnHover: false,
                maxClusterRadius: 45
            });
            clusterGroup.addTo(map);
            clusterRef.current = clusterGroup;
            mapRef.current = map;
            setLoadingMap(false);
        }
    }["TimisoaraProblemsMap.useEffect"], []);
    const filteredProblems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TimisoaraProblemsMap.useMemo[filteredProblems]": ()=>{
            return problems.filter({
                "TimisoaraProblemsMap.useMemo[filteredProblems]": (p)=>{
                    const okType = filters.type === "toate" || filters.type === p.type;
                    const okPr = filters.priority === "toate" || filters.priority === p.priority;
                    return okType && okPr;
                }
            }["TimisoaraProblemsMap.useMemo[filteredProblems]"]);
        }
    }["TimisoaraProblemsMap.useMemo[filteredProblems]"], [
        problems,
        filters
    ]);
    // markers + popups
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimisoaraProblemsMap.useEffect": ()=>{
            if (!clusterRef.current || !mapRef.current) return;
            clusterRef.current.clearLayers();
            markersRef.current = [];
            filteredProblems.forEach({
                "TimisoaraProblemsMap.useEffect": (p_0)=>{
                    const markerIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                        className: "marker-wrapper",
                        iconSize: [
                            22,
                            22
                        ],
                        iconAnchor: [
                            11,
                            11
                        ],
                        html: `
          <div class="marker-pulse"
               style="background:${getPriorityColor(p_0.priority)};
                      border:2px solid #000;">
          </div>
        `
                    });
                    const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                        p_0.pos.lat,
                        p_0.pos.lng
                    ], {
                        icon: markerIcon
                    });
                    const popupHtml = `
        <div class="popup-card">
          <div class="popup-title">${escapeText(p_0.title)}</div>
          <div class="popup-desc">${escapeText(p_0.desc)}</div>
          <div class="popup-meta">
            <span class="popup-pill">${escapeText(p_0.type)}</span>
            <span class="popup-pill">${escapeText(getPriorityLabel(p_0.priority))}</span>
            <span class="popup-id">#${p_0.id}</span>
          </div>
        </div>
     `;
                    marker.bindPopup(popupHtml);
                    marker.on("click", {
                        "TimisoaraProblemsMap.useEffect": ()=>setSelectedProblem(p_0)
                    }["TimisoaraProblemsMap.useEffect"]);
                    clusterRef.current.addLayer(marker);
                    markersRef.current.push({
                        id: p_0.id,
                        marker
                    });
                }
            }["TimisoaraProblemsMap.useEffect"]);
            if (filteredProblems.length > 0) {
                const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(filteredProblems.map({
                    "TimisoaraProblemsMap.useEffect.bounds": (p_1)=>[
                            p_1.pos.lat,
                            p_1.pos.lng
                        ]
                }["TimisoaraProblemsMap.useEffect.bounds"]));
                mapRef.current.fitBounds(bounds, {
                    padding: [
                        40,
                        40
                    ]
                });
            }
        }
    }["TimisoaraProblemsMap.useEffect"], [
        filteredProblems
    ]);
    const handleListClick = (problem)=>{
        const found = markersRef.current.find((m)=>m.id === problem.id);
        if (!found || !mapRef.current) return;
        mapRef.current.setView(found.marker.getLatLng(), 16, {
            animate: true
        });
        found.marker.openPopup();
        setSelectedProblem(problem);
    };
    const handleAccept = (id)=>{
        setProblems((prev)=>prev.map((p_2)=>p_2.id === id ? {
                    ...p_2,
                    status: "accepted",
                    acceptedAt: p_2.acceptedAt ?? Date.now()
                } : p_2));
    };
    const handleReject = (id_0)=>{
        setProblems((prev_0)=>{
            const remaining = prev_0.filter((p_3)=>p_3.id !== id_0);
            if (poolRef.current.length > 0) {
                const [next, ...rest_1] = poolRef.current;
                poolRef.current = rest_1;
                return [
                    ...remaining,
                    next
                ];
            }
            return remaining;
        });
    };
    const handleImageUploaded = (id_1)=>{
        setProblems((prev_1)=>prev_1.map((p_4)=>p_4.id === id_1 ? {
                    ...p_4,
                    hasImage: true
                } : p_4));
    };
    // Finish quest and award points (like TasksPage.finishTask)
    const handleFinish = async (id_2)=>{
        const problem_0 = problems.find((p_5)=>p_5.id === id_2);
        if (!problem_0 || !problem_0.hasImage) return;
        try {
            const res_1 = await fetch("/api/tasks/addPoints", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    points: problem_0.points
                })
            });
            const data_0 = await res_1.json();
            if (data_0.user && typeof data_0.user.points === "number") {
                setUserPoints(data_0.user.points);
            }
            setProblems((prev_2)=>prev_2.map((p_6)=>p_6.id === id_2 ? {
                        ...p_6,
                        status: "finished"
                    } : p_6));
        } catch (err_0) {
            console.error("Error updating points:", err_0);
        }
    };
    const totalText = loadingData ? "Loading..." : `Filtered problems: ${filteredProblems.length}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 pt-28 pb-20 text-emerald-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200",
                                        children: [
                                            "Map quests",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1 w-1 rounded-full bg-emerald-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 681,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Map.tsx",
                                        lineNumber: 679,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-3 text-3xl font-bold bg-gradient-to-b from-emerald-100 via-white to-emerald-200 text-transparent bg-clip-text drop-shadow-[0_0_24px_rgba(16,185,129,0.8)]",
                                        children: "Timișoara — Cleanup Quests Map"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Map.tsx",
                                        lineNumber: 683,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-emerald-100/80 mt-1 max-w-xl",
                                        children: "Every time you open the app, a new random set of 10 sanitation and eco-cleanup quests is loaded across the city. Accept a quest, clean the area, upload proof and earn points."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Map.tsx",
                                        lineNumber: 686,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Map.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 rounded-xl bg-[#020617]/90 border border-[#1e293b] shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] uppercase tracking-[0.18em] text-gray-400",
                                                children: "Your points"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 696,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-bold text-emerald-400",
                                                children: userPoints
                                            }, void 0, false, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 699,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Map.tsx",
                                        lineNumber: 695,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>mapRef.current?.setView(MAP_CENTER, 13, {
                                                animate: true
                                            }),
                                        className: "px-4 py-2 bg-emerald-600 rounded-lg shadow hover:bg-emerald-700 duration-200 transition text-sm font-semibold",
                                        children: "Reset view"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Map.tsx",
                                        lineNumber: 704,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Map.tsx",
                                lineNumber: 693,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Map.tsx",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl overflow-hidden border border-[#1d332e] shadow-[0_0_30px_rgba(15,23,42,0.9)] relative bg-slate-900/80 backdrop-blur-xl",
                                    children: [
                                        loadingMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[#020617]/80 flex flex-col items-center justify-center gap-2 animate-pulse z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-300",
                                                    children: "Loading map..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 716,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: mapContainerRef,
                                            style: {
                                                height: "700px",
                                                width: "100%"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 720,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Map.tsx",
                                    lineNumber: 715,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Map.tsx",
                                lineNumber: 714,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "bg-[#020617]/90 border border-[#1e293b] rounded-2xl p-4 shadow-xl backdrop-blur-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold text-emerald-50",
                                                children: [
                                                    "Quests (",
                                                    filteredProblems.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 730,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-gray-400",
                                                children: totalText
                                            }, void 0, false, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 733,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Map.tsx",
                                        lineNumber: 729,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-300 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Filter by type"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 738,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filters.type,
                                                onChange: (e)=>setFilters((f)=>({
                                                            ...f,
                                                            type: e.target.value
                                                        })),
                                                className: "w-full mt-1 px-2 py-1 bg-[#1e293b] text-gray-200 rounded outline-none focus:ring-2 focus:ring-emerald-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "toate",
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "salubritate",
                                                        children: "Cleaning / Sanitation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ecologizare",
                                                        children: "Eco-actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 745,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "deseuri",
                                                        children: "Waste dumping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 746,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 739,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mt-3 block",
                                                children: "Filter by priority"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 749,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filters.priority,
                                                onChange: (e_0)=>setFilters((f_0)=>({
                                                            ...f_0,
                                                            priority: e_0.target.value
                                                        })),
                                                className: "w-full mt-1 px-2 py-1 bg-[#1e293b] text-gray-200 rounded outline-none focus:ring-2 focus:ring-emerald-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "toate",
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 754,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "mare",
                                                        children: "High"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 755,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "medie",
                                                        children: "Medium"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 756,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "mică",
                                                        children: "Low"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 757,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 750,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Map.tsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 max-h-[500px] overflow-y-auto pr-1",
                                        children: filteredProblems.map((p_7)=>{
                                            const status = p_7.status ?? "pending";
                                            const isAccepted = status === "accepted";
                                            const isFinished = status === "finished";
                                            const timeLeft = isAccepted && p_7.acceptedAt ? THREE_HOURS_MS - (now - p_7.acceptedAt) : THREE_HOURS_MS;
                                            const timeLabel = formatTimeLeft(timeLeft);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                onClick: ()=>handleListClick(p_7),
                                                className: `bg-[#1e293b] px-3 py-3 rounded-xl cursor-pointer hover:bg-[#243045] transition ${isFinished ? "border border-emerald-500" : ""}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-3 h-3 rounded-full",
                                                                style: {
                                                                    backgroundColor: getPriorityColor(p_7.priority)
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Map.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Map.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 flex flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-white text-sm font-semibold",
                                                                            children: p_7.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Map.tsx",
                                                                            lineNumber: 781,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-gray-400",
                                                                            children: [
                                                                                "#",
                                                                                p_7.id
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/Map.tsx",
                                                                            lineNumber: 784,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Map.tsx",
                                                                    lineNumber: 780,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[12px] text-gray-300 mt-1",
                                                                    children: p_7.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Map.tsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 flex items-center justify-between text-[11px] text-gray-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "Difficulty:",
                                                                                " ",
                                                                                "★".repeat(p_7.difficulty).padEnd(3, "☆")
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/Map.tsx",
                                                                            lineNumber: 795,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-emerald-400 font-semibold",
                                                                            children: [
                                                                                "+",
                                                                                p_7.points,
                                                                                " pts"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/Map.tsx",
                                                                            lineNumber: 799,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Map.tsx",
                                                                    lineNumber: 794,
                                                                    columnNumber: 25
                                                                }, this),
                                                                status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 flex justify-end gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white",
                                                                            onClick: (e_1)=>{
                                                                                e_1.stopPropagation();
                                                                                handleAccept(p_7.id);
                                                                            },
                                                                            children: "Accept quest"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Map.tsx",
                                                                            lineNumber: 806,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "px-3 py-1 rounded-lg text-xs font-semibold bg-[#111827] hover:bg-[#1f2937] text-gray-200",
                                                                            onClick: (e_2)=>{
                                                                                e_2.stopPropagation();
                                                                                handleReject(p_7.id);
                                                                            },
                                                                            children: "Reject"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Map.tsx",
                                                                            lineNumber: 812,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Map.tsx",
                                                                    lineNumber: 805,
                                                                    columnNumber: 50
                                                                }, this),
                                                                status === "accepted" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 flex flex-col gap-2 text-xs text-gray-300",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "Time left: ",
                                                                                    timeLabel
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/Map.tsx",
                                                                                lineNumber: 822,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Map.tsx",
                                                                            lineNumber: 821,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "inline-flex items-center gap-2 cursor-pointer",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "px-3 py-1 rounded-lg bg-[#111827] text-gray-200",
                                                                                            children: "Upload proof photo"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/Map.tsx",
                                                                                            lineNumber: 827,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "file",
                                                                                            accept: "image/*",
                                                                                            className: "hidden",
                                                                                            onChange: (e_3)=>{
                                                                                                e_3.stopPropagation();
                                                                                                if (e_3.target.files && e_3.target.files[0]) {
                                                                                                    handleImageUploaded(p_7.id);
                                                                                                }
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/Map.tsx",
                                                                                            lineNumber: 830,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/Map.tsx",
                                                                                    lineNumber: 826,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: `px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-600 text-white ${!p_7.hasImage ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-700"}`,
                                                                                    disabled: !p_7.hasImage,
                                                                                    onClick: (e_4)=>{
                                                                                        e_4.stopPropagation();
                                                                                        if (!p_7.hasImage) return;
                                                                                        handleFinish(p_7.id);
                                                                                    },
                                                                                    children: "Finish quest"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Map.tsx",
                                                                                    lineNumber: 838,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/Map.tsx",
                                                                            lineNumber: 825,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Map.tsx",
                                                                    lineNumber: 820,
                                                                    columnNumber: 51
                                                                }, this),
                                                                isFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 text-xs text-emerald-400 font-semibold",
                                                                    children: [
                                                                        "Quest completed ✅ You earned ",
                                                                        p_7.points,
                                                                        " points!"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Map.tsx",
                                                                    lineNumber: 848,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Map.tsx",
                                                            lineNumber: 779,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 21
                                                }, this)
                                            }, p_7.id, false, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 769,
                                                columnNumber: 22
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/Map.tsx",
                                        lineNumber: 762,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Map.tsx",
                                lineNumber: 728,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Map.tsx",
                        lineNumber: 712,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Map.tsx",
                lineNumber: 675,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-30 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#020617]/90 border border-[#1e293b] rounded-2xl p-6 shadow-xl max-w-7xl mx-auto backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-emerald-50 mb-6",
                            children: "General statistics — Timișoara (current set of 10 quests)"
                        }, void 0, false, {
                            fileName: "[project]/components/Map.tsx",
                            lineNumber: 863,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1e293b] rounded-xl p-4 flex flex-col gap-1 shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 text-sm",
                                            children: "Total quests"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 870,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold text-white",
                                            children: problems.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 871,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Map.tsx",
                                    lineNumber: 869,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1e293b] rounded-xl p-4 flex flex-col gap-1 shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 text-sm",
                                            children: "High-priority quests"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 877,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold text-red-400",
                                            children: problems.filter((p_8)=>p_8.priority === "mare").length
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 880,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Map.tsx",
                                    lineNumber: 876,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1e293b] rounded-xl p-4 flex flex-col gap-1 shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 text-sm",
                                            children: "Average resolution time (estimate)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 886,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold text-yellow-400",
                                            children: "~ 3.4 days"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 889,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Map.tsx",
                                    lineNumber: 885,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1e293b] rounded-xl p-4 flex flex-col gap-1 shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 text-sm",
                                            children: "Most affected zones (current set)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 895,
                                            columnNumber: 15
                                        }, this),
                                        Object.entries(problems.reduce((acc, p_9)=>{
                                            const zone = `${p_9.pos.lat.toFixed(2)}, ${p_9.pos.lng.toFixed(2)}`;
                                            acc[zone] = (acc[zone] || 0) + 1;
                                            return acc;
                                        }, {})).sort((a, b)=>b[1] - a[1]).slice(0, 3).map(([zone_0, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-gray-300",
                                                children: [
                                                    "• Zone ",
                                                    zone_0,
                                                    " — ",
                                                    count,
                                                    " quests"
                                                ]
                                            }, zone_0, true, {
                                                fileName: "[project]/components/Map.tsx",
                                                lineNumber: 903,
                                                columnNumber: 86
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Map.tsx",
                                    lineNumber: 894,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Map.tsx",
                            lineNumber: 868,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-10 mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300 mb-3 font-medium",
                                            children: "Overall distribution"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 912,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-40 h-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-full border-[12px] border-green-400/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-full border-[12px] border-yellow-400/40 rotate-45"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 918,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-full border-[12px] border-red-400/40 rotate-90"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 919,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white text-xl font-bold",
                                                        children: problems.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 922,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 921,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 916,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Map.tsx",
                                    lineNumber: 911,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300 mb-3 font-medium block",
                                            children: "Quest priority split"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 930,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-red-400",
                                                    children: "High"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 935,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-3 bg-red-400/20 rounded",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-red-400 rounded",
                                                        style: {
                                                            width: `${problems.length ? problems.filter((p_10)=>p_10.priority === "mare").length / problems.length * 100 : 0}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 937,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 936,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 934,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-yellow-400",
                                                    children: "Medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 944,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-3 bg-yellow-400/20 rounded",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-yellow-400 rounded",
                                                        style: {
                                                            width: `${problems.length ? problems.filter((p_11)=>p_11.priority === "medie").length / problems.length * 100 : 0}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 946,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 943,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-green-400",
                                                    children: "Low"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 953,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-3 bg-green-400/20 rounded",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-green-400 rounded",
                                                        style: {
                                                            width: `${problems.length ? problems.filter((p_12)=>p_12.priority === "mică").length / problems.length * 100 : 0}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Map.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Map.tsx",
                                                    lineNumber: 954,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Map.tsx",
                                            lineNumber: 952,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Map.tsx",
                                    lineNumber: 929,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Map.tsx",
                            lineNumber: 910,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Map.tsx",
                    lineNumber: 862,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Map.tsx",
                lineNumber: 861,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeatmapCard, {
                problems: problems
            }, void 0, false, {
                fileName: "[project]/components/Map.tsx",
                lineNumber: 966,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .marker-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marker-pulse {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, .5); }
          70% { box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
          100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }

        .popup-card {
          background: #0f172a;
          padding: 10px;
          border-radius: 10px;
          color: #e2f0e8;
        }
        .popup-title {
          font-weight: bold;
          font-size: 13px;
        }
        .popup-desc {
          font-size: 12px;
          margin-top: 4px;
        }
        .popup-meta {
          margin-top: 6px;
          display: flex;
          gap: 6px;
          font-size: 10px;
        }
        .popup-pill {
          background: #1e293b;
          padding: 3px 6px;
          border-radius: 999px;
        }
        .popup-id {
          margin-left: auto;
          color: #4ade80;
        }

        .leaflet-popup-content-wrapper {
          background: #0f172a !important;
          color: #e2f0e8 !important;
          border-radius: 14px !important;
          border: 1px solid #1e293b !important;
          box-shadow: 0 6px 20px rgba(0,0,0,0.45) !important;
        }
        .leaflet-popup-tip {
          background: #0f172a !important;
          border: 1px solid #1e293b !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          padding: 0 !important;
        }

        .marker-cluster,
        .marker-cluster div,
        .marker-cluster span {
          background-image: none !important;
          box-shadow: none !important;
        }

        .marker-cluster {
          background: none !important;
          border: none !important;
        }

        .marker-cluster div {
          width: 40px !important;
          height: 40px !important;
          background: rgba(0, 153, 102, 0.35) !important;
          border-radius: 50% !important;
          border: 3px solid rgba(42, 117, 92, 0.45) !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          color: white !important;
          font-size: 16px !important;
          font-weight: 600 !important;
        }

        .marker-cluster span {
          line-height: 40px !important;
          font-size: 16px !important;
          color: white !important;
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Map.tsx",
                lineNumber: 969,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Map.tsx",
        lineNumber: 674,
        columnNumber: 10
    }, this);
}
_s1(TimisoaraProblemsMap, "P2ydmNYf/PNJHaQ55eKMYnWlbGw=");
_c1 = TimisoaraProblemsMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeatmapCard");
__turbopack_context__.k.register(_c1, "TimisoaraProblemsMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Map.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Map.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_Map_tsx_d5f8fd9f._.js.map