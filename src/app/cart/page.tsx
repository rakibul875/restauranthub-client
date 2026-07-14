import CartDetailsView from "@/components/cart/CartDetailsView";
import { auth } from "@/lib/auth";
import { getMyCart } from "@/lib/get/my-cart";
import { headers } from "next/headers";
import React from "react";
export interface CartItem {
  _id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  quantity?: number; 
}

const MyCart = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;
  const myCartItems: CartItem[] = (await getMyCart(userId as string)) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/40 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* ১. পেজ হেডার */}
        <div className="border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            Manage the food items you added to your cart before checkout.
          </p>
        </div>

        
        <CartDetailsView initialCartItems={myCartItems} />
      </div>
    </div>
  );
};

export default MyCart;
