import React from "react";

import Pastelblooms1 from "../assets/pastel-blooms-of-serenity.avif";
import Roses1 from "../assets/Red Rose.avif";
import PinkRoses1 from "../assets/whispers-of-affection-pink-roses-bouquet.avif";
import ChicRose1 from "../assets/chic-rose-birthday-box-9764130fl-A.avif";
import Enchanting1 from "../assets/enchanting-flower-for-mom-9779500fl-A.avif";
import Blaze1 from "../assets/IMG_6743_0.avif";
import Blush1 from "../assets/a-love-note-in-pink-roses-9716450fl-A_0.avif";
import Bouquet1 from "../assets/a-bouquet-of-tender-moments-9717590fl-B_0.avif";

const categories = [
  { name: "Roses", img: Roses1 },
  { name: "Orchids", img: Enchanting1 },
  { name: "Birthday Flowers", img: ChicRose1 },
  { name: "Anniversary Flowers", img: PinkRoses1 },
  { name: "Gerberas", img: Blush1 },
  { name: "Mixed Bouquets", img: Pastelblooms1 },
];

const products = [
  { title: "Pastel Blooms Of Serenity", price: "₹595", img: Pastelblooms1 },
  { title: "10 Red Roses Bouquet", price: "₹595", img: Roses1 },
  { title: "Whispers Of Affection Pink Roses", price: "₹695", img: PinkRoses1 },
  { title: "Chic Rose Birthday Box", price: "₹795", img: ChicRose1 },
  { title: "Enchanting Flower Basket", price: "₹899", img: Enchanting1 },
  { title: "Blaze Red Velvet Roses", price: "₹799", img: Blaze1 },
  { title: "Love Note Pink Roses", price: "₹699", img: Blush1 },
  { title: "Tender Moments Bouquet", price: "₹899", img: Bouquet1 },
];

const DecorationPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

          <div>
            <h1 className="text-xl md:text-3xl font-semibold">
              Beautiful Flower Bouquets
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-2">
              <span>40 Flower Products</span>
              <span className="text-green-600 font-semibold">⭐ 4.8</span>
              <span className="text-blue-600">281 Reviews</span>
            </div>
          </div>

          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full md:w-auto">
            <option>Recommended</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>

        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-4">

          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[90px] cursor-pointer group"
            >
              <img
                src={cat.img}
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shadow-md group-hover:scale-110 transition"
              />

              <span className="text-xs mt-2 text-center">
                {cat.name}
              </span>
            </div>
          ))}

        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">

          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition group"
            >

              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={product.img}
                  className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-3">

                <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between mt-2">

                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 text-sm">
                      {product.price}
                    </span>

                    <span className="text-green-600 text-[10px] bg-green-100 px-2 py-[1px] rounded w-fit">
                      10% OFF
                    </span>
                  </div>

                  <button className="text-xs bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded">
                    Add
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default DecorationPage;