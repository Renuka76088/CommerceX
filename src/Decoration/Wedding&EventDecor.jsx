import React from "react";

const categories = [
  {
    name: "Haldi Ceremony",
    img: "https://media.istockphoto.com/id/2127643694/photo/family-and-friends-showering-floral-blessings-on-bride-and-groom-during-haldi-ceremony.jpg?s=612x612&w=0&k=20&c=tasErwSSZggGvHRQFwrzNcB9At8Bys9lAM2kNjvYJY0=",
  },
  {
    name: "Mehendi Function",
    img: "https://plus.unsplash.com/premium_photo-1724762180569-1f40acf9c87f?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Wedding Ceremony",
    img: "https://media.istockphoto.com/id/2148405076/photo/smiling-bride-and-groom-ready-to-exchange-floral-garlands-during-their-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=3rGoWur76cZXKU2y6zY1gBp5PPvU3151iMXxRZ8Kzx8=",
  },
  {
    name: "Reception Party",
    img: "https://images.unsplash.com/photo-1745573674357-1d6e917927cf?w=600",
  },
  {
    name: "Engagement",
    img: "https://images.unsplash.com/photo-1770022006463-57ec88bcc489?w=600",
  },
  {
    name: "Grah Pravesh",
    img: "https://images.unsplash.com/photo-1654764746504-c6772be46e0a?w=600",
  },
  {
    name: "Sangeet Night",
    img: "https://images.unsplash.com/photo-1744804298564-92600fc82879?w=600",
  },
];

const products = [
  {
    title: "Haldi Decoration Setup",
    price: "₹8,999",
    img: "https://media.istockphoto.com/id/2127643694/photo/family-and-friends-showering-floral-blessings-on-bride-and-groom-during-haldi-ceremony.jpg?s=612x612&w=0&k=20&c=tasErwSSZggGvHRQFwrzNcB9At8Bys9lAM2kNjvYJY0=",
  },
  {
    title: "Royal Mehendi Decor",
    price: "₹12,999",
    img: "https://plus.unsplash.com/premium_photo-1724762180569-1f40acf9c87f?w=600",
  },
  {
    title: "Grand Wedding Mandap Decoration",
    price: "₹49,999",
    img: "https://media.istockphoto.com/id/2148405076/photo/smiling-bride-and-groom-ready-to-exchange-floral-garlands-during-their-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=3rGoWur76cZXKU2y6zY1gBp5PPvU3151iMXxRZ8Kzx8=",
  },
  {
    title: "Luxury Reception Stage",
    price: "₹29,999",
    img: "https://images.unsplash.com/photo-1745573674357-1d6e917927cf?w=600",
  },
  {
    title: "Elegant Engagement Decor",
    price: "₹15,999",
    img: "https://images.unsplash.com/photo-1770022006463-57ec88bcc489?w=600",
  },
  {
    title: "Traditional Grah Pravesh Decoration",
    price: "₹6,999",
    img: "https://images.unsplash.com/photo-1654764746504-c6772be46e0a?w=600",
  },
  {
    title: "Sangeet Night LED Stage Setup",
    price: "₹19,999",
    img: "https://media.istockphoto.com/id/1343533032/photo/luxury-wedding-gate-with-colorful-flower-decoration-in-outdoor-night-close-up-low-angle-stock.jpg?s=612x612&w=0&k=20&c=Q1eJtnggf22thn6IdHZ9y9cXTSuR7QdS3cGqUearEng=",
  },
  {
    title: "Premium Floral Wedding Backdrop",
    price: "₹24,999",
    img: "https://images.unsplash.com/photo-1744804298564-92600fc82879?w=600",
  },
];

const WeddingEventDecoration = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">

      <div className="w-full p-4 sm:p-6 lg:p-8">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

          <div>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold">
              Wedding & Event Decorations
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 mt-2">
              <span>50 Decoration Services</span>
              <span className="text-green-600 font-semibold">⭐ 4.9</span>
              <span className="text-blue-600">320 Reviews</span>
            </div>
          </div>

          <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-pink-300 outline-none w-full md:w-auto">
            <option>Recommended</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">

          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[90px] sm:min-w-[120px] cursor-pointer group"
            >
              <img
                src={cat.img}
                className="w-20 h-14 sm:w-24 sm:h-16 rounded-lg object-cover shadow group-hover:scale-105 transition"
              />

              <span className="text-[11px] sm:text-xs mt-2 text-center group-hover:text-pink-500">
                {cat.name}
              </span>
            </div>
          ))}

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">

          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition group"
            >

              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={product.img}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-3">

                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pink-500">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between mt-2">

                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 text-sm">
                      {product.price}
                    </span>

                 
                  </div>

                  <button className="text-[11px] sm:text-xs bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-md">
                    Book
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

export default WeddingEventDecoration;