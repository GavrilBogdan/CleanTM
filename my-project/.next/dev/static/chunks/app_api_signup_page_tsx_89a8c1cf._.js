(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/api/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupPage
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
function SignupPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "ceac01cb9de6ea1d5af33ff359d5a63d37a4b948ac791ec48e54cc9dc0701818") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ceac01cb9de6ea1d5af33ff359d5a63d37a4b948ac791ec48e54cc9dc0701818";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] !== confirmPassword || $[2] !== email || $[3] !== password || $[4] !== router) {
        t0 = ({
            "SignupPage[handleSignup]": async ()=>{
                if (password !== confirmPassword) {
                    setMessage("\u274C Passwords do not match");
                    return;
                }
                const res = await fetch("/api/auth/signup", {
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
                    setMessage(`❌ ${data.error || "Signup failed"}`);
                } else {
                    setMessage("\u2705 Signup successful! Redirecting...");
                    setTimeout({
                        "SignupPage[handleSignup > setTimeout()]": ()=>router.push("/api/login")
                    }["SignupPage[handleSignup > setTimeout()]"], 1000);
                }
            }
        })["SignupPage[handleSignup]"];
        $[1] = confirmPassword;
        $[2] = email;
        $[3] = password;
        $[4] = router;
        $[5] = t0;
    } else {
        t0 = $[5];
    }
    const handleSignup = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-white font-bold text-3xl uppercase",
            children: "Sign Up"
        }, void 0, false, {
            fileName: "[project]/app/api/signup/page.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "SignupPage[<input>.onChange]": (e)=>setEmail(e.target.value)
        })["SignupPage[<input>.onChange]"];
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== email) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: t2,
            className: "border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md w-64"
        }, void 0, false, {
            fileName: "[project]/app/api/signup/page.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[8] = email;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "SignupPage[<input>.onChange]": (e_0)=>setPassword(e_0.target.value)
        })["SignupPage[<input>.onChange]"];
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== password) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: t4,
            className: "border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md w-64"
        }, void 0, false, {
            fileName: "[project]/app/api/signup/page.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[11] = password;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "SignupPage[<input>.onChange]": (e_1)=>setConfirmPassword(e_1.target.value)
        })["SignupPage[<input>.onChange]"];
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== confirmPassword) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            placeholder: "Confirm Password",
            value: confirmPassword,
            onChange: t6,
            className: "border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md w-64"
        }, void 0, false, {
            fileName: "[project]/app/api/signup/page.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[14] = confirmPassword;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== message) {
        t8 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-white",
            children: message
        }, void 0, false, {
            fileName: "[project]/app/api/signup/page.tsx",
            lineNumber: 117,
            columnNumber: 21
        }, this);
        $[16] = message;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-0 left-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full z-[-1]"
        }, void 0, false, {
            fileName: "[project]/app/api/signup/page.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== handleSignup) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSignup,
            className: "border-2 relative group border-white rounded-lg p-3 font-bold text-white hover:text-purple-500 transition duration-700 uppercase shadow-lg w-64",
            children: [
                "Sign Up",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/app/api/signup/page.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[19] = handleSignup;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== router) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white",
            children: [
                "Already have an account?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-purple-500 hover:underline",
                    onClick: {
                        "SignupPage[<button>.onClick]": ()=>router.push("/api/login")
                    }["SignupPage[<button>.onClick]"],
                    children: "Sign In"
                }, void 0, false, {
                    fileName: "[project]/app/api/signup/page.tsx",
                    lineNumber: 140,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/api/signup/page.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[21] = router;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t10 || $[24] !== t11 || $[25] !== t3 || $[26] !== t5 || $[27] !== t7 || $[28] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex justify-center items-center bg-gradient-to-bl from-purple-400 to-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-12 flex-col items-center bg-white/10 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.8)] gap-3 backdrop-blur-xl",
                children: [
                    t1,
                    t3,
                    t5,
                    t7,
                    t8,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/app/api/signup/page.tsx",
                lineNumber: 150,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/api/signup/page.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t11;
        $[25] = t3;
        $[26] = t5;
        $[27] = t7;
        $[28] = t8;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    return t12;
}
_s(SignupPage, "TG5azgMXIii66ibWfRQDfEyhUpI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_api_signup_page_tsx_89a8c1cf._.js.map