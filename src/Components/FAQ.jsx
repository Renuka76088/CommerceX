import React, { useState } from 'react';
import { 
  Plus, Minus, HelpCircle, Flower, 
  Truck, CreditCard, PartyPopper, MessageCircle 
} from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('General');

  const categories = [
    { name: 'General', icon: <HelpCircle size={18} /> },
    { name: 'Events', icon: <PartyPopper size={18} /> },
    { name: 'Delivery', icon: <Truck size={18} /> },
    { name: 'Payments', icon: <CreditCard size={18} /> },
  ];

  const faqData = {
    General: [
      { q: "What types of flowers do you offer?", a: "We offer a wide variety of domestic and exotic flowers, including Roses, Orchids, Lilies, Carnations, and seasonal local blooms sourced fresh every morning." },
      { q: "Where is Prakash Florist located?", a: "Our main boutique is located in the heart of the city at Main Market Road. You can find the exact location on our Contact page map." },
      { q: "Do you provide artificial flowers?", a: "While we specialize in fresh natural blooms, we do provide high-quality silk and artificial flowers for specific long-term decor requirements." }
    ],
    Events: [
      { q: "How early should I book for a wedding?", a: "For large-scale wedding decorations, we recommend booking at least 2-4 months in advance to ensure the availability of specific floral themes." },
      { q: "Do you handle birthday and corporate setups?", a: "Yes! We specialize in thematic decorations for birthdays, anniversaries, corporate seminars, and office inaugurations." },
      { q: "Can I customize the decor theme?", a: "Absolutely. Our expert florists work with you to create a mood board that matches your vision, color palette, and budget." }
    ],
    Delivery: [
      { q: "Do you offer same-day delivery?", a: "Yes, for bouquet orders placed before 4:00 PM, we offer same-day delivery across the city." },
      { q: "Is there a delivery charge?", a: "Delivery is free within a 5km radius of our shop. For farther locations, a nominal delivery fee is applied based on the distance." },
      { q: "Can I schedule a delivery for a specific time?", a: "Yes, you can choose a specific time slot (e.g., Midnight delivery or early morning) during the checkout or via WhatsApp." }
    ],
    Payments: [
      { q: "What payment methods do you accept?", a: "We accept all major UPI apps (GPay, PhonePe), Credit/Debit cards, and Net Banking. Cash on delivery is available for select bouquet orders." },
      { q: "Do you require a deposit for event bookings?", a: "Yes, a 30% advance deposit is required to confirm your booking for weddings and large events." }
    ]
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      
      {/* Hero Section */}
      <section className="bg-pink-50 py-20 px-6 text-center">
        <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm mb-6 text-pink-500">
          <HelpCircle size={32} />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
          Common <span className="text-pink-500 italic">Questions</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Everything you need to know about our flowers, event decorations, and delivery services.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => { setActiveCategory(cat.name); setOpenIndex(null); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeCategory === cat.name 
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-200' 
                : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ List */}
      <section className="max-w-3xl mx-auto px-6 mt-16">
        <div className="space-y-4">
          {faqData[activeCategory].map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-3xl transition-all duration-300 ${
                openIndex === index ? 'border-pink-200 bg-pink-50/30' : 'border-gray-100'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-gray-800 md:text-lg">{faq.q}</span>
                <div className={`p-2 rounded-full transition-transform duration-300 ${
                  openIndex === index ? 'bg-pink-500 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0'
              }`}>
                <div className="text-gray-600 leading-relaxed border-t border-pink-100 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="mt-20 max-w-4xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[3rem] p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Flower size={120} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8">We're here to help! Chat with us directly on WhatsApp for instant support.</p>
          <a 
            href="https://wa.me/yournumber" 
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-green-500/20"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default FAQ;