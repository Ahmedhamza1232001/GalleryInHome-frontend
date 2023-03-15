import React from 'react'
import {Link} from "react-router-dom"
import "./footer.css"
import $ from "jquery"
// global context
import {useGlobalContext} from "../context"
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// image
import footer from "../images/logo2.png"



function Footer() {

  return (
    <section className='footer-area'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-4">
          <div className="footer-logo mr-50">
            <Link to="/"><img src={footer} alt="logo" width="250px" height="250px"/></Link>
          </div>
          <p className='copy-rights'>This template is made by team-name | credits for <a href="https://colorlib.com" target="_blank">Colorlib</a> &copy; 2022</p>
        </div>
        <div className="col-12 col-lg-8">
          <div className="footer_menu">
            <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/profile">Profile</Link>
                  <Link className="nav-link" to="/Category">Shop</Link>
                  <Link className="nav-link" to="/Product">Product</Link>
                  <Link className="nav-link" to="/Cart">Cart</Link>
                  <Link className="nav-link" to="/Checkout">Checkout</Link>
                  <Link className="nav-link" to="/feedback">Feedback</Link>
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

export default Footer