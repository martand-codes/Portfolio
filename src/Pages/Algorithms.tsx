import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../Utils/animations';
import { Code2, ExternalLink, GitCommit, Link2, ArrowRight } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import dsaData from '../data/dsa-data.json';
import projectsData from '../data/projects-data.json';
import { getTimeAgo } from '../Utils/timeAgo';

const totalSolved = dsaData.reduce((acc, curr) => acc + curr.count, 0);


export const Algorithms = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lastSynced = (projectsData as any)._meta?.lastSynced;
  const syncLabel = lastSynced ? `SYNCED: ${getTimeAgo(lastSynced).toUpperCase()}` : 'LIVE DATA';
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <div className="flex items-center gap-3">
              <Code2 className="w-8 h-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Algorithmic Core</h1>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-1 bg-success/10 border border-success/20 rounded-md w-fit sm:ml-4">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[9px] text-success font-mono font-bold tracking-wider">{syncLabel}</span>
            </div>
          </div>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Data Structures and Algorithms progression. Documenting problem-solving patterns and analytical execution.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/martand-codes/DSA_JOURNEY"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-panel border border-white/10 rounded-lg text-white hover:border-accent hover:text-accent transition-all group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
            </svg>
            <span className="font-mono text-sm font-bold">DSA_JOURNEY</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-4 gap-6"
      >
        {/* Stats Summary Sidebar */}
        <motion.div variants={fadeUp} className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px]" />
            <h3 className="text-sm font-mono text-muted mb-2 uppercase">Total Documented</h3>
            <div className="text-6xl font-black text-white mb-2">{totalSolved}</div>
            <p className="text-xs text-accent font-mono">PROBLEMS SOLVED</p>
          </div>

          <div className="bg-panel rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm font-mono text-muted mb-6 uppercase">Top Battlegrounds</h3>
            <div className="flex flex-col gap-4">
              {dsaData.slice(0, 5).map((topic, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-white font-mono text-sm">{topic.name}</span>
                  <span className="text-accent font-black">{topic.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-panel rounded-2xl p-6 border border-white/5 flex-grow">
            <h3 className="text-sm font-mono text-muted mb-6 uppercase">Training Grounds</h3>
            <div className="flex flex-col gap-4">
              <a href="https://neetcode.io/user/RebelMewtwo611" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-white/5 hover:border-accent/50 hover:bg-accent/10 transition-all group">
                <span className="text-white font-mono text-sm group-hover:text-accent transition-colors">NeetCode</span>
                <ExternalLink className="w-4 h-4 ml-auto text-muted group-hover:text-accent transition-colors" />
              </a>
              <a href="https://leetcode.com/u/wAWKTQPu4M/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-white/5 hover:border-accent/50 hover:bg-accent/10 transition-all group">
                <span className="text-white font-mono text-sm group-hover:text-accent transition-colors">LeetCode</span>
                <ExternalLink className="w-4 h-4 ml-auto text-muted group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Main Chart Area */}
        <motion.div variants={fadeUp} className="lg:col-span-3 flex flex-col gap-6">
          <div className="bg-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden">
            <h3 className="text-sm font-mono text-muted mb-8 uppercase">Pattern Distribution Analysis</h3>
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={dsaData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 60 }}
                >
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#666', fontSize: 10, fontFamily: 'monospace' }}
                    axisLine={{ stroke: '#333' }}
                    tickLine={false}
                    angle={-45}
                    textAnchor="end"
                  />
                  <YAxis
                    tick={{ fill: '#666', fontSize: 12, fontFamily: 'monospace' }}
                    axisLine={{ stroke: '#333' }}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(255, 30, 30, 0.05)' }}
                    contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255, 30, 30, 0.3)', borderRadius: '8px' }}
                    itemStyle={{ color: '#FF1E1E', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    {dsaData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={index < 5 ? '#FF1E1E' : '#991111'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden">
            <h3 className="text-sm font-mono text-white font-bold uppercase mb-6 flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-accent" />
              DSA Journey Timeline
            </h3>

            <div className="flex overflow-x-auto pb-6 gap-2 sm:gap-4 snap-x w-full custom-scrollbar items-stretch">

              {/* Node 1 */}
              <div className="flex items-center flex-shrink-0 snap-start">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 w-72 flex flex-col hover:border-white/20 transition-colors h-full relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/10 rounded-t-xl" />
                  <div className="text-[10px] font-mono text-muted mb-2 tracking-wider">DEC 2024 - EARLY 2026</div>
                  <h4 className="text-white font-bold text-base mb-2">The Figuring Out Phase</h4>
                  <p className="text-muted text-xs leading-relaxed mb-4 flex-grow">
                    Started C++ basics and Arrays. Very undisciplined and stuck trying to figure things out alongside college-level coursework! Special thanks to Shraddha Khapra for the playlist.
                  </p>
                  <div className="mt-auto">
                    <a href="https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[10px] text-accent hover:text-white transition-colors bg-accent/10 px-2 py-1 rounded w-fit">
                      <Link2 className="w-3 h-3" />
                      Shraddha Khapra YouTube
                    </a>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 ml-2 sm:ml-4 hidden md:block" />
              </div>

              {/* Node 2 */}
              <div className="flex items-center flex-shrink-0 snap-start">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 w-72 flex flex-col hover:border-white/20 transition-colors h-full relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/20 rounded-t-xl" />
                  <div className="text-[10px] font-mono text-muted mb-2 tracking-wider">EARLY 2026</div>
                  <h4 className="text-white font-bold text-base mb-2">Structurizing Phase</h4>
                  <p className="text-muted text-xs leading-relaxed mb-4 flex-grow">
                    Bought the Sigma Prime Course to transition from a vague, scattered learning approach to a linear, focused path.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 ml-2 sm:ml-4 hidden md:block" />
              </div>

              {/* Node 3 */}
              <div className="flex items-center flex-shrink-0 snap-start">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 w-72 flex flex-col hover:border-accent/40 transition-colors h-full relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent rounded-t-xl shadow-[0_0_10px_rgba(255,30,30,0.5)]" />
                  <div className="text-[10px] font-mono text-accent mb-2 tracking-wider">MAY 13, 2026</div>
                  <h4 className="text-white font-bold text-base mb-2">Consistency Starts</h4>
                  <p className="text-muted text-xs leading-relaxed mb-4 flex-grow">
                    The real journey begins. Started solving LeetCode every single day, trying to gain confidence to solve more problems. Giving tests, solving mediums under time limits, and pushing past the fear of hard problems.
                  </p>
                  <div className="mt-auto">
                    <a href="https://neetcode.io/roadmap" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[10px] text-accent hover:text-white transition-colors bg-accent/10 px-2 py-1 rounded w-fit">
                      <Link2 className="w-3 h-3" />
                      NeetCode 250
                    </a>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 ml-2 sm:ml-4 hidden md:block" />
              </div>

              {/* Node 4 */}
              <div className="flex items-center flex-shrink-0 snap-start pr-4">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 w-72 flex flex-col hover:border-white/20 transition-colors h-full relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/10 rounded-t-xl" />
                  <div className="text-[10px] font-mono text-muted mb-2 tracking-wider">LATE 2026 - PRESENT</div>
                  <h4 className="text-white font-bold text-base mb-2">Current Focus</h4>
                  <p className="text-muted text-xs leading-relaxed mb-4 flex-grow">
                    Currently grinding 2D Dynamic Programming and Advanced Graphs. Slowly polishing DP patterns and preparing for mock tests and interviews.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
