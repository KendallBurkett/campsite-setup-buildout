// src/pages/Camping.js
import React from 'react';

export default function Camping() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">Weekend Camping Packages</h1>
        <p className="text-lg mb-10 text-gray-700">
          Everything you need for a relaxing retreat in nature. These all inclusive packages come with everything you need for your stay and for however large your campsite may be. The only thing you need to bring is whatever foods your camp desires and the occasional ice run depending on the length of your stay. An intial cooler filled with ice, a Bluetooth speaker for your favorite tunes, cozy hammock, towels and more will be provided as well...
        </p>

        <div className="space-y-12 text-left">
          {/* ✅ Basic (1–2 PP) Package */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Basic (1–2 PP)</h3>
            <p className="text-lg text-gray-800 mb-4">
              For just <span className="text-green-600 font-semibold">$150</span>, you can enjoy an unforgettable camping experience that includes absolutely everything you need for one or two people.
            </p>
            <p className="text-gray-800 mb-4">This awesome package features:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>A single tent for up to two people;
              <span className="block ml-6">ideal for a romantic getaway or a lone wolf experience</span></li>         
              <li>Comfy chairs</li>
              <li>Cozy hammocks</li>
              <li>Essential cooking gear</li>
              <li>Handy power bank to keep your phone charged for all your outdoor adventures</li>
            </ul>
          </div>

          {/* ✅ 3 Doubles Package */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-2">3 Doubles (6 PP)</h3>
            <p className="text-lg text-gray-800 mb-4">
              For just <span className="text-green-600 font-semibold">$300</span>, you can enjoy an unforgettable camping experience that includes absolutely everything you need for one or two people.
            </p>
            <p className="text-gray-800 mb-4">This awesome package features:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>Love birds, 3 couples each with their own two person tent</li>
              <li>Comfy chairs</li>
              <li>Cozy hammocks</li>
              <li>Essential cooking gear</li>
              <li>Handy power bank to keep your phone charged for all your outdoor adventures</li>
            </ul>
          </div>

          {/* ✅ Friends Package */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Friends (6 PP)</h3>
            <p className="text-lg text-gray-800 mb-4">
              For just <span className="text-green-600 font-semibold">$275</span>, you can enjoy an unforgettable camping experience that includes absolutely everything you need for one or two people.
            </p>
            <p className="text-gray-800 mb-4">This awesome package features:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>Option between 3 two person tents or a single 4 person tent and single 2 person tent</li>
              <li>Comfy chairs</li>
              <li>Cozy hammocks</li>
              <li>Essential cooking gear</li>
              <li>Handy power bank to keep your phone charged for all your outdoor adventures</li>
            </ul>
          </div>

          {/* ✅ Family Package */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Family</h3>
            <p className="text-lg text-gray-800 mb-4">
              For just <span className="text-green-600 font-semibold">$275</span>, you can enjoy an unforgettable camping experience that includes absolutely everything you need for one or two people.
            </p>
            <p className="text-gray-800 mb-4">This awesome package features:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>1 tent for up to 6 people</li>
              <li>Comfy chairs</li>
              <li>Cozy hammocks</li>
              <li>Essential cooking gear</li>
              <li>Handy power bank to keep your phone charged for all your outdoor adventures</li>
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
  );
}