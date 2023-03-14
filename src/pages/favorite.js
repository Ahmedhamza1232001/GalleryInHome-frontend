import React from "react";
import "./favorite.css";
// import {useState} from "react";
import CardData from './cardData';
import {BsCart3 , BsStarFill} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai"
// import img1 from 'images/img1.jpg'

const Favorite = () => {
  
    return (
    <div className="favorite-main">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="fav-title">your favorite products</h2>
                </div>
            </div>
            <div className="row">
                {CardData.map(elm=>{
                    const {id,price,image,desc,rating} = elm
                    return(
                        <div key={id} className="col-12 col-sm-6 col-md-12 col-xl-6">
                            <div className="fav-card">
                                <img src={image} alt={`img-${id}`}/>
                                <div className="favCard-body row">
                                    <div className="col-8">
                                        <h4 className="card-price">{price} EGP</h4>
                                        <p>{desc}</p>
                                    </div>
                                    <div className="col-4">
                                        <div className="icons-cont">
                                            <div className="stars">
                                                {[...Array(rating)].map((star,i)=>{
                                                return <BsStarFill key={i} color="var(--clr-primary-1)"/>
                                                
                                                }) }       
                                            </div>
                                            <div className="icons">
                                                <BsCart3 color="gray" size="30px" style={{paddingRight:"5px"}}/>
                                                <AiFillHeart color="red" size="30px" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>    
    </div>
  )
}; export default Favorite;
