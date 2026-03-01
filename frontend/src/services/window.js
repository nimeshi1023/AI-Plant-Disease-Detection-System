import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const WindowCleaning = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  // Window Cleaning Service Details
  const services = [
    {
      title: 'Eco-Friendly Window Cleaning',
      text: 'We are committed to providing top-notch window cleaning services while protecting the environment. Our team uses only biodegradable and safe cleaning products that are free from harsh chemicals.',
      img: '/images/window1.jpg',
    },
    {
      title: 'Residential Window Cleaning',
      text: 'Our professional and experienced team ensures your home windows are thoroughly cleaned, leaving them crystal clear and streak-free, for a brighter and cleaner living space.',
      img: '/images/window2.jpg',
    },
    {
      title: 'Commercial Window Cleaning',
      text: 'We provide efficient window cleaning services for offices, retail spaces, and public buildings using state-of-the-art techniques and equipment, ensuring a spotless professional appearance.',
      img: '/images/window3.jpg',
    },
    {
      title: 'High-Rise & Hard-to-Reach Windows',
      text: 'Our team is trained to safely clean high-rise and difficult-to-access windows, using professional tools and safety measures to ensure a flawless finish.',
      img: '/images/window4.jpg',
    },
  ];

  return (
    <div className="overflow-x-hidden">
     
     
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24 relative">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold mb-6">
      Crystal Clear Window Cleaning
    </h1>
    <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
      Professional and eco-friendly window cleaning services for residential and commercial properties. Safe for your family, pets, and the environment.
    </p>

    {/* Button with spacing below text */}
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
          Book Your Window Cleaning Today
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="mb-8 opacity-90">
          Let our experts make your windows sparkling clean with eco-friendly methods.
        </p>
         <Link
                        data-aos="fade-up"
                        data-aos-delay="300"
                        to="/contact"
                        className="inline-block bg-white text-blue-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition"
                      >
                        Get a Free Quote →
                      </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WindowCleaning;