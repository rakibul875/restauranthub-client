"use client";

import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

// FAQ এর জন্য ইন্টারফেস টাইপ
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const Support: React.FC = () => {
  // FAQ সেকশনের স্টেট (কোনটি ওপেন থাকবে তা ট্র্যাক করার জন্য)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ফর্মের স্টেট
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How can I track my food order?",
      answer:
        "You can track your order in real-time by visiting the 'Orders' page from the navigation bar. You will see the live status of your kitchen preparation and delivery rider.",
    },
    {
      id: 2,
      question: "What is the average delivery time?",
      answer:
        "Our standard delivery time is under 25-30 minutes depending on your location and the restaurant's preparation time.",
    },
    {
      id: 3,
      question: "Can I cancel or change my order?",
      answer:
        "Orders can only be canceled within 2 minutes of placing them. After the restaurant accepts the order, cancellations are not allowed.",
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! Your message has been sent successfully.`,
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-gray-50 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ১. হেডার সেکশন */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Customer <span className="text-[#A64B16]">Support</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Have a question or facing an issue with your order? We are here to
            help you 24/7.
          </p>
        </div>

        {/* ২. কন্টাক্ট কার্ড এবং ফর্ম গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* বাম পাশে: কন্টাক্ট ইনফরমেশন */}
          <div className="space-y-4 lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="p-3 bg-orange-50 rounded-xl text-[#A64B16]">
                <FiPhone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Call Us Directly
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">+880 1234-567890</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="p-3 bg-orange-50 rounded-xl text-[#A64B16]">
                <FiMail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Email Support
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  support@restauranthub.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="p-3 bg-orange-50 rounded-xl text-[#A64B16]">
                <FiClock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Working Hours
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Mon - Sun: 09:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* ডান পাশে: কন্টাক্ট মেসেজ ফর্ম */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#A64B16] focus:bg-white transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#A64B16] focus:bg-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#A64B16] focus:bg-white transition-all resize-none"
                  placeholder="Describe your issue or query here..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#A64B16] hover:bg-[#8d3e12] text-white font-medium text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>

        {/* ৩. FAQ সেকশন (অ্যাকর্ডিয়ন) */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-gray-800 hover:bg-gray-50/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === faq.id ? (
                    <FiChevronUp className="text-gray-500" />
                  ) : (
                    <FiChevronDown className="text-gray-500" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === faq.id ? "max-h-40 border-t border-gray-50" : "max-h-0"}`}
                >
                  <p className="px-6 py-4 text-xs sm:text-sm text-gray-600 leading-relaxed bg-gray-50/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
