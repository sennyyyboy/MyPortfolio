'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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

const projects = [
  {
    title: 'TimeMapr',
    desc: 'Interactive timeline visualization platform designed for students and educators to map out historical sequences.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Smart Dispenser System',
    desc: 'Microcontroller-driven medication manager integrated with real-time web scheduling interface.',
    tech: ['ESP32', 'Node.js', 'WebSockets'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-neutral-900/60 rounded-2xl border border-neutral-800 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {proj.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {proj.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-neutral-800 pt-4">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white hover:text-blue-400 font-medium transition"
                >
                  Live Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition"
                >
                  Source <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}