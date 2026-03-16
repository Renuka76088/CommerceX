import React, { useState } from "react";

import Flower1 from "../assets/Rose (1).png";
import Flower3 from "../assets/Rose (3).png";
import Flower4 from "../assets/Rose (4).png";
import Flower5 from "../assets/Rose (5).png";
import Flower6 from "../assets/Rose (6).png";
import Carnition from "../assets/Carnition.png";

const categories = [
  { name: "All Bouquets", img: Flower1 },
  { name: "Rose Bouquets", img: Flower1 },
  { name: "Carnation Bouquets", img: Flower3 },
  { name: "Gerbera Bouquets", img: Flower4 },
  { name: "Lily Bouquets", img: Flower6 },
  { name: "Orchid Bouquets", img: Flower5 },
];

// Products with category
const products = [
  { title: "Rose Bouquet 1", price: "₹595", img: Flower1, category: "Rose Bouquets" },

  { title: "10 Red Roses Bouquet", price: "₹595", img: Carnition, category: "Carnation Bouquets" },

  { title: "Chic Rose Birthday Box", price: "₹795", img: Flower4, category: "Gerbera Bouquets" },

  { title: "Blaze Red Velvet Roses", price: "₹799", img: Flower6, category: "Lily Bouquets" },

  { title: "Enchanting Flower Basket", price: "₹899", img: Flower5, category: "Orchid Bouquets" },
];

const FlowerBouquets = () => {

  const [selectedCategory, setSelectedCategory] = useState("All Bouquets");

  const filteredProducts =
    selectedCategory === "All Bouquets"
      ? products
      : products.filter((item) => item.category === selectedCategory);

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
              onClick={() => setSelectedCategory(cat.name)}
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

          {filteredProducts.map((product, i) => (
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

export default FlowerBouquets;