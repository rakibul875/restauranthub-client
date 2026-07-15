"use client";

import { OrderItem } from "@/app/dashboard/customer/my-orders/page";
import React, { useState } from "react";

import {
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiTruck,
  FiBox,
} from "react-icons/fi";

interface OrderListContainerProps {
  initialOrders: OrderItem[];
}

const OrderListContainer: React.FC<OrderListContainerProps> = ({
  initialOrders,
}) => {
  const [orders, setOrders] = useState<OrderItem[]>(initialOrders || []);


  const handleCancelOrder = async (orderId: string) => {
   alert(`button click ${orderId}`)
  };

 
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return {
          text: "Pending",
          bg: "bg-amber-50 text-amber-600 border-amber-100",
          icon: <FiClock size={12} />,
        };
      case "processing":
        return {
          text: "Processing",
          bg: "bg-blue-50 text-blue-600 border-blue-100",
          icon: <FiTruck size={12} />,
        };
      case "delivered":
        return {
          text: "Delivered",
          bg: "bg-emerald-50 text-emerald-600 border-emerald-100",
          icon: <FiCheckCircle size={12} />,
        };
      case "cancelled":
        return {
          text: "Cancelled",
          bg: "bg-red-50 text-red-600 border-red-100",
          icon: <FiXCircle size={12} />,
        };
      default:
        return {
          text: status,
          bg: "bg-gray-50 text-gray-600 border-gray-100",
          icon: <FiClock size={12} />,
        };
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
            No orders placed yet
          </h3>
          <p className="text-xs text-gray-400 font-medium px-4">
            You havent ordered anything yet. Head over to the menu to place your
            first order!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => {
        const badge = getStatusBadge(order.status);
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
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-5"
          >
           
            <div className="flex items-center space-x-4 min-w-0">
              <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-inner">
                <img
                  src={order.productImage || "https://placehold.co/150"}
                  alt={order.productName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 space-y-1">
                <h3 className="font-extrabold text-gray-900 text-base truncate">
                  {order.productName}
                </h3>
                <p className="text-sm font-black text-[#EA580C]">
                  ${parseFloat(order.productPrice).toFixed(2)}
                </p>
                <p className="text-[10px] text-gray-400 font-medium">
                  Ordered on: {formattedDate}
                </p>
              </div>
            </div>

            <div className="flex items-center md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-gray-50 justify-between">
         
              <span
                className={`text-[11px] font-bold ${badge.bg} border px-3 py-1.5 rounded-xl flex items-center gap-1.5 uppercase tracking-wider`}
              >
                {badge.icon}
                {badge.text}
              </span>

      
              {order.status === "pending" && (
                <button
                  onClick={() =>
                    handleCancelOrder(order._id)
                  }
                  className="text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100/70 border border-red-100 px-4 py-2 rounded-xl transition-all active:scale-95"
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderListContainer;
