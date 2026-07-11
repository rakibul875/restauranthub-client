"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = (e: React.FormEvent): void => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ১. ব্র্যান্ড এবং বিবরণ */}
        <div className="space-y-4">
          <Link
            href="/"
            className="text-2xl font-bold text-white tracking-tight"
          >
            Restaurant<span className="text-[#A64B16]">Hub</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Discover the best foods from top restaurants and get them delivered
            fresh and fast right to your doorstep.
          </p>
          {/* সোশ্যাল আইকনসমূহ */}
          <div className="flex space-x-4 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A64B16] transition-colors"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A64B16] transition-colors"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A64B16] transition-colors"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>

        {/* ২. কুইক লিংক (Quick Links) */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/discover"
                className="hover:text-[#A64B16] transition-colors"
              >
                Discover Restaurants
              </Link>
            </li>
            <li>
              <Link
                href="/offers"
                className="hover:text-[#A64B16] transition-colors"
              >
                Exclusive Offers
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="hover:text-[#A64B16] transition-colors"
              >
                Track Orders
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:text-[#A64B16] transition-colors"
              >
                Customer Support
              </Link>
            </li>
          </ul>
        </div>

        {/* ৩. কন্টাক্ট ইনফো (Contact Info) */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center space-x-2">
              <FiMapPin className="text-[#A64B16] flex-shrink-0" />
              <span>123 Foodie Street, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone className="text-[#A64B16] flex-shrink-0" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMail className="text-[#A64B16] flex-shrink-0" />
              <span>support@restauranthub.com</span>
            </li>
          </ul>
        </div>

        {/* ৪. নিউজলেটার সাবস্ক্রিপশন */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get updates on new restaurants and special discount
            coupons.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 pr-12 text-sm focus:outline-none focus:border-[#A64B16] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#A64B16] hover:bg-[#8d3e12] text-white p-1.5 rounded-md transition-colors"
              >
                <FiMail size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* নিচের কপিরাইট অংশ */}
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} RestaurantHub. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            href="/privacy"
            className="hover:text-gray-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-400 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
