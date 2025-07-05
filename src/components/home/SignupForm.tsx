"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle, FaFacebookF } from "react-icons/fa";


type FormData = {
  fullName: string;
  email: string;
  password: string;
};
type Props = {
  switchToLogin: () => void;
};

export default function SignupForm({ switchToLogin }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Signup Form Data:", data);
  };

  return (
    <div className="">
  

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="text-[#212337] text-lg block mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="text-[#212337] text-lg block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="text-[#212337] text-lg block mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600 hover:text-black"
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
          <button type="button" className="text-blue-500 hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FF6A1A] text-white py-2 rounded-md hover:bg-orange-600"
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300" />
          <span className="px-4 text-gray-600 text-sm whitespace-nowrap">Or sign up with</span>
          <div className="flex-1 border-t border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <FaGoogle className="text-red-500 text-lg" />
            <span className="text-gray-700 font-medium">Google</span>
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
              <FaFacebookF className="text-white text-xs" />
            </div>
            <span className="text-gray-700 font-medium">Facebook</span>
          </button>
        </div>

        {/* Link to login */}
       {/* Your signup form */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={switchToLogin}
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
      </form>
    </div>
  );
}
