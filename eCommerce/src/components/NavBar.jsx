import { useEffect } from 'react';
import { logOutUserService } from '../services/userServices.js';
import { NavLink } from 'react-router-dom'
import { SiSurveymonkey } from "react-icons/si"
import { FaDoorOpen } from "react-icons/fa6";
import { useAuthContext } from '../context/AuthContext.jsx';
import './NavBar.scss'


function NavBar() {

  const { user, isAuth} = useAuthContext()
  
  useEffect(()=>{
    const token = window.localStorage.getItem('token')
    if (token) {
      console.log(token);
    }
  })

  return (
    <nav>
      <div>Logo</div>
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
                <span>Diego</span>
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
