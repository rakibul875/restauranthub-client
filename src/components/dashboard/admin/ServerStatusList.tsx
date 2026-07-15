import React from "react";
import { FiCpu, FiUserPlus, FiShoppingBag } from "react-icons/fi";

const ServerStatusList = () => {
  const events = [
    {
      id: 1,
      type: "sale",
      msg: "New Order Placed ($229.97)",
      meta: "User Ashik just paid",
      time: "Just Now",
      icon: <FiShoppingBag size={15} />,
      style: "bg-orange-50 text-[#EA580C] border-orange-100",
    },
    {
      id: 2,
      type: "user",
      msg: "New Registration Spark",
      meta: "email: rahim@gmail.com",
      time: "14 mins ago",
      icon: <FiUserPlus size={15} />,
      style: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      id: 3,
      type: "system",
      msg: "Stripe Webhook Synced",
      meta: "Event data captured successfully",
      time: "1 hour ago",
      icon: <FiCpu size={15} />,
      style: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
      <div className="space-y-1">
        <h3 className="text-base font-black text-gray-950 uppercase tracking-wider">
          Live System Logs
        </h3>
        <p className="text-xs text-gray-400 font-medium">
          Real-time update stream of servers.
        </p>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-start gap-3 p-3 rounded-2xl border border-gray-50 bg-gray-50/30"
          >
            <div
              className={`p-2 rounded-xl border flex-shrink-0 ${event.style}`}
            >
              {event.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex justify-between items-baseline gap-2">
                <h4 className="font-extrabold text-gray-900 text-xs truncate">
                  {event.msg}
                </h4>
                <span className="text-[9px] text-gray-400 font-bold flex-shrink-0">
                  {event.time}
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-medium truncate mt-0.5">
                {event.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerStatusList;
