"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown } from "@heroui/react";
import { ArrowRightFromSquare } from "@gravity-ui/icons";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Foods", href: "/orders" },
    { name: "Offers", href: "/offers" },
    { name: "Support", href: "/support" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = async () => {
    await authClient.signOut();

    alert("Logging out...");
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 shadow-sm z-50">
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

        {isPending ? (
          <div className="text-sm text-gray-400 font-medium">Loading...</div>
        ) : (
          <div className="flex items-center space-x-4 md:space-x-6">
            {user && (
              <div className="hidden md:block">
                <Dropdown>
                  <Dropdown.Trigger>
                    <div className="flex items-center gap-3 cursor-pointer focus:outline-none hover:opacity-90 transition-opacity">
                      <span className="text-sm font-semibold text-gray-700">
                        Hi, {user.name.split(" ")[0]}
                      </span>

                      <Avatar className="ring-2 ring-orange-100 w-9 h-9">
                        <Avatar.Image alt={user.name} src={user.image || ""} />
                        <Avatar.Fallback delayMs={600}>
                          {user.name.substring(0, 2).toUpperCase()}
                        </Avatar.Fallback>
                      </Avatar>
                    </div>
                  </Dropdown.Trigger>

                  <Dropdown.Popover>
                    <div className="w-56 p-1 bg-white rounded-xl shadow-lg border border-gray-100">
                      <div className="px-3 py-2 border-b border-gray-50 flex flex-col">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {user.email}
                        </p>
                      </div>

                      <Dropdown.Menu className="py-1">
                        <Dropdown.Item
                          id="dashboard"
                          textValue="Dashboard"
                          className="hover:bg-gray-50 rounded-lg"
                        >
                          <Link
                            href="/dashboard"
                            className="block w-full text-sm text-gray-700 py-1.5"
                          >
                            Dashboard
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="profile"
                          textValue="Profile"
                          className="hover:bg-gray-50 rounded-lg"
                        >
                          <Link
                            href="/profile"
                            className="block w-full text-sm text-gray-700 py-1.5"
                          >
                            View Profile
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="logout"
                          textValue="Log Out"
                          className="p-0 hover:bg-red-50 rounded-lg"
                        >
                          <Button
                            onClick={handleLogout}
                            variant="outline"
                            className="flex w-full items-center justify-between gap-2 border-none text-sm text-red-600 font-medium px-3 py-2"
                          >
                            <span>Log Out</span>
                            <ArrowRightFromSquare className="size-3.5 text-red-500" />
                          </Button>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </div>
                  </Dropdown.Popover>
                </Dropdown>
              </div>
            )}

            {!user && (
              <Link
                href="/auth/signin"
                className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-[#A64B16] transition-colors"
              >
                Sign In
              </Link>
            )}

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
        )}
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-[450px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-5 flex flex-col space-y-4 text-base font-medium">
          {user && (
            <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
              <Avatar className="w-10 h-10 ring-2 ring-orange-100">
                <Avatar.Image alt={user.name} src={user.image || ""} />
                <Avatar.Fallback>
                  {user.name.substring(0, 2).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col truncate">
                <span className="text-sm font-bold text-gray-900 truncate">
                  {user.name}
                </span>
                <span className="text-xs text-gray-400 truncate">
                  {user.email}
                </span>
              </div>
            </div>
          )}

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors pl-2 py-2 rounded-lg text-sm ${
                  isActive
                    ? "text-[#A64B16] font-semibold bg-orange-50 border-l-4 border-[#A64B16]"
                    : "text-gray-600 hover:text-[#A64B16] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {user ? (
            <div className="pt-2 flex flex-col space-y-3 border-t border-gray-100">
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className={`pl-2 py-2 text-sm rounded-lg text-gray-600 hover:text-[#A64B16] hover:bg-gray-50 ${
                  pathname === "/dashboard"
                    ? "text-[#A64B16] font-semibold"
                    : ""
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className={`pl-2 py-2 text-sm rounded-lg text-gray-600 hover:text-[#A64B16] hover:bg-gray-50 ${
                  pathname === "/profile" ? "text-[#A64B16] font-semibold" : ""
                }`}
              >
                View Profile
              </Link>

              <Button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                variant="outline"
                className="w-full text-red-600 font-bold border-red-200 border bg-red-50/30 rounded-xl py-2.5 hover:bg-red-600 hover:text-white transition-all duration-200 text-sm flex items-center justify-center gap-2"
              >
                <span>Log Out</span>
                <ArrowRightFromSquare className="size-3.5" />
              </Button>
            </div>
          ) : (
            <Link
              href="/auth/signin"
              onClick={() => setIsOpen(false)}
              className="text-center text-sm font-bold bg-[#A64B16] text-white px-4 py-2.5 rounded-xl hover:bg-[#8f3f10] transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
