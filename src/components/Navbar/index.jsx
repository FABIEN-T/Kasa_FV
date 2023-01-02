import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
        // arria-current={({ isActive }) => `${isActive && 'page'}`}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
        // arria-current={({ isActive }) => `${isActive && 'page'}`}
      >
        A propos
      </NavLink>
    </nav>
  )
}

export default Navbar
