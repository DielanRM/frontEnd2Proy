import './NavBar.scss'
import { NavLink } from 'react-router-dom'

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
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
