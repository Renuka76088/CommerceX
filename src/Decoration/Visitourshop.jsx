import React from "react";
import Blush1 from "../assets/a-love-note-in-pink-roses-9716450fl-A_0.avif";
import aboutImg from "../assets/About.png"; // apni image yaha lagao
import { Link } from "react-router-dom";


const shopImages = [
  "https://media.istockphoto.com/id/2127643694/photo/family-and-friends-showering-floral-blessings-on-bride-and-groom-during-haldi-ceremony.jpg?s=612x612&w=0&k=20&c=tasErwSSZggGvHRQFwrzNcB9At8Bys9lAM2kNjvYJY0=",
  "https://media.istockphoto.com/id/914775718/photo/wedding-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=xBxJMifbkPuzye9M6ajEX_Xl95Yk9OklviU6sAnNpmI=",
  Blush1 ,
  "https://media.istockphoto.com/id/2148405076/photo/smiling-bride-and-groom-ready-to-exchange-floral-garlands-during-their-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=3rGoWur76cZXKU2y6zY1gBp5PPvU3151iMXxRZ8Kzx8=",
];

const offers = [
  {
    title: "Fresh Flowers",
    desc: "Daily fresh flowers including roses, lilies, orchids and seasonal bouquets.",
    link: "/decoration"
  },
  {
    title: "Customized Bouquets",
    desc: "Beautiful personalized bouquets designed for birthdays, anniversaries and special occasions.",
    link: "/decoration"
  },
  {
    title: "Gift Hampers",
    desc: "Premium gift hampers with chocolates, flowers and personalized gifts.",
    link: "/specialized-decoration"
  },
  {
    title: "Event Decoration",
    desc: "Flower decoration for weddings, parties and corporate events.",
    link: "/wedding-event-decor"
  }
];

const ShopInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10  text-pink-600">
        Welcome to Prakash Florist
      </h1>

      {/* Shop Info */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

        <img
          src={aboutImg}
          alt="shop"
          className="rounded-xl shadow-lg w-full h-[350px] object-cover"
        />

         <div>
        

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
<a 
  href="https://www.google.com/maps/place/Prakash+Florist"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-md">
    Visit Our Store
  </button>
</a>
        </div>

      </div>

      {/* Shop Images */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Shop Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shopImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-lg h-48 w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

      {/* What We Offer */}
      <div>
        <h2 className="text-2xl font-semibold mb-10 text-center">
          What We Offer
        </h2>

       <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

  {offers.map((item, index) => (
    <Link key={index} to={item.link}>
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        
        <h3 className="font-semibold text-lg mb-3">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm">
          {item.desc}
        </p>

      </div>
    </Link>
  ))}

</div>
      </div>

    </div>
  );
};

export default ShopInfo;