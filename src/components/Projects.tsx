'use client';

import { motion } from 'framer-motion';
import { Network } from 'lucide-react';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688.103-.253.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const projects = [
  {
    title: 'Smart Medication Dispensing System',
    description:
      'Computer Engineering project involving an automated medication dispensing system using microcontrollers, sensors, timed operations, and system monitoring.',
    tags: ['ESP32', 'Arduino', 'C++', 'IoT', 'Sensors'],
    githubUrl: 'https://github.com/sennyyyboy',
  },
  {
    title: 'Dr. Jun Villaflores DMD - Ortho App',
    description:
      'Clinic management system designed to handle patient check-ins, time tracking, and patient records through a web-based application.',
    tags: ['Python', 'JavaScript', 'Database', 'Web System'],
    githubUrl: 'https://github.com/Nyarkier/ortho-system.git',
  },
  {
    title: 'TimeMapr',
    description:
      'Interactive timeline visualization platform designed for students and educators to organize and explore historical sequences.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sennyyyboy',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest">
            <Network className="w-3.5 h-3.5" />
            Technical Work
          </span>

          <h2 className="text-3xl font-bold text-white mt-2">
            Featured Projects
          </h2>

          <p className="text-neutral-400 text-sm mt-3 max-w-2xl">
            A collection of projects from my Computer Engineering background,
            including embedded systems, IoT, software development, and
            technical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/50 hover:border-blue-500/30 hover:bg-neutral-900/70 transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-lg border border-neutral-700"
                >
                  <GithubIcon size={16} />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}