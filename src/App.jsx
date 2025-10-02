import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import BookingLayout from "./layouts/BookingLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import HomePage from "./pages/homepage";
import ContactPage from "./pages/contactPage";
import BookingPage from "./pages/bookingPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import VerificationPage from "./pages/verificationPage";
import AdminPage from "./pages/adminPage";
import UserPage from "./pages/userDashpage";

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
        <Route path="/verify" element={<VerificationPage />} />
      </Route>

      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dash" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
      </Route>
    </Routes>
  );
}
