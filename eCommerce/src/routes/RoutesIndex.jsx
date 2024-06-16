import { Routes, Route } from "react-router-dom"
import Items from "../pages/items/Items.jsx"
import Login from "../pages/loging/Login.jsx"
import Signup from "../pages/signup/Signup.jsx"

export default function RoutesIndex() {
  return (
    <Routes>
        <Route path="/" element={<Items />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
    </Routes>
  )
}
