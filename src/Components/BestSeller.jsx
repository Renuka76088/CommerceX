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
import Bouquet1 from '../assets/heart-full-of-roses-9753900fl-B_0.avif'
import Bouquet2 from '../assets/heart-full-of-roses-9753900fl-A_0.avif'
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../Context/CartContext';


const categories = [
 
  "Flower Bouquets",
  "Flower Boxes",
  "Flower Baskets",
  "Flower Combos",
  "Loose Flowers",
  "Flower Garlands",


];

const products = [
  {
    id: 1,
    title: "Pastel Blooms Of Serenity",
    category: "Flower Bouquets",
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
    id: 2,
    title: "10 Red Roses Bouquet",
    category: "Flower Bouquets",
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
    id: 3,
    title: "Whispers Of Affection Pink Roses Bouquet",
    category: "Flower Bouquets",
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
    id: 4,
    title: "Chic Rose Birthday Box",
    category: "Flower Bouquets",
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
    id: 5,
    title: "Enchanting Flowers",
    category: "Flower Boxes",
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
  {
    id: 6,
    title: "Blaze Red Velvet Roses",
    category: "Kids Theme",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/1702577362/photo/adorable-infant-dressed-as-hindu-god-krishna-on-the-occasion-of-janmashtami-celebrated-at.jpg?s=612x612&w=0&k=20&c=L-VdwfK6AEfj2PDtyP9NdBodSYuqKB-KszNH2rYV-bM=",
  
    ],
  },
  {
    id: 7,
    title: "Gerberas Writing A Sunny Tale",
    category: "BabyShower",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
      "https://media.istockphoto.com/id/984347042/photo/baby-girl-in-the-basket.jpg?s=612x612&w=0&k=20&c=S3e-UVIms6L_iej6upL6RrGUHO6gJqAO_VxTUYUP3Hc=",
      
    ],
  },
  {
    id: 8,
    title: "Red Radiance Birthday Roses",
    category: "BabyShower",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/984346844/photo/baby-girl-in-the-basket.jpg?s=612x612&w=0&k=20&c=c7Vh2pm_JIJSr8d_KJszv-SE1xKKGjrqvqh5WgV38uQ=",
   
    ],
  },
  {
    id: 9,
    title: "Red Radiance Birthday Roses",
    category: "BabyShower",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/1221222031/photo/sofa-couch-and-many-flowers-abundance-pink-and-white-gentle-falls-from-roses.jpg?s=612x612&w=0&k=20&c=LGiZtaT6ecSIBAplUJBP1ppX6nolHRcq5c3gwanHqHs=",
   
    ],
  },
  {
    id: 10,
    title: "Red Radiance Birthday Roses",
    category: "BabyShower",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/1227567660/photo/registry-office-newlyweds-at-the-wedding-table-couple-in-love-signed-a-marriage-contract.jpg?s=612x612&w=0&k=20&c=n-YiD0w-h3_Ui9UsFSikL9D4EtMN8U8ZEMaSnwEuQH0=",
   
    ],
  },
  {
    id: 11,
    title: "Red Radiance Birthday Roses",
    category: "Romantic",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/937809654/photo/jewish-hupa-wedding-putdoor.jpg?s=612x612&w=0&k=20&c=QwuK_IPj6hxfyWmf2dFCubC8xOLf0uHW4KF8yQcA2nw=",
   
    ],
  },
  {
    id: 12,
    title: "Red Radiance Birthday Roses",
    category: "Romantic",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/975215338/photo/beautiful-photo-of-the-jewish-hupa-wedding-putdoor.jpg?s=612x612&w=0&k=20&c=g4rTwcdKCI9tCgfb6gvvtVUCgDWgt39tLUE8eWaplSA=",
   
    ],
  },
  {
    id: 13,
    title: "Red Radiance Birthday Roses",
    category: "Romantic",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/624872080/photo/jewish-hupa-wedding-putdoor.jpg?s=612x612&w=0&k=20&c=0mJ82q_367zdsVcRTPXu1hEfdvik7uPRMJ3H-mioj1Q=",
   
    ],
  },
  {
    id: 14,
    title: "Red Radiance Birthday Roses",
    category: "Romantic",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/1000367292/photo/lightbulbs-decor.jpg?s=612x612&w=0&k=20&c=y2DcnlDED9WlwQkxOvO4T65ag9kI-1SghKosgSapfok=",
   
    ],
  },
  {
    id: 15,
    title: "Red Radiance Birthday Roses",
    category: "First Night",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/670321486/photo/two-swans-made-from-towels.jpg?s=612x612&w=0&k=20&c=2FE-OGScFX6I5C7JkjuMsxdkUJEVjvlr1xikSzLrwms=",
   
    ],
  },
  {
    id: 16,
    title: "Red Radiance Birthday Roses",
    category: "First Night",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/1201679546/photo/romantic-bedroom-interior-kissing-swan-origami-towels-and-sprinkled-fresh-pink-white-rose.jpg?s=612x612&w=0&k=20&c=oNcng1TqmtzHvHxE7cmKl4vLK1kZd6AfcGlIEisb6nU=",
   
    ],
  },
  {
    id: 17,
    title: "Red Radiance Birthday Roses",
    category: "First Night",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/175231690/photo/heart-shape-from-rose-and-flower-on-wedding-bed.jpg?s=612x612&w=0&k=20&c=d1HY1sgbHpm-vLzGopNyqgk39jQnVBlAQVmLZ0ALDi4=",
   
    ],
  },
  {
    id: 18,
    title: "Red Radiance Birthday Roses",
    category: "First Night",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/1128052806/photo/two-swans-made-from-towels-are-kissing-on-honeymoon-white-bed-creamy-pillow-and-heart-form.jpg?s=612x612&w=0&k=20&c=hPBdbNYm4k8CGfUMdfrck8WxTlg8p-7FXdgxOuSh6Kk=",
   
    ],
  },
  {
    id: 19,
    title: "Red Radiance Birthday Roses",
    category: "Office",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/182197358/photo/color-circle-paper-chandeliers-in-kathmandu-nepal.jpg?s=612x612&w=0&k=20&c=YqUyxsulNxYWQSiTIS87WnBq15aw9VtVeDPdQXbMMhw=",
   
    ],
  },
    {
    id: 20,
    title: "Red Radiance Birthday Roses",
    category: "Office",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://img.freepik.com/premium-photo/office-space-adorned-with-yellow-garlands-lanterns-diwali-celebration_1033181-5511.jpg?w=1060",
   
    ],
  },
  {
    id: 21,
    title: "Red Radiance Birthday Roses",
    category: "Office",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://img.freepik.com/premium-photo/traditional-toran-decorative-garland-hanging-entrance-home_1150043-3932.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
   
    ],
  },
  
  {
    id: 22,
    title: "Red Radiance Birthday Roses",
    category: "Office",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://img.freepik.com/premium-photo/corporate-office-is-decorated-with-bright-yellow-flowers-diwali_1033181-5493.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
   
    ],
  },
  
  {
    id: 23,
    title: "Red Radiance Birthday Roses",
    category: "Car Boot",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/1146997706/photo/luxury-wedding-car-decorated-with-flowers.webp?a=1&b=1&s=612x612&w=0&k=20&c=X4nWmuubpU0-zwo4XxZQ5BpIxwUlhgRCekhvnu_0fAI=",
   
    ],
  },
  {
    id: 24,
    title: "Red Radiance Birthday Roses",
    category: "Car Boot",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/1140981635/photo/natural-flower-decorations-by-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=x04wUBg8d2r9-NcDbaRHW0sMpcvbbN2Q9arzoi5kDIY=",
   
    ],
  },
  {
    id: 25,
    title: "Red Radiance Birthday Roses",
    category: "Car Boot",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://images.unsplash.com/photo-1724691003865-14d185039a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
   
    ],
  },
  {
    id: 26,
    title: "Red Radiance Birthday Roses",
    category: "Car Boot",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://images.unsplash.com/flagged/photo-1579890122633-1d9ec7cfb277?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwYm9vb3QlMjBkZWNvcmF0aW9uJTIwYnklMjBmbG93ZXJzfGVufDB8fDB8fHww",
   
    ],
  },
  {
    id: 27,
    title: "Red Radiance Birthday Roses",
    category: "Wedding",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/2127643694/photo/family-and-friends-showering-floral-blessings-on-bride-and-groom-during-haldi-ceremony.jpg?s=612x612&w=0&k=20&c=tasErwSSZggGvHRQFwrzNcB9At8Bys9lAM2kNjvYJY0=",
   
    ],
  },
  {
    id: 28,
    title: "Red Radiance Birthday Roses",
    category: "Wedding",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://media.istockphoto.com/id/1177485706/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=vTKkx8wqHYU9yZzVaZo6Duk1H6bpyp_E9rP3C4JDefc=",
   
    ],
  },
  {
    id: 29,
    title: "Red Radiance Birthday Roses",
    category: "Wedding",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kaWFuJTIwd2VkZGluZyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D",
   
    ],
  },
  {
    id: 30,
    title: "Red Radiance Birthday Roses",
    category: "Wedding",
    price: 795,
    oldPrice: 999,
    discount: "21% OFF",
    rating: 4.9,
    reviews: 676,
    delivery: "In 3 hours",
    images: [
     "https://images.unsplash.com/photo-1744891471118-f74c0453cd21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5kaWFuJTIwd2VkZGluZyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D",
   
    ],
  },

];

export default function BestSeller() {
  const [activeCategory, setActiveCategory] = useState("Flower Bouquets");
  
const filteredProducts = products.filter(
  (p) => p.category === activeCategory
);
  

  return (
 <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

  {/* HEADING */}
  <div className="mb-6 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-pink-600">
      Shop by Category
    </h2>
    <p className="text-gray-500 text-sm md:text-base mt-2">
      Explore decorations and floral arrangements for every occasion
    </p>
  </div>

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
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>

</div>
   
  );
}






/* 🔥 Separate ProductCard Component */
function ProductCard({ product }) {
  const [current, setCurrent] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div 
      onClick={() => navigate('/product-details', { state: { product } })}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 cursor-pointer flex flex-col"
    >

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
      <div className="p-3 md:p-4 flex-col flex flex-1 justify-between">
        <div>
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

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart({
              id: product.title,
              name: product.title,
              price: product.price,
              image: product.images[0]
            });
            alert(`${product.title} added to cart!`);
          }}
          className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium py-2 rounded-lg transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}