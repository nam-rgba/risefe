import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard"
import Customer from "./pages/Customer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="customer" element={<Customer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}