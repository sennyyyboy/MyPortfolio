'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen selection:bg-blue-500 selection:text-white">
      <Navbar />

      <div className="pt-24 space-y-12">
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </div>
    </main>
  );
}