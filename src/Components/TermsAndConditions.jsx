import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-pink-100">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">
          Terms & Conditions
        </h1>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-gray-600 leading-relaxed">
            Welcome to Prakash Florist. By accessing or using our website and
            services, you agree to comply with and be bound by the following
            Terms and Conditions. These terms govern your use of our website,
            products, and services. If you do not agree with any part of these
            terms, we recommend that you discontinue using the website.
          </p>
        </section>

        {/* Website Usage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            Use of Website
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The content of this website is provided for general information and
            online purchasing purposes. Users agree to use the website in a
            lawful manner and must not attempt to misuse, damage, or disrupt
            the functionality of the website. Any unauthorized use of the
            website may give rise to a claim for damages or may be considered
            a criminal offense.
          </p>
        </section>

        {/* Orders */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            Orders & Product Availability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All orders placed through the website are subject to confirmation
            and availability. While we strive to maintain accurate product
            listings and stock availability, certain flowers or cakes may not
            always be available due to seasonal variations or supplier
            limitations. In such cases, we reserve the right to substitute
            products with similar items of equal or greater value.
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            Pricing & Payments
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All prices displayed on the website are subject to change without
            prior notice. Payments must be completed before the order is
            processed. We accept secure payment methods through trusted
            payment gateways to ensure safe transactions for our customers.
          </p>
        </section>

        {/* Delivery */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            Delivery Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Prakash Florist provides delivery services across Indore to make
            celebrations convenient and special for our customers. While we
            aim to deliver orders within the selected time slot, delays may
            occasionally occur due to traffic conditions, weather issues, or
            other unavoidable circumstances.
          </p>
        </section>

        {/* Quality */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            Product Quality & Variations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Flowers are natural products and may vary slightly in color,
            shape, or size depending on seasonal availability. The images
            displayed on the website are for representation purposes only,
            and the final delivered product may differ slightly while
            maintaining the overall design and quality.
          </p>
        </section>

        {/* Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Prakash Florist will not be held liable for any direct or indirect
            damages resulting from the use of this website or the inability
            to use our services. Customers are advised to review all product
            details carefully before placing orders.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update or modify these Terms and
            Conditions at any time without prior notice. Any updates will be
            reflected on this page. Continued use of the website indicates
            your acceptance of the updated terms.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;