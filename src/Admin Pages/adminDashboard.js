import './adminDashboard.css'
import './simpleBar.css'
import { BsCart } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineBulb } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

import Card from 'react-bootstrap/Card';
import SimpleBar from 'simplebar-react';
import {useGlobalContext} from "../context"
import { useState } from 'react';


const AdminDashboard =() =>{

    const { products } = useGlobalContext()
    const [bestSales, setBestSales] = useState(products);
    const [Recent, setRecent] = useState(products);
    return(
        <div className='dashboard-page'>
            <div className='page-content'>
                <div className='row row-cols-1 row-cols-lg-4'>
                    <div className='col'>
                        <Card className='card radius-10 overflow-hidden bg-gradient-cosmic'>
                            <Card.Body className='card-body'>
                                <Card.Subtitle className='d-flex align-items-center'>
                                    <div>
                                        <p className='mb-0 text-white'>Total Orders</p>
                                        <h5 className='mb-0 text-white'>867</h5>
                                    </div>
                                    <div className='ms-auto text-white'>
                                        <span className='bx bx-cart font-30'><BsCart/></span>
                                    </div>
                                </Card.Subtitle>
                                <div className='progress bg-white-2 radius-10 mt-4'>
                                    <div className='progress-bar bg-white' role="progressbar"></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card className='card radius-10 overflow-hidden bg-gradient-burning'>
                            <Card.Body className='card-body'>
                                <Card.Subtitle className='d-flex align-items-center'>
                                    <div>
                                        <p className='mb-0 text-white'>Total Income</p>
                                        <h5 className='mb-0 text-white'>52,945 EGP</h5>
                                    </div>
                                    <div className='ms-auto text-white'>
                                        <span className='bx bx-cart font-30'><IoWalletOutline/></span>
                                    </div>
                                </Card.Subtitle>
                                <div className='progress bg-white-2 radius-10 mt-4'>
                                    <div className='progress-bar bg-white' role="progressbar"></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card className='card radius-10 overflow-hidden bg-gradient-Ohhappiness'>
                            <Card.Body className='card-body'>
                                <Card.Subtitle className='d-flex align-items-center'>
                                    <div>
                                        <p className='mb-0 text-white'>Total Users</p>
                                        <h5 className='mb-0 text-white'>24.5k</h5>
                                    </div>
                                    <div className='ms-auto text-white'>
                                        <span className='bx bx-cart font-30'><AiOutlineBulb/></span>
                                    </div>
                                </Card.Subtitle>
                                <div className='progress bg-white-2 radius-10 mt-4'>
                                    <div className='progress-bar bg-white' role="progressbar"></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card className='card radius-10 overflow-hidden bg-gradient-moonlit'>
                            <Card.Body className='card-body'>
                                <Card.Subtitle className='d-flex align-items-center'>
                                    <div>
                                        <p className='mb-0 text-white'>Comments</p>
                                        <h5 className='mb-0 text-white'>869</h5>
                                    </div>
                                    <div className='ms-auto text-white'>
                                        <span className='bx bx-cart font-30'><BiChat/></span>
                                    </div>
                                </Card.Subtitle>
                                <div className='progress bg-white-2 radius-10 mt-4'>
                                    <div className='progress-bar bg-white' role="progressbar"></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'></div>
                </div>
                <div className='row row-cols-1 row-cols-lg-3'>
                    <div className='col d-flex'>
                        <Card className='card radius-10 w-100'>
                            <Card.Body className='card-body'>
                                <Card.Subtitle className='d-flex align-items-center'>
                                    <div>
                                        <h6 className='title mb-0'>Best Selling Products</h6>
                                    </div>
                                </Card.Subtitle>
                            </Card.Body>
                            <SimpleBar style={{ maxHeight: 500}}>
                            <Card.Body className='best-selling-products p-3 mb-3 ps ps--activity-y'>
                            {bestSales.map(product => {
                                const { images, id, price, name } = product;
                                return (
                                    <>
                                    <div key ={id} className='d-flex align-items-center'>
                                        <div className='product-img'>
                                            <img src={images} alt="logo" className='p-1'/>
                                        </div>
                                        <div className='ps-3'>
                                            <h6 className='mb-0 '>{name}</h6>
                                            <p className='mb-0 text-secondary'>{price} EGP/Each 56 Orders</p>
                                        </div>
                                        <p className='ms-auto mb=0 text-secondary'>{price} EGP</p>
                                    </div>
                                    <hr></hr>
                                </>
                                )
                            })}

                            </Card.Body>
                            </SimpleBar>
                        </Card>
                    </div>
                    <div className='col d-flex'>
                        <Card className='card radius-10 w-100'>
                            <Card.Body className='card-body'>
                                <Card.Subtitle className='d-flex align-items-center'>
                                    <div>
                                        <h6 className='title mb-0'>Recent Reviews</h6>
                                    </div>
                                </Card.Subtitle>
                            </Card.Body>
                            <SimpleBar style={{ maxHeight: 500}}>
                            <Card.Body className='recent-reviews p-3 mb-3 ps ps--activity-y'>
                                {Recent.map(product => {
                                    const { images, id, rating, name } = product;
                                    return (
                                        <>
                                        <div className='d-flex align-items-center'>
                                            <div className='product-img'>
                                                <img src={images} alt="logo" className='p-1'/>
                                            </div>
                                            <div className='ps-3'>
                                                    <h6 className='mb-0 '>{name}</h6>
                                            </div>
                                            <p className='ms-auto mb=0 text-secondary'>
                                                <span className='text-warning mr-1'><FaStar/></span>
                                                {rating}.00
                                            </p>
                                        </div>
                                        <hr></hr>
                                        
                                    </>
                                    )
                                })}
                            </Card.Body>
                            </SimpleBar>
                        </Card>
                    </div>
                    <div className='col d-flex'>
                        <Card className='card radius-10 w-100'>
                            <Card.Body className='card-body'>
                                <Card.Subtitle className='d-flex align-items-center'>
                                    <div>
                                        <h6 className='title mb-0'>Support Inbox</h6>
                                    </div>
                                </Card.Subtitle>
                            </Card.Body>
                            <SimpleBar style={{ maxHeight: 500}}>
                            <Card.Body className='support-list p-3 mb-3 ps ps--activity-y'>
                                <div className='d-flex align-items-top'>
                                    <div className='user-img'>
                                        <img src="https://furniturehubapp.com/public/assets/img/avatar-place.png" alt="logo" className='p-1'/>
                                    </div>
                                    <div className='ps-3'>
                                        <h6 className='mb-1 '>User Name
                                        <span className='text-primary float-end font-13'>2 hours ago</span></h6>
                                        <p className='mb-0 font-13 text-secondary'>My item doesn't ship to correct address. Please check it proper</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='d-flex align-items-top'>
                                    <div className='user-img'>
                                        <img src="https://furniturehubapp.com/public/assets/img/avatar-place.png" alt="logo" className='p-1'/>
                                    </div>
                                    <div className='ps-3'>
                                        <h6 className='mb-1 '>User Name
                                        <span className='text-primary float-end font-13'>3 hours ago</span></h6>
                                        <p className='mb-0 font-13 text-secondary'>My item doesn't ship to correct address. Please check it proper</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='d-flex align-items-top'>
                                    <div className='user-img'>
                                        <img src="https://furniturehubapp.com/public/assets/img/avatar-place.png" alt="logo" className='p-1'/>
                                    </div>
                                    <div className='ps-3'>
                                        <h6 className='mb-1 '>User Name
                                        <span className='text-primary float-end font-13'>12 hours ago</span></h6>
                                        <p className='mb-0 font-13 text-secondary'>My item doesn't ship to correct address. Please check it proper</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='d-flex align-items-top'>
                                    <div className='user-img'>
                                        <img src="https://furniturehubapp.com/public/assets/img/avatar-place.png" alt="logo" className='p-1'/>
                                    </div>
                                    <div className='ps-3'>
                                        <h6 className='mb-1 '>User Name
                                        <span className='text-primary float-end font-13'>yesterday</span></h6>
                                        <p className='mb-0 font-13 text-secondary'>My item doesn't ship to correct address. Please check it proper</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='d-flex align-items-top'>
                                    <div className='user-img'>
                                        <img src="https://furniturehubapp.com/public/assets/img/avatar-place.png" alt="logo" className='p-1'/>
                                    </div>
                                    <div className='ps-3'>
                                        <h6 className='mb-1 '>User Name
                                        <span className='text-primary float-end font-13'>2 days ago</span></h6>
                                        <p className='mb-0 font-13 text-secondary'>My item doesn't ship to correct address. Please check it proper</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='d-flex align-items-top'>
                                    <div className='user-img'>
                                        <img src="https://furniturehubapp.com/public/assets/img/avatar-place.png" alt="logo" className='p-1'/>
                                    </div>
                                    <div className='ps-3'>
                                        <h6 className='mb-1 '>User Name
                                        <span className='text-primary float-end font-13'>3 hours ago</span></h6>
                                        <p className='mb-0 font-13 text-secondary'>My item doesn't ship to correct address. Please check it proper</p>
                                    </div>
                                </div>
                            </Card.Body>
                            </SimpleBar>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;