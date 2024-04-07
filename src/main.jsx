import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import Profile from './profile.jsx'
import LoginForm from './login.jsx'
import ProtestForm from './Protest.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProtestForm />
  </React.StrictMode>,
)
