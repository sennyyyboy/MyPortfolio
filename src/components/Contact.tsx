'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-800/60"
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-mono px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's connect.
          </h2>

          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            I'm currently building my skills in network engineering and
            infrastructure. If you'd like to connect, discuss an opportunity,
            or talk about technology, feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Email */}
          <motion.a
            href="mailto:quimjoramjuan05@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group min-h-[150px] p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-blue-500/40 transition flex flex-col justify-between"
          >
            <div>
              <Mail className="w-6 h-6 text-blue-400 mb-4" />

              <p className="text-xs text-neutral-500 uppercase tracking-wider">
                Email
              </p>

              <p className="text-sm text-white mt-1 break-all group-hover:text-blue-400 transition">
                quimjoramjuan05@gmail.com
              </p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+639816575078"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="group min-h-[150px] p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-blue-500/40 transition flex flex-col justify-between"
          >
            <div>
              <Phone className="w-6 h-6 text-blue-400 mb-4" />

              <p className="text-xs text-neutral-500 uppercase tracking-wider">
                Phone
              </p>

              <p className="text-sm text-white mt-1 group-hover:text-blue-400 transition">
                +63 981-657-5078
              </p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group min-h-[150px] p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 transition flex flex-col justify-between"
          >
            <div>
              <MapPin className="w-6 h-6 text-blue-400 mb-4" />

              <p className="text-xs text-neutral-500 uppercase tracking-wider">
                Location
              </p>

              <p className="text-sm text-white mt-1">
                Philippines
              </p>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/quim-joram-reyes-juan-55b4b6340/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="group min-h-[150px] p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-blue-500/40 transition flex flex-col justify-between"
          >
            <div>
              <div className="w-6 h-6 mb-4 flex items-center justify-center rounded bg-blue-500/10 text-blue-400 font-bold text-sm">
                in
              </div>

              <p className="text-xs text-neutral-500 uppercase tracking-wider">
                LinkedIn
              </p>

              <p className="text-sm text-white mt-1 group-hover:text-blue-400 transition">
                Connect with me
              </p>
            </div>
          </motion.a>

        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/sennyyyboy"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-400 hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/quim-joram-reyes-juan-55b4b6340/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-400 hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Email CTA */}
        <div className="text-center mt-10">
          <a
            href="mailto:quimjoramjuan05@gmail.com?subject=Portfolio%20Inquiry"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
          >
            <Send className="w-4 h-4" />
            Send an Email
          </a>
        </div>

      </div>
    </section>
  );
}