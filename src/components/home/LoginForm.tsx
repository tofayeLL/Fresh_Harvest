"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormData = {
  email: string;
  password: string;
};

export function LoginForm({ closeModal }: { closeModal?: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    console.log("Login Data:", data);

    // Example: navigate or close modal after login
    if (closeModal) closeModal();
    else router.push("/");
  };

  return (
 <div className="conatier mx-auto p-6 max-w-md bg-white shadow-md rounded-lg ">

    <h1 className="flex justify-center items-center font-bold text-4xl">Login</h1>



       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-[#212337] text-lg">
          Email
        </Label>
        <Input
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
        <Label htmlFor="password" className="text-[#212337] text-lg">
          Password
        </Label>
        <div className="relative">
          <Input
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

      {/* Remember Me + Forgot Password */}
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
      <div className="mt-4">
        <Button
          type="submit"
          className="w-full bg-[#FF6A1A] text-white py-2 rounded-md hover:bg-orange-600"
        >
          Sign In
        </Button>
      </div>

      <div className="mt-4 text-center text-gray-500">or continue with</div>
    </form>
 </div>
  );
}
export default LoginForm;