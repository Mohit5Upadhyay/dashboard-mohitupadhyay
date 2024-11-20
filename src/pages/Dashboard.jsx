
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Chart from "../components/Chart";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Dashboard Area */}
        <div className="p-6 space-y-6">
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Total Sales" value="$34,343.00" growth={15} />
            <Card title="Revenue Updates" value="$4,500.00" growth={-5} />
            <Card title="Yearly Sales" value="$2,800.00" growth={8} />
            <Card title="Active Users" value="23,214" growth={3} />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart */}
            <Chart />

            {/* Revenue Analysis Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold mb-4 text-gray-700">
                Revenue Analysis
              </h3>
              <p className="text-gray-500">
                Placeholder for future charts or data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
