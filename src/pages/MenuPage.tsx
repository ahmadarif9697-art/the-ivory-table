import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import {
  MENU_ITEMS,
  MenuCategory,
  PageId,
  formatInr,
} from '../data/restaurantData';

interface MenuPageProps {
  onNavigate: (page: PageId) => void;
}

const CATEGORIES: ('All' | MenuCategory)[] = [
  'All',
  'Starters',
  'Main Course',
  'Desserts',
  'Beverages',
];

export function MenuPage({ onNavigate }: MenuPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | MenuCategory>('All');

  const visibleCategories: MenuCategory[] =
    selectedCategory === 'All'
      ? ['Starters', 'Main Course', 'Desserts', 'Beverages']
      : [selectedCategory];

  const featuredVisuals = MENU_ITEMS.filter((item) => item.image);

  return (
    <div className="pt-24">
      {/* Editorial Header */}
      <section className="border-b border-[#E4DCCE] bg-[#F2ECE2] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
            Autumn / Winter Carte
          </p>
          <div className="mt-3 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h1 className="max-w-2xl font-serif text-5xl font-normal tracking-tight text-[#1B1817] sm:text-6xl">
              Our Curated Menu
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-[#5C534E]">
              Every course is composed daily from small-farm harvests and coastal line-caught seafood. All prices below are illustrative in Indian Rupees (₹), inclusive of bespoke table service.
            </p>
          </div>

          {/* Interactive Filter Bar */}
          <div
            role="tablist"
            aria-label="Menu Categories"
            className="mt-10 flex flex-wrap items-center gap-2 border-t border-[#E4DCCE] pt-8"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[40px] cursor-pointer whitespace-nowrap px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-150 ${
                    active
                      ? 'bg-[#4A131E] text-[#FAF7F2]'
                      : 'border border-[#E4DCCE] bg-[#FAF7F2] text-[#5C534E] hover:border-[#4A131E] hover:text-[#1B1817]'
                  }`}
                >
                  {category === 'All' ? 'All Courses' : category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Tasting Strip */}
      <section className="mx-auto max-w-[1280px] px-6 pt-16 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {featuredVisuals.map((dish) => (
            <button
              key={dish.id}
              type="button"
              onClick={() => setSelectedCategory(dish.category)}
              className="group cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-[#4A131E]"
            >
              <div className="overflow-hidden border border-[#E4DCCE]">
                <EditorialImage
                  src={dish.image!}
                  alt={dish.imageAlt || dish.name}
                  aspectClass="aspect-[4/3]"
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[#9A7735]">
                {dish.category}
              </p>
              <p className="mt-1 font-serif text-lg leading-snug text-[#1B1817] group-hover:text-[#4A131E]">
                {dish.name}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Course Sections */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="space-y-20">
          {visibleCategories.map((category, sectionIndex) => {
            const items = MENU_ITEMS.filter((item) => item.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: sectionIndex * 0.05 }}
              >
                <div className="flex items-baseline justify-between border-b border-[#1B1817]/15 pb-4">
                  <h2 className="font-serif text-3xl font-normal text-[#1B1817] sm:text-4xl">
                    {category}
                  </h2>
                  <span className="text-xs uppercase tracking-[0.14em] text-[#9A7735] tabular-nums">
                    {items.length} Selections
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                  {items.map((item) => (
                    <article
                      key={item.id}
                      className="flex flex-col justify-between border-b border-[#E4DCCE] pb-8"
                    >
                      <div>
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-serif text-2xl font-medium text-[#1B1817]">
                            {item.name}
                          </h3>
                          <span className="shrink-0 font-sans text-base font-semibold text-[#4A131E] tabular-nums">
                            {formatInr(item.priceInr)}
                          </span>
                        </div>
                        <p className="mt-2.5 text-sm leading-relaxed text-[#5C534E]">
                          {item.description}
                        </p>
                      </div>
                      <p className="mt-4 text-xs text-[#9A7735]">{item.dietaryNote}</p>
                    </article>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Chef's Tasting Menu Highlight */}
        <div className="mt-20 grid grid-cols-1 items-center gap-10 border border-[#E4DCCE] bg-[#1B1817] p-8 text-[#FAF7F2] md:grid-cols-12 md:p-12">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              Chef&apos;s Seven-Course Degustation
            </p>
            <h2 className="mt-3 font-serif text-3xl font-normal sm:text-4xl">
              The Ivory Table Grand Tasting Journey
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#FAF7F2]/75">
              An unhurried two-and-a-half-hour progression from amuse-bouche through coastal shellfish, dry-aged poultry or botanical celeriac, and hand-crafted gold leaf patisserie. Optional Sommelier Wine Pairing or Single-Estate Tea Pairing available table-side.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 border-t border-[#FAF7F2]/15 pt-6 md:col-span-4 md:items-end md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div className="md:text-right">
              <p className="text-xs uppercase tracking-[0.14em] text-[#C5A059]">
                Per Guest (Illustrative)
              </p>
              <p className="mt-1 font-serif text-4xl text-[#FAF7F2] tabular-nums">
                ₹6,800
              </p>
              <p className="mt-1 text-xs text-[#FAF7F2]/60 tabular-nums">
                Wine Pairing +₹4,200 · Tea Pairing +₹1,900
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('reservations')}
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 bg-[#C5A059] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#1B1817] transition-colors hover:bg-[#D4B370]"
            >
              <span>Book Tasting Table</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
