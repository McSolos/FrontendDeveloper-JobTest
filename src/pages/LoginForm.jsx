 import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'

const mockUser = {
  email: "user@example.com",
  password: "password123"
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const validateForm = () => {
    let errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      if (!email.includes("@")) {
        errors.email = "Email must contain '@' symbol";
      } else if (!email.includes(".")) {
        errors.email = "Email must contain a domain (e.g., .com, .org)";
      } else {
        errors.email = "Email format is incorrect";
      }
    }
    
    if (!password) {
      errors.password = "Password is required";
    } else if (!validatePassword(password)) {
      errors.password = "Password must be at least 8 characters long and include both letters and numbers";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    if (validateForm()) {
      if (email === mockUser.email && password === mockUser.password) {
        alert("Login successful!");
        navigate("/transactions");
      } else {
        setLoginError("Invalid email or password");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Online Banking Login</h2>
      <p>Use: user@example.com / password123</p>
      {loginError && <p className="error-message">{loginError}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm
