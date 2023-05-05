import React from 'react'
import {Link} from "react-router-dom"
import "./home.css"
// global context
import {useGlobalContext} from "../context"

function Home() {
  const { products } = useGlobalContext()
  var data = products&&products.slice(0,9)


  if(!products)return(
    <h3 style={{width:"auto",margin:"30px auto" }}>NO DATA EXIST </h3>
  )
  return (
    <>
        {/* product category */}
        <div className="products-catagories-area">
          <div className="products-center">
            {data?.map(product=>  
              <article className="single-product" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.images[0]} alt={product.name} />
                  <div className="product-content">
                    <p>from{product.price} EGP</p>
                    <h4>{product.name}</h4>
                  </div>
                </Link>
              </article>
              )}
          </div>
        </div>  
    </>
    )
}

export default Home