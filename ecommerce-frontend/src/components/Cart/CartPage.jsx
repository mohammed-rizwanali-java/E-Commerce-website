import React, { useEffect, useState } from 'react';
import apiClient from '../../api/apiClient';

const CartPage = () => {
  const [cart, setCart] = useState({ items: [] });

  useEffect(() => {
    apiClient.get('/api/cart/getall')
      .then(res => setCart(res.data))
      .catch(() => alert('Failed to load cart'));
  }, []);

  const removeItem = (productId) => {
    apiClient.delete(`/api/cart/remove/${productId}`)
      .then(res => setCart(res.data))
      .catch(() => alert('Failed to remove item'));
  };

  const calculateTotal = () => {
    return cart.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cart.items && cart.items.length > 0 ? (
        <>
          <div className="cart-container">
            {cart.items.map(item => (
              <div key={item.id} className="cart-card">

                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="cart-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/200?text=No+Image';
                  }}
                />

                <div className="cart-details">
                  <h4>{item.product.name}</h4>
                  <p className="price">
                    ${item.product.price} × {item.quantity}
                  </p>
                  <p className="subtotal">
                    Subtotal: ${item.product.price * item.quantity}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.product.id)}
                  >
                    ❌ Remove
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="empty-cart">Cart is empty 😔</p>
      )}

      {/* Styles */}
      <style>
        {`
          .cart-page {
            min-height: 100vh;
            background: #f8fafc;
            padding: 50px;
          }

          .cart-title {
            text-align: center;
            margin-bottom: 40px;
            font-size: 32px;
            font-weight: bold;
            color: #1f2937;
          }

          .cart-container {
            display: flex;
            flex-direction: column;
            gap: 25px;
            max-width: 900px;
            margin: auto;
          }

          .cart-card {
            display: flex;
            gap: 25px;
            background: #ffffff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            align-items: center;
          }

          .cart-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          }

          .cart-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
            transition: transform 0.3s ease;
          }

          .cart-card:hover .cart-image {
            transform: scale(1.05);
          }

          .cart-details {
            flex: 1;
          }

          .price {
            font-weight: bold;
            color: #2563eb;
          }

          .subtotal {
            margin: 8px 0 15px;
            font-size: 14px;
            color: #6b7280;
          }

          .remove-btn {
            padding: 8px 18px;
            border-radius: 20px;
            border: none;
            background: linear-gradient(45deg, #ef4444, #f87171);
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .remove-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
          }

          .cart-summary {
            max-width: 900px;
            margin: 40px auto 0;
            text-align: right;
          }

          .checkout-btn {
            margin-top: 15px;
            padding: 12px 30px;
            border-radius: 30px;
            border: none;
            background: linear-gradient(45deg, #16a34a, #22c55e);
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .checkout-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(34, 197, 94, 0.4);
          }

          .empty-cart {
            text-align: center;
            font-size: 18px;
            color: #6b7280;
          }
        `}
      </style>
    </div>
  );
};

export default CartPage;