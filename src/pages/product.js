import './product.css';
import React, { Component } from 'react';
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import {Link,useParams} from "react-router-dom";
import Modal from './Modal3d.js';
import { OBJModel, DirectionLight } from "react-3d-viewer";
import { BsStarFill} from "react-icons/bs";




class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      data:null,
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
  componentDidMount() {
    function getId() {
      try {
        var url_string = (window.location.href);
        var url = new URL(url_string);
        var name = url.pathname.split("").slice(-1).join("");
        return +name
      } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
      }
    }
    var id = getId();
    console.log(id)
    const url = ""
    fetch(url+id)
        .then((response) => response.json())
        .then(res => {
          this.setState({ data: res })
        }).catch(() => {
          this.setState({data:{  id:1,
        price:'180',
        imgs: [
              'images/product/1.webp',
              'images/products/2.webp',
              'images/products/3.webp',
            ],
        name: "Queen Tall Chest Bedroom",
        desc: "a fine comfort caught for ypur back pains",
        model:"images/LEATHERSOFA-2019-obj.obj",
        rating:3}})
        });
  }
  render() {
    let ARurl = "http://127.0.0.1:5500/index.html";
    console.log(this.state.data)
    let elem = this.state.data
    if (!this.state.data) {
      return (
        <h3 style={{width:"auto",margin:"30px auto",textTransform:"capitalize" }}>product Data doesn't exist </h3>

      )
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
              <div className='col-lg-5'>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">  
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={elem.imgs[0]} class="d-block w-100" alt="img"></img>
                    </div>
                    <div class="carousel-item">
                      <img src={elem.imgs[1]} class="d-block w-100" alt="img"></img>
                    </div>
                    <div class="carousel-item">
                      <img src={elem.imgs[2]} class="d-block w-100" alt="img"></img>
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
                  <h2 className='price'>{elem.price} EGP</h2>
                  <h2>{elem.name}</h2>
                  <div className='rating'>
                    <div className='ratings'>
                      {[...Array(elem.rating)].map((star,i)=>{
                        return <BsStarFill key={i} color="var(--clr-primary-1)"/>
                      })}       
                    </div>
                  </div>
                  <p className='avaibility'><span className='circle'><FaCircle/></span>In Stock</p>
                </div>
                <div className='shortOverview'>
                  <p>{elem.desc}.</p>
                </div>
                <div className='cartClearfix'>
                  <button className='cart-link'>Add to cart</button>
                </div>
                <div className='arBtnGroup'>
                  {/* <button className='arBtn' onClick={() => window.location.href = ARurl + `?id=${objId}`}>Show AR</button> */}
                  <a href={ARurl + `?id=${elem.id}`}  className='arBtn' target="_blank" rel="noopener noreferrer">Show AR</a>
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
                          src={elem.model}

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
          </div >
      </div>
    </div>
    

    );
};
}
export default Dashboard;