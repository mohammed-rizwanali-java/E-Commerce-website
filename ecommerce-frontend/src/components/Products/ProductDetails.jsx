import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { AuthContext } from '../../contexts/AuthContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    apiClient.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => alert('Product not found'));
  }, [id]);

  const addToCart = () => {
    if (!auth.token) {
      alert('Please login to add items to cart.');
      return;
    }

    apiClient.post('/api/cart/add', {
      productId: product.id,
      quantity: quantity,
    })
      .then(() => alert('Added to cart!'))
      .catch(() => alert('Failed to add to cart.'));
  };

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      background: '#ffffff',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      maxWidth: '1000px',
      width: '100%',
      animation: 'fadeIn 0.6s ease-in-out',
    },
    image: {
      width: '400px',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '10px',
      transition: 'transform 0.4s ease',
    },
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    price: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#2563eb',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card} className="product-details-card">

        <img
          src={product.imageUrl}
          alt={product.name}
          style={styles.image}
          className="product-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400?text=No+Image';
          }}
        />

        <div style={styles.content}>
          <h2 className="mb-3">{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <div style={styles.price}>${product.price}</div>

          <div className="mb-4">
            <label className="fw-bold mb-2 d-block">Quantity:</label>

            <div className="quantity-wrapper">
              <button
                className="qty-btn"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                −
              </button>

              <span className="qty-value">{quantity}</span>

              <button
                className="qty-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="add-cart-btn"
            onClick={addToCart}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .product-details-card:hover {
            box-shadow: 0 20px 45px rgba(0,0,0,0.15);
          }

          .product-image:hover {
            transform: scale(1.05);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
            .quantity-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top:15px;
}

.qty-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.qty-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
}

.qty-value {
  font-size: 18px;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
}

.add-cart-btn {
  padding: 12px 25px;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  background: linear-gradient(45deg, #16a34a, #22c55e);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 220px;
}

.add-cart-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 10px 25px rgba(34, 197, 94, 0.4);
}
        `}
      </style>
    </div>
  );
};

export default ProductDetails;