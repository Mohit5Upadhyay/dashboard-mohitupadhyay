import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales Growth",
        data: [120, 200, 150, 220, 300, 250, 400],
        borderColor: "#34D399", // Accent green
        backgroundColor: "rgba(52, 211, 153, 0.2)", // Light green fill
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#34D399",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
        },
      },
    },
  };

  return (
    <div className="bg-card p-6 rounded shadow">
      <h3 className="text-lg font-bold mb-4">Sales Growth</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
