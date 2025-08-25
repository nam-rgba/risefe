import {  createBrowserRouter } from "react-router";
import { publicPermission } from "./publicPermission";
import PageTitle from "./PageTitle";
import Landing from "@/pages/Landing";
import NotFound from "@/pages/NotFound";

const publicRoutes = createBrowserRouter([
  {
    path: publicPermission.landing,
    element: <PageTitle title="Landing" element={<Landing />} />,
  },



  {
    path: publicPermission.notFound,
    element: <PageTitle title="404" element={<NotFound />} />,
  }
])

export { publicRoutes };
