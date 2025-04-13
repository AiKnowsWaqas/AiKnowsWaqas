
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, ChevronDown, ChevronUp } from 'lucide-react';

interface AICardProps {
  aiName: string;
  summary: string;
  details: string[];
  logoUrl: string;
  color: string;
  delay?: number;
}

const AICard: React.FC<AICardProps> = ({ aiName, summary, details, logoUrl, color }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="ai-card w-full h-full"
      layout
    >
      <div className={`p-6 rounded-lg overflow-hidden h-full flex flex-col`}>
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="p-2 rounded-full flex items-center justify-center" 
            style={{ backgroundColor: `${color}30` }}
          >
            <img 
              src={logoUrl} 
              alt={`${aiName} logo`} 
              className="w-8 h-8 object-contain" 
            />
          </div>
          <h3 className="text-xl font-bold" style={{ color }}>
            {aiName}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-4">{summary}</p>
        
        <motion.div 
          className="overflow-hidden"
          animate={{ height: expanded ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-2 mt-4 text-gray-300 pl-4">
            {details.map((detail, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: expanded ? 1 : 0, x: expanded ? 0 : -10 }}
                transition={{ delay: index * 0.1 }}
              >
                <Bot size={18} className="mt-1 min-w-[18px]" style={{ color }} />
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <button 
          className={`mt-auto py-2 px-4 rounded-md border border-opacity-30 flex items-center justify-center gap-2 transition-all`}
          style={{ 
            borderColor: color,
            backgroundColor: expanded ? `${color}20` : 'transparent'
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <span style={{ color }}>{expanded ? "Show Less" : "Learn More"}</span>
          {expanded ? <ChevronUp size={16} style={{ color }} /> : <ChevronDown size={16} style={{ color }} />}
        </button>
      </div>
    </motion.div>
  );
};

export default AICard;
