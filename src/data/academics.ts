import type { ImageMetadata } from 'astro';
import prePrimary from '@/assets/photos/stage-pre-primary.jpg';
import primary from '@/assets/photos/stage-primary.jpg';
import middle from '@/assets/photos/stage-middle.jpg';
import secondary from '@/assets/photos/stage-secondary.jpg';

export type Stage = {
  id: string;
  name: string;
  grades: string;
  tagline: string;
  summary: string;
  detail: string[];
  highlights: string[];
  image: ImageMetadata;
  alt: string;
};

export const stages: Stage[] = [
  {
    id: 'pre-primary',
    name: 'Pre-Primary',
    grades: 'KG · LKG · UKG',
    tagline: 'Building confidence and character in the early years',
    summary:
      'A joyful, play-based start that builds motor skills, social confidence, early literacy and numeracy, and makes school the most exciting place to be.',
    detail: [
      'Our pre-primary classes foster each child’s cognitive, social, emotional and physical development through a rich variety of learning experiences. Play-based learning lets children explore, create and solve problems, while activities that weave together arts, crafts, stories and play introduce concepts in language, mathematics and science.',
      'At this stage, children discover the joy of independence: making friends, following a routine and expressing themselves. Songs and rhymes build language; free and guided play builds fine and gross motor skills. Children work in small groups and as a whole class, and every pre-primary class is supported by two teachers.',
    ],
    highlights: ['Two teachers in every class', 'Play-based, hands-on learning', 'Songs, rhymes & storytelling', 'Fine & gross motor development', 'Convocation into Grade 1'],
    image: prePrimary,
    alt: 'Pre-primary children lying in a circle with their hands joined at the centre',
  },
  {
    id: 'primary',
    name: 'Primary',
    grades: 'Grades 1 – 5',
    tagline: 'A foundation for lifelong learning',
    summary:
      'An integrated, interdisciplinary curriculum that strengthens reading, writing, mathematics and science while children learn to ask questions and think for themselves.',
    detail: [
      'Our Primary Programme lays the groundwork for academic excellence, critical thinking and independent learning. An academically rigorous curriculum is integrated with the creative arts and presented imaginatively to engage children physically, cognitively and emotionally.',
      'We follow an “i-Homework” policy in the early primary years: instead of traditional homework, daily learning and reading are woven into the school day, keeping learning engaging and stress-free. As students progress, they are introduced to integrated knowledge, with particular strength in English, Mathematics and Environmental Studies (EVS).',
    ],
    highlights: ['“i-Homework” policy in early primary', 'English, Mathematics & EVS core', 'Activity-oriented, hands-on lessons', 'Creative arts woven into learning'],
    image: primary,
    alt: 'Primary students holding up balloons inflated during a baking-soda and vinegar experiment',
  },
  {
    id: 'middle',
    name: 'Middle School',
    grades: 'Grades 6 – 8',
    tagline: 'A stage of discovery',
    summary:
      'Deeper subjects, specialist teachers and project-based learning that nurture curiosity, critical thinking and confident self-expression.',
    detail: [
      'Middle School students are ready for deeper, more discrete subjects taught by specialist teachers, including the challenge of additional languages. In Class 6, Hindi and Sanskrit are introduced as a third language, alongside English, Mathematics, Computer Science, Marathi, Science and Social Studies.',
      'Science becomes more detailed as Physics, Chemistry and Biology, while Social Science becomes more specialised as History-Civics and Geography. Project-based learning, collaborative tasks and real-world connections guide students to become confident, independent learners.',
    ],
    highlights: ['Specialist subject teachers', 'Hindi & Sanskrit as third language', 'Physics, Chemistry & Biology', 'History-Civics & Geography', 'Project-based learning'],
    image: middle,
    alt: 'Middle school students in white uniforms presenting their project work',
  },
  {
    id: 'secondary',
    name: 'Secondary',
    grades: 'Grades 9 – 10',
    tagline: 'Excellence for the board years and beyond',
    summary:
      'A learner-centred approach with career guidance and value-based education that prepares students for the CBSE board examinations and the road ahead.',
    detail: [
      'At the secondary level we focus on academic excellence while guiding each student’s personal development. Weekly cycle tests, structured notes, worksheets and practice papers build exam readiness steadily, never through rote memorisation.',
      'Career guidance and value-based education help students make thoughtful choices about the future, so they leave OTGS prepared not only for board examinations, but for higher studies, careers and life.',
    ],
    highlights: ['CBSE Class X board preparation', 'Weekly cycle tests', 'Career guidance', 'Value-based education'],
    image: secondary,
    alt: 'A secondary student concentrating while writing in a notebook',
  },
];

export const pillars = [
  {
    icon: 'brain',
    title: 'Focus on how to learn',
    text: 'We teach children how to think, question and learn: skills that outlast any syllabus.',
  },
  {
    icon: 'microscope',
    title: 'Discovery & analysis',
    text: 'Experiments, projects and research turn natural curiosity into real understanding.',
  },
  {
    icon: 'compass',
    title: 'Experiential learning',
    text: 'Labs, fields, stages and studios make concepts tangible and memorable.',
  },
  {
    icon: 'graduation',
    title: 'Experienced staff',
    text: 'Qualified, caring teachers who keep growing through regular in-house professional development.',
  },
  {
    icon: 'target',
    title: 'Adaptive teaching',
    text: 'Differentiated instruction meets every child where they are, and takes them further.',
  },
  {
    icon: 'school',
    title: 'Unparalleled infrastructure',
    text: 'A 7-acre green campus with science and computer labs, resource rooms and sports fields.',
  },
];

export const values = [
  'Responsibility',
  'Respect',
  'Integrity',
  'Empathy',
  'Courage',
  'Commitment',
  'Opportunity',
  'Humility',
  'Excellence',
];

export const talkingPoints = [
  {
    icon: 'users',
    title: 'Expert teachers',
    text: 'One teacher can make a big difference, so we invest in a whole team of dedicated, trained educators.',
  },
  {
    icon: 'badge',
    title: 'Credibility',
    text: 'OTGS is proud to be part of one of India’s most trusted and expansive K–10 educational networks.',
  },
  {
    icon: 'clipboard',
    title: 'Learning made clear',
    text: 'Regular updates keep parents informed; students get structured notes, worksheets and practice papers.',
  },
  {
    icon: 'calendar',
    title: 'Parent–teacher meeting every month',
    text: 'A monthly window into your child’s progress, with time to plan the next steps together.',
  },
  {
    icon: 'lightbulb',
    title: 'No rote memorisation',
    text: 'Learning is driven by logic and understanding, not repetition.',
  },
  {
    icon: 'check',
    title: 'Weekly cycle tests',
    text: 'Short, regular assessments that build confidence and lead to great academic success.',
  },
  {
    icon: 'heart',
    title: 'Holistic view',
    text: 'Every child gets equal attention as we lift the whole class average, so that all children succeed.',
  },
  {
    icon: 'award',
    title: 'Best of the best',
    text: 'A unified exam system: subject experts across geographies prepare and design the test papers.',
  },
  {
    icon: 'message',
    title: 'We hear you',
    text: 'Teachers, the principal and management are available at school every Saturday to meet parents.',
  },
];

export const structure = [
  { value: '7', unit: 'acres', label: 'of lush, green campus' },
  { value: '4', unit: 'phases', label: 'Pre-Primary to Secondary' },
  { value: '40', unit: 'max', label: 'students in any class' },
  { value: '100%', unit: '', label: 'full-time class teachers' },
];

export const resourceRooms = [
  { icon: 'palette', name: 'Art' },
  { icon: 'drama', name: 'Drama' },
  { icon: 'music', name: 'Music' },
  { icon: 'theatre', name: 'Theatre' },
];

export const exams = [
  {
    code: 'SAAS',
    name: 'Scholarship Assessment for Advanced Studies',
    type: 'In-school',
    text: 'A school-conducted scholarship test that evaluates academic potential across multiple subjects and identifies gifted students for scholarship opportunities.',
  },
  {
    code: 'OMAT',
    name: 'Oxford Magmus Aptitude Test',
    type: 'In-school',
    text: 'An in-school aptitude test that assesses logical reasoning, mathematical ability and critical thinking. Results inform learning pathways and areas for growth.',
  },
  {
    code: 'NASO',
    name: 'National Astronomy and Science Olympiad',
    type: 'Olympiad',
    text: 'A science competition with a special focus on astronomy, encouraging students to explore space science, astrophysics and scientific research.',
  },
  {
    code: 'IMO',
    name: 'International Mathematics Olympiad',
    type: 'Olympiad',
    text: 'A prestigious maths competition testing logical reasoning, mathematical aptitude and problem-solving, building a strong analytical foundation.',
  },
  {
    code: 'NSO',
    name: 'National Science Olympiad',
    type: 'Olympiad',
    text: 'A nationwide test of scientific concepts across Physics, Chemistry, Biology and Environmental Science, applied to real-world problems.',
  },
  {
    code: 'ISSO',
    name: 'International Social Studies Olympiad',
    type: 'Olympiad',
    text: 'Assesses understanding of History, Geography, Civics and Economics, and awareness of social, political and cultural developments.',
  },
  {
    code: 'ICSO',
    name: 'International Computer Science Olympiad',
    type: 'Olympiad',
    text: 'Focuses on computer science fundamentals, including programming logic, IT concepts and digital literacy, for the digital age.',
  },
  {
    code: 'IHO',
    name: 'International Hindi Olympiad',
    type: 'Olympiad',
    text: 'Evaluates proficiency in Hindi grammar, vocabulary, comprehension and usage, building linguistic confidence.',
  },
  {
    code: 'Homi Bhabha',
    name: 'Homi Bhabha Balvaidnyanik Competition',
    type: 'State',
    text: 'A multi-stage science talent search with written and practical examinations that promotes a scientific attitude and experimental skills.',
  },
  {
    code: 'MSE',
    name: 'Maharashtra Scholarship Exams (Class 5 & 8)',
    type: 'State',
    text: 'State-level scholarship examinations evaluating language, mathematics and analytical skills, with financial aid for meritorious students.',
  },
];

export const prepSupport = [
  'Specialised coaching sessions',
  'Practice materials and mock tests',
  'One-on-one mentoring from subject experts',
  'Regular assessment and feedback',
  'Previous years’ question papers and analysis',
];
