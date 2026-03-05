import React from "react";

const categories = [
  {
    name: "Personalised Gifts",
    img: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
  },
  {
    name: "Flowers",
    img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d",
  },
  {
    name: "Gift Hampers",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
  },
  {
    name: "Cakes",
    img: "https://images.unsplash.com/photo-1607478900766-efe13248b125",
  },
  {
    name: "Anniversary Gifts",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    name: "Gifts for Bride",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
  },
  {
    name: "Home Decor",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
];

const products = [
  {
    title: "Personal Glow-Up Night Light",
    price: "₹899",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Leafy Luxuries",
    price: "₹3199",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Blooming Love Personalised Gift Set",
    price: "₹1799",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    title: "Romantic Rose Couple Mug",
    price: "₹1149",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    title: "Luxury Wedding Hamper",
    price: "₹2499",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48",
  },
  {
    title: "Couple Photo Frame",
    price: "₹999",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    title: "Romantic Rose Bouquet",
    price: "₹1299",
    img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d",
  },
  {
    title: "Premium Flower Box",
    price: "₹1899",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Premium Flower Box",
    price: "₹1899",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Premium Flower Box",
    price: "₹1899",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Premium Flower Box",
    price: "₹1899",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Premium Flower Box",
    price: "₹1899",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Premium Flower Box",
    price: "₹1899",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Premium Flower Box",
    price: "₹1899",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Premium Flower Box",
    price: "₹1899",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Premium Flower Box",
    price: "₹1899",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
];

const DecorationPage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
<div className="w-72 bg-white shadow-lg p-5 sticky top-4 self-start max-h-[calc(100vh-40px)]  rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Filter</h2>

        {/* Price */}
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm mb-6">

          <div className="flex justify-between text-sm mb-3">
            <span className="font-medium">Price</span>
            <span className="text-gray-400">-</span>
          </div>

          <input type="range" className="w-full accent-pink-500" />

          <div className="flex justify-between text-xs mt-2 text-gray-500">
            <span>₹0</span>
            <span>₹6500+</span>
          </div>

          <div className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="₹ 0"
              className="border border-gray-200 rounded-lg px-2 py-1 w-1/2 text-sm focus:ring-2 focus:ring-pink-300 outline-none"
            />
            <input
              type="text"
              placeholder="₹ 21000"
              className="border border-gray-200 rounded-lg px-2 py-1 w-1/2 text-sm focus:ring-2 focus:ring-pink-300 outline-none"
            />
          </div>

        </div>

        {/* Filter Sections */}
        {["Gift Type", "Flower Type", "Color", "Flavour"].map(
          (item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-50 hover:bg-pink-50 transition p-3 rounded-xl shadow-sm mb-3 cursor-pointer"
            >
              <span className="text-sm font-medium">{item}</span>
              <span className="text-lg text-gray-400">+</span>
            </div>
          )
        )}

      </div>

      {/* Right Content */}
      <div className="flex-1 p-8">

        {/* Heading */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-3xl font-semibold">
              Elegant Wedding Gifts
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
              <span>40 of 809 Gifts</span>
              <span className="text-green-600 font-semibold">⭐ 4.8</span>
              <span className="text-blue-600">281 Reviews</span>
            </div>
          </div>

          <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-pink-300 outline-none">
            <option>Recommended</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>

        {/* Categories */}
        <div className="flex gap-6 overflow-x-auto pb-5">

          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[110px] cursor-pointer group"
            >
              <img
                src={cat.img}
                className="w-20 h-10 rounded-xl object-cover shadow-md group-hover:scale-110 transition duration-300"
              />

              <span className="text-xs mt-2 text-center group-hover:text-pink-500 transition">
                {cat.name}
              </span>
            </div>
          ))}

        </div>

        {/* Product Grid */}
     <div className="grid grid-cols-4 gap-6 mt-4">

  {products.map((product, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >

      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={product.img}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4">

        <h3 className="text-sm font-semibold text-gray-700 group-hover:text-pink-500 transition">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mt-2">

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">
              {product.price}
            </span>

            <span className="text-green-600 text-[10px] bg-green-100 px-2 py-[2px] rounded">
              10% OFF
            </span>
          </div>

          <button className="text-xs bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-md transition">
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