import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../assets/logo.png';
import Rupay from '../assets/Rupay.png'
import Visa from '../assets/Visa.png'
import Mastercard from '../assets/mastercard.png'
import Upi from '../assets/Upi.png'
import play from '../assets/play-store.svg'
import app from '../assets/app-store.svg'
import { Link } from "react-router-dom";

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
      
<div className="bg-[#f3f4f6] pt-14 pb-8">

  <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-sm px-6 md:px-12 py-12">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

      {/* Logo Section */}
      <div className="text-center md:text-left">

        <img
          src={logo}
          alt="Prakash Florist"
          className="w-20 h-20 mx-auto md:mx-0"
        />

        <p className="text-sm text-gray-700 mt-3 font-medium">
          Prakash Florist
        </p>

        <p className="text-sm text-gray-600 mt-2">
          Since 1970
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-3 mt-5">
          {[FaFacebookF, FaInstagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-md hover:bg-pink-500 hover:text-white transition"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

      </div>


      {/* Policy Links */}
      <div>

        <h3 className="text-lg font-semibold mb-5">
          Policy Info
        </h3>

        <ul className="space-y-3 text-[14px] text-gray-700">

          <li><Link to="/terms-and-conditions" className="hover:text-pink-600">Terms & Conditions</Link></li>
          <li><Link to="/privacy-policy" className="hover:text-pink-600">Privacy Policy</Link></li>
          <li><Link to="/disclaimer" className="hover:text-pink-600">Disclaimer</Link></li>
          <li><Link to="/shipping-policy" className="hover:text-pink-600">Shipping Policy</Link></li>
          <li><Link to="/cancellation-policy" className="hover:text-pink-600">Cancellation Policy</Link></li>

        </ul>

      </div>


      {/* Company Links */}
      <div>

        <h3 className="text-lg font-semibold mb-5">
          Company
        </h3>

        <ul className="space-y-3 text-[14px] text-gray-700">

          <li><Link to="/about" className="hover:text-pink-600">About Us</Link></li>
          <li><Link to="/blog" className="hover:text-pink-600">Latest Blogs</Link></li>
          <li><Link to="/contact" className="hover:text-pink-600">Contact Us</Link></li>
          <li><Link to="/gallery" className="hover:text-pink-600">Gallery</Link></li>
          <li><Link to="/faqs" className="hover:text-pink-600">FAQs</Link></li>

        </ul>

      </div>


      {/* Contact Section */}
      <div>

        <h3 className="text-lg font-semibold mb-5">
          Contact
        </h3>

        <ul className="space-y-3 text-[14px] text-gray-700">

          <li>
            📍 Vijay Nagar, Indore
          </li>

          <li>
            📞 +91 9826992210
          </li>

          <li>
            ✉ support@prakashflorist.com
          </li>

          <li>
            🕒 10 AM – 7:30 PM
          </li>

        </ul>

        {/* Payments */}
        <p className="mt-6 font-semibold text-[14px]">
          100% Secure Payments
        </p>

        <div className="flex gap-2 mt-3 flex-wrap">
          <img src={Rupay} className="h-7 border rounded-md px-2 py-1 bg-white"/>
          <img src={Visa} className="h-7 border rounded-md px-2 py-1 bg-white"/>
          <img src={Mastercard} className="h-7 border rounded-md px-2 py-1 bg-white"/>
          <img src={Upi} className="h-7 border rounded-md px-2 py-1 bg-white"/>
        </div>

      </div>

    </div>

  </div>


  {/* Bottom Section */}

  <div className="text-center text-sm text-gray-600 mt-8 leading-6 px-4">

    <p>
      Prakash Florist | Registered Office: A25 Rajat Jayanti Complex,
      Scheme No.54, Vijay Nagar, Indore
    </p>

    <p className="mt-1">
      Telephone: +91 9826992210
    </p>

    <p className="mt-2">
      © 2015-2026 Prakash Florist. All Rights Reserved.
    </p>

  </div>

</div>


      </div>
    </>
  );
}

export default Footer;
