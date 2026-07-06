interface Event {
  year: string;
  title: string;
  description: string;
}

const events: Event[] = [
  { year: '2009', title: 'Born', description: '15th June — Lahore, Pakistan' },
  { year: '2019', title: 'Started Coding', description: 'First lines of code, discovered the passion' },
  { year: '2023', title: 'First Project', description: 'Built and launched first real project' },
  { year: '2025', title: 'Cat Developers', description: 'Founded Cat Developers — building for Pakistani businesses' },
  { year: '2026', title: 'Today', description: 'Still building, still learning. 16 and counting.' },
];

export default function Timeline() {
  return (
    <section id="timeline" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Timeline</p>
          <h2 className="section-heading text-[clamp(1.75rem,4vw,2.75rem)] mt-2">My Story</h2>
          <p className="section-subheading mx-auto mt-3">The moments that shaped me</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border-strong -translate-x-1/2" />

          {events.map((event, i) => (
            <div key={i} className={`relative flex items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
              <div className={`hidden sm:block w-1/2 ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                <span className="font-display text-3xl sm:text-4xl font-bold text-accent/30">{event.year}</span>
              </div>

              <div className="flex-shrink-0 relative z-10">
                <div className="w-8 h-8 rounded-full bg-elevated border-2 border-accent/40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
              </div>

              <div className={`sm:w-1/2 reveal ${i % 2 === 0 ? 'sm:pl-0' : 'sm:pr-0'}`}>
                <div className="sm:hidden text-xs font-bold text-accent/60 mb-1">{event.year}</div>
                <h3 className="font-display font-semibold text-base sm:text-lg text-ink mb-1">{event.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
