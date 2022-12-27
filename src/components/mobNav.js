import React from 'react'
import { FaBars } from 'react-icons/fa'
import "./mobNav.css"
import logo from '../images/logo1.png'
import {Link} from "react-router-dom"
import { useGlobalContext } from '../context'
function MObNav() {

  const {openSideBar} = useGlobalContext()

  return (
    <div className='mob-nav'>
        <Link to="/" className='logo'><img src={logo} alt="logo" width="100px" height="100px"/></Link>
        <div className='toggler'>
          <span className='nav-toggle' onClick={openSideBar}><FaBars/></span>
        </div> 
    </div>
    )
}

export default MObNav