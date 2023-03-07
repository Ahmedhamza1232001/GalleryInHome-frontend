import './product.css';
import React, { Component } from 'react';
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import {Link} from "react-router-dom";
import Modal from './Modal3d.js';
import { OBJModel, DirectionLight } from "react-3d-viewer";
// import count from './productConst.js';
// import inc from './productConst.js';
// import dec from './productConst.js';
  
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
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
                <img src="../images/img7.jpg" alt="chair"/>
              </div>
              <div className='show3dButton'>         
                <button className='threedLink' type='button' onClick={this.showModal}>Show 3D</button>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <div className="App">
                    <div style={{ margin: "auto" }}>
                      <OBJModel
                        width="1400"
                        height="600"
                        position={{ x: 0, y: -40, z: 0 }}
                        rotation={{ x:.2 , y:0 , z:0 }}
                        enableKeys={false}
                        enableZoom={true}
                        src="../images/LEATHERSOFA-2019-obj.obj"

                        onLoad={() => {
                          console.log("Loading");
                        }}
                        onProgress={(xhr) => {
                          console.log("Loaded");
                        }}
                      >
                        <DirectionLight           
                          className="canv_1"
                          color={0x800000} />
                        <DirectionLight
                          className="canv_1"
                          position={{ x: 180, y: 100, z: 100 }}
                          color={0x800000}
                        />
                      </OBJModel>
                    </div>
                  </div>
                </Modal>
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
                  {/* <div className='cartbtn'>
                      <p>Qty</p>
                      <div className="quantity">
                          <button onClick={dec} className="qty-symbol" >-</button>
                          {count}
                          <button onClick={inc} className="qty-symbol">+</button>
                      </div>  
                  </div> */}
                  <Link to="/cart" className='cart-link'>Add to cart</Link>
                </div>
            </div>              
          </div>
        </div>
      </div>
    

    );
};
}
export default Dashboard;