export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10 animate-fade-up">
        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-accent/30 ring-offset-2 ring-offset-bg shadow-lg shadow-accent/20">
          <img src="/zeeshan.jpg" alt="Zeeshan Ahmed" className="w-full h-full object-cover" />
        </div>

        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight mb-2">
          <span className="text-gradient-accent">Zeeshan Ahmed</span>
        </h1>

        <p className="text-ink-muted text-sm sm:text-base font-medium tracking-wide">
          16 · Lahore · Developer
        </p>

        <p className="text-ink-muted/70 text-sm sm:text-base mt-4 max-w-lg mx-auto leading-relaxed italic">
          &ldquo;A look back at who I was, what I did, what I loved.&rdquo;
        </p>

        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 pt-6 border-t border-border/40 max-w-sm mx-auto">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-ink font-display">16</div>
            <div className="text-[10px] sm:text-[11px] text-ink-subtle">Years Old</div>
          </div>
          <div className="w-px h-8 bg-border/40" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-ink font-display">Lahore</div>
            <div className="text-[10px] sm:text-[11px] text-ink-subtle">Location</div>
          </div>
          <div className="w-px h-8 bg-border/40" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-ink font-display">5+</div>
            <div className="text-[10px] sm:text-[11px] text-ink-subtle">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
