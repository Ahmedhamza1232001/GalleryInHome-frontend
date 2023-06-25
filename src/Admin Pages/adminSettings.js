import React from "react";
import "./adminProfile.css";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {BsGear,BsHeart,BsHouseDoor,BsCalendar2Date} from "react-icons/bs"
import { MdPayment , MdOutlineLocalShipping } from "react-icons/md";
import { Row , Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { BiLogOutCircle } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import  { useState } from "react";

const AdminSettings =() => {
    const [newPassword, setNewPassword] = useState("");

    // Retrieve user data from session storage
    const userData = JSON.parse(localStorage.getItem("userData"));
    const name = userData ? userData.UserName : "";
    const email = userData ? userData.Email : "";
  
    const handleSubmit = (e) => {
        e.preventDefault();
    

    
        fetch("https://galleryinhome.azurewebsites.net/Auth/updatePassword", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userData ? userData.id : 0,
            newPassword: newPassword,
          })
            })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Network response was not ok.");
            }
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
        const ProfileData =[
        {
            icoon: <BsHouseDoor className='mr-2' /> ,
            title:"My Mccount",
            link:"/adminProfile",
        },
        {
            icoon: <BsGear className='mr-2' /> ,
            title:"Settings",
            link:"/adminSettings",
        },
        {
            icoon: <BiLogOutCircle className='mr-2' /> ,
            title:"Logout",
            link:"/login",
        }]

    return(
        <>
            <div className="container setting">
                <Row>
                    <div className='col-lg-4'>
                        <div className="aiz-user-sidenav-wrap position-relative z-1 shadow-sm">
                            <div className="aiz-user-sidenav rounded c-scrollbar-light pb-5 pb-xl-0">
                                <div className="pic p-4 text-xl-center mb-4 border-bottom text-white">
                                    <span className="avatar avatar-md mb-3">
                                        <img src="https://furniturehubapp.com/public/assets/img/avatar-place.png" 
                                        className="imagee" alt = "..."/>
                                    </span>
                                    <h4 className="h5 fs-16 mb-1 fw-600">{name}</h4>
                    <div className="text-truncate opacity-60">{email}</div>
                                </div>
                                <div className="profileList mb-3">
                                <ul className="aiz-size-nav-list px-2 metismenu ">
                                {ProfileData.map((val,key) => {
                                return(
                                    <li key={key} 
                                    className="row"
                                    id = {window.location.pathname === val.link ? "active" : " "}  
                                    onClick={()=> {window.location.pathname= val.link}}>  
                                    <div>
                                        {val.icoon}
                                        {val.title}
                                    </div>
                                    </li>
                                )
                            })}
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className='col-lg-8'>
                        <div className="profile-area">
                            <div className="container-fluid">
                                <Row>
                                    <div className="col-12">
                                        <div className="profile-topbar d-xl-flex align-items-end justify-content-between">
                                            <div className="total-products p">
                                            <h3> <BsGear className='mr-2' /> Settings </h3>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                                <div className="form">
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                    <div className='col-12 mb-3 mt-3'>
                                        <Form.Label>Password :</Form.Label>
                                        <Form.Control className='form-control' size="lg" type="password" placeholder="Enter New Password" onChange={(e) => setNewPassword(e.target.value)} />
                                    </div>
                                    </Row>
                                    <Row>
                                    <div className='subs-btn'>
                                        <Button type="submit" className='btn sub-btn w-100'>Submit</Button>
                                    </div>
                                    </Row>
                                </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </>
    )
}
export default AdminSettings;