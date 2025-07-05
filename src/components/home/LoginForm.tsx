"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

import SignupForm from "./SignupForm";

type FormData = {
  email: string;
  password: string;
};

type Props = {
  switchToSignup: () => void;
};
export default function LoginForm({ switchToSignup }: Props) {
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
    router.push("/");
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 my-10">
        {/* Email */}
        <div>
          <Label
            htmlFor="email"
            className="text-base md:text-lg text-[#212337]"
          >
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
            className="w-full text-sm md:text-base"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <Label
            htmlFor="password"
            className="text-base md:text-lg text-[#212337]"
          >
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
              className="w-full pr-10 text-sm md:text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-600 hover:text-black"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
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
            className="w-full bg-[#FF6A1A] hover:bg-orange-600"
          >
            Log In
          </Button>
        </div>

        {/* Divider with text */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300" />
          <span className="px-4 text-gray-600 text-sm">Or Sign in with</span>
          <div className="flex-1 border-t border-gray-300" />
        </div>

        {/* Social buttons */}
        <div className="flex gap-3 mb-6">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-green-500" />
            Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
              <FaFacebookF className="text-white text-xs" />
            </div>
            Facebook
          </Button>
        </div>

        {/* Sign up link */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Don’t have an account?{" "}
            <Dialog>
              <DialogTrigger asChild>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      onClick={switchToSignup}
                      className="text-orange-500 hover:text-orange-600 font-medium"
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl">
                    Sign Up
                  </DialogTitle>
                </DialogHeader>
                <SignupForm switchToLogin={switchToSignup} />
                <DialogClose asChild></DialogClose>
              </DialogContent>
            </Dialog>
          </p>
        </div>
      </form>
    </div>
  );
}
