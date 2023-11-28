import React from 'react'
import ReactDOM from 'react-dom/client'
import './theme/index.css'
import './theme/App.css'
import App from './App'
import reportWebVitals from './libs/reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
reportWebVitals()
