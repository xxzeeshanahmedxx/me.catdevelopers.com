import { useEffect, useRef, useState } from 'react';

function Ripple() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = document.createElement('div');
      el.className = 'fixed pointer-events-none z-[9999] rounded-full bg-accent/20';
      el.style.left = (e.clientX - 30) + 'px';
      el.style.top = (e.clientY - 30) + 'px';
      el.style.width = '60px';
      el.style.height = '60px';
      el.animate([
        { transform: 'scale(0)', opacity: 0.6 },
        { transform: 'scale(3.5)', opacity: 0 }
      ], { duration: 650, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' });
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 700);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  return null;
}

function Waveform() {
  return (
    <div className="fixed bottom-4 right-4 z-40 opacity-20 pointer-events-none hidden sm:block">
      <div className="flex items-end gap-[2px] h-4">
        {[3, 5, 4, 7, 5, 8, 6, 4, 7, 5, 3].map((h, i) => (
          <div
            key={i}
            className="w-[2px] rounded-full bg-accent animate-waveform"
            style={{
              height: `${h}px`,
              animationDelay: `${i * 0.12}s`,
              animationDuration: '2.4s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function CatEyes() {
  const ref = useRef<HTMLDivElement>(null);
  const [awake, setAwake] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAwake(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="inline-flex items-center gap-1.5 mx-auto w-fit">
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
        <path d="M2 14 C4 8, 8 4, 14 4 C20 4, 24 8, 26 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" className="text-ink-muted" />
        <line x1="4" y1="8" x2="8" y2="6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-ink-muted" />
        <line x1="20" y1="6" x2="24" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-ink-muted" />
        {awake ? (
          <>
            <circle cx="10" cy="12" r="2" fill="currentColor" className="text-ink-muted" />
            <circle cx="18" cy="12" r="2" fill="currentColor" className="text-ink-muted" />
          </>
        ) : (
          <>
            <line x1="8" y1="12.5" x2="12" y2="12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-ink-muted" />
            <line x1="16" y1="12.5" x2="20" y2="12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-ink-muted" />
          </>
        )}
      </svg>
    </div>
  );
}

export { Ripple, Waveform, CatEyes };
