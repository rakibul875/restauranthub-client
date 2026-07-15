"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,  } from 'recharts';


const data = [
  { month: 'Jan', amount: 120 },
  { month: 'Feb', amount: 210 },
  { month: 'Mar', amount: 150 },
  { month: 'Apr', amount: 340 },
  { month: 'May', amount: 229 },
  { month: 'Jun', amount: 290 },
];

const OrderChart = () => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
      <div className="space-y-1">
        <h3 className="text-base font-black text-gray-950 uppercase tracking-wider">Monthly Spending</h3>
        <p className="text-xs text-gray-400 font-medium">Visual breakdown of your food orders overview per month.</p>
      </div>

      
      <div className="w-full h-72 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
            <XAxis dataKey="month" stroke="#9CA3AF" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip 
              cursor={{ fill: '#F9FAFB' }}
              contentStyle={{ background: '#FFFFFF', borderRadius: '12px', borderColor: '#E5E7EB', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}
              labelStyle={{ fontWeight: 'bold', color: '#111827', fontSize: '12px' }}
              itemStyle={{ color: '#EA580C', fontWeight: 'bold', fontSize: '12px' }}
            />
     
            <Bar dataKey="amount" fill="#EA580C" radius={[6, 6, 0, 0]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderChart;