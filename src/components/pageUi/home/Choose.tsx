import React from "react";
import { FiTruck, FiHeart, FiShield } from "react-icons/fi";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Choose: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <FiTruck size={24} />,
      title: "Fast Delivery",
      description:
        "Your favorite meals delivered in under 30 minutes, maintained at the perfect temperature.",
    },
    {
      id: 2,
      icon: <FiHeart size={24} />,
      title: "Fresh Food",
      description:
        "Made with high-quality ingredients sourced daily from local organic markets and premium suppliers.",
    },
    {
      id: 3,
      icon: <FiShield size={24} />,
      title: "Secure Payment",
      description:
        "Safe and encrypted transactions for your peace of mind with various modern payment methods.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We provide more than just food; we deliver a premium culinary
            experience right to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center border border-gray-100/50 hover:shadow-sm transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 text-[#A64B16] flex items-center justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
