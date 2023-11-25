import React, {useState} from 'react';
import {Button, Col, Dropdown, Image, Input, Layout, message, Row, Space, theme} from 'antd';
import {Box, IconButton, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {DownOutlined, PoweroffOutlined, UserOutlined} from "@ant-design/icons";
import {useAuth} from "../hooks/use-auth";

const {Header} = Layout;

const handleMenuClick = (e: any) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const items = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined/>,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined/>,
    },
    {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined/>,
        danger: true,
    },
    {
        label: '4rd menu item',
        key: '4',
        icon: <UserOutlined/>,
        danger: true,
        disabled: true,
    },
];

const menuProps = {
    items,
    onClick: handleMenuClick,
};


export const MainHeader = () => {
    const auth = useAuth();

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const handleUserMenuClick = (e: any) => {
        if (e.key == 2) {
            auth.logout();
        }
    };

    const userProps = {
        items: [
            {
                label: 'Đổi mật khẩu',
                key: '1',
                icon: <UserOutlined/>,
            },
            {
                label: 'Đăng xuất',
                key: '2',
                icon: <PoweroffOutlined/>,
                danger: true,
            },
        ],
        onClick: handleUserMenuClick,
    }
    return (
        <Header style={{
            background: colorBgContainer,
            // position: 'sticky',
            // top: 0,
            zIndex: 1,
        }}>
            <Row>
                <Col span={12}>
                    {/*<SearchInput placeholder="Search"*/}
                    {/*             style={{*/}
                    {/*                 width: '100%',*/}
                    {/*                 borderRadius: 20,*/}
                    {/*             }}/>*/}
                    <Input size="large" placeholder="Search" style={{width: '100%', borderRadius: 20}}
                           prefix={<SearchIcon style={{color: 'grey'}}/>}/>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={12}/>
                        <Col span={2} style={{textAlign: 'center'}}>
                            <IconButton>
                                <Image preview={false} src={'/static/icons/ic_mail.png'}/>
                            </IconButton>
                        </Col>
                        <Col span={2} style={{textAlign: 'center'}}>
                            <IconButton>
                                <Image preview={false} src={'/static/icons/ic_notification.png'}/>
                            </IconButton>
                        </Col>
                        <Col span={4} style={{textAlign: 'center'}}>
                            <Dropdown menu={menuProps}>
                                <Button style={{padding: 2, borderRadius: 20}}>
                                    <Space>
                                        <Row>
                                            <Col span={8}>
                                                <Image style={{borderRadius: 20}}
                                                       preview={false}
                                                       src={'/static/icons/ic_language.png'}/>
                                            </Col>
                                            <Col span={8}>
                                                <Typography>VN</Typography>
                                            </Col>
                                            <Col span={8}>
                                                <Typography>
                                                    <DownOutlined/>
                                                </Typography>
                                            </Col>
                                        </Row>
                                    </Space>
                                </Button>
                            </Dropdown>
                        </Col>
                        <Col span={4} style={{textAlign: 'center'}}>
                            <Dropdown menu={userProps} placement="bottomRight">
                                <Button style={{padding: 2, border: 'none'}}>
                                    <Space>
                                        <Row>
                                            <Col span={12}>
                                                <Image style={{borderRadius: 20}}
                                                       preview={false}
                                                       src={'/static/icons/ic_language.png'}/>
                                            </Col>
                                            <Col span={12}>
                                                <Typography>
                                                    <DownOutlined/>
                                                </Typography>
                                            </Col>
                                        </Row>
                                    </Space>
                                </Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    );
};
