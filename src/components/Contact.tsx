'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-800/60">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block text-xs font-mono px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's build something together.</h2>
          <p className="text-neutral-400 text-sm md:text-base mb-8">
            Whether you have a question, a potential collaboration, or just want to connect, feel free to drop a message!
          </p>

          <a
            href="mailto:quimjoramjuan05@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
          >
            <Mail className="w-4 h-4" /> Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}