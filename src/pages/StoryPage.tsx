import { ArrowRight } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import { IMAGES, PageId, RESTAURANT_INFO } from '../data/restaurantData';

interface StoryPageProps {
  onNavigate: (page: PageId) => void;
}

const PILLARS = [
  {
    index: '01',
    title: 'Micro-Seasonal Indian Terroir',
    body: 'We partner directly with single-origin spice cultivators in Pampore, wild mushroom foragers in Kashmir, and artisanal cheesemakers in the Nilgiris. Ingredients travel directly from harvest to our cold larder within 36 hours.',
  },
  {
    index: '02',
    title: 'Patience & Classical Reduction',
    body: 'Stocks simmer for twenty-four hours over gentle embers; sauces are mounted tableside with cultured butter and cold-pressed botanical oils rather than heavy creams, achieving clarity and depth without heaviness.',
  },
  {
    index: '03',
    title: 'Tactile Craft & Acoustic Calm',
    body: 'From hand-thrown stoneware fired in Pondicherry to cut-crystal stemware and unhurried 42-seat spacing, every surface is chosen to invite quiet conversation and unhurried presence.',
  },
];

export function StoryPage({ onNavigate }: StoryPageProps) {
  return (
    <div className="pt-24">
      {/* Editorial Intro */}
      <section className="border-b border-[#E4DCCE] bg-[#F2ECE2] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
            Heritage &amp; Philosophy
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl font-normal leading-[1.08] text-[#1B1817] sm:text-6xl">
            The Quiet Theatre of Hospitality
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5C534E]">
            Conceived as an antidote to theatrical, rushed fine dining, {RESTAURANT_INFO.name} celebrates stillness, culinary restraint, and the dialogue between regional Indian ingredients and classical European craft.
          </p>
        </div>
      </section>

      {/* Architectural Dining Room Essay */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="border border-[#E4DCCE]">
              <EditorialImage
                src={IMAGES.heroDiningRoom}
                alt="Architectural interior of The Ivory Table dining salon"
                aspectClass="aspect-[16/10]"
              />
            </div>
            <p className="mt-3 font-serif text-xs italic text-[#5C534E]">
              Fig. 01 — The main dining salon dressed in raw ivory linen and deep walnut arches prior to evening service.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <h2 className="font-serif text-3xl font-normal text-[#1B1817] sm:text-4xl">
              An Intimate Room Built for Evening Light
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5C534E] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-5xl first-letter:font-medium first-letter:text-[#4A131E]">
              When dusk settles over the courtyard, brass table lamps cast warm pools of light across hand-pressed ivory linens while the rest of the room recedes into soft burgundy shadow. Only fourteen tables are set each evening.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#5C534E]">
              We believe great dining rooms should never shout. Acoustic drapery, wide spacing between banquettes, and seamless service rhythms allow guests to savour both the company at their table and the quiet nuance on the plate.
            </p>
          </div>
        </div>
      </section>

      {/* Fictional Chef Profile */}
      <section className="border-y border-[#E4DCCE] bg-[#1B1817] text-[#FAF7F2]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="border border-[#C5A059]/30 p-2">
              <EditorialImage
                src={IMAGES.chefPortrait}
                alt="Portrait of Chef Aaravendra Kulkarni in the kitchen"
                aspectClass="aspect-[3/4]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              Chef-Patron Profile
            </p>
            <h2 className="mt-3 font-serif text-4xl font-normal text-[#FAF7F2] sm:text-5xl">
              {RESTAURANT_INFO.chefName}
            </h2>
            <p className="mt-2 text-sm text-[#C5A059]">
              {RESTAURANT_INFO.chefTitle} <span aria-hidden="true">·</span> Fictional Culinary Persona
            </p>

            <div className="mt-7 space-y-4 text-base leading-relaxed text-[#FAF7F2]/80">
              <p>
                Born into a family of botanical spice merchants in Pune, Chef Aaravendra Kulkarni spent a decade honing classical sauce work and charcuterie in Lyon before apprenticing in Kyoto&apos;s kaiseki kitchens—where he learned the discipline of seasonal restraint.
              </p>
              <p>
                Returning to India to establish The Ivory Table, his cuisine avoids fusion clichés. Instead, it treats Kashmir morels, Malabar coastal catch, and heritage grains with the reverence of haute cuisine—allowing smoke, acidity, and slow-simmered jus to carry the narrative.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#FAF7F2]/15 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#C5A059]">Formation</p>
                <p className="mt-1 text-sm text-[#FAF7F2]">Lyon &amp; Kyoto</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#C5A059]">Focus</p>
                <p className="mt-1 text-sm text-[#FAF7F2]">Heirloom Botanicals</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#C5A059]">Menu Rhythm</p>
                <p className="mt-1 text-sm text-[#FAF7F2]">Four Micro-Seasons</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Ingredient Quality */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
            Kitchen Ethos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-normal text-[#1B1817] sm:text-5xl">
            Ingredient Provenance &amp; Craft
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="border border-[#E4DCCE] bg-[#FAF7F2] p-8"
            >
              <p className="font-serif text-3xl text-[#C5A059] tabular-nums">
                {pillar.index}.
              </p>
              <h3 className="mt-4 font-serif text-2xl font-medium text-[#1B1817]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5C534E]">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-[#E4DCCE] pt-10">
          <p className="font-serif text-2xl italic text-[#1B1817]">
            Explore how this philosophy translates to tonight&apos;s tasting menu.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => onNavigate('menu')}
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 border border-[#1B1817] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817] transition-colors hover:bg-[#1B1817] hover:text-[#FAF7F2]"
            >
              <span>Browse Our Menu</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('reservations')}
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 bg-[#4A131E] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF7F2] transition-colors hover:bg-[#651D2B]"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
