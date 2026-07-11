"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname(); 

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Foods", href: "/orders" },
    { name: "Offers", href: "/offers" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
   
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
              className={`transition-colors ${
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

   
      <div className="flex items-center space-x-6">
        <Link
          href="/signin"
          className="text-sm font-medium text-gray-700 hover:text-[#A64B16] transition-colors"
        >
          Sign In
        </Link>

       
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
