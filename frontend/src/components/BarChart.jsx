import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data, onBarClick }) => {
  const chartData = {
    labels: data.map((item) => item.Day),
    datasets: [
      {
        label: 'Feature A',
        data: data.map((item) => parseInt(item.A)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index; // Get the index of the clicked bar
        const selectedCategory = data[index];
        onBarClick(selectedCategory); // Pass the clicked category to the parent component
      }
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
