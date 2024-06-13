import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import NavBar from './components/NavBar.jsx'
import Items from './pages/items/Items.jsx'
import Aside from './components/aside/Aside.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <div className='main-content'>
      <Items className='main-aside'/>
      <Aside className='main-items'/>
    </div>
    
  </React.StrictMode>,
)
