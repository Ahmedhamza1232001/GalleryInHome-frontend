import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://galleryinhome.azurewebsites.net/api/Client/GetAll');
        const data = await response.json();
        if (data.success) {
          setProducts(data.data);
        } else {
          console.log('API request failed');
        }
      } catch (error) {
        console.log('Error fetching data from the API', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
