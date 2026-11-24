import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId, RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Our Menu' },
  { id: 'story', label: 'Our Story' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSelect = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  const isTransparentHero = activePage === 'home' && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        isTransparentHero
          ? 'bg-gradient-to-b from-[#1B1817]/80 to-transparent text-[#FAF7F2]'
          : 'border-b border-[#E4DCCE] bg-[#FAF7F2]/95 text-[#1B1817] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-8 px-6 md:px-10">
        {/* Zone 1: Single clean wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('home')}
          className="cursor-pointer whitespace-nowrap shrink-0 font-serif text-2xl font-medium tracking-tight transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
        >
          {RESTAURANT_INFO.name}
        </button>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleSelect(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative cursor-pointer whitespace-nowrap shrink-0 py-1 text-sm font-medium tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059] ${
                  isTransparentHero
                    ? isActive
                      ? 'text-[#C5A059]'
                      : 'text-[#FAF7F2]/85 hover:text-[#FAF7F2]'
                    : isActive
                      ? 'text-[#4A131E]'
                      : 'text-[#5C534E] hover:text-[#1B1817]'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] origin-left transition-transform duration-200 ${
                    isTransparentHero ? 'bg-[#C5A059]' : 'bg-[#4A131E]'
                  } ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary CTA button + Mobile Menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('reservations')}
            className={`hidden cursor-pointer whitespace-nowrap shrink-0 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059] md:inline-flex ${
              activePage === 'reservations'
                ? 'bg-[#C5A059] text-[#1B1817]'
                : isTransparentHero
                  ? 'border border-[#C5A059]/70 bg-[#1B1817]/40 text-[#FAF7F2] hover:bg-[#C5A059] hover:text-[#1B1817]'
                  : 'bg-[#4A131E] text-[#FAF7F2] hover:bg-[#651D2B]'
            }`}
          >
            Reserve a Table
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#C5A059] md:hidden ${
              isTransparentHero ? 'text-[#FAF7F2]' : 'text-[#1B1817]'
            }`}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E4DCCE] bg-[#FAF7F2] px-6 py-6 text-[#1B1817] shadow-lg md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {[...NAV_LINKS, { id: 'reservations' as PageId, label: 'Reservations' }].map(
              (item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-[44px] w-full cursor-pointer items-center justify-between border-b border-[#E4DCCE]/60 px-2 text-left font-serif text-xl transition-colors ${
                      isActive ? 'font-semibold text-[#4A131E]' : 'text-[#1B1817] hover:text-[#4A131E]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="font-sans text-xs uppercase tracking-widest text-[#9A7735]">Active</span>}
                  </button>
                );
              },
            )}
          </nav>
          <div className="mt-5">
            <button
              type="button"
              onClick={() => handleSelect('reservations')}
              className="min-h-[44px] w-full cursor-pointer bg-[#4A131E] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF7F2] transition-colors hover:bg-[#651D2B]"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
