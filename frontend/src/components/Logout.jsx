import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api"; // Custom Axios instance

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send logout request to backend
      await api.post("/auth/logout");

      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user_name");

      // Navigate to login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-white"
    >
      Logout
    </button>
  );
};

export default Logout;
