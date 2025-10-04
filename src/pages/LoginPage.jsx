import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Wavora from "../assets/Treva.svg";
import Google from "../assets/Googleicon.svg";
import Facebook from "../assets/Facebook.svg";

// Fake database for demo
const existingUsers = ["test@example.com", "demo@wavora.com"];

// Zod schema for login
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setLoginMessage("");
    await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate API

    if (existingUsers.includes(data.email)) {
      setLoginMessage("✅ Login successful! Redirecting...");
    } else {
      setLoginMessage("❌ Account not found. Please sign up.");
    }

    reset({ password: "" }); // clear password field
  };

  return (
    <div className="w-full flex items-center justify-center p-4 sm:p-6">
      <div className="w-full sm:max-w-lg bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-2xl">
        {/* Logo */}
        <img src={Wavora} alt="Wavora" className="w-18 sm:w-20 mx-auto mb-4" />

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Login to your Wavora account
        </p>

        {/* Social Login */}
        <div className="flex justify-center gap-3 items-center">
          <img src={Google} alt="Google" className="w-8 cursor-pointer" />
          <img src={Facebook} alt="Facebook" className="w-6 cursor-pointer" />
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">Or Login with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-green-500 outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                {...register("password")}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-green-500 outline-none`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="hidden sm:block absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-center text-sm">
            <a href="/forgot-password" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition disabled:bg-green-300"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {/* Message */}
          {loginMessage && (
            <p
              className={`text-center mt-3 text-sm ${
                loginMessage.startsWith("✅")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {loginMessage}
            </p>
          )}
        </form>

        {/* Extra Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
