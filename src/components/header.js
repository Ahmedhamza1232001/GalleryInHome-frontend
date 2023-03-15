import React from 'react'
import {Link,NavLink} from "react-router-dom"
import "./header.css"
// icons
import {BsSearch,BsCart4,BsStars} from "react-icons/bs"
import {FaFacebookF,FaPinterestP,FaInstagram,FaTwitter} from "react-icons/fa"
// global context
import {useGlobalContext} from "../context"
// images
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../images/logo1.png'
import DarkMode from "../DarkMode.jsx";
import { useState } from "react";
import "../pages/reels.css"
import Video from "../pages/video";
import Vid11 from "../videos/vid11.mp4"
import Vid22 from "../videos/vid22.mp4"
import Vid33 from "../videos/vid33.mp4"
import Vid1 from "../videos/vid1.mp4"
import Vid2 from "../videos/vid2.mp4"
import Vid4 from "../videos/vid4.mp4"
import Vid5 from "../videos/vid5.mp4"


const Header= () =>{
    const {IsSidebarOpen,openSearch,closeSideBar}= useGlobalContext()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = [
        {
            url: Vid1,
        },
        {
            url: Vid22,
        },
        {
            url: Vid2,
        },
        {
            url: Vid4,
        },
        {
            url: Vid5,
        },
        {
            url: Vid33,
        },
        {
            url: Vid11,
        },
        ];

    return (
    <div className={`${IsSidebarOpen?"header-area on":"header-area"}`} >
        {/* close btn */}
        <div className="nav-close" onClick={closeSideBar}>
           <i className="fa fa-times fa-lg"></i>
        </div>
        {/*logo image */}
        <div className="logo">
            <Link to="/"><img src={logo} alt="logo" width="250px" height="250px"/></Link>
        </div>
        {/* navigation header */}
        <div className="header-nav">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/profile">Profile </NavLink></li>
                <li><NavLink to="/Category">Shop</NavLink></li>
                <li><NavLink to="/product">Product</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
                <li><NavLink to="/checkout">Checkout</NavLink></li>
                <li><NavLink to="/feedback">Feedback</NavLink></li>
                <li><NavLink to="/adminDashboard">Admin</NavLink></li>
                
            </ul>
        </div>

        <div className='reels'>
            <div className='button' onClick={handleShow}>
            Reels
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title style={{color:'black'}}>Reels</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="reel">
                    <center>

                        {/*  */}

                        <div className="video-container" id="video-container">
                        {/*  */}

                        {data.map((list, i) => (
                            <Video
                            
                            url={list.url}
                            
                            />
                        ))}

                        {/*  */}
                        </div>
                    </center>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className='CloseButton'>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

        <div className="login-cont">
            <Link to="/login" className='btn login-btn'>Login</Link>
        </div>
        <DarkMode />
        {/* special pages */}
        <div className="cart-fav-search my-5">
            <Link to="/cart">
                <BsCart4 className='mr-2'/>
                Cart
                <span> (0)</span>
            </Link>
            <Link to="/favorite">
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