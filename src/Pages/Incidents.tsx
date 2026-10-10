import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../Utils/animations';
import { AlertTriangle, CheckCircle2, XCircle, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import incidentsData from '../data/incidents-data.json';
import { getTimeAgo } from '../Utils/timeAgo';

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

export const Incidents = () => {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8 max-w-6xl mx-auto pt-32 pb-24 px-6 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]"></div>
      
      <motion.div variants={fadeUp} className="mb-12 border-b border-red-500/20 pb-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-red-500 font-mono text-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>/var/log/syslog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white flex items-center gap-4 font-mono tracking-tighter">
              ENGINEERING_INCIDENTS
              <span className="w-4 h-10 bg-red-500 animate-pulse hidden md:block" />
            </h1>
            <p className="text-muted mt-4 text-sm max-w-2xl font-mono leading-relaxed">
              &gt; Systems fail. This is an immutable log of critical failures, debugging sessions, and architectural changes implemented to prevent recurrence.
            </p>
          </div>
          <div className="text-xs font-mono text-muted border border-red-500/20 px-4 py-2 bg-red-500/5 rounded backdrop-blur-sm">
            LAST_SYNC: {getTimeAgo(incidentsData._meta.lastSynced)}
          </div>
        </div>
      </motion.div>

      <div className="space-y-12 relative z-10">
      {incidentsData.incidents.map((incident) => (
        <motion.div key={incident.id} variants={fadeUp} className="border border-white/5 bg-[#0a0a0a] rounded-xl relative group overflow-hidden shadow-2xl hover:border-red-500/30 transition-colors">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-red-500/50 to-transparent" />
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-red-500/10 text-red-400 font-bold px-3 py-1 text-sm border border-red-500/20 font-mono">
                  {incident.projectName.toUpperCase()}
                </span>
                <span className="text-xs text-muted font-mono">
                  DATE: {new Date(incident.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-4 bg-background/80 px-4 py-2 rounded-lg border border-white/5">
                <a href={incident.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted hover:text-white flex items-center gap-2 transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  ISSUE #{incident.number}
                </a>
                <div className="w-px h-4 bg-white/10" />
                <div className={`flex items-center gap-2 font-mono text-xs ${
                  incident.status === 'RESOLVED' 
                    ? 'text-success' 
                    : 'text-yellow-400'
                }`}>
                  {incident.status === 'RESOLVED' ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />} 
                  {incident.status}
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-white mb-6 hover:text-accent transition-colors">
              <a href={incident.githubUrl} target="_blank" rel="noopener noreferrer">
                {incident.title}
              </a>
            </h2>

            <div className="space-y-8 font-mono text-sm mt-8 relative">
              {/* Timeline Connector Line */}
              <div className="absolute left-[15px] md:left-[111px] top-4 bottom-4 w-px bg-white/5 z-0 hidden md:block" />

              {incident.inputState && (
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 relative z-10">
                  <div className="text-muted pt-1 text-xs tracking-widest bg-[#0a0a0a]">INPUT_STATE</div>
                  <div className="text-white/90 bg-background/30 p-5 rounded-lg border border-white/5">
                    <ReactMarkdown components={MarkdownComponents}>{incident.inputState}</ReactMarkdown>
                  </div>
                </div>
              )}

              {incident.failure && (
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 relative z-10">
                  <div className="text-red-400 pt-1 text-xs tracking-widest bg-[#0a0a0a] flex items-center gap-1"><XCircle className="w-3 h-3"/> FAILURE</div>
                  <div className="text-white/90 bg-red-500/5 p-5 rounded-lg border border-red-500/20">
                    <ReactMarkdown components={MarkdownComponents}>{incident.failure}</ReactMarkdown>
                  </div>
                </div>
              )}

              {incident.investigation && (
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 relative z-10">
                  <div className="text-accent pt-1 text-xs tracking-widest bg-[#0a0a0a]">INVESTIGATION</div>
                  <div className="text-white/90 bg-background/30 p-5 rounded-lg border border-white/5">
                    <ReactMarkdown components={MarkdownComponents}>{incident.investigation}</ReactMarkdown>
                  </div>
                </div>
              )}

              {incident.rootCause && (
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 relative z-10">
                  <div className="text-orange-400 pt-1 text-xs tracking-widest bg-[#0a0a0a]">ROOT_CAUSE</div>
                  <div className="text-white/90 bg-orange-500/5 p-5 rounded-lg border border-orange-500/20">
                    <ReactMarkdown components={MarkdownComponents}>{incident.rootCause}</ReactMarkdown>
                  </div>
                </div>
              )}

              {incident.resolution && (
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 relative z-10">
                  <div className="text-success pt-1 text-xs tracking-widest bg-[#0a0a0a]">RESOLUTION</div>
                  <div className="text-white/90 bg-success/5 p-5 rounded-lg border border-success/20">
                    <ReactMarkdown components={MarkdownComponents}>{incident.resolution}</ReactMarkdown>
                  </div>
                </div>
              )}

              {incident.lessons && (
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 relative z-10">
                  <div className="text-blue-400 pt-1 text-xs tracking-widest bg-[#0a0a0a]">LESSONS</div>
                  <div className="text-white/90 bg-blue-500/5 p-5 rounded-lg border border-blue-500/20">
                    <ReactMarkdown components={MarkdownComponents}>{incident.lessons}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
      </div>

    </motion.div>
  );
};

