import { useState } from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/About.png"; // apni image yaha lagao

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};
const decorations = [
  {
    id: 1,
    name: "Wedding Stage Decoration",
    category: "Stage",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    id: 2,
    name: "Car Flower Decoration",
    category: "Car",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
  },
  {
    id: 3,
    name: "Haldi Ceremony Decoration",
    category: "Haldi",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866"
  },
  {
    id: 4,
    name: "Mandap Flower Decoration",
    category: "Mandap",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a"
  }
];



const categories = ["All", "Flower Bouquets", "Flower Boxes", "Flower Baskets","Flower Combos","Loose Flowers","Flower Garlands"];
const decorationCategories = [
  "All",
  "Wedding Decoration",
  "Event Decoration",
  "Car Decoration",
 
];



const products = [
  {
    id: 1,
    name: "Red Rose Bouquet",
    category: "Roses",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 2,
    name: "White Lily Bouquet",
    category: "Lilies",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: 3,
    name: "Purple Orchid",
    category: "Orchids",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 4,
    name: "Pink Roses",
    category: "Roses",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
  }
];
export default function About() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const [activeDecoration, setActiveDecoration] = useState("All");

const filteredDecoration =
  activeDecoration === "All"
    ? decorations
    : decorations.filter((d) => d.category === activeDecoration);


  return (
    <div className="bg-pink-50 text-gray-800 overflow-hidden">



      {/* Hero */}
      <section className="grid md:grid-cols-2 items-center px-6 md:px-20 py-16 gap-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-pink-700">
            Fresh Flowers <br />
            Beautiful Bouquets <br />
            Perfect Celebrations
          </h1>

          <p className="text-gray-600 mt-6">
            Prakash Florist is an Indore-based florist serving customers since
            1970. We are one of the leading flower shops in Indore located in
            front of Kasturi Sabha Grah, Scheme No. 54, Vijay Nagar near
            Tinku's.
          </p>

          <p className="text-gray-600 mt-4">
            We deliver fresh flowers and cakes from early morning to late
            night to make every celebration special. Customer delight has
            always been our top priority.
          </p>

          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg mt-8">
            Explore Flowers
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="flex justify-center"
        >
       <div className="bg-white rounded-2xl shadow-xl max-w-sm mx-auto overflow-hidden text-center hover:shadow-2xl transition">

  {/* Image */}
  <img
    src={aboutImg}
    alt="Flower Shop"
    className="w-full h-64 object-cover"
  />

  <div className="p-6">

    <h2 className="text-2xl font-bold text-pink-600">
      Since 1970
    </h2>

    <p className="mt-3 text-gray-500 text-sm leading-relaxed">
      Delivering fresh flowers & cakes across Indore with love and
      premium quality service.
    </p>

    <div className="bg-pink-100 p-4 rounded-xl mt-5">

      <p className="font-semibold text-pink-700">
        Top Rated Flower Shop
      </p>

      <p className="text-sm text-gray-600 mt-1">
        Bouquets • Varmala • Wedding Decoration
      </p>

    </div>

  </div>

</div>

        </motion.div>

      </section>

      {/* About Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="bg-white mx-6 md:mx-20 rounded-2xl p-10 shadow-md"
      >
        <h2 className="text-3xl font-semibold mb-6 text-pink-700">
          About Prakash Florist
        </h2>

        <p className="text-gray-600">
          Today we are more than just an online florist — we are a one-stop
          destination for flower bouquets, cakes, flower decorations, and
          special occasion arrangements.
        </p>

        <p className="text-gray-600 mt-4">
          Prakash Florist Indore is a top rated shop delivering all types of
          flowers, bouquets, varmala, and wedding decoration products across
          Indore. We are known for our reliable service, efficient delivery,
          and beautiful floral designs.
        </p>
      </motion.section>

      {/* Flower Category */}
    <section className="px-6 md:px-20 py-20">

  <h2 className="text-3xl font-bold text-center mb-10 text-pink-700">
    Flower Category
  </h2>

  {/* CATEGORY BAR */}
  <div className="flex gap-3 overflow-x-auto pb-3 mb-10 no-scrollbar justify-center">

    {categories.map((cat, i) => (

      <button
        key={i}
        onClick={() => setActiveCategory(cat)}
        className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition
        ${activeCategory === cat
          ? "bg-pink-600 text-white shadow-md"
          : "bg-white text-gray-700 border hover:bg-pink-50"
        }`}
      >
        {cat}
      </button>

    ))}

  </div>

  {/* PRODUCT GRID */}

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {filteredProducts.map((product) => (

      <div
        key={product.id}
        className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
      >

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[180px] object-cover"
        />

        <div className="p-4 text-center">

          <h3 className="font-semibold text-pink-600">
            {product.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Fresh premium flowers
          </p>

        </div>

      </div>

    ))}

  </div>

</section>

<section className="px-6 md:px-20 py-20 ">

  <h2 className="text-3xl font-bold text-center mb-10 text-pink-700">
    Decoration Category
  </h2>

  {/* CATEGORY BUTTONS */}

  <div className="flex gap-3 overflow-x-auto pb-3 mb-10 justify-center">

    {decorationCategories.map((cat, i) => (

      <button
        key={i}
        onClick={() => setActiveDecoration(cat)}
        className={`px-5 py-2 rounded-full
        ${activeDecoration === cat
          ? "bg-pink-600 text-white"
          : "bg-white border"}`}
      >
        {cat}
      </button>

    ))}

  </div>

  {/* PRODUCT GRID */}

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {filteredDecoration.map((product) => (

      <div
        key={product.id}
        className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
      >

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[180px] object-cover"
        />

        <div className="p-4 text-center">

          <h3 className="font-semibold text-pink-600">
            {product.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Premium wedding decoration
          </p>

        </div>

      </div>

    ))}

  </div>

</section>


      {/* Flower Decoration */}
  

      {/* CTA */}
      <section className="bg-pink-600 text-white mx-6 md:mx-20 rounded-2xl p-14 text-center mb-20">

        <h2 className="text-3xl font-semibold mb-6">
          Make Every Celebration Beautiful 🌸
        </h2>

        <p className="mb-8">
          Order fresh flowers, bouquets, cakes and decoration services today.
        </p>

        <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold">
          Order Flowers
        </button>

      </section>

    

    </div>
  );
}
