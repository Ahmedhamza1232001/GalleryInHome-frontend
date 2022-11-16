import React from 'react'
import {Link} from "react-router-dom"
import "./header.css"
// icons
import {BsSearch,BsCart4,BsStars} from "react-icons/bs"
import {FaFacebookF,FaPinterestP,FaInstagram,FaTwitter} from "react-icons/fa"
// global context
import {useGlobalContext} from "../context"
// images
import logo from '../images/logo.webp'


function Header() {
    const {IsSidebarOpen,openSearch,closeSideBar}= useGlobalContext()

    return (
    <div className={`${IsSidebarOpen?"header-area on":"header-area"}`} >
        {/* close btn */}
        <div className="nav-close" onClick={closeSideBar}>
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
                <li><Link to="/Category">Shop</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
            </ul>
        </div>
        <div className="login-cont">
            <Link to="/login" className='btn login-btn'>Login</Link>
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
            <Link onClick={openSearch}>
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

    )
}

export default Header