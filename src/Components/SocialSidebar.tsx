import { motion } from 'framer-motion';
import { Mail, Code2 } from 'lucide-react';
import { useState } from 'react';

export const SocialSidebar = ({ onOpenEmail }: { onOpenEmail?: (e: React.MouseEvent) => void }) => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenEmail) {
      onOpenEmail(e);
    } else {
      navigator.clipboard.writeText('prakharmartand755@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed bottom-0 left-0 w-full xl:w-auto xl:left-6 z-50 flex xl:flex-col items-center justify-center xl:justify-end gap-6 py-4 xl:py-0 xl:pb-0 bg-background/90 xl:bg-transparent backdrop-blur-md xl:backdrop-blur-none border-t border-white/5 xl:border-none"
    >
      <div className="flex xl:flex-col gap-8 xl:gap-6 items-center">
        <a href="https://github.com/martand-codes" title="GitHub" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors transform hover:-translate-y-1 hover:scale-110 duration-200 relative group">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-white/10 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none xl:left-8 xl:-translate-x-0 xl:top-1/2 xl:-translate-y-1/2">GitHub</span>
        </a>
        <a href="https://leetcode.com/u/wAWKTQPu4M/" title="LeetCode" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors transform hover:-translate-y-1 hover:scale-110 duration-200 relative group">
          <Code2 className="w-5 h-5" />
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-white/10 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none xl:left-8 xl:-translate-x-0 xl:top-1/2 xl:-translate-y-1/2">LeetCode</span>
        </a>
        <a href="https://www.linkedin.com/in/martand-prakhar-a04904315/" title="LinkedIn" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors transform hover:-translate-y-1 hover:scale-110 duration-200 relative group">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-white/10 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none xl:left-8 xl:-translate-x-0 xl:top-1/2 xl:-translate-y-1/2">LinkedIn</span>
        </a>
        <a href="#" onClick={handleEmailClick} title={onOpenEmail ? "Send Email" : "Copy Email"} className="text-muted hover:text-accent transition-colors transform hover:-translate-y-1 hover:scale-110 duration-200 relative group flex flex-col items-center">
          <Mail className="w-5 h-5" />
          <span className="absolute left-1/2 -translate-x-1/2 -top-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none xl:left-8 xl:-translate-x-0 xl:top-1/2 xl:-translate-y-1/2">
            <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">
              {onOpenEmail ? 'Send Email' : (copied ? 'Copied!' : 'Copy Email')}
            </span>
            <span className="text-[8px] font-mono font-bold text-accent tracking-widest uppercase mt-0.5 xl:absolute xl:top-full xl:left-0 xl:mt-1">Most Active</span>
          </span>
        </a>
      </div>

      {/* Vertical Line for desktop */}
      <div className="hidden xl:block w-px h-24 bg-gradient-to-b from-white/20 to-transparent mt-2" />
    </motion.div>
  );
};
