// src/pages/RiverDay.js
import React from 'react';

const RiverDay = () => {
  return (
    <main
      className="text-white min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/riverbg.avif')" }}
    >
      {/* Top section with improved readability */}
      <section className="py-16 px-4 bg-black bg-opacity-40 rounded-lg max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">River Day </span>
          <span className="text-green-500">Packages</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 text-center">
          Everything you need for a perfect day by the water, just show up and relax. This
          all-inclusive package comes fully equipped with comfortable chairs, a cooler filled
          with ice, a Bluetooth speaker for your favorite tunes, cozy hammock, towels and more...
        </p>
      </section>

      {/* Package info */}
      <section className="px-4 pb-16 max-w-4xl mx-auto space-y-8">
        {/* River Float Package */}
        <div className="bg-white bg-opacity-80 text-black rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            River Float Package – What’s Included
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>River float tubes or kayaks (based on your choice)</li>
            <li>Coolers with ice + drinks (BYOB-friendly)</li>
            <li>Shuttle transportation to/from river access points</li>
            <li>Shaded canopy tent for relaxing on the riverbank</li>
            <li>Camp chairs, towels, and waterproof phone pouches</li>
            <li>Portable speaker for the perfect float playlist</li>
          </ul>
        </div>

        {/* Optional Add-Ons */}
        <div className="bg-white bg-opacity-80 text-black rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Optional Add-Ons</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Picnic lunch or charcuterie boards</li>
            <li>Custom cooler stocking (just tell us what you love!)</li>
            <li>GoPro rental for capturing the adventure</li>
          </ul>
        </div>

        {/* Call to Action */}
        <p className="text-center text-lg text-white bg-black bg-opacity-40 rounded-lg p-4">
          Ready to book your River Day experience? Reach out now and let us handle the setup
          while you enjoy the splash.
        </p>

        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Book Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default RiverDay;