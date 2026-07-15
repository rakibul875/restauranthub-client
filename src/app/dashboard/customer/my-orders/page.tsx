import OrderListContainer from "@/components/dashboard/customer/OrderListContainer";
import { auth } from "@/lib/auth";
import { getOrder } from "@/lib/get/order";
import { headers } from "next/headers";
import React from "react";

export interface OrderItem {
  _id: string;
  productImage: string;
  userId: string;
  sessionId: string;
  productName: string;
  productPrice: string;
  status: "pending" | "processing" | "delivered" | "cancelled";
  orderAt: string;
}

const MyOrderPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;
  const orderItems: OrderItem[] = await getOrder(userId || "");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/40 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-5xl mx-auto space-y-6">
  
        <div className="border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            My Orders
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            Track your live orders, view history, and manage your requests.
          </p>
        </div>

        <OrderListContainer initialOrders={orderItems} />
      </div>
    </div>
  );
};

export default MyOrderPage;
