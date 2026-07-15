"use client";

import { AdminOrderItem } from "@/app/dashboard/admin/orders/page";
import { updateOrder } from "@/lib/post/order";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import {
  FiClock,
  FiCheck,
  FiPackage,
  FiBox,
  FiCheckCircle,
} from "react-icons/fi";

interface AdminOrderListProps {
  initialOrders: AdminOrderItem[];
}

const AdminOrderList: React.FC<AdminOrderListProps> = ({ initialOrders }) => {
  const [orders, setOrders] = useState<AdminOrderItem[]>(initialOrders);

  const router = useRouter();
  const handleUpdateStatus = async (
    orderId: string,
    nextStatus: "accepted" | "confirmed",
  ) => {
    const res = await updateOrder(orderId, nextStatus);

    if (res.modifiedCount > 0) {
      alert(`Order ${nextStatus} successful`);
      router.refresh()
    }
  };

  const getBadgeStyle = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-amber-50 text-amber-600 border-amber-100";
      case "accepted":
        return "bg-blue-50 text-blue-600 border-blue-100";
      case "confirmed":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  if (orders.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4 max-w-md mx-auto">
        <div className="flex justify-center text-gray-300">
          <FiBox size={56} />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-extrabold text-gray-800">
            No Orders Found
          </h3>
          <p className="text-xs text-gray-400 font-medium px-6">
            There are currently no active customer orders in the system
            pipeline.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => {
        const formattedDate = new Date(order.orderAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          },
        );

        return (
          <div
            key={order._id}
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 transition-all hover:shadow-md"
          >
            <div className="flex items-center space-x-4 min-w-0">
              <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-inner">
                <img
                  src={order.productImage || "https://placehold.co/150"}
                  alt={order.productName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-gray-950 text-base truncate">
                    {order.productName}
                  </h3>
                  <span
                    className={`text-[9px] font-black border px-2 py-0.5 rounded-md uppercase tracking-wide ${getBadgeStyle(order.status)}`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-xs font-bold text-[#EA580C]">
                  ${parseFloat(order.productPrice).toFixed(2)}
                </p>
                <p className="text-[10px] text-gray-400 font-medium">
                  User ID:{" "}
                  <span className="font-mono text-[9px] bg-gray-50 px-1 py-0.5 rounded border border-gray-100">
                    {order.userId}
                  </span>
                </p>
                <p className="text-[9px] text-gray-400 font-semibold">
                  Date: {formattedDate}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-gray-50">
              {order.status === "pending" && (
                <button
                  onClick={() => handleUpdateStatus(order._id, "accepted")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100/80 border border-blue-100 px-4 py-2.5 rounded-xl transition-all active:scale-95"
                >
                  <FiCheck size={14} />
                  <span>Accept Order</span>
                </button>
              )}

              {order.status === "accepted" && (
                <button
                  onClick={() => handleUpdateStatus(order._id, "confirmed")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-100 px-4 py-2.5 rounded-xl transition-all active:scale-95 animate-pulse"
                >
                  <FiPackage size={14} />
                  <span>Confirm Delivery</span>
                </button>
              )}

              {order.status === "confirmed" && (
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 bg-gray-50 border border-gray-100 px-4 py-2.5 rounded-xl cursor-not-allowed">
                  <FiCheckCircle size={14} className="text-emerald-500" />
                  <span>Order Completed</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminOrderList;
