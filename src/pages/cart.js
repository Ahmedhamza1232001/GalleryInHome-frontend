import React from "react";
import './cart.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import {useState} from 'react'
import chair from "../images/chair.webp"
import vase from "../images/vase.webp"
import table from "../images/table.webp"

const Cart =() => {
    const[count,setCount]=useState(0);
    const inc=()=>{
        setCount(count+1);
      }
      const dec=()=>{
        if(count>1)
        setCount(count-1);
      }
    return(
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
                                    <tr>
                                        <td className="cart_product_image">
                                            <img src={chair} alt="chair" />
                                        </td>
                                        <td className="cart_product_desc">
                                            <h5>White Modern Chair</h5>
                                        </td>
                                        <td className="cart_product_price">
                                            <span className="pricee">$130</span>
                                        </td>
                                        <td className="cart_product_qty">
                                            <div className="qty">
                                                <p>Qty</p>
                                                <div className="quantity">
                                                    <button onClick={dec} className="qty-symbol" >-</button>
                                                    {count}
                                                    <button onClick={inc} className="qty-symbol">+</button>
                                                </div>  
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_product_image">
                                            <img src={vase} alt="vase" />
                                        </td>
                                        <td className="cart_product_desc">
                                            <h5>Minimal Plant Pot</h5>
                                        </td>
                                        <td className="cart_product_price">
                                            <span className="pricee">$10</span>
                                        </td>
                                        <td className="cart_product_qty">
                                            <div className="qty">
                                                <p>Qty</p>
                                                <div className="quantity">
                                                    <button onClick={dec} className="qty-symbol" >-</button>
                                                    {count}
                                                    <button onClick={inc} className="qty-symbol">+</button>
                                                </div>  
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_product_image">
                                            <img src={table} alt="table" />
                                        </td>
                                        <td className="cart_product_desc">
                                            <h5>White Modern Table</h5>
                                        </td>
                                        <td className="cart_product_price">
                                            <span className="pricee">$200</span>
                                        </td>
                                        <td className="cart_product_qty">
                                            <div className="qty">
                                                <p>Qty</p>
                                                <div className="quantity">
                                                    <button onClick={dec} className="qty-symbol" >-</button>
                                                    {count}
                                                    <button onClick={inc} className="qty-symbol">+</button>
                                                </div>  
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4'>

                        {/* Cart total information */}
                        <div className='cart-summary'>
                            <h5>Cart Total</h5>
                            <ul>
                                <li><span>Subtotal:</span><span>$140.00</span></li>
                                <li><span>Delivery:</span><span>Free</span></li>
                                <li><span>Total:</span><span>$140.00</span></li>
                            </ul>
                            <div className='cart-btn mt-100'>
                                <Button className='btn amado-btn w-100' as="input" type="submit" value="Checkout" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;