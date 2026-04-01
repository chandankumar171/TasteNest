import { useState, useEffect } from "react";
import logo from "../assets/tastenest-logo.png";

const navLinks = [
  { label: "Home", href: "#home", hasDropdown: true },
  { label: "About Us", href: "#about", hasDropdown: false },
  { label: "Shop", href: "#menu", hasDropdown: true },
  { label: "Blog", href: "#news", hasDropdown: true },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Contact", href: "#contact", hasDropdown: false },
];

function CartIcon() {
  return (
    <button className="relative group">
      {/* Cart container box */}
      <div className="w-9 h-9 border-2 border-gray-300 rounded-md flex items-center justify-center group-hover:border-red-500 transition-colors duration-200">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gray-700 group-hover:text-red-500 transition-colors duration-200"
        >
          {/* Shopping cart body */}
          <path
            d="M6 2H3L2 7H22L20 16H6L4 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M6 2L7.5 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Wheels */}
          <circle cx="9" cy="20" r="1.5" fill="currentColor" />
          <circle cx="17" cy="20" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Badge */}
      <span className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
        0
      </span>
    </button>
  );
}

function HamburgerMenu() {
  return (
    <button className="flex flex-col justify-center gap-[5px] w-8 h-8 group lg:hidden text-gray-700 ">
      <span className="block h-[2px] w-6 bg-gray-700 rounded-full group-hover:bg-red-500 transition-colors duration-200" />
      <span className="block h-[2px] w-6 bg-gray-700 rounded-full group-hover:bg-red-500 transition-colors duration-200" />
      <span className="block h-[2px] w-4 bg-gray-700 rounded-full group-hover:bg-red-500 transition-colors duration-200" />
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
      }`}
    >
      {/* <div className="max-w-7xl mx-auto px-6 flex items-center justify-between"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home">
          <img
            src={logo}
            alt="TasteNest Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        {/* <nav className="hidden md:flex items-center gap-8"> */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              {link.label}
              {link.hasDropdown && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="mt-0.5 opacity-50"
                >
                  <path
                    d="M2 3.5L5 6.5L8 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        {/* <div className="hidden md:flex items-center gap-4"> */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <CartIcon />

          <a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-6 py-2.5 rounded transition-all duration-200 hover:shadow-md"
            style={{ backgroundColor: "#FFC222" }}
          >
            Contact Us
          </a>

          <HamburgerMenu />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
  <CartIcon />
</div>

        {/* Mobile Toggle */}
        <button
          //className="md:hidden text-gray-700"
          className="lg:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-6 bg-gray-700 rounded-full" />
              <span className="block h-[2px] w-6 bg-gray-700 rounded-full" />
              <span className="block h-[2px] w-4 bg-gray-700 rounded-full" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg"> */}
        {mobileOpen && (
  <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2.5 text-sm font-semibold text-gray-700 border-b border-gray-50 hover:text-red-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 block text-center bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-6 py-2.5 rounded transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}