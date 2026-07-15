import { auth } from "@/lib/auth";
import { getPayment } from "@/lib/get/my-payment";
import { headers } from "next/headers";
import React from "react";
import {
  FiCreditCard,
  FiMail,
  FiUser,
  FiCalendar,
  FiDollarSign,
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
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  const payments: PaymentItem[] = (await getPayment(userId)) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/40 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Payment History
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-medium">
            View all your past transactions, subscriptions, and payment
            receipts.
          </p>
        </div>

        {payments.length > 0 ? (
          <>
            <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-black text-gray-400 uppercase tracking-wider">
                    <th className="py-4 px-6">Transaction / Session ID</th>
                    <th className="py-4 px-6">User Details</th>
                    <th className="py-4 px-6">Date & Time</th>
                    <th className="py-4 px-6 text-right">Amount Paid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm font-medium text-gray-600">
                  {payments.map((payment) => {
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
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td
                          className="py-4 px-6 font-mono text-xs text-gray-400 max-w-[200px] truncate"
                          title={payment.sessionId}
                        >
                          {payment.sessionId}
                        </td>

                        <td className="py-4 px-6">
                          <div className="space-y-0.5">
                            <p className="text-gray-900 font-extrabold">
                              {payment.userName}
                            </p>
                            <p className="text-xs text-gray-400 font-normal">
                              {payment.userEmail}
                            </p>
                          </div>
                        </td>

                        <td className="py-4 px-6 text-xs text-gray-500">
                          {formattedDate}
                        </td>

                        <td className="py-4 px-6 text-right">
                          <span className="font-black text-[#EA580C] bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-100/60">
                            ${payment.amount.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="block md:hidden space-y-4">
              {payments.map((payment) => {
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
                        <div className="flex items-center gap-1.5 text-gray-900 font-extrabold text-base">
                          <FiUser className="text-gray-400" size={14} />
                          <span>{payment.userName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                          <FiMail size={12} />
                          <span>{payment.userEmail}</span>
                        </div>
                      </div>
                      <span className="font-black text-sm text-[#EA580C] bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100/50">
                        ${payment.amount.toFixed(2)}
                      </span>
                    </div>

                    <hr className="border-gray-50" />

                    <div className="space-y-2 text-[11px] font-semibold text-gray-500">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={14} className="text-gray-400" />
                        <span>Paid on: {formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-gray-400 bg-gray-50 p-2 rounded-xl border border-gray-100 truncate">
                        <span className="font-sans font-bold text-gray-500 flex-shrink-0">
                          ID:
                        </span>
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
              <FiCreditCard size={56} className="stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-gray-800">
                No payment records
              </h3>
              <p className="text-xs text-gray-400 font-medium px-6">
                You haven&apos;t made any transactions yet. Your completed
                payments will appear right here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
