import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { FEATURES } from '../../constants';

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest"
          >
            <Cpu className="w-4 h-4" />
            System Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Engineered for the AI Age
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              </div>

              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    {feature.label}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-xl">
                <div className="absolute top-0 right-0 w-px h-4 bg-gradient-to-b from-blue-500/20 to-transparent transform translate-x-0" />
                <div className="absolute top-0 right-0 h-px w-4 bg-gradient-to-l from-blue-500/20 to-transparent transform translate-y-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
