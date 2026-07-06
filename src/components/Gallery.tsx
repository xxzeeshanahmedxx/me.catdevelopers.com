import { useState } from 'react';

interface Photo {
  src: string;
  year: string;
  caption?: string;
}

const photos: Photo[] = [
  { src: '/gallery/photo1.webp', year: '2024', caption: 'Some memory' },
  { src: '/gallery/photo2.webp', year: '2025', caption: 'Another moment' },
  { src: '/gallery/photo3.webp', year: '2026', caption: 'Recent times' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const [idx, setIdx] = useState(0);

  const open = (photo: Photo, i: number) => {
    setLightbox(photo);
    setIdx(i);
  };

  const close = () => setLightbox(null);

  const prev = () => {
    const i = idx === 0 ? photos.length - 1 : idx - 1;
    setIdx(i);
    setLightbox(photos[i]);
  };

  const next = () => {
    const i = idx === photos.length - 1 ? 0 : idx + 1;
    setIdx(i);
    setLightbox(photos[i]);
  };

  return (
    <section id="gallery" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Gallery</p>
          <h2 className="section-heading text-[clamp(1.75rem,4vw,2.75rem)] mt-2">Moments</h2>
          <p className="section-subheading mx-auto mt-3">Photos through the years</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => open(photo, i)}
              className="group relative rounded-xl overflow-hidden aspect-square bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <img src={photo.src} alt={photo.caption || ''} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-2 left-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/60 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.year}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4" onClick={close}>
          <div className="relative max-w-3xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button onClick={close} className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm font-medium transition-colors">Close</button>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl transition-colors">&lsaquo;</button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl transition-colors">&rsaquo;</button>
            <img src={lightbox.src} alt="" className="w-full h-auto rounded-xl max-h-[85vh] object-contain" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/60 text-white/90">{lightbox.year}</span>
              {lightbox.caption && <span className="text-xs text-white/80">{lightbox.caption}</span>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
