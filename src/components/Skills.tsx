'use client';

import { motion } from 'framer-motion';
import {
  Network,
  Server,
  Shield,
  Code2,
  Wrench,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const skillGroups = [
  {
    category: 'Networking',
    icon: Network,
    skills: [
      'TCP/IP',
      'OSI Model',
      'IPv4 / IPv6',
      'Subnetting',
      'VLANs',
      'DHCP',
      'DNS',
      'NAT',
      'LAN / WAN',
      'Routing & Switching',
      'Network Troubleshooting',
    ],
  },
  {
    category: 'Network Infrastructure',
    icon: Server,
    skills: [
      'Cisco Packet Tracer',
      'Network Configuration',
      'Virtual Networking',
      'Switch Configuration',
      'Router Configuration',
      'Basic Network Administration',
    ],
  },
  {
    category: 'Security & Monitoring',
    icon: Shield,
    skills: [
      'Basic Network Security',
      'Wireshark',
      'Network Diagnostics',
      'Troubleshooting',
      'System Monitoring',
      'Security Fundamentals',
    ],
  },
  {
    category: 'Development',
    icon: Code2,
    skills: [
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Django',
      'Git / GitHub',
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      'Linux',
      'Git',
      'GitHub',
      'VirtualBox',
      'VMware',
      'VS Code',
    ],
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="mb-10">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
          Technical Skills
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Networking & Technical Skills
        </h2>

        <p className="text-neutral-400 mt-3 max-w-2xl">
          My primary focus is networking and infrastructure, while my
          programming background gives me additional skills for automation,
          troubleshooting, and technical projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="p-6 bg-neutral-900/60 rounded-2xl border border-neutral-800 hover:border-blue-500/30 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-neutral-800 text-neutral-200 px-3 py-2 rounded-lg border border-neutral-700/50 hover:border-blue-500/40 hover:bg-neutral-700 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}