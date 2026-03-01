import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Commercial = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  // Array of services with alternating layout
  const services = [
    {
      title: 'Office Cleaning',
      text: 'We offer flexible office cleaning plans tailored to your workspace needs, from daily maintenance to deep cleaning. Our team focuses on high-traffic areas, workstations, communal spaces, windows, and washrooms to ensure a spotless environment.',
      img: '/images/office.jpg'
    },
    {
      title: 'Retail Cleaning',
      text: 'Our public place cleaning services ensure hygienic and welcoming environments, from public buildings to shared facilities, using environmentally responsible products.',
      img: '/images/retail1.jpg'
    },
    {
      title: 'School & University Cleaning',
      text: 'We provide flexible cleaning schedules for schools and universities, including daily cleaning, disinfection, floor care, and window washing, ensuring minimal disruption to learning activities.',
      img:'/images/school.jpg'
    },
    {
      title: 'Restaurant Cleaning',
      text: 'Our professional team handles both front-of-house and back-of-house cleaning for restaurants and retail spaces, ensuring clean floors, fresh air, spotless windows, and sanitised restrooms.',
      img: '/images/rest.jpg'
    }
  ];

  return (
    <div className="overflow-x-hidden">
     
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold mb-6">
            Dedicated Office & Workplace Cleaning
          </h1>
          <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
            Professional commercial cleaning services for businesses of all sizes across New Zealand.
          </p>

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
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
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
          Book Your Comm Cleaning Today
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="mb-8 opacity-90">
          Experience our quality with a free trial day of commercial cleaning.
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

      <Footer />
    </div>
  );
};

export default Commercial;