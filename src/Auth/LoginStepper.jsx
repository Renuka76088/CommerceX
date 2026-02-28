import React, { useState } from "react";
import {
  UserCheck,
  MapPin,
  CalendarDays,
  FileText,
  IndianRupee,
} from "lucide-react";

export default function LoginStepper() {
  const theme = "#1f4d5a";
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    { id: 1, title: "Login Details", icon: <UserCheck size={20} /> },
    { id: 2, title: "Delivery Address", icon: <MapPin size={20} /> },
    { id: 3, title: "Delivery Date & Time", icon: <CalendarDays size={20} /> },
    { id: 4, title: "Special Note", icon: <FileText size={20} /> },
    { id: 5, title: "Payment & Order Summary", icon: <IndianRupee size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-10 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8">

        {/* LEFT SIDEBAR */}
        <div className="lg:w-[300px] w-full space-y-4">
          {steps.map((step) => {
            const isActive = step.id === activeStep;
            const isCompleted = step.id < activeStep;

            return (
              <div
                key={step.id}
                className={`bg-white border rounded-md p-5 cursor-pointer transition`}
                style={{
                  borderColor: isActive ? theme : "#e5e7eb",
                  borderLeft: isActive ? `4px solid ${theme}` : "",
                  opacity: isCompleted || isActive ? 1 : 0.5,
                }}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-md"
                    style={{
                      backgroundColor: isActive ? "#eef6f8" : "#f3f4f6",
                      color: theme,
                    }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Step {step.id}/5
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 bg-white rounded-md border border-gray-200 p-8">

          {activeStep === 2 && (
            <>
              <h2 className="text-lg font-semibold mb-2">
                Awesome Renuka Agrawal !{" "}
                <span className="font-bold">
                  Let us know where to deliver
                </span>
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                A detailed address will help us to deliver the parcel smoothly
              </p>

              <div className="space-y-5">

                {/* Receiver Name */}
                <div className="flex">
                  <select className="border border-gray-300 px-4 rounded-l-md bg-gray-50">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Receiver Name*"
                    className="flex-1 border border-gray-300 rounded-r-md px-4 py-3 focus:outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Apartment / House No. / Floor*"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />

                <input
                  type="text"
                  defaultValue="Sanvid Nagar"
                  placeholder="Search for area / locality*"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />

                <div className="flex gap-4">
                  <input
                    type="text"
                    defaultValue="452018"
                    placeholder="Pincode*"
                    className="w-1/2 border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                  />
                  <input
                    type="text"
                    defaultValue="Indore"
                    placeholder="City*"
                    className="w-1/2 border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                  />
                </div>

                <div className="flex">
                  <span className="border border-gray-300 px-4 flex items-center bg-gray-50 rounded-l-md">
                    +91
                  </span>
                  <input
                    type="text"
                    placeholder="Receiver Number*"
                    className="flex-1 border border-gray-300 rounded-r-md px-4 py-3 focus:outline-none"
                  />
                </div>

                {/* Address Type */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">
                    Address Type
                  </h3>
                  <div className="flex gap-3">
                    <button
                      className="px-5 py-2 rounded-md text-sm"
                      style={{ backgroundColor: theme, color: "#fff" }}
                    >
                      Home
                    </button>
                    <button className="px-5 py-2 border border-gray-300 rounded-md text-sm">
                      Office
                    </button>
                    <button className="px-5 py-2 border border-gray-300 rounded-md text-sm">
                      Others
                    </button>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-gray-200 rounded-md font-medium">
                  Continue
                </button>

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}