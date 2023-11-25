import React, {useEffect, useState} from 'react';
import {Image, Layout, Menu, MenuProps} from "antd";
import "./css/main-sidebar.css"
import {Link as RouteLink} from "react-router-dom";
import {Link, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {MENU, MENU_ICON} from "../utils/const";
import {getListMenuKeyByUrl, getMenuKeyByUrl} from "../utils/utils";
import {SiderMenu} from "../types/SiderMenu";

const {Sider} = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export const MainSidebar = ({collapseSidebar = true}) => {
    const [collapsed, setCollapsed] = useState(collapseSidebar);
    const menu = MENU;
    const route = window.location.pathname + window.location.search;
    const [selectKeys, setSelectKeys] = useState([]);
    const [openKeys, setOpenKeys] = useState<string[]>([]);

    const makeMenuItem = (menuData: SiderMenu[]) => {
        let listMenu: MenuItem[] = [];
        menuData.map((v) => {
            if (v?.children?.length > 0) {
                let submenu: MenuItem[] = [];
                v.children.map((i) => {
                    if (i?.children?.length > 0) {
                        let subChildrenMenu: MenuItem[] = makeMenuItem(i.children);
                        submenu.push(getItem(i.url ? <Link href={i.url} style={{color: 'unset'}}>{i.title}</Link> :
                            <Link href="#"
                                  style={{color: 'unset'}}>{i.title}</Link>, i.key, null, subChildrenMenu));
                    } else {
                        submenu.push(getItem(i.url ? <Link href={i.url} style={{color: 'unset'}}>{i.title}</Link> :
                            <Link href="#" style={{color: 'unset'}}>{i.title}</Link>, i.key));
                    }

                });
                listMenu.push(getItem(<Link href="#"
                                            style={{color: 'unset'}}>{v.title}</Link>, v.key, MENU_ICON[v.key], submenu));
            } else {
                listMenu.push(getItem(v.url ? <Link href={v.url} style={{color: 'unset'}}>{v.title}</Link> :
                    <Link href="#" style={{color: 'unset'}}>{v.title}</Link>, v.key, MENU_ICON[v.key]));
            }
        });
        return listMenu;
    }

    useEffect(() => {
        const keyActive = getListMenuKeyByUrl(menu, route);
        if (keyActive) {
            let selectKey = [];
            let listKey: any = [];
            for (let i = 0; i < keyActive.length; i++) {
                if (i == (keyActive.length - 1)) {
                    selectKey = keyActive[i].key;
                } else {
                    listKey = [...listKey, keyActive[i].key];
                }
            }

            if (listKey && selectKey) {
                setSelectKeys(selectKey);
                setOpenKeys(listKey);
            }
        }
    }, [route]);

    return (
        <Sider width={300}
               collapsible={true}
               collapsed={collapsed}
               theme="light"
               onCollapse={(value) => setCollapsed(value)}>
            <RouteLink to={"/"}>
                <div className="logo-vertical">
                    <Image preview={false} src={'/logo.png'} width={46}/>
                    {
                        !collapsed && <Typography className="logo-label">eLMIS</Typography>
                    }
                </div>
            </RouteLink>
            <Menu theme="light"
                  mode="inline"
                  selectedKeys={selectKeys}
                  openKeys={collapsed ? [] : openKeys}
                  onOpenChange={(openKeys: string[]) => {
                      setOpenKeys(openKeys);
                  }}
                  items={makeMenuItem(menu)}/>
        </Sider>
    );
};
