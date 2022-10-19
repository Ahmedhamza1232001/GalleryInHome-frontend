import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import { useGlobalContext } from '../context'
function Navbar() {
  const {openSearch}= useGlobalContext()
  return (
    <nav className='header-area'>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
      <div>
        <button className='btn-submit' onClick={openSearch}>open search</button>
      </div>

    </nav>
    )
}

export default Navbar