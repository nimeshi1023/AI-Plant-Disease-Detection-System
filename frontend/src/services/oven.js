import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const OvenCleaning = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const services = [
    {
      title: 'Deep Oven Cleaning',
      text: 'We thoroughly clean your oven, removing grease, burnt-on food, and grime to restore it to spotless condition. Our professional team ensures every corner is cleaned safely.',
      img: '/images/oven1.jpg',
    },
    {
      title: 'Commercial Oven Cleaning',
      text: 'Our commercial oven cleaning service is designed for restaurants, cafes, and food businesses. We clean heavy-duty ovens efficiently and safely to meet hygiene standards.',
      img: '/images/oven2.jpg',
    },
   
  ];

  return (
    <div className="overflow-x-hidden">
    

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold mb-6">
            Professional Oven Cleaning
          </h1>
          <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
            Get your oven sparkling clean with our safe and professional oven cleaning services. Perfect for residential and commercial kitchens.
          </p>

          {/* Centered Button */}
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

      {/* SERVICES SECTIONS */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {index % 2 === 0 ? (
              <>
                <img
                  data-aos="fade-right"
                  src={service.img}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-xl shadow"
                />
                <div data-aos="fade-left">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{service.text}</p>
                </div>
              </>
            ) : (
              <>
                <div data-aos="fade-right">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{service.text}</p>
                </div>
                <img
                  data-aos="fade-left"
                  src={service.img}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-xl shadow"
                />
              </>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
          Book Your Oven Cleaning Today
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="mb-8 opacity-90">
          Let our experts make your oven clean and hygienic so you can cook safely and efficiently.
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

export default OvenCleaning;