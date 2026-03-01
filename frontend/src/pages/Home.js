import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // ⭐ important – prevent shaking
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [location]);

  return (
    <div className="overflow-x-hidden"> {/* ⭐ STOP page shaking */}

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            data-aos="fade-down"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Premium Property Cleaning <br className="hidden sm:block" />
            Services in New Zealand
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-lg sm:text-xl md:text-2xl mb-10 opacity-90"
          >
            Reliable. Professional. Fully Insured Cleaning Experts.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex justify-center gap-4 sm:gap-6 flex-wrap"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </Link>

            <a
              href="#services"
              className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              View Services
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="mt-10 text-base sm:text-lg opacity-80"
          >
            ⭐ Trusted by homeowners & businesses across NZ
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-800"
          >
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { img: '/office1.jpg', title: 'Commercial Cleaning', link: '/services/commercial', desc: 'Professional cleaning for offices and commercial spaces.' },
              { img: '/service2.jpg', title: 'Home Cleaning', link: '/services/residential', desc: 'Reliable residential and apartment cleaning services.' },
              { img: '/windows.jpg', title: 'Window Cleaning', link: '/services/window', desc: 'Streak-free window cleaning for homes and offices.' },
              { img: '/move1.jpg', title: 'Move In / Out Cleaning', link: '/services/move-in-out', desc: 'Deep cleaning for moving in or out properties.' },
              { img: '/oven.jpg', title: 'Oven Cleaning', link: '/services/oven', desc: 'Remove grease and stains from ovens.' },
              { img: '/carpot.jpg', title: 'Carpet Cleaning', link: '/services/carpet', desc: 'Deep carpet cleaning to remove dirt and odors.' },
              { img: '/build.jpg', title: 'Builders Cleaning', link: '/services/builders', desc: 'Post-construction cleaning services.' },
              { img: '/rangehood.jpg', title: 'Rangehood Cleaning', link: '/services/rangehood', desc: 'Remove grease buildup from rangehoods.' },
              { img: '/holiday1.jpg', title: 'Holiday Home Cleaning', link: '/services/holiday-home', desc: 'Cleaning for Airbnb & holiday homes.' },
            ].map((service, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link to={service.link} className="text-blue-600 font-semibold">
                    Read more →
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white text-center">
        <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mb-6">
          Ready for a spotless property?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mb-8 text-base sm:text-lg opacity-90"
        >
          Contact our friendly DT Cleaning team today.
        </p>

        <Link
          data-aos="fade-up"
          data-aos-delay="300"
          to="/contact"
          className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
        >
          Book Your Cleaning →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;