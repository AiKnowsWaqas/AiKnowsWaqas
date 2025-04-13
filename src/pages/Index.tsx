
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AISection from '@/components/AISection';
import SimilaritiesSection from '@/components/SimilaritiesSection';
import Footer from '@/components/Footer';

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="min-h-screen bg-ai-dark text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <AISection />
      <SimilaritiesSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
