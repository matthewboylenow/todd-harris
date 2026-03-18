export const COMPANY = {
  name: 'Todd Harris Company',
  legalName: 'Todd Harris Inc.',
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
  email: 'njpools@toddharris.com',
  website: 'https://toddharris.com',
  storeWebsite: 'https://njpoolstore.com',
};

export const NAV_ITEMS = [
  {
    label: 'Services',
    href: '/services/aquatic',
    children: [
      { label: 'Aquatic Division', href: '/services/aquatic' },
      { label: 'Chemical Division', href: '/services/chemical' },
      { label: 'Construction', href: '/services/construction' },
      { label: 'Sauna & Steam', href: '/services/sauna-steam' },
      { label: 'Pool Lifts', href: '/services/pool-lifts' },
    ],
  },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICE_TYPES = [
  'General Inquiry',
  'Aquatic Service',
  'Chemical Supply',
  'Construction / Renovation',
  'Sauna & Steam',
  'Pool Lifts',
  'Commercial / Institutional',
];

export const SERVICE_REQUEST_TYPES = [
  'Equipment Repair',
  'Leak Detection',
  'Opening / Closing',
  'Chemical Service',
  'Pool Evaluation',
  'Other',
];

export const URGENCY_OPTIONS = [
  'Routine',
  'Soon (within a week)',
  'Urgent',
];
