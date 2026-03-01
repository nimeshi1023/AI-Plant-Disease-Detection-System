import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/94711569924?text=Hi%2C%20can%20I%20get%20a%20free%20quote%3F"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            background: "#25D366",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "40px",
            fontSize: "16px",
            fontWeight: "600",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            zIndex: 999,
            transition: "all 0.3s ease",
          }}
          onMouseOver={e => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          📞 Chat on WhatsApp
        </a>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              DT Property Cleaning Services
            </h3>
            <p className="leading-relaxed">
              Professional residential & commercial cleaning across New Zealand.
              Fully insured and satisfaction guaranteed.
            </p>
          </div>

          <div className="md:text-center">
            <h4 className="text-xl font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-3">
              <p>📍 25 Queen Street, Auckland, NZ</p>
              <p>📞 +64 21 123 4567</p>
              <p>📧 info@nzprocleaning.co.nz</p>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/aboutus" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} NZ Pro Cleaning Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;