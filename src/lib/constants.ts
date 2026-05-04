export const COMPANY = {
  name: 'Todd Harris Company',
  legalName: 'Todd Harris Co., Inc.',
  founded: 1975,
  address: {
    street: '2 Sutton Place',
    city: 'Edison',
    state: 'NJ',
    zip: '08817',
    full: '2 Sutton Place, Edison, NJ 08817',
  },
  phone: {
    main: '732-287-4443',
    mainFormatted: '(732) 287-4443',
    mainTel: 'tel:+17322874443',
  },
  email: 'sales@toddharris.com',
  website: 'https://toddharris.com',
  storeWebsite: 'https://njpoolstore.com',
  serviceArea: 'New Jersey and the five boroughs of New York City',
  serviceAreaShort: 'Serving New Jersey and New York City',
};

export const NAV_ITEMS = [
  {
    label: 'Services',
    href: '/services/aquatic',
    children: [
      { label: 'Aquatic Division', href: '/services/aquatic' },
      { label: 'Chemical Division', href: '/services/chemical' },
      { label: 'Renovation', href: '/services/renovation' },
      { label: 'Sauna & Steam', href: '/services/sauna-steam' },
      { label: 'Pool Lifts', href: '/services/pool-lifts' },
    ],
  },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Preventative Maintenance', href: '/preventative-maintenance' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICE_TYPES = [
  'General Inquiry',
  'Aquatic Service',
  'Chemical Supply',
  'Renovation',
  'Sauna & Steam',
  'Pool Lifts',
  'Waterproofing',
  'CPO / Preventative Maintenance',
  'Commercial / Institutional',
];

export const SERVICE_REQUEST_TYPES = [
  'Equipment Repair',
  'Leak Detection',
  'Opening / Closing',
  'Chemical Service',
  'Pool Evaluation',
  'CPO / Preventative Maintenance',
  'Waterproofing',
  'Other',
];

export const URGENCY_OPTIONS = [
  'Routine',
  'Soon (within a week)',
  'Urgent',
];
