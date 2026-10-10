import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../Utils/animations';
import { Server, CheckCircle2, Clock, Calendar, Video, Landmark, Gamepad2, ArrowRight, Code2 } from 'lucide-react';
import { AankhoDekha } from '../Components/Systems/AankhoDekha';
import { MoneyTrack } from '../Components/Systems/MoneyTrack';
import { GameStation } from '../Components/Systems/GameStation';

export const Systems = () => {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-16 max-w-6xl mx-auto pt-32 pb-24 px-6">
      <motion.div variants={fadeUp} className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center gap-3 font-mono">
          <Server className="w-8 h-8 text-accent" />
          SYSTEM_ARCHITECTURE_MAPPING
        </h1>
        <p className="text-muted mt-2 font-mono text-sm max-w-2xl">
          Deep dives into the system design, data pipelines, and infrastructure of large-scale engineering projects.
        </p>
      </motion.div>

      {/* DEPLOYED PROJECTS */}
      <motion.section variants={fadeUp} className="space-y-12">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <CheckCircle2 className="w-6 h-6 text-success" />
          <h2 className="text-2xl font-bold text-white font-mono">Deployed Projects</h2>
        </div>

        {/* Project 1: Camera Traffic Security System */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted font-mono uppercase tracking-widest text-sm ml-2">
            <Video className="w-4 h-4 text-accent" />
            <span>Camera Traffic Security System</span>
          </div>
          <AankhoDekha />
        </div>

        {/* Project 2: Finance */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted font-mono uppercase tracking-widest text-sm ml-2">
            <Landmark className="w-4 h-4 text-success" />
            <span>Finance</span>
          </div>
          <MoneyTrack />
        </div>


      </motion.section>

      {/* DEVELOPING PROJECTS */}
      <motion.section variants={fadeUp} className="space-y-12">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Clock className="w-6 h-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-white font-mono">Developing</h2>
        </div>

        {/* Project 3: Gaming Marketplace */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted font-mono uppercase tracking-widest text-sm ml-2">
            <Gamepad2 className="w-4 h-4 text-red-500" />
            <span>Gaming Marketplace</span>
          </div>
          <GameStation />
        </div>
      </motion.section>

      {/* UPCOMING PROJECTS */}
      <motion.section variants={fadeUp} className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Calendar className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-white font-mono">Upcoming</h2>
        </div>

        <div className="bg-panel/50 border border-white/5 rounded-2xl p-8 text-center border-dashed">
          <p className="text-muted font-mono text-sm">Planning next-generation distributed systems. Details dropping soon.</p>
        </div>
      </motion.section>

      {/* CALL TO ACTION */}
      <motion.section variants={fadeUp} className="pt-8 text-center">
        <Link 
          to="/arsenal" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-all rounded-xl font-mono text-sm font-bold group"
        >
          <Code2 className="w-5 h-5" />
          SEE WHICH TECH I USED TO MAKE THESE
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.section>

    </motion.div>
  );
};

