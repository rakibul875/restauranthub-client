import { getUser } from "@/lib/get/user";
import React from "react";
import { FiUsers, FiSliders } from "react-icons/fi";

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const User = async () => {
  const users: UserData[] = (await getUser()) || [];
  const totalUsers = users.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/40 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl p-8 relative overflow-hidden text-center space-y-6">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500" />

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -top-1 -right-1 bg-[#EA580C] text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm z-10 animate-bounce">
              {totalUsers}
            </div>
            <div className="relative bg-orange-50 p-4 rounded-full border border-orange-100 text-[#EA580C] animate-spin [animation-duration:4s]">
              <FiSliders size={32} className="stroke-[1.5]" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-black text-gray-950 tracking-tight uppercase">
            Working on it
          </h2>
          <p className="text-xs text-gray-500 font-medium leading-relaxed px-2">
            We are currently setting up the User Management Control Panel for
            your database. The management system for{" "}
            <span className="font-extrabold text-[#EA580C] bg-orange-50 border border-orange-100/60 px-1.5 py-0.5 rounded text-sm font-mono">
              {totalUsers} registered users
            </span>{" "}
            will be live very soon!
          </p>
        </div>

        <hr className="border-gray-100" />

        <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-gray-400">
          <FiUsers size={14} className="text-gray-400" />
          <span>Total Database Members: {totalUsers}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
