
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Database, Network } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4 overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 opacity-10"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute opacity-30"
        initial={{ x: -100, y: -100 }}
        animate={{ 
          x: [-100, -80, -90, -100], 
          y: [-100, -120, -110, -100] 
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <Bot size={80} className="text-white" />
      </motion.div>
      
      <motion.div 
        className="absolute right-20 top-20 opacity-30"
        initial={{ x: 100, y: -50 }}
        animate={{ 
          x: [100, 120, 110, 100], 
          y: [-50, -30, -40, -50] 
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <Cpu size={60} className="text-gray-300" />
      </motion.div>
      
      <motion.div 
        className="absolute left-20 bottom-20 opacity-30"
        initial={{ x: -50, y: 100 }}
        animate={{ 
          x: [-50, -30, -40, -50], 
          y: [100, 120, 110, 100] 
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      >
        <Database size={70} className="text-white" />
      </motion.div>
      
      <motion.div 
        className="absolute right-20 bottom-20 opacity-30"
        initial={{ x: 50, y: 100 }}
        animate={{ 
          x: [50, 70, 60, 50], 
          y: [100, 80, 90, 100] 
        }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      >
        <Network size={65} className="text-gray-300" />
      </motion.div>
      
      {/* Content */}
      <div className="z-10 flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
        <motion.div 
          className="relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="rounded-full border-2 border-white p-1 overflow-hidden">
            <img 
              src="/lovable-uploads/234e2824-860e-4e3f-adec-abd3b3a96e7f.png" 
              alt="Waqas Photo" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 bg-gray-800 rounded-full p-2">
            <Bot size={24} className="text-white" />
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center md:text-left"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="text-white">Meet </span>
            <span className="text-gray-300">Waqas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Through the Eyes of <span className="text-white font-bold">Artificial Intelligence</span>
          </p>
          <p className="text-gray-400 max-w-lg">
            Welcome to this AI-powered profile that showcases different AI's perspectives 
            on who Waqas is. Explore what major AI systems have learned about his skills, 
            background, and online presence.
          </p>
          <motion.button 
            className="mt-6 bg-gray-800 hover:bg-gray-700 py-3 px-8 rounded-full text-white font-medium flex items-center gap-2 mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('ai-opinions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Explore AI Perspectives</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
