import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowLeft, MapPin, Check } from 'lucide-react';

const CitySelection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  // India ki major cities ki list
  const allCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", 
    "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", 
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", 
    "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara",
    "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", 
    "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi",
    "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai",
    "Allahabad", "Ranchi", "Howrah", "Jabalpur", "Gwalior"
  ].sort(); // Alphabetical order mein sort kiya

  // Search filter logic
  const filteredCities = allCities.filter(city =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    // Yahan aap city ko localStorage ya Context mein save kar sakte hain
    localStorage.setItem("selectedCity", city);
    
    // Thoda delay taaki user ko selection dikhe, phir piche jaye
    setTimeout(() => {
      navigate(-1); 
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* --- HEADER --- */}
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center gap-4 px-4 py-4">
          <button onClick={() => navigate(-1)} className="p-1">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Select City</h1>
        </div>

        {/* Search Input */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search your city (e.g. Mumbai, Delhi)"
              className="w-full bg-gray-100 py-3 pl-10 pr-4 rounded-xl outline-none focus:ring-2 focus:ring-[#8B2E1E]/20 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
      </div>

      {/* --- CITY LIST --- */}
      <div className="flex-1 overflow-y-auto">
        {filteredCities.length > 0 ? (
          <div className="divide-y divide-gray-50">
            {filteredCities.map((city, index) => (
              <div
                key={index}
                onClick={() => handleCitySelect(city)}
                className={`flex items-center justify-between px-6 py-4 cursor-pointer active:bg-gray-50 transition-colors ${
                  selectedCity === city ? "bg-orange-50" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin 
                    size={18} 
                    className={selectedCity === city ? "text-[#8B2E1E]" : "text-gray-400"} 
                  />
                  <span className={`text-[16px] ${selectedCity === city ? "text-[#8B2E1E] font-bold" : "text-gray-700 font-medium"}`}>
                    {city}
                  </span>
                </div>
                
                {selectedCity === city && (
                  <Check size={20} className="text-[#8B2E1E]" />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-10 text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">Opps! We couldn't find "{searchQuery}"</p>
            <p className="text-gray-400 text-sm mt-1">Try searching with a different name</p>
          </div>
        )}
      </div>

      {/* --- FOOTER / NOTE --- */}
      <div className="p-6 bg-gray-50 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          More cities coming soon
        </p>
      </div>
    </div>
  );
};

export default CitySelection;