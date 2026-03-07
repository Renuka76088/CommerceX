import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-pink-100">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
          Refund & Cancellation Policy
        </h1>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            1. Order Cancellation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Customers can request order cancellation before the order is
            processed or dispatched for delivery. Once the order has been
            prepared or is out for delivery, cancellation may not be possible.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            2. Cancellation Charges
          </h2>
          <p className="text-gray-600 leading-relaxed">
            In some cases, cancellation charges may apply depending on the
            preparation status of the order. Customized flower arrangements,
            cakes, or decoration services may not be eligible for cancellation
            once preparation has started.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            3. Refund Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Refunds may be issued if an order is successfully cancelled before
            dispatch or if a product cannot be delivered due to unavoidable
            circumstances. Refunds will be processed using the original payment
            method whenever possible.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            4. Damaged or Incorrect Products
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you receive a damaged or incorrect product, please contact us
            within 24 hours of delivery. Our team will review the issue and may
            offer a replacement or refund depending on the situation.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            5. Non-Refundable Items
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Certain items such as customized bouquets, wedding varmala,
            decoration services, and perishable items like fresh flowers or
            cakes may not be eligible for refunds once delivered.
          </p>
        </section>

        {/* Section */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            6. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For any cancellation or refund related queries, please contact
            Prakash Florist. Our team will assist you and ensure the best
            possible resolution.
          </p>
        </section>

      </div>
    </div>
  );
};

export default CancellationPolicy;