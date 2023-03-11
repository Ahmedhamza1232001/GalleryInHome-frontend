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

const AdminSettings =() => {
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
                                    <h4 className="h5 fs-16 mb-1 fw-600"> Rabab Hamdy </h4>
                                    <div className="text-truncate opacity-60">rabab_hamdyy@gmail.com</div>
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
                                    <Form action='#' method='post'>
                                        <Row>
                                            <div className='col-md-6 mb-3'>
                                                <Form.Label>First Name :</Form.Label>
                                                <Form.Control  className='form-control' size="lg" type="text"  placeholder="Rabab" />
                                            </div>
                                            <div className='col-md-6 mb-3'>
                                                <Form.Label>Last Name :</Form.Label>
                                                <Form.Control className='form-control' size="lg" type="text"  placeholder="Hamdy" />
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className='col-12 mb-3'>
                                                <Form.Label>Email :</Form.Label>
                                                <Form.Control className='form-control' size="lg" type="email"  placeholder="rabab_hamdyy@gmail.com" />
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className='col-12 mb-3'>
                                                <Form.Label>Password :</Form.Label>
                                                <Form.Control className='form-control' size="lg" type="password"  placeholder="R123@" />
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className='col-12 mb-3'>
                                                <Form.Label>Phone No :</Form.Label>
                                                <Form.Control className='form-control' size="lg" type="number" min={0} placeholder="01091827364" />
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className='col-12 mb-3'>
                                            <Form.Label>Address :</Form.Label>
                                            <Form.Control className='form-control' size="lg" type="text"  placeholder="Cairo, Damietta" />
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className='subs-btn'>
                                                <Link to="/adminProfile" className='btn sub-btn w-100 '>Submit</Link>
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