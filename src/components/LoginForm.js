import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (password.length < 4) {
      setError('La contraseña debe tener al menos 4 caracteres.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth', {
        email: email,
        password: password,
      });

      console.log('Inicio de sesión exitoso:', response.data);
      setSuccessMessage('Inicio de sesión exitoso.');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
      setError('Error al iniciar sesión. Verifica tus datos e intenta nuevamente.');
    }
  };

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      {error && <p className="text-danger">{error}</p>}
      {successMessage && <p className="text-success">{successMessage}</p>}
      <label className="form-label">
        Email:
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label className="form-label">
        Contraseña:
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" className="btn btn-primary">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
