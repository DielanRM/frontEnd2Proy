import './NavBar.scss'

function NavBar() {
  return (
    <nav>
        <div>Logo</div>
        <div className="nav__options">
            <ul>
                <li>Home</li>
                <li>nosotros</li>
                <li>Contacto</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
