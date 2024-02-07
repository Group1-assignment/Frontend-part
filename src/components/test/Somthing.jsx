import React, { useState } from 'react';
import axios from 'axios';
 
const Somthing = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      // Replace 'API_ENDPOINT' with the actual endpoint for user registration
      const response = await axios.post('api/User/add', formData);
 
      console.log('User registered successfully:', response.data);
 
      // Reset the form after successful registration
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };
 
  return (
    <div>
      <header>
        <h1>If you are not registered , Register Here</h1>
      </header>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
 
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
 
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
 
      <button type="submit">Register</button>
      <br />
      <p>Complete the registration process </p>
    </form>
    </div>
  );
};
 
export default Somthing;
 