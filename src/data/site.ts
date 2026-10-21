export const site = {
  name: 'Oxford The Global School',
  shortName: 'OTGS',
  city: 'Nanded',
  url: 'https://otgs.fun',
  officialUrl: 'https://oxfordtheglobalschool.com',
  repoUrl: 'https://github.com/piyushbodaa/otgs.fun',
  tagline: 'Rooted in values. Ready for the world.',
  motto: ['Perseverance', 'Omniscience'],
  description:
    'Oxford The Global School is a co-educational CBSE school in Nanded, Maharashtra, offering Pre-Primary to Grade 10 on a 7-acre green campus. Admissions open for 2026–27.',
  society: 'Shri Gyan Saraswati Education Society',
  legacyYear: 1994,
  affiliationNo: '1130737',
  udise: '27150105803',
  admissionsYear: '2026–27',
  address: {
    line1: 'At Post Puyni, Nilla Road',
    city: 'Nanded',
    state: 'Maharashtra',
    postalCode: '431605',
    country: 'IN',
  },
  phones: [
    { label: '+91 93224 13340', href: 'tel:+919322413340' },
    { label: '+91 93099 88709', href: 'tel:+919309988709' },
  ],
  whatsapp: '919322413340',
  email: 'oxfordtgsnnd@gmail.com',
  mapsUrl: 'https://maps.google.com/?q=Oxford+The+Global+School,+Nanded',
  mapsEmbed: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sOxford+The+Global+School,+Nanded!6i14',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/oxfordtheglobal', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/oxford_the_global_schools', icon: 'instagram' },
    { label: 'YouTube', href: 'https://www.youtube.com/@oxfordtheglobalschool6137', icon: 'youtube' },
  ],
  branches: ['Puyni', 'Kautha', 'New Mondha', 'Tirumala', 'Ardhapur'],
  grades: [
    'Pre-Primary · KG',
    'Pre-Primary · LKG',
    'Pre-Primary · UKG',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10',
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
};

export const nav: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about', description: 'Three decades of purposeful education in Nanded' },
      { label: 'Vision & Values', href: '/about#vision', description: 'What we believe and what we stand for' },
      { label: 'Leadership', href: '/leadership', description: 'Messages from the people who guide OTGS' },
      { label: 'Mandatory Disclosure', href: '/mandatory-disclosure', description: 'CBSE public disclosure documents' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Curriculum & Approach', href: '/academics', description: 'The CBSE framework, taught for understanding' },
      { label: 'Schooling Stages', href: '/academics#stages', description: 'Pre-Primary, Primary, Middle and Secondary' },
      { label: 'Faculty', href: '/academics#faculty', description: 'Mentors who shape young minds' },
      { label: "Scholars' Prep Zone", href: '/academics/prep-zone', description: 'Olympiads, scholarships and competitive exams' },
    ],
  },
  {
    label: 'Life at OTGS',
    href: '/life',
    children: [
      { label: 'Activities & Clubs', href: '/life#activities', description: 'Music, arts, sport, leadership and more' },
      { label: 'House System', href: '/life#houses', description: 'Orchid · Tulip · Gladiolus · Snowdrop' },
      { label: 'Summer Camp', href: '/life#summer-camp', description: 'Unplug, explore, grow' },
      { label: 'Gallery', href: '/gallery', description: 'Moments from our campus' },
    ],
  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = [
  {
    title: 'Discover',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Academics', href: '/academics' },
      { label: "Scholars' Prep Zone", href: '/academics/prep-zone' },
      { label: 'Life at OTGS', href: '/life' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Admission Process', href: '/admissions' },
      { label: 'Required Documents', href: '/admissions#documents' },
      { label: 'Placement Interaction', href: '/admissions#placement' },
      { label: 'Book a School Tour', href: '/contact#enquire' },
      { label: 'Careers at OTGS', href: '/careers' },
      { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
    ],
  },
];

/** Official CBSE Class X board results, from the school's mandatory disclosure. */
export const boardResults = [
  { year: '2023–24', appeared: 210, passed: 209, percent: 99.52 },
  { year: '2024–25', appeared: 205, passed: 203, percent: 99.02 },
  { year: '2025–26', appeared: 199, passed: 198, percent: 99.49 },
];

/** Class X top rankers, 2025–26 (as published by the school). */
export const toppers = [
  { name: 'Annanya Surpur', score: 99 },
  { name: 'Khushi Selukar', score: 98.4 },
  { name: 'Shashank Sonarkar', score: 96.8 },
  { name: 'Mayank Bhanushali', score: 96.8 },
  { name: 'Naitik Jaiswal', score: 96.8 },
  { name: 'Keshav Sarda', score: 96.6 },
  { name: 'Manas More', score: 96.4 },
  { name: 'Sarthak Dange', score: 96.2 },
  { name: 'Parth Bidwai', score: 96 },
  { name: 'Riddhi Himte', score: 96 },
  { name: 'Saikrupa Pinoji', score: 95.4 },
  { name: 'Samruddhi Sonule', score: 95.4 },
  { name: 'Sneha Rachpod', score: 95.2 },
  { name: 'Ritesh More', score: 95 },
  { name: 'Prerna Mule', score: 95 },
  { name: 'Riesha More', score: 95 },
  { name: 'Shlok Kalaskar', score: 94.8 },
  { name: 'Vedant Wadikar', score: 94.8 },
];

export const testimonials = [
  {
    quote:
      'Our son Kartik has been a part of Oxford The Global School for the past three years, and the growth we’ve seen in him has been incredible. From his early days to now in Grade 4, he’s become more confident, responsible, and expressive. The school provides a nurturing environment with a great balance of academics and activities. We’re grateful for the constant support and dedication of the teachers.',
    name: 'Ranjana Jangid',
    relation: 'Parent of Kartik Jangid',
    grade: 'Grade 4',
  },
  {
    quote:
      'As a mother, choosing the right school for my son was a big decision, and I’m proud to say Oxford The Global School has exceeded my expectations. Now in Grade 9, he has grown into a confident, well-spoken, and focused young individual. The teachers are not only knowledgeable but also approachable and supportive. OTGS creates an environment where students feel safe, motivated, and prepared for the future.',
    name: 'Mrs. Neha Tiwari',
    relation: 'Parent of Rishav Tiwari',
    grade: 'Grade 9',
  },
  {
    quote:
      'My daughter just started her journey at Oxford The Global School, and I couldn’t be happier with the way she has settled in. Every day she comes home excited to share what she learned. The teachers are incredibly patient and caring, and the environment is perfect for young children. As a father, it gives me peace of mind knowing she’s in such safe and nurturing hands.',
    name: 'Rajesh Mehta',
    relation: 'Parent of Ruhi Mehta',
    grade: 'KG',
  },
  {
    quote:
      'We’re so happy to have chosen Oxford The Global School for our daughter. In just a year, we’ve seen a big difference in her confidence, communication, and love for learning. The teachers are warm, supportive, and truly care about each child. She looks forward to going to school every day, and as parents, that means everything to us. OTGS is a wonderful place for young minds to grow.',
    name: 'Firoz Khan',
    relation: 'Parent of Saniya Firoz Khan',
    grade: 'Grade 6',
  },
];
