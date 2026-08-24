'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#about"
          className="flex items-center gap-3 group"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-11 h-11 flex items-center justify-center">
            <img
              src="/logo.png.png"
              alt="Quim Juan Logo"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </div>

          <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-400 transition">
            Quim Juan<span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="mailto:quimjoramjuan05@gmail.com"
            className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-300 hover:text-white transition"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-black">
          <div className="px-6 py-5 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-neutral-300 hover:text-white transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="mailto:quimjoramjuan05@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="text-center bg-white text-black text-sm font-semibold px-5 py-3 rounded-full hover:bg-neutral-200 transition"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}