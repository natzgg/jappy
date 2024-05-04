import Navbar from "@/components/navbar";
import SidebarEmployer, { SidebarEmployerSkeleton } from "./dashboard/_sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <SidebarEmployer />
      <div className="mt-20">{children}</div>
    </>
  );
};

export default DashboardLayout;
