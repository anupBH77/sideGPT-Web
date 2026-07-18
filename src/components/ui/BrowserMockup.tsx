import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Command, Sparkles } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

export const BrowserMockup = () => {
  const [activeProvider, setActiveProvider] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [streamedText, setStreamedText] = useState('');
  const fullText = "I can help you analyze this repository. It appears to be a React-based Chrome extension that allows multi-AI chat within the browser sidebar. The architecture uses a content script to inject the UI and a background service worker to handle cross-origin requests to the AI providers.";

  const providers = [
    { name: 'ChatGPT', color: 'bg-emerald-500', icon: 'GPT' },
    { name: 'Claude', color: 'bg-orange-500', icon: 'C' },
    { name: 'Gemini', color: 'bg-blue-500', icon: 'G' },
    { name: 'Grok', color: 'bg-zinc-500', icon: 'X' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProvider((prev) => (prev + 1) % providers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    setStreamedText('');
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setStreamedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
          setStreamedText('');
        }, 4000);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [activeProvider]);

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0F0F11] shadow-2xl shadow-blue-500/5">
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/30" />
        </div>
        <div className="flex-1 mx-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-zinc-500">
            <Globe className="w-3 h-3" />
            github.com/caiyongji/ChatMultiAI
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1 rounded hover:bg-white/5 text-zinc-500"
        >
          <Command className="w-3 h-3" />
        </button>
      </div>

      <div className="flex h-[400px]">
        {/* Main Content Area */}
        <div className="flex-1 p-6 space-y-4 overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <FiGithub className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">ChatMultiAI</div>
              <div className="text-xs text-zinc-500 font-mono">Chrome Extension</div>
            </div>
          </div>

          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-2 bg-white/5 rounded w-3/4" />
              <div className="h-2 bg-white/5 rounded w-1/2" />
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="border-l border-white/5 bg-[#0A0A0C] flex flex-col overflow-hidden"
            >
              {/* Sidebar Header */}
              <div className="p-4 border-b border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Providers</span>
                  <Sparkles className="w-3 h-3 text-blue-400" />
                </div>
                <div className="flex gap-2">
                  {providers.map((p, i) => (
                    <button
                      key={p.name}
                      onClick={() => setActiveProvider(i)}
                      className={`relative flex-1 py-2 rounded-md text-[10px] font-mono font-medium transition-all ${i === activeProvider
                          ? 'bg-white/10 text-white border border-white/10'
                          : 'text-zinc-600 hover:text-zinc-400 border border-transparent'
                        }`}
                    >
                      {p.icon}
                      {i === activeProvider && (
                        <motion.div
                          layoutId="activeProvider"
                          className="absolute inset-0 border border-blue-500/30 rounded-md"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[8px] text-blue-400 font-bold">
                    U
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-2 text-[11px] text-zinc-300 border border-white/5">
                    Analyze this repo for me
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className={`w-6 h-6 rounded-full ${providers[activeProvider].color} flex items-center justify-center text-[8px] text-white font-bold`}>
                    {providers[activeProvider].icon}
                  </div>
                  <div className="flex-1 bg-blue-500/5 rounded-lg p-3 text-[11px] text-zinc-300 border border-blue-500/10 relative">
                    <span className="font-mono leading-relaxed">{streamedText}</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-1.5 h-3 bg-blue-400 ml-0.5 align-middle"
                    />

                    {/* Glow effect */}
                    <div className="absolute -inset-px bg-blue-500/5 rounded-lg blur-sm -z-10" />
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 border-t border-white/5">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-[11px] text-zinc-500 font-mono">
                  <span className="flex-1">Message {providers[activeProvider].name}...</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded border border-zinc-700 flex items-center justify-center text-[6px]">⌘</div>
                    <div className="w-3 h-3 rounded border border-zinc-700 flex items-center justify-center text-[6px]">↵</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
