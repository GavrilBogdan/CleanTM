(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/montserrat_f60cd816.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "montserrat_f60cd816-module__vlLyYW__className",
});
}),
"[next]/internal/font/google/montserrat_f60cd816.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_f60cd816$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/montserrat_f60cd816.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_f60cd816$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Montserrat', 'Montserrat Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_f60cd816$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_f60cd816$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/my-project/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function AnimatedButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "755da83f9acd3f7631c047048660fd7f70fb969ff878b1a5747f5871045cf47d") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "755da83f9acd3f7631c047048660fd7f70fb969ff878b1a5747f5871045cf47d";
    }
    const { text, onClick, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `group relative inline-block flex-1 min-w-fit px-3 py-2 border-2  text-green-700 border-t-green-300 border-b-green-400 border-l-green-400 border-r-green-500 rounded-full font-bold text-sm overflow-hidden cursor-pointer hover:text-white  duration-300 ${className}`;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-0 left-0 w-0 h-full bg-[#12af49] transition-all duration-900 group-hover:w-full z-[-1]"
        }, void 0, false, {
            fileName: "[project]/my-project/components/Button.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    let t4;
    if ($[2] !== onClick || $[3] !== t2 || $[4] !== text) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: t2,
            children: [
                text,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/Button.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[2] = onClick;
        $[3] = t2;
        $[4] = text;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = AnimatedButton;
var _c;
__turbopack_context__.k.register(_c, "AnimatedButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-project/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_f60cd816$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/montserrat_f60cd816.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// ECO PARTICLES
const particles = [
    {
        img: "/images/leaf-2.png",
        size: 40
    },
    {
        img: "/images/leaf-3.png",
        size: 40
    },
    {
        img: "/images/recycle-icon.png",
        size: 28
    },
    {
        img: "/images/leaf.png",
        size: 22
    },
    {
        img: "/images/leaf.png",
        size: 35
    }
];
const FloatingParticle = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "3673b5eddf852b3ec36c54ba74ad432ade7ba462015cc15c6573250d68c5cce2") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3673b5eddf852b3ec36c54ba74ad432ade7ba462015cc15c6573250d68c5cce2";
    }
    const { img, size, delay } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: 50,
            opacity: 0
        };
        t2 = {
            y: [
                -20,
                20,
                -20
            ],
            opacity: [
                0.4,
                1,
                0.4
            ]
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== delay) {
        t3 = {
            repeat: Infinity,
            duration: 6 + Math.random() * 4,
            delay,
            ease: "easeInOut"
        };
        $[3] = delay;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== img || $[7] !== size) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: img,
            alt: "particle",
            width: size,
            height: size,
            className: "opacity-70 drop-shadow-[0_0_12px_rgba(0,255,120,0.7)]"
        }, void 0, false, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = img;
        $[7] = size;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            animate: t2,
            transition: t3,
            className: "absolute",
            style: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t3;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
};
_c = FloatingParticle;
const Hero = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "3673b5eddf852b3ec36c54ba74ad432ade7ba462015cc15c6573250d68c5cce2") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3673b5eddf852b3ec36c54ba74ad432ade7ba462015cc15c6573250d68c5cce2";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/map-bg.png",
            alt: "Map background",
            fill: true,
            className: "object-cover grayscale opacity-40"
        }, void 0, false, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-emerald-600/60 via-green-700/50 to-emerald-900/70 mix-blend-multiply"
        }, void 0, false, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_75%)]"
        }, void 0, false, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 -z-20",
            children: [
                t0,
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    children: Array.from({
                        length: 4
                    }).map(_temp)
                }, void 0, false, {
                    fileName: "[project]/my-project/components/Hero.tsx",
                    lineNumber: 130,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0)),
                particles.map(_temp2)
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            opacity: 0,
            y: 40
        };
        t5 = {
            opacity: 1,
            y: 0
        };
        t6 = {
            duration: 1
        };
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: `text-7xl font-bold drop-shadow-[0_0_20px_rgba(0,255,150,0.9)]
          text-green-50 ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_f60cd816$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
            children: "CleanTM ♻️"
        }, void 0, false, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 163,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-2xl font-semibold text-green-100",
            children: "Let’s clean Timișoara — together."
        }, void 0, false, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 165,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: "About us",
                className: "text-lg font-semibold px-8 py-4 shadow-xl hover:scale-105 transition"
            }, void 0, false, {
                fileName: "[project]/my-project/components/Hero.tsx",
                lineNumber: 174,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative min-h-screen flex items-center justify-center overflow-hidden text-white",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t4,
                    animate: t5,
                    transition: t6,
                    className: "relative z-20 w-full max-w-3xl px-6 text-center \n        bg-white/10 backdrop-blur-2xl border border-white/20 \n        rounded-3xl py-14 shadow-[0_0_25px_rgba(0,255,150,0.7)] \n        hover:shadow-[0_0_40px_rgba(0,255,150,1)] \n        transition-all duration-500",
                    children: [
                        t7,
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex justify-center gap-6",
                            children: [
                                t9,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        text: "Participate",
                                        className: "text-lg font-semibold px-8 py-4 shadow-xl hover:scale-105 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Hero.tsx",
                                        lineNumber: 181,
                                        columnNumber: 529
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/my-project/components/Hero.tsx",
                                    lineNumber: 181,
                                    columnNumber: 514
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-project/components/Hero.tsx",
                            lineNumber: 181,
                            columnNumber: 461
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-project/components/Hero.tsx",
                    lineNumber: 181,
                    columnNumber: 118
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    return t10;
};
_c1 = Hero;
const __TURBOPACK__default__export__ = Hero;
function _temp(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute",
        style: {
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative flex h-3 w-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/70"
                }, void 0, false, {
                    fileName: "[project]/my-project/components/Hero.tsx",
                    lineNumber: 193,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500"
                }, void 0, false, {
                    fileName: "[project]/my-project/components/Hero.tsx",
                    lineNumber: 193,
                    columnNumber: 145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/Hero.tsx",
            lineNumber: 193,
            columnNumber: 6
        }, this)
    }, i, false, {
        fileName: "[project]/my-project/components/Hero.tsx",
        lineNumber: 190,
        columnNumber: 10
    }, this);
}
function _temp2(p, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingParticle, {
        img: p.img,
        size: p.size,
        delay: i_0 * 0.8
    }, i_0, false, {
        fileName: "[project]/my-project/components/Hero.tsx",
        lineNumber: 196,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "FloatingParticle");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-project/components/Button2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function AnimatedButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "75a038d8ecb571dddb20d4feacbeca3a4622bf9c99f46bc5a18d1e22592bbe60") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "75a038d8ecb571dddb20d4feacbeca3a4622bf9c99f46bc5a18d1e22592bbe60";
    }
    const { text, onClick, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `group relative inline-block flex-1 min-w-fit px-3 py-2 border-2  text-green-700 border-t-green-300 border-b-green-400 border-l-green-400 border-r-green-500 rounded-xl font-bold text-sm overflow-hidden cursor-pointer hover:text-white  duration-300 ${className}`;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-0 left-0 w-0 h-full bg-[#00ff5e] transition-all duration-900 group-hover:w-full z-[-1]"
        }, void 0, false, {
            fileName: "[project]/my-project/components/Button2.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    let t4;
    if ($[2] !== onClick || $[3] !== t2 || $[4] !== text) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: t2,
            children: [
                text,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/Button2.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[2] = onClick;
        $[3] = t2;
        $[4] = text;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = AnimatedButton;
var _c;
__turbopack_context__.k.register(_c, "AnimatedButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-project/components/InfoBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfoBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/my-project/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
;
;
function InfoBubble(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "470cc0f0094e861f4faed91192e38a6a7b80b94d7859cc116c7d7b359154e170") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "470cc0f0094e861f4faed91192e38a6a7b80b94d7859cc116c7d7b359154e170";
    }
    const { isOpen, onClose, title, children } = t0;
    let t1;
    if ($[1] !== children || $[2] !== isOpen || $[3] !== onClose || $[4] !== title) {
        t1 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    onClick: onClose,
                    className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/my-project/components/InfoBubble.tsx",
                    lineNumber: 30,
                    columnNumber: 22
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    },
                    className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50\n                       w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 \n                       shadow-2xl p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-emerald-700 dark:text-emerald-300",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/my-project/components/InfoBubble.tsx",
                                    lineNumber: 51,
                                    columnNumber: 260
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-1 rounded-full text-gray-500 dark:text-gray-400 cursor-pointer\n                           hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/InfoBubble.tsx",
                                        lineNumber: 51,
                                        columnNumber: 537
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-project/components/InfoBubble.tsx",
                                    lineNumber: 51,
                                    columnNumber: 345
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-project/components/InfoBubble.tsx",
                            lineNumber: 51,
                            columnNumber: 204
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-700 dark:text-gray-300",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/my-project/components/InfoBubble.tsx",
                            lineNumber: 51,
                            columnNumber: 567
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-project/components/InfoBubble.tsx",
                    lineNumber: 38,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true);
        $[1] = children;
        $[2] = isOpen;
        $[3] = onClose;
        $[4] = title;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t1
        }, void 0, false, {
            fileName: "[project]/my-project/components/InfoBubble.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return t2;
}
_c = InfoBubble;
var _c;
__turbopack_context__.k.register(_c, "InfoBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-project/components/HowItWorks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$components$2f$Button2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/components/Button2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$components$2f$InfoBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/components/InfoBubble.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/my-project/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/my-project/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/my-project/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const learnMoreData = {
    firstStep: {
        title: "About Signing Up",
        description: "Signing up for a quest is easy. Just head to our 'Quests' page, find one near you, and click 'Join'. You'll see all the details, like location and objectives. You can join as many as you like!"
    },
    secondStep: {
        title: "About Submitting Proof",
        description: "To verify your hard work, take a 'before' and 'after' photo. Then open the quest page in your dashboard and upload them. Our team will review them shortly."
    },
    thirdStep: {
        title: "About Points & Leaderboards",
        description: "Verified quests reward you with points used to climb the leaderboard, unlock badges, and compete with friends!"
    }
};
const HowItWorks = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "7462589fa4721e8891f5376666df247e9d7ccfbd600c3c8e8dc1817121e1dc70") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7462589fa4721e8891f5376666df247e9d7ccfbd600c3c8e8dc1817121e1dc70";
    }
    const [modalContent, setModalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (content)=>setModalContent(content);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const openModal = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>setModalContent(null);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const closeModal = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/recycling.png",
            alt: "",
            width: 300,
            height: 300,
            className: "hidden sm:flex absolute -z-20 opacity-40"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl sm:text-6xl text-white font-extrabold mb-16",
            children: "How It Works ♻︎"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden sm:flex absolute top-[420px] w-[70%] left-1/2 -translate-x-1/2 justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1/3 h-1 bg-green-400"
                }, void 0, false, {
                    fileName: "[project]/my-project/components/HowItWorks.tsx",
                    lineNumber: 67,
                    columnNumber: 113
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1/3 h-1 bg-green-400"
                }, void 0, false, {
                    fileName: "[project]/my-project/components/HowItWorks.tsx",
                    lineNumber: 67,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            animationDelay: "0.1s"
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
            className: "w-12 h-12 text-green-500"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-xl uppercase",
            children: "First Step"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Log in and sign up for a quest (or multiple)"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
    } else {
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/50 backdrop-blur-md border border-white/70\n          p-6 rounded-2xl flex-1 flex gap-5 flex-col items-center\n          opacity-0 translate-y-10 animate-fadeSlideUp\n          transition-all duration-500 hover:-translate-y-3 hover:shadow-xl",
            style: t5,
            children: [
                t6,
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$components$2f$Button2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "Learn More",
                    className: "text-lg font-bold",
                    onClick: ()=>openModal(learnMoreData.firstStep)
                }, void 0, false, {
                    fileName: "[project]/my-project/components/HowItWorks.tsx",
                    lineNumber: 95,
                    columnNumber: 303
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    let t11;
    let t12;
    let t13;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            animationDelay: "0.3s"
        };
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
            className: "w-12 h-12 text-green-500"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-xl uppercase",
            children: "Second Step"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Do your task, take pictures, and upload them on the site!"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
        $[12] = t11;
        $[13] = t12;
        $[14] = t13;
    } else {
        t10 = $[11];
        t11 = $[12];
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/50 backdrop-blur-md border border-white/70\n          p-6 rounded-2xl flex-1 flex gap-5 flex-col items-center\n          opacity-0 translate-y-10 animate-fadeSlideUp\n          transition-all duration-500 hover:-translate-y-3 hover:shadow-xl mt-5 sm:mt-0",
            style: t10,
            children: [
                t11,
                t12,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$components$2f$Button2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "Learn More",
                    className: "text-lg font-bold",
                    onClick: ()=>openModal(learnMoreData.secondStep)
                }, void 0, false, {
                    fileName: "[project]/my-project/components/HowItWorks.tsx",
                    lineNumber: 123,
                    columnNumber: 321
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    let t16;
    let t17;
    let t18;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            animationDelay: "0.5s"
        };
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
            className: "w-12 h-12 text-green-500"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-xl uppercase",
            children: "Third Step"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Collect your points and climb the leaderboards"
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t15;
        $[17] = t16;
        $[18] = t17;
        $[19] = t18;
    } else {
        t15 = $[16];
        t16 = $[17];
        t17 = $[18];
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-10 justify-center px-6 max-w-6xl mx-auto",
            children: [
                t9,
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/50 backdrop-blur-md border border-white/70\n          p-6 rounded-2xl flex-1 flex gap-5 flex-col items-center\n          opacity-0 translate-y-10 animate-fadeSlideUp\n          transition-all duration-500 hover:-translate-y-3 hover:shadow-xl mt-5 sm:mt-0",
                    style: t15,
                    children: [
                        t16,
                        t17,
                        t18,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$components$2f$Button2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "Learn More",
                            className: "text-lg font-bold",
                            onClick: ()=>openModal(learnMoreData.thirdStep)
                        }, void 0, false, {
                            fileName: "[project]/my-project/components/HowItWorks.tsx",
                            lineNumber: 151,
                            columnNumber: 418
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-project/components/HowItWorks.tsx",
                    lineNumber: 151,
                    columnNumber: 108
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    const t20 = modalContent !== null;
    const t21 = modalContent?.title || "";
    const t22 = modalContent?.description;
    let t23;
    if ($[21] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: t22
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t22;
        $[22] = t23;
    } else {
        t23 = $[22];
    }
    let t24;
    if ($[23] !== t20 || $[24] !== t21 || $[25] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen flex justify-center flex-col text-center text-white relative py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/60 shadow-[inset_0_0_30px_rgba(0,0,0,0.4)] px-5 py-[5rem] sm:p-[5rem] rounded-xl font-bold text-gray-50 flex flex-col  sm:gap-10 relative",
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm:flex w-full sm:flex-col justify-center items-center",
                            children: [
                                " ",
                                t2,
                                t3,
                                t4,
                                t19,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$components$2f$InfoBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isOpen: t20,
                                    onClose: closeModal,
                                    title: t21,
                                    children: t23
                                }, void 0, false, {
                                    fileName: "[project]/my-project/components/HowItWorks.tsx",
                                    lineNumber: 169,
                                    columnNumber: 416
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-project/components/HowItWorks.tsx",
                            lineNumber: 169,
                            columnNumber: 322
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-project/components/HowItWorks.tsx",
                    lineNumber: 169,
                    columnNumber: 153
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/my-project/components/HowItWorks.tsx",
                lineNumber: 169,
                columnNumber: 112
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/my-project/components/HowItWorks.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t20;
        $[24] = t21;
        $[25] = t23;
        $[26] = t24;
    } else {
        t24 = $[26];
    }
    return t24;
};
_s(HowItWorks, "+qidgOBmHdgKCiInkzWU+gLc+yY=");
_c = HowItWorks;
const __TURBOPACK__default__export__ = HowItWorks;
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__5b996ce8._.js.map