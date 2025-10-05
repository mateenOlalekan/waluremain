import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Layouts (these can remain static because they’re used often)
import MainLayout from "./layouts/MainLayout";
import BookingLayout from "./layouts/BookingLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/Homepage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const VerificationPage = lazy(() => import("./pages/VerificationPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const UserPage = lazy(() => import("./pages/UserDashpage"));

export default function App() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
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
      </Routes>
    </Suspense>
  );
}
