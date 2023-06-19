import React, { useEffect } from "react";
import './cart.css';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import {useState} from 'react'
import {useGlobalContext} from "../context"
import CardData from "./cardData";

const Cart =() => { 
    var data = localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : [];
    data.map(elem => elem.qnt = 1)
    localStorage.setItem('cartData', JSON.stringify(data));
    const [cartData, setCartData] = useState(data)
    
    // function inc(id) {
    //     let product = data.find(elm => elm.id === id)
    //     product.qnt++
    //     localStorage.setItem('cartData',JSON.stringify(data))
    // }

    return (
        <div className='cart-table-area section-padding-100'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        <div className="cart-title mt-50">
                            <h2>Shopping Cart</h2>
                        </div>
                        <div className="cart-table clearfix">
                            <Table responsive >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>                                   
                                </thead>
                                <tbody>
                                    {cartData.map(product => {
                                        const { id, images, name, price ,qnt} = product
                                        let count =1;
                                        return (                                            
                                        <tr key={id}>
                                            <td className="cart_product_image">
                                                <img src={images[0].name} alt={id} />
                                            </td>
                                            <td className="cart_product_desc">
                                                <h5>{name}</h5>
                                            </td>
                                            <td className="cart_product_price">
                                                <span className="pricee">{price} EGP</span>
                                            </td>
                                            <td className="cart_product_qty">
                                                <div className="qty">
                                                    <p>Qty</p>
                                                    <div className="quantity">
                                                        <button onClick={()=>count--} className="qty-symbol" >-</button>
                                                        {qnt}
                                                        <button onClick={()=>console.log("inc")} className="qty-symbol">+</button>
                                                    </div>  
                                                </div>
                                            </td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4'>

                        {/* Cart total information */}
                        <div className='cart-summary'>
                            <h5>Cart Total</h5>
                            <ul>
                                <li><span>Subtotal:</span><span>0.00 EGP</span></li>
                                <li><span>Delivery:</span><span>Free</span></li>
                                <li><span>Total:</span><span>0.00 EGP</span></li>
                            </ul>
                            <div className='cart-btn mt-100'>
                                <Link to="/checkout" className='btn amado-btn w-100'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;