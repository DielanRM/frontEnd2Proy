import { logOutUserService } from '../services/userServices.js';
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
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

                <li onClick={logOutUserService}>
                  
                    Logout
                  
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
