import { motion } from 'framer-motion';
import { fadeUp } from '../Utils/animations';
import { Target, MapPin, Briefcase, Code2, ChevronRight, Terminal } from 'lucide-react';

export const ActiveDirectives = () => {
  return (
    <motion.div variants={fadeUp} className="col-span-1 lg:col-span-12 bg-panel rounded-2xl p-6 lg:p-8 border border-accent/30 shadow-[0_0_30px_rgba(255,30,30,0.05)] flex flex-col relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors" />
      
      <div className="flex items-center gap-2 text-accent mb-6 relative z-10">
        <Target className="w-6 h-6 animate-pulse" />
        <span className="text-sm font-mono tracking-widest uppercase font-bold">CURRENT_OBJECTIVES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        
        {/* Objective 1 */}
        <div className="bg-background/50 border border-white/10 hover:border-accent/40 transition-colors rounded-xl p-4 flex flex-col gap-3 group/card shadow-lg">
          <div className="flex items-center gap-2 text-muted group-hover/card:text-white transition-colors">
            <Briefcase className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest">Seeking</span>
          </div>
          <p className="text-sm text-white font-medium">Software Engineering Internships</p>
          <p className="text-xs text-muted font-mono mt-auto">Full Stack • Backend</p>
        </div>

        {/* Objective 2 */}
        <div className="bg-background/50 border border-white/10 hover:border-success/40 transition-colors rounded-xl p-4 flex flex-col gap-3 group/card shadow-lg">
          <div className="flex items-center gap-2 text-muted group-hover/card:text-white transition-colors">
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest">Location</span>
          </div>
          <p className="text-sm text-white font-medium">Bangalore, India <br/>or Remote</p>
          <div className="flex items-center gap-1.5 mt-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-[10px] text-success font-mono font-bold tracking-wider">AVAILABLE NOW</span>
          </div>
        </div>

        {/* Objective 3 */}
        <div className="bg-background/50 border border-white/10 hover:border-blue-500/40 transition-colors rounded-xl p-4 flex flex-col gap-3 group/card shadow-lg">
          <div className="flex items-center gap-2 text-muted group-hover/card:text-white transition-colors">
            <Code2 className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest">Core Domain</span>
          </div>
          <p className="text-sm text-white font-medium">Full Stack Development</p>
          <p className="text-xs text-muted font-mono mt-auto flex items-center gap-1">
            <ChevronRight className="w-3 h-3 text-blue-400" /> Backend heavy
          </p>
        </div>

        {/* Objective 4 */}
        <div className="bg-background/50 border border-white/10 hover:border-purple-500/40 transition-colors rounded-xl p-4 flex flex-col gap-3 group/card shadow-lg">
          <div className="flex items-center gap-2 text-muted group-hover/card:text-white transition-colors">
            <Terminal className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest">Current Focus</span>
          </div>
          <p className="text-sm text-white font-medium">Learning Scalable Software</p>
          <div className="text-xs text-muted font-mono mt-auto flex flex-col gap-1.5">
            <div className="flex items-center gap-1">
              <span className="text-purple-400">»</span> Backend fundamentals
            </div>
            <div className="flex items-center gap-1">
              <span className="text-purple-400">»</span> Exploring Open Source
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
