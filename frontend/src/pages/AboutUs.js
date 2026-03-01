import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';

const AboutUS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 data-aos="fade-down" className="text-6xl font-extrabold mb-6 leading-tight">
            About DT Property Cleaning
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-2xl opacity-90 max-w-3xl mx-auto">
            Trusted, professional & friendly cleaning solutions across New Zealand.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              DT Property Cleaning is a New Zealand–owned professional cleaning company delivering
              high-quality residential and commercial cleaning services.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We focus on reliability, attention to detail, and customer satisfaction. Our fully trained
              team uses modern equipment and eco-friendly products to ensure outstanding results.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold"
            >
              Get a Free Quote
            </Link>
          </div>

          <img
            data-aos="fade-left"
            src="/logo.jpeg"
            alt="DT Property Cleaning Service"
            className="rounded-3xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">

            <div data-aos="zoom-in" className="bg-white p-10 rounded-3xl shadow-xl text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver consistent, high-quality cleaning services that exceed customer expectations.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="150" className="bg-white p-10 rounded-3xl shadow-xl text-center">
              <div className="text-6xl mb-6">👁️</div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become New Zealand’s most trusted and recommended cleaning service provider.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="300" className="bg-white p-10 rounded-3xl shadow-xl text-center">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, professionalism, eco-conscious practices, and customer care.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            data-aos="fade-right"
            src="/service2.jpg"
            alt="Commercial Cleaning"
            className="rounded-3xl shadow-2xl w-full"
          />

          <div data-aos="fade-left">
            <h2 className="text-5xl font-extrabold mb-8">Why Choose DT Property Cleaning?</h2>
            <ul className="space-y-6 text-xl text-gray-600">
              <li>✔ Fully trained & insured cleaning professionals</li>
              <li>✔ Residential, commercial & end-of-lease cleaning</li>
              <li>✔ Eco-friendly & safe cleaning products</li>
              <li>✔ Flexible scheduling & affordable pricing</li>
              <li>✔ 100% satisfaction guarantee</li>
            </ul>
          </div>
        </div>
      </section>

    <Footer />
    </>
  );
};

export default AboutUS;