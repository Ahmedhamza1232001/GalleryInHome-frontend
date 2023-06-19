import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./favorite.css";
// import {useState} from "react";
import CardData from './cardData';
import { BsStarFill} from "react-icons/bs";
import { useGlobalContext } from "../context";

const Favorite = () => {
    const { addToCart, addToFav } = useGlobalContext()
    var data = localStorage.getItem('favData') ? JSON.parse(localStorage.getItem('favData')) : [];
    localStorage.setItem('favData', JSON.stringify(data));
    const [favData, setFavData] = useState(data)
    console.log(favData)

    return (
    <div className="favorite-main">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="fav-title">your favorite products</h2>
                </div>
            </div>
            <div className="row">
                {favData.map(elm=>{
                    const {id,price,images,name,rating} = elm
                    return(
                        <div key={id} className="col-12 col-sm-6 col-md-12 col-xl-6">
                            <div className="fav-card">
                                <Link to={`/product/${id}`}><img src={images[0].name} alt={`img-${id}`}/></Link>
                                <div className="favCard-body row">
                                    <div className="col-8">
                                        <h4 className="card-price">{price} EGP</h4>
                                        <p>{name}</p>
                                    </div>
                                    <div className="col-4">
                                        <div className="icons-cont">
                                            <div className="stars">
                                                {[...Array(rating)].map((star,i)=>{
                                                return <BsStarFill key={i} color="var(--clr-primary-1)"/>
                                                
                                                }) }       
                                            </div>
                                            <div className="icons">
                                                <i class="fa fa-cart-plus" aria-hidden="true" style={{ fontSize: "23px", color: "gray", paddingRight: "5px" }} onClick={(e) =>addToCart(e,id)}></i>
                                                <i class="fa fa-heart far select" aria-hidden="true" style={{ fontSize: "25px", color: "red", paddingTop: "5px" }} onClick={(e) => addToFav(e,id)}></i>
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
