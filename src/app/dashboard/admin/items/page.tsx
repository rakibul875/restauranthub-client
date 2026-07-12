import AddItemsForm from "@/components/dashboard/admin/AddItemsForm";
import React from "react";
import Link from "next/link";
import { FiChevronRight, FiGrid } from "react-icons/fi";

const AddItemsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/50 to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
  
        <nav className="flex items-center space-x-2 text-xs font-medium text-gray-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-100 w-fit shadow-sm">
          <Link
            href="/dashboard"
            className="hover:text-[#EA580C] transition-colors flex items-center gap-1"
          >
            <FiGrid size={14} />
            Dashboard
          </Link>
          <FiChevronRight className="text-gray-400" />
          <span className="text-gray-800 font-semibold">Add Item</span>
        </nav>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Menu Management
            </h1>
            <p className="text-xs text-gray-400 mt-1 font-medium">
              Create and publish a new food item to your restaurant menu.
            </p>
          </div>

    
          <Link
            href="/orders"
            className="text-xs font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-4 py-2.5 rounded-xl transition-all text-center"
          >
            View Active Menu
          </Link>
        </div>

       
        <div className="relative">
         
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 blur-3xl rounded-3xl -z-10" />

         
          <AddItemsForm />
        </div>
      </div>
    </div>
  );
};

export default AddItemsPage;
