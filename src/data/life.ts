import type { ImageMetadata } from 'astro';
import music from '@/assets/photos/activity-music.jpg';
import vocational from '@/assets/photos/activity-vocational.jpg';
import dance from '@/assets/photos/activity-dance.jpg';
import sports from '@/assets/photos/activity-sports.jpg';
import relational from '@/assets/photos/activity-relational.jpg';
import eco from '@/assets/photos/activity-eco.jpg';
import creativity from '@/assets/photos/creativity.jpg';
import reading from '@/assets/photos/reading.jpg';
import openMinds from '@/assets/photos/open-minds.jpg';
import bigDreams from '@/assets/photos/big-dreams.jpg';
import faculty from '@/assets/photos/faculty.jpg';
import football from '@/assets/photos/football.jpg';
import classroom from '@/assets/photos/classroom.jpg';
import scienceLab from '@/assets/photos/science-lab.jpg';
import computerLab from '@/assets/photos/computer-lab.jpg';

export type Activity = {
  id: string;
  name: string;
  icon: string;
  items: string[];
  image: ImageMetadata;
  alt: string;
};

export const activities: Activity[] = [
  {
    id: 'music',
    name: 'Music',
    icon: 'music',
    items: ['Choirs', 'Singing lessons'],
    image: music,
    alt: 'Students singing together on stage at the annual celebration',
  },
  {
    id: 'arts',
    name: 'Visual Arts & Craft',
    icon: 'palette',
    items: ['Drawing and painting', 'Digital and traditional art', 'Craft'],
    image: vocational,
    alt: 'Two young boys concentrating on a shape-sorting puzzle',
  },
  {
    id: 'dance',
    name: 'Dance & Theatre',
    icon: 'drama',
    items: ['Choreography in multiple dance styles', 'Staging a play', 'Lecture-demonstrations of art forms'],
    image: dance,
    alt: 'Young students in uniform performing expressive dance moves',
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: 'trophy',
    items: ['Football & volleyball', 'Cricket', 'Badminton', 'Yoga'],
    image: sports,
    alt: 'Students racing down the running track on the school sports ground',
  },
  {
    id: 'relational',
    name: 'Leadership & Service',
    icon: 'handshake',
    items: ['Student Council', 'Community service', 'Organising school events'],
    image: relational,
    alt: 'A student receiving a certificate from guests on stage',
  },
  {
    id: 'eco',
    name: 'Eco Champs',
    icon: 'sprout',
    items: ['Environmental monitoring team', 'Gardening', 'Recycling'],
    image: eco,
    alt: 'Children planting saplings in the school garden',
  },
];

export const houses = [
  {
    letter: 'O',
    name: 'Orchid',
    color: '#7a3e9d',
    soft: '#f1e8f6',
  },
  {
    letter: 'T',
    name: 'Tulip',
    color: '#c41e33',
    soft: '#fbeceb',
  },
  {
    letter: 'G',
    name: 'Gladiolus',
    color: '#d9822b',
    soft: '#fcf0e2',
  },
  {
    letter: 'S',
    name: 'Snowdrop',
    color: '#2f7fb8',
    soft: '#e6f1f9',
  },
];

export const weLove = [
  {
    title: 'Creativity',
    tagline: 'It’s where ideas take shape!',
    text: 'Students are encouraged to think outside the box, explore new concepts and develop innovative solutions through engaging classroom experiences.',
    image: creativity,
    alt: 'Students gathered around an anatomy model in the science lab',
  },
  {
    title: 'Lifelong learning',
    tagline: 'Every step is a step toward growth!',
    text: 'We cultivate a culture of curiosity where students ask questions, seek knowledge and build skills for life, through experiential learning, hands-on activities and discussion.',
    image: reading,
    alt: 'A student reading a science textbook at his desk',
  },
  {
    title: 'Open minds',
    tagline: 'Different perspectives make us stronger!',
    text: 'Through group activities, debates and collaborative projects, students share diverse viewpoints, respect other perspectives and learn to communicate effectively.',
    image: openMinds,
    alt: 'A young boy carefully placing cylinders into a wooden learning block',
  },
  {
    title: 'Big dreams',
    tagline: 'Ambition turns dreams into reality!',
    text: 'Whether a student wants to be a scientist, an artist, an entrepreneur or a leader, we provide the guidance and encouragement to turn goals into reality.',
    image: bigDreams,
    alt: 'A smiling student proudly holding up her medals',
  },
  {
    title: 'Our educators',
    tagline: 'Mentors who shape young minds!',
    text: 'Teachers at OTGS are mentors, guides and role models who make every child feel valued and supported, and who keep upgrading their craft.',
    image: faculty,
    alt: 'The OTGS faculty assembled for a group photograph',
  },
];

export const facilities = [
  {
    title: 'Football field',
    text: 'A huge, lush-green field: inspiration for our future Ronaldos and Messis.',
    image: football,
    alt: 'Boys chasing the ball during a football match on the school field',
  },
  {
    title: 'Classrooms',
    text: 'Bright, airy rooms where students are at the peak of their knowledge-absorbing potential.',
    image: classroom,
    alt: 'A bright, empty classroom with blue desks and large windows',
  },
  {
    title: 'Science lab',
    text: 'Where students experiment, experience, excel, and dream of becoming the next Einstein.',
    image: scienceLab,
    alt: 'Students examining a specimen together in the science laboratory',
  },
  {
    title: 'Computer lab',
    text: 'Where students code, create, innovate, and dream of becoming the next Turing.',
    image: computerLab,
    alt: 'Students working at desktop computers in the computer lab',
  },
];

export const summerCamp = [
  'Taekwondo & sports',
  'MasterChef: fireless cooking',
  'Water pool party',
  'Science experiments',
  'Best out of waste',
  'Music & dance',
  'Mental maths',
  'Farm visits',
  'Art & craft',
  'Movie time',
  'Fashion show',
  'Competitions & games for parents',
];
