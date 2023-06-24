import React, { useEffect } from 'react';
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
import { useLocation } from "react-router-dom";



const AdminDashboard = () => {

    const { products } = useGlobalContext()
    const [filteredProducts, setfilteredProducts] = useState([])
    const [totalQuantity, setTotalSum] = useState('');
    const [orders, setOrderNumbers] = useState('');
    const [income, setIncome] = useState('');
    const [OrderedProducts, setOrderedProducts] = useState([])
    const token  = JSON.parse(localStorage.getItem("userData")).token

    const Adminproducts = JSON.parse(localStorage.getItem("cartt"));

    const userId  = JSON.parse(localStorage.getItem("userData")).id


    useEffect(() => {
        setfilteredProducts (Adminproducts.filter(product => product.userId == userId));

        const totalQuantity = localStorage.getItem('totalQuantity');
        setTotalSum(totalQuantity);
        const url = "https://galleryinhome.azurewebsites.net/Auth/Token/?token="
        fetch(url+token)
            .then((response) => response.json())
            .then(res => {
                const orderNumbers = res.orders;
                const incomeVal = res.amount;
                const OrderedProduts = res.orderedProducts;
                // Store the order numbers in a state variable
                setOrderNumbers(orderNumbers);
                setIncome(incomeVal);
                setOrderedProducts(OrderedProduts)
            }).catch((err) => {
              console.log(err.message)
            });
    
        
      }, []);

      const performAPICall = (userId, productPrice) => {
        return new Promise((resolve, reject) => {
          // Send the request to the API endpoint
          fetch('https://galleryinhome.azurewebsites.net/Auth/UpdateUserDetails', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId: userId,
              orders: 0,
              amount: productPrice
            })
          })
            .then(response => {
              // Handle the response if needed
              console.log(`Order count updated for userId ${userId}`);
              resolve(); // Resolve the promise
            })
            .catch(error => {
              // Handle any errors that occur during the request
              console.error(`Error updating order count for userId ${userId}: ${error}`);
              reject(error); // Reject the promise
            });
        });
      };
      
      const handleDoneClick = (productId, productPrice) => {
        performAPICall(userId, productPrice)
          .then(() => {
            console.log("done");
            // Delete the product using the API
            fetch(`https://galleryinhome.azurewebsites.net/Auth/DeleteOrderedProduct/${productId}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.success) {
                  // Filter out the product with the given productId
                  const updatedProducts = Adminproducts.filter((product) => product.id !== productId);
      
                  // Update the localStorage with the updated products
                  localStorage.setItem("cart" + token, JSON.stringify(updatedProducts));
                  localStorage.setItem("cartt", JSON.stringify(updatedProducts));
      
                  // Update the state with the filtered products
                  setfilteredProducts(updatedProducts);
                } else {
                  // Handle error response from the API if necessary
                  console.error(data.error);
                }
              })
              .catch((error) => {
                // Handle fetch error if necessary
                console.error(error);
              });
          })
          .catch((error) => {
            // Handle performAPICall error if necessary
            console.error(error);
          });
      };
      
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
                                        <h5 className='mb-0 text-white'>{orders}</h5>
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
                                        <h5 className='mb-0 text-white'>{income} EGP</h5>
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
                    
                 
                    <div className='col'></div>
                </div>
                <div className='row'>
                    <div className='col d-flex'>
                        <Card className='card radius-10 w-100'>
                            <Card.Body className='card-body'>
                                <Card.Subtitle className='d-flex align-items-center'>
                                    <div>
                                        <h6 className='title mb-0'> Ordered Products</h6>
                                    </div>
                                </Card.Subtitle>
                            </Card.Body>
                            <SimpleBar style={{ maxHeight: 500}}>
                            <Card.Body className='best-selling-products p-3 mb-3 ps ps--activity-y'>
                            {OrderedProducts.map(product => {
                                const { productImage, id, productPrice, productTitle ,clientName} = product;
                                return (
                                    <>
                                    <div key ={id} className='d-flex align-items-center'>
                                        <div className='product-img'>
                                            <img src={productImage} alt="logo" className='p-1'/>
                                        </div>
                                        <h4 className=''>{productTitle}</h4>
                                        <h4 className=''>{productPrice} EGP</h4>
                                        <h6 className='mb-0 '>{clientName}</h6>
                                       
                                      <button className="btn btn-primary"
                                        style={{ margin: "0" }} onClick={() => handleDoneClick(id, productPrice)}>
                                          Done
                                        </button>                          
                                    </div>
                                    <hr></hr>
                                </>
                                )
                            })}

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