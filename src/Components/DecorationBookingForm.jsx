import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Phone, CheckCircle, IndianRupee } from 'lucide-react';

function DecorationBookingForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const decoration = location.state?.decoration || { name: 'Custom Decoration', price: 5000 };
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    venue: '',
    tokenAmount: '1000' // Default token amount
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app we would integrate a payment gateway here.
    // Simulating success
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle size={80} className="text-green-500 mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Thank you, {formData.name}. Your booking for <strong>{decoration.name}</strong> on {formData.date} has been confirmed. Our team will contact you shortly.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="bg-[#1f4d5a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#153641] transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Info Panel */}
        <div className="md:w-1/3 bg-gradient-to-br from-[#1f4d5a] to-[#2c6e80] text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Book Decoration</h2>
            <p className="opacity-80 text-sm mb-6">Fill in the details to reserve our highly-rated decoration service.</p>
            
            <div className="bg-white/10 rounded-xl p-4 mb-4 backdrop-blur-sm">
               <h3 className="font-semibold text-lg">{decoration.name}</h3>
               {decoration.price && <p className="text-[#f3e6d8] font-medium mt-1">Starting at ₹{decoration.price}</p>}
            </div>
            
            <ul className="space-y-4 opacity-90 mt-8">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle size={18} className="text-green-400" /> Premium quality setup
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle size={18} className="text-green-400" /> Professional team
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle size={18} className="text-green-400" /> On-time arrangement
              </li>
            </ul>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="md:w-2/3 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 relative inline-block">
              Your Details
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-rose-500 rounded-full"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none" placeholder="John Doe" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none" placeholder="+91 9876543210" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Event Date</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none text-gray-700" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Setup Time</label>
                <div className="relative">
                  <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none text-gray-700" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Venue Address</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                <textarea required name="venue" value={formData.venue} onChange={handleChange} rows="3" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none resize-none" placeholder="Enter complete venue address with landmark..." />
              </div>
            </div>

            <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 mt-6">
               <h4 className="font-semibold text-rose-800 mb-2 flex items-center gap-2">
                 <IndianRupee size={18} /> Token Amount Payment
               </h4>
               <p className="text-sm text-rose-700 mb-3">To confirm your booking, a token amount is required. The remaining balance can be paid after the setup.</p>
               <div className="flex items-center gap-3">
                 <span className="text-lg font-bold text-gray-800">₹</span>
                 <input type="number" name="tokenAmount" value={formData.tokenAmount} onChange={handleChange} className="w-32 px-3 py-2 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none font-semibold text-gray-800" />
               </div>
            </div>

            <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all mt-6 active:scale-[0.98]">
              Pay Token & Confirm Booking
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default DecorationBookingForm;
