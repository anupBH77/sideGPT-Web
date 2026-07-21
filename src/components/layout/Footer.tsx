import { Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center">
              <Terminal className="w-3 h-3 text-zinc-500" />
            </div>
            <span className="text-sm font-semibold text-zinc-500 font-mono">SideGPT</span>
          </div>


        </div>
      </div>
    </footer>
  );
};
