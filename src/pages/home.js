import React from 'react'
import {Link} from "react-router-dom"
import "./home.css"
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// global context
import {useGlobalContext} from "../context"
// images
import pot from "../images/vase.webp"
import chair from "../images/chair.webp"
import table from "../images/table.webp"
import footer from "../images/footer_logo.webp"

function Home() {
  return (
    <>
        {/* mobaile nav */}
        <div className="mobile-nav">
        
        </div>
        {/* product category */}
        <div className="products-catagories-area">
          <div className="products-center">
            <article className="single-product">
              <Link to="/">
                <img src={chair} alt="chair" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>modern chair</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={pot} alt="vase" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>plant pot</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
            <Link to="/">
                <img src={table} alt="table" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>small table</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={pot} alt="vase" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>plant pot</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={chair} alt="chair" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>modern chair</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={pot} alt="vase" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>plant pot</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={table} alt="table" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>small table</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={pot} alt="pot" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>plant pot</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={table} alt="table" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>small table</h4>
                </div>
              </Link>
            </article>
          </div>
        </div>  
      {/* footer section */}
      <section className='footer-area'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <div className="footer-logo mr-50">
              <Link to="/"><img src={footer} alt="logo"/></Link>
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
                    <Nav.Link className="active"href="#home">Home</Nav.Link>
                    <Nav.Link href="#Shop">Shop</Nav.Link>
                    <Nav.Link href="#Product">Product</Nav.Link>
                    <Nav.Link href="#Cart">Cart</Nav.Link>
                    <Nav.Link href="#Checkout">Checkout</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
    )
}

export default Home