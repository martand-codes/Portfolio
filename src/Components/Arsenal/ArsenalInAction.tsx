import { motion } from 'framer-motion';
import { Terminal, Server, Database, Cloud, Shield, GlobeCode, Cpu, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ArsenalInAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-24 mb-16"
    >
      <div className="flex items-center gap-3 mb-10">
        <Terminal className="w-6 h-6 text-accent" />
        <h2 className="text-3xl font-black text-white tracking-tight uppercase">Arsenal In Action</h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* AankhoDekha Stack */}
        <Link to="/systems" className="block bg-panel rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-red-500/30 transition-all cursor-pointer">
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-[50px] group-hover:bg-red-500/10 transition-colors" />
          <h3 className="text-xl font-bold text-white mb-2 relative z-10 flex items-center gap-2">
            <span className="text-red-500 font-mono">01.</span> AankhoDekha
          </h3>
          <p className="text-muted text-sm font-mono mb-8 relative z-10">AI-DRIVEN TRAFFIC INTELLIGENCE SYSTEM</p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 w-full overflow-x-auto pb-4">
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <Cpu className="w-6 h-6 text-red-400 mb-2" />
              <span className="text-xs font-mono text-white">OpenCV / Edge</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-red-500/50 animate-[slide_1.5s_linear_infinite]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <Server className="w-6 h-6 text-white mb-2" />
              <span className="text-xs font-mono text-white">Node.js API</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-red-500/50 animate-[slide_1.5s_linear_infinite_0.5s]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <Database className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-xs font-mono text-white">PostGIS DB</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-red-500/50 animate-[slide_1.5s_linear_infinite_1s]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-accent/30 rounded-xl min-w-[120px] shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <Cpu className="w-6 h-6 text-accent mb-2" />
              <span className="text-xs font-mono text-accent font-bold">YOLOv8 Core</span>
            </div>
          </div>
        </Link>

        {/* MoneyTrack Stack */}
        <Link to="/systems" className="block bg-panel rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-success/30 transition-all cursor-pointer">
          <div className="absolute top-0 left-0 w-32 h-32 bg-success/5 rounded-full blur-[50px] group-hover:bg-success/10 transition-colors" />
          <h3 className="text-xl font-bold text-white mb-2 relative z-10 flex items-center gap-2">
            <span className="text-success font-mono">02.</span> MoneyTrack
          </h3>
          <p className="text-muted text-sm font-mono mb-8 relative z-10">MERN FINANCIAL ANALYTICS DASHBOARD</p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 w-full overflow-x-auto pb-4">
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <GlobeCode className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-xs font-mono text-white">React + Vite</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-success/50 animate-[slide_1.5s_linear_infinite]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <Shield className="w-6 h-6 text-yellow-400 mb-2" />
              <span className="text-xs font-mono text-white">JWT Auth Layer</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-success/50 animate-[slide_1.5s_linear_infinite_0.5s]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <Server className="w-6 h-6 text-white mb-2" />
              <span className="text-xs font-mono text-white">Express.js</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-success/50 animate-[slide_1.5s_linear_infinite_1s]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-success/30 rounded-xl min-w-[120px] shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <Database className="w-6 h-6 text-success mb-2" />
              <span className="text-xs font-mono text-success font-bold">MongoDB Atlas</span>
            </div>
          </div>
        </Link>

        {/* GameStation Stack */}
        <Link to="/systems" className="block bg-panel rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all cursor-pointer">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[50px] group-hover:bg-blue-500/10 transition-colors" />
          <h3 className="text-xl font-bold text-white mb-2 relative z-10 flex items-center gap-2">
            <span className="text-blue-500 font-mono">03.</span> GameStation
          </h3>
          <p className="text-muted text-sm font-mono mb-8 relative z-10">FOR THE GAMERS BY THE GAMER/DEVELOPER</p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 w-full overflow-x-auto pb-4">
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <GlobeCode className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-xs font-mono text-white">React UI</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-blue-500/50 animate-[slide_1.5s_linear_infinite]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <UserCheck className="w-6 h-6 text-yellow-400 mb-2" />
              <span className="text-xs font-mono text-white">RBAC Engine</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-blue-500/50 animate-[slide_1.5s_linear_infinite_0.5s]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <Server className="w-6 h-6 text-white mb-2" />
              <span className="text-xs font-mono text-white">Node.js API</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-blue-500/50 animate-[slide_1.5s_linear_infinite_0.75s]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-white/10 rounded-xl min-w-[120px]">
              <Database className="w-6 h-6 text-purple-400 mb-2" />
              <span className="text-xs font-mono text-white">PostgreSQL</span>
            </div>
            <div className="h-8 w-px md:h-px md:w-16 bg-white/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-blue-500/50 animate-[slide_1.5s_linear_infinite_1s]" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-background border border-blue-500/30 rounded-xl min-w-[120px] shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Cloud className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-xs font-mono text-blue-400 font-bold">Cloudinary CDN</span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};
