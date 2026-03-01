import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const RangehoodCleaning = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
    

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold mb-6">
            Professional Rangehood Cleaning
          </h1>
          <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
            Keep your kitchen safe and hygienic with Bay Eco Cleaners’ professional rangehood cleaning services. We remove grease, grime, and buildup for better air quality and appliance efficiency.
          </p>

          {/* Centered CTA Button */}
          <Link
            data-aos="fade-up"
            data-aos-delay="300"
            to="/contact"
            className="inline-block bg-white text-blue-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* Main Detailed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2" data-aos="fade-right">
            <img
              src="/images/rangehood.jpg"
              alt="Rangehood Cleaning"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Rangehood Cleaning</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Rangehoods collect grease, dust, and cooking residue over time, which can reduce efficiency and create fire hazards. Our professional team provides a thorough cleaning service that removes all buildup, leaving your rangehood spotless and fully functional.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We dismantle, clean, and reassemble your rangehood using eco-friendly cleaning products that are safe for your kitchen, family, and pets. Regular maintenance improves air circulation and extends the life of your appliance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether it’s a residential kitchen or a commercial cooking space, Bay Eco Cleaners has the expertise and tools to deliver a deep clean that meets the highest standards of hygiene and performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
          Book Your Rangehood Cleaning Today
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="mb-8 opacity-90">
          Ensure your kitchen is clean, safe, and efficient with our professional rangehood cleaning services.
        </p>
        <div className="flex justify-center">
          <Link
            data-aos="fade-up"
            data-aos-delay="300"
            to="/contact"
            className="inline-block bg-white text-blue-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RangehoodCleaning;