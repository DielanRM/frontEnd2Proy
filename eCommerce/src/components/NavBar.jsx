import { useEffect, useState } from 'react';
import { logOutUserService } from '../services/userServices.js';
import { NavLink } from 'react-router-dom'
import { SiSurveymonkey } from "react-icons/si"
import { FaDoorOpen } from "react-icons/fa6";
import { useAuthContext } from '../context/AuthContext.jsx';
import { getUser } from '../services/userServices.js';
import './NavBar.scss'


function NavBar() {

  const { user, isAuth} = useAuthContext()
  const [userData, setUserData] = useState()

  useEffect(()=>{
    const token = window.localStorage.getItem('token')
    if (token) {
      getUser(token)
        .then((response)=>{
          setUserData(response.data)
        })
        .catch((error)=>console.error(error.message))
    }
  })

  return (
    <nav>
      <div className='logoContainer'>
        <img src="https://cdn-icons-png.flaticon.com/512/6532/6532383.png" alt="" />
      </div>
      <div>
        <input type="text" />
        <button></button>
      </div>
      <div className="nav__options">
        <ul>
          <li>
            <NavLink to={'/'}>
              Home
            </NavLink>
          </li>

          {isAuth ? (
            <li>
              <div className='useStyle'>
                <SiSurveymonkey />
                <span>{userData && userData.firs_name}</span>
              </div>
            </li>) : (
            <>
              <li>
                <NavLink to={'/login'}>
                  Ingresa
                </NavLink>
              </li>
              <li>
                <NavLink to={'/signup'}>
                  Registrate
                </NavLink>
              </li>
            </>
          )
          }
          { user.role === "ADMIN" ? <li>settings</li> : null}

          <li onClick={logOutUserService}>
            <FaDoorOpen />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
