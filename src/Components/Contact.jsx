import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Header Section */}
      <section className="pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
          Get in <span className="text-pink-500 italic">Touch</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto px-6">
          Whether it's a grand wedding or a simple bouquet, we’re here to make your floral dreams come true.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 bg-white shadow-2xl rounded-[3rem] overflow-hidden border border-gray-100">
          
          {/* LEFT SIDE: CONTACT FORM */}
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              Send us a Message <MessageSquare className="text-pink-500" />
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-pink-500 focus:bg-white outline-none rounded-2xl transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-pink-500 focus:bg-white outline-none rounded-2xl transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-pink-500 focus:bg-white outline-none rounded-2xl transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">What are you planning?</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-pink-500 focus:bg-white outline-none rounded-2xl transition-all">
                  <option>Wedding Decoration</option>
                  <option>Birthday Party</option>
                  <option>Corporate Event</option>
                  <option>Bouquet Delivery</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your event details..." 
                  className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-pink-500 focus:bg-white outline-none rounded-2xl transition-all resize-none"
                ></textarea>
              </div>

              <button className="group w-full bg-gray-900 hover:bg-pink-600 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl">
                Send Inquiry
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: MAP & CONTACT INFO */}
          <div className="relative h-[500px] lg:h-auto min-h-[400px]">
            {/* Google Map Iframe */}
            <iframe 
              title="Prakash Florist Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.6738526839!2d75.79381393699479!3d22.72391173268832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b4491fd%3A0x6fb0172671587522!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-none"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>

            {/* Overlapping Info Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-8 rounded-[2rem] shadow-xl border border-white/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Visit Our Shop</h4>
                    <p className="text-sm text-gray-600 leading-tight">123, Main Market Road, Indore, Madhya Pradesh 452001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <p className="text-sm text-gray-600 leading-tight">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-xl text-green-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Business Hours</h4>
                    <p className="text-sm text-gray-600 leading-tight">Mon - Sun: 08:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Connect Footer */}
      <section className="py-12 bg-pink-50 flex flex-wrap justify-center gap-8 md:gap-16">
         <div className="flex items-center gap-3">
            <Mail className="text-pink-500" />
            <span className="font-medium text-gray-700">hello@prakashflorist.com</span>
         </div>
         <div className="flex items-center gap-3">
            <Phone className="text-pink-500" />
            <span className="font-medium text-gray-700">Inquiry: +91 999 888 7776</span>
         </div>
      </section>
    </div>
  );
};

export default Contact;