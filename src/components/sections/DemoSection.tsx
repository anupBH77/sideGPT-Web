import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export const DemoSection = () => {
  const steps = [
    { id: 1, title: 'Current Website', desc: 'Browsing any page' },
    { id: 2, title: 'Open SideGPT', desc: 'Cmd+Shift+S or click icon' },
    { id: 3, title: 'Choose AI', desc: 'Select your provider' },
    { id: 4, title: 'Ask Question', desc: 'Natural language input' },
    { id: 5, title: 'Streaming Response', desc: 'Real-time answers' },
    { id: 6, title: 'Continue Browsing', desc: 'Stay in context' },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="relative py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest"
          >
            <Activity className="w-4 h-4" />
            Interactive Demo
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Seamless Workflow Integration
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`p-4 rounded-xl border transition-all duration-500 ${index === activeStep
                      ? 'bg-blue-500/5 border-blue-500/20 shadow-lg shadow-blue-500/5'
                      : 'bg-white/[0.02] border-white/5'
                    }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-colors ${index === activeStep
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-zinc-600'
                      }`}>
                      {step.id}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block flex-1 h-px bg-white/5" />
                    )}
                  </div>
                  <h3 className={`text-sm font-semibold mb-1 transition-colors ${index === activeStep ? 'text-white' : 'text-zinc-400'
                    }`}>
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow for active */}
                {index === activeStep && (
                  <motion.div
                    layoutId="activeStep"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-blue-500/20"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
