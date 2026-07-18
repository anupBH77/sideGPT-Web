import { motion } from 'framer-motion';
import { COLORS } from '../../constants';

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ backgroundColor: COLORS.bg }}>
      {/* Base Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${COLORS.border} 1px, transparent 1px),
            linear-gradient(to bottom, ${COLORS.border} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Fine Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${COLORS.border} 1px, transparent 1px),
            linear-gradient(to bottom, ${COLORS.border} 1px, transparent 1px)
          `,
          backgroundSize: '8px 8px',
        }}
      />

      {/* Scan Line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
      />

      {/* Glowing Dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-500/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
        }}
      />
    </div>
  );
};
