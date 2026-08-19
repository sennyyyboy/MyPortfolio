import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Web Innovate 2025',
    issuer: 'ICPEP / Tech Seminar',
    date: '2025',
    link: '#', // Replace with link or PDF asset path
  },
  // Add more certificate objects here
];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Award className="text-blue-500" /> Certifications & Training
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <div key={index} className="p-5 border border-neutral-800 rounded-xl bg-neutral-900/50 hover:border-neutral-700 transition">
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            <p className="text-sm text-neutral-400 mt-1">{cert.issuer} • {cert.date}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-400 mt-3 hover:underline">
                View Credential <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}