import React from 'react'
import {Link} from "react-router-dom"
import "./FooterAdmin.css"
import $ from "jquery"
// global context
import {useGlobalContext} from "../context"
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// image
import footer from "../images/logo2.png"



function FooterAdmin() {

  return (
    <section className='footer-area'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-4">
          <div className="footer-logo mr-50">
            <Link to="/adminDashboard"><img src={footer} alt="logo" width="250px" height="250px"/></Link>
          </div>
          <p className='copy-rights'>This template is made by Gallary in home team &copy; 2022</p>
        </div>
        <div className="col-12 col-lg-8">
          <div className="footer_menu">
            <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                  <Link className="nav-link" to="/adminDashboard">Admin Dashboard</Link>
                  <Link className="nav-link" to="/newProduct">New Product</Link>
                  <Link className="nav-link" to="/adminProfile">Admin Profile</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
    </section>

  )
}

export default FooterAdmin;