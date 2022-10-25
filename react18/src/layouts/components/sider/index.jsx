import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MailOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import routes from '@/router';
import { Menu, Button } from 'antd';

const items = routes.map(item => {
    if (item.hiddenSider) {
        return null
    } else {
        if (Array.isArray(item.children) && item.children.length > 0) {
            return {
                label: item.name, key: item.path, icon: <MailOutlined />,
                children: item.children.map(innerItem => {
                    if (innerItem.hiddenSider) return null
                    return { label: innerItem.name, key: item.path + '/' + innerItem.path, icon: <MailOutlined /> }
                })
            }
        } else {
            return {
                label: item.name, key: item.path, icon: <MailOutlined />
            }
        }
    }

})
function AppSider() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const onClick = e => {
        navigate(e.key)
    };
    return (
        <div style={{ width: collapsed ? 80 : 256 }}>
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
}

export default memo(AppSider);
