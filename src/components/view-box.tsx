import {Box} from "@mui/material";
import React, {CSSProperties, ReactNode,FC} from "react";
import {appColor} from "../utils/color";

interface ViewBoxProps {
    children?: ReactNode;
    styles?: CSSProperties
}


export const ViewBox: FC<ViewBoxProps> = (props) => {
    const {children,styles} = props;

    return <Box sx={{padding: 3, background: appColor.white, borderRadius: 2,...styles}}>{children}</Box>;
};


