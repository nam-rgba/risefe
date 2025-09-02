import {  createBrowserRouter } from "react-router";
import { publicPermission } from "./publicPermission";
import PageTitle from "./PageTitle";
import Landing from "@/pages/Landing";
import NotFound from "@/pages/NotFound";
import { AuthLayout } from "@/pages/auth/Layout";

const publicRoutes = createBrowserRouter([
  {
    path: publicPermission.landing,
    element: <PageTitle title="Landing" element={<Landing />} />,
  },
  {
    path: publicPermission.notFound,
    element: <PageTitle title="404" element={<NotFound />} />,
  },
  {
    path: publicPermission.login,
    element: <PageTitle title="Login" element={<AuthLayout type="login" />} />,
  },
  {
    path: publicPermission.register,
    element: <PageTitle title="Register" element={<AuthLayout type="register" />} />,
  },

])

export { publicRoutes };
