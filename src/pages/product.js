import './product.css';
import React, { Component } from 'react';
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import {Link} from "react-router-dom";
import Modal from './Modal3d.js';
import { OBJModel, DirectionLight } from "react-3d-viewer";



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
            <div className='col-lg-5'>
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../images/popular3.png.webp" class="d-block w-100" alt="img"></img>
                  </div>
                  <div class="carousel-item">
                    <img src="../images/popular2.png.webp" class="d-block w-100" alt="img"></img>
                  </div>
                  <div class="carousel-item">
                    <img src="../images/popular8.png.webp" class="d-block w-100" alt="img"></img>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>  
            <div className='col-lg-5'>
                <div className='detailsOfproduct'>
                  <div>
                    <h2 className='price'>180 EGP</h2>
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
                  <Link to="/cart" className='cart-link'>Add to cart</Link>
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
          </div>
        </div>
      </div>
    

    );
};
}
export default Dashboard;