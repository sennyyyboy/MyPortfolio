'use client';

import { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#about" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-blue-600/10 border border-blue-500/20 group-hover:border-blue-500/50 transition">
            <Code2 className="w-5 h-5 text-blue-400" />
          </div>

          <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-400 transition">
            QuimJuan<span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

          {/* LET'S TALK */}
          <a
            href="mailto:quimjoramjuan05@gmail.com?subject=Portfolio%20Inquiry"
            className="text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-6 space-y-4">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-neutral-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Let's Talk */}
          <a
            href="mailto:quimjoramjuan05@gmail.com?subject=Portfolio%20Inquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center text-sm font-semibold bg-white text-black px-4 py-3 rounded-full hover:bg-neutral-200 transition"
          >
            Let's Talk
          </a>

        </div>
      )}
    </header>
  );
}