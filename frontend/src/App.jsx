import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const isAuthenticated = localStorage.getItem('token') ? true : false;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <DashboardPage /> : <LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/api/data"
          element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
