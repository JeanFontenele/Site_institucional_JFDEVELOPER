import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
