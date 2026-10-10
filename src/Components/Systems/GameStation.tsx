import { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeUp } from '../../Utils/animations';
import { 
  Code2, GitBranch, Cpu, Database, 
  Network, ShieldAlert, Server, Sparkles, Gamepad2, ShoppingCart, Users, CreditCard,
  FileCode2, Camera, Eye
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
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-3xl font-bold text-white tracking-tight">GameStation</h2>
              <div className="px-3 py-1 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 border border-white/10 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-mono bg-gradient-to-r from-red-400 via-green-400 to-blue-400 bg-clip-text text-transparent font-bold tracking-widest">IN DEVELOPMENT</span>
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
        <span className="px-2 py-1 border border-cyan-500/20 text-cyan-400/80 rounded">Docker</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 bg-background/50 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-6 py-4 font-mono text-xs transition-colors whitespace-nowrap ${
            activeTab === 'architecture' ? 'border-b-2 border-red-400 text-red-400' : 'text-muted hover:text-white'
          }`}
        >
          ARCHITECTURE & ROADMAP
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
            <h3 className="text-sm font-mono text-white mb-6 flex items-center gap-2">
              <Network className="w-4 h-4 text-red-400" /> SYSTEM ARCHITECTURE
            </h3>
            
            <div className="flex flex-col font-mono text-xs">
              <div className="flex items-center gap-4 bg-background/50 border border-white/10 p-4 rounded-xl relative z-10">
                <Gamepad2 className="w-5 h-5 text-red-400 shrink-0" />
                <div>
                  <div className="text-white">React + Vite Client</div>
                  <div className="text-muted text-[10px] mt-1">Shopping Cart & Wishlist State</div>
                </div>
              </div>
              
              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-gradient-to-b from-red-500/50 to-green-500/50"></div></div>
              
              <div className="flex items-center gap-4 bg-green-500/5 border border-green-500/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(34,197,94,0.05)]">
                <ShieldAlert className="w-5 h-5 text-green-400 shrink-0" />
                <div>
                  <div className="text-green-400 font-bold">Multi-Role Auth (JWT)</div>
                  <div className="text-muted text-[10px] mt-1">PLAYER, DEVELOPER, ADMIN, OWNER</div>
                </div>
              </div>

              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-gradient-to-b from-green-500/50 to-blue-500/50"></div></div>

              <div className="flex items-center gap-4 bg-background/50 border border-white/10 p-4 rounded-xl relative z-10">
                <Cpu className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-white">Express API (Node.js)</div>
                  <div className="text-muted text-[10px] mt-1">Zod Validation & Business Logic</div>
                </div>
              </div>

              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-blue-500/50"></div></div>

              <div className="flex items-center gap-4 bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
                <Database className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-blue-400 font-bold">PostgreSQL + Prisma</div>
                  <div className="text-muted text-[10px] mt-1">Highly Normalized Relational Data</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
                <Database className="w-4 h-4 text-green-400" /> HIGHLY NORMALIZED ENTITIES
              </h3>
              <div className="bg-[#0a0a0a] border border-white/5 p-5 rounded-xl space-y-5">
                <div>
                  <h4 className="text-white font-mono text-[11px] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    Dynamic Pricing Engine
                  </h4>
                  <p className="text-muted text-[11px] leading-relaxed">
                    Decoupled <span className="font-mono text-red-400">GamePricing</span> & <span className="font-mono text-red-400">Discount</span> schemas handle multiple game editions (Standard, Deluxe) and temporal promotional discounts seamlessly.
                  </p>
                </div>
                <div className="w-full h-px bg-white/5"></div>
                <div>
                  <h4 className="text-white font-mono text-[11px] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Developer Portal & Versioning
                  </h4>
                  <p className="text-muted text-[11px] leading-relaxed">
                    <span className="font-mono text-green-400">GameVersion</span> tracks updates, historical changelogs, and secure download URLs. <span className="font-mono text-green-400">GameTelemetry</span> records playtime stats natively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Flexes & Roadmap */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            
            {/* AI Features */}
            <div>
              <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" /> UPCOMING AI FEATURES
              </h3>
              
              <div className="space-y-4">
                <div className="bg-background/40 border border-white/5 p-4 rounded-xl flex gap-4 items-start">
                  <div className="p-2 bg-blue-500/10 rounded-lg shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-mono text-sm mb-1">Personalized Game Recommendations</h4>
                    <p className="text-muted text-xs leading-relaxed">
                      An AI recommendation engine that analyzes player telemetry (playtime, genres, library overlap) to suggest tailored games algorithmically.
                    </p>
                  </div>
                </div>

                <div className="bg-background/40 border border-white/5 p-4 rounded-xl flex gap-4 items-start">
                  <div className="p-2 bg-red-500/10 rounded-lg shrink-0 mt-1">
                    <Code2 className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-mono text-sm mb-1">Smart Search & NLP</h4>
                    <p className="text-muted text-xs leading-relaxed">
                      Natural language search allowing users to find games using conversational queries like: "Find me a multiplayer RPG with low PC requirements".
                    </p>
                  </div>
                </div>

                <div className="bg-background/40 border border-white/5 p-4 rounded-xl flex gap-4 items-start">
                  <div className="p-2 bg-green-500/10 rounded-lg shrink-0 mt-1">
                    <Server className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-mono text-sm mb-1">Dynamic Pricing Optimization</h4>
                    <p className="text-muted text-xs leading-relaxed">
                      Machine learning models that suggest optimal discount percentages and sale periods directly to developers on their portal to maximize revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Platform Features / Roadmap */}
            <div>
              <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-red-400" /> PLATFORM ROADMAP
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                  <CreditCard className="w-5 h-5 text-muted mb-3" />
                  <h4 className="text-white font-mono text-xs mb-1">Stripe Integration</h4>
                  <p className="text-muted text-[11px]">Secure payment processing for seamless cart checkout and billing.</p>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                  <Gamepad2 className="w-5 h-5 text-muted mb-3" />
                  <h4 className="text-white font-mono text-xs mb-1">Player Library Hub</h4>
                  <p className="text-muted text-[11px]">A centralized dashboard where players view and download purchased games.</p>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                  <ShoppingCart className="w-5 h-5 text-muted mb-3" />
                  <h4 className="text-white font-mono text-xs mb-1">Review & Rating System</h4>
                  <p className="text-muted text-[11px]">Allow players to leave critical feedback and rate games they have played.</p>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                  <Users className="w-5 h-5 text-muted mb-3" />
                  <h4 className="text-white font-mono text-xs mb-1">Social Features</h4>
                  <p className="text-muted text-[11px]">Friend lists, verified user profiles, and public gaming activity feeds.</p>
                </div>
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

          <div>
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4 mt-8">
              <Network className="w-4 h-4 text-cyan-400" /> DOCKERIZED DATABASE & INFRASTRUCTURE
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Local development environment uses a containerized PostgreSQL instance to guarantee parity between developer machines and production.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-[10px] sm:text-xs overflow-x-auto p-4">
              <pre className="text-white/80 leading-relaxed">
<span className="text-blue-400">services:</span>{"\n"}
<span className="text-accent">  db:</span>{"\n"}
{"    "}<span className="text-purple-400">image:</span> <span className="text-blue-400">postgres:16-alpine</span>{"\n"}
{"    "}<span className="text-purple-400">container_name:</span> <span className="text-blue-400">gamestation_db</span>{"\n"}
{"    "}<span className="text-purple-400">restart:</span> <span className="text-blue-400">unless-stopped</span>{"\n"}
{"    "}<span className="text-purple-400">ports:</span>{"\n"}
{"      "}<span className="text-blue-400">- "5432:5432"</span>{"\n"}
{"    "}<span className="text-purple-400">environment:</span>{"\n"}
{"      "}<span className="text-purple-400">POSTGRES_USER:</span> <span className="text-blue-400">admin</span>{"\n"}
{"      "}<span className="text-purple-400">POSTGRES_PASSWORD:</span> <span className="text-blue-400">secret</span>{"\n"}
{"      "}<span className="text-purple-400">POSTGRES_DB:</span> <span className="text-blue-400">gamestation</span>{"\n"}
{"    "}<span className="text-purple-400">volumes:</span>{"\n"}
{"      "}<span className="text-blue-400">- pg_data:/var/lib/postgresql/data</span>
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* VISUAL EVIDENCE TAB */}
      {activeTab === 'visuals' && (
        <div className="p-8 space-y-12 animate-in fade-in duration-500">
          <div>
            <h3 className="text-sm font-mono text-white mb-6 flex items-center gap-2">
              <Camera className="w-4 h-4 text-blue-400" /> STOREFRONT INTERFACE
            </h3>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <p className="text-white font-mono text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Game Marketplace View
                </p>
              </div>
              <img 
                src="/Projects/GameStation/Store_Page.png" 
                alt="GameStation Store Interface" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-white mb-6 flex items-center gap-2">
              <Camera className="w-4 h-4 text-purple-400" /> GAME DETAIL PAGE
            </h3>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <p className="text-white font-mono text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Comprehensive Game View with Requirements and Editions
                </p>
              </div>
              <img 
                src="/Projects/GameStation/Game_Page.png" 
                alt="GameStation Details Interface" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
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
