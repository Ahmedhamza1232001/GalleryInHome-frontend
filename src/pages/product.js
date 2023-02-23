import './product.css';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from "react-responsive-carousel";
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import {Link} from "react-router-dom";
import {useState} from 'react';

const App = () => {
  const[count,setCount]=useState(1);
  const inc=()=>{
      setCount(count+1);
    }
    const dec=()=>{
      if(count>1)
      setCount(count-1);
    }
  return (
    <div className='single-product-area py-100'>   
      <div className="container-fluid">
        <div className='row'>
          <div className="col-12">
          <ol className='label'>
            <li className='productPath'>
              <Link to="/">Home</Link>
            </li>
            <li className='productPath'>
              <Link to="">Furniture</Link>
            </li>
            <li className='productPath'>
              <Link to="">Chairs</Link>
            </li>
            <li className='productPathSelected'>
              <p>Maroon modern chair</p>
            </li>
          </ol>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-xl-7'>
            <div className='pictureOfProduct'>
              <img src="../images/LEATHERSOFA.jpg" alt="chair"/>
            </div>
            <div className='show3dButton'>
              <Link to="/ThreeDModel" className='threedLink'>Show 3D</Link>
            </div>
          </div>  
          <div className='col-12 col-xl-5'>
              <div className='detailsOfproduct'>
                <div>
                  <h2 className='price'>$180</h2>
                  <h2>Maroon Modern Chair</h2>
                  <div className='rating'>
                    <div className='ratings'>
                        <div className='star'><FaStar/>&ensp;<FaStar/>&ensp;
                        <FaStar/>&ensp;<FaStar/>&ensp;<FaStar/></div>
                    </div>
                    <div className='review'>
                        <a href='' >Write A Review</a>
                    </div>
                  </div>
                  <p className='avaibility'><span className='circle'><FaCircle/></span>In Stock</p>
                </div>
              </div>
              <div className='shortOverview'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='cartClearfix'>
                <div className='cartbtn'>
                    <p>Qty</p>
                    <div className="quantity">
                        <button onClick={dec} className="qty-symbol" >-</button>
                        {count}
                        <button onClick={inc} className="qty-symbol">+</button>
                    </div>  
                </div>
                <Link to="/cart" className='cart-link'>Add to cart</Link>
              </div>
          </div>              
        </div>
      </div>
     </div>
  

  );
};

export default App;


