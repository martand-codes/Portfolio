import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { TechArsenalGrid } from '../Components/Arsenal/TechArsenalGrid';
import { ArsenalInAction } from '../Components/Arsenal/ArsenalInAction';

export const Arsenal = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
          <Terminal className="w-8 h-8 text-accent" />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Tech Arsenal</h1>
        </div>
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          The complete inventory of languages, frameworks, and infrastructure tools I use to build scalable systems. Segregated by battlefield.
        </p>
      </motion.div>

      <TechArsenalGrid />
      <ArsenalInAction />
    </div>
  );
};
