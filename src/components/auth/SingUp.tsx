"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiUser,
  FiImage,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheckCircle,
} from "react-icons/fi";

const SingUp: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [profileUrl, setProfileUrl] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const isEmailAvailable = email.includes("@") && email.length > 5;
  const passwordsDoNotMatch =
    password && confirmPassword && password !== confirmPassword;

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (passwordsDoNotMatch) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ fullName, profileUrl, email, password });
    alert("Account created successfully!");
  };

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4 pt-24 pb-12">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 text-xl font-bold">
            <div className="text-[#EA580C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17c0 .5-.3 1-.75 1.5S8 20 8 21h8c0-1-.5-2-1-2.5s-.75-1-.75-1.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 3v6M12 3v6M15 3v6M9 9h6c.5 0 1 .5 1 1v2c0 1.5-1.5 3-3.5 3S9 13.5 9 12v-2c0-.5.5-1 1-1Z"
                />
              </svg>
            </div>
            <span className="text-gray-900 font-extrabold tracking-tight">
              Restaurant<span className="text-[#EA580C]">Hub</span>
            </span>
          </div>

          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Create Account
            </h2>
            <p className="text-gray-500 text-xs font-medium">
              Join our community of food lovers
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">Full Name</label>
            <div className="relative">
              <FiUser
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Alex Johnson"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all text-gray-800"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">
              Profile Photo URL
            </label>
            <div className="relative">
              <FiImage
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="url"
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all text-gray-800"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <FiMail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.j@epicure.com"
                className={`w-full bg-gray-50 border rounded-xl pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:bg-white transition-all text-gray-800 ${
                  isEmailAvailable
                    ? "border-emerald-500 bg-emerald-50/10"
                    : "border-gray-200"
                }`}
              />
              {isEmailAvailable && (
                <FiCheckCircle
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600"
                  size={16}
                />
              )}
            </div>
            {isEmailAvailable && (
              <p className="text-[10px] text-emerald-600 font-semibold pl-1">
                Email address is available
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">Password</label>
            <div className="relative">
              <FiLock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all text-gray-800"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <FiLock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full bg-gray-50 border rounded-xl pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:bg-white transition-all text-gray-800 ${
                  passwordsDoNotMatch
                    ? "border-red-400 bg-red-50/10"
                    : "border-gray-200"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <FiEyeOff size={16} />
                ) : (
                  <FiEye size={16} />
                )}
              </button>
            </div>
            {passwordsDoNotMatch && (
              <p className="text-[10px] text-red-500 font-semibold pl-1">
                Passwords do not match
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-sm py-3 rounded-xl shadow-sm transition-all pt-3"
          >
            Register
          </button>
        </form>

        <div className="text-center text-xs font-medium text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-[#EA580C] font-bold hover:underline"
          >
            Login
          </Link>
        </div>

        <p className="text-center text-[10px] text-gray-400 px-4 leading-relaxed">
          By registering, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-gray-600">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-gray-600">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default SingUp;
