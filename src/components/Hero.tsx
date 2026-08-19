'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Network } from 'lucide-react';

function GithubIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.606 0 4.267 2.373 4.267 5.464v6.278ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.558V8.999H3.555v11.453Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Status */}
        <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mb-6">
          <Network className="w-3.5 h-3.5" />
          Aspiring Network Engineer
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
          Building my career in{' '}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            networks, infrastructure, and technology.
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
          Computer Engineering graduate focused on developing practical
          skills in network engineering, routing and switching,
          infrastructure, troubleshooting, and network security. I also have
          a background in software development and IoT, which allows me to
          approach technical problems from both hardware and software
          perspectives.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#skills"
            className="flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-neutral-200 transition"
          >
            Explore My Skills
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 border border-neutral-800 bg-neutral-900 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-blue-500/40 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-neutral-400">

          <a
            href="https://github.com/sennyyyboy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/quim-joram-reyes-juan-55b4b6340/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <a
            href="mailto:quimjoramjuan05@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>

        </div>
      </motion.div>
    </section>
  );
}