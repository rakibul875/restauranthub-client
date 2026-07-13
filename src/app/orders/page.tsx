import FoodItemsSection from "@/components/orders/FoodItemsSection";
import { getAllItems } from "@/lib/get/items";
import React from "react";


export interface FoodItem {
  _id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  createdAt: string;
}


interface PageProps {
  searchParams: Promise<{ search?: string; category?: string }>;
}

const OrdersPage = async ({ searchParams }: PageProps) => {
  const resolvedParams = await searchParams;
  const search = resolvedParams.search || "";
  const category = resolvedParams.category || "All";

  const foodItems: FoodItem[] = await getAllItems(search, category);

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-black text-gray-950 tracking-tight">
            Our Delicious Menu
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            Explore our wide range of freshly prepared foods just for you.
          </p>
        </div>

        <FoodItemsSection
          initialItems={foodItems}
          currentSearch={search}
          currentCategory={category}
        />
      </div>
    </div>
  );
};

export default OrdersPage;
