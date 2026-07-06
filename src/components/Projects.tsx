interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  { name: 'Cat Developers', description: 'E-commerce stores for Pakistani businesses. COD + WhatsApp + admin panel.', tags: ['React', 'Vite', 'Cloudflare'], link: 'https://catdevelopers.com' },
  { name: 'My Balance', description: 'Personal finance tracker.', tags: ['JavaScript', 'Node.js'], link: '' },
  { name: 'Bulbul Box', description: 'A delivery/platform project.', tags: ['React', 'Tailwind'], link: 'https://bulbulbox.com' },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Projects</p>
          <h2 className="section-heading text-[clamp(1.75rem,4vw,2.75rem)] mt-2">Things I Built</h2>
          <p className="section-subheading mx-auto mt-3">Stuff I made, big and small</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div key={i} className="card-glow rounded-xl bg-elevated border border-border p-5 hover:border-accent/20 transition-all duration-300 reveal flex flex-col">
              <h3 className="font-display font-semibold text-base text-ink mb-2">{project.name}</h3>
              <p className="text-ink-muted text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent-muted text-accent">{tag}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-3 text-[11px] font-medium text-accent hover:text-accent-soft transition-colors">
                  Visit &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
