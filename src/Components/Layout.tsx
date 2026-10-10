import { NavLink, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialSidebar } from './SocialSidebar';
import { Menu, X, CheckCircle2, Mail, Code2, ChevronDown, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const contactDropdownRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsContactOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/4b7ddd74816105173043a708241ba0a0', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => {
          setSubmitStatus('idle');
          setIsEmailModalOpen(false);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenEmailModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailModalOpen(true);
    closeMenu();
  };

  const navLinks = [
    { name: 'Systems', path: '/systems' },
    { name: 'Incidents', path: '/incidents' },
    { name: 'Algorithms', path: '/algorithms' },
    { name: 'Arsenal', path: '/arsenal' },
    { name: 'Academics', path: '/academics' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Top Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <NavLink to="/" onClick={closeMenu} className="text-xl font-bold tracking-tighter text-white z-50 relative">
            PRAKHAR <span className="text-accent">.</span>
          </NavLink>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    link.name === 'Systems'
                      ? `px-3 py-1.5 rounded border transition-all duration-300 font-bold tracking-wide flex items-center gap-2 ${isActive ? 'bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(255,30,30,0.3)]' : 'bg-accent/5 border-accent/40 text-accent hover:bg-accent/10 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(255,30,30,0.2)]'}`
                      : `transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-muted'}`
                  }
                >
                  {link.name === 'Systems' && <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>}
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="flex items-center gap-3 ml-2">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-5 py-2 rounded-lg font-bold tracking-wide transition-all duration-300 text-xs shadow-lg ${isActive
                    ? 'bg-white text-accent border border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'bg-white/10 text-accent border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5'
                  }`
                }
              >
                Resume
              </NavLink>
              <div className="relative" ref={contactDropdownRef}>
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="relative px-5 py-2 rounded bg-accent/10 text-accent font-bold tracking-widest border border-accent/30 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,30,30,0.1)] hover:shadow-[0_0_25px_rgba(255,30,30,0.4)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <div className="absolute inset-0 w-full h-full bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2 text-xs">
                    CONTACT <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                <AnimatePresence>
                  {isContactOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl overflow-hidden py-2"
                    >
                      <a href="https://github.com/martand-codes" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-2 text-sm text-muted hover:text-white hover:bg-white/5 transition-colors">
                        <GithubIcon className="w-4 h-4" /> GitHub
                      </a>
                      <a href="https://www.linkedin.com/in/martand-prakhar-a04904315/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-2 text-sm text-muted hover:text-white hover:bg-white/5 transition-colors">
                        <LinkedinIcon className="w-4 h-4" /> LinkedIn
                      </a>
                      <a href="https://leetcode.com/u/wAWKTQPu4M" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-2 text-sm text-muted hover:text-white hover:bg-white/5 transition-colors">
                        <Code2 className="w-4 h-4" /> LeetCode
                      </a>
                      <button onClick={handleOpenEmailModal} className="w-full flex items-center justify-between px-4 py-2 text-sm text-accent hover:bg-accent/10 transition-colors border-t border-white/5 mt-1 pt-3 group">
                        <div className="flex items-center gap-3 whitespace-nowrap">
                          <Mail className="w-4 h-4 shrink-0" />
                          Send Email
                        </div>
                        <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded border border-accent/30 text-accent uppercase tracking-widest shrink-0">Most Active</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-20 left-0 w-full bg-[#050505] border-b border-white/5 overflow-hidden lg:hidden flex flex-col shadow-xl"
            >
              <div className="py-4 px-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      link.name === 'Systems'
                        ? `text-sm font-bold tracking-wide transition-colors px-3 py-2 rounded border flex items-center gap-2 ${isActive ? 'bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(255,30,30,0.3)]' : 'bg-accent/5 border-accent/40 text-accent hover:bg-accent/10 hover:border-accent'}`
                        : `text-sm font-medium transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-muted'}`
                    }
                  >
                    {link.name === 'Systems' && <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>}
                    {link.name}
                  </NavLink>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                  <NavLink
                    to="/resume"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `w-full text-center py-3 rounded-lg font-bold tracking-wide transition-all duration-300 text-sm shadow-lg ${isActive
                        ? 'bg-white text-accent border border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                        : 'bg-white/10 text-accent border border-white/20 hover:bg-white/20 hover:border-white/40'
                      }`
                    }
                  >
                    Resume
                  </NavLink>

                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://github.com/martand-codes" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all text-sm">
                      <GithubIcon className="w-4 h-4" /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/martand-prakhar" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all text-sm">
                      <LinkedinIcon className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="https://leetcode.com/u/wAWKTQPu4M" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all text-sm">
                      <Code2 className="w-4 h-4" /> LeetCode
                    </a>
                    <button onClick={handleOpenEmailModal} className="flex flex-col items-center justify-center gap-0.5 py-2.5 rounded bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all text-sm relative">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Send Email
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-widest uppercase opacity-80">Most Active</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Subtle background glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <Outlet />
      </main>

      <SocialSidebar onOpenEmail={handleOpenEmailModal} />

      {/* Email Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={() => setIsEmailModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-red-900" />

              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  INITIATE_TRANSMISSION
                </h3>
                <button
                  onClick={() => setIsEmailModalOpen(false)}
                  className="text-muted hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitStatus === 'success' ? (
                <div className="p-12 flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-mono text-green-400">TRANSMISSION_SUCCESS</h3>
                  <p className="text-sm text-muted">The message has been securely delivered.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />

                  <div>
                    <label className="block text-xs font-mono text-muted mb-1 uppercase tracking-widest">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent/50 transition-colors text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted mb-1 uppercase tracking-widest">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent/50 transition-colors text-sm"
                      placeholder="Example: Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted mb-1 uppercase tracking-widest">Message Payload</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent/50 transition-colors text-sm resize-none"
                      placeholder="Enter transmission data here..."
                    ></textarea>
                  </div>

                  {submitStatus === 'error' && (
                    <p className="text-xs text-red-500 font-mono text-center">Error: Transmission failed. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full py-3 mt-4 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 hover:border-accent/50 rounded-lg font-mono font-bold tracking-widest text-sm flex items-center justify-center gap-2 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT'}
                    {submitStatus !== 'submitting' && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
