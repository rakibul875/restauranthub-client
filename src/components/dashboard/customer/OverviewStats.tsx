import React from 'react';
import { FiShoppingBag, FiCreditCard, FiHeart, FiTrendingUp } from 'react-icons/fi';

const OverviewStats = () => {
  const stats = [
    { id: 1, label: 'Total Spent', value: '$849.50', change: '+12.5%', icon: <FiCreditCard size={20} />, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { id: 2, label: 'Total Orders', value: '24 Items', change: '+4 this month', icon: <FiShoppingBag size={20} />, color: 'text-[#EA580C] bg-orange-50 border-orange-100' },
    { id: 3, label: 'Saved Favorites', value: '18 Foods', change: 'In wishlist', icon: <FiHeart size={20} />, color: 'text-rose-600 bg-rose-50 border-rose-100' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
            <h3 className="text-2xl font-black text-gray-950 tracking-tight">{stat.value}</h3>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">
              <FiTrendingUp size={10} className="text-[#EA580C]" />
              {stat.change}
            </span>
          </div>
          <div className={`p-4 rounded-xl border ${stat.color} flex-shrink-0 shadow-inner`}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewStats;