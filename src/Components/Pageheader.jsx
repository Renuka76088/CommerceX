import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, User, ShoppingCart, Grid3X3, Menu,ChevronDown,  Store,
  Truck,
  Building2, X,  Sparkles, Flame, ArrowUpRight,Info, Phone, MessageCircle, HelpCircle, ChevronRight,
  Wallet} from "lucide-react";
import logo from '../assets/logo.png';
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Pageheader() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const navigate = useNavigate();
    const [expandedMenu, setExpandedMenu] = useState(null); // 2. Yeh line add karein (Error yahi se aa raha hai)
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
   const theme = "#1f4d5a";
     // Close on outside click

   const menuData = [
  { name: 'Home', path: '/' },

  {
    name: 'Flower Category',
    path: '/flower-category',
    subcategories: [
      {
        title: 'Flower Bouquets',
        items: [
          'All Bouquets',
          'Rose Bouquets',
          'Carnation Bouquets',
          'Gerbera Bouquets',
          'Lily Bouquets',
          'Orchid Bouquets',
          'Mixed Flower Bouquets'
        ]
      },
      {
        title: 'Flower Boxes',
        items: [
          'Rose Flower Box',
          'Mixed Flower Box',
          'Luxury Flower Box',
          'Heart Shape Flower Box'
        ]
      },
      {
        title: 'Flower Baskets',
        items: [
          'Rose Basket',
          'Mixed Flower Basket',
          'Carnation Basket',
          'Orchid Basket'
        ]
      },
      {
        title: 'Flower Combos',
        items: [
          'Flowers With Cake',
          'Flowers With Chocolate',
          'Flowers With Teddy',
          'Flowers With Gifts'
        ]
      },
      {
        title: 'Loose Flowers',
        items: [
          'Rose Petals',
          'Marigold Flowers',
          'Jasmine Flowers',
          'Loose Mixed Flowers'
        ]
      },
      {
        title: 'Flower Garlands',
        items: [
          'Rose Garlands',
          'Marigold Garlands',
          'Jasmine Garlands',
          'Wedding Garlands'
        ]
      }
    ]
  },

  {
    name: 'Flower Products',
    path: '/flower-products',
    subcategories: [
      {
        title: 'Rose Bouquets',
        path:'/rose-bouquets',
        items: [
          '12 Red Rose Bouquet',
          '25 Red Rose Bouquet',
          '50 Red Rose Bouquet',
          '100 Red Rose Bouquet'
        ]
      },
      {
        title: 'Mixed Bouquets',
        items: [
          'Mixed Flower Bouquet',
          'Seasonal Flower Bouquet',
          'Premium Mixed Bouquet'
        ]
      },
      {
        title: 'Lily Bouquets',
        items: [
          'White Lily Bouquet',
          'Pink Lily Bouquet',
          'Mixed Lily Bouquet'
        ]
      },
      {
        title: 'Flower Boxes',
        items: [
          'Red Rose Box',
          'Luxury Flower Box',
          'Heart Shape Flower Box'
        ]
      },
      {
        title: 'Flower Baskets',
        items: [
          'Rose Basket',
          'Mixed Flower Basket',
          'Premium Flower Basket'
        ]
      }
    ]
  },

  {
    name: 'Flower Decoration',
    path: '/flower-decoration',
    subcategories: [
      {
        title: 'Wedding Decoration',
        items: [
          'Haldi Decoration',
          'Mehndi Decoration',
          'Wedding Stage Decoration',
          'Table Decoration',
          'Mandap Decoration',
          'varmala studio'
        ]
      },
      {
        title: 'Event Decoration',
        items: [
          'Sacred Flowers',
          'Birthday Decoration',
          'Anniversary Decoration',
          'Entrance Decor',
          'photo-booth',
          'Baby Shower Decoration',
          'Proposal Decoration'
        ]
      },
      {
        title: 'Car Decoration',
        items: [
          'Wedding Car Decoration',
          'Bride Car Decoration',
          'Rose Car Decoration',
          'Ribbon Flower Car Decoration'
        ]
      }
    ]
  },

  { name: 'Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'FAQs', path: '/faqs' }
];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const trendingItems = [
    "Cakes",
    "Birthday",
    "Romantic Decoration",
    "Festival Decoration",
    "Valentines day gift",
  ];

     const menuItems1  = [
  { name: 'Home', path: '/' },

  {
    name: 'Flower Category',
    path: '/flower-category',
    subcategories: [
      {
        title: 'Flower Bouquets',
        items: [
          'All Bouquets',
          'Rose Bouquets',
          'Carnation Bouquets',
          'Gerbera Bouquets',
          'Lily Bouquets',
          'Orchid Bouquets',
          'Mixed Flower Bouquets'
        ]
      },
      {
        title: 'Flower Boxes',
        items: [
          'Rose Flower Box',
          'Mixed Flower Box',
          'Luxury Flower Box',
          'Heart Shape Flower Box'
        ]
      },
      {
        title: 'Flower Baskets',
        items: [
          'Rose Basket',
          'Mixed Flower Basket',
          'Carnation Basket',
          'Orchid Basket'
        ]
      },
      {
        title: 'Flower Combos',
        items: [
          'Flowers With Cake',
          'Flowers With Chocolate',
          'Flowers With Teddy',
          'Flowers With Gifts'
        ]
      },
      {
        title: 'Loose Flowers',
        items: [
          'Rose Petals',
          'Marigold Flowers',
          'Jasmine Flowers',
          'Loose Mixed Flowers'
        ]
      },
      {
        title: 'Flower Garlands',
        items: [
          'Rose Garlands',
          'Marigold Garlands',
          'Jasmine Garlands',
          'Wedding Garlands'
        ]
      }
    ]
  },

  {
    name: 'Flower Products',
    path: '/flower-products',
    subcategories: [
      {
        title: 'Rose Bouquets',
        items: [
          '12 Red Rose Bouquet',
          '25 Red Rose Bouquet',
          '50 Red Rose Bouquet',
          '100 Red Rose Bouquet'
        ]
      },
      {
        title: 'Mixed Bouquets',
        items: [
          'Mixed Flower Bouquet',
          'Seasonal Flower Bouquet',
          'Premium Mixed Bouquet'
        ]
      },
      {
        title: 'Lily Bouquets',
        items: [
          'White Lily Bouquet',
          'Pink Lily Bouquet',
          'Mixed Lily Bouquet'
        ]
      },
      {
        title: 'Flower Boxes',
        items: [
          'Red Rose Box',
          'Luxury Flower Box',
          'Heart Shape Flower Box'
        ]
      },
      {
        title: 'Flower Baskets',
        items: [
          'Rose Basket',
          'Mixed Flower Basket',
          'Premium Flower Basket'
        ]
      }
    ]
  },

  {
    name: 'Flower Decoration',
    path: '/flower-decoration',
    subcategories: [
      {
        title: 'Wedding Decoration',
        items: [
          'Haldi Decoration',
          'Mehndi Decoration',
          'Wedding Stage Decoration',
          'Table Decoration',
          'Mandap Decoration',
          'varmala studio'
        ]
      },
      {
        title: 'Event Decoration',
        items: [
          'Sacred Flowers',
          'Birthday Decoration',
          'Anniversary Decoration',
          'Entrance Decor',
          'photo-booth',
          'Baby Shower Decoration',
          'Proposal Decoration'
        ]
      },
      {
        title: 'Car Decoration',
        items: [
          'Wedding Car Decoration',
          'Bride Car Decoration',
          'Rose Car Decoration',
          'Ribbon Flower Car Decoration'
        ]
      }
    ]
  },

  { name: 'Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'FAQs', path: '/faqs' }
];


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
      label: "Become a Admin",
      icon: <Truck size={18} />,
    path: "/admin-dashboard",
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
const menuItems = [
    { label: 'About Us', icon: <Info size={18} />, link: '/about' },
    { label: 'Contact Us', icon: <Phone size={18} />, link: '/contact' },
    { label: 'FAQs', icon: <HelpCircle size={18} />, link: '/faqs' },
    { label: 'WhatsApp Us', icon: <FaWhatsapp size={18} />, link: 'https://wa.me/9826992210', color: 'text-green-500' },
  ];


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

            {/* <div className="flex items-center gap-2 cursor-pointer">
              <MapPin size={22} className="text-gray-600" />
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  Select City
                </p>
                <p className="text-base font-semibold text-[#8B2E1E]">
                  Not Selected
                </p>
              </div>
            </div> */}
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
      {/* <button
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
      </button> */}

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
            <Link to='/login'>
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

           <div 
      className="relative inline-block py-2 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
     <Link
  to="/shop-more"
  className="flex flex-col items-center text-sm transition-colors duration-200 cursor-pointer text-gray-600 hover:text-blue-600"
>
  <Grid3X3
    size={22}
    className="transition-transform duration-300 hover:rotate-90"
  />
  <span className="font-medium">Shop More</span>
</Link>
  

      {/* Dropdown Menu - Opens Downwards */}
    
    </div>
           <div 
      className="relative inline-block py-2 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
     <Link
  to="/shop-more"
  className="flex flex-col items-center text-sm transition-colors duration-200 cursor-pointer text-gray-600 hover:text-blue-600"
>
  <Wallet
    size={22}
    className="transition-transform duration-300 hover:rotate-90"
  />
  <span className="font-medium">Book Now</span>
</Link>
  

      {/* Dropdown Menu - Opens Downwards */}
    
    </div>
          </div>
        </div>

 
     <div className="border-t border-gray-200 bg-white sticky top-0 z-50">
  <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-16">
    {menuData.map((menu, index) => (
      <div key={index} className="relative group h-full flex items-center">
        {/* Main Link */}
        <Link
          to={menu.path}
          className="text-[17px] font-semibold text-gray-700 hover:text-rose-600 transition-colors duration-200 flex items-center gap-1 py-4"
        >
          {menu.name}
          {menu.subcategories && (
            <span className="text-[12px] group-hover:rotate-180 transition-transform duration-300">▼</span>
          )}
        </Link>

        {/* Dropdown */}
        {menu.subcategories && (
          <div className="absolute top-full left-0 hidden group-hover:flex bg-white border border-gray-100 shadow-xl p-6 gap-8 rounded-b-xl animate-in fade-in slide-in-from-top-2 duration-300 w-max">
            {menu.subcategories.map((sub, idx) => {
              // Yahan hum path decide kar rahe hain: 
              // Agar sub.path exists hai toh wo use karo, nahi toh title se banao
              const subPath = sub.path || `${menu.path}/${sub.title.toLowerCase().replace(/ /g, "-")}`;
              
              return (
                <div key={idx} className="flex flex-col">
                  {/* --- UPDATED TITLE TO LINK --- */}
                  <Link 
                    to={subPath}
                    className="font-semibold text-gray-900 text-[15px] mb-3 border-b border-rose-100 pb-1 hover:text-rose-600 hover:border-rose-500 transition-colors"
                  >
                    {sub.title}
                  </Link>

                  <ul className="space-y-2">
                    {sub.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={`${subPath}/${item.toLowerCase().replace(/ /g, "-")}`}
                          className="text-gray-500 text-[14px] hover:text-rose-500 hover:translate-x-1 transition-all inline-block"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    ))}

    {/* Extra Links */}
    <Link
      to="/visit-our-shop"
      className="text-[17px] font-semibold text-gray-700 hover:text-rose-600 transition-colors"
    >
      Visit Our Store
    </Link>

    <Link
      to="/blog"
      className="text-[17px] font-semibold text-gray-700 hover:text-rose-600 transition-colors"
    >
      Blog
    </Link>

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
<div className="h-full w-full bg-gray-50 overflow-y-auto pb-24">
  <div className="p-3 space-y-3">

    {menuItems1.map((item, index) => {

      const hasSub = item.subcategories && item.subcategories.length > 0;
      const isExpanded = expandedMenu === index;

      return (
        <div key={index} className="flex flex-col">

          {/* Main Item */}
          {!hasSub ? (
            <Link
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm px-4 py-4 cursor-pointer"
            >
              <span className="text-[16px] font-medium text-gray-700">
                {item.name}
              </span>

              <span className="text-gray-400 text-lg">›</span>
            </Link>
          ) : (
            <div
              onClick={() => setExpandedMenu(isExpanded ? null : index)}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm px-4 py-4 cursor-pointer"
            >
              <span className="text-[16px] font-medium text-gray-700">
                {item.name}
              </span>

              <span
                className={`text-gray-400 text-lg transition-transform ${
                  isExpanded ? "rotate-90 text-pink-500" : ""
                }`}
              >
                ›
              </span>
            </div>
          )}

          {/* Sub Menu */}
          {hasSub && isExpanded && (
            <div className="bg-white px-4 py-3 space-y-2">
              {item.subcategories.map((sub, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-bold text-gray-400 mb-2">
                    {sub.title}
                  </h4>

                  {sub.items.map((subItem, i) => (
                    <Link
                      key={i}
                      to={`${item.path}/${subItem
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-gray-600 hover:text-pink-500"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

        </div>
      );
    })}

  </div>
</div>
</div>

{/* Overlay */}
{isOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-40 z-40"
    onClick={() => setIsOpen(false)}
  ></div>
)}

<Link to='/'>

          <div className="text-center">
           <img
    src={logo}
    alt="Logo"
    className="w-15 h-15 object-contain"
  />

              <p className="text-xs text-gray-500 mt-1">
                Prakash Florist              </p>
          </div>
</Link>

         <div className="flex items-center gap-4">
  
  {/* Search Icon */}
  <Search 
    size={22} 
    className="cursor-pointer"
    onClick={() => setOpenSearch(true)} 
  />

  <Link to="/cart" className="relative">
    <div className="relative">
      <ShoppingCart size={22} />
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
        0
      </span>
    </div>
  </Link>

</div>

<AnimatePresence>
      {openSearch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white/80 backdrop-blur-xl flex justify-center overflow-y-auto"
        >
          {/* CLOSE BUTTON */}
          <motion.button
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            onClick={() => setOpenSearch(false)}
            className="absolute top-6 right-6 p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
          >
            <X size={24} />
          </motion.button>

          <div className="w-full max-w-xl pt-24 px-6">
            
            {/* TITLE SECTION */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 p-3 rounded-2xl shadow-lg shadow-pink-200">
                <Sparkles size={22} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                  Find Something <span className="text-pink-500">Special</span>
                </h2>
                <p className="text-sm text-gray-500">Search from 50K+ Premium Products</p>
              </div>
            </motion.div>

            {/* SEARCH INPUT */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative mb-12"
            >
              <div className="group flex items-center gap-4 bg-white border-2 border-pink-50 rounded-2xl px-5 py-4 shadow-sm focus-within:shadow-md focus-within:border-pink-200 transition-all duration-300">
                <Search className="text-pink-400 group-focus-within:scale-110 transition-transform" size={22} />
                <input
                  type="text"
                  placeholder='Search for "Heart Cakes" or "Roses"...'
                  autoFocus
                  className="w-full outline-none text-lg text-gray-700 placeholder-gray-300 bg-transparent"
                />
              </div>
            </motion.div>

            {/* TRENDING SECTION */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="bg-orange-100 p-1.5 rounded-lg">
                  <Flame size={18} className="text-orange-500" />
                </div>
                <p className="text-[16px] font-bold text-gray-600 uppercase tracking-wider">
                  Trending Now
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-3">
                {trendingItems.map((item, i) => (
                  <motion.button
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpenSearch(false)}
                    className="group flex items-center gap-2 bg-pink-50 hover:bg-pink-500 border border-pink-100 hover:border-pink-500 text-pink-700 hover:text-white px-5 py-2.5 rounded-2xl text-[14px] font-medium transition-all duration-200"
                  >
                    {item}
                    <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100" />
                  </motion.button>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
        </div>

        {/* City Row */}
        <Link to='/select-city'>
        
        
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
        </Link>

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
