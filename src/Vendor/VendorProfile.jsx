import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, Mail, Phone, MapPin, BadgeCheck, 
  Camera, ShoppingBag, Star, Clock, Settings,
  Globe, Instagram, Twitter, ChevronRight, Save
} from 'lucide-react';

const VendorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] p-4 md:p-10 font-sans text-gray-800">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeInUp}
        className="max-w-5xl mx-auto space-y-8"
      >
        
        {/* --- Store Header Card --- */}
        <section className="bg-white rounded-[40px] shadow-sm border border-pink-100 overflow-hidden relative">
          {/* Decorative Background */}
          <div className="h-40 bg-gradient-to-r from-pink-200 to-rose-300 opacity-40"></div>
          
          <div className="px-8 pb-8 relative">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 gap-6 text-center md:text-left">
              <div className="relative group">
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-[45px] border-8 border-white bg-pink-50 overflow-hidden shadow-xl shadow-pink-100/50">
                  <img 
                    src="https://api.dicebear.com/7.x/bottts/svg?seed=pinkStore" 
                    alt="Store Logo" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <button className="absolute bottom-2 right-2 p-2.5 bg-pink-500 text-white rounded-2xl shadow-lg hover:scale-110 transition-transform">
                  <Camera size={20} />
                </button>
              </div>

              <div className="flex-1 mb-2">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <h1 className="text-3xl font-black text-gray-800">Pink Fashion Store</h1>
                  <BadgeCheck className="text-pink-500" size={24} />
                </div>
                <p className="text-pink-400 font-bold text-sm uppercase tracking-widest">Premium Apparel Vendor</p>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-gray-500 text-sm font-medium">
                  <span className="flex items-center gap-1"><Star size={16} className="text-yellow-400 fill-yellow-400" /> 4.9 (2.1k Reviews)</span>
                  <span className="flex items-center gap-1"><Store size={16} /> Joined Jan 2024</span>
                </div>
              </div>

              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="mb-2 px-8 py-3 bg-pink-500 text-white rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-all flex items-center gap-2"
              >
                {isEditing ? <><Save size={18}/> Save Store</> : <><Settings size={18}/> Store Settings</>}
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Left Column: Business Details --- */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-[35px] border border-pink-50 shadow-sm">
              <h3 className="text-lg font-black mb-6 flex items-center gap-2 text-gray-700">
                <Globe size={20} className="text-pink-400" /> Public Profile
              </h3>
              <div className="space-y-5">
                <ContactInfo icon={<Mail size={18}/>} label="Business Email" value="sales@pinkfashion.com" />
                <ContactInfo icon={<Phone size={18}/>} label="Support Number" value="+91 88221 00443" />
                <ContactInfo icon={<MapPin size={18}/>} label="Warehouse" value="Surat, Gujarat, India" />
                <div className="pt-4 flex gap-3">
                    <SocialBtn icon={<Instagram size={20}/>} />
                    <SocialBtn icon={<Twitter size={20}/>} />
                    <SocialBtn icon={<Globe size={20}/>} />
                </div>
              </div>
            </motion.div>

            <div className="bg-pink-500 p-8 rounded-[35px] text-white shadow-xl shadow-pink-200 relative overflow-hidden group">
               <ShoppingBag className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform" />
               <p className="text-xs font-bold opacity-80 mb-1 tracking-widest uppercase">Current Subscription</p>
               <h3 className="text-2xl font-black mb-4 tracking-tight">Platinum Vendor</h3>
               <button className="text-xs font-black bg-white text-pink-500 px-4 py-2 rounded-xl uppercase">Upgrade Plan</button>
            </div>
          </div>

          {/* --- Right Column: Performance & Store Info --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Store Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <VendorStat label="Products" value="142" />
               <VendorStat label="Orders" value="4.8k" />
               <VendorStat label="Returns" value="0.2%" />
               <VendorStat label="Rating" value="4.9" />
            </div>

            {/* Business Verification Status */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-[35px] border border-pink-50 shadow-sm">
              <h3 className="text-xl font-black mb-6 text-gray-800">Trust & Verification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <VerificationBadge label="GST/Tax Verified" status="Complete" active />
                <VerificationBadge label="Identity Proof" status="Complete" active />
                <VerificationBadge label="Warehouse Audit" status="Pending" active={false} />
                <VerificationBadge label="Bank Verification" status="Complete" active />
              </div>
            </motion.div>

            {/* Store Description Section */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-[35px] border border-pink-50 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-black text-gray-800">About the Store</h3>
                <Clock className="text-pink-300" size={20} />
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                Pink Fashion Store is dedicated to providing high-quality, sustainable ethnic and modern apparel. 
                Our focus is on premium fabrics and unique designs that empower our customers. We have been 
                part of the VendorHub community for over a year, maintaining a 99% fulfillment rate.
              </p>
            </motion.div>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

// --- Sub-Components ---

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 group cursor-default">
    <div className="p-3 bg-pink-50 rounded-2xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase font-bold text-pink-300 tracking-wider leading-none mb-1">{label}</p>
      <p className="text-gray-700 font-bold text-sm">{value}</p>
    </div>
  </div>
);

const SocialBtn = ({ icon }) => (
    <button className="p-3 bg-pink-50 text-pink-400 rounded-2xl hover:bg-pink-500 hover:text-white transition-all">
        {icon}
    </button>
);

const VendorStat = ({ label, value }) => (
    <div className="bg-white p-5 rounded-[28px] border border-pink-50 shadow-sm text-center group hover:bg-pink-50 transition-colors">
        <h4 className="text-2xl font-black text-gray-800 group-hover:scale-110 transition-transform">{value}</h4>
        <p className="text-[10px] font-black text-pink-400 uppercase tracking-tighter mt-1">{label}</p>
    </div>
);

const VerificationBadge = ({ label, status, active }) => (
    <div className={`p-4 rounded-2xl border flex items-center justify-between ${active ? 'bg-green-50/50 border-green-100' : 'bg-gray-50 border-gray-100'}`}>
        <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <span className="text-xs font-bold text-gray-700">{label}</span>
        </div>
        <span className={`text-[10px] font-black uppercase tracking-widest ${active ? 'text-green-600' : 'text-gray-400'}`}>
            {status}
        </span>
    </div>
);

export default VendorProfile;