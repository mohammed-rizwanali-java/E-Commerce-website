import React, { useEffect, useState } from 'react';
import apiClient from '../../api/apiClient';
import AddProduct from './AddProduct';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    apiClient.get('/api/admin/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <AddProduct onProductAdded={fetchProducts} />
      {/* List products as shown earlier */}
    </div>
  );
};

export default ProductManagement;