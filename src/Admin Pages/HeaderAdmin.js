import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../components/header.css";
// icons
import { BsSearch, BsCart4, BsStars } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaInstagram, FaTwitter } from "react-icons/fa";
// global context
import { useGlobalContext } from "../context";
// images
import logo from '../images/logo1.png';
import DarkMode from "../DarkMode.jsx";

function Header() {
  const { IsSidebarOpen, openSearch, closeSideBar } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token and session data
    sessionStorage.removeItem("token");
    localStorage.removeItem("userData");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className={`${IsSidebarOpen ? "header-area on" : "header-area"}`}>
      {/* close btn */}
      <div className="nav-close" onClick={closeSideBar}>
        <i className="fa fa-times fa-lg"></i>
      </div>
      {/*logo image */}
      <div className="logo">
        <Link to="/adminDashboard"><img src={logo} alt="logo" width="250px" height="250px" /></Link>
      </div>
      {/* navigation header */}
      <div className="header-nav">
        <ul>
          <li><NavLink to="/adminDashboard" end>Admin Dashboard</NavLink></li>
          <li><NavLink to="/newProduct">New Product</NavLink></li>
          <li><NavLink to="/adminProfile">Admin Profile</NavLink></li>
        </ul>
      </div>
      <div className="login-cont">
        <Link to="/login" className='btn login-btn' onClick={handleLogout}>Logout</Link>
      </div>

      <DarkMode />
      <br></br>
      <br></br>

      {/* social information links */}
      <div className="social-info ">
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com/">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://www.pinterest.com/">
          <FaPinterestP />
        </a>
      </div>
    </div>
  );
}

export default Header;
