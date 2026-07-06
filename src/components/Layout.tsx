import type { ReactNode } from 'react';
import { Ripple, Waveform, CatEyes } from './CatEffects';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Ripple />
      <Waveform />
      <div className="bg-mesh" />
      <div className="bg-dots" />
      <div className="bg-noise" />

      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/30 glass h-12 sm:h-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="font-display font-semibold text-xs sm:text-sm text-ink tracking-tight">Zeeshan</span>
          </a>
          <nav className="hidden sm:flex items-center gap-5">
            <a href="#gallery" className="text-ink-disabled hover:text-ink text-[11px] font-medium transition-colors duration-200">Gallery</a>
            <a href="#timeline" className="text-ink-disabled hover:text-ink text-[11px] font-medium transition-colors duration-200">Timeline</a>
            <a href="#projects" className="text-ink-disabled hover:text-ink text-[11px] font-medium transition-colors duration-200">Projects</a>
            <a href="#music" className="text-ink-disabled hover:text-ink text-[11px] font-medium transition-colors duration-200">Music</a>
            <a href="#contact" className="text-ink-disabled hover:text-ink text-[11px] font-medium transition-colors duration-200">Contact</a>
          </nav>
        </div>
      </header>

      <div className="pt-12 sm:pt-14">
        {children}
      </div>

      <footer className="border-t border-border/40 py-10 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <CatEyes />
          <p className="text-[11px] sm:text-xs text-ink-disabled mt-4">
            &copy; {new Date().getFullYear()} Zeeshan Ahmed
          </p>
        </div>
      </footer>
    </>
  );
}
