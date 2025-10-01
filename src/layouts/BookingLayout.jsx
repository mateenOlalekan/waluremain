import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function BookingLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
