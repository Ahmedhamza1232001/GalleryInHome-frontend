import React from 'react';
import {Link,NavLink} from "react-router-dom"
import {useGlobalContext} from "../context"
import logo from '../images/logo1.png'
import './adminHeader.css'


const AdminHeader =() =>{
    return(
        <div className='topbar d-flex align-items-center'>
            <div className='adminHeader'>
                <div className='logo'>
                    <Link to="/adminDashboard"><img src={logo} alt="logo" width="200px" height="200px"/></Link>
                </div>
                <div className='adminPages'>
                    <ul>
                        <li><NavLink to="/adminDashboard">Admin Dashboard</NavLink></li>
                        <li><NavLink to="/newProduct">New Product</NavLink></li> 
                    </ul>
                </div>
                <div className='adminBox'>
                    <div className='adminInformation'>
                        <div className='adminPicture'>
                          <img src="https://furniturehubapp.com/public/assets/img/avatar-place.png"/>
                        </div>
                        <div className='admin-info ps-3'>
                            <p className='admin-name mb-0'>Rabab Hamdy</p>
                        </div>
                    </div>
                    <div className='dropdown-menu'>
                        <ul>
                            <li><NavLink to="/adminProfile">Profile</NavLink></li>
                            <li><NavLink to="/adminSettings">Settings</NavLink></li>
                            <li><NavLink to="/login">Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader;