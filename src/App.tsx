import { RouterProvider } from "react-router";
import { publicRoutes } from "./routes/routes";
export default function App() {
  return (
    <RouterProvider router={publicRoutes} />
  );
}