
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Bot, BrainCircuit, CheckCircle2, Zap } from 'lucide-react';

const SimilaritiesSection = () => {
  const commonTraits = [
    {
      name: "Supply Chain Expertise",
      description: "All AI systems identified Waqas as having significant experience and expertise in supply chain management and consulting.",
      icon: <Bot className="w-6 h-6 text-white" />,
    },
    {
      name: "Educational Background",
      description: "Multiple AI systems mentioned Waqas's educational background from B.S.A Crescent University or Crescent University in Chennai.",
      icon: <BrainCircuit className="w-6 h-6 text-white" />,
    },
    {
      name: "Consultant Role",
      description: "There's consensus about Waqas working as a consultant, with specific mentions of supply chain consulting.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    },
    {
      name: "Technical Background",
      description: "Several AI systems noted Waqas's technical background, with mentions of electrical engineering or technology expertise.",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
  ];

  const consensusData = [
    { name: 'Supply Chain Expert', value: 100, color: '#FFFFFF' },
    { name: 'Consultant', value: 100, color: '#EEEEEE' },
    { name: 'Indian Origin', value: 75, color: '#DDDDDD' },
    { name: 'B.S.A Crescent Grad', value: 75, color: '#CCCCCC' },
    { name: 'Technical Background', value: 75, color: '#BBBBBB' },
    { name: 'Online Presence', value: 50, color: '#AAAAAA' },
    { name: 'Blogger', value: 50, color: '#999999' },
    { name: 'Accenture Employee', value: 25, color: '#888888' },
  ];

  return (
    <section className="py-20 px-4 relative bg-black">
      <div className="absolute inset-0 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            AI Consensus About Waqas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            While each AI has its unique perspective, there are key areas where they agree
            about Waqas's background and expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white">Common Identifiers</h3>
            
            <div className="space-y-6">
              {commonTraits.map((trait, index) => (
                <motion.div 
                  key={trait.name}
                  className="flex gap-4 p-4 rounded-lg bg-opacity-20 border border-gray-800"
                  style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="mt-1">{trait.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{trait.name}</h4>
                    <p className="text-gray-400 text-sm">{trait.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="h-96 md:h-120"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">AI Agreement Level</h3>
            <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={consensusData}
                  margin={{ top: 10, right: 30, left: 40, bottom: 20 }}
                >
                  <XAxis type="number" domain={[0, 100]} tickCount={5} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    scale="band" 
                    width={120}
                    tick={{ fill: '#FFFFFF', fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a1a', 
                      borderColor: '#333',
                      borderRadius: '0.375rem'
                    }}
                    formatter={(value) => [`${value}% of AIs mention this`, 'Agreement']}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={16}>
                    {consensusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimilaritiesSection;
