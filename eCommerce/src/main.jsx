import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import Aside from './components/aside/Aside.jsx'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <div className='main-content'>
          <Aside className='main-items' />
        </div>
        <RoutesIndex />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
