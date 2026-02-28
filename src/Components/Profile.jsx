import React, { useState } from "react";
import {
  User,
  Package,
  Wallet,
  MapPin,
  CreditCard,
  Star,
  Bell,
  Settings,
  Mail,
  Phone,
} from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("My Profile");

  const themeColor = "#1f4d5a";

  const menuItems = [
    { name: "My Profile", icon: <User size={18} /> },
    { name: "My Orders", icon: <Package size={18} /> },
    { name: "My Wallet", icon: <Wallet size={18} /> },
    { name: "Address Book", icon: <MapPin size={18} /> },
    { name: "Manage Save Cards", icon: <CreditCard size={18} /> },
    { name: "Manage Saved UPI", icon: <Wallet size={18} /> },
    { name: "My Reviews", icon: <Star size={18} /> },
    { name: "Notifications", icon: <Bell size={18} /> },
    { name: "Account Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f9]">

      {/* HEADER */}
      <div className="bg-white shadow-sm px-4 sm:px-10 py-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 border-2 rounded-full flex items-center justify-center"
               style={{ borderColor: themeColor }}>
            <User size={26} style={{ color: themeColor }} />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Renuka Agrawal
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail size={16} style={{ color: themeColor }} />
            <span>renukaagrawal97@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} style={{ color: themeColor }} />
            <span>+91 9752810137</span>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6 px-4 sm:px-6 py-8">

        {/* SIDEBAR */}
        <div className="lg:w-[280px] w-full bg-white rounded-xl shadow-sm border border-gray-100">

          {/* Mobile Horizontal Scroll */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center gap-3 px-5 py-4 text-sm cursor-pointer whitespace-nowrap transition-all duration-200
                  ${
                    activeTab === item.name
                      ? "bg-[#eef6f8] font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                style={{
                  borderLeft:
                    activeTab === item.name
                      ? `4px solid ${themeColor}`
                      : "4px solid transparent",
                  color:
                    activeTab === item.name ? themeColor : "#374151",
                }}
              >
                <span style={{ color: themeColor }}>{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-10">

          <h2 className="text-lg font-semibold mb-8"
              style={{ color: themeColor }}>
            {activeTab}
          </h2>

          {activeTab === "My Profile" && (
            <div className="space-y-5 text-sm sm:text-base">

              {[
                { label: "Name", value: "Mr. Renuka Agrawal" },
                { label: "Birthday", value: "25 February" },
                { label: "Gender", value: "FEMALE" },
                { label: "Mobile", value: "9752810137" },
                { label: "Email*", value: "renukaagrawal97@gmail.com" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="sm:w-40 text-gray-500">
                    {item.label}
                  </span>
                  <span className="text-gray-800 font-medium">
                    {item.value}
                  </span>
                </div>
              ))}

              <button
                className="mt-8 px-8 py-3 rounded-lg border transition-all duration-300"
                style={{
                  borderColor: themeColor,
                  color: themeColor,
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = themeColor;
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = themeColor;
                }}
              >
                Edit Profile
              </button>
            </div>
          )}

          {activeTab !== "My Profile" && (
            <div className="text-gray-600 text-sm sm:text-base">
              Content for <span className="font-medium">{activeTab}</span> will appear here.
            </div>
          )}

          <p className="mt-10 text-xs text-gray-500">
            (*) Email not changeable. click{" "}
            <span className="underline cursor-pointer"
                  style={{ color: themeColor }}>
              Support
            </span>{" "}
            for more details
          </p>

        </div>
      </div>
    </div>
  );
}