import React from "react";

const categories = [
  {
    name: "Car Decoration",
    img: "https://media.istockphoto.com/id/1146997706/photo/luxury-wedding-car-decorated-with-flowers.webp?a=1&b=1&s=612x612&w=0&k=20&c=X4nWmuubpU0-zwo4XxZQ5BpIxwUlhgRCekhvnu_0fAI=",
  },
  {
    name: "Room Decoration",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    name: "Home Decoration",
    img: "https://media.istockphoto.com/id/1128052838/photo/two-swans-made-from-towels-are-kissing-on-honeymoon-white-bed-creamy-pillow-and-heart-form.jpg?s=612x612&w=0&k=20&c=SJW0cSHQ8Huk65xw4mZKUPMbg92OOZE7uWszdF-ApJc=",
  },
  {
    name: "Balloon Decoration",
    img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
  },
  {
    name: "Anniversary Decoration",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    name: "Birthday Decoration",
    img: "https://images.unsplash.com/photo-1741969494307-55394e3e4071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBkZWNvcmF0aW9uJTIwd2l0aCUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Proposal Decoration",
    img: "https://images.unsplash.com/photo-1752824063232-50be3a4b5e44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Terrace Decoration",
    img: "https://images.unsplash.com/photo-1685968786613-54a1b4a73b3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVycmFjZSUyMGRlY29yYXRpb25ieSUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
  },
];

const products = [
  {
    title: "Luxury Car Flower Decoration",
    price: "₹1,999",
    img: "https://media.istockphoto.com/id/914775718/photo/wedding-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=xBxJMifbkPuzye9M6ajEX_Xl95Yk9OklviU6sAnNpmI=",
  },
  {
    title: "Romantic Room Decoration Setup",
    price: "₹2,499",
    img: "https://media.istockphoto.com/id/1128052838/photo/two-swans-made-from-towels-are-kissing-on-honeymoon-white-bed-creamy-pillow-and-heart-form.jpg?s=612x612&w=0&k=20&c=SJW0cSHQ8Huk65xw4mZKUPMbg92OOZE7uWszdF-ApJc=",
  },
  {
    title: "Elegant Home Entrance Decoration",
    price: "₹3,999",
    img: "https://images.unsplash.com/photo-1700544628901-523c8108d864?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
  },
  {
    title: "Balloon Party Decoration",
    price: "₹1,499",
    img: "https://plus.unsplash.com/premium_photo-1670590785990-2864c7d9fe0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFsb29uJTIwZGVjb3JhdGlvbiUyMHdpdGglMjBmbG93ZXJzfGVufDB8fDB8fHww",
  },
  {
    title: "Anniversary Candle Light Decoration",
    price: "₹2,999",
    img: "https://images.unsplash.com/photo-1604668915840-580c30026e5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHklMjBkZWNvcmF0aW9ufGVufDB8fDB8fHww",
  },
  {
    title: "Birthday Balloon Decoration",
    price: "₹1,299",
    img: "https://images.unsplash.com/photo-1741969494307-55394e3e4071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBkZWNvcmF0aW9uJTIwd2l0aCUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Romantic Proposal Setup",
    price: "₹3,499",
    img: "https://media.istockphoto.com/id/1128052838/photo/two-swans-made-from-towels-are-kissing-on-honeymoon-white-bed-creamy-pillow-and-heart-form.jpg?s=612x612&w=0&k=20&c=SJW0cSHQ8Huk65xw4mZKUPMbg92OOZE7uWszdF-ApJc=",
  },
  {
    title: "Terrace Candle Light Dinner Decoration",
    price: "₹4,999",
    img: "https://images.unsplash.com/photo-1715407783389-98a0a8a02291?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
];
const SpecializedDecoration = () => {
  return (
   <div className="bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Elegant Wedding Gifts
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-2">
              <span>40 of 809 Gifts</span>
              <span className="text-green-600 font-semibold">⭐ 4.8</span>
              <span className="text-blue-600">281 Reviews</span>
            </div>
          </div>

          <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-pink-300 outline-none w-full md:w-auto">
            <option>Recommended</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>

        </div>

        {/* Categories */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide">

          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[90px] sm:min-w-[120px] cursor-pointer group"
            >
              <img
                src={cat.img}
                className="w-16 h-12 sm:w-24 sm:h-14 rounded-xl object-cover shadow-md group-hover:scale-110 transition duration-300"
              />

              <span className="text-[11px] sm:text-xs mt-2 text-center group-hover:text-pink-500 transition">
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

export default SpecializedDecoration ;