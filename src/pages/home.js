import React from 'react'
import {Link} from "react-router-dom"
import "./home.css"
// global context
import {useGlobalContext} from "../context"
// images
import pot from "../images/vase.webp"
import chair from "../images/chair.webp"
import table from "../images/table.webp"

function Home() {
  return (
    <>
        {/* product category */}
        <div className="products-catagories-area">
          <div className="products-center">
            <article className="single-product">
              <Link to="/">
                <img src={chair} alt="chair" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>modern chair</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={pot} alt="vase" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>plant pot</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
            <Link to="/">
                <img src={table} alt="table" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>small table</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={pot} alt="vase" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>plant pot</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={chair} alt="chair" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>modern chair</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={pot} alt="vase" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>plant pot</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={table} alt="table" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>small table</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={pot} alt="pot" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>plant pot</h4>
                </div>
              </Link>
            </article>
            <article className="single-product">
              <Link to="/">
                <img src={table} alt="table" />
                <div className="product-content">
                  <p>from $13</p>
                  <h4>small table</h4>
                </div>
              </Link>
            </article>
          </div>
        </div>  
      {/* footer section */}
    </>
    )
}

export default Home