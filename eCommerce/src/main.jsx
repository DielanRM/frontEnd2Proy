import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import NavBar from './components/NavBar.jsx'
import Items from './pages/items/Items.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Items />
  </React.StrictMode>,
)
