import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Button } from './components/Button/Button.tsx'
import { User } from './components/User/User.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

    <Button name="Primary" mode="primary" />
    <Button name="Primary" mode="primary" disabled={true}/>

    <Button name="Secondary" mode="secondary" />
    <Button name="Secondary" mode="secondary" disabled={true}/>

    <Button name="Tertiary" mode="tertiary" />
    <Button name="Tertiary" mode="tertiary" disabled={true} />

    <User userName='Oleg Grishan'/>

  </React.StrictMode>,
)
