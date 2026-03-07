import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-pink-100">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
          Disclaimer
        </h1>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            1. General Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The information provided on this website is for general informational 
            purposes only. While Prakash Florist strives to keep all information 
            accurate and up to date, we make no guarantees about the completeness, 
            reliability, or accuracy of the information displayed on the website.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            2. Product Representation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Images of flowers, bouquets, cakes, and decoration items on the 
            website are for reference purposes only. Due to seasonal availability 
            and design variations, the final delivered product may slightly differ 
            in color, arrangement, or packaging.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            3. Delivery Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Prakash Florist aims to deliver all orders within the promised time. 
            However, delivery times may vary due to traffic conditions, weather, 
            public holidays, or other unforeseen circumstances. We are not liable 
            for delays caused by factors beyond our control.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            4. External Links
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites for additional 
            services or information. We do not have control over the content and 
            nature of these external sites and are not responsible for their 
            policies or practices.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Prakash Florist will not be held responsible for any losses, damages, 
            or inconveniences resulting from the use of our website or services. 
            Customers are advised to review product details and policies before 
            placing orders.
          </p>
        </section>

        {/* Section */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            6. Consent
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By using our website, you hereby consent to this disclaimer and agree 
            to its terms. If you do not agree with any part of this disclaimer, 
            please discontinue using our website.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Disclaimer;