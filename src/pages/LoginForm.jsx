import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const mockUser = {
  email: "user@example.com",
  password: "password123"
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const validateForm = () => {
    let valid = true;
    if (!email) {
      toast.error("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      if (!email.includes("@")) {
        toast.error("Email must contain '@' symbol");
      } else if (!email.includes(".")) {
        toast.error("Email must contain a domain (e.g., .com, .org)");
      } else {
        toast.error("Email format is incorrect");
      }
      valid = false;
    }
    
    if (!password) {
      toast.error("Password is required");
      valid = false;
    } else if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters long and include both letters and numbers");
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (email === mockUser.email && password === mockUser.password) {
        toast.success("Login successful!");
        navigate("/transactions");
      } else {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Online Banking Login</h2>
      <p>Use: user@example.com / password123</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default LoginForm;