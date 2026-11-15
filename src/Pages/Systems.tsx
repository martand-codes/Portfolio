import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../Utils/animations';
import { Server, CheckCircle2, Clock, Calendar, Video, Landmark, Gamepad2, ArrowRight, Code2, Sparkles } from 'lucide-react';
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

        {/* Project 1: Gaming Marketplace (FLAGSHIP) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-muted font-mono uppercase tracking-widest text-sm ml-2">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-red-500" />
              <span>Gaming Marketplace</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.12)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold text-amber-300 tracking-wider">
                FLAGSHIP • BEST CREATION TILL DATE
              </span>
            </div>
          </div>
          <GameStation />
        </div>

        {/* Project 2: Camera Traffic Security System */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted font-mono uppercase tracking-widest text-sm ml-2">
            <Video className="w-4 h-4 text-accent" />
            <span>Camera Traffic Security System</span>
          </div>
          <AankhoDekha />
        </div>

        {/* Project 3: Finance */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted font-mono uppercase tracking-widest text-sm ml-2">
            <Landmark className="w-4 h-4 text-success" />
            <span>Finance</span>
          </div>
          <MoneyTrack />
        </div>
      </motion.section>

      {/* DEVELOPING PROJECTS */}
      <motion.section variants={fadeUp} className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Clock className="w-6 h-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-white font-mono">Developing</h2>
        </div>

        <div className="bg-panel/50 border border-white/5 rounded-2xl p-8 border-dashed">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-yellow-400 font-mono text-sm font-bold mb-1">
                <span>OPEN SOURCE & SYSTEMS ENGINEERING</span>
              </div>
              <p className="text-muted font-mono text-xs max-w-2xl leading-relaxed">
                Actively deep diving into open-source distributed systems, database internals, and high-performance backend infrastructure. New architectures will be featured as implementations mature.
              </p>
            </div>
            <div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-[10px] font-mono text-yellow-400 font-bold tracking-wider whitespace-nowrap">
              RESEARCH IN PROGRESS
            </div>
          </div>
        </div>
      </motion.section>

      {/* UPCOMING PROJECTS */}
      <motion.section variants={fadeUp} className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Calendar className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-white font-mono">Upcoming</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-panel/50 border border-white/5 rounded-2xl p-6 border-dashed">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-sm font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Distributed Cache & Key-Value Store (Redis-Compatible)</span>
            </div>
            <p className="text-muted font-mono text-xs leading-relaxed">
              Low-latency in-memory caching engine featuring LRU eviction policies, RESP protocol serialization, and append-only file (AOF) persistence.
            </p>
          </div>

          <div className="bg-panel/50 border border-white/5 rounded-2xl p-6 border-dashed">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>Event-Driven Distributed Log Broker</span>
            </div>
            <p className="text-muted font-mono text-xs leading-relaxed">
              High-throughput message pipeline exploring zero-copy disk transfers, partition consumer groups, and write-ahead log indexing.
            </p>
          </div>
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

