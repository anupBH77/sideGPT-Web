import { motion } from 'framer-motion';
import { Terminal, Globe, Box, Cpu, Code2, Sparkles, ChevronRight } from 'lucide-react';

export const ArchitectureSection = () => {
  const layers = [
    { id: 1, title: 'Browser Tab', subtitle: 'User Context', icon: <Globe className="w-4 h-4" />, color: 'border-blue-500/20' },
    { id: 2, title: 'SideGPT Sidebar', subtitle: 'Content Script', icon: <Box className="w-4 h-4" />, color: 'border-cyan-500/20' },
    { id: 3, title: 'Background Service', subtitle: 'Message Router', icon: <Cpu className="w-4 h-4" />, color: 'border-purple-500/20' },
    { id: 4, title: 'Provider Adapter', subtitle: 'API Gateway', icon: <Code2 className="w-4 h-4" />, color: 'border-pink-500/20' },
    { id: 5, title: 'AI Models', subtitle: 'ChatGPT / Claude / Gemini', icon: <Sparkles className="w-4 h-4" />, color: 'border-emerald-500/20' },
  ];

  return (
    <section id="architecture" className="relative py-32 z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest"
          >
            <Terminal className="w-4 h-4" />
            System Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            How It Works
          </motion.h2>
        </div>

        <div className="relative space-y-4">
          {/* Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-emerald-500/20 hidden md:block" />

          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center gap-6 md:pl-0"
            >
              <div className={`hidden md:flex w-16 h-16 rounded-xl border ${layer.color} bg-white/[0.02] items-center justify-center text-zinc-400 relative z-10`}>
                {layer.icon}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent" />
              </div>

              <div className="flex-1 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {layer.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                    Layer {layer.id}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 font-mono">
                  {layer.subtitle}
                </p>
              </div>

              {/* Connector Arrow */}
              {index < layers.length - 1 && (
                <motion.div
                  className="absolute left-8 top-full h-4 w-px hidden md:block"
                  style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }}
                >
                  <motion.div
                    animate={{ y: [0, 16] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                  >
                    <ChevronRight className="w-3 h-3 text-white/20 rotate-90" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
