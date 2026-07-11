"use client"; // Next.js App Router-এ হুক ব্যবহারের জন্য এটি জরুরি

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname(); // বর্তমান ইউআরএল পাথ ট্র্যাক করার জন্য

  // নেভিগেশন লিংকগুলোর একটি অ্যারে (কোড ক্লিন রাখার জন্য)
  const navLinks = [
    { name: "Home", href: "/discover" },
    { name: "Foods", href: "/orders" },
    { name: "Offers", href: "/offers" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
      {/* বাম পাশে: Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-[#A64B16] tracking-tight cursor-pointer"
      >
        RestaurantHub
      </Link>

      {/* মাঝখানে: Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {navLinks.map((link) => {
          // চেক করা হচ্ছে এই লিংকটিই বর্তমান অ্যাক্টিভ পাথ কিনা
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive
                  ? "text-[#A64B16] font-semibold" // অ্যাক্টিভ থাকলে এই স্টাইল হবে
                  : "text-gray-600 hover:text-[#A64B16]" // অ্যাক্টিভ না থাকলে এই স্টাইল
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* ডান পাশে: Sign In এবং Cart */}
      <div className="flex items-center space-x-6">
        <Link
          href="/signin"
          className="text-sm font-medium text-gray-700 hover:text-[#A64B16] transition-colors"
        >
          Sign In
        </Link>

        {/* Cart Icon with Badge */}
        <Link
          href="/cart"
          className="relative cursor-pointer text-[#A64B16] hover:scale-105 transition-transform"
        >
          <FiShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-[#A64B16] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
