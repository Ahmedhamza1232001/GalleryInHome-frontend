import React from "react";
import {useState} from "react";
import { Row , Col } from "react-bootstrap";
import "./category.css";
import {SidebarData} from './sidebarData';
import CardData from './cardData';
import {FaThLarge , FaBars} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {BsCart3 , BsStarFill} from "react-icons/bs";
// import {GrFavorite} from "react-icons/gr" ;
import {AiOutlineHeart} from "react-icons/ai" ;
import Form from 'react-bootstrap/Form';


const Category =() =>{
        const [data ] = useState(CardData);
        return(
            <>
            <div className="category-main">
                <div className="d-flex flex-wrap">
                    {/* sidebar */}
                    <div className="sidebar">
                    <Col className="catagories ">
                    <h1 className="title">Catagories</h1>
                    <ul className="sidebarList">
                    {SidebarData.map((val,key) => {
                        return(
                            <li key={key} 
                            className="row"
                            id = {window.location.pathname === val.link ? "active" : " "}  
                            onClick={()=> {window.location.pathname= val.link}}>  
                            <div>
                                {val.title}
                            </div>
                            </li>
                        )
                    })}
                    </ul>
                    <div>
                        <h1 className="title">Brands</h1>
                        <Form className="brand" >
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                className="check"
                                type={type}
                                id={`default-${type}`}
                                label={`Amado`}
                                />

                                <Form.Check
                                className="check"
                                type={type}
                                label={`Ikea`}
                                id={`default-${type}`}
                                />
                                <Form.Check
                                className="check"
                                type={type}
                                label={`The Factory`}
                                id={`default-${type}`}
                                />
                                <Form.Check
                                className="check"
                                type={type}
                                label={`Artdeco`}
                                id={`default-${type}`}
                                />
                                <Form.Check
                                className="check"
                                type={type}
                                label={`Furniture Inc`}
                                id={`default-${type}`}
                                />
                                </div>
                            ))}
                            </Form>
                    </div>
                    </Col>
                    </div>
                    
                        {/* cards */}
                    <div className="product-area py-100">
                        <div className="container-fluid">

                            <Row>
                                <div className="col-12">
                                    <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                                        <div className="total-products">
                                            <p> showing 1-8 of 25</p>
                                            <div className="view d-flex">
                                                <a href="..."> <FaThLarge size="30px" color="#ffc107"/> </a>
                                                <a href="..."> <FaBars size="30px" color="black"/> </a>
                                            </div>
                                        </div>
                                        <div className="product-sorting d-flex">
                                            <div className="sort-by-date d-flex align-items-center mr-15">
                                                <Dropdown as={ButtonGroup} >
                                                    <Button variant="success" >Sort by</Button>
                                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/Date">Date</Dropdown.Item>
                                                        <Dropdown.Item href="#/Newest">Newest</Dropdown.Item>
                                                        <Dropdown.Item href="#/Popular">Popular</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                        </Dropdown>
                                            </div>
                                            <div className="view-product d-flex align-items-center">
                                            <Dropdown as={ButtonGroup}>
                                            <Button variant="success">View</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">12</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">24</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">48</Dropdown.Item>
                                            </Dropdown.Menu>
                                            </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>

                                {/* cards */}
                            <Row >
                                {data.map((items) =>{
                                    const {id ,price, image,desc,rating} = items;
                                    return(
                                        <>
                                        <div className='col-12 col-sm-6 col-md-12 col-xl-6' key={id}>
                                            <div className="card">
                                                <img src= {image} 
                                                className="card-img-top" alt="..." />
                                                <div className="card-body d-flex">
                                                    <div>
                                                        <h4 className="card-price">{price} EGP</h4>
                                                        <p className="card-description">
                                                            {desc}
                                                        </p>
                                                    </div>
                                                    <div className="icon">
                                                    <div className="stars">
                                                        {[...Array(rating)].map((star,i)=>{
                                                            return <BsStarFill key={i} color="var(--clr-primary-1)"/>
                                                         }) }       
                                                    </div>
                                                        
                                                        <div className="d-flex" style={{    justifyContent:"space-around",marginTop:"8px"}}>
                                                            <AiOutlineHeart size="25px" color="red"/>
                                                            <BsCart3 size="25px" color="gray"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })}
                                
                            </Row>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary">1.</button>
                                <button type="button" class="btn btn-primary">2.</button>
                                <button type="button" class="btn btn-primary">3.</button>
                                <button type="button" class="btn btn-primary">4.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
};

export default Category;