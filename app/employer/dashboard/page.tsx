"use client";

import DashboardTitle from "./_components/dashboard-title";
import DashboardCards from "./_components/dashboard-cards";
import VisitChart from "./_components/visit-chart";
import Notifications from "@/components/notifications/notifications";
import Container from "../container";

const EmployerDashboard = () => {
  return (
    <div className="bg-graycolor">
      <Container>
        <DashboardTitle />
        <DashboardCards />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <VisitChart />
          <Notifications />
        </div>
      </Container>
    </div>
  );
};

export default EmployerDashboard;
