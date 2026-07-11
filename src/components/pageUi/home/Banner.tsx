import React from "react";
import Image from "next/image";
import Link from "next/link";
import BannerImage from "@/assets/image/BannerImage.jpg";

const Banner: React.FC = () => {
  return (
    <section className="w-full bg-white pt-24 pb-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Delicious meals, <br />
            delivered to your <span className="text-[#EA580C]">doorstep</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
            Experience the best local flavors from top-rated restaurants,
            curated for your sophisticated palate with effortless luxury.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="/orders"
              className="w-full sm:w-auto text-center bg-[#EA580C] hover:bg-[#c2410c] text-white font-medium px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Order Now
            </Link>
            <Link
              href="/discover"
              className="w-full sm:w-auto text-center bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-8 py-3.5 rounded-xl transition-all"
            >
              Browse Foods
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={BannerImage}
              alt="Delicious salmon meal with salad"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-4 sm:left-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-50 flex items-center space-x-3 animate-bounce-slow">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#EA580C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">
                Hot Delivery
              </p>
              <p className="text-[11px] text-gray-500 font-medium">
                Under 25 mins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
