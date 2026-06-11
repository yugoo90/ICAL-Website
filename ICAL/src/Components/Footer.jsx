import { Link } from "react-router-dom";
import logo from "../assets/images/ICAL-logo.jpeg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-red-950 to-amber-950 bg-[length:200%_100%] animate-navbar-flow"
        aria-hidden="true"
      />
      <div className="ical-texture absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div
        className="relative h-1 bg-gradient-to-r from-emerald-400 via-amber-300 to-red-400 bg-[length:200%_100%] animate-accent-flow"
        aria-hidden="true"
      />
      <div className="relative container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="h-10 w-10 rounded-full ring-2 ring-amber-300/50 overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={logo}
                  alt="ICAL Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">
                ICAL
              </span>
            </Link>
            <p className="text-amber-100/70 text-sm text-center md:text-left">
              Igbo Cultural Association of Lethbridge
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-amber-100 mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-amber-100/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/gallery" className="text-amber-100/70 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="text-amber-100/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-amber-100/70 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-amber-100/60 text-sm text-center md:text-right">
              © {currentYear} ICAL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
