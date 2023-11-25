import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from "./pages/auth/login";
import Error from "./pages/404";
import {ThemeProvider} from "@mui/material";
import {createTheme} from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import {Toaster} from "react-hot-toast";
import {AuthProvider, AuthConsumer} from "./contexts/jwt-context";
import {AuthGuard} from "./components/authentication/auth-guard";
import {SplashScreen} from "./components/splash-screen";
import {ConfigProvider, App as AppProvider} from "antd";
import locale from "antd/locale/vi_VN";
import {Provider} from "react-redux";
import {Loading} from "./components/loading";
import Dashboard from "./pages/dashboard";
import "./components/css/customComponent.css";
import "./index.css";
import {store} from "./store";

const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>);


const App: React.FC = () => {
    return (
        <ConfigProvider locale={locale}>
            <AppProvider>
                <Provider store={store}>
                    <AuthProvider>
                        <ThemeProvider
                            theme={createTheme({
                                mode: 'light',
                                responsiveFontSizes: true,
                            })}
                        >
                            <CssBaseline/>
                            <Toaster position="bottom-right"/>
                            <Loading/>
                            <AuthConsumer>
                                {
                                    (auth) => !auth.isInitialized
                                        ? <SplashScreen/>
                                        : <Routers/>
                                }
                            </AuthConsumer>
                        </ThemeProvider>
                    </AuthProvider>
                </Provider>
            </AppProvider>
        </ConfigProvider>
    );
};

export default App;
