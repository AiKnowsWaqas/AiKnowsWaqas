
import React from 'react';
import { Github, Linkedin, Globe, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 text-white">
              AI's View of Waqas
            </h3>
            <p className="text-gray-400 max-w-md">
              An interactive exploration of how different AI systems perceive Mohammed Waqas based on public information.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/nsmdwaqas" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/nsmdwaqas" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://twitter.com/nsmdwaqas" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://nsmdwaqas.github.io" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Globe className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AI Mirror Project. All AI-generated content reflects only what AI systems have learned from public data.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
