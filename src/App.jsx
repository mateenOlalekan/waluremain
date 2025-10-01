import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import BookingLayout from "./layouts/BookingLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Verifypage from "./pages/VerificationPage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserDashpage"

export default function App() {
  return (
    <Routes>
      {/* Main Layout with Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* Booking Layout with Navbar only */}
      <Route element={<BookingLayout />}>
        <Route path="/booking" element={<BookingPage />} />
      </Route>

      {/* Auth Layout with no Navbar/Footer */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify" element={<Verifypage />} />
      </Route>

      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dash" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
      </Route>
    </Routes>
  );
}
