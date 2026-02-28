const testimonials = [
  {
    text: `Awesome flowers and beautifully arranged. Had ordered for my Gurumaa and she appreciated the thoughtful collection, hod bless each of you in sourcing, putting all together and delivering it. Thank you`,
    name: "Sanjay Diwan",
    rating: 5,
    date: "24/01/2026",
  },
  {
    text: `Thanks a lot to Prakash Florist for making my moms birthday special she was very happy thanks a lot`,
    name: "Aaditya Singh...",
    rating: 5,
    date: "14/01/2026",
  },
  {
    text: `This cake was much better than I had imagined. It was very fresh and tasted great. Thank you Prakash Florist.`,
    name: "Samiksha",
    rating: 5,
    date: "09/01/2026",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white px-6 md:px-14 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">
          Customer Testimonial
        </h2>

        <button className="bg-[#0E4A5A] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#0b3d4a] transition">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-[28px] p-7 flex flex-col justify-between min-h-[280px]"
          >
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              {item.text}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">
                  {item.name}
                </p>

                <div className="flex items-center gap-3 mt-1">
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    ★ {item.rating}
                  </span>
                  <span className="text-gray-500 text-sm">
                    Posted On :{item.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}