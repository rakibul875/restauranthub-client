import React from "react";
import { FiSliders } from "react-icons/fi";

const Reviews = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 space-y-4">
      
      <div className="bg-orange-50 p-4 rounded-full border border-orange-100 text-[#EA580C] animate-spin [animation-duration:3s]">
        <FiSliders size={32} className="stroke-[1.5]" />
      </div>

     
      <div className="space-y-1">
        <h3 className="text-lg font-black text-gray-950 tracking-tight uppercase">
          Working on it
        </h3>
        <p className="text-xs text-gray-400 font-medium max-w-xs mx-auto">
          We are building the reviews dashboard. This section will be available
          very soon!
        </p>
      </div>
    </div>
  );
};

export default Reviews;
