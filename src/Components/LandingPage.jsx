import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Banner1 from '../assets/Banner-1.jpeg'
import Banner2 from '../assets/Banner-2.jpeg'
import Banner3 from '../assets/Banner-3.jpeg'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import TrendingGifts from "./TrendingGifts";
import OccasionSection from "./OccasionSection";
import CategorySection from "./CategorySection";
import BestSeller from "./BestSeller";
import TestimonialSection from "./testimonials";
import WhyChooseUs from "./WhyChooseUs";

function LandingPage() {
  return (
    <>
   <div className="w-screen h-[60vh] md:h-[80vh] lg:h-screen mt-0">
  <div className="w-full h-full rounded-none overflow-hidden relative group">

    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      effect="fade"
      autoplay={{ delay: 4000 }}
      loop={true}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      className="w-full h-full"
    >
      {/* Slide 1 */}
      <SwiperSlide className="w-full h-full">
        <BannerSlide bg={Banner1} />
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="w-full h-full">
        <BannerSlide bg={Banner2} />
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide className="w-full h-full">
        <BannerSlide bg={Banner3} />
      </SwiperSlide>
    </Swiper>

    {/* Navigation Buttons */}
    <div className="custom-prev absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 
      w-8 h-8 md:w-10 md:h-10 
      bg-white/80 backdrop-blur-sm rounded-full 
      flex items-center justify-center 
      shadow-md cursor-pointer hover:bg-white transition">
      ❮
    </div>

    <div className="custom-next absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 
      w-8 h-8 md:w-10 md:h-10 
      bg-white/80 backdrop-blur-sm rounded-full 
      flex items-center justify-center 
      shadow-md cursor-pointer hover:bg-white transition">
      ❯
    </div>

  </div>
</div>
    <CategorySection/>
    <BestSeller/>
    <TrendingGifts/>
    <OccasionSection/>
    <TestimonialSection/>
    <WhyChooseUs/>

    </>
  );
}

function BannerSlide({ bg, small, title, desc }) {
  return (
    <div
      className="relative w-full h-[280px] md:h-[420px] lg:h-[480px] flex items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16 w-full">
        <div className="max-w-[600px]">
          <p className="text-xs md:text-sm font-medium text-gray-700 mb-2">
            {small}
          </p>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-pink-600 drop-shadow-md leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-sm md:text-lg text-gray-700 font-medium">
            {desc}
          </p>

          {/* CTA Buttons */}
         
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
