import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Haldi1 from "../assets/Haldi (1).png";
import Mehendi1 from "../assets/Mehendi (1).png";
import WeddingStage1 from "../assets/WeddingStage (1).png";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Mandap6 from "../assets/Mandap (6).png";
import Birthday1 from "../assets/Birthday1.png";
import Anniversary1 from "../assets/Anniversary (1).png";
import BabyShower1 from "../assets/BabyShower (1).png";
import CarDecoration1 from "../assets/CarDecoration1 (1).png";
import CarDecoration3 from "../assets/CarDecoration1 (3).png";
import CarDecoration4 from "../assets/CarDecoration1 (4).png";
import CarDecoration6 from "../assets/CarDecoration1 (6).png";


const decorationCategories = [
  {
    title: "Wedding Decoration",
    path: "/flower-decoration/wedding-decoration",
    items: [
      { id: 'w1', name: "Haldi Decoration", price: 3500, image: Haldi1 },
      { id: 'w2', name: "Mehndi Decoration", price: 4000, image: Mehendi1 },
      { id: 'w3', name: "Wedding Stage Setup", price: 15000, image: WeddingStage1 },
      { id: 'w4', name: "Mandap Decoration", price: 12000, image: Mandap6 },
    ]
  },
  {
    title: "Event Decoration",
    path: "/flower-decoration/event-decoration",
    items: [
      { id: 'e1', name: "Birthday Decoration", price: 2500, image: Birthday1 },
      { id: 'e2', name: "Anniversary Decoration", price: 3000, image: Anniversary1 },
      { id: 'e3', name: "Baby Shower Decor", price: 4500, image: BabyShower1 },
      { id: 'e4', name: "Proposal Decoration", price: 5000, image: "https://images.unsplash.com/photo-1752824063232-50be3a4b5e44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" },
    ]
  },
  {
    title: "Car Decoration",
    path: "/flower-decoration/car-decoration",
    items: [
      { id: 'c1', name: "Wedding Car Decoration", price: 2000, image: CarDecoration1 },
      { id: 'c2', name: "Bride Car Decoration", price: 2500, image: CarDecoration3 },
      { id: 'c3', name: "Rose Car Decoration", price: 3000, image: CarDecoration4 },
      { id: 'c4', name: "Ribbon Car Decoration", price: 1500, image: CarDecoration6 },
    ]
  }
];

function BookNow() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookNow = (item) => {
    navigate('/decoration-booking', { state: { decoration: item } });
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Book Decoration <span className="text-rose-600">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Explore our curated decoration categories. Book directly for your upcoming special events.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        {decorationCategories.map((category, catIdx) => (
          <section key={catIdx} className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
                <p className="text-gray-500 mt-2">Finest {category.title.toLowerCase()} selections for you.</p>
              </div>
              <Link
                to={category.path}
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 hover:gap-3 transition-all"
              >
                View All {category.title} <ArrowRight size={20} />
              </Link>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item, itemIdx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIdx * 0.1 }}
                  key={itemIdx}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-800 shadow-sm">
                      Starting ₹{item.price}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 truncate" title={item.name}>{item.name}</h3>

                    <button
                      onClick={() => handleBookNow(item)}
                      className="mt-auto w-full bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white py-3 rounded-xl font-bold shadow-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <CalendarCheck size={18} /> Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default BookNow;