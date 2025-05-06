
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AISection from '@/components/AISection';
import SimilaritiesSection from '@/components/SimilaritiesSection';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import ParticleBackground from '@/components/ParticleBackground';
import CursorEffect from '@/components/CursorEffect';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <CursorEffect />
      <NavBar />
      
      {/* Hero Section with Particles */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
      
      {/* AI Section with Particles */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <AISection />
        </div>
      </div>
      
      {/* Similarities Section with Particles */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <SimilaritiesSection />
        </div>
      </div>
      
      {/* Footer with Particles */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
