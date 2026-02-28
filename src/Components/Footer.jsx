import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../assets/logo.png';
import Rupay from '../assets/Rupay.png'
import Visa from '../assets/Visa.png'
import Mastercard from '../assets/mastercard.png'
import Upi from '../assets/Upi.png'
import play from '../assets/play-store.svg'
import app from '../assets/app-store.svg'

function Footer() {
  return (
    <>
      <div className="bg-[#f5f5f5] pt-10">

        {/* ================= POPULAR SEARCHES ================= */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

          <h2 className="text-lg sm:text-xl font-semibold mb-6">
            Popular Searches
          </h2>

          <div className="space-y-8 text-[13px] sm:text-[14px] text-gray-700 leading-7">

            {/* Row */}
            {[
              {
                title: "Decoration Categories",
                content:
                  "Annaprashan | Anniversary Decoration | Baby Shower | Baby Welcome | Birthday | Bride to be | Bride Welcome | Cabana | Candle Light Dinner | Canopy | Car Boot | Ceremony | Christening | Christmas | Cradle Ceremony | Dohale Jeevan | Festival | First Night | Flower Decor | Haldi | Kids Birthday | Mehndi | Mundan | Naming Ceremony | Office | Proposal | Romantic | Room | Stage | Terrace | Wedding Car",
              },
              {
                title: "Decoration Services in Indore",
                content:
                  "Decoration in Palasia | Decoration in Vijay Nagar | Decoration in Lig | Decoration in Scheme no.78 | Decoration in Satya Sai | Decoration in Bhavarkua | Decoration in vishnupuri | Decoration in Rigal Square | Decoration in Khajrana | Decoration in Bangali Square | Decoration in Khandwa Naka | Decoration in Dewas | Decoration in Naulakka | Decoration in Gitabhavan | Decoration in Rajwada | Decoration in Rau | Decoration in Nipania",
              },
              {
                title: "Our Cake Delivery in Indore",
                content:
                  "Redison | Saket Square | Badi Bhamori | Palasia | Vijay Nagar | Dewas | Khandwa | Rau | Rajive Ghandi | Nipania | Satya Sai| Gandhinagar | Scheme no.78 | Vishnupuri | Rigal Square | Rajwada | Bangali Square | Mahalaxmi Nagar | Khajrana | 3Imli | Tejaji Nagar | Mahu | Palda | Naulakka",
              },
              {
                title: "Flower Delivery Service",
                content:
                  "Flower Delivery in Palasia | Flower delivery in Vijay Nagar | Flower delivery in Lig | Flower delivery in Scheme no.78 | Flower delivery in Satya Sai | Flower delivery in Bhavarkua | Flower delivery in vishnupuri | Flower delivery in Rigal Square | Flower delivery in Gandhinagar | Flower delivery in Khajrana | Flower delivery in Khandwa Naka | Flower delivery in Bangali Square | Flower delivery in  Gitabhavan | Flower delivery in Naulakka | Flower delivery in Nipania | Flower delivery in Rau | Flower delivery in Rajwada | Flower delivery in Badi Bhamori ",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-3 md:gap-6"
              >
                <div className="md:w-[220px] font-semibold">
                  {item.title}
                </div>
                <div className="flex-1 text-gray-600">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
      
 <div className="bg-[#f3f4f6] pt-12 pb-6">

  {/* Main Card */}
  <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-sm px-6 md:px-10 py-10">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">

      {/* Logo Section */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-[#8B2E1E] leading-none flex items-center gap-2">
         <img
           src={logo}
           alt="Logo"
           className="w-20 h-20 object-contain"
         />
       </h1>
                     <p className="text-xs text-gray-500 mt-1">
                       Prakash Florist              </p>

        <p className="text-sm text-gray-700 mt-4">
          © 2026 Prakash Florist
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-3 mt-4 text-gray-600">
          {[ FaFacebookF, FaInstagram].map((Icon, i) => (
            <div
              key={i}
              className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300 transition"
            >
              <Icon size={15} />
            </div>
          ))}
        </div>

        {/* Payments */}
        <div className="mt-8 font-semibold text-[15px] text-center md:text-left">
          100% Secure Payments
        </div>

    <div className="flex justify-center md:justify-start gap-3 mt-4 flex-nowrap">
  <img src={Rupay} alt="Rupay" className="h-7 border rounded-md px-2 py-1 bg-white" />
  <img src={Visa} alt="Visa" className="h-7 border rounded-md px-2 py-1 bg-white" />
  <img src={Mastercard} alt="Mastercard" className="h-7 border rounded-md px-2 py-1 bg-white" />
  <img src={Upi} alt="UPI" className="h-7 border rounded-md px-2 py-1 bg-white" />
</div>
      </div>

      {/* 🔥 Mobile me 2 column layout */}
      <div className="grid grid-cols-2 gap-8 md:contents">

        {/* Policy Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 md:mb-6">Policy Info</h3>
          <ul className="space-y-2 md:space-y-5 text-[14px] md:text-[15px] text-gray-800">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Shipping Policy</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 md:mb-6">About Company</h3>
          <ul className="space-y-2 md:space-y-5 text-[14px] md:text-[15px] text-gray-800">
            <li>About Us</li>
            <li>Latest Blogs</li>
            <li>Contact Us</li>
            <li>Vendor</li>
            <li>Sitemap</li>
          </ul>
        </div>

      </div>

      {/* Download App */}
      <div className="mt-10 md:mt-0">
        <h3 className="text-lg font-semibold mb-6 text-center md:text-left">
          Download App
        </h3>

        <div className="space-y-4 md:space-y-6">
          <button className="w-full bg-gray-100 rounded-2xl py-4 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition">
            <img src={play} alt="" className="h-6" />
            <span className="text-[16px] font-medium">Play Store</span>
          </button>

          <button className="w-full bg-gray-100 rounded-2xl py-4 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition">
            <img src={app } alt="" className="h-6" />
            <span className="text-[16px] font-medium">App Store</span>
          </button>
        </div>
      </div>

    </div>
  </div>

  {/* Bottom Section */}
  <div className="text-center text-sm text-gray-600 mt-6 leading-6 px-4">
    Prakash Florist | Registered Office: A25 RAJAT JAYANTI COMPLEX SCH. NO.54, Vijay Nagar, Indore, <br />
    Telephone No: +91 9826992210 | Support : support@prakashflorist.com [ 10 AM to 7:30 PM ] <br />
    © 2015-2026 Prakash Florist All rights reserved.
  </div>

</div>


      </div>
    </>
  );
}

export default Footer;
