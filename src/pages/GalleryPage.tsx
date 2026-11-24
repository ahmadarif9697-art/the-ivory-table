import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

type GalleryFilter = 'All' | GalleryItem['category'];

const FILTERS: GalleryFilter[] = ['All', 'Culinary', 'Dining Room', 'Lounge & Cellar'];

export function GalleryPage() {
  const [filter, setFilter] = useState<GalleryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    filter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length,
        );
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="border-b border-[#E4DCCE] bg-[#F2ECE2] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
            Visual Archive
          </p>
          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="font-serif text-5xl font-normal tracking-tight text-[#1B1817] sm:text-6xl">
              Gallery &amp; Atmosphere
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-[#5C534E]">
              Select any photograph below to inspect courses, dining salon lighting, and cellar details in full view.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            role="tablist"
            aria-label="Gallery Categories"
            className="mt-10 flex flex-wrap items-center gap-2 border-t border-[#E4DCCE] pt-8"
          >
            {FILTERS.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => {
                    setFilter(cat);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[40px] cursor-pointer whitespace-nowrap px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                    active
                      ? 'bg-[#4A131E] text-[#FAF7F2]'
                      : 'border border-[#E4DCCE] bg-[#FAF7F2] text-[#5C534E] hover:border-[#4A131E] hover:text-[#1B1817]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <article key={item.id} className="group flex flex-col">
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`View ${item.title} in lightbox`}
                className="relative cursor-pointer overflow-hidden border border-[#E4DCCE] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A131E]"
              >
                <EditorialImage
                  src={item.image}
                  alt={item.title}
                  aspectClass="aspect-[4/3]"
                  className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-[#1B1817]/75 text-[#FAF7F2] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>

              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl font-medium text-[#1B1817]">
                  {item.title}
                </h2>
                <span className="shrink-0 text-[11px] uppercase tracking-[0.14em] text-[#9A7735]">
                  {item.figureLabel}
                </span>
              </div>
              <p className="mt-1 text-xs text-[#9A7735]">{item.category}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#5C534E]">{item.caption}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B1817]/95 p-4 md:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative flex w-full max-w-5xl flex-col bg-[#1B1817] text-[#FAF7F2]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#FAF7F2]/12 px-4 py-3 md:px-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[#C5A059] tabular-nums">
                {activeItem.figureLabel} <span aria-hidden="true">·</span> {activeItem.category}{' '}
                <span aria-hidden="true">·</span> {lightboxIndex + 1} / {filteredItems.length}
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center text-[#FAF7F2]/80 transition-colors hover:text-[#FAF7F2]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative flex max-h-[68vh] items-center justify-center overflow-hidden bg-black/40 p-2 md:p-6">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[62vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Footer Controls */}
            <div className="flex flex-col justify-between gap-4 border-t border-[#FAF7F2]/12 px-4 py-4 md:flex-row md:items-center md:px-6">
              <div>
                <h3 className="font-serif text-2xl text-[#FAF7F2]">{activeItem.title}</h3>
                <p className="mt-1 text-sm text-[#FAF7F2]/75">{activeItem.caption}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + filteredItems.length) % filteredItems.length,
                    )
                  }
                  aria-label="Previous image"
                  className="inline-flex h-11 cursor-pointer items-center gap-1 border border-[#FAF7F2]/25 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#FAF7F2] transition-colors hover:border-[#C5A059] hover:text-[#C5A059]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Prev</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                  }
                  aria-label="Next image"
                  className="inline-flex h-11 cursor-pointer items-center gap-1 border border-[#FAF7F2]/25 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#FAF7F2] transition-colors hover:border-[#C5A059] hover:text-[#C5A059]"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
