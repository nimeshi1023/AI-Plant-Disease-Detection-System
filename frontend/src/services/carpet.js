import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const CarpetCleaning = () => {
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
            Safe & Healthy Carpet Cleaning
          </h1>
          <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
            At Bay Eco Cleaners we specialise in premium carpet cleaning services for both residential and commercial clients. We have the best equipment to service any carpet size, ensuring top-quality results.
          </p>

          {/* Quote Button */}
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
              src="/images/carpet.jpg"
              alt="Carpet Cleaning"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6">Safe & Thorough Carpet Cleaning</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At Bay Eco Cleaners, we provide premium carpet cleaning services that cater to both residential and commercial clients. Our professional team ensures every carpet is cleaned thoroughly, removing dust, allergens, dirt, and tough stains. We use state-of-the-art equipment and eco-friendly cleaning products that are safe for your family and pets.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We pride ourselves on being able to clean any size of carpet area efficiently. Our specialized techniques not only restore the appearance of your carpets but also improve indoor air quality, creating a safe and healthy environment in your home or business. Customer satisfaction is our top priority, and we guarantee top-quality results every time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you need a one-time deep clean, regular maintenance, or emergency cleaning services, Bay Eco Cleaners has the expertise and equipment to get the job done right. Experience the difference of professionally cleaned carpets that look fresh, smell clean, and feel soft underfoot.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
          Book Your Carpet Cleaning Today
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="mb-8 opacity-90">
          Ensure a safe and healthy home with our professional carpet cleaning services.
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

export default CarpetCleaning;