import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className='header-area'>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
    </nav>
    )
}

export default Navbar