import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ChevronRight } from 'lucide-react';
import { SCREENSHOTS } from '../../constants';

export const ScreenshotsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest"
          >
            <Layers className="w-4 h-4" />
            In Action
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Works Everywhere You Browse
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Controls */}
          <div className="space-y-4">
            {SCREENSHOTS.map((shot, index) => (
              <motion.button
                key={shot.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${index === activeIndex
                  ? 'bg-white/[0.04] border-blue-500/20 shadow-lg shadow-blue-500/5'
                  : 'bg-transparent border-white/5 hover:border-white/10'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-sm font-semibold mb-1 ${index === activeIndex ? 'text-white' : 'text-zinc-500'
                      }`}>
                      {shot.title}
                    </h3>
                    <p className="text-xs text-zinc-600">{shot.subtitle}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-colors ${index === activeIndex ? 'text-blue-400' : 'text-zinc-700'
                    }`} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0F0F11]"
              >
                <div className="aspect-video relative">
                  <img
                    src={SCREENSHOTS[activeIndex].url}
                    alt={SCREENSHOTS[activeIndex].title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent" />

                  {/* Overlay UI */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-[10px] font-mono text-blue-400">
                        SideGPT Active
                      </div>
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      {SCREENSHOTS[activeIndex].subtitle}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative */}
            <div className="absolute -inset-4 bg-blue-500/5 rounded-2xl blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
