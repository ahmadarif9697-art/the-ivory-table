export type PageId = 'home' | 'menu' | 'story' | 'gallery' | 'reservations' | 'contact';

export type MenuCategory = 'Starters' | 'Main Course' | 'Desserts' | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  priceInr: number;
  description: string;
  dietaryNote: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Culinary' | 'Dining Room' | 'Lounge & Cellar';
  figureLabel: string;
  caption: string;
  image: string;
  aspectClass: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  guestName: string;
  guestRole: string;
  occasion: string;
}

export const IMAGES = {
  heroDiningRoom: '/src/assets/images/hero_dining_room_1795524892889.jpg',
  atmosphereBar: '/src/assets/images/dining_atmosphere_bar_1795524894239.jpg',
  truffleVeloute: '/src/assets/images/dish_truffle_veloute_1795524894103.jpg',
  saffronLamb: '/src/assets/images/dish_saffron_lamb_1795524893974.jpg',
  scallopsCitrus: '/src/assets/images/dish_scallops_citrus_1795524895162.jpg',
  chocolateGold: '/src/assets/images/dish_chocolate_gold_1795524895107.jpg',
  saffronElixir: '/src/assets/images/beverage_saffron_elixir_1795524896341.jpg',
  chefPortrait: '/src/assets/images/chef_portrait_kitchen_1795524897283.jpg',
} as const;

export const RESTAURANT_INFO = {
  name: 'The Ivory Table',
  tagline: 'An Experience Beyond Dining.',
  chefName: 'Chef Aaravendra Kulkarni',
  chefTitle: 'Chef-Patron & Culinary Director',
  fictionalAddress: '14 Lavelle Crescent, Rosewood Quarter, Bengaluru 560001',
  fictionalAddressNote: 'Fictional Example Address for Portfolio Demonstration',
  fictionalPhone: '+91 80 4000 0192',
  fictionalEmail: 'concierge@ivorytable-demo.example',
  hours: [
    { days: 'Tuesday – Friday', time: '18:30 – 23:30 (Dinner Service)' },
    { days: 'Saturday – Sunday', time: '17:30 – 23:45 (Lounge & Dinner)' },
    { days: 'Monday', time: 'Closed for Cellar & Kitchen Prep' },
  ],
  portfolioCredit: 'A fictional restaurant concept designed by SA Crown Web Design.',
} as const;

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'starter-truffle-veloute',
    name: 'Himalayan Morel & Black Truffle Velouté',
    category: 'Starters',
    priceInr: 1450,
    description:
      'Velvety wild porcini and Kashmir morel broth finished with cold-pressed tarragon oil, crisp brioche tuile, and shaved winter Périgord truffle.',
    dietaryNote: 'Vegetarian · Signature Starter',
    featured: true,
    image: IMAGES.truffleVeloute,
    imageAlt: 'Wild mushroom and black truffle velouté in an ivory porcelain bowl',
  },
  {
    id: 'starter-scallops',
    name: 'Pan-Seared Atlantic Scallops & Charred Citrus',
    category: 'Starters',
    priceInr: 1950,
    description:
      'Caramelized diver scallops resting on smoked cauliflower silk, Meyer lemon beurre blanc, Oscietra caviar pearls, and wild fennel fronds.',
    dietaryNote: 'Seafood · Gluten-Free',
    featured: true,
    image: IMAGES.scallopsCitrus,
    imageAlt: 'Seared Atlantic scallops topped with caviar and micro fennel',
  },
  {
    id: 'starter-burrata',
    name: 'Heirloom Fig, Smoked Burrata & Aged Balsamic',
    category: 'Starters',
    priceInr: 1250,
    description:
      'Hand-pulled artisan burrata lightly smoked over applewood, paired with roasted black mission figs, toasted pistachios, and 18-year Modena reduction.',
    dietaryNote: 'Vegetarian · Contains Tree Nuts',
  },
  {
    id: 'starter-tartare',
    name: 'Chargrilled Malabar Lobster Medallion',
    category: 'Starters',
    priceInr: 2250,
    description:
      'Butter-poached coastal lobster lightly kissed by binchotan charcoal, served with fermented mango emulsion and crisp tapioca.',
    dietaryNote: 'Shellfish · Gluten-Free',
  },

  // Main Course
  {
    id: 'main-saffron-lamb',
    name: 'Herb-Crusted Deccan Lamb Loin & Saffron Jus',
    category: 'Main Course',
    priceInr: 3450,
    description:
      'Pasture-raised lamb loin seared medium-rare in rosemary crust, accompanied by Pampore saffron reduction, charred heirloom carrots, and parsnip silk.',
    dietaryNote: 'Signature Main · Gluten-Free',
    featured: true,
    image: IMAGES.saffronLamb,
    imageAlt: 'Herb-crusted sliced lamb loin with saffron jus and roasted heirloom carrots',
  },
  {
    id: 'main-sea-bass',
    name: 'Miso-Glazed Chilean Sea Bass & Champagne Fumet',
    category: 'Main Course',
    priceInr: 3650,
    description:
      'Slow-roasted fillet with delicate white miso caramelization, braised baby leeks, sea asparagus, and saffron-champagne velouté.',
    dietaryNote: 'Seafood · Chef Selection',
  },
  {
    id: 'main-celeriac',
    name: 'Salt-Baked Celeriac & Wild Truffle Mille-Feuille',
    category: 'Main Course',
    priceInr: 2450,
    description:
      'Thinly laminated roasted celeriac and aged Comté layered with black garlic jus, crispy sage leaves, and hazelnut praline crumble.',
    dietaryNote: 'Vegetarian · Contains Dairy & Nuts',
  },
  {
    id: 'main-duck',
    name: 'Five-Spice Dry-Aged Duck Breast & Mulberry Glaze',
    category: 'Main Course',
    priceInr: 3150,
    description:
      'Fourteen-day aged duck roasted crisp, served alongside charred radicchio, cardamom parsnip purée, and spiced Mahabaleshwar mulberry jus.',
    dietaryNote: 'Poultry · Gluten-Free',
  },

  // Desserts
  {
    id: 'dessert-chocolate-gold',
    name: '24K Gold & Single-Origin Idukki Cacao Mille-Feuille',
    category: 'Desserts',
    priceInr: 1250,
    description:
      'Crisp caramelized cacao feuilletine layered with 72% Idukki dark chocolate ganache, roasted Piedmont hazelnut praline, espresso anglaise, and edible gold leaf.',
    dietaryNote: 'Signature Dessert · Contains Nuts',
    featured: true,
    image: IMAGES.chocolateGold,
    imageAlt: 'Layered dark chocolate and hazelnut mille-feuille adorned with gold leaf',
  },
  {
    id: 'dessert-saffron-panna',
    name: 'Cardamom Bean Custard & Poached Darjeeling Pear',
    category: 'Desserts',
    priceInr: 980,
    description:
      'Silky green-cardamom crème caramel accompanied by wine-poached orchard pear, honeycomb tuile, and Madagascar vanilla bean gelato.',
    dietaryNote: 'Vegetarian · Gluten-Free Option',
  },
  {
    id: 'dessert-rose-tart',
    name: 'Damask Rose, Pistachio & Mascarpone Tartlet',
    category: 'Desserts',
    priceInr: 1050,
    description:
      'Delicate almond sablé shell filled with Kannauj rose-scented mascarpone mousse, raspberry confit, and toasted Iranian pistachios.',
    dietaryNote: 'Vegetarian · Contains Nuts',
  },

  // Beverages
  {
    id: 'bev-hibiscus-elixir',
    name: 'The Burgundy Nocturne (House Signature)',
    category: 'Beverages',
    priceInr: 950,
    description:
      'Small-batch botanical distillate infused with dried crimson hibiscus, charred rosemary, blood orange peel, and aged juniper bitters.',
    dietaryNote: 'Available Zero-Proof (₹680) · Signature Pour',
    featured: true,
    image: IMAGES.saffronElixir,
    imageAlt: 'Deep burgundy botanical drink in a crystal coupe garnished with rosemary',
  },
  {
    id: 'bev-saffron-spritz',
    name: 'Pampore Saffron & White Peach Aperitif',
    category: 'Beverages',
    priceInr: 890,
    description:
      'Chilled French blanc de blancs layered with delicate saffron-infused white peach cordial and misted lemon verbena oil.',
    dietaryNote: 'Sparkling Aperitif',
  },
  {
    id: 'bev-darjeeling-oolong',
    name: 'Single-Estate First Flush Cold-Brewed Pairing',
    category: 'Beverages',
    priceInr: 620,
    description:
      'Eighteen-hour cold extraction of heritage Darjeeling spring leaves served in crystal stemware with crisp elderflower mist.',
    dietaryNote: 'Zero-Proof · Tasting Pairing',
  },
  {
    id: 'bev-sommelier-flight',
    name: 'Sommelier Reserve Cellar Flight (Four Pours)',
    category: 'Beverages',
    priceInr: 4200,
    description:
      'Four curated 75ml pours spanning vintage grower Champagne, Burgundy Chardonnay, Barolo, and late-harvest Sauternes.',
    dietaryNote: 'Curated Wine Flight',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Main Ivory Dining Salon',
    category: 'Dining Room',
    figureLabel: 'Fig. 01',
    caption: 'Walnut architectural arches, burgundy velvet banquettes, and warm brass lamps dressed for evening service.',
    image: IMAGES.heroDiningRoom,
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'gal-2',
    title: 'Herb-Crusted Deccan Lamb Loin',
    category: 'Culinary',
    figureLabel: 'Fig. 02',
    caption: 'Sliced medium-rare at the pass with Pampore saffron jus and charred heirloom roots.',
    image: IMAGES.saffronLamb,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-3',
    title: 'The Burgundy Marble Bar & Vault',
    category: 'Lounge & Cellar',
    figureLabel: 'Fig. 03',
    caption: 'Pre-dinner aperitifs poured beneath backlit amber oak shelving and our climate-controlled wine vault.',
    image: IMAGES.atmosphereBar,
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'gal-4',
    title: 'Morel & Winter Truffle Velouté',
    category: 'Culinary',
    figureLabel: 'Fig. 04',
    caption: 'Hand-thrown stoneware bowl holding cold-pressed herb oil and crisp brioche tuile.',
    image: IMAGES.truffleVeloute,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-5',
    title: 'Seared Atlantic Scallops',
    category: 'Culinary',
    figureLabel: 'Fig. 05',
    caption: 'Caramelized scallops nestled in smoked cauliflower cream and Oscietra caviar pearls.',
    image: IMAGES.scallopsCitrus,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-6',
    title: 'Chef Aaravendra at the Pass',
    category: 'Dining Room',
    figureLabel: 'Fig. 06',
    caption: 'Final precision plating under warm bronze pendants before courses reach the dining room.',
    image: IMAGES.chefPortrait,
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'gal-7',
    title: 'Idukki Cacao & 24K Gold Mille-Feuille',
    category: 'Culinary',
    figureLabel: 'Fig. 07',
    caption: 'Crisp chocolate pastry layers paired with espresso anglaise and salted caramel quenelle.',
    image: IMAGES.chocolateGold,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-8',
    title: 'The Burgundy Nocturne Coupe',
    category: 'Lounge & Cellar',
    figureLabel: 'Fig. 08',
    caption: 'Crimson hibiscus and charred rosemary botanical infusion served on Rosso Levanto marble.',
    image: IMAGES.saffronElixir,
    aspectClass: 'aspect-[4/3]',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'Every detail at The Ivory Table feels unhurried and deeply considered. From the first pour at the marble bar to the saffron lamb reduction, the pacing of the evening was unforgettable.',
    guestName: 'Meera Deshmukh',
    guestRole: 'Architectural Historian · Mumbai',
    occasion: 'Anniversary Tasting Menu',
  },
  {
    id: 'test-2',
    quote:
      'Rarely does a dining room achieve such acoustic calm alongside culinary precision. The Idukki cacao mille-feuille alone warrants a return visit.',
    guestName: 'Rohan & Claire Sengupta',
    guestRole: 'Art Collectors · Bengaluru',
    occasion: 'Evening À La Carte',
  },
  {
    id: 'test-3',
    quote:
      'Chef Kulkarni bridges classical French technique with quiet Indian provenance without a single theatrical gimmick. Thoughtful, restrained, and extraordinary.',
    guestName: 'Vikramaditya Nair',
    guestRole: 'Hospitality Critic · New Delhi',
    occasion: 'Seven-Course Pairing',
  },
];

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
