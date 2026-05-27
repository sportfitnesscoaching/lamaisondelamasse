"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-[#1C1C1C]">
            La Maison
          </span>
          <span className="text-xl font-bold tracking-tight text-[#C9A84C]">
            de la Masse
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#C9A84C] text-white text-sm font-semibold rounded-full hover:bg-[#B8963E] transition-colors"
        >
          Commencer
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#1C1C1C]"
          aria-label="Menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-[#1C1C1C]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center px-5 py-2.5 bg-[#C9A84C] text-white text-sm font-semibold rounded-full"
          >
            Commencer
          </a>
        </div>
      )}
    </header>
  );
}
