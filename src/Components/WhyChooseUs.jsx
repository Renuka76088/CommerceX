import { Shield, Truck, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Experience premium service with complete peace of mind
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#cfe5dc] rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-md mb-5">
              <Shield className="text-green-600" size={26} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Trusted Business
            </h3>
            <p className="text-gray-700">
              100% Secure Payments with Bank-Grade Encryption
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ead2d9] rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-md mb-5">
              <Truck className="text-pink-600" size={26} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Swift Gift Delivery
            </h3>
            <p className="text-gray-700">
              Delivering Smiles & Gifts Across India
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#e3d8f3] rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-md mb-5">
              <Headphones className="text-purple-600" size={26} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Dedicated Support
            </h3>
            <p className="text-purple-600 font-medium">
              Get Expert Assistance — Talk to Us Now →
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}