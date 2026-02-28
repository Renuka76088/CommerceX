import { motion } from "framer-motion";
import birthday from "../assets/Birthday.webp";
import anniversary from "../assets/Anniversary.webp";
import wedding from "../assets/Weddings.webp";
import valentine from "../assets/Valentines Day.webp";
import congrats from "../assets/Congratulations.webp";

function OccasionSection() {
  return (
    <div className="bg-gradient-to-b from-[#f8f8f8] to-[#eeeeee] py-16 px-6">
      <div className="max-w-[1250px] mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-[#1a2a4a] mb-12"
        >
          Send Flowers for Every Occasion
        </motion.h2>

        {/* New Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT CARD (Smaller Now) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-[26px] overflow-hidden shadow-md hover:shadow-xl transition duration-500 group"
          >
            <img
              src={birthday}
              alt="Birthday"
              className="w-full h-[290px] md:h-[350px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>

           
          </motion.div>

          {/* RIGHT 4 CARDS */}
          <div className="grid grid-cols-2 gap-6">

            {[
              { img: anniversary, title: "Anniversaries" },
              { img: wedding, title: "Weddings" },
              { img: valentine, title: "Valentine's Day" },
              { img: congrats, title: "Congratulations" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="relative rounded-[22px] overflow-hidden shadow-sm hover:shadow-lg transition duration-500 group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[140px] md:h-[160px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default OccasionSection;
