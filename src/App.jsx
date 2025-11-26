import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import logo from "./assets/logo.svg"; // FIXED: import logo

// Layouts
import MainLayout from "./layouts/MainLayout";
import BookingLayout from "./layouts/BookingLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/Homepage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const VerificationPage = lazy(() => import("./pages/VerificationPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const UserPage = lazy(() => import("./pages/UserDashpage"));
const Dashboard = lazy(() =>import("./pages/AdminDashboard/Dashboard.jsx"))

// Loading Splash
function LoadingSplash() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#BCF2D2] to-white z-50">
      <style>
        {`
          @keyframes gentlePulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .gentle-pulse {
            animation: gentlePulse 5s ease-in-out infinite;
          }
        `}
      </style>
      <img src={logo} alt="Loading Logo" className="w-32 h-32 gentle-pulse" />
      <p className="mt-4 text-gray-600 animate-pulse">Loading...</p>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingSplash />}>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Booking Layout */}
        <Route element={<BookingLayout />}>
          <Route path="/booking" element={<BookingPage />} />
        </Route>

        {/* Auth Layout */}
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

        <Route path="/board" element={<Dashboard/>}/>
      </Routes>
    </Suspense>
  );
}
