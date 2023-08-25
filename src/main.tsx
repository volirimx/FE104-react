import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Button } from './components/UI/Button/Button.tsx'
import { User } from './components/UI/User/User.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  
  <App />
  </React.StrictMode>,
)
