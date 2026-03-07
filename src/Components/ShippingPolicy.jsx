import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-pink-100">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
          Shipping & Delivery Policy
        </h1>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            1. Delivery Areas
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Prakash Florist currently delivers flowers, cakes, bouquets, and
            decoration items across the entire city of Indore. Our delivery
            services cover Vijay Nagar, Scheme No. 54, and surrounding areas
            across Indore.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            2. Delivery Timings
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We deliver fresh flowers and cakes from early morning to late
            night to make every celebration special. Customers can choose
            their preferred delivery time while placing an order, subject to
            availability.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            3. Same Day Delivery
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Prakash Florist offers same-day delivery for most flower bouquets,
            cakes, and gifts within Indore. Orders placed before the cut-off
            time will be processed and delivered on the same day depending
            on product availability.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            4. Delivery Charges
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Delivery charges may vary depending on the delivery location,
            product type, and urgency of the order. The final delivery fee
            will be shown at the checkout page before confirming your order.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            5. Delays & Unexpected Situations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            While we strive to deliver orders on time, delays may occur due
            to traffic conditions, weather issues, public holidays, or other
            unforeseen circumstances. In such cases, we will make every effort
            to complete the delivery as soon as possible.
          </p>
        </section>

        {/* Section */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            6. Contact for Delivery Issues
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you face any issues regarding delivery or need assistance with
            your order, please contact our support team. Customer satisfaction
            has always been the top priority at Prakash Florist.
          </p>
        </section>

      </div>
    </div>
  );
};

export default ShippingPolicy;