"use client";

import DashboardTitle from "./_components/dashboard-title";
import DashboardCards from "./_components/dashboard-cards";
import VisitChart from "./_components/visit-chart";

const EmployerDashboard = () => {
  return (
    <div className="bg-graycolor">
      <DashboardTitle />
      <DashboardCards />
      <VisitChart />
    </div>
  );
};

export default EmployerDashboard;
