import React from "react";
import { Minus, Plus, ChevronRight } from "lucide-react";

export default function Cart() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] py-6 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6">

        {/* LEFT SECTION */}
        <div className="lg:w-[65%] w-full space-y-6">

          {/* EXPRESS DELIVERY */}
          <div className="bg-[#d9e7ef] border border-[#c5d6df] rounded-lg p-4">
            <div className="flex items-center gap-2 font-semibold text-[#1b4b5a]">
              <span>Express Delivery</span>
              <span className="text-xs bg-[#c6e6ff] px-2 py-[2px] rounded-full">
                ⚡ Same Day
              </span>
            </div>

            {/* PRODUCT CARD */}
            <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=300"
                  alt="Roses"
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                    10 Red Roses Bouquet
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-semibold text-gray-900">
                      ₹ 695
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹ 770
                    </span>
                  </div>
                </div>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center bg-[#0e4a5a] text-white rounded-md overflow-hidden w-fit">
                <button className="px-3 py-2 hover:bg-[#0c3f4d]">
                  <Minus size={16} />
                </button>
                <span className="px-4 text-sm">1</span>
                <button className="px-3 py-2 hover:bg-[#0c3f4d]">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* ADD ONS */}
          <div className="bg-[#f2e6dd] rounded-lg p-4 sm:p-5">
            <h2 className="font-semibold text-gray-800 mb-4">
              Your last minute add-ons
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              
              {[1,2,3,4].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[200px] sm:min-w-[220px] bg-white rounded-lg border border-gray-200 p-3 relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=300"
                    className="w-full h-32 sm:h-36 object-cover rounded-md"
                    alt=""
                  />
                  <p className="text-sm mt-2 text-gray-700">
                    Sample Product Name
                  </p>
                  <p className="font-semibold mt-1">₹ 99</p>
                  <button className="mt-3 w-full border border-[#0e4a5a] text-[#0e4a5a] py-2 rounded-md text-sm hover:bg-[#0e4a5a] hover:text-white transition">
                    Add to Cart
                  </button>

                  {index === 3 && (
                    <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hidden sm:block" />
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* RIGHT BILL SUMMARY */}
        <div className="lg:w-[35%] w-full">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm relative lg:sticky lg:top-6">

            {/* SAVE BADGE */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e0f2ff] text-[#0e4a5a] text-xs px-3 py-1 rounded-full border border-[#b6e0ff] whitespace-nowrap">
              You have saved ₹ 75 on this order
            </div>

            <div className="flex justify-between items-center mt-4">
              <h2 className="font-semibold text-gray-800">
                Bill Summary
              </h2>
              <span className="text-sm text-gray-500">1 Item</span>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Total</span>
                <div className="flex gap-2">
                  <span className="text-gray-400 line-through">₹ 770</span>
                  <span className="font-medium">₹ 695</span>
                </div>
              </div>

              <div className="border-t pt-3 flex justify-between font-semibold text-base">
                <span>Grand Total</span>
                <span>₹ 695</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-[#0e4a5a] hover:bg-[#0c3f4d] text-white py-3 rounded-md font-medium transition">
              PLACE ORDER
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}