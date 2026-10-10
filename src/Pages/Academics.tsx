import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../Utils/animations';
import { GraduationCap, BookOpen, FileText, ExternalLink, Cloud, CheckCircle2, Clock } from 'lucide-react';

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
          {/* Main Academic Card */}
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-2 bg-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <GraduationCap className="w-32 h-32 text-white" />
            </div>

            <div className="relative z-10">
              <div className="text-xs font-mono text-accent mb-2">CLASS OF 2028</div>
              <h2 className="text-2xl font-bold text-white mb-2">Dayananda Sagar College of Engineering</h2>
              <p className="text-muted mb-6">B.E. in Information Science and Engineering</p>

              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 mt-2">
                <span className="text-sm text-muted">Current CGPA:</span>
                <span className="font-mono text-white font-bold">{currentCGPA}</span>
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 flex flex-col gap-6">
            {/* Core Coursework */}
            <motion.div variants={fadeUp} className="bg-panel rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-white">Core Modules</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted">
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
            </motion.div>

            {/* Ongoing Learning */}
            <motion.div variants={fadeUp} className="bg-panel rounded-2xl p-8 border border-white/5 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-white">Ongoing</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">{'>'}</span>
                  <a
                    href="https://onlinecourses.nptel.ac.in/e-learning/course/noc26_cs150"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    12-Week NPTEL Course on Cloud Computing
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
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
