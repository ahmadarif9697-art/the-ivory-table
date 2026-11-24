import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import {
  IMAGES,
  MENU_ITEMS,
  PageId,
  RESTAURANT_INFO,
  TESTIMONIALS,
  formatInr,
} from '../data/restaurantData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HomePage({ onNavigate }: HomePageProps) {
  const signatureDishes = MENU_ITEMS.filter((item) => item.featured).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#1B1817] pt-24 text-[#FAF7F2]">
        <div className="absolute inset-0">
          <EditorialImage
            src={IMAGES.heroDiningRoom}
            alt="The Ivory Table main candlelit dining salon with burgundy velvet banquettes"
            aspectClass="h-full w-full"
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#1B1817]/92 via-[#1B1817]/48 to-[#1B1817]/40"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-28 md:px-10 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            className="max-w-3xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C5A059]">
              Seasonal Tasting &amp; À La Carte · Rosewood Quarter
            </p>
            <h1 className="mt-4 font-serif text-5xl font-normal leading-[1.06] tracking-tight text-[#FAF7F2] sm:text-6xl lg:text-7xl">
              {RESTAURANT_INFO.name}
            </h1>
            <p className="mt-4 font-serif text-2xl italic text-[#FAF7F2]/90 sm:text-3xl">
              {RESTAURANT_INFO.tagline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#FAF7F2]/80">
              An intimate 42-seat dining salon where heritage Indian botanicals meet classical French discipline, served beneath warm brass candlelight and unhurried hospitality.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => onNavigate('reservations')}
                className="inline-flex min-h-[46px] cursor-pointer items-center gap-3 bg-[#C5A059] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#1B1817] transition-colors duration-150 hover:bg-[#D4B370] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F2]"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('menu')}
                className="inline-flex min-h-[46px] cursor-pointer items-center gap-2 border-b border-[#FAF7F2]/40 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF7F2] transition-colors duration-150 hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                <span>Explore the Menu</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operational Utility Strip */}
      <section className="border-b border-[#E4DCCE] bg-[#F2ECE2]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 divide-y divide-[#E4DCCE] px-6 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-10">
          <div className="py-5 md:pr-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9A7735]">
              Evening Service
            </p>
            <p className="mt-1 text-sm text-[#1B1817] tabular-nums">Tue – Sun · 18:30 – 23:30</p>
          </div>
          <div className="py-5 md:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9A7735]">
              Tasting Journey
            </p>
            <p className="mt-1 text-sm text-[#1B1817] tabular-nums">Seven Courses · ₹6,800</p>
          </div>
          <div className="py-5 md:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9A7735]">
              Culinary Direction
            </p>
            <p className="mt-1 text-sm text-[#1B1817]">{RESTAURANT_INFO.chefName}</p>
          </div>
          <div className="py-5 md:pl-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9A7735]">
              Location Example
            </p>
            <p className="mt-1 text-sm text-[#1B1817]">Rosewood Quarter, Bengaluru</p>
          </div>
        </div>
      </section>

      {/* Signature Dishes Showcase */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E4DCCE] pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
              01. Culinary Highlights
            </p>
            <h2 className="mt-3 font-serif text-4xl font-normal tracking-tight text-[#1B1817] sm:text-5xl">
              Signature Courses of the Season
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('menu')}
            className="inline-flex cursor-pointer items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.16em] text-[#4A131E] transition-colors hover:text-[#9A7735] md:self-auto"
          >
            <span>View Complete Menu</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {signatureDishes.map((dish, idx) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: EASE_OUT }}
              className="group"
            >
              {dish.image && (
                <div className="overflow-hidden border border-[#E4DCCE]">
                  <EditorialImage
                    src={dish.image}
                    alt={dish.imageAlt || dish.name}
                    aspectClass="aspect-[4/3]"
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl font-medium text-[#1B1817] transition-colors group-hover:text-[#4A131E]">
                  {dish.name}
                </h3>
                <span className="shrink-0 font-sans text-sm font-semibold text-[#4A131E] tabular-nums">
                  {formatInr(dish.priceInr)}
                </span>
              </div>

              <p className="mt-2 text-xs text-[#9A7735]">
                {dish.category} <span aria-hidden="true">·</span> {dish.dietaryNote}
              </p>

              <p className="mt-3 max-w-prose text-sm leading-relaxed text-[#5C534E]">
                {dish.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Restaurant Atmosphere Section */}
      <section className="border-y border-[#E4DCCE] bg-[#F2ECE2]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:col-span-5 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
              02. Atmosphere &amp; Cellar
            </p>
            <h2 className="mt-3 font-serif text-4xl font-normal leading-tight text-[#1B1817] sm:text-5xl">
              Velvet Shadows, Marble &amp; Whispered Calm
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#5C534E]">
              Designed for evenings that refuse to be rushed. Acoustic walnut paneling softens conversation, while our Rosso Levanto marble lounge invites guests to linger over botanical infusions and rare cellar vintages before moving to the main salon.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[#E4DCCE] pt-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-[#9A7735]">
                  Dining Salon
                </dt>
                <dd className="mt-1 font-serif text-2xl text-[#1B1817] tabular-nums">
                  42 Seats
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-[#9A7735]">
                  Wine Vault
                </dt>
                <dd className="mt-1 font-serif text-2xl text-[#1B1817] tabular-nums">
                  340 Labels
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onNavigate('gallery')}
                className="inline-flex cursor-pointer items-center gap-2 border border-[#1B1817] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817] transition-colors hover:bg-[#1B1817] hover:text-[#FAF7F2]"
              >
                <span>Step Inside the Gallery</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="min-h-[360px] lg:col-span-7">
            <EditorialImage
              src={IMAGES.atmosphereBar}
              alt="The Ivory Table burgundy marble cocktail bar and oak wine cellar vault"
              aspectClass="h-full w-full lg:min-h-[540px]"
            />
          </div>
        </div>
      </section>

      {/* Chef's Philosophy Section */}
      <section className="bg-[#4A131E] text-[#FAF7F2]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="border border-[#C5A059]/30 p-2">
              <EditorialImage
                src={IMAGES.chefPortrait}
                alt="Chef Aaravendra Kulkarni garnishing a course at the pass"
                aspectClass="aspect-[3/4]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              03. The Chef&apos;s Philosophy
            </p>
            <h2 className="mt-3 font-serif text-4xl font-normal leading-tight text-[#FAF7F2] sm:text-5xl">
              &ldquo;Luxury is not excess on the plate—it is restraint, provenance, and the courage to let a single spice speak.&rdquo;
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#FAF7F2]/80">
              Led by {RESTAURANT_INFO.chefName}, our kitchen pairs hyper-seasonal harvests from small Indian growers—Pampore saffron, Idukki single-estate cacao, Kashmir black morels—with patient reductions and open-hearth precision honed in Lyon.
            </p>
            <p className="mt-4 text-sm font-medium text-[#C5A059]">
              {RESTAURANT_INFO.chefName} · {RESTAURANT_INFO.chefTitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => onNavigate('story')}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-3 border border-[#C5A059] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#FAF7F2] transition-colors hover:bg-[#C5A059] hover:text-[#1B1817]"
              >
                <span>Read Our Story</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
            04. Guest Impressions
          </p>
          <h2 className="mt-3 font-serif text-4xl font-normal text-[#1B1817] sm:text-5xl">
            Evenings Remembered
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.id}
              className="flex flex-col justify-between border border-[#E4DCCE] bg-[#FAF7F2] p-8"
            >
              <p className="font-serif text-xl italic leading-relaxed text-[#1B1817]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-[#E4DCCE] pt-5">
                <p className="text-sm font-semibold text-[#1B1817]">{item.guestName}</p>
                <p className="mt-1 text-xs text-[#5C534E]">
                  {item.guestRole} <span aria-hidden="true">·</span> {item.occasion}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Final Closing Invitation */}
        <div className="mt-20 border-t border-[#E4DCCE] pt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
            Evening Seating
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-4xl font-normal text-[#1B1817] sm:text-5xl">
            Join Us Around The Ivory Table
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#5C534E]">
            Preview our interactive reservation experience or browse seasonal courses curated for intimate celebrations.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => onNavigate('reservations')}
              className="inline-flex min-h-[46px] cursor-pointer items-center gap-3 bg-[#4A131E] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF7F2] transition-colors hover:bg-[#651D2B]"
            >
              <span>Reserve Your Evening</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
