"use client";

import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-[#0A1F44] text-white pt-16 pb-10 overflow-hidden rounded-t-3xl">

      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-purple-600 opacity-20 blur-3xl animate-pulse-slow rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600 opacity-20 blur-3xl animate-pulse-slow rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Ibrahim Amin</h2>
          <p className="text-gray-300 leading-relaxed">
            Entrepreneur, Consultant & Freelancer Advocate — empowering the
            future of digital finance, innovation, and transformation.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/ibrahimamindigital" className="hover:text-purple-400 transition text-xl"><FiFacebook /></a>
            <a href="https://www.instagram.com/ibrahimamindigital?igsh=MTB1Mm04NGhpeWNqaQ==" className="hover:text-purple-400 transition text-xl"><FiInstagram /></a>
            <a href="https://www.linkedin.com/in/ibrahimameen/" className="hover:text-purple-400 transition text-xl"><FiLinkedin /></a>
            <a href="https://www.youtube.com/@ibrahimamin8157" className="hover:text-purple-400 transition text-xl"><FiYoutube /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="/about" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-purple-400 transition">Services</a></li>
            <li><a href="/speaking" className="hover:text-purple-400 transition">Speaking</a></li>
            <li><a href="/gallery" className="hover:text-purple-400 transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-300">Have a project or collaboration in mind?</p>

          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-purple-500/40 shadow-lg transition-all hover:scale-105"
          >
            Contact Now
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12 border-t border-white/10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Ibrahim Amin — All Rights Reserved.
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.25;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
