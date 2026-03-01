import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Services list
  const services = [
    
    { name: 'Commercial Cleaning', path: '/services/commercial' },
    { name: 'Home Cleaning', path: '/services/residential' },
    { name: 'Window Cleaning', path: '/services/window' },
    { name: 'Move In / Out Cleaning', path: '/services/move-in-out' },
    { name: 'Oven Cleaning', path: '/services/oven' },
    { name: 'Carpet Cleaning', path: '/services/carpet' },
    { name: 'Builders Cleaning', path: '/services/builders' },
    { name: 'Rangehood Cleaning', path: '/services/rangehood' },
    { name: 'Holiday Home Cleaning', path: '/services/holiday-home' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.jpeg"
            alt="DT Property Cleaning Logo"
            className="w-12 h-12 object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">
              DT Property Cleaning
            </h1>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/aboutus" className="hover:text-blue-600 transition-colors font-semibold">About Us</Link>
          <Link to="/faq" className="hover:text-blue-600 transition-colors font-semibold">FAQ</Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold"
            >
              Services <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => {
                      setServicesOpen(false);
                      setIsOpen(false); // in case mobile
                    }}
                    className="block px-2 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-700">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-5 text-lg font-medium text-gray-700">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-600">Home</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-600">Contact</Link>
          <Link to="/aboutus" onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-600">About Us</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-600">FAQ</Link>

          {/* Mobile Services Dropdown */}
          <div className="border-t pt-4">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full py-2 hover:text-blue-600 font-semibold"
            >
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="mt-2 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => {
                      setServicesOpen(false);
                      setIsOpen(false);
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;