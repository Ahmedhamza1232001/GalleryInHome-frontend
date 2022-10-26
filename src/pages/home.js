import React from 'react'
import {Link} from "react-router-dom"
import "./home.css"
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// icons
import {BsSearch,BsCart4,BsStars} from "react-icons/bs"
import {FaFacebookF,FaPinterestP,FaInstagram,FaTwitter} from "react-icons/fa"
// global context
import {useGlobalContext} from "../context"
// images
import logo from '../images/logo.webp'
import pot from "../images/vase.webp"
import chair from "../images/chair.webp"
import table from "../images/table.webp"
import footer from "../images/footer_logo.webp"

function Home() {
  return (
    <>
      <section className='main-content'>
        {/* mobaile nav */}
        <div className="mobile-nav">

        </div>
        {/* header */}
        <div className="header-area">
          {/* close btn */}
          <div className="nav-close">
            <i className="fa fa-times fa-lg"></i>
          </div>
          {/*logo image */}
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo"/></Link>
          </div>
          {/* navigation header */}
          <div className="header-nav">
            <ul>
              <li className='active'><Link to="/">Home</Link></li>
              <li><Link to="/">Shop</Link></li>
              <li><Link to="/">Cart</Link></li>
              <li><Link to="/">Product</Link></li>
              <li><Link to="/">Checkout</Link></li>
            </ul>
          </div>
          {/* special pages */}
          <div className="cart-fav-search my-5">
            <Link to="/">
              <BsCart4 className='mr-2'/>
              Cart
              <span> (0)</span>
            </Link>
            <Link to="/">
              <BsStars className='mr-2'/>
              Favorite
            </Link>
            <Link to="/">
              <BsSearch className='mr-2'/>
              Search
            </Link>
          </div>
          {/* social information links */}
          <div className="social-info ">
            <a href="https://www.facebook.com/">
              <FaFacebookF/>
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitter/>
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram/>
            </a>
            <a href="https://www.pinterest.com/">
              <FaPinterestP/>
            </a>
          </div>
        </div>
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
      </section>
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
                    <Nav.Link href="#link">Shop</Nav.Link>
                    <Nav.Link href="#link">Product</Nav.Link>
                    <Nav.Link href="#link">Cart</Nav.Link>
                    <Nav.Link href="#link">Checkout</Nav.Link>
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