import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {Menu, X} from "lucide-react";
import { cn } from "../lib/utils";
import logo from "../assets/images/ICAL-logo.jpeg";

const navItems = [
    {name: "Home", href: "/"},
    {name: "About Us", href: "/about"},
    {name: "Contact", href: "/contact"}
]

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
            <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img 
                        src={logo} 
                        alt="ICAL Logo"
                        className="h-10 w-10 object-contain shrink-0"
                    />
                    <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-red-600 hidden sm:inline">
                        ICAL
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <Link 
                            key={key} 
                            to={item.href}
                            className={cn(
                                "transition-colors duration-300",
                                location.pathname === item.href 
                                    ? "text-red-600 font-semibold" 
                                    : "text-gray-700 hover:text-red-600"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                        {isMenuOpen ? <X size={30} /> : <Menu size={25} />}
                </button>
                <div className={cn("fixed inset-x-0 top-16 bottom-0 bg-background/95 backdrop-blur-md z-40 md:hidden",
                    isMenuOpen 
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex h-full flex-col items-center justify-start gap-8 py-10 text-xl">
                        {navItems.map((item, key) => (
                            <Link 
                                key={key} 
                                to={item.href} 
                                className={cn(
                                    "text-foreground/80 hover:text-primary transition-colors duration-300",
                                    location.pathname === item.href && "text-red-600 font-semibold"
                                )}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};