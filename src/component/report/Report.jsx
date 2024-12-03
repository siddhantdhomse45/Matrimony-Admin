import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import './report.css'
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Report = () => {
  // Data for charts

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Match Success Rate (%)",
        data: [40, 50, 60, 55, 70, 65],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "New User Registrations",
        data: [30, 50, 80, 70],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.2,
      },
    ],
  };

  const pieChartData = {
    labels: ["Basic", "Premium", "Gold"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="accounts1">
    <Sidebar />
    <div className="accountsContainer1">
      <Navbar />
    <div className="reports">
      <h2>Report</h2>
      <div className="chart-container">
        {/* Bar Chart */}
        <div className="chart">
          <h3>Match Success Rate</h3>
          <Bar data={barChartData} />
        </div>

        {/* Line Chart */}
        <div className="chart">
          <h3>New User Registrations</h3>
          <Line data={lineChartData} />
        </div>

        {/* Pie Chart */}
        <div className="chart1">
          <h3>Subscription Type Distribution</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Report;
