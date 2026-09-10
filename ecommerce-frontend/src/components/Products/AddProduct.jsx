import React, { useState } from 'react';
import apiClient from '../../api/apiClient';

const AddProduct = ({ onProductAdded }) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    apiClient.post('/api/admin/products', productData)
      .then(() => {
        alert('Product added successfully');
        onProductAdded(); // refresh product list
        setProductData({ name: '', description: '', price: '', quantity: '', imageUrl: '' });
      })
      .catch(() => alert('Failed to add product'));
  };

  return (
    <div>
      <h3>Add New Product</h3>
      
      {/* Inputs */}
      <input
        name="name"
        placeholder="Name"
        value={productData.name}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={productData.description}
        onChange={handleChange}
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        value={productData.price}
        onChange={handleChange}
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={productData.quantity}
        onChange={handleChange}
      />
      <input
        name="imageUrl"
        placeholder="Image URL"
        value={productData.imageUrl}
        onChange={handleChange}
      />

      {/* Image Preview */}
      {productData.imageUrl && (
        <div style={{ marginTop: '10px' }}>
          <img
            src={productData.imageUrl}
            alt="Product Preview"
            style={{ maxWidth: '200px', height: 'auto' }}
            onError={(e) => { e.target.onerror = null; e.target.src=''; }} // fallback if URL is invalid
          />
        </div>
      )}

      {/* Submit Button */}
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default AddProduct;