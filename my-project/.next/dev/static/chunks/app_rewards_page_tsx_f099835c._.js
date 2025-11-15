(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/rewards/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RewardsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RewardsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "0c3ad9165eb9911c8b389646ab3b3dfbb6497515fb52ad6bef6fe2b507df1343") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c3ad9165eb9911c8b389646ab3b3dfbb6497515fb52ad6bef6fe2b507df1343";
    }
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: 1,
                name: "Coffee Coupon",
                cost: 50
            },
            {
                id: 2,
                name: "Free Flower Bouquet",
                cost: 200
            },
            {
                id: 3,
                name: "Discount 10%",
                cost: 120
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [items] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "RewardsPage[useEffect()]": ()=>{
                const fetchUser = {
                    "RewardsPage[useEffect() > fetchUser]": async ()=>{
                        const res = await fetch("/api/auth/me");
                        const data = await res.json();
                        if (data.user) {
                            setUser(data.user);
                        }
                    }
                }["RewardsPage[useEffect() > fetchUser]"];
                fetchUser();
            }
        })["RewardsPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== user) {
        t3 = ({
            "RewardsPage[buyItem]": async (item)=>{
                if (!user) {
                    return;
                }
                const res_0 = await fetch("/api/rewards/buy", {
                    method: "POST",
                    body: JSON.stringify({
                        itemId: item.id
                    })
                });
                const data_0 = await res_0.json();
                if (res_0.ok) {
                    setMessage(`You bought ${item.name}!`);
                    setUser({
                        ...user,
                        points: data_0.points
                    });
                } else {
                    setMessage(data_0.error);
                }
            }
        })["RewardsPage[buyItem]"];
        $[4] = user;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const buyItem = t3;
    if (!user) {
        let t4;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/rewards/page.tsx",
                lineNumber: 94,
                columnNumber: 12
            }, this);
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        return t4;
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold mb-4",
            children: "Rewards Shop"
        }, void 0, false, {
            fileName: "[project]/app/rewards/page.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== user.points) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-6 text-lg",
            children: [
                "Your Points: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: user.points
                }, void 0, false, {
                    fileName: "[project]/app/rewards/page.tsx",
                    lineNumber: 110,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/rewards/page.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[8] = user.points;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== message) {
        t6 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 p-3 bg-yellow-200 rounded",
            children: message
        }, void 0, false, {
            fileName: "[project]/app/rewards/page.tsx",
            lineNumber: 118,
            columnNumber: 21
        }, this);
        $[10] = message;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== buyItem || $[13] !== items || $[14] !== user.points) {
        let t8;
        if ($[16] !== buyItem || $[17] !== user.points) {
            t8 = ({
                "RewardsPage[items.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border rounded-lg shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: item_0.name
                            }, void 0, false, {
                                fileName: "[project]/app/rewards/page.tsx",
                                lineNumber: 129,
                                columnNumber: 109
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2",
                                children: [
                                    "Cost: ",
                                    item_0.cost,
                                    " points"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/rewards/page.tsx",
                                lineNumber: 129,
                                columnNumber: 165
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "RewardsPage[items.map() > <button>.onClick]": ()=>buyItem(item_0)
                                }["RewardsPage[items.map() > <button>.onClick]"],
                                className: "mt-4 bg-blue-600 text-white px-4 py-2 rounded",
                                disabled: user.points < item_0.cost,
                                children: user.points < item_0.cost ? "Not enough points" : "Buy"
                            }, void 0, false, {
                                fileName: "[project]/app/rewards/page.tsx",
                                lineNumber: 129,
                                columnNumber: 215
                            }, this)
                        ]
                    }, item_0.id, true, {
                        fileName: "[project]/app/rewards/page.tsx",
                        lineNumber: 129,
                        columnNumber: 47
                    }, this)
            })["RewardsPage[items.map()]"];
            $[16] = buyItem;
            $[17] = user.points;
            $[18] = t8;
        } else {
            t8 = $[18];
        }
        t7 = items.map(t8);
        $[12] = buyItem;
        $[13] = items;
        $[14] = user.points;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
            children: t7
        }, void 0, false, {
            fileName: "[project]/app/rewards/page.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== t5 || $[22] !== t6 || $[23] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                t4,
                t5,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/rewards/page.tsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[21] = t5;
        $[22] = t6;
        $[23] = t8;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    return t9;
}
_s(RewardsPage, "gsXPPz788RrMJjxnObqUkAJVtg4=");
_c = RewardsPage;
var _c;
__turbopack_context__.k.register(_c, "RewardsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_rewards_page_tsx_f099835c._.js.map