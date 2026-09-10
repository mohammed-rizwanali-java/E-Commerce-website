import React, { useEffect, useState } from 'react';
import apiClient from '../../api/apiClient';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiClient.get('/api/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const styles = {
    page: {
      padding: '40px 60px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
    },
    title: {
      textAlign: 'center',
      marginBottom: '40px',
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1f2937',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    card: {
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      backgroundColor: '#ffffff',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardBody: {
      padding: '15px',
      textAlign: 'center',
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Our Products</h2>

      <div style={styles.grid}>
        {products.map(product => (
          <div
            key={product.id}
            style={styles.card}
            className="product-card"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={styles.image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Available';
              }}
            />

            <div style={styles.cardBody}>
              <h5>{product.name}</h5>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>
                {product.description}
              </p>
              <h6 style={{ color: '#2563eb', marginBottom: '15px' }}>
                ${product.price}
              </h6>

              <Link
                to={`/products/${product.id}`}
                className="btn btn-primary w-100"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Animation Style */}
      <style>
        {`
          .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          }

          .product-card img {
            transition: transform 0.4s ease;
          }

          .product-card:hover img {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default ProductList;