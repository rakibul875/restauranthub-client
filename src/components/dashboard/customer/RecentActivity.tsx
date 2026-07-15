import React from "react";
import { FiClock, FiCheckCircle } from "react-icons/fi";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "order",
      title: "Burger Combo Premium",
      status: "Delivered",
      time: "2 hours ago",
      amount: "$29.97",
      isDone: true,
    },
    {
      id: 2,
      type: "order",
      title: "Pepperoni Pizza Large",
      status: "Pending",
      time: "5 mins ago",
      amount: "$199.99",
      isDone: false,
    },
    {
      id: 3,
      type: "subscription",
      title: "Monthly Food Pack",
      status: "Active",
      time: "Yesterday",
      amount: "$59.00",
      isDone: true,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
      <div className="space-y-1">
        <h3 className="text-base font-black text-gray-950 uppercase tracking-wider">
          Recent Activity
        </h3>
        <p className="text-xs text-gray-400 font-medium">
          Track your latest status updates.
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between gap-3 p-3 rounded-2xl hover:bg-gray-50/70 transition-colors border border-transparent hover:border-gray-100"
          >
            <div className="flex items-center space-x-3 min-w-0">
              <div
                className={`p-2 rounded-xl border flex-shrink-0 ${activity.isDone ? "bg-emerald-50 text-emerald-500 border-emerald-100" : "bg-amber-50 text-amber-500 border-amber-100"}`}
              >
                {activity.isDone ? (
                  <FiCheckCircle size={16} />
                ) : (
                  <FiClock size={16} />
                )}
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-gray-900 text-xs sm:text-sm truncate">
                  {activity.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-semibold">
                  {activity.time}
                </p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-xs font-black text-gray-950 block">
                {activity.amount}
              </span>
              <span
                className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${activity.isDone ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50"}`}
              >
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
