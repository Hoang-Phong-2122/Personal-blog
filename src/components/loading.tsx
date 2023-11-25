import {Box, CircularProgress} from '@mui/material';
import {useLayoutEffect} from "react";
import {useSelector} from "react-redux";

export const Loading = () => {
    // @ts-ignore
    const {show} = useSelector((state) => state.loading);

    useLayoutEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100%";
        }
        if (!show) {
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        }
    }, [show]);

    return show ?
        (<Box
            sx={{
                backgroundColor: 'rgba(49, 62, 90, 0.3)',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                left: 0,
                p: 3,
                position: 'fixed',
                top: 0,
                width: '100vw',
                zIndex: 2000
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 3
                }}
            >
                <CircularProgress/>
            </Box>
        </Box>)
        : <></>;
};
