import {useNavigate} from "react-router";
import {Box, Link, Typography} from "@mui/material";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {HomeOutlined} from "@ant-design/icons";
import Styles from "./css/BreadCrumb.module.css";
import {MENU} from "../utils/const";

export const Breadcrumb = (props) => {
    const navigate = useNavigate();
    const route = window.location.pathname + window.location.search;
    const menu = MENU;

    const getMenuKeyByUrl = (array, routerUrl) => {
        for (let i = 0; i < array.length; i++) {
            let parentMenu = array[i];
            if (parentMenu?.url == routerUrl) {
                return [{...parentMenu}];
            } else if (parentMenu.children.length > 0) {
                let arrayTitle = getMenuKeyByUrl(parentMenu.children, routerUrl);
                if (arrayTitle) {
                    return [{...parentMenu}, ...arrayTitle];
                }
            }
        }
        return null;
    }

    return <Box sx={{display: 'flex', flexWrap: 'wrap', my: 2}}>
        {getMenuKeyByUrl(menu, route)?.map((v, i) => {
            if (i !== 0) {
                return (<>
                    <Typography style={{margin: "0px 8px"}} className={Styles.label}>/</Typography>
                    <Link href={v?.url || '#'} sx={{
                        display: 'flex', color: "#6F767E", ":hover": {
                            textDecoration: 'none',
                        }
                    }}>
                        <Typography className={Styles.label}>{v.title}</Typography>
                    </Link>
                </>);
            }
            return (<Link href={v?.url || '#'} sx={{
                display: 'flex', color: "#6F767E", ":hover": {
                    textDecoration: 'none',
                }
            }}><HomeOutlined onClick={() => {
                navigate("/");
            }} style={{marginRight: 12}} className={Styles.label}/>
                <Typography className={Styles.label}>{v.title}</Typography>
            </Link>);
        })}
    </Box>;
};
