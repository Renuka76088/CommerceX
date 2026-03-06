import React from "react";
import aboutImg from "../assets/About.png"; // apni image yaha lagao

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
            About Prakash Florist
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            <span className="font-semibold">Prakash Florist</span> is an Indore-based
            florist serving customers since <span className="font-semibold">1970</span>.
            We are one of the leading flower shops in Indore located in front of
            Kasturi Sabha Grah, Scheme No. 54, Vijay Nagar near Tinku's.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our presence covers the entire city of Indore. We deliver fresh
            flowers and cakes from early morning to late night to make every
            celebration special. Customer delight has always been our top
            priority.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Today we are more than just an online florist — we are a one-stop
            destination for flower bouquets, cakes, flower decorations, and
            special occasion arrangements.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Prakash Florist Indore is a top rated shop delivering all types of
            flowers, bouquets, varmala, and wedding decoration products across
            Indore. We are known for our reliable service, efficient delivery,
            and beautiful floral designs.
          </p>

          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-md">
            Explore Our Flowers
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={aboutImg}
            alt="Prakash Florist Indore"
            className="rounded-2xl shadow-xl w-full object-cover h-[420px]"
          />
        </div>

      </div>
    </section>
  );
}