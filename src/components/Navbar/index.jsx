import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        // end
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        // end
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        A propos
      </NavLink>
    </nav>
  )
}

export default Navbar
