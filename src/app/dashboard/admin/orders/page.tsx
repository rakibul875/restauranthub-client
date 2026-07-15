import AdminOrderList from "@/components/dashboard/admin/AdminOrderList";
import { getAllOrder } from "@/lib/get/order";
import React from "react";


// ডাটা স্ট্রাকচার ইন্টারফেস
export interface AdminOrderItem {
  _id: string;
  productImage: string;
  userId: string;
  sessionId: string;
  productName: string;
  productPrice: string;
  status: "pending" | "accepted" | "confirmed" | "cancelled";
  orderAt: string;
}

const Order = async () => {
  const orders: AdminOrderItem[] = (await getAllOrder()) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/40 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* পেজ হেডার */}
        <div className="border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Order Management
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            Manage incoming customer orders, accept requests, and confirm final
            dispatches.
          </p>
        </div>

        {/* আলাদা করা ক্লায়েন্ট ইন্টারেক্টিভ লিস্ট */}
        <AdminOrderList initialOrders={orders} />
      </div>
    </div>
  );
};

export default Order;
