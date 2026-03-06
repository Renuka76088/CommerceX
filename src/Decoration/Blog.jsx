import React from "react";
import Pastelblooms1 from "../assets/pastel-blooms-of-serenity.avif";
import Blaze1 from "../assets/IMG_6743_0.avif";

const blogs = [
  {
    category: "Flowers",
    title: "Top 10 Flowers for Special Occasions",
    desc: "Flowers are the best way to express love and emotions. Discover the top flowers perfect for birthdays, anniversaries and celebrations.",
    img: Pastelblooms1
  },
  {
    category: "Reception Party",
    title: "Why Personalised Gifts Make Moments Special",
    desc: "Personalised gifts add emotional value to your present. Learn how customised gifts create unforgettable memories.",
    img: "https://images.unsplash.com/photo-1745573674357-1d6e917927cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGRlY29yYXRpb24lMjByZWNlcHRpb24lMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    category: "Romantic Room Decoration Setup",
    title: "Best Gift Hampers for Festivals",
    desc: "Explore amazing gift hampers filled with chocolates, flowers and surprises for your loved ones.",
    img: "https://media.istockphoto.com/id/1128052838/photo/two-swans-made-from-towels-are-kissing-on-honeymoon-white-bed-creamy-pillow-and-heart-form.jpg?s=612x612&w=0&k=20&c=SJW0cSHQ8Huk65xw4mZKUPMbg92OOZE7uWszdF-ApJc=",
  },
  {
    category: "Balloon Party Decoration",
    title: "How to Keep Flowers Fresh Longer",
    desc: "Learn simple tips to keep your flowers fresh and beautiful for longer at home.",
    img: "https://plus.unsplash.com/premium_photo-1670590785990-2864c7d9fe0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFsb29uJTIwZGVjb3JhdGlvbiUyMHdpdGglMjBmbG93ZXJzfGVufDB8fDB8fHww",
  },
  {
    category: "Personalised Gifts",
    title: "Creative Gift Ideas for Birthdays",
    desc: "Find unique personalised gift ideas that will make birthday celebrations unforgettable.",
    img: Blaze1,
  },
  {
    category: "Gift Hampers",
    title: "Luxury Hampers That Impress Everyone",
    desc: "Premium gift hampers designed for weddings, anniversaries and corporate gifting.",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383",
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Blog
      </h1>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={blog.img}
              alt=""
              className="h-52 w-full object-cover"
            />

            <div className="p-6">

              <span className="text-sm text-pink-500 font-semibold">
                {blog.category}
              </span>

              <h3 className="text-lg font-semibold mt-2 mb-2">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {blog.desc}
              </p>

              <button className="text-pink-600 font-medium hover:underline">
                Read More →
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Blog;