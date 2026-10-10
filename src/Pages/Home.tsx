import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer } from '../Utils/animations';
import { ChevronDown, AlertTriangle, ArrowRight, Server, Database, Activity, Terminal, Video, Cpu, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import dsaData from '../data/dsa-data.json';

import { ActiveDirectives } from '../Components/ActiveDirectives';
import projectsData from '../data/projects-data.json';
import incidentsData from '../data/incidents-data.json';
import { getTimeAgo } from '../Utils/timeAgo';

const totalSolved = dsaData.reduce((acc, curr) => acc + curr.count, 0);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lastSynced = (projectsData as any)._meta?.lastSynced;
const syncLabel = lastSynced ? `SYNCED: ${getTimeAgo(lastSynced).toUpperCase()}` : 'LIVE DATA';

const Typewriter = ({ text, delay = 50 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, delay);
    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse inline-block w-[8px] h-[1em] bg-accent ml-1 align-middle translate-y-[-1px]"></span>
    </span>
  );
};

export const Home = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPictureExpanded, setIsPictureExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isPictureExpanded) {
      const timer = setTimeout(() => setShowDetails(true), 600);
      return () => clearTimeout(timer);
    } else {
      setShowDetails(false);
    }
  }, [isPictureExpanded]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('prakharmartand755@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -15);
    setRotateY(((x - centerX) / centerX) * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="w-full">
      {/* 1. Full Screen Hero Section */}
      <section
        className="h-screen w-full flex flex-col items-center justify-center relative px-6 overflow-hidden"
        onMouseMove={handleHeroMouseMove}
      >
        {/* Interactive Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

        {/* Glowing Orb following cursor */}
        <div
          className="absolute w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] pointer-events-none transition-transform duration-700 ease-out z-0 hidden md:block"
          style={{
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
            left: 0,
            top: 0
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
            Namaste
          </h1>
          <p className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
            I'm <span className="text-white font-medium">Martand Prakhar</span>.<br />
            I like to Engineer <span className="text-accent font-medium">Software</span>!
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center text-muted animate-bounce"
        >
          <span className="text-xs font-mono uppercase tracking-widest mb-2 text-accent">Initialize</span>
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </section>

      {/* 2. Dashboard Overview */}
      <section className="min-h-screen max-w-6xl mx-auto px-6 py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Profile Identity Module (Full Width) */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-12 bg-panel rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] group-hover:bg-accent/10 transition-colors" />

            <div
              className="w-40 h-40 shrink-0 rounded-2xl overflow-hidden border border-white/10 relative transition-transform duration-200 ease-out"
              style={{ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)` }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 bg-background/20 hover:bg-transparent transition-colors duration-500 z-10 group/img" />
              <img src="/Details/Portfolio_Picture.jpg" alt="Martand Prakhar" className="w-full h-full object-cover" />
              <button
                onClick={() => setIsPictureExpanded(true)}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-background/60 backdrop-blur-sm cursor-pointer"
              >
                <div className="flex flex-col items-center gap-2 transform translate-y-4 hover:translate-y-0 transition-transform">
                  <Maximize2 className="w-8 h-8 text-white" />
                  <span className="text-xs font-mono font-bold tracking-widest text-white">EXPAND</span>
                </div>
              </button>
            </div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h2 className="text-3xl font-bold text-white tracking-tight">Martand Prakhar</h2>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/5 border border-success/20 shadow-[0_0_10px_rgba(34,197,94,0.1)] relative">
                  <div className="w-2 h-2 rounded-full bg-success animate-ping absolute" />
                  <div className="w-2 h-2 rounded-full bg-success relative z-10" />
                  <span className="text-[10px] text-success font-mono font-bold tracking-widest uppercase">STATUS: ONLINE</span>
                </div>
              </div>
              <p className="text-accent font-mono text-sm mb-4 h-5">
                <Typewriter text="SOFTWARE ENGINEER // SYSTEMS • BACKEND • AI" delay={70} />
              </p>
              <p className="text-muted leading-relaxed max-w-2xl">
                Full stack developer actively diving into the world of distributed systems and modern infrastructure. Currently studying how large scale applications run, fail and <span className='font-semibold text-accent'>SCALE</span> by building projects to solidify my learning.
              </p>

              {/* CLI Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6 justify-center md:justify-start">
                <a href="https://github.com/martand-codes" target="_blank" rel="noreferrer" className="group flex items-center gap-2 bg-[#111] hover:bg-accent/10 border border-white/5 hover:border-accent/30 text-muted hover:text-white px-4 py-2 rounded-lg text-xs font-mono transition-all">
                  <span className="text-accent font-bold">&gt;</span> ping github.com
                  <span className="w-1.5 h-3 bg-accent opacity-0 group-hover:opacity-100 animate-pulse inline-block" />
                </a>
                <a href="https://leetcode.com/u/wAWKTQPu4M/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 bg-[#111] hover:bg-accent/10 border border-white/5 hover:border-accent/30 text-muted hover:text-white px-4 py-2 rounded-lg text-xs font-mono transition-all">
                  <span className="text-accent font-bold">&gt;</span> ./execute leetcode
                  <span className="w-1.5 h-3 bg-accent opacity-0 group-hover:opacity-100 animate-pulse inline-block" />
                </a>
                <a href="/Details/Resume.pdf" target="_blank" rel="noreferrer" className="group flex items-center gap-2 bg-[#111] hover:bg-accent/10 border border-white/5 hover:border-accent/30 text-muted hover:text-white px-4 py-2 rounded-lg text-xs font-mono transition-all">
                  <span className="text-accent font-bold">&gt;</span> fetch resume.pdf
                  <span className="w-1.5 h-3 bg-accent opacity-0 group-hover:opacity-100 animate-pulse inline-block" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Active Directives Module */}
          <ActiveDirectives />

          {/* Mini Arsenal In Action */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-5 bg-panel rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-white mb-6">
                <Terminal className="w-5 h-5 text-accent" />
                <span className="text-sm font-mono tracking-widest uppercase">ARSENAL_IN_ACTION</span>
              </div>

              <div className="flex flex-col gap-4 mb-6">
                {/* Mini AankhoDekha */}
                <div className="flex flex-col gap-2 p-3 bg-background/50 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors group">
                  <div className="text-[10px] font-mono text-red-500 tracking-widest">AANKHODEKHA</div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="group-hover:text-white transition-colors">OpenCV</span>
                    <ArrowRight className="w-3 h-3 text-red-500/50" />
                    <span className="group-hover:text-white transition-colors">Node.js</span>
                    <ArrowRight className="w-3 h-3 text-red-500/50" />
                    <span className="group-hover:text-white transition-colors">PostGIS</span>
                    <ArrowRight className="w-3 h-3 text-red-500/50" />
                    <span className="group-hover:text-accent font-bold transition-colors">YOLOv8</span>
                  </div>
                </div>

                {/* Mini MoneyTrack */}
                <div className="flex flex-col gap-2 p-3 bg-background/50 rounded-xl border border-white/5 hover:border-success/30 transition-colors group">
                  <div className="text-[10px] font-mono text-success tracking-widest">MONEYTRACK</div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="group-hover:text-white transition-colors">React</span>
                    <ArrowRight className="w-3 h-3 text-success/50" />
                    <span className="group-hover:text-white transition-colors">JWT Auth</span>
                    <ArrowRight className="w-3 h-3 text-success/50" />
                    <span className="group-hover:text-white transition-colors">Express</span>
                    <ArrowRight className="w-3 h-3 text-success/50" />
                    <span className="group-hover:text-success font-bold transition-colors">MongoDB</span>
                  </div>
                </div>

                {/* Mini GameStation */}
                <div className="flex flex-col gap-2 p-3 bg-background/50 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="text-[10px] font-mono text-blue-500 tracking-widest">GAMESTATION</div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted overflow-hidden whitespace-nowrap">
                    <span className="group-hover:text-white transition-colors">React</span>
                    <ArrowRight className="w-3 h-3 text-blue-500/50 shrink-0" />
                    <span className="group-hover:text-white transition-colors">RBAC</span>
                    <ArrowRight className="w-3 h-3 text-blue-500/50 shrink-0" />
                    <span className="group-hover:text-white transition-colors">Express</span>
                    <ArrowRight className="w-3 h-3 text-blue-500/50 shrink-0" />
                    <span className="group-hover:text-white transition-colors">Postgres</span>
                    <ArrowRight className="w-3 h-3 text-blue-500/50 shrink-0" />
                    <span className="group-hover:text-blue-400 font-bold transition-colors">CDN</span>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/arsenal" className="flex items-center justify-center gap-2 w-full py-3 bg-[#111] hover:bg-accent/10 border border-white/5 hover:border-accent/50 text-muted hover:text-accent transition-all text-xs font-mono tracking-widest rounded-lg mt-auto">
              VIEW_FULL_ARSENAL <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* Algorithmic Core - Dynamic & Minimal Flex */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-4 bg-panel rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col relative overflow-hidden justify-between group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="mb-6 relative z-10 flex justify-between items-start">
              <div>
                <p className="text-sm text-muted font-medium mb-1">ALGORITHMIC CORE</p>
                <h3 className="text-3xl font-bold text-white tracking-tight">{totalSolved} <span className="text-base text-muted font-normal">Problems</span></h3>
              </div>

              {/* Small Automation Flex Badge */}
              <div className="flex items-center gap-1.5 px-2 py-1 bg-success/10 border border-success/20 rounded-md">
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span className="text-[9px] text-success font-mono font-bold tracking-wider">{syncLabel}</span>
              </div>
            </div>

            {/* Top 4 Categories */}
            <div className="flex-1 flex flex-col gap-3 relative z-10 py-2">
              {dsaData.slice(0, 4).map((topic, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted group-hover:text-white transition-colors">{topic.name}</span>
                    <span className="text-accent font-bold">{topic.count}</span>
                  </div>
                  {/* Mini Progress Bar */}
                  <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent/80 rounded-full"
                      style={{ width: `${(topic.count / dsaData[0].count) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link to="/algorithms" className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-[#111] hover:bg-accent/10 border border-white/5 hover:border-accent/50 text-white hover:text-accent transition-all text-xs font-mono tracking-widest rounded-lg relative z-10 group-hover:border-accent/30">
              VIEW_DETAILED_ANALYTICS <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* System Status */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-3 bg-panel rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-white mb-6">
                <Activity className="w-5 h-5 text-accent" />
                <span className="text-sm font-mono tracking-widest uppercase">SYS_STATUS</span>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-1 bg-background/50 p-3 rounded-lg border border-white/5">
                  <span className="text-[10px] text-muted font-mono">LOCAL_TIME</span>
                  <span className="text-xs text-white font-mono">{time} UTC+5:30</span>
                </div>
                <div className="flex flex-col gap-1 bg-background/50 p-3 rounded-lg border border-white/5">
                  <span className="text-[10px] text-muted font-mono">CLIENT_SYSTEM</span>
                  <span className="text-xs text-success font-mono uppercase">
                    {typeof navigator !== 'undefined' ? `${navigator.hardwareConcurrency} LOGICAL CORES` : 'OPERATIONAL'}
                  </span>
                </div>
                <div className="flex flex-col gap-1 bg-background/50 p-3 rounded-lg border border-white/5">
                  <span className="text-[10px] text-muted font-mono">CLIENT_MEMORY</span>
                  <span className="text-xs text-accent font-mono uppercase">
                    {typeof navigator !== 'undefined' && (navigator as any).deviceMemory ? `~${(navigator as any).deviceMemory}GB of RAM` : 'MEMORY POOL OPTIMAL'}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-success/5 border border-success/30 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-success/10 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-success relative z-10 shadow-[0_0_8px_rgba(34,197,94,1)]"></div>
                <span className="text-xs text-success font-mono font-bold tracking-widest relative z-10">CLIENT_DETECTED</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Architecture Teaser */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-8 bg-panel rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-all duration-700" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20">
                      <Server className="w-5 h-5 text-accent" />
                    </div>
                    <div className="w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1 w-full">
                        <p className="text-xs text-accent font-mono tracking-widest">FEATURED SYSTEM</p>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-success/10 border border-success/20 rounded-md">
                          <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                          <span className="text-[9px] text-success font-mono font-bold tracking-wider">{syncLabel}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Aankhodekha Infra</h3>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    A high-performance backend architecture built to process real-time ANPR camera feeds. Implements distributed load-balancing, AI-driven traffic intelligence, and a scalable microservices topology.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
                    <span className="px-2 py-1 border border-white/10 rounded bg-background/50">PostGIS</span>
                    <span className="px-2 py-1 border border-white/10 rounded bg-background/50">Docker</span>
                    <span className="px-2 py-1 border border-white/10 rounded bg-background/50">AWS EC2</span>
                  </div>
                </div>

                {/* Animated Data Pipeline Visual */}
                <div className="flex flex-col justify-center items-center h-full bg-[#0a0a0a] border border-white/5 rounded-xl p-8 relative overflow-hidden group/visual min-h-[200px]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover/visual:bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.05)_0%,transparent_70%)] transition-colors duration-700"></div>

                  {/* Floating Metrics */}
                  <div className="absolute top-4 left-4 text-[9px] font-mono text-success flex items-center gap-1 opacity-0 group-hover/visual:opacity-100 transition-opacity delay-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span> INGEST: 60FPS
                  </div>
                  <div className="absolute top-4 right-4 text-[9px] font-mono text-accent flex items-center gap-1 opacity-0 group-hover/visual:opacity-100 transition-opacity delay-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> INF: 12ms
                  </div>

                  <div className="flex items-center gap-3 w-full justify-center relative z-10 mt-2">

                    {/* Cameras */}
                    <div className="flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-lg bg-background border border-white/10 flex items-center justify-center relative group-hover/visual:border-accent/30 transition-colors shadow-lg">
                        <Video className="w-4 h-4 text-muted group-hover/visual:text-accent transition-colors" />
                        <span className="absolute -left-8 text-[8px] font-mono text-muted group-hover/visual:text-white transition-colors">CAM_1</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-background border border-white/10 flex items-center justify-center relative group-hover/visual:border-accent/30 transition-colors shadow-lg">
                        <Video className="w-4 h-4 text-muted group-hover/visual:text-accent transition-colors" />
                        <span className="absolute -left-8 text-[8px] font-mono text-muted group-hover/visual:text-white transition-colors">CAM_2</span>
                      </div>
                    </div>

                    {/* Input Pipes */}
                    <div className="flex flex-col gap-12 justify-center">
                      <div className="h-px w-10 bg-white/5 relative overflow-hidden group-hover/visual:bg-accent/20 transition-colors">
                        <div className="absolute left-0 top-0 h-full w-4 bg-accent/80 animate-[slide_1s_linear_infinite]"></div>
                      </div>
                      <div className="h-px w-10 bg-white/5 relative overflow-hidden group-hover/visual:bg-accent/20 transition-colors">
                        <div className="absolute left-0 top-0 h-full w-4 bg-accent/80 animate-[slide_1s_linear_infinite_0.5s]"></div>
                      </div>
                    </div>

                    {/* Processing Node */}
                    <div className="w-16 h-16 rounded-xl bg-accent/5 border border-accent/20 flex items-center justify-center relative shadow-[0_0_20px_rgba(255,30,30,0.05)] group-hover/visual:bg-accent/10 transition-all duration-300 group-hover/visual:border-accent/50 group-hover/visual:shadow-[0_0_25px_rgba(255,30,30,0.2)] group-hover/visual:scale-105">
                      <Cpu className="w-7 h-7 text-accent" />
                      <div className="absolute -bottom-7 text-[9px] font-mono text-accent whitespace-nowrap tracking-widest font-bold">AWS EC2 CORE</div>
                      <div className="absolute top-2 right-2 flex gap-0.5">
                        <span className="w-1 h-1 bg-success rounded-full animate-ping"></span>
                      </div>
                    </div>

                    {/* Output Pipe */}
                    <div className="h-px w-10 bg-white/5 relative overflow-hidden group-hover/visual:bg-success/20 transition-colors">
                      <div className="absolute left-0 top-0 h-full w-6 bg-success/80 animate-[slide_1.5s_linear_infinite_0.2s]"></div>
                    </div>

                    {/* Database Node */}
                    <div className="w-12 h-12 rounded-lg bg-background border border-white/10 flex items-center justify-center relative group-hover/visual:border-success/30 transition-colors shadow-lg group-hover/visual:scale-105 duration-300">
                      <Database className="w-5 h-5 text-muted group-hover/visual:text-success transition-colors" />
                      <div className="absolute -bottom-7 text-[9px] font-mono text-muted group-hover/visual:text-success transition-colors whitespace-nowrap tracking-widest font-bold">POSTGIS</div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/systems" className="inline-flex items-center justify-center w-full gap-2 py-3 bg-[#111] hover:bg-accent/10 border border-white/5 hover:border-accent/30 rounded-lg text-sm text-white hover:text-accent transition-all font-mono tracking-widest group/btn">
                DEEP_DIVE_ARCHITECTURE <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Incidents Card */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-4 group bg-panel rounded-2xl p-6 border border-white/5 shadow-2xl hover:border-red-500/30 transition-colors relative overflow-hidden flex flex-col justify-between cursor-pointer" onClick={() => window.location.href = '/incidents'}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] group-hover:bg-red-500/10 transition-colors" />
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500/70 group-hover:text-red-500 transition-colors" />
                <div className="flex items-center gap-1.5 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] text-red-500 font-mono font-bold tracking-wider">SYSTEM_LOGS</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Incident Reports</h3>
              <p className="text-sm text-muted mb-6">Engineering failures, debugging logs, and architectural lessons learned.</p>

              {/* Latest Incident Preview */}
              <div className="bg-background/50 border border-white/5 rounded-lg p-3 group-hover:border-red-500/20 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Latest Incident</span>
                  <span className="text-[10px] font-mono text-red-400">#{incidentsData.incidents[0].number}</span>
                </div>
                <p className="text-xs text-white/80 font-mono truncate">{incidentsData.incidents[0].title}</p>
                <div className="mt-2 text-[10px] text-muted font-mono flex items-center gap-2">
                  <span className="text-success">■ RESOLVED</span>
                  <span>{new Date(incidentsData.incidents[0].createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-muted group-hover:text-red-400 transition-colors relative z-10">
              <div className="flex items-center gap-2 w-full h-full">
                ACCESS_LOGS <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Picture Expansion Modal */}
      <AnimatePresence>
        {isPictureExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
            onClick={() => setIsPictureExpanded(false)}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-accent/20 hover:text-accent hover:border-accent/30 transition-all z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setIsPictureExpanded(false);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 h-full lg:h-[80vh]">
              <motion.div
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  layout: { duration: 1.8, ease: "easeInOut" },
                  scale: { duration: 1.8, ease: "easeInOut" }
                }}
                className={`relative flex justify-center ${showDetails ? 'w-full lg:w-1/2 lg:justify-end' : 'w-full'}`}
              >
                <motion.img
                  layout
                  transition={{ layout: { duration: 1.8, ease: "easeInOut" } }}
                  src="/Details/Portfolio_Picture.jpg"
                  alt="Martand Prakhar Expanded"
                  className="max-h-[50vh] lg:max-h-[80vh] w-auto object-contain rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(255,30,30,0.15)]"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">Martand <span className='text-accent'>Prakhar</span></h2>
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm font-mono text-accent">
                        <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">he/him</span>
                        <span>•</span>
                        <span>Age 20</span>
                        <span>•</span>
                        <span>3rd Year Student</span>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-md shadow-2xl backdrop-blur-sm">
                      <div className="space-y-4 text-sm">
                        <div className="flex flex-col gap-1">
                          <span className="text-muted font-mono text-xs uppercase tracking-widest">Institution</span>
                          <span className="text-white font-medium">Dayananda Sagar College of Engineering</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-muted font-mono text-xs uppercase tracking-widest">Contact</span>
                          <a href="#" onClick={handleCopyEmail} className="text-accent hover:underline">
                            {copied ? 'Copied to clipboard!' : 'prakharmartand755@gmail.com'}
                          </a>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-muted font-mono text-xs uppercase tracking-widest">Core Interests</span>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-background/50 border border-white/5 rounded text-xs text-white">Distributed Systems</span>
                            <span className="px-2 py-1 bg-background/50 border border-white/5 rounded text-xs text-white">Backend Engineering</span>
                            <span className="px-2 py-1 bg-background/50 border border-white/5 rounded text-xs text-white">AI / ML Infra</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
                      <Link
                        to="/systems"
                        onClick={() => setIsPictureExpanded(false)}
                        className="flex-1 group flex items-center justify-center gap-3 px-8 py-4 bg-accent text-background font-bold tracking-widest rounded-lg hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] uppercase font-mono"
                      >
                        See Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/resume"
                        onClick={() => setIsPictureExpanded(false)}
                        className="flex-1 group flex items-center justify-center gap-3 px-8 py-4 bg-accent text-background font-bold tracking-widest rounded-lg hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] uppercase font-mono"
                      >
                        req.get(/Resume)
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
