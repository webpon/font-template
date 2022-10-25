import React, { memo } from 'react'
import AppHeader from './components/header'
import AppFooter from './components/footer'
import AppSider from './components/sider'
import AppMain from './components/main';
import { Layout } from 'antd';

function AppLayout() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Layout>
                <div style={{ display: "flex", flex: 'auto' }}>
                    <AppSider />
                    <AppMain />
                </div>
            </Layout>
            <AppFooter />
        </Layout>
    );
}

export default memo(AppLayout);
