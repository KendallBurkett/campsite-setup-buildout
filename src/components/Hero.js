import React from 'react';
import HowItWorks from './HowItWorks';

const Hero = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Welcome to <span className="text-white">CampEasy</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
            As the name suggests, this website is here to offer you our services to make your camping experience a breeze—
            whether you’re a first-time camper or a seasoned pro. We’ve got you covered. With our services, you can leave the
            gear worries to us so you can focus on what truly matters—like roasting marshmallows and making memories.
          </p>

          <div className="mt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <HowItWorks />
      </div>
    </main>
  );
};

export default Hero;