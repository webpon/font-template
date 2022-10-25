import { Navigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// 快速导入工具函数
const lazyLoad = (moduleName) => {
    const Module = lazy(() => import(`@/pages/${moduleName}`));
    return <Suspense fallback={<div>page loading</div>}><Module /></Suspense>;
};
const routes = [
    {
        path: "/",
        exact: true,
        hiddenSider: true,
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        name: '首页',
        element: lazyLoad("home"),
        children: [
            {
                path: '',
                name: '2323',
                hiddenSider: true,
                element: <Navigate to="recommend" />,
            },
            {
                path: "recommend",
                name: '推荐',
                element: lazyLoad("home/sub-pages/recommend")
            },
            {
                path: "recommend2",
                name: '推荐2',
                element: lazyLoad("home/sub-pages/recommend2")
            },

        ]
    },
    {
        path: "/mine",
        name: "我的",
        exact: true,
        element: lazyLoad("mine")
    },
]

export default routes;