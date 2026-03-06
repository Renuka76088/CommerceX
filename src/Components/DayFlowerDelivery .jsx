import { Link } from "react-router-dom";
// import flowerImg from "../assets/flower-delivery.jpg"; // koi bhi flower image

export default function DayFlowerDelivery() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Same Day Flower Delivery in Indore
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Surprise your loved ones with fresh and beautiful flowers delivered 
            the very same day across Indore. At <span className="font-semibold">Prakash Florist</span>, 
            we ensure fast, reliable, and carefully arranged flower bouquets 
            for birthdays, anniversaries, weddings, and special celebrations.
          </p>

          <p className="text-gray-600 mb-6">
            Our delivery service covers major areas of the city so your flowers 
            reach on time and in perfect condition.
          </p>

          {/* Areas */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Vijay Nagar",
              "Palasia",
              "Rau",
              "Bengali Square",
              "Sudama Nagar",
            ].map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/shop">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-md">
              Order Flowers
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1560243563-62087d88da39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMGJhc2tldCUyMGluJTIwZmxvcmlzdCUyMHNob3B8ZW58MHx8MHx8fDA%3D"
            alt="Flower Delivery in Indore"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}