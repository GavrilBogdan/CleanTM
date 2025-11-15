(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-project/components/Tasks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TasksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "a09063b46041ccda674bbf8eea1928f05e4e8a8359a47a887d08927a9f2ed074") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a09063b46041ccda674bbf8eea1928f05e4e8a8359a47a887d08927a9f2ed074";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [activeTaskId, setActiveTaskId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "TasksPage[useEffect()]": ()=>{
                const saved = JSON.parse(localStorage.getItem("tasks_v3"));
                const active = JSON.parse(localStorage.getItem("active_task"));
                if (saved) {
                    setTasks(saved);
                } else {
                    setTasks(initialTasks);
                    localStorage.setItem("tasks_v3", JSON.stringify(initialTasks));
                }
                if (active) {
                    setActiveTaskId(active);
                }
            }
        })["TasksPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== activeTaskId || $[5] !== tasks) {
        t3 = ({
            "TasksPage[useEffect()]": ()=>{
                if (tasks.length > 0) {
                    localStorage.setItem("tasks_v3", JSON.stringify(tasks));
                }
                localStorage.setItem("active_task", JSON.stringify(activeTaskId));
            }
        })["TasksPage[useEffect()]"];
        t4 = [
            tasks,
            activeTaskId
        ];
        $[4] = activeTaskId;
        $[5] = tasks;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const isCooldown = _TasksPageIsCooldown;
    const getCooldownTime = _TasksPageGetCooldownTime;
    const getFinishUnlockTime = _TasksPageGetFinishUnlockTime;
    let t5;
    if ($[8] !== activeTaskId) {
        t5 = ({
            "TasksPage[startTask]": (taskId)=>{
                if (activeTaskId) {
                    return;
                }
                setActiveTaskId(taskId);
                setTasks({
                    "TasksPage[startTask > setTasks()]": (prev)=>prev.map({
                            "TasksPage[startTask > setTasks() > prev.map()]": (t)=>t.id === taskId ? {
                                    ...t,
                                    startedAt: Date.now()
                                } : t
                        }["TasksPage[startTask > setTasks() > prev.map()]"])
                }["TasksPage[startTask > setTasks()]"]);
            }
        })["TasksPage[startTask]"];
        $[8] = activeTaskId;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const startTask = t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "TasksPage[uploadImage]": (taskId_0, file)=>{
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    setTasks({
                        "TasksPage[uploadImage > <anonymous> > setTasks()]": (prev_0)=>prev_0.map({
                                "TasksPage[uploadImage > <anonymous> > setTasks() > prev_0.map()]": (t_0)=>t_0.id === taskId_0 ? {
                                        ...t_0,
                                        images: [
                                            ...t_0.images,
                                            reader.result
                                        ]
                                    } : t_0
                            }["TasksPage[uploadImage > <anonymous> > setTasks() > prev_0.map()]"])
                    }["TasksPage[uploadImage > <anonymous> > setTasks()]"]);
                };
                reader.readAsDataURL(file);
            }
        })["TasksPage[uploadImage]"];
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const uploadImage = t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "TasksPage[finishTask]": (taskId_1)=>{
                setTasks({
                    "TasksPage[finishTask > setTasks()]": (prev_1)=>prev_1.map({
                            "TasksPage[finishTask > setTasks() > prev_1.map()]": (t_1)=>t_1.id === taskId_1 ? {
                                    ...t_1,
                                    lastCompleted: Date.now(),
                                    startedAt: null,
                                    images: []
                                } : t_1
                        }["TasksPage[finishTask > setTasks() > prev_1.map()]"])
                }["TasksPage[finishTask > setTasks()]"]);
                setActiveTaskId(null);
            }
        })["TasksPage[finishTask]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const finishTask = t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl font-extrabold text-center mb-14 text-green-500 drop-shadow-[0_0_15px_#00ff91]",
            children: "Daily CleanTM Tasks"
        }, void 0, false, {
            fileName: "[project]/my-project/components/Tasks.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== activeTaskId || $[14] !== startTask || $[15] !== tasks) {
        let t10;
        if ($[17] !== activeTaskId || $[18] !== startTask) {
            t10 = ({
                "TasksPage[tasks.map()]": (task_2)=>{
                    const cooldown = isCooldown(task_2);
                    const isActive = activeTaskId === task_2.id;
                    const someTaskActive = activeTaskId && !isActive;
                    const canFinish = isActive && Date.now() - task_2.startedAt >= THIRTY_MINUTES;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\n                rounded-3xl p-6 bg-[#0a0a0a] border border-green-700/40 \n                shadow-[0_0_25px_5px_rgba(0,255,150,0.08)]\n                hover:shadow-[0_0_35px_10px_rgba(0,255,150,0.15)]\n                transition-all duration-500 flex flex-col justify-between\n              ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-green-400 drop-shadow-sm",
                                        children: task_2.title
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 182,
                                        columnNumber: 351
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 mt-3",
                                        children: task_2.description
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 182,
                                        columnNumber: 435
                                    }, this),
                                    task_2.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap mt-4 gap-2",
                                        children: task_2.images.map(_TasksPageTasksMapTask_2ImagesMap)
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 182,
                                        columnNumber: 522
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-project/components/Tasks.tsx",
                                lineNumber: 182,
                                columnNumber: 346
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: cooldown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 font-bold text-center",
                                    children: [
                                        "Refreshes in ",
                                        getCooldownTime(task_2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-project/components/Tasks.tsx",
                                    lineNumber: 182,
                                    columnNumber: 666
                                }, this) : isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-yellow-400 font-semibold text-center",
                                    children: [
                                        "Finish unlocked in ",
                                        getFinishUnlockTime(task_2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-project/components/Tasks.tsx",
                                    lineNumber: 182,
                                    columnNumber: 772
                                }, this) : someTaskActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-center text-sm",
                                    children: "Another task is in progress..."
                                }, void 0, false, {
                                    fileName: "[project]/my-project/components/Tasks.tsx",
                                    lineNumber: 182,
                                    columnNumber: 901
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/my-project/components/Tasks.tsx",
                                lineNumber: 182,
                                columnNumber: 632
                            }, this),
                            !cooldown && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    onChange: {
                                        "TasksPage[tasks.map() > <input>.onChange]": (e)=>uploadImage(task_2.id, e.target.files[0])
                                    }["TasksPage[tasks.map() > <input>.onChange]"],
                                    className: "block w-full text-sm text-green-200 file:bg-green-600 file:text-white file:px-4 file:py-2 file:rounded-full cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/my-project/components/Tasks.tsx",
                                    lineNumber: 182,
                                    columnNumber: 1046
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-project/components/Tasks.tsx",
                                lineNumber: 182,
                                columnNumber: 1024
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    !cooldown && !isActive && !someTaskActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "TasksPage[tasks.map() > <button>.onClick]": ()=>startTask(task_2.id)
                                        }["TasksPage[tasks.map() > <button>.onClick]"],
                                        className: "\n                      w-full bg-green-600 hover:bg-green-700 \n                      text-white py-2.5 rounded-full font-bold \n                      transition shadow-lg\n                    ",
                                        children: "Start Task"
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 184,
                                        columnNumber: 275
                                    }, this),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: !canFinish,
                                        onClick: {
                                            "TasksPage[tasks.map() > <button>.onClick]": ()=>finishTask(task_2.id)
                                        }["TasksPage[tasks.map() > <button>.onClick]"],
                                        className: `
                      w-full py-2.5 rounded-full font-bold transition shadow-lg
                      ${canFinish ? "bg-green-500 hover:bg-green-600" : "bg-gray-600 cursor-not-allowed"}
                    `,
                                        children: "Finish Task"
                                    }, void 0, false, {
                                        fileName: "[project]/my-project/components/Tasks.tsx",
                                        lineNumber: 186,
                                        columnNumber: 305
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-project/components/Tasks.tsx",
                                lineNumber: 184,
                                columnNumber: 207
                            }, this)
                        ]
                    }, task_2.id, true, {
                        fileName: "[project]/my-project/components/Tasks.tsx",
                        lineNumber: 182,
                        columnNumber: 18
                    }, this);
                }
            })["TasksPage[tasks.map()]"];
            $[17] = activeTaskId;
            $[18] = startTask;
            $[19] = t10;
        } else {
            t10 = $[19];
        }
        t9 = tasks.map(t10);
        $[13] = activeTaskId;
        $[14] = startTask;
        $[15] = tasks;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#050505] px-6 py-16 text-white",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/my-project/components/Tasks.tsx",
                    lineNumber: 210,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-project/components/Tasks.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    return t10;
}
_s(TasksPage, "QX8T7n5K35/Ir9W+h/2ag07PRJw=");
_c = TasksPage;
function _TasksPageTasksMapTask_2ImagesMap(img, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: img,
        className: "h-20 w-20 rounded-xl border border-green-600 object-cover"
    }, i, false, {
        fileName: "[project]/my-project/components/Tasks.tsx",
        lineNumber: 219,
        columnNumber: 10
    }, this);
}
function _TasksPageGetFinishUnlockTime(task_1) {
    if (!task_1.startedAt) {
        return null;
    }
    const remaining_0 = THIRTY_MINUTES - (Date.now() - task_1.startedAt);
    const m_0 = Math.max(0, Math.floor(remaining_0 / 60000));
    const s = Math.max(0, Math.floor(remaining_0 % 60000 / 1000));
    return `${m_0}m ${s}s`;
}
function _TasksPageGetCooldownTime(task_0) {
    const remaining = SIX_HOURS - (Date.now() - task_0.lastCompleted);
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor(remaining % 3600000 / 60000);
    return `${h}h ${m}m`;
}
function _TasksPageIsCooldown(task) {
    if (!task.lastCompleted) {
        return false;
    }
    return Date.now() - task.lastCompleted < SIX_HOURS;
}
var _c;
__turbopack_context__.k.register(_c, "TasksPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-project_components_Tasks_tsx_30033dbc._.js.map