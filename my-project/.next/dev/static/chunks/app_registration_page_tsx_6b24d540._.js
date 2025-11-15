(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/registration/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignUpPage
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
function SignUpPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "67836a71124da8db5531f8b038b3077eed9be7378a60a3c55fafdaffa6c10494") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "67836a71124da8db5531f8b038b3077eed9be7378a60a3c55fafdaffa6c10494";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [passwordMessage, setPasswordMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "SignUpPage[validatePassword]": (pass, confirm)=>{
                if (!confirm) {
                    setPasswordMessage("");
                    return false;
                }
                if (pass === confirm) {
                    setPasswordMessage("\u2705 Passwords match");
                    return true;
                } else {
                    setPasswordMessage("\u274C Passwords do not match");
                    return false;
                }
            }
        })["SignUpPage[validatePassword]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const validatePassword = t0;
    let t1;
    if ($[2] !== confirmPassword || $[3] !== email || $[4] !== password || $[5] !== router) {
        t1 = async function handleSignUp() {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            const { error } = await supabase.auth.signUp({
                email,
                password
            });
            if (error) {
                alert("\u274C Sign up failed: " + error.message);
            } else {
                alert("\u2705 Sign up successful! Check your email for confirmation.");
                router.push("/login");
            }
        };
        $[2] = confirmPassword;
        $[3] = email;
        $[4] = password;
        $[5] = router;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const handleSignUp = t1;
    let t2;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.6)"
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "fa-regular fa-circle-user border-2 border-white rounded-lg p-2 text-4xl text-white shadow-lg"
        }, void 0, false, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
    } else {
        t2 = $[7];
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-white font-bold text-3xl uppercase shadow-xs",
            style: {
                fontFamily: "Poppins, sans-serif"
            },
            children: "Sign Up"
        }, void 0, false, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "SignUpPage[<input>.onChange]": (e)=>setEmail(e.target.value)
        })["SignUpPage[<input>.onChange]"];
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== email) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            placeholder: "email",
            className: "border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-green-900 font-bold text-md placeholder-black",
            value: email,
            onChange: t5
        }, void 0, false, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[11] = email;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== confirmPassword) {
        t7 = ({
            "SignUpPage[<input>.onChange]": (e_0)=>{
                setPassword(e_0.target.value);
                validatePassword(e_0.target.value, confirmPassword);
            }
        })["SignUpPage[<input>.onChange]"];
        $[13] = confirmPassword;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== password || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            className: "border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md placeholder-black",
            value: password,
            onChange: t7
        }, void 0, false, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[15] = password;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== password) {
        t9 = ({
            "SignUpPage[<input>.onChange]": (e_1)=>{
                setConfirmPassword(e_1.target.value);
                validatePassword(password, e_1.target.value);
            }
        })["SignUpPage[<input>.onChange]"];
        $[18] = password;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== confirmPassword || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            placeholder: "Confirm password",
            className: "border-b-2 placeholder-white border-white bg-transparent focus:outline-none text-purple-500 font-bold text-md placeholder-black",
            value: confirmPassword,
            onChange: t9
        }, void 0, false, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[20] = confirmPassword;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    const t11 = `text-sm mb-2 ${passwordMessage.includes("\u274C") ? "text-red-500" : "text-green-500"}`;
    let t12;
    if ($[23] !== passwordMessage || $[24] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t11,
            children: passwordMessage
        }, void 0, false, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[23] = passwordMessage;
        $[24] = t11;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            fontFamily: "Poppins, sans-serif",
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.3)"
        };
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-0 left-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full z-[-1]"
        }, void 0, false, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== handleSignUp) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSignUp,
            className: "border-2 relative group border-white rounded-lg p-3 font-bold text-white cursor-pointer hover:text-green-900 transition duration-700 uppercase shadow-lg mt-4",
            style: t13,
            children: [
                "Sign Up",
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[28] = handleSignUp;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== router) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-md text-white font-semibold",
            children: [
                "Already have an account?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "SignUpPage[<button>.onClick]": ()=>router.push("/login")
                    }["SignUpPage[<button>.onClick]"],
                    className: "cursor-pointer text-purple-500 hover:underline",
                    children: "Sign In"
                }, void 0, false, {
                    fileName: "[project]/app/registration/page.tsx",
                    lineNumber: 194,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[30] = router;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t10 || $[33] !== t12 || $[34] !== t15 || $[35] !== t16 || $[36] !== t6 || $[37] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen overflow-x-hidden flex justify-center items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-12 flex-col items-center bg-white/10 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.8)] gap-3 backdrop-blur-xl",
                style: t2,
                children: [
                    t3,
                    t4,
                    t6,
                    t8,
                    t10,
                    t12,
                    t15,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/app/registration/page.tsx",
                lineNumber: 204,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/registration/page.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t12;
        $[34] = t15;
        $[35] = t16;
        $[36] = t6;
        $[37] = t8;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    return t17;
}
_s(SignUpPage, "XgAHnOPcPsTCFlbsJHExoE9B7MQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignUpPage;
var _c;
__turbopack_context__.k.register(_c, "SignUpPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_registration_page_tsx_6b24d540._.js.map