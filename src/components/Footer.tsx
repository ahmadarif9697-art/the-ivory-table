import { useState } from 'react';
import { PageId, RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleSocialClick = (platform: string) => {
    setSocialNotice(
      `${platform} profile link is disabled in this portfolio demonstration by SA Crown Web Design.`,
    );
    window.setTimeout(() => setSocialNotice(null), 4500);
  };

  return (
    <footer className="border-t border-[#2E2724] bg-[#1B1817] text-[#FAF7F2]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 border-b border-[#FAF7F2]/12 pb-14 md:grid-cols-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="cursor-pointer font-serif text-3xl font-medium tracking-tight text-[#FAF7F2] transition-opacity hover:opacity-85"
            >
              {RESTAURANT_INFO.name}
            </button>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#FAF7F2]/70">
              {RESTAURANT_INFO.tagline} Contemporary fine dining celebrating heirloom Indian provenance and classical French discipline.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.14em] text-[#C5A059]">
              <button
                type="button"
                onClick={() => handleSocialClick('Instagram')}
                className="cursor-pointer py-1 transition-colors hover:text-[#FAF7F2]"
              >
                Instagram
              </button>
              <span aria-hidden="true" className="text-[#FAF7F2]/25">/</span>
              <button
                type="button"
                onClick={() => handleSocialClick('Facebook')}
                className="cursor-pointer py-1 transition-colors hover:text-[#FAF7F2]"
              >
                Facebook
              </button>
              <span aria-hidden="true" className="text-[#FAF7F2]/25">/</span>
              <button
                type="button"
                onClick={() => handleSocialClick('Editorial Journal')}
                className="cursor-pointer py-1 transition-colors hover:text-[#FAF7F2]"
              >
                Journal
              </button>
            </div>
            {socialNotice && (
              <p
                role="status"
                className="mt-3 text-xs leading-relaxed text-[#C5A059]"
              >
                {socialNotice}
              </p>
            )}
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#C5A059]">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#FAF7F2]/75">
              {(
                [
                  ['home', 'Home'],
                  ['menu', 'Our Menu'],
                  ['story', 'Our Story'],
                  ['gallery', 'Gallery'],
                  ['reservations', 'Reservations'],
                  ['contact', 'Contact'],
                ] as [PageId, string][]
              ).map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(id)}
                    className="cursor-pointer py-0.5 transition-colors hover:text-[#FAF7F2]"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Fictional Location & Contact */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#C5A059]">
              Example Location
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#FAF7F2]/75">
              <p>{RESTAURANT_INFO.fictionalAddress}</p>
              <p className="tabular-nums">{RESTAURANT_INFO.fictionalPhone}</p>
              <p>{RESTAURANT_INFO.fictionalEmail}</p>
            </div>
          </div>

          {/* Hours Column */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#C5A059]">
              Service Hours
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              {RESTAURANT_INFO.hours.map((entry) => (
                <div key={entry.days}>
                  <dt className="font-medium text-[#FAF7F2]">{entry.days}</dt>
                  <dd className="text-[#FAF7F2]/65 tabular-nums">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Portfolio Requirement Note */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-[#FAF7F2]/55 md:flex-row md:items-center">
          <p>{RESTAURANT_INFO.portfolioCredit}</p>
          <p>Demo Interface Only · Illustrative Pricing in INR (₹)</p>
        </div>
      </div>
    </footer>
  );
}
