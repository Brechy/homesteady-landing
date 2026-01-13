export const APP_NAME = 'Homesteady';

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#skill-levels' },
  { label: 'Compare', href: '#comparison' },
  { label: 'Our Story', href: '#creator' },
];

export const FEATURES = [
  {
    id: 'livestock',
    title: 'Never Miss a Beat',
    description: 'Track feedings, vet visits, breeding dates, daily care tasks, and milestones for every animal. Get gentle reminders before things slip through the cracks.',
    icon: 'Bird',
  },
  {
    id: 'garden',
    title: 'Plan Like a Pro',
    description: 'Plan your garden beds, track planting dates, know exactly when to harvest, and more. No more guessing, missed succession plantings, or forgotten seed starting tasks.',
    icon: 'Sprout',
  },
  {
    id: 'toxicity',
    title: 'Keep Them Safe',
    description: 'Instant alerts about plants, trees, and shrubs that are toxic to your specific animals. Take a picture of a plant on your property and identify it in real-time. Gives you peace of mind when expanding your property or introducing new species.',
    icon: 'ShieldCheck',
  },
  {
    id: 'seasonal',
    title: 'Know What to Do, When',
    description: 'Seasonal task lists customized to your climate, plants, and animals. The app tells you what needs attention so you don’t have to keep track of everything yourself.',
    icon: 'Calendar',
  },
  {
    id: 'journal',
    title: 'Build Your Knowledge Base',
    description: 'Document what works on YOUR land. Notes, photos, and observations that become invaluable over time.',
    icon: 'BookOpen',
  },
  {
    id: 'offline',
    title: 'Works in the Field',
    description: 'No signal? No problem. Full functionality offline, syncs when you are back in range. Built for real farm conditions.',
    icon: 'WifiOff',
  },
];

export const SKILL_LEVELS = [
  {
    level: 'Beginner',
    title: 'Just Getting Started',
    description: 'A few backyard chickens, a small garden bed, and big dreams.',
    examples: ['4-12 chickens', 'Container or raised bed garden', 'Learning the basics'],
    icon: 'Egg',
  },
  {
    level: 'Intermediate',
    title: 'Growing Your Operation',
    description: 'Multiple animal types, expanded gardens, maybe some fruit trees.',
    examples: ['Mixed poultry flock', 'Goats or sheep', 'Market garden plots', 'Orchard planning'],
    icon: 'Fence',
  },
  {
    level: 'Advanced',
    title: 'Full-Scale Homestead',
    description: 'A diverse operation with cattle, multiple enterprises, and year-round production.',
    examples: ['Cattle or pigs', 'CSA or market sales', 'Multiple barns/areas', 'Breeding programs'],
    icon: 'Warehouse',
  },
];

export const COMPARISON_FEATURES = [
  { feature: 'Works completely offline', homesteady: true, webTools: false, otherApps: false },
  { feature: 'Livestock & garden in one app', homesteady: true, webTools: false, otherApps: false },
  { feature: 'Enterprise-grade reliability', homesteady: true, webTools: true, otherApps: false },
  { feature: 'Mobile-first design', homesteady: true, webTools: false, otherApps: true },
  { feature: 'Toxicity warnings', homesteady: true, webTools: false, otherApps: false },
  { feature: 'Scales with your operation', homesteady: true, webTools: true, otherApps: false },
  { feature: 'Built by real homesteaders', homesteady: true, webTools: false, otherApps: false },
  { feature: 'Privacy-first (we sell software, not data)', homesteady: true, webTools: false, otherApps: false },
];

export const CREATOR_CREDENTIALS = [
  {
    title: 'Experienced Developer',
    description: 'Built by a seasoned software engineer with enterprise-level expertise. Your data is handled with care.',
    icon: 'Code2',
  },
  {
    title: '30+ Years in Tech',
    description: 'Technical project management, software engineering, and product development experience ensures a polished, reliable app that works how and when you need it.',
    icon: 'Award',
  },
  {
    title: 'Privacy First',
    description: 'We sell software, not your data. No ads, no tracking, no selling your information. Ever.',
    icon: 'Shield',
  },
];

export const TRUST_BADGES = [
  { label: 'Works Offline', icon: 'WifiOff' },
  { label: 'Privacy First', icon: 'Shield' },
  { label: 'Coming Soon', icon: 'Sparkles' },
];
