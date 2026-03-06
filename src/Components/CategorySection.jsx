import sameDay from "../assets/cat-1.webp";
import birthday from "../assets/cat-2.webp";
import sympathy from "../assets/cat-3.webp";
import love from "../assets/cat-4.webp";
import getWell from "../assets/cat-5.webp";
import strawberry from "../assets/cat-6.webp";

export default function CategorySection() {
  const categories = [
    { img: sameDay, title: "Same-Day Flower Delivery" },
    { img: birthday, title: "Birthday Flowers" },
    { img: sympathy, title: "Sympathy" },
    { img: love, title: "Love & Romance" },
    { img: getWell, title: "Get Well" },
    { img: strawberry, title: "Chocolate Covered\nStrawberries" },
  ];

  return (
  <section className="bg-[#e9e9e9] py-[70px] px-4 md:px-10 -mt-25">
  <div className="max-w-[1400px] mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h6 className="text-[20px] md:text-[30px] font-semibold text-pink-600">
        Trusted Gifts & Decorations by Giftlaya
      </h6>

      <p className="mt-2 text-[16px] md:text-[18px] text-[#666]">
        1 Million + Happy Customers
      </p>
    </div>

    {/* Slider Container */}
    <div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">

      {categories.map((item, index) => (
        <div
          key={index}
          className="min-w-[160px] md:min-w-[180px] snap-start flex-shrink-0 text-center group transition-all duration-500"
        >

          {/* Circle Image */}
          <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] mx-auto rounded-full bg-[#f3f3f3] flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Title */}
          <h3 className="mt-5 text-[17px] md:text-[19px] font-normal text-[#1a2a3a] leading-[1.4] whitespace-pre-line group-hover:text-[#b1123f] transition duration-300">
            {item.title}
          </h3>

        </div>
      ))}

    </div>

  </div>
</section>
  );
}
