import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../utils/api"; // Custom Axios instance
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import Logout from "../components/Logout";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedCategoryData, setSelectedCategoryData] = useState(null); // State for LineChart data
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    age: searchParams.get("age") || "",
    gender: searchParams.get("gender") || "",
    start_date: searchParams.get("start_date") || "",
    end_date: searchParams.get("end_date") || "",
  });

  // Fetch data based on query parameters
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/data", { params: filters });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data!");
      }
    };

    fetchData();
  }, [filters]);

  // Update filters and URL when the "Apply" button is clicked
  const applyFilters = () => {
    navigate(`/api/data?${new URLSearchParams(filters).toString()}`, { replace: true });
  };

  // Handle bar click to set data for the line chart
  const handleBarClick = (category) => {
    const filteredData = data.filter((item) => item.Category === category.Category);
    setSelectedCategoryData(filteredData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 bg-blue-500 text-white flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Good afternoon, {localStorage.getItem("user_name") || "User"}</h1>
        <Logout />
      </div>
      <div className="p-8 bg-white shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-4">
          <select
            value={filters.age}
            onChange={(e) => setFilters({ ...filters, age: e.target.value })}
            className="border border-gray-300 rounded p-2"
          >
            <option value="">Select Age</option>
            <option value="15-25">15-25</option>
            <option value=">25">&gt;25</option>
          </select>
          <select
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
            className="border border-gray-300 rounded p-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            value={filters.start_date}
            onChange={(e) => setFilters({ ...filters, start_date: e.target.value })}
            className="border border-gray-300 rounded p-2"
          />
          <input
            type="date"
            value={filters.end_date}
            onChange={(e) => setFilters({ ...filters, end_date: e.target.value })}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Apply
        </button>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.length > 0 ? (
          <>
            {/* Bar Chart with Click Handler */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-2 text-center">Bar Chart</h2>
              <BarChart data={data} onBarClick={handleBarClick} />
            </div>
            
            {/* Line Chart (conditionally rendered) */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-2 text-center">Line Chart</h2>
              {selectedCategoryData ? (
                <LineChart data={selectedCategoryData} />
              ) : (
                <p className="text-center">Click on a bar to view trend data.</p>
              )}
            </div>
          </>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
