import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiChrome, FiGithub } from 'react-icons/fi';

export const CTASection = () => {
  return (
    <section className="relative py-32 z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-16 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Ready to Upgrade Your{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Browser?
                </span>
              </h2>
              <p className="text-zinc-400 max-w-lg mx-auto">
                Join thousands of developers and knowledge workers who have already transformed their browsing experience. Free and open source.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="https://sidegpt.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold text-sm hover:bg-zinc-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiChrome className="w-5 h-5" />
                Add to Chrome — It's Free
              </motion.a>

              <motion.a
                href="https://github.com/caiyongji/ChatMultiAI"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4 opacity-50" />
              </motion.a>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs text-zinc-600 font-mono">
              <span>MIT License</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>v2.0.1</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>Chrome 120+</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
