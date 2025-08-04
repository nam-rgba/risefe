import { Outlet } from "react-router";
import { Side } from "../../components/Side";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
const DashboardLayout = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex flex-row w-full ">
        <Side />
        <div className="relative flex-1 h-screen overflow-y-auto">
          <SidebarTrigger className="absolute top-2 left-2 z-10" />
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
