import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, XIcon } from 'lucide-react';
import { FiGithub, FiChrome } from 'react-icons/fi';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Compare', href: '#compare' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#09090B]/80 backdrop-blur-md border-white/5' : 'bg-transparent border-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:border-blue-500/40 transition-colors" />
            <Terminal className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white font-mono">
            SideGPT
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors font-mono text-xs tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/caiyongji/ChatMultiAI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors border border-transparent hover:border-white/10 rounded-md"
          >
            <FiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://sidegpt.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 text-xs font-mono bg-white text-black hover:bg-zinc-200 transition-colors rounded-md font-medium"
          >
            <FiChrome className="w-4 h-4" />
            <span>Install</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090B]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-zinc-400 hover:text-white font-mono uppercase tracking-widest"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2 border-t border-white/5">
                <a href="https://github.com/caiyongji/ChatMultiAI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-zinc-400">
                  <FiGithub className="w-4 h-4" /> GitHub
                </a>
                <a href="https://sidegpt.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-400">
                  <FiChrome className="w-4 h-4" /> Install
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
