import React from 'react';
import { PageHeader } from 'antd';
import Image from 'next/image'
import { Menu } from 'antd';
import { HomeFilled, SkinFilled, ToolFilled } from '@ant-design/icons';

const { SubMenu } = Menu;

const Header = () => {
    
    return (
        <div>
            <PageHeader className="site-page-header">
                <Image src="/real-g48dab7f7e_1280.png" alt="Logo name" width="400" height="100" />
            </PageHeader>
            <Menu mode="horizontal">
                <Menu.Item key="home" icon={<HomeFilled />}>
                Home
                </Menu.Item>
                <Menu.Item key="clothes" icon={<SkinFilled />}>
                Clothes
                </Menu.Item>
                {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu> */}
                <Menu.Item key="help" icon={<ToolFilled />}>
                Help
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Header
