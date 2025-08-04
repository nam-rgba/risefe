import { RouterProvider } from "react-router";
import routes from "./routes/routes";
export default function App() {
  return (
    <RouterProvider router={routes} />
  );
}