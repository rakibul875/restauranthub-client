"use client";

import React from "react";
import { FoodItem } from "@/app/orders/page";
import { FiShoppingCart } from "react-icons/fi";

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={item.image || "https://placehold.co/600x400?text=No+Image"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#EA580C] text-[10px] font-black px-2.5 py-1 rounded-lg shadow-sm uppercase tracking-wider">
          {item.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-extrabold text-gray-900 text-base line-clamp-1 group-hover:text-[#EA580C] transition-colors">
              {item.name}
            </h3>
            <span className="text-base font-black text-[#EA580C] whitespace-nowrap">
              ${item.price}
            </span>
          </div>
          <p className="text-xs text-gray-400 line-clamp-2 font-medium leading-relaxed">
            {item.description}
          </p>
        </div>

        <button className="w-full bg-gray-50 hover:bg-[#EA580C] text-gray-700 hover:text-white font-bold text-xs py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border border-gray-100 hover:border-[#EA580C]">
          <FiShoppingCart size={14} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
