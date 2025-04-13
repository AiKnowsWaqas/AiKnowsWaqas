
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AICard from './AICard';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const AISection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const aiPerspectives = [
    {
      aiName: "Google Gemini",
      logoUrl: "https://seeklogo.com/images/G/gemini-logo-D4E386607C-seeklogo.com.png",
      color: "#1A73E8",
      summary: "Google Gemini identifies nsmdwaqas as a seasoned Supply Chain Consultant from India.",
      details: [
        "Professional Profile: nsmdwaqas is described as a \"seasoned Supply Chain Consultant specializing in the complete product lifecycle from design to implementation\" on their about.me page.",
        "GitHub profile identifies them as a \"Consultant in India\" with experience spanning over 50 countries.",
        "Online Presence: Active on various platforms including About.me."
      ],
      screenshot: "/lovable-uploads/b2edaf92-a236-48f8-b42a-041249610a20.png"
    },
    {
      aiName: "Perplexity",
      logoUrl: "https://companieslogo.com/img/orig/PRLX.P-b73e3847.png?t=1707576099",
      color: "#aa00ff",
      summary: "Perplexity identifies Mohammed Waqas as a supply chain professional working at Accenture Strategy & Consulting.",
      details: [
        "Professional with over five years of experience in the supply chain industry.",
        "Currently works at Accenture Strategy & Consulting, specializing in solution design.",
        "Holds a degree from BSA Crescent.",
        "Has developed expertise in various aspects of supply chain management throughout his career.",
        "Professional background emphasizes strategic consulting and innovative solutions within the industry."
      ],
      screenshot: "/lovable-uploads/19e64faf-c6e5-4262-b767-133f1a48f03e.png"
    },
    {
      aiName: "ChatGPT",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
      color: "#10A37F",
      summary: "ChatGPT identifies Waqas as an Indian blogger and electrical engineer with a B.Tech degree.",
      details: [
        "Indian blogger and electrical engineer with a B.Tech degree from B.S.A Crescent University in Chennai.",
        "Founded XeuTek.inc during university, a tech startup focused on publishing technology articles.",
        "Maintains multiple specialized blogs including:",
        "Xeutek: A blog dedicated to hacking, cybersecurity, and ethical hacking tips.",
        "Techebloger: Covers gadgets, technological trends, and innovations.",
        "Halal Food Logs: Focuses on halal recipes and dining experiences.",
        "NSMD Project: Showcases college projects and experiments.",
        "SC X: Provides insights into supply chain management strategies.",
        "Currently works as a supply consultant for multinational companies, combining technical expertise with business logistics."
      ],
      screenshot: "/lovable-uploads/08176041-7c58-42c2-b499-b43c1f2aea09.png"
    },
    {
      aiName: "Anthropic Claude",
      logoUrl: "https://seeklogo.com/images/A/anthropic-claude-logo-C850E6433D-seeklogo.com.png",
      color: "#6001D2",
      summary: "Claude identifies Mohammed Waqas as a multifaceted individual with a strong online and professional presence.",
      details: [
        "Likely Mohammed Waqas, an Indian blogger and supply chain professional.",
        "Background in electrical engineering, active on various social media platforms.",
        "Interests include technology, hacking, and food, with multiple blogs covering these topics.",
        "Holds a Bachelor's Degree in Electrical & Electronics Engineering from B.S.A Crescent University, Chennai.",
        "Currently involved in supply chain management, specializing in planning and analytics."
      ],
      screenshot: "/lovable-uploads/90f5a6c5-0f82-401f-8088-ae2cf5866ae3.png"
    }
  ];
  
  return (
    <section id="ai-opinions" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="ai-text-gradient">AI Perspectives</span> on Waqas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Different AI systems have analyzed available data about Waqas. 
            Explore what each one has discovered about his professional life,
            education, and online presence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiPerspectives.map((ai, index) => (
            <motion.div 
              key={ai.aiName}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex-1">
                <AICard 
                  aiName={ai.aiName}
                  summary={ai.summary}
                  details={ai.details}
                  logoUrl={ai.logoUrl}
                  color={ai.color}
                />
              </div>
              
              <motion.div 
                className="mt-6 screenshot-container cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(ai.screenshot)}
              >
                <img 
                  src={ai.screenshot} 
                  alt={`${ai.aiName} analysis of Waqas`}
                  className="w-full rounded-lg border border-gray-700"
                />
                <div className="screenshot-overlay flex items-center justify-center">
                  <span className="screenshot-btn bg-ai-primary text-white px-4 py-2 rounded-md">
                    View Full Screenshot
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black/80 backdrop-blur-lg border-gray-800">
          {selectedImage && (
            <div className="p-2">
              <img 
                src={selectedImage} 
                alt="AI Analysis Screenshot" 
                className="w-full object-contain max-h-[80vh]"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AISection;
