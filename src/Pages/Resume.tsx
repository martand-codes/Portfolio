import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

export const Resume = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center max-w-4xl mx-auto"
      >
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
          <FileText className="w-8 h-8 text-accent" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-white text-center">
          Resume <span className="text-accent">.</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mb-16">
          <a
            href="/Details/Resume.pdf"
            download
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-accent text-white font-bold tracking-wide hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_30px_rgba(255,30,30,0.5)] hover:-translate-y-1"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>

          <a
            href="/Details/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all hover:-translate-y-1"
          >
            <ExternalLink className="w-5 h-5 text-muted group-hover:text-white" />
            Open in Browser
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#0a0a0a]"
        >
          {/* Decorative header */}
          <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <div className="ml-4 text-xs font-mono text-muted">Resume.pdf</div>
          </div>

          {/* Resume preview container */}
          <div className="w-full h-[85vh] min-h-[600px] relative bg-black/40">
            <iframe
              src="/Details/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              className="w-full h-full bg-white"
              title="Resume Preview"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
