import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const MoveInOutCleaning = () => {
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
            Move Out / Move In Cleaning
          </h1>
          <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
            Make moving stress-free with our professional cleaning services. Whether moving out or moving in, we ensure your home is spotless and ready.
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

      {/* MOVE OUT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            data-aos="fade-right"
            src="/images/moveout.jpg"
            alt="Move Out Cleaning"
            className="w-full h-80 object-cover rounded-xl shadow"
          />
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4">Move Out Cleaning</h2>
            <p className="text-gray-700 mb-4">
              If you’re a homeowner selling your home, making sure it’s thoroughly clean will help you present it at its best, increasing the chances of a quick sale at the right price.
            </p>
            <p className="text-gray-700">
              As a tenant, you want to ensure that when you vacate your house, it’s clean enough to get your bond back. Moving into a new home also deserves a top-to-bottom clean for comfort and hygiene.
            </p>
          </div>
        </div>
      </section>

      {/* MOVE IN SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">Move In Cleaning</h2>
            <p className="text-gray-700 mb-4">
              Whether you’re moving home, vacating a rented property, or moving into a new home, making sure everything is clean and fresh is important. 
              Here at Bay Eco Cleaners, we specialize in helping tenants and homeowners remove the hassle of cleaning.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Bond Clean – Ensure you get your bond back!</li>
              <li>Vacate Clean – Remove the hassle before vacating.</li>
              <li>End of Lease Clean – Leave your property spotless.</li>
              <li>Moving Out Cleaning – Let us handle the cleaning while you plan your move.</li>
              <li>Moving In Cleaning – Prepare your new home clean and fresh.</li>
              <li>Pre-sale Cleaning – Get your home ready for viewings with a deep clean.</li>
              <li>Home Staging Clean – Ensure your home looks its best for photos.</li>
            </ul>
          </div>
          <img
            data-aos="fade-left"
            src="/images/movein.jpg"
            alt="Move In Cleaning"
            className="w-full h-80 object-cover rounded-xl shadow"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
          Book Your Move In / Move Out Cleaning Today
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="mb-8 opacity-90">
          Let our experts handle the cleaning while you focus on your move.
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

export default MoveInOutCleaning;