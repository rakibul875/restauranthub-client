"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiEye, FiEyeOff, FiLogIn } from "react-icons/fi";


const SingIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    alert(`Logging in with: ${email}`);
  };


  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4 pt-24 pb-12">
      <div className="w-full max-w-[400px] space-y-8">
     
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-[#A64B16]">
           
            <div className="bg-[#EA580C] text-white p-2 rounded-xl shadow-sm">
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
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253"
                />
              </svg>
            </div>
            <span className="text-gray-900 font-extrabold tracking-tight">
              Restaurant<span className="text-[#EA580C]">Hub</span>
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-xs">
              Please enter your details to sign in
            </p>
          </div>
        </div>

       
        <form onSubmit={handleSubmit} className="space-y-5">
       
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@restaurant.com"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#EA580C] transition-all"
            />
          </div>

         
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-700">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-bold text-[#EA580C] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:border-[#EA580C] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
          </div>

       
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-[#EA580C] focus:ring-[#EA580C] accent-[#EA580C] cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-xs text-gray-600 font-medium cursor-pointer select-none"
            >
              Remember me for 30 days
            </label>
          </div>

     
          <div className="space-y-3 pt-2">
        
            <button
              type="submit"
              className="w-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center space-x-2 shadow-sm transition-all"
            >
              <span>Login</span>
              <FiLogIn size={16} />
            </button>         
          </div>
        </form>

   
        <div className="text-center text-xs font-medium text-gray-600">
          Don`t have an account?{" "}
          <Link
            href="/auth/singUp"
            className="text-[#EA580C] font-bold hover:underline"
          >
            Register
          </Link>
        </div>

     
        <div className="flex justify-center items-center space-x-4 pt-4 text-[11px] font-medium text-gray-400 border-t border-gray-100">
          <Link
            href="/privacy"
            className="hover:text-gray-600 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-600 transition-colors">
            Terms of Service
          </Link>
          <Link
            href="/support"
            className="hover:text-gray-600 transition-colors"
          >
            Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingIn;
