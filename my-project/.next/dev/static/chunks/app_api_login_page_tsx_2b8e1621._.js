(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/api/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "d8cf5691c5462cc1d0fc87f35ad32f5f486c61721628b1a21c2028b4021a9639") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8cf5691c5462cc1d0fc87f35ad32f5f486c61721628b1a21c2028b4021a9639";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] !== email || $[2] !== password || $[3] !== router) {
        t0 = ({
            "LoginPage[handleLogin]": async ()=>{
                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                const data = await res.json();
                if (!res.ok) {
                    setMessage(`❌ ${data.error || "Login failed"}`);
                } else {
                    setMessage("\u2705 Login successful! Redirecting...");
                    setTimeout({
                        "LoginPage[handleLogin > setTimeout()]": ()=>router.push("/")
                    }["LoginPage[handleLogin > setTimeout()]"], 500);
                }
            }
        })["LoginPage[handleLogin]"];
        $[1] = email;
        $[2] = password;
        $[3] = router;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const handleLogin = t0;
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-white font-bold text-3xl uppercase",
            children: "Login"
        }, void 0, false, {
            fileName: "[project]/app/api/login/page.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "LoginPage[<input>.onChange]": (e)=>setEmail(e.target.value)
        })["LoginPage[<input>.onChange]"];
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== email) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: t2,
            className: "border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md w-64"
        }, void 0, false, {
            fileName: "[project]/app/api/login/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[7] = email;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "LoginPage[<input>.onChange]": (e_0)=>setPassword(e_0.target.value)
        })["LoginPage[<input>.onChange]"];
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== password) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: t4,
            className: "border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md w-64"
        }, void 0, false, {
            fileName: "[project]/app/api/login/page.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[10] = password;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== message) {
        t6 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-white",
            children: message
        }, void 0, false, {
            fileName: "[project]/app/api/login/page.tsx",
            lineNumber: 94,
            columnNumber: 21
        }, this);
        $[12] = message;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-0 left-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full z-[-1]"
        }, void 0, false, {
            fileName: "[project]/app/api/login/page.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== handleLogin) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleLogin,
            className: "border-2 relative group border-white rounded-lg p-3 font-bold text-white hover:text-purple-500 transition duration-700 uppercase shadow-lg w-64",
            children: [
                "Sign In",
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/app/api/login/page.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[15] = handleLogin;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== router) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white",
            children: [
                "Don't have an account?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-purple-500 hover:underline",
                    onClick: {
                        "LoginPage[<button>.onClick]": ()=>router.push("/api/signup")
                    }["LoginPage[<button>.onClick]"],
                    children: "Sign Up"
                }, void 0, false, {
                    fileName: "[project]/app/api/login/page.tsx",
                    lineNumber: 117,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/api/login/page.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[17] = router;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t3 || $[20] !== t5 || $[21] !== t6 || $[22] !== t8 || $[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex justify-center items-center bg-gradient-to-bl from-purple-400 to-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-12 flex-col items-center bg-white/10 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.8)] gap-3 backdrop-blur-xl",
                children: [
                    t1,
                    t3,
                    t5,
                    t6,
                    t8,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/app/api/login/page.tsx",
                lineNumber: 127,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/api/login/page.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[19] = t3;
        $[20] = t5;
        $[21] = t6;
        $[22] = t8;
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    return t10;
}
_s(LoginPage, "mPZwPlR3ZqzxwZX60+qVLOU3dqk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_api_login_page_tsx_2b8e1621._.js.map