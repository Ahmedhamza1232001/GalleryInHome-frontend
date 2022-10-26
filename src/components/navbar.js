import React from 'react'
import { FaBars } from 'react-icons/fa'
import "./navbar.css"
import logo from '../images/logo.webp'
import {Link} from "react-router-dom"
import { useGlobalContext } from '../context'
function Navbar() {
  const {openSearch}= useGlobalContext()
  return (
    <nav>
      <div className="nav-header .container">
        <Link to="/" className='logo'><img src={logo} alt="logo"/></Link>
        <div className="links-center">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/Category">Shop</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/signup">signup</Link></li>
          </ul>
        </div>
        <div>
          <span className='nav-toggle'><FaBars/></span>
          <button className='btn btn-dark' onClick={openSearch}>open search</button>
        </div>
     
      </div>
    </nav>
    )
}

export default Navbar