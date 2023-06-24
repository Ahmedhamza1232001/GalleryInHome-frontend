import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './category.css';
import { Row, Col, Card } from 'react-bootstrap';
import { FaThLarge, FaBars } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { SidebarData } from './sidebarData';
import { useGlobalContext } from '../context';
import CardData from './cardData';

const Category = () => {
  const [DisRow, setDisRow] = useState(false);
  const { addToCart, loading ,addToFav} = useGlobalContext();
  const [products, setProducts] = useState(CardData)
  const [categories, setCategories] = useState(["all", ...new Set(products.map(item => item.catagory))])
  const [brands, setBrands] = useState(["all", ...new Set(products.map(item => item.brand))])
  const filterBrand = (brand) => {
    if (brand === "all") {
      setProducts(CardData)
      return
    } 
    const newItem = CardData.filter(item => item.brand === brand);
    setProducts(newItem);
  }
  const filterCat = (cat) => {
    if (cat=== "all") {
      setProducts(CardData)
      return
    } 
    const newItem = CardData.filter(item => item.catagory === cat);
    console.log(newItem);
    setProducts(newItem);
  }
  if (loading) {
    return <h3 style={{ width: 'auto', margin: '30px auto' }}>Loading...</h3>;
  }
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
                {categories.map((val,i) => {
                  return (
                    <li key={i} className="row justify-content-center">
                      <button className='catBtn' onClick={()=>filterCat(val)}>{val}</button>
                    </li>
                  );
                })}
              </ul>
              <div>
                <h1 className="title">Brands</h1>
                <ul className="sidebarList">
                  {brands.map((val, i) => {
                    return (
                    <li key={i} className="row justify-content-center">
                      <button className='catBtn' onClick={()=>filterBrand(val)}>{val}</button>
                    </li>
                    )
                  })}
                </ul>
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
                                onClick={(e) => addToCart(e,id)}
                              ></i>
                              <i
                                className="far fa-heart"
                                aria-hidden="true"
                                style={{ fontSize: '25px', color: 'red' }}
                                onClick={(e) => {
                                  addToFav(e,id)
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
