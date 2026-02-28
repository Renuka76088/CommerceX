import { useState, useEffect } from "react";
import { Heart, Zap, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";

import Roses1 from "../assets/Red Rose.avif";
import Roses2 from "../assets/Red Rose-2.avif";
import Roses from "../assets/Main Rose.jpg";
import Vase from "../assets/Vase.avif";
import Vases1 from "../assets/Vase1.avif";

import Pastelblooms1 from '../assets/pastel-blooms-of-serenity.avif'
import Pastelblooms2 from '../assets/pastel-blooms-of-serenity-2.avif'
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

const giftOptions = [
  { title: "Basic", price: 695, img: Roses1 },
  { title: "With Chocolate", price: 1395, img: Roses1 },
  { title: "With Cake", price: 1585, img: Roses1 },
  { title: "50 Roses", price: 3199, img: Roses1 },
];

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

// ProductCard component (extracted systematically from the provided card JSX so that <ProductCard /> in grid works without error)
const ProductCard = ({ product }) => {
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
};

export default function ProductDetails() {
  const images = [Roses1, Roses2, Roses, Roses1, Roses2];
  const [activeImage, setActiveImage] = useState(images[0]);
  const [selectedGift, setSelectedGift] = useState(0);
  const [current, setCurrent] = useState(0);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Fixed undefined "product" (used in useEffect + static card at bottom)
  const product = products[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  
  return (
    <>
    <div className="bg-[#f5f5f5] min-h-screen p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-10 h-fit flex flex-col md:flex-row gap-6">

          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 order-2 md:order-1">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-[60px] h-[60px] md:w-[75px] md:h-[75px] object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                  activeImage === img
                    ? "shadow-lg ring-2 ring-teal-600"
                    : "shadow-sm hover:shadow-md"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 overflow-hidden rounded-2xl shadow-lg order-1 md:order-2">
            <img
              src={activeImage}
              className="w-full h-[350px] md:h-[520px] object-cover transition-all duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* Title */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                10 Red Roses Bouquet
              </h1>

              <div className="flex items-center gap-3 mt-2">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                  4.9 ★
                </span>
                <span className="text-gray-500 text-sm">
                  1645 Reviews
                </span>
              </div>
            </div>

            <Heart className="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500 transition-colors duration-300" />
          </div>

          {/* Price */}
          <div className="rounded-xl p-5 bg-gray-50 shadow-sm">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-2xl font-bold text-gray-900">
                ₹ 695
              </span>
              <span className="line-through text-gray-400">
                ₹ 770
              </span>
              <span className="text-green-600 font-medium text-sm">
                10% OFF
              </span>
            </div>
          </div>

          {/* Gift Options */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-4">
              Make this gift extra special
            </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
  {giftOptions.map((item, i) => (
    <div
      key={i}
      onClick={() => setSelectedGift(i)}
      className={`relative rounded-2xl p-4 cursor-pointer bg-white transition-all duration-300 flex flex-col justify-between min-h-[170px]
      ${
        selectedGift === i
          ? "ring-2 ring-teal-600 shadow-lg scale-[1.02]"
          : "shadow-sm hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      
      {/* Badge */}
      {selectedGift === i && (
        <span className="absolute top-2 right-2 text-[10px] bg-teal-600 text-white px-2 py-1 rounded-full">
          Selected
        </span>
      )}

      {/* Image */}
      <div className="h-[80px] flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
        <img
          src={item.img}
          className="h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="mt-3 text-center">
        <p className="text-sm font-medium text-gray-800">
          {item.title}
        </p>
        <p className="text-base font-semibold text-teal-700 mt-1">
          ₹ {item.price}
        </p>
      </div>
    </div>
  ))}
</div>
          </div>

          {/* Vase */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-4">
              Add A Vase For Your Flower
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[Vases1, Vase].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 cursor-pointer bg-white shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={item}
                    className="w-full h-[120px] object-contain"
                  />
                  <p className="text-sm mt-2">
                    {i === 0
                      ? "Clear Glass Vase"
                      : "Cylinder Glass Vase"}
                  </p>
                  <p className="font-semibold">₹ 199</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 border border-teal-700 text-teal-700 py-3 rounded-xl font-medium hover:bg-teal-50 transition-all duration-300">
              ADD TO CART
            </button>
            <button className="flex-1 bg-gradient-to-r from-teal-700 to-teal-900 text-white py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition-all duration-300">
              BUY NOW | ₹ 695
            </button>
          </div>

          {/* Info Sections */}
          {[
            {
              title: "Product contains",
              content: (
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                  <li>Bunch of 10 red roses</li>
                  <li>Wrapped in red paper</li>
                  <li>1x Ribbon</li>
                </ul>
              ),
            },
            {
              title: "Description",
              content:
                "A symbol of cheer and hope, this bouquet of lively red roses is beautifully wrapped in a matching paper packing and tied with green mesh.",
            },
            {
              title: "Disclaimer",
              content:
                "Unwrap with care. Flowers tend to dry naturally. Keep in fresh water.",
            },
            {
              title: "Delivery Information",
              content: "Estimated Delivery Tomorrow",
            },
          ].map((section, i) => (
            <div key={i} className="rounded-xl p-5 bg-gray-50 shadow-sm">
              <h4 className="font-semibold text-sm mb-3 text-gray-800">
                {section.title}
              </h4>
              {typeof section.content === "string" ? (
                <p className="text-sm text-gray-600 leading-6">
                  {section.content}
                </p>
              ) : (
                section.content
              )}
            </div>
          ))}

        </div>
      </div>
    </div>

     {/* Category Filter Buttons */}


{/* Similar Products Section */}
<div className="container mx-auto px-4 md:px-6 lg:px-8">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 p-5">
    Similar Products 
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

 
 
  
    

    </>
  );
}