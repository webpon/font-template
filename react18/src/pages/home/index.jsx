import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import routes from "@/router"
import { HomeWrapper, TopMenu } from './style'
// 页面代码
let HomeChild;
routes.map(item => {
    if (item.path === '/home') {
        HomeChild = item.children.map(item => {
            if (item.hiddenSider) return null
            return (
                <NavLink to={item.path} key={item.path}>
                    {item.name}
                </NavLink>
            )
        })
    }
    return null
})
function HYAppHeader() {
    return (
        <HomeWrapper>
            <TopMenu>
                {HomeChild}
            </TopMenu>
            <Outlet />
        </HomeWrapper>
    )
}
export default memo(HYAppHeader)