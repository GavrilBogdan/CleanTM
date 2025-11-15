module.exports = [
"[project]/my-project/components/Tasks.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TasksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SIX_HOURS = 6 * 60 * 60 * 1000;
const THIRTY_MINUTES = 30 * 60 * 1000;
const initialTasks = [
    {
        id: 1,
        title: "Collect 10 plastic bottles",
        description: "Find and collect 10 bottles from your area.",
        images: [],
        lastCompleted: null,
        startedAt: null
    },
    {
        id: 2,
        title: "Clean a park bench",
        description: "Wipe down and clean a park bench thoroughly.",
        images: [],
        lastCompleted: null,
        startedAt: null
    },
    {
        id: 3,
        title: "Pick up 15 pieces of trash",
        description: "Collect 15 random pieces of trash.",
        images: [],
        lastCompleted: null,
        startedAt: null
    }
];
function TasksPage() {
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeTaskId, setActiveTaskId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load persisted data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = JSON.parse(localStorage.getItem("tasks_v3"));
        const active = JSON.parse(localStorage.getItem("active_task"));
        if (saved) setTasks(saved);
        else {
            setTasks(initialTasks);
            localStorage.setItem("tasks_v3", JSON.stringify(initialTasks));
        }
        if (active) setActiveTaskId(active);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (tasks.length > 0) localStorage.setItem("tasks_v3", JSON.stringify(tasks));
        localStorage.setItem("active_task", JSON.stringify(activeTaskId));
    }, [
        tasks,
        activeTaskId
    ]);
    /* ========================= HELPERS ========================= */ const isCooldown = (task)=>{
        if (!task.lastCompleted) return false;
        return Date.now() - task.lastCompleted < SIX_HOURS;
    };
    const getCooldownTime = (task)=>{
        const remaining = SIX_HOURS - (Date.now() - task.lastCompleted);
        const h = Math.floor(remaining / 3600000);
        const m = Math.floor(remaining % 3600000 / 60000);
        return `${h}h ${m}m`;
    };
    const getFinishUnlockTime = (task)=>{
        if (!task.startedAt) return null;
        const remaining = THIRTY_MINUTES - (Date.now() - task.startedAt);
        const m = Math.max(0, Math.floor(remaining / 60000));
        const s = Math.max(0, Math.floor(remaining % 60000 / 1000));
        return `${m}m ${s}s`;
    };
    const startTask = (taskId)=>{
        if (activeTaskId) return; // only allow one active
        setActiveTaskId(taskId);
        setTasks((prev)=>prev.map((t)=>t.id === taskId ? {
                    ...t,
                    startedAt: Date.now()
                } : t));
    };
    const uploadImage = (taskId, file)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>{
            setTasks((prev)=>prev.map((t)=>t.id === taskId ? {
                        ...t,
                        images: [
                            ...t.images,
                            reader.result
                        ]
                    } : t));
        };
        reader.readAsDataURL(file);
    };
    const finishTask = (taskId)=>{
        setTasks((prev)=>prev.map((t)=>t.id === taskId ? {
                    ...t,
                    lastCompleted: Date.now(),
                    startedAt: null,
                    images: []
                } : t));
        setActiveTaskId(null);
    };
    /* ========================= UI ========================= */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#050505] px-6 py-16 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl font-extrabold text-center mb-14 text-green-500 drop-shadow-[0_0_15px_#00ff91]",
                children: "Daily CleanTM Tasks"
            }, void 0, false, {
                fileName: "[project]/my-project/components/Tasks.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto",
                children: tasks.map((task)=>{
                    const cooldown = isCooldown(task);
                    const isActive = activeTaskId === task.id;
                    const someTaskActive = activeTaskId && !isActive;
                    const canFinish = isActive && Date.now() - task.startedAt >= THIRTY_MINUTES;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " rounded-3xl p-6 bg-[#0a0a0a] border border-green-700/40  shadow-[0_0_25px_5px_rgba(0,255,150,0.08)] hover:shadow-[0_0_35px_10px_rgba(0,255,150,0.15)] transition-all duration-500 flex flex-col justify-between ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-green-400 drop-shadow-sm",
                                        children: task.title
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 mt-3",
                                        children: task.description
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this),
                                    task.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap mt-4 gap-2",
                                        children: task.images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: img,
                                                className: "h-20 w-20 rounded-xl border border-green-600 object-cover"
                                            }, i, false, {
                                                fileName: "[project]/my-project/components/Tasks.tsx",
                                                lineNumber: 154,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-project/components/Tasks.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: cooldown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 font-bold text-center",
                                    children: [
                                        "Refreshes in ",
                                        getCooldownTime(task)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-project/components/Tasks.tsx",
                                    lineNumber: 167,
                                    columnNumber: 19
                                }, this) : isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-yellow-400 font-semibold text-center",
                                    children: [
                                        "Finish unlocked in ",
                                        getFinishUnlockTime(task)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-project/components/Tasks.tsx",
                                    lineNumber: 171,
                                    columnNumber: 19
                                }, this) : someTaskActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-center text-sm",
                                    children: "Another task is in progress..."
                                }, void 0, false, {
                                    fileName: "[project]/my-project/components/Tasks.tsx",
                                    lineNumber: 175,
                                    columnNumber: 19
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/my-project/components/Tasks.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this),
                            !cooldown && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    onChange: (e)=>uploadImage(task.id, e.target.files[0]),
                                    className: "block w-full text-sm text-green-200 file:bg-green-600 file:text-white file:px-4 file:py-2 file:rounded-full cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/my-project/components/Tasks.tsx",
                                    lineNumber: 184,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-project/components/Tasks.tsx",
                                lineNumber: 183,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    !cooldown && !isActive && !someTaskActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>startTask(task.id),
                                        className: " w-full bg-green-600 hover:bg-green-700  text-white py-2.5 rounded-full font-bold  transition shadow-lg ",
                                        children: "Start Task"
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 195,
                                        columnNumber: 19
                                    }, this),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: !canFinish,
                                        onClick: ()=>finishTask(task.id),
                                        className: `
                      w-full py-2.5 rounded-full font-bold transition shadow-lg
                      ${canFinish ? "bg-green-500 hover:bg-green-600" : "bg-gray-600 cursor-not-allowed"}
                    `,
                                        children: "Finish Task"
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 208,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-project/components/Tasks.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this)
                        ]
                    }, task.id, true, {
                        fileName: "[project]/my-project/components/Tasks.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/my-project/components/Tasks.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-project/components/Tasks.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=my-project_components_Tasks_tsx_675702ec._.js.map