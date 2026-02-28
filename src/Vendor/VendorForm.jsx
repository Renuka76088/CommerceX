import React from "react";
import { Users, MapPin, Gift, Truck } from "lucide-react";
import Vendor from '../assets/Vendor.webp'
import { Link } from "react-router-dom";

export default function VendorForm() {

  function Select({ label, text, children }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <select className="input-style">
        <option value="" disabled hidden>
          {text}
        </option>
        {children}
      </select>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-[#f5efec] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl bg-[#efe7e3] rounded-2xl p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#8c2b17]">
              Become a Vendor Today!
            </h1>
            <p className="text-gray-600 mt-2">
              Get access to thousands of buyers
            </p>

            <div className="mt-6 flex justify-center">
              <img
                src={Vendor}
                alt="vendor"
                className="w-72 md:w-80"
              />
            </div>

            {/* Stats */}
           <div className="mt-8 bg-[#fdf7f4] rounded-xl p-6">
  <div className="grid grid-cols-2 gap-4 text-center text-sm font-medium text-gray-700">

    <div className="bg-[#f3ebe8] p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
      <Users size={22} className="text-[#8c2b17]" />
      <span>15 Million+ Customers Reached</span>
    </div>

    <div className="bg-[#f3ebe8] p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
      <MapPin size={22} className="text-[#8c2b17]" />
      <span>500+ Cities & Towns Covered</span>
    </div>

    <div className="bg-[#f3ebe8] p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
      <Gift size={22} className="text-[#8c2b17]" />
      <span>200+ Gifting & Event Categories</span>
    </div>

    <div className="bg-[#f3ebe8] p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
      <Truck size={22} className="text-[#8c2b17]" />
      <span>25 Lakh+ Orders Delivered across India</span>
    </div>

  </div>
</div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#fdf7f4] rounded-2xl p-6 md:p-8">

            <form className="space-y-5">

              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Full Name *" placeholder="Enter your full name" />
                <Input label="Email *" placeholder="Enter your email" />
              </div>

              {/* Business */}
              <Input label="Business Name *" placeholder="Enter your business name" />

              {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
  {/* City Select */}
  <Select label="City *" text="Select City">
    <option value="delhi">Delhi</option>
    <option value="mumbai">Mumbai</option>
    <option value="bangalore">Bangalore</option>
    <option value="chennai">Chennai</option>
    <option value="other">Other</option>
  </Select>

  {/* Interested Category Select */}
  <Select label="Interested Category *" text="Select Category">
    <option value="bakery">Bakery</option>
    <option value="florist">Florist</option>
    <option value="decoration">Decoration</option>
    <option value="gift">Gift Shop</option>
    <option value="other">Other</option>
  </Select>
</div>
              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-4">
                <PhoneInput label="Mobile Number * (Verify OTP)" />
                <PhoneInput label="Alternate Contact No." placeholder="Whatsapp Number" />
              </div>

              {/* Row 4 */}
           <div className="grid md:grid-cols-2 gap-4">
  {/* LEFT COLUMN: Address full height */}
  <div>
    <Textarea label="Address *" />
  </div>

  {/* RIGHT COLUMN: GST and How did you find us? stacked */}
  <div className="flex flex-col gap-4">
    <Input label="GST Number (if any)" placeholder="Enter GST number" />
    <Select label="How did you find us?" text="Select an option">
      <option value="social">Social Media</option>
      <option value="friend">Google Search</option>
      <option value="ad">Word Of Mouth</option>
      <option value="other">Other</option>
    </Select>
  </div>
</div>
          

              {/* Social Links */}
              <div>
                <label className="form-label">
                  Social Links (You can add multiple) *
                </label>

               <div className="flex flex-col md:flex-row gap-3">
  <select className="input-style w-full md:w-1/3">
    <option>Select Type</option>
    <option value="youtube">YouTube</option>
    <option value="instagram">Instagram</option>
    <option value="facebook">Facebook</option>
    <option value="website">Website</option>
  </select>

  <input
    type="text"
    placeholder="Enter URL"
    className="input-style w-full md:w-1/3"
  />

  <button
    type="button"
    className="bg-[#8c2b17] text-white px-5 py-2 rounded-lg w-full md:w-auto"
  >
    Add
  </button>
</div>
              </div>
              <Link to="/vendor-dashboard">
              
               <button
                type="submit"
                className="w-full bg-[#8c2b17] text-white py-3 rounded-lg text-lg font-medium mt-2"
              >
                Submit Request
              </button>
              </Link>

             

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


/* Components */

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input type="text" placeholder={placeholder} className="input-style" />
    </div>
  );
}

function Select({ label, text }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <select className="input-style">
        <option>{text}</option>
      </select>
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <textarea
        rows="4"
        placeholder="Complete address"
        className="input-style resize-none"
      />
    </div>
  );
}

function PhoneInput({ label, placeholder = "Mobile Number" }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <div className="flex gap-2">
        <div className="input-style flex-1">+91</div>
        <input
          type="text"
          placeholder={placeholder}
          className="input-style w-16 text-center"
        />
      </div>
    </div>
  );
}