"use client";

import { FoodItem } from "@/app/orders/[id]/page";
import { authClient } from "@/lib/auth-client";
import { handleCartPost } from "@/lib/post/cart";
import { AppWindow } from "lucide";
import React from "react";

import {
  FiShoppingCart,
  FiCreditCard,
  FiClock,
  FiLayers,
} from "react-icons/fi";

interface FoodDetailsContentProps {
  foodItem: FoodItem;
}

const FoodDetailsContent: React.FC<FoodDetailsContentProps> = ({
  foodItem,
}) => {
  const { data } = authClient.useSession();
  const user = data?.user;
  const userId = user?.id;
  const userEmail = user?.email;

  const handleAddToCart = async () => {
    const cartData = {
      id: foodItem._id,
      name: foodItem.name,
      price: foodItem.price,
      image: foodItem.image,
      userId: userId,
      userEmail: userEmail,
    };
    const res = await handleCartPost(cartData);
    if (res.insertedId) {
      alert(`${foodItem.name} added to cart!`);
    }
  };

  const itemPayload={
    name:foodItem.name,
    image:foodItem.image,
    
  }
 

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 relative">
      <div className="absolute top-0 right-0 bg-gradient-to-b from-orange-500/5 to-transparent blur-3xl w-72 h-72 rounded-full -z-10" />

      <div className="relative w-full h-72 sm:h-96 md:h-full min-h-[350px] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-inner group">
        <img
          src={foodItem.image || "https://placehold.co/600x400?text=No+Image"}
          alt={foodItem.name}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
        />

        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#EA580C] text-[10px] font-black px-3 py-1.5 rounded-xl shadow-sm uppercase tracking-wider flex items-center gap-1.5">
          <FiLayers size={12} />
          {foodItem.category}
        </span>
      </div>

      <div className="flex flex-col justify-between space-y-6 py-2">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
              {foodItem.name}
            </h1>
            <div className="flex items-center gap-4 pt-1">
              <span className="text-2xl sm:text-3xl font-black text-[#EA580C]">
                ${foodItem.price}
              </span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
                In Stock
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-semibold pt-1">
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
              <FiClock className="text-gray-400" size={14} />
              <span>Freshly Prepared</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
              <span>Delivery: 20-30 mins</span>
            </div>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
              Description
            </h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              {foodItem.description}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleAddToCart}
              className="w-full bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm py-3.5 rounded-xl transition-all border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <FiShoppingCart size={16} className="text-gray-500" />
              <span>Add to Cart</span>
            </button>

            <form action={"/api/checkout_sessions"} method="POST">
              <input
                type="hidden"
                name="price"
                value={foodItem.price}
              />
              <input type="hidden" name="title" value={foodItem.name} />
              <input type="hidden" name="productId" value={foodItem._id} />
              <input type="hidden" name="image" value={foodItem.image} />
              <input type="hidden" name="status" value='pending' />
              
              <button
                type="submit"
                className="w-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-sm py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/10 active:scale-98"
              >
                <FiCreditCard size={16} />
                <span>Order Now</span>
              </button>
            </form>
          </div>
          <p className="text-[10px] text-center text-gray-400 font-medium">
            Safe & Secure checkout guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsContent;
