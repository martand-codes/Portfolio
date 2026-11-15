import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../Utils/animations';
import { GraduationCap, BookOpen, FileText, ExternalLink, CheckCircle2, Clock, Cloud } from 'lucide-react';

const semesterData = [
  { id: 1, sgpa: 9.45, status: 'completed' },
  { id: 2, sgpa: 8.65, status: 'completed' },
  { id: 3, sgpa: 8.40, status: 'completed' },
  { id: 4, sgpa: 9.36, status: 'completed' },
  { id: 5, sgpa: null, status: 'ongoing' },
  { id: 6, sgpa: null, status: 'upcoming' },
  { id: 7, sgpa: null, status: 'upcoming' },
  { id: 8, sgpa: null, status: 'upcoming' },
];

export const Academics = () => {
  const completedSems = semesterData.filter(s => s.sgpa !== null);
  const currentCGPA = completedSems.length > 0
    ? (completedSems.reduce((acc, curr) => acc + curr.sgpa!, 0) / completedSems.length).toFixed(2)
    : '--.--';

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-12">
          <h1 className="flex items-center gap-3 text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Academics <span className="text-accent"><GraduationCap className="w-8 h-8 md:w-10 md:h-10" /></span>
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Formal education core coursework and semester performance logs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Formal Academic Card */}
          <motion.div variants={fadeUp} className="bg-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <GraduationCap className="w-24 h-24 text-white" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-3">
                <GraduationCap className="w-4 h-4 text-accent" /> CLASS OF 2028
              </div>
              <h2 className="text-xl font-bold text-white mb-2 leading-snug">Dayananda Sagar College of Engineering</h2>
              <p className="text-muted text-sm mb-4">B.E. in Information Science and Engineering</p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/5 mt-auto">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3.5 py-1.5">
                <span className="text-xs text-muted">Current CGPA:</span>
                <span className="font-mono text-white font-bold text-sm">{currentCGPA}</span>
              </div>
            </div>
          </motion.div>

          {/* NPTEL: Cloud Computing (Dedicated Card) */}
          <motion.div variants={fadeUp} className="bg-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden flex flex-col justify-between group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                  <Cloud className="w-4 h-4 text-blue-400" /> NPTEL (IIT KHARAGPUR)
                </div>
                <span className="px-2 py-0.5 text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-bold">
                  COMPLETED
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                12-Week Cloud Computing
              </h3>
              <p className="text-muted text-xs leading-relaxed mb-4">
                Rigorous 12-week national curriculum covering distributed virtualization, storage systems, cloud economics, and microservice architectures.
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-[11px]">
                <span className="px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20 font-bold">
                  Top 5% Topper
                </span>
                <span className="px-2 py-1 rounded bg-white/5 text-white/90 border border-white/10 font-bold">
                  Score: 90% (Elite)
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/5 mt-auto">
              <a
                href="/Details/Nptel_Results.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/40 text-white hover:text-accent rounded-lg text-xs font-mono transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-accent" /> VIEW NPTEL CERTIFICATE <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </motion.div>

          {/* Core Modules */}
          <motion.div variants={fadeUp} className="bg-panel rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-accent" />
                <h3 className="text-lg font-bold text-white">Core Modules</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">{'>'}</span> Data Structures & Algorithms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">{'>'}</span> Object-Oriented Programming
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">{'>'}</span> Operating Systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">{'>'}</span> Database Management Systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">{'>'}</span> Computer Networks
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Semester Logs */}
        <motion.div variants={fadeUp} className="bg-panel rounded-2xl p-8 border border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-bold text-white">Semester Logs</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {semesterData.map((sem) => (
              <div key={sem.id} className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-xs font-mono text-muted mb-1">SEMESTER {sem.id}</div>
                    <div className="text-white font-bold">SGPA: {sem.sgpa ? sem.sgpa.toFixed(2) : '--'}</div>
                  </div>
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all w-full justify-center
                    ${sem.status === 'completed'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : sem.status === 'ongoing'
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'bg-white/5 text-muted/50 border border-transparent'
                    }`}
                >
                  {sem.status === 'completed' ? (
                    <>
                      <CheckCircle2 className="w-3 h-3" /> Completed
                    </>
                  ) : sem.status === 'ongoing' ? (
                    <>
                      <Clock className="w-3 h-3" /> In Progress
                    </>
                  ) : (
                    'Upcoming'
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};
