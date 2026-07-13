import { getItemById } from "@/lib/get/items";
import React from "react";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import FoodDetailsContent from "@/components/orders/FoodsDetails";

interface FoodsDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export interface FoodItem {
  _id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  createdAt: string;
}

const FoodsDetails = async ({ params }: FoodsDetailsProps) => {
  const { id } = await params;
  const foodItem: FoodItem = await getItemById(id);

  if (!foodItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <p className="text-gray-500 font-bold text-sm">Food item not found!</p>
        <Link
          href="/orders"
          className="mt-4 text-xs font-bold text-[#EA580C] hover:underline"
        >
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/30 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto space-y-6">
    
        <Link
          href="/orders"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#EA580C] bg-white px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm transition-all"
        >
          <FiChevronLeft size={16} />
          Back to Menu
        </Link>

     
        <FoodDetailsContent foodItem={foodItem} />
      </div>
    </div>
  );
};

export default FoodsDetails;
