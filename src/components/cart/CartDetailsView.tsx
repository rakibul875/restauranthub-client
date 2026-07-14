"use client";

import { CartItem } from "@/app/cart/page";
import { dataDelete } from "@/lib/action/serverPost";
import { useRouter } from "next/navigation";
import React from "react";

import { FiTrash2, FiShoppingBag, FiCreditCard } from "react-icons/fi";

interface CartDetailsViewProps {
  initialCartItems: CartItem[];
}

const CartDetailsView: React.FC<CartDetailsViewProps> = ({
  initialCartItems,
}) => {
  const router = useRouter();
  const handleDelete = async (id: any) => {
    const res = await dataDelete(`/my-cart/${id}`);
    if (res.deletedCount > 0) {
      alert("Item delete Successful");
      router.refresh();
    }
  };
  const subtotal = initialCartItems.reduce(
    (acc, item) => acc + parseFloat(item.price || "0"),
    0,
  );
  const deliveryFee = initialCartItems.length > 0 ? 5.0 : 0;
  const totalAmount = subtotal + deliveryFee;

  if (initialCartItems.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex justify-center text-gray-300">
          <FiShoppingBag size={56} />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-extrabold text-gray-800">
            Your cart is empty
          </h3>
          <p className="text-xs text-gray-400 font-medium">
            Add delicious items from the menu to fill it up!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 space-y-4">
        {initialCartItems.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4 group hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4 min-w-0">
              <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-inner">
                <img
                  src={item.image || "https://placehold.co/150"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold bg-orange-50 text-[#EA580C] px-2 py-0.5 rounded-md uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-extrabold text-gray-900 text-base truncate pt-1">
                  {item.name}
                </h3>
                <p className="text-sm font-black text-[#EA580C] mt-0.5">
                  ${parseFloat(item.price).toFixed(2)}
                </p>
              </div>
            </div>

            <button
              className="text-gray-400 hover:text-red-600 p-2.5 rounded-xl hover:bg-red-50/50 transition-all border border-transparent hover:border-red-100/50 flex-shrink-0"
              onClick={() => handleDelete(item._id)}
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6 lg:sticky lg:top-24">
        <h2 className="text-base font-black text-gray-950 uppercase tracking-wider">
          Order Summary
        </h2>

        <div className="space-y-3.5 text-sm font-medium text-gray-500">
          <div className="flex justify-between">
            <span>Subtotal ({initialCartItems.length} items)</span>
            <span className="text-gray-900 font-bold">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span className="text-gray-900 font-bold">
              ${deliveryFee.toFixed(2)}
            </span>
          </div>

          <hr className="border-gray-100 my-2" />

          <div className="flex justify-between items-baseline text-gray-950">
            <span className="font-extrabold text-base">Total Amount</span>
            <span className="text-xl font-black text-[#EA580C]">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
        </div>

        <form action={"/api/checkout_sessions"} method="POST">
          <input type="hidden" name="price" value={totalAmount.toFixed(2)} />
          <input type="hidden" name="title" value="Checkout All Product" />
          <input type="hidden" name="productId" value="1200" />
          <button
            type="submit"
            className="w-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-sm py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/10 active:scale-98"
          >
            <FiCreditCard size={16} />
            <span>Proceed to Checkout</span>
          </button>
        </form>

        <p className="text-[10px] text-center text-gray-400 font-medium leading-normal">
          Taxes calculated at checkout. By continuing, you agree to our Terms.
        </p>
      </div>
    </div>
  );
};

export default CartDetailsView;
