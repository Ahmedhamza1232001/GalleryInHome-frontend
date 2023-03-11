import React from "react";
import "./profile.css";
import { Row , Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {BsGear,BsHeart,BsHouseDoor,BsCalendar2Date} from "react-icons/bs"
import { MdPayment , MdOutlineLocalShipping } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";

const Profile =() => {
    const ProfileData =[
        {
            icoon: <BsHouseDoor className='mr-2' /> ,
            title:"My Account",
            link:"/profile",
        },
        {
            icoon: <BsHeart className='mr-2' /> ,
            title:"Favorite List",
            link:"/favorite",
        },
        {
            icoon: <BsCalendar2Date className='mr-2' /> ,
            title:"Date of purchase",
            link:"/date",
        }, 
        {
            icoon: <BsGear className='mr-2' /> ,
            title:"Settings",
            link:"/setting",
        },
        {
            icoon: <MdPayment className='mr-2' /> ,
            title:"Payment",
            link:"/payment",
        },
        {
            icoon: <BiLogOutCircle className='mr-2' /> ,
            title:"Logout",
            link:"/login",
        }]

    return(
        <>
        <div className=" profilee">
            <div className="container">
            <Row>
                <div className='col-lg-4'>
                        <div className="aiz-user-sidenav-wrap position-relative z-1 shadow-sm">
                            <div className="aiz-user-sidenav rounded c-scrollbar-light pb-5 pb-xl-0">
                                <div className="pic p-4 text-xl-center mb-4 border-bottom text-white">
                                    <span className="avatar avatar-md mb-3">
                                        <img src="https://furniturehubapp.com/public/assets/img/avatar-place.png" 
                                        className="imagee" alt = "..."/>
                                    </span>
                                    <h4 className="h5 fs-16 mb-1 fw-600"> ghada wahb </h4>
                                    <div className="text-truncate opacity-60">ghadawahb2008@gmail.com</div>
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
                                        <div className="total-products">
                                        <h3> <BsHouseDoor className='mr-2' /> My Account </h3>
                                        </div>
                                    </div>
                                    </div>
                                </Row>
                                <Row>                                   
                                    
                                        <Card style={{ width: '20rem' }} className="card">
                                            <Card.Body className="bg-grad rounded-lg mb-4 overflow-hidden">
                                            <Card.Title className="tit">(0) Products</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">in your cart</Card.Subtitle>
                                            <Card.Text>
                                            The products you have added to the shopping cart will appear here.
                                            </Card.Text>
                                            <Card.Link href="#">Cart</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    
                                </Row>
                                <Row>
                                    
                                        <Card style={{ width: '20rem' }} className="card">
                                            <Card.Body className="bg-grad  rounded-lg mb-4 overflow-hidden">
                                            <Card.Title className="tit">(0) Products</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">in your favorite list</Card.Subtitle>
                                            <Card.Text>
                                            The products that you liked will appear here.
                                            </Card.Text>
                                            <Card.Link href="#">Favorite list</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    
                                </Row>

                                <Row style={{height:'250px'}}>
                                                      
                                        <Card style={{ width: '20rem' }} className="card">
                                            <Card.Body className="bg-grad rounded-lg mb-4 overflow-hidden">
                                            <Card.Title className="tit">(0) Products</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">you purchased</Card.Subtitle>
                                            <Card.Text>
                                            The products you have bought will appear here.
                                            </Card.Text>
                                            <Card.Link href="#">Purchases</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    
                                </Row>

                                <Row style={{height:'300px'}}>                                
                                    <Card className="Shipping">
                                    <Card.Header className="tit">
                                    
                                        Shipping details ...
                                        <MdOutlineLocalShipping className='mr-2' />
                                        </Card.Header>
                                    <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <footer className="blockquote-footer">
                                    Details will appear when you place an order.
                                    </footer>
                                    </blockquote>
                                    </Card.Body>
                                    </Card>               
                                </Row>
                            </div>         
                        </div>
                    </div>
                </Row>
            </div>
        </div>
        </>
    )}

export default Profile;