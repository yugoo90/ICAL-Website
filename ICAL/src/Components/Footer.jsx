import { Link } from "react-router-dom";
import logo from "../assets/images/ICAL-logo.jpeg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Branding */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="ICAL Logo"
                className="h-10 w-10 object-contain shrink-0"
              />
              <span className="text-2xl font-extrabold text-red-400">
                ICAL
              </span>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Igbo Cultural Association of Lethbridge
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {currentYear} ICAL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
