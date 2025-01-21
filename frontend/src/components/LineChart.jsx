import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

// Register components and plugins
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, zoomPlugin);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.Day),
    datasets: [
      {
        label: 'Feature A Trend',
        data: data.map((item) => parseInt(item.A)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      zoom: {
        pan: { enabled: true, mode: 'x' },
        zoom: { enabled: true, mode: 'x', pinch: true, wheel: true },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
