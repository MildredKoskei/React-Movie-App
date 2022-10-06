import React from 'react'
import {link} from "react-router-dom"

function Nav() {
  return (
    <>
    <div className="navbar">
      <NavLink to="/" exact>
        Home
      </NavLink>

      <NavLink to="/" exact>
        Popular
      </NavLink>

      <NavLink to="/" exact>
        Theatre
      </NavLink>

      <NavLink to="/" exact>
        Kids
      </NavLink>

      <NavLink to="/" exact>
        Drama
      </NavLink>

      <NavLink to="/" exact>
        Comedy
      </NavLink>

    </div>
    </>
  )
}

export default Nav