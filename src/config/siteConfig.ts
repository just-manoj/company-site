import type { AppInfo } from '../models/AppInfo'
import type { NavItem } from '../models/NavItem'
import type { ValueItem } from '../models/ValueItem'

export const siteConfig = {
  brandName: 'STRAWHAT',
  companyName: 'Strawhat Development and System',
  tagline: 'Small tools for intentional digital life.',
  email: 'jrdemanoj@gmail.com',
  phone: '+91 6369191976',
  address: 'Semmandalam, Cuddalore, Tamil Nadu, India',
  year: new Date().getFullYear(),
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Apps', path: '/apps' },
  { label: 'Contact', path: '/contact' },
]

export const footerLegalLinks: NavItem[] = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Use', path: '/terms' },
]

export const homeCopy = {
  eyebrow: 'SET SAIL WITH US',
  title: 'BUILD BOLD. STAY SIMPLE.',
  subtitle:
    'We craft focused mobile apps with an explorer’s heart — clear purpose, calm design, and room to grow.',
  ctaPrimary: 'Explore Apps',
  ctaSecondary: 'Our Story',
  journalEyebrow: 'DEVELOPER JOURNAL',
  journalTitle: 'NOTES FROM THE DECK',
  journalBody:
    'Every voyage starts with a problem worth solving. We ship small products, listen closely, and keep polishing until daily use feels natural.',
}

export const aboutCopy = {
  eyebrow: 'SHIP’S LOG',
  title: 'ABOUT STRAWHAT',
  intro:
    'Strawhat is an independent software studio building practical mobile tools for people who want less noise and more clarity.',
  philosophyEyebrow: 'PHILOSOPHY',
  philosophyTitle: 'WHY WE BUILD',
  philosophyBody:
    'Good software should feel like a trusted compass — dependable, readable, and ready when you need it. We avoid bloat and chase usefulness.',
  journeyEyebrow: 'THE JOURNEY',
  journeyTitle: 'FROM SKETCH TO SEA',
  journeyBody:
    'Ideas begin as rough maps. We prototype, test on real devices, and refine until the experience is steady across phones and tablets.',
  portEyebrow: 'HOME PORT',
  portTitle: 'WHERE WE ANCHOR',
  portBody:
    'Based in Chennai, we work remotely-first and stay close to the communities that use our apps every day.',
}

export const appsCopy = {
  eyebrow: 'TREASURE MAP · 02 FOUND',
  title: 'OUR APPS',
  subtitle:
    'Small, focused mobile tools built to make everyday digital life a little more intentional.',
  listEyebrow: 'THE TREASURE MAP',
  listTitle: "TREASURES WE'VE BUILT",
}

export const apps: AppInfo[] = [
  {
    id: 'pothum',
    name: 'Pothum',
    tagline: 'Habits that stick without the noise.',
    description:
      'Track simple daily routines with a calm interface. No clutter — just progress you can see.',
    features: ['Daily habit tracking', 'Gentle reminders', 'Offline-friendly'],
    accent: '#3d8bfd',
  },
  {
    id: 'paisabook',
    name: 'PaisaBook',
    tagline: 'Know where every rupee sails.',
    description:
      'A lightweight money journal for spending awareness. Record, review, and steer your budget.',
    features: ['Expense journal', 'Category insights', 'Simple reports'],
    accent: '#2f9e6a',
  },
]

export const values: ValueItem[] = [
  {
    title: 'Clarity',
    body: 'Interfaces stay readable. Features earn their place.',
  },
  {
    title: 'Craft',
    body: 'We polish details that make daily use feel smooth.',
  },
  {
    title: 'Honesty',
    body: 'No fake claims — just shipping useful tools.',
  },
]

export const contactCopy = {
  eyebrow: 'SIGNAL FLAGS',
  title: 'CONTACT',
  subtitle: 'Send a message and we will open your email app to finish sending.',
  nameLabel: 'Your name',
  emailLabel: 'Your email',
  messageLabel: 'Message',
  submitLabel: 'Open Email App',
  infoTitle: 'Reach us directly',
}

export const privacyCopy = {
  title: 'Privacy Policy',
  updated: 'Last updated: October 2026',
  sections: [
    {
      heading: 'What we collect',
      body: 'If you contact us by email, we receive the information you choose to send. Our public website does not require an account.',
    },
    {
      heading: 'How we use information',
      body: 'We use contact details only to reply to your message and improve our products when feedback is shared.',
    },
    {
      heading: 'Third parties',
      body: 'We do not sell personal information. Hosting providers may process basic technical logs needed to serve the website.',
    },
    {
      heading: 'Contact',
      body: `Questions about privacy can be sent to ${siteConfig.email}.`,
    },
  ],
}

export const termsCopy = {
  title: 'Terms of Use',
  updated: 'Last updated: October 2026',
  sections: [
    {
      heading: 'Using this site',
      body: 'This website shares information about Strawhat products and services. Content is provided for general information.',
    },
    {
      heading: 'Apps and availability',
      body: 'App features may change over time. Store listings and device support can vary by region and platform.',
    },
    {
      heading: 'Intellectual property',
      body: 'Brand marks, copy, and original artwork on this site belong to Strawhat unless otherwise noted.',
    },
    {
      heading: 'Contact',
      body: `For terms questions, email ${siteConfig.email}.`,
    },
  ],
}
