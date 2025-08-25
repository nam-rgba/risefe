import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
      <div className="flex flex-row w-full ">
        <div className="relative flex-1 h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
  );
};

export default DashboardLayout;
