import React, { useEffect, useState } from 'react';
import apiClient from '../../api/apiClient';
import CartItem from './CartItem';

const CartPage = () => {
  const [cart, setCart] = useState({ items: [] });

  const fetchCart = () => {
    apiClient.get('/api/cart/getall')
      .then(res => setCart(res.data))
      .catch(() => alert('Failed to load cart'));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = (productId) => {
    apiClient.delete(`/api/cart/remove/${productId}`)
      .then(() => fetchCart())
      .catch(() => alert('Failed to remove item'));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items && cart.items.length > 0 ? (
        cart.items.map(item => (
          <CartItem key={item.id} item={item} onRemove={handleRemove} />
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;