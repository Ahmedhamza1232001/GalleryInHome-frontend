import React from 'react';
import {Link,NavLink} from "react-router-dom"
import logo from '../images/logo1.png'
import './adminHeader.css'
import { BiLogOutCircle } from "react-icons/bi";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                        <li><NavLink to="/adminProfile">Profile</NavLink></li>
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
                    <div className='logout'>
                        <span><BiLogOutCircle/></span>
                        <Link to="/login" className='btn login-btn'>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;
        
// function AdminHeader() {
//     return (
//     <Navbar collapseOnSelet expand="lg" bg="light" variant="light" fixed="top">
//         <Container>
//         <Navbar.Brand href="/adminDashboard">
//             <img src={logo} alt="logo" width="80px" height="80px"/>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ml-auto">
//             <Nav.Link href="/adminDashboard">Admin Dashboard</Nav.Link>
//             <Nav.Link href="/newProduct">New Product</Nav.Link>
//             </Nav>
//             <Nav className="ml-auto">
//             <NavDropdown title="" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="/adminProfile/3.1">Profile</NavDropdown.Item>
//                 <NavDropdown.Item href="/adminSettings/3.2">
//                 Settings
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="/login/3.3">
//                 Logout
//                 </NavDropdown.Item>
//             </NavDropdown>
//             <Button variant="outline-warning">Rabab Hamdy</Button>
//             </Nav>
//         </Navbar.Collapse>
//         </Container>
//     </Navbar>