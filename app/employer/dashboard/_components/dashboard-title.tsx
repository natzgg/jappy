import InfoCard from "@/components/info-card";
import MenuToggle from "./menu-toggle";

const DashboardTitle = () => {
  return (
    <div className="flex p-14 justify-center items-center flex-col gap-5">
      <div className="flex items-center justify-center flex-col space-y-2">
        <h1 className="font-semibold text-2xl">Dashboard</h1>
        <h2 className="text-sm text-muted-foreground">
          Ready to jump back in?
        </h2>
      </div>
      <MenuToggle />
    </div>
  );
};

export default DashboardTitle;
