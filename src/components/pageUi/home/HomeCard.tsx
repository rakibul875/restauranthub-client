import { FoodItem } from "@/app/orders/page";
import FoodCard from "@/components/orders/FoodCard";
import { getLatestItem } from "@/lib/get/items";
import React from "react";
import { FiTrendingUp, FiInbox, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const HomeCard = async () => {

  const latestItems: FoodItem[] = (await getLatestItem()) || [];

  return (
    <section className="w-full py-12 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
    
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-gray-100 pb-5">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-black text-[#EA580C] uppercase tracking-wider">
              <FiTrendingUp size={14} />
              <span>Fresh & Hot</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              Latest Arrivals
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              Check out our newest culinary creations, freshly prepared just for
              you.
            </p>
          </div>

       
          <Link
            href="/orders"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-gray-600 hover:text-[#EA580C] bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-xl transition-all shadow-sm group self-center sm:self-auto"
          >
            <span>Explore Full Menu</span>
            <FiArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>

       
        {latestItems.length > 0 ? (
          <div className="relative">
            
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent blur-3xl rounded-3xl -z-10" />

           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {latestItems.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        ) : (
      
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4 max-w-md mx-auto">
            <div className="flex justify-center text-gray-300">
              <FiInbox size={48} className="stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-extrabold text-gray-800">
                No items available right now
              </p>
              <p className="text-xs text-gray-400 font-medium px-6">
                Our chefs are cooking up something new! Please check back in a
                few moments.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeCard;
