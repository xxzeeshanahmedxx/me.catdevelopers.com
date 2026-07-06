interface Track {
  title: string;
  artist: string;
}

const tracks: Track[] = [
  { title: 'Cold Winter', artist: 'Unknown' },
  { title: 'Dragon', artist: 'Unknown' },
  { title: 'Night Fury', artist: 'Unknown' },
  { title: 'Eid Takbeer', artist: 'Traditional' },
];

const interests = ['Coding', 'Gaming', 'Music', 'Cats', 'Tech'];

export default function Music() {
  return (
    <section id="music" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Vibes</p>
          <h2 className="section-heading text-[clamp(1.75rem,4vw,2.75rem)] mt-2">Music &amp; Interests</h2>
          <p className="section-subheading mx-auto mt-3">What I listen to, what I love</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {tracks.map((track, i) => (
            <div key={i} className="card-glow rounded-xl bg-elevated border border-border p-4 text-center reveal hover:border-accent/20 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent-muted flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <h3 className="font-display font-medium text-sm text-ink truncate">{track.title}</h3>
              <p className="text-[10px] text-ink-subtle truncate">{track.artist}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {interests.map((interest) => (
            <span key={interest} className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent-muted text-accent border border-border-accent">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
