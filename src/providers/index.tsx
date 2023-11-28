import React from 'react'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { Toaster } from 'react-hot-toast'
import { ConfigProvider, App as AppProvider } from 'antd'
import locale from 'antd/locale/vi_VN'
import { Provider } from 'react-redux'
import { store } from '../store'
import { createTheme } from '../theme'
import { AuthProvider } from '../contexts/jwt-context'
import Loading from '../components/Loading'
type Arg = {
   children: React.ReactNode
}
export default function ProviderRoot({ children }: Arg) {
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
                     <CssBaseline />
                     <Toaster position="bottom-right" />
                     <Loading />
                     {children}
                  </ThemeProvider>
               </AuthProvider>
            </Provider>
         </AppProvider>
      </ConfigProvider>
   )
}
