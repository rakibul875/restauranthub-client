import { redirect } from "next/navigation";
import type { Stripe } from "stripe";
import Link from "next/link";

import { stripe } from "@/lib/stripe";
import { postSubscription } from "@/lib/post/subscription";
import { postOrder } from "@/lib/post/order";
import {
  FiCheckCircle,
  FiMail,
  FiShoppingBag,
  FiArrowRight,
} from "react-icons/fi";

interface Subscription {
  userName: string;
  amount: number;
  userId: string;
  userEmail: string;
  sessionId: string;
}

interface SuccessPageProps {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export default async function Success({ searchParams }: SuccessPageProps) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const session: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const { status, metadata, customer_details } = session;

  if (status === "open") {
    redirect("/");
  }

  if (status === "complete" && metadata) {
    const subscriptionData: Subscription = {
      sessionId: session_id ?? "",
      userName: metadata.userName ?? "",
      amount: Number(metadata.price) ?? 0,
      userId: metadata.userId ?? "",
      userEmail: metadata.userEmail ?? "",
    };

    const orderData = {
      productImage: metadata.productImage ?? "",
      userId: metadata.userId ?? "",
      sessionId: session_id ?? "",
      productName: metadata.productName ?? "",
      productPrice: metadata.price ?? "",
      status: metadata.status ?? "",
    };

    await postSubscription(subscriptionData);
    await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/my-cart/user/${metadata?.userId}`,
      {
        method: "DELETE",
      },
    );
    await postOrder(orderData);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/40 to-gray-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 shadow-xl p-8 relative overflow-hidden text-center space-y-6">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-25 scale-75" />
              <div className="relative bg-emerald-50 p-4 rounded-full border border-emerald-100 text-emerald-500">
                <FiCheckCircle size={44} className="stroke-[1.5]" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-gray-950 tracking-tight">
              Payment Successful!
            </h1>
            <p className="text-xs text-gray-400 font-medium">
              Thank you for your order. Your payment has been processed safely.
            </p>
          </div>

          <hr className="border-gray-100" />

          {metadata.productName && (
            <div className="bg-gray-50/70 border border-gray-100 p-4 rounded-2xl flex items-center gap-4 text-left">
              {metadata.productImage ? (
                <div className="w-14 h-14 bg-white rounded-xl border border-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    src={metadata.productImage}
                    alt={metadata.productName}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
                  <FiShoppingBag size={20} />
                </div>
              )}
              <div className="min-w-0 flex-grow">
                <h4 className="font-extrabold text-gray-900 text-sm truncate">
                  {metadata.productName}
                </h4>
                <p className="text-xs font-black text-[#EA580C] mt-0.5">
                  ${Number(metadata.price).toFixed(2)}
                </p>
              </div>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-md uppercase tracking-wide">
                Paid
              </span>
            </div>
          )}

          <div className="bg-orange-50/40 border border-orange-100/50 p-4 rounded-2xl text-xs font-medium text-gray-600 leading-relaxed text-left flex gap-3">
            <FiMail size={18} className="text-[#EA580C] flex-shrink-0 mt-0.5" />
            <div>
              A confirmation email will be sent to{" "}
              <span className="font-bold text-gray-900">
                {customer_details?.email}
              </span>
              . If you have any questions, please contact us at{" "}
              <a
                href="mailto:orders@example.com"
                className="text-[#EA580C] font-semibold hover:underline"
              >
                orders@example.com
              </a>
              .
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/orders"
              className="w-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-sm py-3.5 rounded-xl shadow-md shadow-orange-500/10 transition-all flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>Continue Shopping</span>
              <FiArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return redirect("/");
}
