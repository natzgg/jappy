import InfoCard from "@/components/info-card";
import DashboardTitle from "./_components/dashboard-title";
import { BriefcaseBusiness } from "lucide-react";
import PostedJobs from "./_cards/posted-jobs";
import DashboardCards from "./_components/dashboard-cards";

const EmployerDashboard = () => {
  return (
    <div className="bg-graycolor">
      <DashboardTitle />
      <DashboardCards />
    </div>
  );
};

export default EmployerDashboard;
