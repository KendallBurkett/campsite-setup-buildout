// src/pages/Camping.js
import React from 'react';

const Camping = () => {
  return (
    <main
      className="text-white min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/camping-under-the-sky.webp')" }}
    >
      {/* Title & Description Block */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">Camping </span>
            <span className="text-green-500">Packages</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 text-center">
            Whether you're looking for a peaceful solo escape, a romantic weekend under the stars, or a lively group adventure, we've got the perfect setup ready for you. Choose from one of our pre-configured packages or reach out for something fully customized!
          </p>
        </div>
      </section>

      {/* Package Sections */}
      <section className="px-4 pt-6 pb-12 max-w-4xl mx-auto space-y-6">
        {/* Basic */}
        <div className="bg-white bg-opacity-80 text-black rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Basic Package (1–2 People)</h2>
          <p className="mb-2">A single tent for up to two people—ideal for a romantic getaway or a lone wolf experience.</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>One 3-person tent (spacious for two)</li>
            <li>Two sleeping bags and pillows</li>
            <li>Camp chairs and folding table</li>
            <li>Small cooler and lantern</li>
            <li>Firewood bundle and firestarter</li>
          </ul>
        </div>

        {/* Intermediate */}
        <div className="bg-white bg-opacity-80 text-black rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Intermediate Package (3–6 People)</h2>
          <p className="mb-2">Ideal for friends or families—spacious and flexible with gear for everyone.</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Two 3-person tents or one large 6-person tent</li>
            <li>Sleeping bags, pillows, and pads for all</li>
            <li>Camp chairs, table, and cooking kit</li>
            <li>Large cooler and LED lighting setup</li>
            <li>Firewood and hammock included</li>
          </ul>
        </div>

        {/* Custom Group */}
        <div className="bg-white bg-opacity-80 text-black rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Custom Group Packages (6+ People)</h2>
          <p className="mb-2">Planning something bigger? We’ll tailor everything for your crew.</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Multiple tents sized to your preference</li>
            <li>Extra gear: tables, cook stations, lights, games</li>
            <li>Special requests: s’mores kits, grills, shade tents, etc.</li>
            <li>Flexible add-ons to create the ultimate group vibe</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-white text-lg mb-4 bg-black bg-opacity-40 p-4 rounded-lg">
            Ready to camp the easy way? Reach out now and we’ll set up everything before you arrive.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Book Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Camping;