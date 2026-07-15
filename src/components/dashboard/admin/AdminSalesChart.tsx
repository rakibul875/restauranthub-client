"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const salesData = [
  { name: "Jan", sales: 2400 },
  { name: "Feb", sales: 1398 },
  { name: "Mar", sales: 9800 },
  { name: "Apr", sales: 3908 },
  { name: "May", sales: 4800 },
  { name: "Jun", sales: 14249 },
];

const AdminSalesChart = () => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
      <div className="space-y-1">
        <h3 className="text-base font-black text-gray-950 uppercase tracking-wider">
          Revenue Analytics
        </h3>
        <p className="text-xs text-gray-400 font-medium">
          Graphical progression chart of company transactions and cash flow.
        </p>
      </div>

   
      <div className="w-full h-80 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={salesData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EA580C" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#EA580C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F3F4F6"
            />
            <XAxis
              dataKey="name"
              stroke="#9CA3AF"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#FFFFFF",
                borderRadius: "12px",
                borderColor: "#E5E7EB",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
              }}
              labelStyle={{
                fontWeight: "bold",
                color: "#111827",
                fontSize: "12px",
              }}
              itemStyle={{
                color: "#EA580C",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            />
            
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#EA580C"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#colorSales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminSalesChart;
