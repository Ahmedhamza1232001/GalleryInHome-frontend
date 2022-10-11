import React from 'react'
import "./header.css"
import {Link} from "react-router-dom"

function Header() {
  return (
    <header className='header-area'>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
    </header>
    )
}

export default Header