import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { useGlobalContext } from '../context';

function Home() {
const {products , loading} = useGlobalContext()
  if (loading) {
    return <h3 style={{ width: 'auto', margin: '30px auto' }}>Loading...</h3>;
  }

  if (products.length === 0) {
    return <h3 style={{ width: 'auto', margin: '30px auto' }}>NO DATA EXIST</h3>;
  }

  return (
    <>
      <div className="products-catagories-area">
        <div className="products-center">
          {products.map((product) => (
            <article className="single-product" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.images[0].name} alt={product.name} />
                <div className="product-content">
                  <p>{product.price} EGP</p>
                  <h4>{product.name}</h4>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
