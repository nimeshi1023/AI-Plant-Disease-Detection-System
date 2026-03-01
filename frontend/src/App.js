import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import ScrollToTop from "./components/ScrollToTop";
import Commercial from './services/commercial';
import Residential from './services/residential';
import WindowCleaning from './services/window';
import MoveInOutCleaning from './services/move-in-out';
import OvenCleaning from './services/oven';
import CarpetCleaning from './services/carpet';
import BuildersCleaning from './services/builders';
import RangehoodCleaning from './services/rangehood';
import HolidayHomeCleaning from './services/holiday-home';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Navbar />
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
         <Route path="/aboutus" element={<AboutUs />} />
         <Route path="/faq" element={<FAQ />} />
         <Route path="/services/commercial" element={<Commercial />} />
        <Route path="/services/residential" element={<Residential />} />
        <Route path="/services/window" element={<WindowCleaning  />} />
        <Route path="/services/move-in-out" element={< MoveInOutCleaning  />} />
        <Route path="/services/oven" element={< OvenCleaning  />} />
         <Route path="/services/carpet" element={< CarpetCleaning  />} />
          <Route path="/services/builders" element={< BuildersCleaning  />} />
          <Route path="/services/rangehood" element={< RangehoodCleaning  />} />
         <Route path="/services/holiday-home" element={<  HolidayHomeCleaning />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;