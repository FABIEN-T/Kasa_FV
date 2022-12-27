import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  let activeStyle = {
    textDecoration: 'underline',
  }

  let activeClassName = 'underline'
  return (
    <nav>
      <NavLink
        to="messages"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Accueil
      </NavLink>
      <NavLink
        to="tasks"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        A propos
      </NavLink>
    </nav>
  )
}

export default Navbar
