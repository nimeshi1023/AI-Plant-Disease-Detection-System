import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const HolidayHomeCleaning = () => {
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
            Holiday Home Cleaning
          </h1>
          <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
            Keep your holiday home spotless and welcoming with Bay Eco Cleaners’ professional cleaning services. Perfect for rentals or personal getaways.
          </p>

          {/* CTA Button */}
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
              src="/images/holiday.jpg"
              alt="Holiday Home Cleaning"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6">Professional Holiday Home Cleaning</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our holiday home cleaning service ensures your property is pristine, hygienic, and guest-ready. We provide deep cleaning of all rooms, kitchens, bathrooms, and living spaces, making sure everything is spotless for your next stay or rental.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              DT Property Cleaners uses eco-friendly products that are safe for the environment and for your family or guests. From removing dust and dirt to sanitizing surfaces and polishing windows, our team ensures every corner of your holiday home shines.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether it’s a short-term rental or a seasonal getaway home, we tailor our services to meet your needs, providing reliable, thorough, and efficient cleaning every time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
          Book Your Holiday Home Cleaning Today
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="mb-8 opacity-90">
          Make your holiday home welcoming and spotless with our professional cleaning services.
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

export default HolidayHomeCleaning;