import { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeUp } from '../../Utils/animations';
import { 
  GitBranch, Cpu, Database, 
  Network, ShieldAlert, Server, Sparkles, Wallet, PieChart, TrendingUp,
  FileCode2, Camera, Eye, Download
} from 'lucide-react';
import { ProjectTelemetry } from './ProjectTelemetry';
import { ExportButton } from './ExportButton';
import { moneyTrackReport } from '../../data/reports';
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

export const MoneyTrack = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'backend' | 'visuals' | 'incidents'>('architecture');
  
  const moneyTrackIncidents = incidentsData.incidents.filter(i => i.projectName.toLowerCase() === 'moneytrack');

  return (
    <motion.div variants={fadeUp} className="bg-panel rounded-2xl border border-white/5 shadow-2xl overflow-hidden group">
      
      {/* Header */}
      <div className="border-b border-white/5 bg-background/30 p-8 relative overflow-hidden">
        {/* RGB Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-3xl font-bold text-white tracking-tight">MoneyTrack</h2>
              <div className="px-3 py-1 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-white/10 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-bold tracking-widest">LIVE</span>
              </div>
            </div>
            <p className="text-emerald-400 font-mono text-sm mb-3">FULL-STACK MERN FINANCE TRACKER</p>
            <p className="text-muted max-w-2xl text-sm leading-relaxed mb-4">
              A production-ready full-stack MERN Personal Finance Tracker that helps users securely manage income, expenses, financial reports, and analytics through an intuitive dashboard.
            </p>
            <ProjectTelemetry projectId="MoneyTrack" color="success" />
          </div>
          
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <a 
              href="https://money-track-frontend-pearl.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 transition-colors rounded-lg text-xs font-mono"
            >
              <Eye className="w-4 h-4" /> LIVE DEMO
            </a>
            <ExportButton fileName="MoneyTrack_Architecture" content={moneyTrackReport} color="success" />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="border-b border-white/5 bg-background/10 p-4 px-8 flex flex-wrap gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
        <span className="px-2 py-1 border border-cyan-500/20 text-cyan-400/80 rounded">React + Vite</span>
        <span className="px-2 py-1 border border-emerald-500/20 text-emerald-400/80 rounded">Node.js</span>
        <span className="px-2 py-1 border border-teal-500/20 text-teal-400/80 rounded">Express.js</span>
        <span className="px-2 py-1 border border-green-500/20 text-green-400/80 rounded">MongoDB Atlas</span>
        <span className="px-2 py-1 border border-blue-500/20 text-blue-400/80 rounded">Tailwind CSS v4</span>
        <span className="px-2 py-1 border border-purple-500/20 text-purple-400/80 rounded">Recharts</span>
        <span className="px-2 py-1 border border-yellow-500/20 text-yellow-400/80 rounded">JWT</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 bg-background/50 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-6 py-4 font-mono text-xs transition-colors whitespace-nowrap ${
            activeTab === 'architecture' ? 'border-b-2 border-emerald-400 text-emerald-400' : 'text-muted hover:text-white'
          }`}
        >
          ARCHITECTURE & ROADMAP
        </button>
        <button
          onClick={() => setActiveTab('backend')}
          className={`px-6 py-4 font-mono text-xs transition-colors whitespace-nowrap ${
            activeTab === 'backend' ? 'border-b-2 border-teal-400 text-teal-400' : 'text-muted hover:text-white'
          }`}
        >
          BACKEND CODE
        </button>
        <button
          onClick={() => setActiveTab('visuals')}
          className={`px-6 py-4 font-mono text-xs transition-colors whitespace-nowrap ${
            activeTab === 'visuals' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-muted hover:text-white'
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
              <Network className="w-4 h-4 text-emerald-400" /> SYSTEM ARCHITECTURE
            </h3>
            
            <div className="flex flex-col font-mono text-xs">
              <div className="flex items-center gap-4 bg-background/50 border border-white/10 p-4 rounded-xl relative z-10">
                <PieChart className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-white">React + Vite Client</div>
                  <div className="text-muted text-[10px] mt-1">Recharts for Analytics & Dashboards</div>
                </div>
              </div>
              
              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-gradient-to-b from-emerald-500/50 to-teal-500/50"></div></div>
              
              <div className="flex items-center gap-4 bg-teal-500/5 border border-teal-500/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(20,184,166,0.05)]">
                <ShieldAlert className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <div className="text-teal-400 font-bold">JWT Authentication</div>
                  <div className="text-muted text-[10px] mt-1">Secure HTTP-only cookies & Bearer tokens</div>
                </div>
              </div>

              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-gradient-to-b from-teal-500/50 to-cyan-500/50"></div></div>

              <div className="flex items-center gap-4 bg-background/50 border border-white/10 p-4 rounded-xl relative z-10">
                <Cpu className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-white">Express API (Node.js)</div>
                  <div className="text-muted text-[10px] mt-1">Unified Transaction Controllers</div>
                </div>
              </div>

              <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-cyan-500/50"></div></div>

              <div className="flex items-center gap-4 bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.05)]">
                <Database className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-cyan-400 font-bold">MongoDB Atlas</div>
                  <div className="text-muted text-[10px] mt-1">Mongoose Schema with dynamic types</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> ENGINEERING HIGHLIGHTS
              </h3>
              <div className="bg-[#0a0a0a] border border-white/5 p-5 rounded-xl space-y-5">
                <div>
                  <h4 className="text-white font-mono text-[11px] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Unified Schema Architecture
                  </h4>
                  <p className="text-muted text-[11px] leading-relaxed">
                    MoneyTrack uses a single <span className="font-mono text-emerald-400">Transaction</span> schema with a type field (income or expense) instead of separate collections, significantly reducing duplicate business logic and improving maintainability.
                  </p>
                </div>
                <div className="w-full h-px bg-white/5"></div>
                <div>
                  <h4 className="text-white font-mono text-[11px] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                    Responsive State Management
                  </h4>
                  <p className="text-muted text-[11px] leading-relaxed">
                    Designed to be fully responsive across desktop, tablet, and mobile devices while maintaining consistent functionality and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Flexes & Roadmap */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            
            {/* Core Platform Features / Roadmap */}
            <div>
              <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-emerald-400" /> PLATFORM ROADMAP
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                  <PieChart className="w-5 h-5 text-muted mb-3" />
                  <h4 className="text-white font-mono text-xs mb-1">Advanced Analytics</h4>
                  <p className="text-muted text-[11px]">Year-over-year comparative charts and predictive spending trends.</p>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                  <Download className="w-5 h-5 text-muted mb-3" />
                  <h4 className="text-white font-mono text-xs mb-1">Automated PDF Reports</h4>
                  <p className="text-muted text-[11px]">Generate monthly financial summaries alongside the existing Excel export feature.</p>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                  <Sparkles className="w-5 h-5 text-muted mb-3" />
                  <h4 className="text-white font-mono text-xs mb-1">AI Receipt Scanning</h4>
                  <p className="text-muted text-[11px]">Automatically extract amount and category from uploaded receipt images using OCR.</p>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                  <Wallet className="w-5 h-5 text-muted mb-3" />
                  <h4 className="text-white font-mono text-xs mb-1">Budget Goals</h4>
                  <p className="text-muted text-[11px]">Set monthly category limits and receive email notifications when approaching thresholds.</p>
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
              <Database className="w-4 h-4 text-emerald-400" /> MONGOOSE SCHEMA: UNIFIED TRANSACTIONS
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // A single collection handles both income and expenses. The index on (userId, date) optimizes time-series queries.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-xs overflow-x-auto p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              <pre className="text-white/80 leading-relaxed">
<span className="text-purple-400">import</span> mongoose <span className="text-purple-400">from</span> <span className="text-accent">"mongoose"</span>;{"\n"}
{"\n"}
<span className="text-purple-400">const</span> <span className="text-blue-400">transactionSchema</span> = <span className="text-purple-400">new</span> mongoose.Schema({"{\n"}
{"  "}description: {"{\n"}
{"    "}type: String,{"\n"}
{"    "}required: <span className="text-orange-400">true</span>,{"\n"}
{"    "}trim: <span className="text-orange-400">true</span>{"\n"}
{"  },\n"}
{"  "}amount: {"{\n"}
{"    "}type: Number,{"\n"}
{"    "}required: <span className="text-orange-400">true</span>,{"\n"}
{"    "}min: [<span className="text-orange-400">1</span>, <span className="text-accent">"Amount must be greater than 0"</span>]{"\n"}
{"  },\n"}
{"  "}category: {"{\n"}
{"    "}type: String,{"\n"}
{"    "}required: <span className="text-orange-400">true</span>,{"\n"}
{"    "}lowercase: <span className="text-orange-400">true</span>{"\n"}
{"  },\n"}
{"  "}date: {"{\n"}
{"    "}type: Date,{"\n"}
{"    "}default: Date.now,{"\n"}
{"    "}index: <span className="text-orange-400">true</span>{"\n"}
{"  },\n"}
{"  "}userId: {"{\n"}
{"    "}type: mongoose.Schema.Types.ObjectId,{"\n"}
{"    "}ref: <span className="text-accent">"user"</span>,{"\n"}
{"    "}required: <span className="text-orange-400">true</span>,{"\n"}
{"    "}index: <span className="text-orange-400">true</span>{"\n"}
{"  },\n"}
{"  "}type: {"{\n"}
{"    "}type: String,{"\n"}
{"    "}enum: [<span className="text-accent">"income"</span>, <span className="text-accent">"expense"</span>],{"\n"}
{"    "}default: <span className="text-accent">"income"</span>,{"\n"}
{"    "}lowercase: <span className="text-orange-400">true</span>{"\n"}
{"  }\n"}
{"}, {\n"}
{"  "}timestamps: <span className="text-orange-400">true</span>{"\n"}
{"});\n"}
{"\n"}
<span className="text-muted">// Compound index for fast historical lookups per user</span>{"\n"}
transactionSchema.index({"{"} userId: <span className="text-orange-400">1</span>, date: <span className="text-orange-400">-1</span> {"}"});{"\n"}
{"\n"}
<span className="text-purple-400">const</span> <span className="text-blue-400">transactionModel</span> = mongoose.models.transaction || mongoose.model(<span className="text-accent">"transaction"</span>, transactionSchema);{"\n"}
<span className="text-purple-400">export default</span> transactionModel;
              </pre>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2">Compound Indexing</h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  The compound index on <span className="font-mono text-emerald-400">{"{ userId: 1, date: -1 }"}</span> ensures the dashboard fetches recent history instantly.
                </p>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                <h4 className="text-white font-mono text-xs mb-2">Single Source of Truth</h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Both income and expenses live in one collection. The <span className="font-mono text-emerald-400">type</span> enum makes calculating net balances a single aggregation pipeline away.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4">
              <FileCode2 className="w-4 h-4 text-teal-400" /> EXPRESS CONTROLLER: TRANSACTION LOGIC
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Controller handling filtered, paginated transaction retrieval with robust error catching.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-xs overflow-x-auto p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              <pre className="text-white/80 leading-relaxed">
<span className="text-purple-400">export async function</span> <span className="text-blue-400">getTransactions</span>(req, res) {"{\n"}
{"  "}<span className="text-purple-400">const</span> userId = req.user.id;{"\n"}
{"  "}<span className="text-purple-400">const</span> {"{ type, category, page = "} <span className="text-orange-400">1</span>{", limit = "} <span className="text-orange-400">10</span> {"}"} = req.query;{"\n"}
{"\n"}
{"  "}<span className="text-purple-400">try</span> {"{\n"}
{"    "}<span className="text-purple-400">const</span> pageNum = Math.max(<span className="text-orange-400">1</span>, Number(page));{"\n"}
{"    "}<span className="text-purple-400">const</span> limitNum = Math.min(<span className="text-orange-400">50</span>, Math.max(<span className="text-orange-400">1</span>, Number(limit)));{"\n"}
{"\n"}
{"    "}<span className="text-purple-400">const</span> filter = {"{ userId }"};{"\n"}
{"\n"}
{"    "}<span className="text-purple-400">if</span> (type) filter.type = type.toLowerCase();{"\n"}
{"    "}<span className="text-purple-400">if</span> (category) filter.category = category.trim().toLowerCase();{"\n"}
{"\n"}
{"    "}<span className="text-purple-400">const</span> transactions = <span className="text-purple-400">await</span> transactionModel{"\n"}
{"      "}.find(filter){"\n"}
{"      "}.sort({"{"} date: <span className="text-orange-400">-1</span> {"}"}){"\n"}
{"      "}.skip((pageNum - <span className="text-orange-400">1</span>) * limitNum){"\n"}
{"      "}.limit(limitNum);{"\n"}
{"\n"}
{"    "}<span className="text-purple-400">return</span> res.json({"{\n"}
{"      "}success: <span className="text-orange-400">true</span>,{"\n"}
{"      "}data: transactions,{"\n"}
{"      "}page: pageNum,{"\n"}
{"      "}limit: limitNum{"\n"}
{"    });\n"}
{"\n"}
{"  } "}<span className="text-purple-400">catch</span> (error) {"{\n"}
{"    "}<span className="text-purple-400">return</span> res.status(<span className="text-orange-400">500</span>).json({"{\n"}
{"      "}success: <span className="text-orange-400">false</span>,{"\n"}
{"      "}message: <span className="text-accent">"Server Error"</span>{"\n"}
{"    });\n"}
{"  }\n"}
{"}\n"}
              </pre>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4">
              <Server className="w-4 h-4 text-purple-400" /> DOCKER COMPOSE CONFIGURATION
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // The application is fully containerized using Docker Compose for seamless deployment.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-xs overflow-x-auto p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              <pre className="text-white/80 leading-relaxed">
<span className="text-blue-400">version</span>: <span className="text-accent">'3.8'</span>{"\n"}
{"\n"}
<span className="text-blue-400">services</span>:{"\n"}
{"  "}<span className="text-muted"># The Backend Service</span>{"\n"}
{"  "}<span className="text-blue-400">moneytrack-api</span>:{"\n"}
{"    "}<span className="text-purple-400">build</span>: ./Backend{"\n"}
{"    "}<span className="text-purple-400">container_name</span>: moneytrack-backend-container{"\n"}
{"    "}<span className="text-purple-400">ports</span>:{"\n"}
{"      "}- <span className="text-accent">"5000:5000"</span>{"\n"}
{"    "}<span className="text-purple-400">env_file</span>:{"\n"}
{"      "}- ./Backend/.env{"\n"}
{"    "}<span className="text-purple-400">networks</span>:{"\n"}
{"      "}- moneytrack-network{"\n"}
{"\n"}
{"  "}<span className="text-muted"># The Frontend Service</span>{"\n"}
{"  "}<span className="text-blue-400">moneytrack-ui</span>:{"\n"}
{"    "}<span className="text-purple-400">build</span>:{"\n"}
{"      "}<span className="text-orange-400">context</span>: ./Frontend{"\n"}
{"      "}<span className="text-orange-400">args</span>:{"\n"}
{"        "}- VITE_API_BASE=http://localhost:5000{"\n"}
{"    "}<span className="text-purple-400">container_name</span>: moneytrack-frontend-container{"\n"}
{"    "}<span className="text-purple-400">ports</span>:{"\n"}
{"      "}- <span className="text-accent">"3000:80"</span>{"\n"}
{"    "}<span className="text-purple-400">env_file</span>:{"\n"}
{"      "}- ./Frontend/.env{"\n"}
{"    "}<span className="text-purple-400">networks</span>:{"\n"}
{"      "}- moneytrack-network{"\n"}
{"    "}<span className="text-purple-400">depends_on</span>:{"\n"}
{"      "}- moneytrack-api{"\n"}
{"\n"}
<span className="text-blue-400">networks</span>:{"\n"}
{"  "}<span className="text-purple-400">moneytrack-network</span>:{"\n"}
{"    "}<span className="text-orange-400">driver</span>: bridge
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
              <Camera className="w-4 h-4 text-emerald-400" /> MAIN DASHBOARD
            </h3>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
              <img 
                src="/Projects/MoneyTrack/Dashboard.png" 
                alt="MoneyTrack Dashboard" 
                className="w-full h-auto rounded-lg border border-white/5 object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-mono text-white mb-6 flex items-center gap-2">
                <Camera className="w-4 h-4 text-teal-400" /> INCOME TRACKING
              </h3>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
                <img 
                  src="/Projects/MoneyTrack/Income.png" 
                  alt="Income Tracking" 
                  className="w-full h-auto rounded-lg border border-white/5 object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-mono text-white mb-6 flex items-center gap-2">
                <Camera className="w-4 h-4 text-red-400" /> EXPENSE TRACKING
              </h3>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
                <img 
                  src="/Projects/MoneyTrack/Expense.png" 
                  alt="Expense Tracking" 
                  className="w-full h-auto rounded-lg border border-white/5 object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-mono text-white mb-6 flex items-center gap-2">
                <Camera className="w-4 h-4 text-cyan-400" /> EXCEL EXPORT
              </h3>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative">
                <img 
                  src="/Projects/MoneyTrack/ExcelExport.png" 
                  alt="Excel Export Feature" 
                  className="w-full h-auto rounded-lg border border-white/5 object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <h3 className="text-sm font-mono text-white mb-6 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-purple-400" /> TABLET & MOBILE VIEW
                </h3>
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden p-2 group relative flex gap-2 items-center justify-center">
                  <img 
                    src="/Projects/MoneyTrack/DashboardTabletView.png" 
                    alt="Tablet View" 
                    className="w-1/2 h-auto rounded-lg border border-white/5 object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <img 
                    src="/Projects/MoneyTrack/profileMobileView.png" 
                    alt="Mobile View" 
                    className="w-1/3 h-auto rounded-lg border border-white/5 object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
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
          
          {moneyTrackIncidents.map((incident) => (
            <div key={incident.id} className="border border-white/5 bg-[#0a0a0a] rounded-xl relative group overflow-hidden shadow-2xl hover:border-red-500/30 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white hover:text-emerald-400 transition-colors">
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
                      <div className="text-emerald-400 mb-2 text-xs tracking-widest">RESOLUTION</div>
                      <div className="text-white/90 bg-emerald-500/5 p-4 rounded-lg border border-emerald-500/20">
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
