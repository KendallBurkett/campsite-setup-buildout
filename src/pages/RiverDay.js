// src/pages/RiverDay.js
import React from 'react';

export default function RiverDay() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">River Day Packages</h1>
        <p className="text-lg mb-10 text-gray-700">
          Everything you need for a perfect day by the water, just show up and relax. This all-inclusive package comes fully equipped with comfortable chairs, a cooler filled with ice, a Bluetooth speaker for your favorite tunes, cozy hammock, towels and more...
        </p>
            
          <div className="space-y-12 text-left">
          {/* ✅ River Float Package – What's Included */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-2">River Float Package – What’s Included</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>River float tubes or kayaks (based on your choice)</li>
              <li>Coolers with ice + drinks (BYOB-friendly)</li>
              <li>Shuttle transportation to/from river access points</li>
              <li>Shaded canopy tent for relaxing on the riverbank</li>
              <li>Camp chairs, towels, and waterproof phone pouches</li>
              <li>Portable speaker for the perfect float playlist</li>
            </ul>
          </div>

            <div className="space-y-12 text-left">
          {/* ✅ Optional Add-Ons */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Optional Add-Ons</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>Picnic lunch or charcuterie boards</li>
              <li>Custom cooler stocking (just tell us what you love!)</li>
              <li>GoPro rental for capturing the adventure</li>
            </ul>
          </div>

          {/* ✅ Call to Action */}
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Ready to book your River Day experience? Reach out now and let us handle the setup while you enjoy the splash.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}