"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { FoodItem } from "@/app/orders/page";
import FoodCard from "./FoodCard";

interface FoodItemsSectionProps {
  initialItems: FoodItem[];
  currentSearch: string;
  currentCategory: string;
}

const categories = ["All", "Appetizer", "Main Course", "Dessert", "Beverage"];

const FoodItemsSection: React.FC<FoodItemsSectionProps> = ({
  initialItems,
  currentSearch,
  currentCategory,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState(currentSearch);
  const [selectedCategory, setSelectedCategory] = useState(currentCategory);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (selectedCategory && selectedCategory !== "All")
      params.set("category", selectedCategory);

    router.push(`${pathname}?${params.toString()}`);
  }, [search, selectedCategory, pathname, router]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative w-full md:max-w-sm">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search food by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all text-gray-800"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#EA580C] text-white shadow-md shadow-orange-500/10"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {initialItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {initialItems.map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-sm font-semibold text-gray-400">
            No food items found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodItemsSection;
