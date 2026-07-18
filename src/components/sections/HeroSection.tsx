import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight, Play } from 'lucide-react';
import { FiChrome } from 'react-icons/fi';
import { GridBackground } from '../ui/GridBackground';
import { BrowserMockup } from '../ui/BrowserMockup';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-mono tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              v2.0 Now Available
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
            Your AI{' '}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Workspace.
              </span>
            </span>
            <br />
            Everywhere.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
            Access ChatGPT, Claude, and Gemini from one intelligent sidebar without leaving your current page. No API keys. No context switching.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="https://sidegpt.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiChrome className="w-4 h-4" />
              Install Extension
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#demo"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white rounded-lg font-medium text-sm hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </motion.a>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-500 font-mono">
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 text-cyan-500" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 text-cyan-500" />
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 text-cyan-500" />
              <span>No API Keys</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Browser Mockup */}
        <motion.div
          className="relative"
          style={{ y: y1, opacity }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <BrowserMockup />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
};
