
import React from 'react';
import { motion } from 'framer-motion';
import AICard from './AICard';

const AISection = () => {
  const aiPerspectives = [
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
      aiName: "Grok",
      logoUrl: "https://framerusercontent.com/images/CSPiwpK3AYvF7mmXvXm3ALFg.png",
      color: "#6001D2",
      summary: "Grok identifies Mohammed Waqas as a multifaceted individual with a strong online and professional presence.",
      details: [
        "Likely Mohammed Waqas, an Indian blogger and supply chain professional.",
        "Background in electrical engineering, active on various social media platforms.",
        "Interests include technology, hacking, and food, with multiple blogs covering these topics.",
        "Holds a Bachelor's Degree in Electrical & Electronics Engineering from B.S.A Crescent University, Chennai.",
        "Currently involved in supply chain management, specializing in planning and analytics."
      ],
      screenshot: "/lovable-uploads/90f5a6c5-0f82-401f-8088-ae2cf5866ae3.png"
    },
    {
      aiName: "Google Gemini",
      logoUrl: "https://seeklogo.com/images/G/gemini-ai-logo-A5C95F1D00-seeklogo.com.png",
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
      logoUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F47d3ee8a-8500-4857-83f1-e3e731ed0f83_1024x1024.png",
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
    }
  ];
  
  return (
    <section id="ai-opinions" className="py-20 px-4 relative bg-black">
      <div className="absolute inset-0 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            AI Perspectives on Waqas
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
                  screenshot={ai.screenshot}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
