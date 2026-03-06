import React, { useState } from 'react';
import aboutImg from "../assets/About.png"; // apni image yaha lagao
import { 
  Flower, 
  PartyPopper, 
  CalendarDays, 
  Heart, 
  Sparkles, 
  Calendar, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Star
} from 'lucide-react';

const About = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Events Transformed', value: '2,500+' },
    { label: 'Delighted Clients', value: '10k+' },
    { label: 'Floral Varieties', value: '50+' },
  ];

  const whyChooseUs = [
    { 
      title: 'Farm-to-Vase Freshness', 
      desc: 'Sourced daily from premium global growers to ensure your blooms stay vibrant longer.', 
      icon: <ShieldCheck size={28} /> 
    },
    { 
      title: 'Bespoke Artistry', 
      desc: 'We don’t do "standard." Every arrangement is custom-designed to mirror your personality.', 
      icon: <Zap size={28} /> 
    },
    { 
      title: 'Precision Logistics', 
      desc: 'Our team ensures flawless setup hours before your first guest arrives. No delays, ever.', 
      icon: <Calendar size={28} /> 
    },
  ];

  const services = [
    {
      title: "Signature Bouquets",
      desc: "Exquisite hand-tied arrangements for everyday moments and grand gestures.",
      icon: <Flower className="text-pink-500" size={32} />
    },
    {
      title: "Wedding Design",
      desc: "From ethereal Mandaps to breathtaking aisle decor, we craft your dream wedding.",
      icon: <Heart className="text-red-500" size={32} />
    },
    {
      title: "Celebration Decor",
      desc: "Transforming birthdays and anniversaries into immersive floral experiences.",
      icon: <PartyPopper className="text-yellow-500" size={32} />
    },
    {
      title: "Corporate Styling",
      desc: "Sophisticated floral branding for luxury offices, galas, and high-stakes seminars.",
      icon: <CalendarDays className="text-blue-500" size={32} />
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-pink-100 selection:text-pink-600">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-28 bg-gradient-to-br from-pink-50 via-white to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-pink-600 uppercase bg-white border border-pink-100 rounded-full shadow-sm">
            <Star size={14} className="fill-pink-600" />
            Premier Floral Designers Since 2009
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-medium text-gray-900 mb-8 tracking-tight">
            Prakash <span className="text-pink-500 italic">Florist</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-light leading-relaxed">
            Where every petal tells a story. We don’t just deliver flowers; 
            we curate emotions and transform spaces into living art.
          </p>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-[120px] opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-40 translate-x-1/4 translate-y-1/4"></div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img 
                src={aboutImg} 
                alt="Floral Luxury" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink-100 rounded-[3rem] -z-10 group-hover:translate-x-5 transition-transform duration-500"></div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              Crafting Excellence, <br />
              <span className="text-pink-500 italic">One Bloom at a Time</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded as a boutique floral studio, Prakash Florist has evolved into a premier destination for 
              <strong> luxury wedding decor and corporate floral styling.</strong> Our philosophy is simple: 
              Nature provides the beauty; we provide the stage.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-6">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">{stat.value}</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button className="flex items-center gap-3 text-pink-600 font-bold hover:gap-5 transition-all">
              Discover Our Philosophy <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Expertise</h2>
              <p className="text-gray-500">From intimate bouquets to massive venue transformations, we bring a touch of nature to every occasion.</p>
            </div>
            <div className="h-px flex-1 bg-gray-200 mx-8 hidden md:block"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-500 group">
                <div className="mb-8 p-4 bg-gray-50 rounded-2xl inline-block group-hover:bg-pink-50 group-hover:scale-110 transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-pink-600 rounded-[3rem] p-12 md:p-20 grid md:grid-cols-3 gap-12 text-white relative overflow-hidden">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-pink-100/80 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* --- FAQS --- */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Common Inquiries</h2>
          <div className="h-1 w-12 bg-pink-500 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-2">
          {[
            { q: "Do you offer same-day delivery?", a: "Yes. For local bouquet orders placed before 2:00 PM, we guarantee same-day delivery across the metropolitan area." },
            { q: "Can we book you for destination weddings?", a: "Certainly. Our logistics team is equipped to handle floral installations for destination weddings across the country." },
            { q: "How do you ensure flower longevity?", a: "We utilize cold-chain logistics and specialized hydration treatments to keep your flowers looking fresh for the duration of your event." }
          ].map((f, i) => (
            <div key={i} className={`rounded-2xl transition-all ${activeFaq === i ? 'bg-pink-50/50' : ''}`}>
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full px-6 py-6 flex justify-between items-center text-left font-semibold text-lg text-gray-800"
              >
                <span>{f.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-pink-500' : 'text-gray-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-40 pb-6 px-6' : 'max-h-0'}`}>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <Sparkles className="absolute top-12 right-12 text-pink-500/30 animate-pulse" size={60} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8">
              Let’s Make Your Next <br /> 
              <span className="text-pink-400 italic underline decoration-pink-500/30 underline-offset-8">Moment Unforgettable</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light">
              Contact our design studio today for a complimentary floral consultation for your upcoming wedding or corporate event.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-pink-500/20 active:scale-95">
                Book a Consultation
              </button>
              <button className="border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded-full font-bold transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;