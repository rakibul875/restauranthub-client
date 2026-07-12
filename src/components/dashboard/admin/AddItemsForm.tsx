"use client";

import React, { useState, useRef } from "react";
import { FiPlusCircle, FiImage, FiLoader, FiTrash2 } from "react-icons/fi";


const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

interface FoodItemFormData {
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const AddItemsForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState<FoodItemFormData>({
    name: "",
    category: "Appetizer",
    price: 0,
    description: "",
    image: "",
  });

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!IMGBB_API_KEY) {
      console.error("ImgBB API Key is missing! Check your .env.local file.");
      alert("Configuration Error: API Key not found. Please check console.");
      return;
    }

    setIsUploading(true);

   
    const uploadData = new FormData();
    uploadData.append("image", file);

    try {
     
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: "POST",
        body: uploadData, 
      });

      const result = await response.json();

      if (result.success && result.data?.url) {
        setFormData((prev) => ({ ...prev, image: result.data.url }));
        console.log("Uploaded Image URL:", result.data.url);
      } else {
        console.error("ImgBB Error Response:", result);
        alert(`Upload Failed: ${result.error?.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Network Error during ImgBB upload:", error);
      alert("Network Error: Could not connect to ImgBB.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({ ...prev, image: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload a food image first!");
      return;
    }

    setIsSubmitting(true);
    try {
      
      alert("Food item added successfully!");
      setFormData({ name: "", category: "Appetizer", price: 0, description: "", image: "" });
      console.log("Submitting Food Item Data:", formData);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mt-24 my-12">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4 mb-6">
        <FiPlusCircle size={24} className="text-[#EA580C]" />
        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Add New Food Item</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
      
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700 block">Food Image</label>
          
          {formData.image ? (
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-200 shadow-inner">
              <img src={formData.image} alt="Food Preview" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-xl transition-colors shadow-md"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          ) : (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-48 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100/70 cursor-pointer transition-all space-y-2"
            >
              {isUploading ? (
                <>
                  <FiLoader size={28} className="text-[#EA580C] animate-spin" />
                  <span className="text-xs font-semibold text-gray-500">Uploading to ImgBB...</span>
                </>
              ) : (
                <>
                  <FiImage size={32} className="text-gray-400" />
                  <span className="text-xs font-bold text-gray-600">Click to upload food photo</span>
                </>
              )}
            </div>
          )}
          
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
            disabled={isUploading}
          />
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">Food Name</label>
            <input 
              type="text" name="name" required
              value={formData.name} onChange={handleChange}
              placeholder="e.g. Grilled Salmon Salad" 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all text-gray-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">Price ($)</label>
            <input 
              type="number" name="price" required step="0.01" min="0"
              value={formData.price} onChange={handleChange}
              placeholder="e.g. 14.99" 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all text-gray-800"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700">Category</label>
          <select 
            name="category"
            value={formData.category} onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all text-gray-800"
          >
            <option value="Appetizer">Appetizer</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700">Description</label>
          <textarea 
            name="description" rows={4} required
            value={formData.description} onChange={handleChange}
            placeholder="Describe the ingredients..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all text-gray-800 resize-none"
          />
        </div>

        <button 
          type="submit" 
          disabled={isUploading || isSubmitting}
          className="w-full bg-[#EA580C] hover:bg-[#c2410c] disabled:bg-gray-300 text-white font-bold text-sm py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2"
        >
          {isSubmitting ? <span>Adding Item...</span> : <span>Add Item to Menu</span>}
        </button>
      </form>
    </section>
  );
};

export default AddItemsForm;