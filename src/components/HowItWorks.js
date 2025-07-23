import React, { useState } from 'react';

const tabs = [
  {
    title: "Pick Your Place",
    content: (
      <div className="text-left px-4 py-4">
        <h3 className="text-xl font-semibold mb-4">Check these places out:</h3>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li><em className="text-green-500">McKinney Falls</em></li>
          <li>
            <em className="text-green-500">Krause Springs:</em>
            <div className="mt-1 text-gray-400 italic">
              To book this location please call <span className="text-green-500 not-italic">(401) 236-7554</span>
            </div>
          </li>
          <li className="text-gray-300">
            If you have a place in mind that is not listed, reach out and we can see about planning your preferred destination experience.
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Pick Your Package",
    content: (
      <div className="text-left px-4 py-4 space-y-6">
        <div>
          <h4 className="text-lg font-bold text-green-400">Basic: (1-2 People)</h4>
          <p className="text-gray-300">What's Included in the Basic Package:</p>
          <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
            <li><strong>Tent:</strong> A spacious, weather-resistant 3 person tent to keep you cozy.</li>
            <li><strong>Sleeping Bags:</strong> Soft and warm sleeping bags for a restful night's sleep.</li>
            <li><strong>Camp Chairs:</strong> Comfortable camp chairs for lounging around the fire.</li>
            <li><strong>Cooking Gear:</strong> Cooking utensils, pots, and a portable stove.</li>
            <li><strong>Cooler:</strong> A sturdy cooler to keep your snacks and drinks crisp.</li>
            <li><strong>Lighting:</strong> Lanterns and Flashlights.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-green-400">Intermediate: (3–6 People)</h4>
          <p className="text-gray-300">For your adventure with 3–6 people, you have some fun options to choose from:</p>
          <ul className="list-disc list-inside text-gray-300 ml-6 space-y-1">
            <li><strong>Option 1:</strong> Three Two-Person Tents — everyone gets privacy and personal space.</li>
            <li><strong>Option 2:</strong> Two Tents — one for two people and one for four. Great for bonding and flexibility.</li>
            <li><strong>Option 3:</strong> One Large Tent for 6 people — perfect for a shared camping experience.</li>
          </ul>
          <p className="text-gray-300 mt-2">Whichever option you choose, you're guaranteed a playful and memorable camping experience!</p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-green-400">Custom Group Packages: (6+ People)</h4>
          <p className="text-gray-300">
            Ready for an adventure with your crew? Our custom packages are designed for larger groups! We'll tailor everything to your unique needs.
          </p>
          <p className="text-gray-300">
            Choose from cozy tents for two, medium tents for four, or large tents for six. Add extra gear or request special accommodations—we’ll make it happen.
          </p>
          <p className="text-gray-300">Let’s make your group getaway one for the books!</p>
        </div>
      </div>
    )
  },
  {
    title: "Pick Your Dates",
    content: (
      <div className="text-left px-4 py-4">
        <p className="text-lg text-gray-300">
          Choose your desired dates and we'll handle the rest. Set up, tear down, and everything in between is covered.
        </p>
      </div>
    )
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleTab = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-16 px-4 max-w-4xl mx-auto rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="space-y-4">
        {tabs.map((tab, index) => (
          <div key={index} className="border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => toggleTab(index)}
              className="w-full text-left px-6 py-4 bg-gray-100 font-semibold text-xl focus:outline-none hover:bg-gray-200"
            >
              {tab.title}
            </button>
            {activeIndex === index && (
              <div className="bg-gray-900 text-white transition-all duration-300 ease-in-out">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}