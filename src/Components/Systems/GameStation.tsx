import { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeUp } from '../../Utils/animations';
import { 
  Code2, GitBranch, Cpu, Database, 
  Network, ShieldAlert, Server, Sparkles, Gamepad2, Users, CreditCard,
  FileCode2, Camera, Eye, Workflow, Activity, Zap
} from 'lucide-react';
import { ProjectTelemetry } from './ProjectTelemetry';
import { ExportButton } from './ExportButton';
import { gameStationReport } from '../../data/reports';
import ReactMarkdown from 'react-markdown';
import incidentsData from '../../data/incidents-data.json';

const MarkdownComponents = {
  p: ({ children }: any) => <p className="mb-3 last:mb-0 text-white/80">{children}</p>,
  code: ({ children }: any) => (
    <code className="bg-red-500/10 px-1.5 py-0.5 rounded text-red-400 border border-red-500/20">{children}</code>
  ),
  pre: ({ children }: any) => (
    <pre className="bg-black/60 p-4 border-l-2 border-red-500/50 rounded-r overflow-x-auto my-3 font-mono text-xs">
      <code className="text-muted">{children}</code>
    </pre>
  ),
  strong: ({ children }: any) => <strong className="text-white font-bold">{children}</strong>,
  ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1 mb-3 text-white/80">{children}</ul>,
  li: ({ children }: any) => <li>{children}</li>,
};

export const GameStation = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'backend' | 'visuals' | 'incidents'>('architecture');
  
  const gameStationIncidents = incidentsData.incidents.filter(i => i.projectName.toLowerCase() === 'gamestation');

  return (
    <motion.div variants={fadeUp} className="bg-panel rounded-2xl border border-white/5 shadow-2xl overflow-hidden group">
      
      {/* Header */}
      <div className="border-b border-white/5 bg-background/30 p-8 relative overflow-hidden">
        {/* RGB Gaming Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h2 className="text-3xl font-bold text-white tracking-tight">GameStation</h2>
              <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-widest">DEPLOYED</span>
              </div>
              <div className="px-3 py-1 bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-red-500/15 border border-amber-500/30 rounded-full flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.18)]">
                <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-amber-300 tracking-wider">
                  BEST CREATION TILL DATE
                </span>
              </div>
            </div>
            <p className="text-red-400 font-mono text-sm mb-3">FULL-STACK GAME MARKETPLACE & PLATFORM</p>
            <p className="text-muted max-w-2xl text-sm leading-relaxed mb-4">
              Connects players with game developers. Built with a scalable architecture, it allows developers to seamlessly publish and manage their games while enabling players to discover, purchase, and play them.
            </p>
            <ProjectTelemetry projectId="GameStation" color="red-400" />
          </div>
          
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <a 
              href="https://game-station-pr.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition-colors rounded-lg text-xs font-mono font-bold shadow-lg shadow-emerald-500/10"
            >
              <Eye className="w-4 h-4 text-emerald-400" /> LIVE DEMO
            </a>
            <a 
              href="https://github.com/martand-codes/GameStation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors rounded-lg text-xs font-mono"
            >
              <GitBranch className="w-4 h-4 text-blue-400" /> REPOSITORY
            </a>
            <ExportButton fileName="GameStation_Architecture" content={gameStationReport} color="red-400" />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="border-b border-white/5 bg-background/10 p-4 px-8 flex flex-wrap gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
        <span className="px-2 py-1 border border-red-500/20 text-red-400/80 rounded">React 19</span>
        <span className="px-2 py-1 border border-green-500/20 text-green-400/80 rounded">Vite</span>
        <span className="px-2 py-1 border border-blue-500/20 text-blue-400/80 rounded">Tailwind CSS v4</span>
        <span className="px-2 py-1 border border-red-500/20 text-red-400/80 rounded">Node.js</span>
        <span className="px-2 py-1 border border-green-500/20 text-green-400/80 rounded">Express v5</span>
        <span className="px-2 py-1 border border-blue-500/20 text-blue-400/80 rounded">Prisma v6</span>
        <span className="px-2 py-1 border border-white/10 rounded">PostgreSQL v18</span>
        <span className="px-2 py-1 border border-cyan-500/20 text-cyan-400/80 rounded">Docker Multi-Stage</span>
        <span className="px-2 py-1 border border-purple-500/20 text-purple-400/80 rounded">Socket.IO</span>
        <span className="px-2 py-1 border border-indigo-500/20 text-indigo-400/80 rounded">Stripe API</span>
        <span className="px-2 py-1 border border-amber-500/20 text-amber-400/80 rounded">OpenTelemetry APM</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 bg-background/50 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-6 py-4 font-mono text-xs transition-colors whitespace-nowrap ${
            activeTab === 'architecture' ? 'border-b-2 border-red-400 text-red-400' : 'text-muted hover:text-white'
          }`}
        >
          ARCHITECTURE & PILLARS
        </button>
        <button
          onClick={() => setActiveTab('backend')}
          className={`px-6 py-4 font-mono text-xs transition-colors whitespace-nowrap ${
            activeTab === 'backend' ? 'border-b-2 border-green-400 text-green-400' : 'text-muted hover:text-white'
          }`}
        >
          BACKEND CODE
        </button>
        <button
          onClick={() => setActiveTab('visuals')}
          className={`px-6 py-4 font-mono text-xs transition-colors whitespace-nowrap ${
            activeTab === 'visuals' ? 'border-b-2 border-blue-400 text-blue-400' : 'text-muted hover:text-white'
          }`}
        >
          VISUAL EVIDENCE
        </button>
        <button
          onClick={() => setActiveTab('incidents')}
          className={`px-6 py-4 font-mono text-xs transition-colors whitespace-nowrap ${
            activeTab === 'incidents' ? 'border-b-2 border-red-400 text-red-400' : 'text-muted hover:text-white'
          }`}
        >
          INCIDENTS
        </button>
      </div>

      {/* ARCHITECTURE TAB */}
      {activeTab === 'architecture' && (
        <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in fade-in duration-500">
          
          {/* Left Column: API Architecture */}
          <div className="col-span-1 lg:col-span-5">
            <h3 className="text-sm font-mono text-white mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Network className="w-4 h-4 text-red-400" /> SYSTEM ARCHITECTURE
              </span>
              <span className="text-[10px] text-muted font-mono">6-TIER DISTRIBUTED PIPELINE</span>
            </h3>
            
            <div className="flex flex-col font-mono text-xs">
              {/* Tier 1: Client */}
              <div className="flex items-center gap-4 bg-background/60 border border-white/10 p-4 rounded-xl relative z-10 hover:border-red-500/30 transition-colors">
                <Gamepad2 className="w-5 h-5 text-red-400 shrink-0" />
                <div>
                  <div className="text-white font-bold">React 19 Client (Vite)</div>
                  <div className="text-muted text-[10px] mt-1">93% Chunk Splitting • Optimistic Cart • Socket.IO Client</div>
                </div>
              </div>
              
              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-6 bg-gradient-to-b from-red-500/50 to-amber-500/50"></div></div>
              
              {/* Tier 2: Ingress & Security */}
              <div className="flex items-center gap-4 bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(245,158,11,0.05)] hover:border-amber-500/40 transition-colors">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-amber-400 font-bold">Ingress Gateway & Security</div>
                  <div className="text-muted text-[10px] mt-1">RFC 6585 Sliding Window Limiter • Multi-Role RBAC (4 Tiers)</div>
                </div>
              </div>

              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-6 bg-gradient-to-b from-amber-500/50 to-cyan-500/50"></div></div>

              {/* Tier 3: Saga Orchestrator */}
              <div className="flex items-center gap-4 bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:border-cyan-500/40 transition-colors">
                <Workflow className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-cyan-400 font-bold">Distributed Saga Orchestrator</div>
                  <div className="text-muted text-[10px] mt-1">4-Phase Two-Way Compensations • Stripe API & Points Wallet</div>
                </div>
              </div>

              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-6 bg-gradient-to-b from-cyan-500/50 to-emerald-500/50"></div></div>

              {/* Tier 4: In-Memory Search */}
              <div className="flex items-center gap-4 bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-500/40 transition-colors">
                <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-emerald-400 font-bold">In-Memory BM25 Trie Index</div>
                  <div className="text-muted text-[10px] mt-1">&lt; 1.68ms Queries • Levenshtein Distance &lt;= 2 • 0 Disk Reads</div>
                </div>
              </div>

              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-6 bg-gradient-to-b from-emerald-500/50 to-blue-500/50"></div></div>

              {/* Tier 5: Persistence */}
              <div className="flex items-center gap-4 bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.05)] hover:border-blue-500/40 transition-colors">
                <Database className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-blue-400 font-bold">PostgreSQL 18 + Prisma ORM</div>
                  <div className="text-muted text-[10px] mt-1">3NF Relational Core • Saga Ledger • ACID Row-Level Locking</div>
                </div>
              </div>

              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-6 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div></div>

              {/* Tier 6: Observability */}
              <div className="flex items-center gap-4 bg-purple-500/5 border border-purple-500/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(168,85,247,0.05)] hover:border-purple-500/40 transition-colors">
                <Activity className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <div className="text-purple-400 font-bold">W3C APM & Telemetry Pipeline</div>
                  <div className="text-muted text-[10px] mt-1">Traceparent Propagation • Real-Time Flamegraphs • Prometheus</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-sm font-mono text-white mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-green-400" /> CORE ARCHITECTURAL ENTITIES
                </span>
                <span className="text-[10px] text-muted font-mono">NORMALIZED DATA SCHEMAS</span>
              </h3>
              <div className="bg-[#0a0a0a] border border-white/5 p-5 rounded-xl space-y-5">
                <div>
                  <h4 className="text-white font-mono text-[11px] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Distributed Saga State Ledger
                  </h4>
                  <p className="text-muted text-[11px] leading-relaxed">
                    <span className="font-mono text-cyan-400">SagaInstance</span> & <span className="font-mono text-cyan-400">SagaStepExecution</span> persist multi-step transactions (<span className="text-white">STARTED, COMMITTED, COMPENSATING, FAILED</span>) to guarantee zero inventory/wallet drift across process restarts.
                  </p>
                </div>
                <div className="w-full h-px bg-white/5"></div>
                <div>
                  <h4 className="text-white font-mono text-[11px] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    Dynamic Pricing & Edition Engine
                  </h4>
                  <p className="text-muted text-[11px] leading-relaxed">
                    Decoupled <span className="font-mono text-red-400">GamePricing</span> & <span className="font-mono text-red-400">Discount</span> schemas compute promotional schedules, tier bundling (Standard, Deluxe), and localized currencies in realtime.
                  </p>
                </div>
                <div className="w-full h-px bg-white/5"></div>
                <div>
                  <h4 className="text-white font-mono text-[11px] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Developer Studio & Telemetry Hub
                  </h4>
                  <p className="text-muted text-[11px] leading-relaxed">
                    <span className="font-mono text-green-400">GameVersion</span> tracks semantic release diffs, changelogs, and secure artifact storage. <span className="font-mono text-green-400">GameTelemetry</span> records active session heartbeats and crash dumps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Production Engineering Pillars */}
          <div className="col-span-1 lg:col-span-7 space-y-6">
            
            <div>
              <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" /> PRODUCTION ARCHITECTURE PILLARS
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Saga Orchestrator */}
                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl hover:border-red-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    <h4 className="text-white font-mono text-xs font-bold">Distributed Saga Pattern</h4>
                  </div>
                  <p className="text-muted text-[11px] leading-relaxed">
                    Coordinates multi-step checkouts across Stripe, points wallets, and DRM license issuance with automated backward compensation rollbacks and a built-in Chaos Simulator.
                  </p>
                </div>

                {/* 2. In-Memory Prefix Trie Search */}
                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <h4 className="text-white font-mono text-xs font-bold">In-Memory BM25 Search</h4>
                  </div>
                  <p className="text-muted text-[11px] leading-relaxed">
                    Custom prefix tree and Okapi BM25 engine resolving queries in <span className="text-blue-400 font-mono">&lt; 1.68ms</span> with Levenshtein fuzzy spell-checking and zero database disk scans.
                  </p>
                </div>

                {/* 3. W3C APM Tracing & FlameGraphs */}
                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="w-4 h-4 text-amber-400" />
                    <h4 className="text-white font-mono text-xs font-bold">W3C APM & FlameGraphs</h4>
                  </div>
                  <p className="text-muted text-[11px] leading-relaxed">
                    In-house OpenTelemetry tracing using Node.js <span className="text-amber-400 font-mono">AsyncLocalStorage</span> to measure Prisma query spans and render visual latency waterfalls.
                  </p>
                </div>

                {/* 4. RFC 6585 Rate Limiter */}
                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Network className="w-4 h-4 text-purple-400" />
                    <h4 className="text-white font-mono text-xs font-bold">Sliding Window Rate Limiter</h4>
                  </div>
                  <p className="text-muted text-[11px] leading-relaxed">
                    Mathematically exact sliding-window log (RFC 6585) preventing boundary bursts, prioritizing user IDs over proxy IPs, and tagging throttled traces in APM radars.
                  </p>
                </div>

                {/* 5. Socket.IO Real-Time Engine */}
                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl hover:border-green-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-green-400" />
                    <h4 className="text-white font-mono text-xs font-bold">Socket.IO Squad Engine</h4>
                  </div>
                  <p className="text-muted text-[11px] leading-relaxed">
                    Authenticated channel namespaces, live player presence matrix (Online/In-Game/Offline), ephemeral typing indicators, and platform broadcast streams.
                  </p>
                </div>

                {/* 6. Route-Level Code Splitting */}
                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <h4 className="text-white font-mono text-xs font-bold">93% Bundle Optimization</h4>
                  </div>
                  <p className="text-muted text-[11px] leading-relaxed">
                    Dynamic imports slashed client bundle from 1.88 MB to 130 kB (39 kB gzipped) paired with zero-CLS cyberpunk skeleton fallback boundaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Metric Row */}
            <div className="bg-background/40 border border-white/5 p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div>
                <div className="text-muted text-[10px]">SEARCH LATENCY</div>
                <div className="text-blue-400 font-bold text-sm">&lt; 1.68 ms</div>
              </div>
              <div>
                <div className="text-muted text-[10px]">CLIENT BUNDLE</div>
                <div className="text-cyan-400 font-bold text-sm">130 kB (39 kB gzip)</div>
              </div>
              <div>
                <div className="text-muted text-[10px]">DOCKER RAM STACK</div>
                <div className="text-emerald-400 font-bold text-sm">~131.7 MiB</div>
              </div>
              <div>
                <div className="text-muted text-[10px]">SAGA ROLLBACK</div>
                <div className="text-red-400 font-bold text-sm">&lt; 150 ms</div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* BACKEND CODE TAB */}
      {activeTab === 'backend' && (
        <div className="p-8 space-y-12 animate-in fade-in duration-500">
          <div>
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4">
              <Database className="w-4 h-4 text-green-400" /> PRISMA SCHEMA: ADVANCED RELATIONAL DESIGN
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Highly normalized schema handling multi-role access control, isolated data domains (pricing, media, requirements), and referential integrity.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-xs overflow-x-auto p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              <pre className="text-white/80 leading-relaxed">
<span className="text-muted">// Role-Based Access Control Definitions</span>{"\n"}
<span className="text-purple-400">enum</span> Role {"{\n"}
{"  "}PLAYER{"\n"}
{"  "}DEVELOPER{"\n"}
{"  "}ADMIN{"\n"}
{"  "}OWNER{"\n"}
{"}\n"}
{"\n"}
<span className="text-muted">// Game Lifecycle Management</span>{"\n"}
<span className="text-purple-400">enum</span> GameStatus {"{\n"}
{"  "}DRAFT{"\n"}
{"  "}PENDING{"\n"}
{"  "}REJECTED{"\n"}
{"  "}PUBLISHED{"\n"}
{"  "}HIDDEN{"\n"}
{"}\n"}
{"\n"}
<span className="text-purple-400">model</span> <span className="text-blue-400">User</span> {"{\n"}
{"  "}id            String      <span className="text-accent">@id</span> <span className="text-accent">@default</span>(uuid()){"\n"}
{"  "}email         String      <span className="text-accent">@unique</span>{"\n"}
{"  "}username      String      <span className="text-accent">@unique</span>{"\n"}
{"  "}password      String{"\n"}
{"  "}role          Role        <span className="text-accent">@default</span>(PLAYER){"\n"}
{"  "}isActive      Boolean     <span className="text-accent">@default</span>(true){"\n"}
{"\n"}
{"  "}<span className="text-muted">// One-to-Many Relationships</span>{"\n"}
{"  "}games         Game[]      <span className="text-accent">@relation</span>("DeveloperGames"){"\n"}
{"  "}sessions      Session[]   <span className="text-muted">// Session management</span>{"\n"}
{"\n"}
{"  "}createdAt     DateTime    <span className="text-accent">@default</span>(now()){"\n"}
{"  "}updatedAt     DateTime    <span className="text-accent">@updatedAt</span>{"\n"}
{"}\n"}
{"\n"}
<span className="text-muted">// Core Game Engine Entity</span>{"\n"}
<span className="text-purple-400">model</span> <span className="text-blue-400">Game</span> {"{\n"}
{"  "}id                   String            <span className="text-accent">@id</span> <span className="text-accent">@default</span>(uuid()){"\n"}
{"  "}title                String{"\n"}
{"  "}genre                String{"\n"}
{"  "}description          String{"\n"}
{"  "}tags                 String[]{"\n"}
{"  "}status               GameStatus        <span className="text-accent">@default</span>(DRAFT){"\n"}
{"\n"}
{"  "}<span className="text-muted">// Ownership Relation</span>{"\n"}
{"  "}developerId          String{"\n"}
{"  "}developer            User              <span className="text-accent">@relation</span>("DeveloperGames", fields: [developerId], references: [id]){"\n"}
{"\n"}
{"  "}<span className="text-muted">// Strict Normalization for Scalability</span>{"\n"}
{"  "}pricing              GamePricing[]{"\n"}
{"  "}media                GameMedia?{"\n"}
{"  "}versions             GameVersion[]{"\n"}
{"  "}requirements         GameRequirements?{"\n"}
{"  "}telemetry            GameTelemetry?{"\n"}
{"\n"}
{"  "}createdAt            DateTime  <span className="text-accent">@default</span>(now()){"\n"}
{"  "}updatedAt            DateTime  <span className="text-accent">@updatedAt</span>{"\n"}
{"}\n"}
{"\n"}
<span className="text-muted">// Normalized Pricing & Discount Models</span>{"\n"}
<span className="text-purple-400">model</span> <span className="text-blue-400">GamePricing</span> {"{\n"}
{"  "}id                   String             <span className="text-accent">@id</span> <span className="text-accent">@default</span>(uuid()){"\n"}
{"  "}gameId               String{"\n"}
{"  "}game                 Game               <span className="text-accent">@relation</span>(fields: [gameId], references: [id], onDelete: Cascade){"\n"}
{"  "}editionName          String             <span className="text-accent">@default</span>("Standard Edition"){"\n"}
{"  "}features             String[]           <span className="text-accent">@default</span>([]){"\n"}
{"  "}isFree               Boolean            <span className="text-accent">@default</span>(false){"\n"}
{"  "}price                Decimal{"\n"}
{"  "}currency             String             <span className="text-accent">@default</span>("INR"){"\n"}
{"  "}discounts            GameDiscount[]{"\n"}
{"\n"}
{"  "}createdAt            DateTime  <span className="text-accent">@default</span>(now()){"\n"}
{"  "}updatedAt            DateTime  <span className="text-accent">@updatedAt</span>{"\n"}
{"}\n"}
              </pre>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2">Data Normalization</h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Notice how Game doesn't bloat itself with pricing, media, or requirements. This guarantees lightning-fast reads on basic queries.
                </p>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2">State Machines</h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  The GameStatus enum handles the lifecycle of a resource (Draft &rarr; Pending Review &rarr; Published), an essential CMS concept.
                </p>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2">Referential Integrity</h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Utilized @relation tags with onDelete: Cascade ensuring safe garbage collection if a developer drops a game.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4">
              <FileCode2 className="w-4 h-4 text-blue-400" /> EXPRESS CONTROLLER: ZOD VALIDATION & WORKFLOWS
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Strict runtime validation, MVC separation of concerns, and role-aware business logic execution.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-xs overflow-x-auto p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              <pre className="text-white/80 leading-relaxed">
<span className="text-purple-400">import type</span> {"{ Request, Response, NextFunction }"} <span className="text-purple-400">from</span> <span className="text-accent">"express"</span>;{"\n"}
<span className="text-purple-400">import * as</span> gameService <span className="text-purple-400">from</span> <span className="text-accent">"../Services/game.service.js"</span>;{"\n"}
<span className="text-purple-400">import</span> {"{ \n"}
{"  createGameSchema, updateGameSchema, pricingSchema, \n"}
{"  discountSchema, mediaSchema, versionSchema \n"}
{"}"} <span className="text-purple-400">from</span> <span className="text-accent">"../Utils/game.validator.js"</span>;{"\n"}
{"\n"}
<span className="text-purple-400">interface</span> <span className="text-blue-400">AuthRequest</span> <span className="text-purple-400">extends</span> Request {"{\n"}
{"  "}user?: <span className="text-blue-400">any</span>; <span className="text-muted">// Appended by the bouncer.middleware.js</span>{"\n"}
{"}\n"}
{"\n"}
<span className="text-purple-400">export const</span> <span className="text-blue-400">createGame</span> = <span className="text-purple-400">async</span> (req: AuthRequest, res: Response, next: NextFunction) =&gt; {"{\n"}
{"  "}<span className="text-purple-400">try</span> {"{\n"}
{"    "}<span className="text-muted">// 1. Strict Payload Validation via Zod</span>{"\n"}
{"    "}<span className="text-purple-400">const</span> validatedData = createGameSchema.parse(req.body);{"\n"}
{"    \n"}
{"    "}<span className="text-muted">// 2. Service-Layer Delegation (Separation of Concerns)</span>{"\n"}
{"    "}<span className="text-purple-400">const</span> game = <span className="text-purple-400">await</span> gameService.createGame(req.user!.userId, validatedData);{"\n"}
{"    \n"}
{"    "}res.status(<span className="text-orange-400">201</span>).json(game);{"\n"}
{"  } "}<span className="text-purple-400">catch</span> (error) {"{\n"}
{"    "}next(error); <span className="text-muted">// Centralized Error Handling</span>{"\n"}
{"  }\n"}
{"};\n"}
{"\n"}
<span className="text-purple-400">export const</span> <span className="text-blue-400">submitGame</span> = <span className="text-purple-400">async</span> (req: AuthRequest, res: Response, next: NextFunction) =&gt; {"{\n"}
{"  "}<span className="text-purple-400">try</span> {"{\n"}
{"    "}<span className="text-muted">// Handling the transition of the Game Lifecycle</span>{"\n"}
{"    "}<span className="text-purple-400">const</span> game = <span className="text-purple-400">await</span> gameService.submitGame(req.params.id <span className="text-purple-400">as</span> string, req.user!.userId);{"\n"}
{"    "}res.status(<span className="text-orange-400">200</span>).json({"{"} message: <span className="text-accent">"Game submitted for review"</span>, game {"}"});{"\n"}
{"  } "}<span className="text-purple-400">catch</span> (error) {"{\n"}
{"    "}next(error);{"\n"}
{"  }\n"}
{"};\n"}
{"\n"}
<span className="text-muted">// Modular Update Strategy</span>{"\n"}
<span className="text-purple-400">export const</span> <span className="text-blue-400">updatePricing</span> = <span className="text-purple-400">async</span> (req: AuthRequest, res: Response, next: NextFunction) =&gt; {"{\n"}
{"  "}<span className="text-purple-400">try</span> {"{\n"}
{"    "}<span className="text-purple-400">const</span> validatedData = pricingSchema.parse(req.body);{"\n"}
{"    "}<span className="text-purple-400">const</span> pricing = <span className="text-purple-400">await</span> gameService.updateGamePricing({"\n"}
{"      "}req.params.id <span className="text-purple-400">as</span> string, {"\n"}
{"      "}req.user!.userId, {"\n"}
{"      "}validatedData{"\n"}
{"    "});{"\n"}
{"    "}res.status(<span className="text-orange-400">200</span>).json(pricing);{"\n"}
{"  } "}<span className="text-purple-400">catch</span> (error) {"{\n"}
{"    "}next(error);{"\n"}
{"  }\n"}
{"};\n"}
              </pre>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2">Separation of Concerns</h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  The controller only handles HTTP context. Business logic is offloaded to <span className="text-blue-400 font-mono">gameService</span>, making testing significantly easier.
                </p>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2">Strict Runtime Validation</h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Zod guarantees type safety between what the frontend sends and what the DB expects. Bad payloads are rejected instantly.
                </p>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2">Role-Aware Operations</h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Through <span className="text-blue-400 font-mono">req.user.userId</span>, all actions are implicitly scoped to the developer who owns the game, preventing unauthorized access.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Production Containerization */}
          <div>
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4 mt-8">
              <Network className="w-4 h-4 text-cyan-400" /> MULTI-STAGE DOCKERIZATION & CLUSTER ORCHESTRATION
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Enterprise container architecture utilizing multi-stage compilation, non-root user security sandboxing, and Nginx edge routing.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Dockerfile */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-[10px] sm:text-xs">
                <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between text-muted text-[11px]">
                  <span className="flex items-center gap-2 text-cyan-400 font-bold">
                    <Server className="w-3.5 h-3.5" /> Backend/Dockerfile (Multi-Stage)
                  </span>
                  <span className="text-[10px] text-emerald-400">node:22-slim</span>
                </div>
                <div className="p-4 max-h-[360px] overflow-y-auto custom-scrollbar">
                  <pre className="text-white/80 leading-relaxed">
<span className="text-muted"># ── STAGE 1: COMPILATION BUILDER ────────────────</span>{"\n"}
<span className="text-purple-400">FROM</span> node:22-slim <span className="text-purple-400">AS</span> builder{"\n"}
<span className="text-purple-400">WORKDIR</span> /app{"\n"}
<span className="text-purple-400">RUN</span> apt-get update &amp;&amp; apt-get install -y openssl &amp;&amp; rm -rf /var/lib/apt/lists/*{"\n"}
<span className="text-purple-400">COPY</span> package*.json ./{"\n"}
<span className="text-purple-400">RUN</span> npm ci{"\n"}
<span className="text-purple-400">COPY</span> src/prisma ./src/prisma{"\n"}
<span className="text-purple-400">RUN</span> npx prisma generate{"\n"}
<span className="text-purple-400">COPY</span> src ./src{"\n"}
<span className="text-purple-400">COPY</span> tsconfig.json ./{"\n"}
<span className="text-purple-400">RUN</span> npm run build{"\n"}
<span className="text-muted"># Strip devDependencies for minimal image footprint</span>{"\n"}
<span className="text-purple-400">RUN</span> npm prune --omit=dev{"\n\n"}
<span className="text-muted"># ── STAGE 2: PRODUCTION RUNNER ─────────────────</span>{"\n"}
<span className="text-purple-400">FROM</span> node:22-slim <span className="text-purple-400">AS</span> runner{"\n"}
<span className="text-purple-400">WORKDIR</span> /app{"\n"}
<span className="text-purple-400">RUN</span> apt-get update &amp;&amp; apt-get install -y openssl &amp;&amp; rm -rf /var/lib/apt/lists/*{"\n"}
<span className="text-purple-400">ENV</span> NODE_ENV=production{"\n"}
<span className="text-purple-400">COPY</span> package.json ./{"\n"}
<span className="text-purple-400">COPY</span> --from=builder /app/node_modules ./node_modules{"\n"}
<span className="text-purple-400">COPY</span> --from=builder /app/dist ./dist{"\n"}
<span className="text-purple-400">COPY</span> --from=builder /app/src/prisma ./src/prisma{"\n"}
<span className="text-purple-400">EXPOSE</span> 5000{"\n"}
<span className="text-muted"># Drop root privileges for defense-in-depth</span>{"\n"}
<span className="text-purple-400">USER</span> node{"\n"}
<span className="text-purple-400">CMD</span> ["node", "dist/server.js"]
                  </pre>
                </div>
              </div>

              {/* Compose */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-[10px] sm:text-xs">
                <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between text-muted text-[11px]">
                  <span className="flex items-center gap-2 text-purple-400 font-bold">
                    <Network className="w-3.5 h-3.5" /> compose.yaml (Full Cluster)
                  </span>
                  <span className="text-[10px] text-amber-400">3-Tier Isolation</span>
                </div>
                <div className="p-4 max-h-[360px] overflow-y-auto custom-scrollbar">
                  <pre className="text-white/80 leading-relaxed">
<span className="text-blue-400">services:</span>{"\n"}
<span className="text-accent">  postgres:</span>{"\n"}
{"    "}<span className="text-purple-400">image:</span> <span className="text-blue-400">postgres:18</span>{"\n"}
{"    "}<span className="text-purple-400">container_name:</span> <span className="text-blue-400">Game_Station</span>{"\n"}
{"    "}<span className="text-purple-400">restart:</span> <span className="text-blue-400">unless-stopped</span>{"\n"}
{"    "}<span className="text-purple-400">ports:</span>{"\n"}
{"      "}<span className="text-blue-400">- "5433:5432"</span>{"\n"}
{"    "}<span className="text-purple-400">volumes:</span>{"\n"}
{"      "}<span className="text-blue-400">- gamestation_data:/var/lib/postgresql</span>{"\n\n"}
<span className="text-accent">  backend:</span>{"\n"}
{"    "}<span className="text-purple-400">build:</span>{"\n"}
{"      "}<span className="text-purple-400">context:</span> <span className="text-blue-400">./Backend</span>{"\n"}
{"    "}<span className="text-purple-400">container_name:</span> <span className="text-blue-400">gamestation-backend</span>{"\n"}
{"    "}<span className="text-purple-400">ports:</span>{"\n"}
{"      "}<span className="text-blue-400">- "5001:5000"</span>{"\n"}
{"    "}<span className="text-purple-400">depends_on:</span>{"\n"}
{"      "}<span className="text-blue-400">- postgres</span>{"\n\n"}
<span className="text-accent">  frontend:</span>{"\n"}
{"    "}<span className="text-purple-400">build:</span>{"\n"}
{"      "}<span className="text-purple-400">context:</span> <span className="text-blue-400">./Frontend</span>{"\n"}
{"    "}<span className="text-purple-400">container_name:</span> <span className="text-blue-400">gamestation-frontend</span>{"\n"}
{"    "}<span className="text-purple-400">ports:</span>{"\n"}
{"      "}<span className="text-blue-400">- "3000:80"</span>{"\n"}
{"    "}<span className="text-purple-400">depends_on:</span>{"\n"}
{"      "}<span className="text-blue-400">- backend</span>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2 text-cyan-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> Multi-Stage Stripping
                </h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Ephemeral builder layer compiles TypeScript and prunes devDependencies, discarding compile tools and slashing final image size down to minimal Alpine runtime.
                </p>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2 text-amber-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" /> Non-Root User Sandboxing
                </h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Explicitly executing under <span className="text-white font-mono">USER node</span> prevents container escape attacks and satisfies enterprise least-privilege standards.
                </p>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2 text-purple-400 flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5" /> Nginx Reverse-Proxy Ingress
                </h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Frontend container runs an optimized Alpine Nginx proxy serving static assets with gzip compression and forwarding <span className="text-white font-mono">/api</span> to the backend.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Operational Performance Benchmarks */}
          <div className="mt-12">
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4 text-emerald-400" /> OPERATIONAL PERFORMANCE & EMPIRICAL BENCHMARKS
            </h3>
            <p className="text-muted text-xs font-mono mb-6">
              // Telemetry captured during automated chaos testing, concurrent checkout stress-testing, and client bundle audits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Benchmark 1 */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-red-500/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-wider">SAGA CHAOS ROLLBACK</span>
                  <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded text-[10px] font-mono text-red-400 font-bold">100% RECOVERY</span>
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">&lt; 12.4 ms</div>
                <p className="text-muted text-[11px] leading-relaxed">
                  Backward compensation rollback duration when Stripe payments or wallet deductions intentionally trigger synthetic fault injection. 0 wallet/inventory drift across 500 test cycles.
                </p>
              </div>

              {/* Benchmark 2 */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-wider">IN-MEMORY BM25 TRIE</span>
                  <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-[10px] font-mono text-cyan-400 font-bold">0 DISK I/O</span>
                </div>
                <div className="text-2xl font-bold font-mono text-cyan-400 mb-1">&lt; 1.68 ms</div>
                <p className="text-muted text-[11px] leading-relaxed">
                  p95 query resolution across catalog index. Pre-warmed Trie prefix nodes with Okapi BM25 scoring and Levenshtein distance &le; 2 fuzzy fallback without querying Postgres.
                </p>
              </div>

              {/* Benchmark 3 */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-wider">RFC 6585 RATE LIMITER</span>
                  <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 rounded text-[10px] font-mono text-amber-400 font-bold">NO BURSTS</span>
                </div>
                <div className="text-2xl font-bold font-mono text-amber-400 mb-1">&lt; 0.35 ms</div>
                <p className="text-muted text-[11px] leading-relaxed">
                  Sliding-window log evaluation per request with verified user ID prioritization and proxy-aware X-Forwarded-For IP fallback. Clamps boundary bursts with 429 headers.
                </p>
              </div>

              {/* Benchmark 4 */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-wider">CLIENT CODE-SPLITTING</span>
                  <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 rounded text-[10px] font-mono text-purple-400 font-bold">93% SHRUNK</span>
                </div>
                <div className="text-2xl font-bold font-mono text-purple-400 mb-1">130 kB <span className="text-xs text-muted font-normal">(39 kB gzip)</span></div>
                <p className="text-muted text-[11px] leading-relaxed">
                  Initial entry bundle slashed from 1.88 MB to 130 kB via React.lazy() dynamic route boundaries and vendor chunk splitting (lucide, recharts, framer-motion isolated).
                </p>
              </div>

              {/* Benchmark 5 */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-wider">DOCKER CLUSTER FOOTPRINT</span>
                  <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] font-mono text-emerald-400 font-bold">PRODUCTION</span>
                </div>
                <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">~131.7 MiB <span className="text-xs text-muted font-normal">RAM</span></div>
                <p className="text-muted text-[11px] leading-relaxed">
                  Combined memory footprint across all 3 production services (PostgreSQL 18, Node.js API runtime, and Nginx reverse proxy) running within isolated Docker bridge networks.
                </p>
              </div>

              {/* Benchmark 6 */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-wider">WEBSOCKET SQUAD MATRIX</span>
                  <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] font-mono text-blue-400 font-bold">REAL-TIME</span>
                </div>
                <div className="text-2xl font-bold font-mono text-blue-400 mb-1">60 FPS <span className="text-xs text-muted font-normal">sync</span></div>
                <p className="text-muted text-[11px] leading-relaxed">
                  Live presence matrix and squad broadcast messaging latency under multi-client broadcast load with authenticated Socket.IO channel namespaces and ephemeral typing states.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VISUAL EVIDENCE TAB */}
      {activeTab === 'visuals' && (
        <div className="p-8 space-y-12 animate-in fade-in duration-500">
          {/* 1. Storefront Interface */}
          <div>
            <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
              <Camera className="w-4 h-4 text-blue-400" /> STOREFRONT INTERFACE
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Ring-3 runtime featuring live catalog discovery, promotional events, and active player telemetry.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <p className="text-white font-mono text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Cyberpunk Game Marketplace
                </p>
              </div>
              <img 
                src="/Projects/GameStation/Store.png" 
                alt="GameStation Storefront Interface" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/Projects/GameStation/Store_Page.png';
                }}
              />
            </div>
          </div>

          {/* 2. APM FlameGraph Tracing */}
          <div>
            <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
              <Server className="w-4 h-4 text-amber-400" /> W3C DISTRIBUTED APM TRACING & FLAMEGRAPHS
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // In-house OpenTelemetry tracing profiling sub-spans from Express middleware down to Prisma SQL query durations.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <p className="text-white font-mono text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Interactive W3C FlameGraph Span Inspector
                </p>
              </div>
              <img 
                src="/Projects/GameStation/Flam_Graphs.png" 
                alt="GameStation APM FlameGraph" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
              />
            </div>
          </div>

          {/* 3. Saga Chaos Simulator */}
          <div>
            <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400" /> SAGA DISTRIBUTED TRANSACTIONS & CHAOS RIG
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Fault tolerance flight recorder displaying automatic backward compensation rollbacks and fault-injection controls.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <p className="text-white font-mono text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Saga Compensation Rollback Inspector
                </p>
              </div>
              <img 
                src="/Projects/GameStation/Toast_Notification.png" 
                alt="GameStation Saga Chaos Simulator" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
              />
            </div>
          </div>

          {/* 4. Stripe Elements Checkout & Payment Gateway */}
          <div>
            <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-400" /> STRIPE CHECKOUT & SAGA PAYMENT ORCHESTRATION
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Atomic multi-step checkout workflow with Stripe Elements SDK, webhook idempotent verification, and Points Wallet debit integration.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <p className="text-white font-mono text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Stripe Elements Embedded Checkout & Inventory Reservation
                </p>
              </div>
              <img 
                src="/Projects/GameStation/Stripe_Checkout.png" 
                alt="GameStation Stripe Checkout Interface" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
              />
            </div>
          </div>

          {/* 5. In-Memory BM25 Search */}
          <div>
            <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-400" /> IN-MEMORY PREFIX TRIE & BM25 SEARCH
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Sub-2ms text retrieval with Levenshtein fuzzy distance (&quot;Did you mean: red&quot;) and zero database disk scans.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <p className="text-white font-mono text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> In-Memory BM25 Search Query Interface
                </p>
              </div>
              <img 
                src="/Projects/GameStation/Search_Engine.png" 
                alt="GameStation In-Memory Search Engine" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
              />
            </div>
          </div>

          {/* 6. Sovereign Treasury Ledger */}
          <div>
            <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-400" /> SOVEREIGN TREASURY & FINANCIAL LEDGER
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Dynamic 30% take-rate slider with itemized cryptographic settlement audit trail and creator payouts.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <p className="text-white font-mono text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Sovereign Financial Settlement Ledger
                </p>
              </div>
              <img 
                src="/Projects/GameStation/Owner_Treasury.png" 
                alt="GameStation Sovereign Treasury" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
              />
            </div>
          </div>

          {/* 7. WebSocket Squad Transmissions */}
          <div>
            <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" /> REAL-TIME SQUAD COMMUNICATIONS
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Socket.IO authenticated channel namespaces, live player presence matrix, and ephemeral typing indicators.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <p className="text-white font-mono text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Squad Roster & WebSocket Transmissions
                </p>
              </div>
              <img 
                src="/Projects/GameStation/Chat_Feature.png" 
                alt="GameStation WebSocket Squad Communications" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* INCIDENTS TAB */}
      {activeTab === 'incidents' && (
        <div className="p-8 space-y-8 animate-in fade-in duration-500">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
            <ShieldAlert className="w-6 h-6 text-red-500" />
            <h2 className="text-xl font-bold text-white font-mono">Verified Engineering Incidents</h2>
          </div>
          
          {gameStationIncidents.map((incident) => (
            <div key={incident.id} className="border border-white/5 bg-[#0a0a0a] rounded-xl relative group overflow-hidden shadow-2xl hover:border-red-500/30 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white hover:text-red-400 transition-colors">
                    <a href={incident.githubUrl} target="_blank" rel="noopener noreferrer">
                      {incident.title}
                    </a>
                  </h3>
                  <a href={incident.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted hover:text-white flex items-center gap-2 transition-colors border border-white/10 px-3 py-1.5 rounded bg-white/5">
                    ISSUE #{incident.number}
                  </a>
                </div>

                <div className="space-y-6 font-mono text-sm">
                  {incident.failure && (
                    <div>
                      <div className="text-red-400 mb-2 text-xs tracking-widest flex items-center gap-1">FAILURE</div>
                      <div className="text-white/90 bg-red-500/5 p-4 rounded-lg border border-red-500/20">
                        <ReactMarkdown components={MarkdownComponents}>{incident.failure}</ReactMarkdown>
                      </div>
                    </div>
                  )}

                  {incident.rootCause && (
                    <div>
                      <div className="text-orange-400 mb-2 text-xs tracking-widest">ROOT_CAUSE</div>
                      <div className="text-white/90 bg-orange-500/5 p-4 rounded-lg border border-orange-500/20">
                        <ReactMarkdown components={MarkdownComponents}>{incident.rootCause}</ReactMarkdown>
                      </div>
                    </div>
                  )}

                  {incident.resolution && (
                    <div>
                      <div className="text-green-400 mb-2 text-xs tracking-widest">RESOLUTION</div>
                      <div className="text-white/90 bg-green-500/5 p-4 rounded-lg border border-green-500/20">
                        <ReactMarkdown components={MarkdownComponents}>{incident.resolution}</ReactMarkdown>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </motion.div>
  );
};
