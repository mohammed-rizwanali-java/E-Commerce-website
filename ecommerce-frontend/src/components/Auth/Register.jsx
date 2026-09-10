import React, { useState } from 'react';
import apiClient from '../../api/apiClient';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hover, setHover] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/api/auth/register', { name, email, password });
      alert('Registration successful');
    } catch {
      alert('Registration failed');
    }
  };

  const styles = {
    page: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
      fontFamily: 'Cambria, serif'
    },
    form: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      padding: '40px',
      borderRadius: '15px',
      width: '350px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
      display: 'flex',
      flexDirection: 'column',
      animation: 'fadeIn 0.8s ease-in-out',
    },
    title: {
      textAlign: 'center',
      marginBottom: '25px',
      color: '#fff',
      fontSize: '26px',
      fontWeight: 'bold',
    },
    input: {
      padding: '12px 15px',
      marginBottom: '18px',
      borderRadius: '8px',
      border: 'none',
      outline: 'none',
      fontSize: '15px',
      transition: 'all 0.3s ease',
    },
    button: {
      padding: '12px',
      borderRadius: '8px',
      border: 'none',
      background: hover
        ? 'linear-gradient(45deg, #3b82f6, #60a5fa)'
        : 'linear-gradient(45deg, #2563eb, #3b82f6)',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      boxShadow: hover
        ? '0 10px 20px rgba(0,0,0,0.3)'
        : '0 5px 10px rgba(0,0,0,0.2)',
    },
  };

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          onFocus={(e) => (e.target.style.boxShadow = '0 0 8px #60a5fa')}
          onBlur={(e) => (e.target.style.boxShadow = 'none')}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          onFocus={(e) => (e.target.style.boxShadow = '0 0 8px #60a5fa')}
          onBlur={(e) => (e.target.style.boxShadow = 'none')}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          onFocus={(e) => (e.target.style.boxShadow = '0 0 8px #60a5fa')}
          onBlur={(e) => (e.target.style.boxShadow = 'none')}
          required
        />

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Register
        </button>
      </form>

      <style>
        {`
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
        `}
      </style>
    </div>
  );
};

export default Register;