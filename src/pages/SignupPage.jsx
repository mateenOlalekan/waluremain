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

// Zod schema
const signupSchema = z
  .object({
    name: z.string().min(3, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email format")
      .refine((val) => !existingUsers.includes(val), {
        message: "Email already exists. Please login.",
      }),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    setSuccessMessage("");
    await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate API
    setSuccessMessage("Signup successful! Redirecting...");
    reset();
  };

  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-full sm:max-w-lg bg-white rounded-2xl px-3 py-2 sm:px-8 sm:py-10 border border-none md:border-gray-200 shadow-2xl">
        {/* Logo */}
        <img src={Wavora} alt="Wavora" className="w-18 sm:w-20 mx-auto mb-2" />

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-1">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-3 text-sm sm:text-base">
          Fill in the details below to get started
        </p>

        {/* Social Signup */}
        <div className="flex justify-center gap-3 items-center">
          <img src={Google} alt="Google" className="w-8 cursor-pointer" />
          <img src={Facebook} alt="Facebook" className="w-6 cursor-pointer" />
        </div>

        {/* Divider */}
        <div className="flex items-center my-3">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">Or Sign Up with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Enter Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              {...register("name")}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-green-500 outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Re-enter your password"
                {...register("confirmPassword")}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-green-500 outline-none`}
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="hidden sm:block absolute right-3 top-2.5 text-gray-500"
              >
                {showConfirmPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition disabled:bg-green-300"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-600 text-center mt-2 text-sm">
              {successMessage}
            </p>
          )}
        </form>

        {/* Extra Links */}
        <div className="text-center mt-3 text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
