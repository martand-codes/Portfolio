import { motion } from 'framer-motion';
import { Terminal, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const NotFound = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center p-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono text-sm sm:text-base"
      >
        {/* VS Code Window Header */}
        <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center text-xs text-gray-400 font-sans flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" />
            bash - psql
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 text-gray-300 space-y-4 overflow-x-auto leading-relaxed">
          <div>
            <span className="text-green-400 font-bold">martand@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400 font-bold">~</span>
            <span className="text-white">$ </span>
            <span>psql -U guest -d portfolio_db</span>
          </div>
          
          <div className="text-gray-400">
            psql (14.10)<br/>
            Type "help" for help.
          </div>

          <div>
            <span className="text-blue-400 font-bold">portfolio_db=&gt; </span>
            <span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> routes <span className="text-purple-400">WHERE</span> path = <span className="text-yellow-300">'{location.pathname}'</span>;
          </div>

          <div className="text-red-400">
            ERROR:  relation "routes" does not contain path '{location.pathname}'<br/>
            LINE 1: SELECT * FROM routes WHERE path = '{location.pathname}';<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^<br/>
            HINT:  No entity or query found matching this route. Please verify the URL.
          </div>

          <div className="pt-4 flex items-center gap-4">
            <span className="text-blue-400 font-bold">portfolio_db=&gt; </span>
            <Link 
              to="/" 
              className="group flex items-center gap-2 text-white hover:text-accent transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded border border-white/10"
            >
              <Home className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              \q (Return to Base)
            </Link>
          </div>
          
          <div className="flex items-center">
            <span className="text-green-400 font-bold">martand@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400 font-bold">~</span>
            <span className="text-white">$ </span>
            <span className="animate-pulse ml-1 inline-block w-2.5 h-4 bg-white/80"></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
