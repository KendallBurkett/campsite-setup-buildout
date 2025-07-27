import React from 'react';
import HowItWorks from './HowItWorks';

const Hero = () => {
  return (
    <main
      className="text-white min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/camping-under-the-sky.webp')" }}
    >
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* ✅ Opaque background behind just the content */}
          <div className="bg-black bg-opacity-60 p-8 rounded-lg">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Welcome to <span className="text-green-400">CampEasy</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              As the name suggests, this website is here to offer you our services to make your camping experience a breeze—
              whether you’re a first-time camper or a seasoned pro. We’ve got you covered. With our services, you can leave the
              gear worries to us so you can focus on what truly matters—like roasting marshmallows and making memories.
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <div className="pt-8 pb-16 px-4">
        <HowItWorks />
      </div>
    </main>
  );
};

export default Hero;