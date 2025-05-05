
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AISection from '@/components/AISection';
import SimilaritiesSection from '@/components/SimilaritiesSection';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import ParticleBackground from '@/components/ParticleBackground';
import CursorTrail from '@/components/CursorTrail';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <ParticleBackground />
      <CursorTrail />
      <NavBar />
      <HeroSection />
      <AISection />
      <SimilaritiesSection />
      <Footer />
    </div>
  );
};

export default Index;
