import React from "react";

const FilterBar = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <div>
        <label className="mr-2 font-medium">Age:</label>
        <select
          name="age"
          value={filters.age}
          onChange={handleInputChange}
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value="15-25">15-25</option>
          <option value=">25">25</option>
        </select>
      </div>
      <div>
        <label className="mr-2 font-medium">Gender:</label>
        <select
          name="gender"
          value={filters.gender}
          onChange={handleInputChange}
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label className="mr-2 font-medium">Start Date:</label>
        <input
          type="date"
          name="start_date"
          value={filters.start_date}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
      </div>
      <div>
        <label className="mr-2 font-medium">End Date:</label>
        <input
          type="date"
          name="end_date"
          value={filters.end_date}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default FilterBar;
