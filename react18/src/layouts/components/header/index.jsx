import React, { memo } from 'react';
import { SearchOutlined } from '@ant-design/icons'
import { Input } from "antd";
import {
    HeaderWrapper,
    HeaderRight
} from './style';

export default memo(function AppHeader() {
    // 返回的jsx
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <h2>header</h2>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                </HeaderRight>
            </div>
        </HeaderWrapper>
    )
})
