(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Supabase client
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])("https://yemwpbhuhysdevnroqoz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllbXdwYmh1aHlzZGV2bnJvcW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2ODAxNTksImV4cCI6MjA3NTI1NjE1OX0.wsVuE5pUOi9O2uvqNTb7DZBTkKqYXi6fiNB9hSh2SQA");
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "aaf6973ea01eb579f789249ad28e3535e194cf16e26d2de1e853196721bbf57f") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aaf6973ea01eb579f789249ad28e3535e194cf16e26d2de1e853196721bbf57f";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] !== email || $[2] !== password || $[3] !== router) {
        t0 = async function handleLogin() {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                alert("Login failed: " + error.message);
            } else {
                router.push("/home");
            }
        };
        $[1] = email;
        $[2] = password;
        $[3] = router;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const handleLogin = t0;
    let t1;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.6)"
        };
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "fa-regular fa-circle-user border-2 border-white rounded-lg p-2 text-4xl text-white shadow-lg"
        }, void 0, false, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
    } else {
        t1 = $[5];
        t2 = $[6];
    }
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-white font-bold text-3xl uppercase shadow-xs",
            style: {
                fontFamily: "Poppins, sans-serif"
            },
            children: "Login"
        }, void 0, false, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "LoginPage[<input>.onChange]": (e)=>setEmail(e.target.value)
        })["LoginPage[<input>.onChange]"];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== email) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            placeholder: "email",
            className: "border-b-2 placeholder-white border-white bg-transparent\n          focus:outline-none text-green-900 font-bold text-md placeholder-black",
            value: email,
            onChange: t4
        }, void 0, false, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[9] = email;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "LoginPage[<input>.onChange]": (e_0)=>setPassword(e_0.target.value)
        })["LoginPage[<input>.onChange]"];
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== password) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            placeholder: "password",
            type: "password",
            className: "border-b-2 placeholder-white border-white bg-transparent\n          focus:outline-none text-purple-500 font-bold text-md placeholder-black",
            value: password,
            onChange: t6
        }, void 0, false, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[12] = password;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            fontFamily: "Poppins, sans-serif",
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.3)"
        };
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-0 left-0 w-0 h-full bg-white\n            transition-all duration-500 group-hover:w-full z-[-1]"
        }, void 0, false, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== handleLogin) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleLogin,
            className: "border-2 relative group border-white rounded-lg p-3\n          font-bold text-white hover:text-green-700 transition duration-700\n          uppercase shadow-lg mt- cursor-pointer",
            style: t8,
            children: [
                "Sign In",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[16] = handleLogin;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== router) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-md text-white font-semibold",
            children: [
                "Don’t have an account?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "LoginPage[<button>.onClick]": ()=>router.push("/registration")
                    }["LoginPage[<button>.onClick]"],
                    className: "cursor-pointer text-purple-500 hover:underline",
                    children: "Sign Up"
                }, void 0, false, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 127,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[18] = router;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t10 || $[21] !== t11 || $[22] !== t5 || $[23] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen  overflow-x-hidden flex justify-center items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-12 flex-col items-center bg-white/10 rounded-2xl\n      shadow-[0_8px_20px_rgba(0,0,0,0.8)] gap-3 backdrop-blur-xl",
                style: t1,
                children: [
                    t2,
                    t3,
                    t5,
                    t7,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/app/login/page.tsx",
                lineNumber: 137,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
        $[22] = t5;
        $[23] = t7;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    return t12;
}
_s(LoginPage, "IjUem0aZZUlm6NzNrISE5qnCu/Q=", false, function() {
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

//# sourceMappingURL=app_login_page_tsx_e96a26ee._.js.map