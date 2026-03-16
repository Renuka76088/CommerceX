import React, { useState } from "react";

import Rosei1 from "../assets/Rose12.png";
import Rosei2 from "../assets/Rose12 (1).png";
import Rosei3 from "../assets/Rose12 (2).png";
import Mixflower from "../assets/MixFlower (1).png";
import Seasonal from "../assets/Seasonale (1).jpg";
import Premium from "../assets/Premium (1).jpg";
import Mixlily from "../assets/Rose (1).png";
import WhiteLily from "../assets/White Lily (1).jpg";
import PinkLily from "../assets/PinkLily (1).avif";

// Sidebar data with categories, subcategories, and products
const sidebarData = [
  {
    category: "Rose Bouquets",
    subcategories: [
      {
        name: "12 Red Rose Bouquet",
        products: [{ title: "12 Red Roses Bouquet", price: "₹595", img: Rosei1 }],
      },
      {
        name: "25 Red Rose Bouquet",
        products: [{ title: "Pastel Blooms Of Serenity", price: "₹595", img: Rosei2 }],
      },
      {
        name: "50 Red Rose Bouquet",
        products: [{ title: "Whispers Of Affection Red Roses", price: "₹695", img: Rosei3 }],
      },
      {
        name: "100 Red Rose Bouquet",
        products: [{ title: "Elegant Red Roses Bouquet", price: "₹799", img: Rosei1 }],
      },
    ],
  },
  {
    category: "Mixed Bouquets",
    subcategories: [
      {
        name: "Mixed Flower Bouquet",
        products: [{ title: "Mixed Flower Basket", price: "₹899", img: Mixflower }],
      },
      {
        name: "Seasonal Flower Bouquet",
        products: [{ title: "Royal Red Roses Collection", price: "₹999", img: Seasonal }],
      },
      {
        name: "Premium Mixed Bouquet",
        products: [{ title: "Premium Mixed Bouquet", price: "₹1199", img: Premium }],
      },
    ],
  },
  {
    category: "Lily Bouquets",
    subcategories: [
      {
        name: "White Lily Bouquet",
        products: [{ title: "White Lily Special", price: "₹699", img: WhiteLily }],
      },
      {
        name: "Pink Lily Bouquet",
        products: [{ title: "Pink Lily Delight", price: "₹799", img: Rosei2 }],
      },
      {
        name: "Mixed Lily Bouquet",
        products: [{ title: "Mixed Lily Collection", price: "₹899", img: Mixlily }],
      },
    ],
  },
  {
    category: "Flower Boxes",
    subcategories: [
      { name: "Red Rose Box", products: [{ title: "Red Rose Box", price: "₹999", img: Rosei1 }] },
      { name: "Luxury Flower Box", products: [{ title: "Luxury Box", price: "₹1299", img: Rosei2 }] },
      { name: "Heart Shape Flower Box", products: [{ title: "Heart Box", price: "₹1499", img: Rosei3 }] },
    ],
  },
  {
    category: "Flower Baskets",
    subcategories: [
      { name: "Rose Basket", products: [{ title: "Rose Basket", price: "₹799", img: Rosei1 }] },
      { name: "Mixed Flower Basket", products: [{ title: "Mixed Basket", price: "₹899", img: Rosei2 }] },
      { name: "Premium Flower Basket", products: [{ title: "Premium Basket", price: "₹1199", img: Rosei3 }] },
    ],
  },
];

const Flowersproducts = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  // Products to display
  const displayedProducts =
    activeCategory && activeSubcategory
      ? sidebarData
          .find((c) => c.category === activeCategory)
          .subcategories.find((s) => s.name === activeSubcategory).products
      : sidebarData.flatMap((c) => c.subcategories.flatMap((s) => s.products));

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white rounded-xl shadow p-4 flex-shrink-0">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>

          <div className="flex flex-col gap-2">
            {sidebarData.map((cat, i) => (
              <div key={i}>
                <button
                  onClick={() =>
                    setActiveCategory(activeCategory === cat.category ? null : cat.category)
                  }
                  className={`flex justify-between items-center w-full px-4 py-2 rounded-lg font-medium text-left transition ${
                    activeCategory === cat.category
                      ? "bg-pink-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-pink-500 hover:text-white"
                  }`}
                >
                  {cat.category}
                  <span className={`transition-transform ${activeCategory === cat.category ? "rotate-90" : ""}`}>
                    ▶
                  </span>
                </button>

                {/* Subcategories */}
                {activeCategory === cat.category && (
                  <div className="flex flex-col ml-4 mt-2 gap-1">
                    {cat.subcategories.map((sub, j) => (
                      <button
                        key={j}
                        onClick={() => setActiveSubcategory(sub.name)}
                        className={`text-sm px-3 py-1 rounded-full transition text-left w-full ${
                          activeSubcategory === sub.name
                            ? "bg-pink-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-pink-400 hover:text-white"
                        }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            Home /{" "}
            <span className="text-gray-700 font-medium">
              {activeSubcategory || activeCategory || "All Flowers"}
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {activeSubcategory || activeCategory || "Explore Our Flowers"}
            </h1>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {displayedProducts.map((product, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition group">
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-40 md:h-48 lg:h-52 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="p-3">
                  <h3 className="text-sm md:text-base font-semibold text-gray-700 line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 text-sm">{product.price}</span>
                      <span className="text-green-600 text-[10px] bg-green-100 px-2 py-[1px] rounded w-fit mt-1">
                        10% OFF
                      </span>
                    </div>

                    <button className="text-xs md:text-sm bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flowersproducts;
