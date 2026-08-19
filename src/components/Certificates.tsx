'use client';

import Image from 'next/image';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    badgeImg: '/certificates/networking-basics.png.png',
    proofUrl:
      'https://www.credly.com/badges/b88a82a5-9bb1-457e-97db-c23638518d26/public_url',
  },
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    badgeImg: '/certificates/data-analytics-essentials.png.png',
    proofUrl:
      'https://www.credly.com/badges/3a4b0a61-7c61-4843-8b8c-912ca17f2be3/public_url',
  },
  {
    title: 'Computer Hardware Basics',
    issuer: 'Cisco Networking Academy',
    badgeImg: '/certificates/computer-hardware-basics.png.png',
    proofUrl:
      'https://www.credly.com/badges/74b7cae1-4061-4d24-a83e-95b3e68826b6/public_url',
  },
  {
    title: 'Network Technician Career Path',
    issuer: 'Cisco Networking Academy',
    badgeImg: '/certificates/network-technician-career-path.png.png',
    proofUrl:
      'https://www.credly.com/badges/3f51d312-8dc9-4d15-b61a-886d754d497e/public_url',
  },
  {
    title: 'Network Support and Security',
    issuer: 'Cisco Networking Academy',
    badgeImg: '/certificates/network-support-and-security.png.png',
    proofUrl:
      'https://www.credly.com/badges/da10a861-b94a-4403-8bc0-281b9484ba97/public_url',
  },
  {
    title: 'Operating Systems Basics',
    issuer: 'Cisco Networking Academy',
    badgeImg: '/certificates/operating-systems-basics.png.png',
    proofUrl:
      'https://www.credly.com/badges/e96abab9-0e28-47cd-ab5b-db80d3540948/public_url',
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <ShieldCheck className="text-blue-500" size={28} />
          Networking Certifications & Training
        </h2>

        <p className="text-neutral-400 text-sm mt-3 max-w-2xl">
          Certifications and training that support my goal of building a
          career in network engineering and IT infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <a
            key={cert.title}
            href={cert.proofUrl}
            target="_blank"
            rel="noreferrer"
            className="group p-5 border border-neutral-800 rounded-xl bg-neutral-900/50 hover:border-blue-500/40 hover:bg-neutral-900 transition flex flex-col items-center text-center justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28 mb-4 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={cert.badgeImg}
                  alt={`${cert.title} certificate badge`}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition">
                {cert.title}
              </h3>

              <p className="text-xs text-neutral-400 mt-1">
                {cert.issuer}
              </p>
            </div>

            <span className="mt-5 inline-flex items-center gap-1.5 text-xs text-blue-400 font-medium">
              View Certificate
              <ExternalLink size={12} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}