
import React from "react";

import Rose1 from ".././../assets/Rose (1).png";
import Rose2  from ".././../assets/2Rose 25.webp";
import Rose3  from ".././../assets/Rose 25.jpg";



const categories = [
  { name: "25 Roses", img: Rose1 },
  { name: "25 Mix Roses Bouquet", img: Rose2 },
  { name: "Whispers Of Affection Pink Roses", img:Rose3 },

];

const products = [
  { title: "25 Red Roses", price: "₹595", img:Rose1 },
  { title: "25 Mix Roses Bouquet", price: "₹595", img: Rose2 },
  { title: "Whispers Of Affection Pink Roses", price: "₹695", img: Rose3},

  
];

const RedRoseBouquet25 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

          <div>
            <h1 className="text-xl md:text-3xl font-semibold">
              Beautiful 25 Rose Bouquets
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-2">
              <span>40 Rose Products</span>
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

export default RedRoseBouquet25;