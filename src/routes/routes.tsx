import {  createBrowserRouter } from "react-router";
import PageTitle from "./PageTitle";
import DashboardLayout from "@/pages/admin/DashboardLayout";
import Dashboard from "@/pages/admin/Dashboard";
import Staffs from "@/pages/admin/staffs/Staff";
import Projects from "@/pages/admin/projects/Projects";
import Tasks from "@/pages/admin/tasks/Tasks";
import { JSX } from "react";
import { adminSidebarRoutes } from "./adminRoutes";

const pageComponentMap: Record<string, JSX.Element> = {
  "/admin/dashboard": <Dashboard />,
  "/admin/staff": <Staffs />,
  "/admin/projects": <Projects />,
  "/admin/tasks": <Tasks />,
};

const  adminChildrenRoutes = adminSidebarRoutes.map(({ path, title }) => ({
  path,
  element: <PageTitle title={title} element={pageComponentMap[path]} />,
}));




const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageTitle title="HOME" element={<h1>HOME</h1>} />,
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: adminChildrenRoutes
  }
])



export default routes;
