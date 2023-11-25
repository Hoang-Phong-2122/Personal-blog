import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {DashBoardlayout} from "../../layouts/dashboard-layout";
import {useAuth} from "../../hooks/use-auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import tailwindHeader from "../../components/tailwindHeader";
import TailwindHeader from "../../components/tailwindHeader";
import { withAuthGuard } from '../../hocs/with-auth-guard';

const Index = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    useEffect(() => {
    }, []);

    return <div>
        <TailwindHeader/>
    </div>

    // return <DashBoardlayout>
    //     <Box sx={{
    //         height: '100%',
    //         display: 'flex',
    //         flex: '1 1 auto',
    //         backgroundImage: `url("/static/bg/medical-discussion.png")`,
    //         backgroundSize: 'cover',
    //         backgroundRepeat: 'no-repeat',
    //         padding: 10
    //     }}>
    //         <Box sx={{
    //             display: 'flex',
    //             flex: '1 1 auto',
    //             backgroundImage: `url("/static/bg/bg_dashboard_1.png")`,
    //             backgroundSize: 'cover',
    //             backgroundRepeat: 'no-repeat'
    //         }}>
    //         </Box>
    //     </Box>
    // </DashBoardlayout>;
};

export default withAuthGuard(Index);
