// Central image config. Replace Unsplash URLs with real client photography when available.
// All Unsplash images are free for commercial use (https://unsplash.com/license).
// Using specific photo IDs for consistency (not random).

export const IMAGES = {
  // Homepage hero - residential pool with East Coast feel, lush green surroundings
  hero: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=1920&q=80&auto=format',

  // Service cards - on-brand photography
  aquatic: '/images/residential.jpg',
  chemical: '/images/chemicals.jpg',
  construction: '/images/construction.jpg',
  saunaSteam: '/images/sauna.jpg',

  // Commercial section - larger commercial/hotel style pool
  commercial: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80&auto=format',

  // About page - team/work feel
  about: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format',

  // Service pages heroes
  serviceAquatic: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1400&q=80&auto=format',
  serviceChemical: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=80&auto=format',
  serviceConstruction: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format',
  serviceSauna: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&q=80&auto=format',
  servicePoolLifts: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1400&q=80&auto=format',

  // Resources
  resourcePoolOpen: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800&q=80&auto=format',
  resourceFilter: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80&auto=format',
  resourceBuying: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&auto=format',
  resourceSaltChlorine: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80&auto=format',

  // Service areas
  edison: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=1400&q=80&auto=format',
  middlesex: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=1400&q=80&auto=format',

  // Contact page
  contact: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format',
} as const;
