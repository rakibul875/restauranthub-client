import React from "react";
import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

const AdminStats = () => {
  const adminMetrics = [
    {
      id: 1,
      label: "Gross Revenue",
      value: "$14,249.50",
      change: "+18.4% growth",
      icon: <FiDollarSign size={20} />,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      id: 2,
      label: "Total Orders",
      value: "1,420 Txns",
      change: "+86 pending",
      icon: <FiShoppingBag size={20} />,
      color: "text-[#EA580C] bg-orange-50 border-orange-100",
    },
    {
      id: 3,
      label: "Platform Users",
      value: "482 Members",
      change: "+12 new today",
      icon: <FiUsers size={20} />,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {adminMetrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4"
        >
          <div className="space-y-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {metric.label}
            </p>
            <h3 className="text-2xl font-black text-gray-950 tracking-tight">
              {metric.value}
            </h3>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">
              <FiTrendingUp size={10} className="text-[#EA580C]" />
              {metric.change}
            </span>
          </div>
          <div
            className={`p-4 rounded-xl border ${metric.color} flex-shrink-0 shadow-inner`}
          >
            {metric.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStats;
