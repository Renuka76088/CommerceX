import { FaStar, FaHeart } from "react-icons/fa";
import flower1 from "../assets/flower-1.webp";
import flower2 from "../assets/flower-2.webp";
import flower3 from "../assets/flower-3.webp";
import flower4 from "../assets/flower-4.webp";
import flower5 from "../assets/flower-5.webp";
import flower6 from "../assets/flower-6.webp";
import flower7 from "../assets/flower-7.webp";
import flower8 from "../assets/flower-8.webp";

function TrendingGifts() {
  const products = [
    { img: flower1, title: "Red and Pink Roses Hand Bouquet", price: 1799, oldPrice: 2399, discount: "26% OFF", rating: 5, reviews: 720 },
    { img: flower2, title: "Forever Love 12 Red Roses Bouquet", price: 1499, oldPrice: 1999, discount: "26% OFF", rating: 4.6, reviews: 672 },
    { img: flower3, title: "Heart of Love Red Roses & Chocolates", price: 4799, oldPrice: 5299, discount: "10% OFF", rating: 4.5, reviews: 718 },
    { img: flower4, title: "Red Rose Bouquet with Ferrero", price: 3999, oldPrice: 4899, discount: "19% OFF", rating: 4.8, reviews: 715 },
    { img: flower5, title: "Valentine Special Flower Bouquet", price: 2199, oldPrice: 2899, discount: "25% OFF", rating: 4.7, reviews: 666 },
    { img: flower6, title: "Luxury Red Roses Basket", price: 2499, oldPrice: 3199, discount: "22% OFF", rating: 4.8, reviews: 530 },
    { img: flower7, title: "Romantic Love Combo", price: 2999, oldPrice: 3799, discount: "21% OFF", rating: 4.9, reviews: 480 },
    { img: flower8, title: "Premium Valentine Surprise", price: 3599, oldPrice: 4299, discount: "16% OFF", rating: 4.6, reviews: 390 },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fdf1f3] to-[#f8e6ea] py-16 px-6">
      <div className="max-w-[1350px] mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-[#b1123f] tracking-tight">
          Trending Valentine Gifts for Couples ❤️
        </h2>
        <p className="text-lg text-gray-600 mt-3 mb-12">
          Wide Range of Options
        </p>

        {/* Scrollable Row */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-6">

          {products.map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden transform hover:-translate-y-3"
            >
              {/* Image Section */}
              <div className="relative h-[280px] w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70"></div>

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-white text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {item.discount}
                </div>

                {/* Wishlist */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                  <FaHeart className="text-pink-500 text-sm" />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">

                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{item.price}
                  </span>

                  <span className="text-sm line-through text-gray-400">
                    ₹{item.oldPrice}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                  <FaStar className="text-yellow-500" />
                  <span>{item.rating}</span>
                  <span>({item.reviews})</span>
                </div>

              </div>

              {/* Premium Glow Border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-pink-300 transition duration-500"></div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default TrendingGifts;
