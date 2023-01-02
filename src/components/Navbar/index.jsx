import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        A propos
      </NavLink>
    </nav>
  )
}

export default Navbar
