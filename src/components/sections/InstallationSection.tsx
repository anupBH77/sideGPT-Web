import { motion } from 'framer-motion';
import { Download, Settings, Box, CheckCircle } from 'lucide-react';
import extensionZip from '../../assets/sideGPT.zip';

const steps = [
  {
    icon: <Download className="w-6 h-6 text-blue-400" />,
    title: 'Download ZIP',
    description: 'Download the extension ZIP file from our repository and extract it to a folder on your computer.'
  },
  {
    icon: <Settings className="w-6 h-6 text-purple-400" />,
    title: 'Open Extensions',
    description: 'Open Chrome and navigate to chrome://extensions/ in your address bar.'
  },
  {
    icon: <Box className="w-6 h-6 text-cyan-400" />,
    title: 'Enable Developer Mode',
    description: 'Toggle the "Developer mode" switch in the top right corner of the extensions page.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    title: 'Load Unpacked',
    description: 'Click "Load unpacked" and select the folder where you extracted the ZIP file.'
  }
];

export const InstallationSection = () => {
  return (
    <section id="install" className="py-24 relative z-10 border-t border-white/5 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            How to <span className="text-zinc-500">Install</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Follow these simple steps to install SideGPT manually in your browser.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {index + 1}. {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href={extensionZip}
            download="SideGPT-Extension.zip"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold text-sm hover:bg-zinc-200 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download ZIP
          </a>
        </motion.div>
      </div>
    </section>)
}
