import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/auth/register", formData);
      alert("Registration successful! You can now log in.");
      window.location.href = "/login";
    } catch (error) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="p-6 bg-white rounded shadow-md w-96" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="w-full py-2 mt-6 text-white bg-blue-500 rounded">
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
