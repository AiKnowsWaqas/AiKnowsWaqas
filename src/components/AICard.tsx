
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, ChevronDown, ChevronUp } from 'lucide-react';

interface AICardProps {
  aiName: string;
  summary: string;
  details: string[];
  logoUrl: string;
  color: string;
  screenshot: string;
  delay?: number;
}

const AICard: React.FC<AICardProps> = ({ aiName, summary, details, logoUrl, color, screenshot }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-800 rounded-lg bg-black text-white h-full">
      <div className="p-6 rounded-lg overflow-hidden h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="p-2 rounded-full flex items-center justify-center bg-gray-900"
          >
            <img 
              src={logoUrl} 
              alt={`${aiName} logo`} 
              className="w-8 h-8 object-contain" 
            />
          </div>
          <h3 className="text-xl font-bold text-white">
            {aiName}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-4">{summary}</p>
        
        <motion.div 
          className="overflow-hidden"
          animate={{ height: expanded ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-2 mt-4 text-gray-300 pl-4 mb-6">
            {details.map((detail, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: expanded ? 1 : 0, x: expanded ? 0 : -10 }}
                transition={{ delay: index * 0.1 }}
              >
                <Bot size={18} className="mt-1 min-w-[18px] text-white" />
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
          
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 mb-6"
            >
              <img 
                src={screenshot} 
                alt={`${aiName} analysis screenshot`}
                className="w-full rounded-lg border border-gray-800"
              />
            </motion.div>
          )}
        </motion.div>
        
        <button 
          className="mt-auto py-2 px-4 rounded-md border border-gray-500 flex items-center justify-center gap-2 transition-all hover:bg-gray-800"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="text-white">{expanded ? "Show Less" : "Learn More"}</span>
          {expanded ? <ChevronUp size={16} className="text-white" /> : <ChevronDown size={16} className="text-white" />}
        </button>
      </div>
    </div>
  );
};

export default AICard;
