import { useState, useEffect } from "react";
import { Heart, Info, Star, Zap } from "lucide-react";
import Pastelblooms1 from '../assets/pastel-blooms-of-serenity.avif'
import Pastelblooms2 from '../assets/pastel-blooms-of-serenity-2.avif'
import Roses1 from '../assets/Red Rose.avif'
import Roses2 from '../assets/Red Rose.avif'
import PinkRoses2 from '../assets/whispers-of-affection-pink-roses-bouquet-2.avif'
import PinkRoses1 from '../assets/whispers-of-affection-pink-roses-bouquet.avif'
import ChicRose1 from '../assets/chic-rose-birthday-box-9764130fl-A.avif'
import ChicRose2 from '../assets/chic-rose-birthday-box-9764130fl-B.avif'
import Enchanting1 from '../assets/enchanting-flower-for-mom-9779500fl-A.avif'
import Enchanting2 from '../assets/enchanting-flower-for-mom-9779500fl-C.avif'
import Blaze1 from '../assets/IMG_6743_0.avif'
import Blaze2 from '../assets/IMG_6744_0 (1).avif'
import Blush1 from '../assets/a-love-note-in-pink-roses-9716450fl-A_0.avif'
import Blush2 from '../assets/a-love-note-in-pink-roses-9716450fl-C_0.avif'
import Bouquet1 from '../assets/a-bouquet-of-tender-moments-9717590fl-B_0.avif'
import Bouquet2 from '../assets/a-bouquet-of-tender-moments-9717590fl-E_0.avif'
import { Link } from "react-router-dom";


const categories = [
  "All",
  "30-Min Delivery",
  "Roses",
  "Orchids",
  "Birthday",
  "Anniversary",
];

const products = [
  {
    id: 1,
    title: "Pastel Blooms Of Serenity",
    category: "30-Min Delivery",
    price: 595,
    oldPrice: 795,
    discount: "26% OFF",
    rating: 5,
    reviews: 2,
    delivery: "In 3 hours",
    images: [
      Pastelblooms1,
      Pastelblooms2,
    ],
  },
  {
    id: 1,
    title: "10 Red Roses Bouquet",
    category: "Roses",
    price: 595,
    oldPrice: 795,
    discount: "26% OFF",
    rating: 5,
    reviews: 2,
    delivery: "In 3 hours",
    images: [
      Roses1,
      Roses2,
    ],
  },
  {
    id: 1,
    title: "Whispers Of Affection Pink Roses Bouquet",
    category: "Birthday",
    price: 595,
    oldPrice: 795,
    discount: "26% OFF",
    rating: 5,
    reviews: 2,
    delivery: "In 3 hours",
    images: [
     PinkRoses1,
    PinkRoses2,
    ],
  },
  {
    id: 1,
    title: "Chic Rose Birthday Box",
    category: "Birthday",
    price: 595,
    oldPrice: 795,
    discount: "26% OFF",
    rating: 5,
    reviews: 2,
    delivery: "In 3 hours",
    images: [
     ChicRose1,
    ChicRose2,
    ],
  },
  {
    id: 2,
    title: "Enchanting Flowers",
    category: "Orchids",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     Enchanting1,
      Enchanting2,
    ],
  },
  {
    id: 2,
    title: "Blaze Red Velvet Roses",
    category: "Orchids",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     Blaze1,
      Blaze2,
    ],
  },
  {
    id: 2,
    title: "Gerberas Writing A Sunny Tale",
    category: "Orchids",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
      Blush1,
       Blush2,
    ],
  },
  {
    id: 2,
    title: "Red Radiance Birthday Roses",
    category: "Orchids",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     Bouquet1,
      Bouquet2,
    ],
  },
];

export default function BestSeller() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      {/* CATEGORY BAR */}
      <div className="flex gap-3 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition 
              ${
                activeCategory === cat
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-white text-gray-700 border hover:bg-gray-50"
              }`}
          >
            {cat === "30-Min Delivery" && (
              <Zap size={14} className="inline mr-1" />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <Link to='/product-details'>
      
    
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

       </Link>
    </div>
  );
}






/* 🔥 Separate ProductCard Component */
function ProductCard({ product }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">

      {/* IMAGE SLIDER */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className="h-48 md:h-60 w-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        <span className="absolute top-3 left-3 bg-teal-700 text-white text-xs px-3 py-1 rounded-md font-semibold">
          Best Seller
        </span>

        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
          <Heart size={16} className="text-gray-600" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-3 md:p-4">
        <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1 line-clamp-1">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-gray-900">
            ₹{product.price}
          </span>
          <span className="line-through text-gray-400 text-xs">
            ₹{product.oldPrice}
          </span>
          <span className="text-orange-500 text-xs font-semibold">
            {product.discount}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center bg-green-600 text-white text-xs px-2 py-1 rounded">
            <Star size={10} className="mr-1 fill-white" />
            {product.rating}
          </div>
          <span className="text-gray-500 text-xs">
            ({product.reviews})
          </span>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-600">
          <span>
            Delivery:{" "}
            <span className="text-teal-600 font-medium">
              {product.delivery}
            </span>
          </span>
          <Info size={14} />
        </div>
      </div>
    </div>
  );
}