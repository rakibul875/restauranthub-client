"use client"; // কুপন কোড কপি করার ইভেন্ট হ্যান্ডল করার জন্য এটি দরকার

import React from 'react';
import Link from 'next/link';
import { FiCopy, FiClock, FiTag } from 'react-icons/fi';

// ১. অফার ডাটার জন্য টাইপ ডিফাইন করা হলো
interface Offer {
    id: number;
    title: string;
    description: string;
    code: string;
    expiry: string;
    bgClass: string;
}

const OfferPage: React.FC = () => {
    
    // ২. স্ট্রংলি টাইপড ডামি ডেটা অ্যারে
    const offers: Offer[] = [
        {
            id: 1,
            title: "Flat 50% OFF on First Order",
            description: "Welcome to RestaurantHub! Get half off on your very first meal purchase.",
            code: "WELCOME50",
            expiry: "Valid till 31st July",
            bgClass: "from-orange-500 to-amber-600",
        },
        {
            id: 2,
            title: "Free Delivery on Orders Above $30",
            description: "Hungry? Order your favorite food and enjoy zero delivery charges.",
            code: "FREESHIP",
            expiry: "Limited time offer",
            bgClass: "from-red-500 to-pink-600",
        },
        {
            id: 3,
            title: "Buy 1 Get 1 Free - Weekend Feast",
            description: "Order any large pizza or burger combo this weekend and get another absolutely free!",
            code: "BOGOFEAST",
            expiry: "Ends this Sunday",
            bgClass: "from-purple-600 to-indigo-600",
        },
        {
            id: 4,
            title: "Save $10 on Traditional Platters",
            description: "Craving authentic items? Get instant discount on all platters.",
            code: "PLATTER10",
            expiry: "Valid all month",
            bgClass: "from-teal-500 to-emerald-600",
        }
    ];

    // ৩. কুপন কোড কপি করার ফাংশন
    const handleCopyCode = (code: string): void => {
        if (typeof window !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(code);
            alert(`Code "${code}" copied to clipboard!`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            
            {/* হিরো ব্যানার সেকশন */}
            <div className="w-full bg-gradient-to-r from-[#A64B16] to-[#cd6122] text-white py-12 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                    Delicious Deals & Offers 🍔
                </h1>
                <p className="text-sm md:text-lg text-orange-100 max-w-xl mx-auto">
                    Save big on your favorite meals. Explore our exclusive discounts and grab them before they are gone!
                </p>
            </div>

            {/* মেইন কন্টেন্ট কন্টেইনার */}
            <div className="max-w-6xl mx-auto px-4 mt-10">
                
                {/* সেকশন টাইটেল */}
                <div className="flex items-center space-x-2 mb-6 border-b border-gray-200 pb-3">
                    <FiTag className="text-[#A64B16] text-xl" />
                    <h2 className="text-xl font-bold text-gray-800">Available Promo Codes</h2>
                </div>

                {/* অফার কার্ড গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offers.map((offer: Offer) => (
                        <div 
                            key={offer.id} 
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
                        >
                            {/* কার্ডের উপরের রঙিন অংশ */}
                            <div className={`bg-gradient-to-r ${offer.bgClass} p-6 text-white`}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="bg-white/20 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                                        Exclusive Offer
                                    </span>
                                    <div className="flex items-center text-xs text-white/90 space-x-1">
                                        <FiClock />
                                        <span>{offer.expiry}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                                <p className="text-sm text-white/80 line-clamp-2">{offer.description}</p>
                            </div>

                            {/* কুপন কোড ও অ্যাকশন সেকশন */}
                            <div className="p-4 bg-gray-50 flex items-center justify-between gap-4 border-t border-dashed border-gray-200">
                                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg px-4 py-2 flex items-center justify-between w-full">
                                    <span className="font-mono font-bold text-gray-700 tracking-wider">
                                        {offer.code}
                                    </span>
                                    <button 
                                        onClick={() => handleCopyCode(offer.code)}
                                        className="text-gray-400 hover:text-[#A64B16] transition-colors p-1"
                                        title="Copy Code"
                                    >
                                        <FiCopy size={16} />
                                    </button>
                                </div>

                                <Link 
                                    href="/discover"
                                    className="bg-[#A64B16] hover:bg-[#8d3e12] text-white font-medium text-sm px-5 py-2.5 rounded-lg whitespace-nowrap transition-colors shadow-sm"
                                >
                                    Order Now
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

                {/* টার্মস অ্যান্ড কন্ডিশনস */}
                <div className="mt-12 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 text-center text-sm">
                    💡 <strong>Terms & Conditions Apply:</strong> Offers cannot be combined with other active discounts or wallet promotions. Minimum order values may apply.
                </div>

            </div>
        </div>
    );
};

export default OfferPage;