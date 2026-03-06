import { Link } from "react-router-dom";

import Bouquet1 from '../assets/pastel-blooms-of-serenity.avif'


export default function PhotoGallery() {

  const gallery = [
    { img: Bouquet1, title: "Bouquet Designs" },
    { img: "https://images.unsplash.com/photo-1668432747162-5e7ded79e498?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwd2VkZGluZyUyMGRlY29hcmF0aW9ufGVufDB8fDB8fHww", title: "Wedding Decoration" },
    { img: "https://media.istockphoto.com/id/1183685719/photo/beautiful-young-indian-woman-in-traditional-sari-dress-holding-a-oil-lamp-light-or-diya-with.jpg?s=612x612&w=0&k=20&c=fA-2P5G1dqAZO-AZ0ZKqS3r73Qlj6uC-UG3MuPfPl_g=", title: "Event Decoration" },
    { img: "https://media.istockphoto.com/id/914775718/photo/wedding-car.jpg?s=612x612&w=0&k=20&c=IVexOfpUNlzVQdUp_--UhcwKqe6wxAjVJ2cLP0vlwX8=", title: "Car Decoration" },
    { img: "https://media.istockphoto.com/id/1691793939/photo/the-beautiful-decorations-cultural-program-wedding-decorations-new-year-dj-night.jpg?s=612x612&w=0&k=20&c=qhaaBNRO_q8wzPUQsKC9dnQQsO5iCwbRDwMiXoFVJJI=", title: "Stage Decoration" },
    { img: "https://media.istockphoto.com/id/1169603902/photo/beautiful-wedding-reception-venue.jpg?s=612x612&w=0&k=20&c=eabV86HqTyh0WawpngWFKqGH-y74kovE4LhrXTa_kpQ=", title: "Premium Flowers" },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">

      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
            Photo Gallery
          </h2>

          <p className="text-gray-600 mt-3 max-w-[600px] mx-auto">
            Explore our beautiful floral arrangements and decoration work 
            for weddings, events, and special occasions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group"
            >

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link to="/gallery">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-md">
              View Gallery
            </button>
          </Link>
        </div>

      </div>

    </section>
  );
}