import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { COMPARISON_DATA } from '../../constants';

export const ComparisonSection = () => {
  return (
    <section id="compare" className="relative py-32 z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest"
          >
            <Check className="w-4 h-4" />
            Comparison Matrix
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Why SideGPT Wins
          </motion.h2>
        </div>

        <div className="rounded-xl border border-white/5 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/5">
            <div className="p-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">Feature</div>
            <div className="p-4 text-xs font-mono text-zinc-500 uppercase tracking-widest text-center">Traditional</div>
            <div className="p-4 text-xs font-mono text-blue-400 uppercase tracking-widest text-center bg-blue-500/5">
              SideGPT
            </div>
          </div>

          {/* Rows */}
          {COMPARISON_DATA.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${index % 2 === 0 ? 'bg-white/[0.01]' : ''
                }`}
            >
              <div className="p-4 text-sm text-zinc-300 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-zinc-600" />
                {row.feature}
              </div>
              <div className="p-4 flex items-center justify-center">
                {row.traditional ? (
                  <Check className="w-4 h-4 text-zinc-600" />
                ) : (
                  <X className="w-4 h-4 text-zinc-700" />
                )}
              </div>
              <div className="p-4 flex items-center justify-center bg-blue-500/[0.02]">
                {row.sidegpt ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: index * 0.05 + 0.2 }}
                  >
                    <Check className="w-4 h-4 text-cyan-400" />
                  </motion.div>
                ) : (
                  <X className="w-4 h-4 text-zinc-700" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
