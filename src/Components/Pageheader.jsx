import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, User, ShoppingCart, Grid3X3, Menu,ChevronDown,  Store,
  Truck,
  Building2, } from "lucide-react";
import logo from '../assets/logo.png';
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function Pageheader() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
   const theme = "#1f4d5a";
     // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    {
      label: "Become a Seller",
      icon: <Store size={18} />,
    },
    {
      label: "Become a Vendor",
      icon: <Truck size={18} />,
    path: "/vendor-form",
    },
    {
      label: "Become a Franchise",
      icon: <Building2 size={18} />,
    },
  ];

    const handleOptionClick = (label) => {
    console.log(label);
    setOpen(false); // auto close
  };



  return (
    <header className="w-full border-b border-gray-200 bg-white">

      {/* ================= DESKTOP HEADER ================= */}
      <div className="hidden md:block">

        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-10">
            <div>
             <h1 className="text-4xl font-bold text-[#8B2E1E] leading-none flex items-center gap-2">
  <Link to='/'><img
    src={logo}
    alt="Logo"
    className="w-15 h-15 object-contain"
  /></Link>
</h1>
              <p className="text-xs text-gray-500 mt-1">
                Prakash Florist              </p>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <MapPin size={22} className="text-gray-600" />
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  Select City
                </p>
                <p className="text-base font-semibold text-[#8B2E1E]">
                  Not Selected
                </p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 mx-16">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder='Search "Cakes"'
                className="w-full border border-gray-300 rounded-full py-3 pl-12 pr-4"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
          <div className="relative inline-block z-[9999]" ref={dropdownRef}>
      
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
        style={{
          borderColor: theme,
          color: theme,
        }}
      >
        🏬 Sell with Us
        <span
          className="text-xs px-2 py-[3px] rounded-full"
          style={{ backgroundColor: theme, color: "#fff" }}
        >
          Register
        </span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
     {open && (
  <div className="absolute right-0 mt-3 w-64 rounded-2xl shadow-2xl border bg-white overflow-hidden animate-dropdown">
    
    <div className="py-2 text-sm">
      {options.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            navigate(item.path);
            setOpen(false); // dropdown close
          }}
          className="w-full flex items-center gap-3 px-5 py-3 transition-all duration-200 group hover:bg-gray-50"
        >
          <span
            className="p-1 rounded-lg transition-all duration-200"
            style={{
              backgroundColor: "#f0f7f8",
              color: theme,
            }}
          >
            {item.icon}
          </span>

          <span className="text-gray-700 group-hover:text-[#1f4d5a]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  </div>
)}
    </div>
            <Link to='/profile'>
            <div className="flex flex-col items-center text-sm">
              <User size={22} />
              <span>Login</span>
            </div>
            </Link>
          <Link to='/cart'>
            <div className="relative flex flex-col items-center text-sm">
              <ShoppingCart size={22} />
              <span>Cart</span>
              <span className="absolute -top-2 right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          
          </Link>

            <div className="flex flex-col items-center text-sm">
              <Grid3X3 size={22} />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 py-3 flex justify-between text-[17px] font-medium text-gray-700">
            <span>Flowers</span>
            <span>Cakes</span>
            <span>Decorations</span>
            <span>Gifts</span>
            <span>Experience</span>
            <span>Name Board</span>
            <span>Wedding</span>
            <span>Plants</span>
            <span>Home Decor</span>
            <span>Personalized</span>
            <span>Blog</span>
          </div>
        </div>

      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden">

        {/* Top Row */}
        <div className="flex items-center justify-between px-4 py-3">
        <Menu size={24} onClick={() => setIsOpen(true)} className="cursor-pointer" />
            {/* ================= LEFT DRAWER ================= */}
<div
  className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out shadow-xl`}
>
  {/* Top Profile Section */}
  <div className="bg-gradient-to-b from-[#d9cfc9] to-white p-5 relative">

    {/* Close Button */}
    <button
      className="absolute top-4 right-4 text-gray-600 text-xl"
      onClick={() => setIsOpen(false)}
    >
      ✕
    </button>

    <div className="flex items-center gap-4 mt-4">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c67c5c] to-[#8B2E1E] flex items-center justify-center text-white text-2xl font-semibold">
        U
      </div>

      <div>
        <h2 className="text-lg font-semibold flex items-center gap-2">
          User ⚙️
        </h2>
        <p className="text-sm text-gray-500">Login is pending</p>
      </div>
    </div>
  </div>

  {/* Menu List */}
  <div className="p-3 space-y-3 overflow-y-auto h-[80%]">

    {[
      "Flowers",
      "Cakes",
      "Decorations",
      "Gifts",
      "Experience",
      "Name Board",
      "Wedding",
      "Plants",
      "Home Decor",
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-white rounded-xl shadow-sm px-4 py-4 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-gray-400 rounded-sm grid grid-cols-2 gap-[2px] p-[2px]">
            <div className="bg-gray-400"></div>
            <div className="bg-gray-400"></div>
            <div className="bg-gray-400"></div>
            <div className="bg-gray-400"></div>
          </div>

          <span className="text-[16px] font-medium text-gray-700">
            {item}
          </span>
        </div>

        <span className="text-gray-400 text-lg">{">"}</span>
      </div>
    ))}

  </div>
</div>

{/* Overlay */}
{isOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-40 z-40"
    onClick={() => setIsOpen(false)}
  ></div>
)}


          <div className="text-center">
           <img
    src={logo}
    alt="Logo"
    className="w-15 h-15 object-contain"
  />

              <p className="text-xs text-gray-500 mt-1">
                Prakash Florist              </p>
          </div>

          <div className="flex items-center gap-4">
            <Search size={22} />
            <div className="relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </div>

        {/* City Row */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <MapPin size={16} />
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#8B2E1E] font-semibold">
                Choose Your City
              </span>

              <span className="bg-[#F3E6E3] text-[#8B2E1E] px-2 py-[2px] rounded text-xs font-semibold">
                Not Selected
              </span>
            </div>
          </div>

          <span className="text-gray-400 text-xl">{">"}</span>
        </div>

      </div>

      {/* ================= FIXED WHATSAPP & CALL BUTTONS ================= */}
<div className="fixed right-4 bottom-24 z-[9999] flex flex-col gap-3">

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919826992210"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-105 transition"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-7 h-7"
    />
  </a>

  {/* Call Button */}
<a
  href="tel:+919826992210"
  className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-105 transition"
>
  <FiPhoneCall className="text-white text-2xl" />
</a>

</div>

    </header>
  );
}

export default Pageheader;
