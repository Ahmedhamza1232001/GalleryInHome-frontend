import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './category.css';
import { Row, Col } from 'react-bootstrap';
import { FaThLarge, FaBars } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { SidebarData } from './sidebarData';
import { useGlobalContext } from '../context';

const Category = () => {
  const [DisRow, setDisRow] = useState(false);
  const { cartIcon } = useGlobalContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://galleryinhome.azurewebsites.net/api/Client/GetAll');
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (products.length === 0) {
    return <h3 style={{ width: 'auto', margin: '30px auto' }}>NO DATA EXIST</h3>;
  }

  return (
    <>
      <div className="category-main">
        <div className="d-flex flex-wrap">
          {/* sidebar */}
          <div className="sidebar">
            <Col className="catagories">
              <h1 className="title">Catagories</h1>
              <ul className="sidebarList">
                {SidebarData.map((val, key) => {
                  return (
                    <li
                      key={key}
                      className={`row ${window.location.pathname === val.link ? 'active' : ''}`}
                      onClick={() => {
                        window.location.pathname = val.link;
                      }}
                    >
                      <div>{val.title}</div>
                    </li>
                  );
                })}
              </ul>
              <div>
                <h1 className="title">Brands</h1>
                <Form className="brand">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check className="check" type={type} id={`default-${type}`} label={`Amado`} />
                      <Form.Check className="check" type={type} label={`Ikea`} id={`default-${type}`} />
                      <Form.Check className="check" type={type} label={`The Factory`} id={`default-${type}`} />
                      <Form.Check className="check" type={type} label={`Artdeco`} id={`default-${type}`} />
                      <Form.Check className="check" type={type} label={`Furniture Inc`} id={`default-${type}`} />
                    </div>
                  ))}
                </Form>
              </div>
            </Col>
          </div>

          {/* cards */}
          <div className="product-area py-100">
            <div className="container-fluid">
              <Row>
                <div className="col-12">
                  <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                    <div className="total-products">
                      <div className="view d-flex">
                        <FaThLarge
                          size="30px"
                          color={`${DisRow ? 'black' : '#ffc107'}`}
                          onClick={() => setDisRow(false)}
                        />
                        <FaBars
                          size="30px"
                          color={`${DisRow ? '#ffc107' : 'black'}`}
                          onClick={() => setDisRow(true)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Row>

              {/* cards */}
              <Row>
                {products.map((item) => {
                  const {
                    id,
                    price,
                    images,
                    description,
                    rating,
                    name,
                    factory,
                    materials,
                    inStock,
                  } = item;
                  return (
                    <div
                      className={`col-12 col-sm-6 col-md-12 ${
                        DisRow ? 'col-xl-12 col-sm-12' : 'col-xl-6'
                      }`}
                      key={id}
                    >
                      <div className="card">
                        <Link to={`/product/${id}`}>
                          <img src={images[0].name} className="card-img-top" alt={id} />
                        </Link>
                        <div className="card-body d-flex">
                          <div>
                            <h4 className="card-price">{price} EGP</h4>
                            <p className="card-description">{name}</p>
                          </div>
                          <div className="icon">
                            <div className="stars">
                              {[...Array(rating)].map((star, i) => {
                                return <BsStarFill key={i} color="var(--clr-primary-1)" />;
                              })}
                            </div>
                            <div
                              className="d-flex"
                              style={{ justifyContent: 'center', marginTop: '8px', gap: '5px' }}
                            >
                              <i
                                className="fa fa-cart-plus"
                                aria-hidden="true"
                                style={{ fontSize: '23px', color: 'gray', paddingRight: '5px' }}
                                onClick={(e) => cartIcon(e)}
                              ></i>
                              <i
                                className="far fa-heart"
                                aria-hidden="true"
                                style={{ fontSize: '25px', color: 'red' }}
                                onClick={(e) => {
                                  e.target.classList.toggle('fa');
                                }}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Row>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">
                  1.
                </button>
                <button type="button" class="btn btn-primary">
                  2.
                </button>
                <button type="button" class="btn btn-primary">
                  3.
                </button>
                <button type="button" class="btn btn-primary">
                  4.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
