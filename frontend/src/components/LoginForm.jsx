import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("Nandha@example.com");
  const [password, setPassword] = useState("password123");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });

      // Save the token and user_name to localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_name", response.data.user_name);

      // Redirect to the dashboard
      navigate("/api/data?age=>25&gender=Female&start_date=2022-10-05&end_date=2022-10-23");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        className="p-6 bg-white rounded shadow-md w-96" 
        onSubmit={handleLogin}
        autoComplete="on" // Added autocomplete for the form
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <div className="mt-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email" // Added autocomplete for email field
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password" // Added autocomplete for password field
          />
        </div>
        <button className="w-full py-2 mt-6 text-white bg-blue-500 rounded">Login</button>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
