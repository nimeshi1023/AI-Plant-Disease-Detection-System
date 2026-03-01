import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const HomeCleaning = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  // Array of residential cleaning services
 const services = [
  {
    category: 'Living Areas',
    title: 'Bedroom & Living Room Cleaning',
    text: 'Thorough cleaning of all living areas, dusting, vacuuming, and polishing surfaces to make your home spotless.',
    longDescription: `Our team specializes in deep cleaning bedrooms and living rooms to create a fresh, comfortable environment. We dust all surfaces including shelves, furniture, light fixtures, and vents. Carpets and rugs are vacuumed thoroughly, and any stains are treated using safe cleaning products. We polish furniture and wipe down electronic devices carefully, ensuring a spotless finish. High-touch areas like doorknobs, switches, and handles are sanitized for a healthier living space. This service is ideal for regular home maintenance or before special occasions.`,
    img: '/images/bedroom.jpg',
},
  {
    category: 'Kitchen & Bathroom',
    title: 'Kitchen & Bathroom Sanitization',
    text: 'Deep cleaning of kitchens and bathrooms, including sanitizing surfaces, sinks, tiles, and appliances.',
    longDescription: `Our kitchen and bathroom sanitization service targets the areas most prone to germs and bacteria. In kitchens, we clean countertops, sinks, stovetops, and appliances thoroughly, removing grease and grime. Cabinets and drawers are wiped clean, and tiles are scrubbed to remove stains. In bathrooms, we focus on toilets, showers, bathtubs, sinks, and mirrors, disinfecting all surfaces. Grout and tiles are cleaned and polished, leaving bathrooms spotless. All high-touch areas are sanitized to ensure a hygienic environment for your family.`,
    img: '/images/bathrrom.jpg',
},
  {
    category: 'Floor & Upholstery',
    title: 'Carpet & Upholstery Cleaning',
    text: 'Professional carpet and upholstery cleaning to remove dust, dirt, and allergens, leaving your home fresh.',
    longDescription: `Our professional carpet and upholstery cleaning service removes embedded dirt, dust, and allergens to improve indoor air quality. We use eco-friendly products that are safe for pets and children. Carpets are vacuumed, treated for stains, and cleaned using specialized equipment that restores their freshness. Sofas, chairs, and other upholstered furniture are treated with safe cleaning solutions that remove dirt and odors. The result is a clean, comfortable, and healthy living space.`,
    img: '/images/upholstery.jpg'
},
  {
    category: 'Windows & Glass',
    title: 'Window & Glass Cleaning',
    text: 'Sparkling clean windows and glass surfaces, both inside and outside, to enhance your home’s appearance.',
    longDescription: `Clean windows and glass surfaces transform the look of your home, allowing natural light to brighten your rooms. We clean both interior and exterior windows, sliding doors, mirrors, and glass panels using streak-free techniques. Frames and sills are wiped down, and all smudges, dust, and fingerprints are removed. Our professional team ensures a polished finish on all glass surfaces, enhancing the aesthetic appeal of your home while maintaining a hygienic environment.`,
    img: '/images/window.jpg'
}
];

  return (
    <div className="overflow-x-hidden">
      
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold mb-6">
            Professional Home Cleaning Services
          </h1>
          <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
            Reliable residential cleaning services for every home. From bedrooms to kitchens, we keep your space spotless.
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
                  <p className="text-gray-600 leading-relaxed">{service.longDescription}</p>
                </div>
              </>
            ) : (
              <>
                <div data-aos="fade-right">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{service.text}</p>
                   <p className="text-gray-600 leading-relaxed">{service.longDescription}</p>
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
          Book Your Home Cleaning Today
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="mb-8 opacity-90">
          Experience a sparkling clean home with our professional residential cleaning services.
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

export default HomeCleaning;