// src/App.jsx
import "./App.css";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

/* Layouts (keep static — these are small and used for every page) */
import MainLayout from "./layouts/MainLayout";
import BookingLayout from "./layouts/BookingLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

/* Loading screen */
import LoadingScreen from "./components/LoadingScreen";

/* Lazy-loaded pages — IMPORTANT: file names are PascalCase and include .jsx extension in this example.
   Make sure your actual filenames match these exactly (case + extension). */
const HomePage = lazy(() => import("./pages/Homepage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const BookingPage = lazy(() => import("./pages/BookingPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const SignupPage = lazy(() => import("./pages/SignupPage.jsx"));
const VerificationPage = lazy(() => import("./pages/VerificationPage.jsx"));
const AdminPage = lazy(() => import("./pages/AdminPage.jsx"));
const UserPage = lazy(() => import("./pages/UserDashpage.jsx"));

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen message="Preparing the workspace..." />}>
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
