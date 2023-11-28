import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/login'
import Error from './pages/404'
import { AuthConsumer } from './contexts/jwt-context'
import './components/css/customComponent.css'
import './index.css'
import ProviderRoot from './providers'
import SplashScreen from './components/SplashScreen'
import Home from './pages/home'

const Routers = () => (
   <BrowserRouter>
      <Routes>
         <Route path="login" element={<Login />} />
         <Route path="/" element={<Home />} />
         <Route path="*" element={<Error />} />
      </Routes>
   </BrowserRouter>
)

const App: React.FC = () => {
   return (
      <ProviderRoot>
         <AuthConsumer>{(auth) => (!auth.isInitialized ? <SplashScreen /> : <Routers />)}</AuthConsumer>
      </ProviderRoot>
   )
}

export default App
