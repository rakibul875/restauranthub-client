"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Foods", href: "/orders" },
    { name: "Offers", href: "/offers" },
    { name: "Support", href: "/support" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-[#A64B16] tracking-tight cursor-pointer"
        >
          RestaurantHub
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-[#A64B16] font-semibold border-b-2 border-[#A64B16]"
                    : "text-gray-600 hover:text-[#A64B16]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            href="/auth/signin"
            className="hidden sm:inline-block text-sm font-medium text-gray-700 hover:text-[#A64B16] transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="/cart"
            className="relative cursor-pointer text-[#A64B16] hover:scale-105 transition-transform"
          >
            <FiShoppingCart size={22} className="md:size-[24px]" />
            <span className="absolute -top-2 -right-2 bg-[#A64B16] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-[#A64B16] p-1 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-64 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4 text-base font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors pl-2 py-1.5 rounded-md ${
                  isActive
                    ? "text-[#A64B16] font-semibold bg-orange-50/50 border-l-4 border-[#A64B16]"
                    : "text-gray-600 hover:text-[#A64B16] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="auth/signin"
            onClick={() => setIsOpen(false)}
            className="sm:hidden text-gray-700 hover:text-[#A64B16] pl-2 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
