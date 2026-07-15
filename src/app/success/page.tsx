import { redirect } from "next/navigation";
import type { Stripe } from "stripe";

import { stripe } from "@/lib/stripe";
import { postSubscription } from "@/lib/post/subscription";
import { postOrder } from "@/lib/post/order";

interface Subscription {
  userName: string;
  amount: number;
  userId: string;
  userEmail: string;
  sessionId:string
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
      sessionId: session_id ?? "",
      productName: metadata.productName ?? "",
      productPrice: metadata.price ?? "",
      status: metadata.status ?? "",
    };

    

    await postSubscription(subscriptionData);
    await postOrder(orderData)

    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customer_details?.email}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }

  return redirect("/");
}
