import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const BuildersCleaning = () => {
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
            Builders Cleaning Services
          </h1>
          <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
            At Bay Eco Cleaners, we specialize in professional post-construction and renovation cleaning, making your property spotless and ready for use.
          </p>

          {/* Centered Quote Button */}
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
              src="/images/builders.jpg"
              alt="Builders Cleaning"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6">Post-Construction & Renovation Cleaning</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Builders cleaning is essential after any construction or renovation project. Our team specializes in removing dust, debris, and leftover construction materials, ensuring your property is ready for handover or occupation.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We handle all types of sites, from small renovations to large-scale construction projects. Our professional team uses high-quality equipment and eco-friendly cleaning products to ensure thorough cleaning without damaging surfaces.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services include floor cleaning, window cleaning, dusting of walls and surfaces, removal of paint splashes and adhesives, and complete sanitization. With Bay Eco Cleaners, you can be confident that your property will be spotless and safe for use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
          Book Your Builders Cleaning Today
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="mb-8 opacity-90">
          Let our experts take care of post-construction cleaning so your property is ready to shine.
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

export default BuildersCleaning;