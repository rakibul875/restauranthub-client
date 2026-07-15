import OrderChart from '@/components/dashboard/customer/OrderChart';
import OverviewStats from '@/components/dashboard/customer/OverviewStats';
import RecentActivity from '@/components/dashboard/customer/RecentActivity';
import React from 'react';


const Customer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/40 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto space-y-8">
        
        
        <div className="border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Customer Dashboard
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            Welcome back! Here is a quick snapshot of your activities, orders, and spending.
          </p>
        </div>

       
        <OverviewStats />

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
         
          <div className="lg:col-span-2">
            <OrderChart />
          </div>

          
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Customer;