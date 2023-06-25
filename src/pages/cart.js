import React, { useEffect } from "react";
import "./cart.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useGlobalContext } from "../context";
import CardData from "./cardData";
import AdminDashboard from "../Admin Pages/adminDashboard";


const Cart = () => {
// get data from local storage using user token
let tok = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")).token : "";
var data = localStorage.getItem("cart" + tok)
  ? JSON.parse(localStorage.getItem("cart"+tok))
  : [];
localStorage.setItem("cart"+tok, JSON.stringify(data));
const [cartData, setCartData] = useState(data);
const remove = (id) => {
  const updatedData = data.filter((elem) => elem.id !== id);
  localStorage.setItem("cart" + tok, JSON.stringify(updatedData));
  localStorage.setItem("cartt", JSON.stringify(updatedData));
  setCartData(updatedData);
  };
  const inc = (id) => {
    let elem = data.find(elm => elm.id = id)
    elem.qnt += 1
    localStorage.setItem("cart" + tok, JSON.stringify(data));
    setCartData(data)
  }
  const calculateTotal = () => {
    return data.reduce((total, product) => total + product.price, 0);
  };
  
  const calculateTotalQuantity = () => {
    return data.reduce((total, product) => total + product.qnt, 0);
  };

  const totalQuantity = calculateTotalQuantity();

  const totalSum = calculateTotal().toFixed(2);
  useEffect(() => {
    // Save the total and total quantity to localStorage
    localStorage.setItem("total", totalSum);
    localStorage.setItem("totalQuantity", totalQuantity);
    // setCartData(data)
  }, [totalSum, totalQuantity]);

  
  // Check if cartData is empty
  const isCartEmpty = cartData.length === 0;
  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="cart-title mt-50">
              <h2>Shopping Cart</h2>
            </div>
            <div className="cart-table clearfix">
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((product) => {
                    const { id, images, name, price, qnt , userId } = product;
                    let count = 1;
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
                              <button
                                onClick={() => count--}
                                className="qty-symbol"
                              >
                                -
                              </button>
                              {qnt}
                              <button
                                onClick={() => inc(id)}
                                className="qty-symbol"
                              >
                                +
                              </button>
                            </div>
                            <button className="remove" onClick={()=>remove(id)}>remove</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            {/* Cart total information */}
            <div className="cart-summary">
              <h5>Cart Total</h5>
              <ul>
                <li>
                  <span>Subtotal:</span>
                  <span>0.00 EGP</span>
                </li>
                <li>
                  <span>Delivery:</span>
                  <span>Free</span>
                </li>
                <li>
                  <span>Total:</span>
                  <span>{totalSum} EGP</span>
                </li>
              </ul>
                {/* Checkout button */}
                <div className="cart-btn mt-100">
                {isCartEmpty ? (
                  <button className="btn amado-btn w-100" disabled>
                    Checkout
                  </button>
                ) : (
                  <Link
                    to={{ pathname: "/checkout", search: `?total=${totalSum}` }}
                    className="btn amado-btn w-100"
                  >
                    Checkout
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;