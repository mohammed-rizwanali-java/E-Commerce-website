import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Navbar from './components/Common/Navbar';

import Home from './components/Products/ProductList';
import ProductDetails from './components/Products/ProductDetails';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import CartPage from './components/Cart/CartPage';

import AdminDashboard from './components/Admin/UserManagement';
import AddProduct from './components/Products/AddProduct'; // Updated import path

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Add route for AddProduct */}
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;