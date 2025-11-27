// app/components/Navbar.tsx
'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Speaking", href: "/speaking" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#0A1F44] text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-purple-400 transition"
        >
          Ibrahim Amin
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="
                  inline-block 
                  px-4 py-2 rounded-xl font-medium text-white
                  bg-gradient-to-r from-purple-600 to-indigo-600
                  hover:shadow-purple-500/40 shadow-lg
                  transition-all hover:scale-105
                "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0A1F44] w-full px-6 py-4 space-y-4 animate-slideDown">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  block text-white text-lg font-medium px-4 py-3 rounded-xl
                  bg-gradient-to-r from-purple-600 to-indigo-600
                  hover:shadow-purple-500/40 shadow-lg
                  transition-all hover:scale-105
                "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

