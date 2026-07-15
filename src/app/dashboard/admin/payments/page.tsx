import { getAllPayments } from "@/lib/get/payment";
import React from "react";
import {
  FiDollarSign,
  FiActivity,
  FiUsers,
  FiCalendar,
  FiMail,
  FiLayers,
} from "react-icons/fi";


interface PaymentItem {
  _id: string;
  sessionId: string;
  userName: string;
  amount: number;
  userId: string;
  userEmail: string;
  subscriptionAt: string;
}

const PaymentPage = async () => {
  const paymentsData: PaymentItem[] = (await getAllPayments()) || [];

  
  const totalRevenue = paymentsData.reduce(
    (acc, curr) => acc + (curr.amount || 0),
    0,
  );
  const totalTransactions = paymentsData.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/40 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto space-y-8">
 
        <div className="border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            All Payments Ledger
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            Master overview of all customer subscriptions, order checkouts, and
            system revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Gross Revenue
              </p>
              <h3 className="text-2xl font-black text-gray-950 tracking-tight">
                ${totalRevenue.toFixed(2)}
              </h3>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-inner">
              <FiDollarSign size={22} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Total Sales Count
              </p>
              <h3 className="text-2xl font-black text-gray-950 tracking-tight">
                {totalTransactions} Txns
              </h3>
            </div>
            <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-100 text-[#EA580C] shadow-inner">
              <FiActivity size={22} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4 sm:col-span-2 lg:col-span-1">
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Active Customers
              </p>
              <h3 className="text-2xl font-black text-gray-950 tracking-tight">
                {new Set(paymentsData.map((p) => p.userId)).size} Users
              </h3>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-inner">
              <FiUsers size={22} />
            </div>
          </div>
        </div>

        
        {paymentsData.length > 0 ? (
          <>
           
            <div className="hidden md:block bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-black text-gray-400 uppercase tracking-wider">
                    <th className="py-4 px-6">Customer Details</th>
                    <th className="py-4 px-6">Stripe Session ID</th>
                    <th className="py-4 px-6">Transaction Date</th>
                    <th className="py-4 px-6 text-right">Settled Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm font-medium text-gray-600">
                  {paymentsData.map((payment) => {
                    const formattedDate = new Date(
                      payment.subscriptionAt,
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    return (
                      <tr
                        key={payment._id}
                        className="hover:bg-gray-50/40 transition-colors"
                      >
                      
                        <td className="py-4 px-6">
                          <div className="space-y-0.5">
                            <p className="text-gray-900 font-extrabold">
                              {payment.userName || "Anonymous"}
                            </p>
                            <p className="text-xs text-gray-400 font-normal">
                              {payment.userEmail}
                            </p>
                          </div>
                        </td>
                        
                        <td
                          className="py-4 px-6 font-mono text-xs text-gray-400 max-w-[220px] truncate"
                          title={payment.sessionId}
                        >
                          {payment.sessionId}
                        </td>
                        
                        <td className="py-4 px-6 text-xs text-gray-500">
                          {formattedDate}
                        </td>
                       
                        <td className="py-4 px-6 text-right">
                          <span className="font-black text-[#EA580C] bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-100/50">
                            ${(payment.amount || 0).toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

        
            <div className="block md:hidden space-y-4">
              {paymentsData.map((payment) => {
                const formattedDate = new Date(
                  payment.subscriptionAt,
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <div
                    key={payment._id}
                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded uppercase tracking-wide">
                          User ID: {payment.userId?.slice(-6)}
                        </span>
                        <h4 className="font-extrabold text-gray-900 text-base pt-0.5">
                          {payment.userName}
                        </h4>
                        <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
                          <FiMail size={12} />
                          {payment.userEmail}
                        </p>
                      </div>
                      <span className="font-black text-sm text-[#EA580C] bg-orange-50 px-2.5 py-1 rounded-xl border border-orange-100/50">
                        ${(payment.amount || 0).toFixed(2)}
                      </span>
                    </div>

                    <hr className="border-gray-50" />

                    <div className="space-y-2 text-[11px] font-semibold text-gray-500">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={13} className="text-gray-400" />
                        <span>Date: {formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-gray-400 bg-gray-50 p-2 rounded-xl border border-gray-100 truncate">
                        <FiLayers
                          size={13}
                          className="text-gray-400 flex-shrink-0"
                        />
                        <span className="truncate">{payment.sessionId}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4 max-w-md mx-auto">
            <div className="flex justify-center text-gray-300">
              <FiDollarSign size={56} className="stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-gray-800">
                No Revenue Logged
              </h3>
              <p className="text-xs text-gray-400 font-medium px-6">
                There are no transaction logs records inside the database yet.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
