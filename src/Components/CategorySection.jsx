import sameDay from "../assets/cat-1.webp";
import birthday from "../assets/cat-2.webp";
import sympathy from "../assets/cat-3.webp";
import love from "../assets/cat-4.webp";
import getWell from "../assets/cat-5.webp";
import strawberry from "../assets/cat-6.webp";
import Roses1 from "../assets/Red Rose.avif";

export default function CategorySection() {
  const categories = [
    { img: sympathy, title: "Flowers" },
    { img: "https://media.istockphoto.com/id/1162297709/photo/wedding-bride-holding-wedding-bouquet-of-colorful-fresh-flowers.jpg?s=612x612&w=0&k=20&c=B8rRaALR592Cv0sHCmFSXHegnWnw_7qMT2-ezXHFLPA=", title: "Bouquet Designs" },
    { img: "https://media.istockphoto.com/id/1565554933/photo/flower.jpg?s=612x612&w=0&k=20&c=piiR9EPlhcBoA3XLg5Te8pAH9y7seNdR3gDHjxYellA=", title: "Varmala Studio" },
    { img: "https://media.istockphoto.com/id/599134644/photo/wedding-table-with-flower.jpg?s=612x612&w=0&k=20&c=7HGh9CvlOD-74ZMiN5Q_4D98NAa46cOkjhiGBM4S24c=", title: "Table Décor & Centerpieces" },
    { img: "https://media.istockphoto.com/id/685185908/photo/beautiful-wedding-ceremony-outdoors-wedding-arch-made-of-cloth-and-white-and-pink-flowers-on-a.jpg?s=612x612&w=0&k=20&c=cdcNarbOx3xtpUkj1svcePtBZIGbx301TxiNztVRpLA=", title: "Photo Booth" },
    { img: "https://media.istockphoto.com/id/2195946047/photo/indian-wedding-interiors-and-decorations.webp?a=1&b=1&s=612x612&w=0&k=20&c=miGLpAExq46v5PZXBsyJQ0_I_LMsssAvnOAcEztZWks=", title: "Entrance Décor" },
    { img: "https://images.unsplash.com/photo-1744891471127-46e1362e0c5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8", title: "Mandap Set-up" },
    { img: "https://media.istockphoto.com/id/92051408/photo/wedding-car.jpg?s=612x612&w=0&k=20&c=WRlQtkhGtdGLkPRgHu3t0A-adm6epWqylBrGymPOBm4=", title: "Car Decoration" },
    { img: "https://images.unsplash.com/photo-1724136781925-ea943b00f131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", title: "Sacred Flowers" },
    { img: "https://media.istockphoto.com/id/1150882026/photo/scenic-wedding-cake-with-table-bottom-decorated-with-brazilian-flowers-and-sweets.webp?a=1&b=1&s=612x612&w=0&k=20&c=MLXV3lYLfs53K6oUwGeLQaLYucKDUFWDlllZHNez9q0=", title: "Birthday Decoration flowers" },
  
  ];

  return (
  <section className="bg-[#e9e9e9] py-[70px] px-4 md:px-10 -mt-25">
  <div className="max-w-[1400px] mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h6 className="text-[20px] md:text-[30px] font-semibold text-pink-600">
        Trusted Gifts & Decorations by Prakash Florist
      </h6>

      <p className="mt-2 text-[16px] md:text-[18px] text-[#666]">
       Trusted by 5000+ Families in Indore.
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
