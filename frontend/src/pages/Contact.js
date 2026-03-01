import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Deep House Cleaning',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending your request...');

    try {
      await axios.post('http://localhost:5000/api/admin/contact', formData);
      setStatus('✅ Thank you! Our team will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Deep House Cleaning',
        message: ''
      });
    } catch (err) {
      setStatus('❌ Something went wrong. Please try again.');
    }
  };

  return (

    
    <div className="bg-gradient-to-br from-blue-50 to-white">
      <section className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 data-aos="fade-down" className="text-6xl font-extrabold mb-6 leading-tight">
            Contact DT Property Cleaning
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-2xl opacity-90 max-w-3xl mx-auto">
            Reliable service. Flexible scheduling. Satisfaction guaranteed.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800">Book Your Cleaning</h1>
          <p className="text-xl text-gray-600 mt-4">Serving Auckland & Surrounding Areas • New Zealand</p>
          <div className="mt-6 text-sm text-blue-700 font-semibold">
            ✔ Fully Insured &nbsp; ✔ Trusted Professionals &nbsp; ✔ Satisfaction Guaranteed
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

         <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 
                          text-white rounded-3xl p-10 shadow-2xl
                          hover:scale-[1.02] transition">

            <h3 className="text-3xl font-bold mb-10">
              Contact Information
            </h3>

            <div className="space-y-8 text-lg">

              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <p>
                  <strong>Address</strong><br />
                  25 Queen Street,<br />
                  Auckland 1010, New Zealand
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <p>
                  <strong>Phone</strong><br />
                  <a
                    href="tel:+64211234567"
                    className="hover:underline"
                  >
                    +64 21 123 4567
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <p>
                  <strong>Email</strong><br />
                  <a
                    href="mailto:info@dtpropertycleaning.co.nz"
                    className="hover:underline break-all"
                  >
                    info@dtpropertycleaning.co.nz
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-12 text-sm opacity-90 leading-relaxed">
              We respond within 24 hours.  
              <br />
              For urgent bookings, please call us directly.
            </div>
          </div>


          {/* FORM */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl p-12 space-y-8 border"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option>Commercial Cleaning</option>
                  <option>Home Cleaning</option>
                  <option>Window Cleaning</option>
                  <option>Move In / Out Cleaning</option>
                  <option>Oven Cleaning</option>
                  <option>Carpet Cleaning</option>
                  <option>Builders Cleaning</option>
                  <option>Rangehood Cleaning</option>
                  <option>Holiday Home Cleaning</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your cleaning needs..."
                required
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-6 py-5 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-3xl font-bold text-xl transition shadow-lg"
              >
                Submit your booking →
              </button>

              {status && (
                <p className="text-center text-lg font-medium mt-6">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH GOOGLE MAP */}
      <div className="w-screen mt-16">
        <iframe
          title="Auckland Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.658873682064!2d174.76483947600982!3d-36.84845997993954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f3ff3f9f33%3A0x500ef6143a29930!2sQueen%20St%2C%20Auckland%201010%2C%20New%20Zealand!5e0!3m2!1sen!2slk!4v1709050000000!5m2!1sen!2slk"
          className="w-screen h-[450px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Contact;