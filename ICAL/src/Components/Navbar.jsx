import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import logo from "../assets/images/ICAL-logo.jpeg";


const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];


export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const closeMenu = () => setIsMenuOpen(false);


    return (
        <nav className="sticky top-0 left-0 w-full z-50 shadow-md">
            <div
                className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-red-800 to-amber-700 bg-[length:200%_100%] animate-navbar-flow"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(255,255,255,0.4)_6px,rgba(255,255,255,0.4)_7px)]"
                aria-hidden="true"
            />
            <div className="relative container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="h-10 w-10 rounded-full ring-2 ring-amber-300/60 ring-offset-1 ring-offset-transparent overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <img
                            src={logo}
                            alt="ICAL Logo"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold hidden sm:inline bg-gradient-to-r from-amber-100 via-white to-amber-200 bg-clip-text text-transparent drop-shadow-sm">
                        ICAL
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item, key) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={key}
                                to={item.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300",
                                    isActive
                                        ? "text-amber-950 bg-amber-200/90 shadow-sm"
                                        : "text-white/90 hover:text-amber-100 hover:bg-white/10"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-amber-100 hover:text-white transition-colors z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={30} /> : <Menu size={25} />}
                </button>

                <div
                    className={cn(
                        "fixed inset-x-0 top-16 bottom-0 z-40 md:hidden transition-opacity duration-300",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-emerald-950/95 via-red-950/95 to-amber-950/95 backdrop-blur-md"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />

                    <div className="relative flex h-full flex-col items-center justify-start gap-6 py-12 text-xl">
                        {navItems.map((item, key) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={key}
                                    to={item.href}
                                    className={cn(
                                        "px-6 py-2 rounded-full transition-all duration-300",
                                        isActive
                                            ? "text-amber-950 bg-amber-200 font-semibold"
                                            : "text-amber-50/90 hover:text-white hover:bg-white/10"
                                    )}
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div
                className="relative h-1 bg-gradient-to-r from-emerald-400 via-amber-300 to-red-400 bg-[length:200%_100%] animate-accent-flow"
                aria-hidden="true"
            />
        </nav>
    );
};


