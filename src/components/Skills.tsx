import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

// Example data structure - replace with your actual data
const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel"]
  }
];

export default function SkillsSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 bg-neutral-900/60 rounded-2xl border border-neutral-800"
    >
      {skillGroups.map((group, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="mb-6 last:mb-0"
        >
          <div className="text-lg font-bold text-blue-400 mb-4">
            {group.category}
          </div>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs bg-neutral-800 text-neutral-200 px-3 py-1.5 rounded-lg border border-neutral-700/50 hover:bg-neutral-700 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}