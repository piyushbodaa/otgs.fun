import type { ImageMetadata } from 'astro';
import chairman from '@/assets/leaders/chairman.jpg';
import chairmanOffice from '@/assets/leaders/chairman-office.jpg';
import secretary from '@/assets/leaders/secretary.jpg';
import secretaryOffice from '@/assets/leaders/secretary-office.jpg';
import md from '@/assets/leaders/managing-director.jpg';
import mdOffice from '@/assets/leaders/managing-director-office.jpg';
import doo from '@/assets/leaders/director-operations.jpg';
import dooOffice from '@/assets/leaders/director-operations-office.jpg';

export type Leader = {
  slug: string;
  name: string;
  role: string;
  portrait: ImageMetadata;
  office: ImageMetadata;
  /** Short line used on cards. */
  quote: string;
  /** Headline quote on the message page. */
  headline: string;
  honour?: string;
  message: string[];
};

export const leaders: Leader[] = [
  {
    slug: 'chairman',
    name: 'Mr. Srinivas Dhyavarshetty',
    role: 'Chairman',
    portrait: chairman,
    office: chairmanOffice,
    quote:
      'Education means inspiring curiosity, building character, and shaping confident individuals ready to lead and contribute to the global community.',
    headline: 'Warm greetings to the Oxford family.',
    honour: 'Recipient of the MESTA “Best Shikshan Mitra” Award',
    message: [
      'It is indeed a great honour and responsibility to chair the Board of Governors of Shri Gyan Saraswati Education Society. I am grateful to all the former and current parents, students, teachers and staff members of OTGS for trusting me for 30 years to serve the best quality education in our town, Nanded.',
      'The driving force to help in earnest cannot be based on guilt or pressure, but on a deep sense of inner gratitude and a sustained wish to do whatever we can, unconditionally. This gratitude emanates from a two-fold test: the ability to do, and the intention to deliver. Having the ability to help, co-existing with an inner desire to work and deliver, is where we find ourselves blessed.',
      'Formal education taps latent abilities and opens up an altogether different world. Education has enormous transformative power in any crisis. Everyone deserves the best start in life, and that is not possible without quality education. If we want our future to be just and sustainable, we have to think collectively, and for this collective effort, education is the strongest tool. Education cannot be restricted to a single period of one’s life. Everyone, beginning with the most marginalised and disadvantaged members of our society, must be entitled to lifelong learning opportunities, for their careers as well as for their personal knowledge and development.',
      'The School’s mission is to attract and develop exceptional students and teachers from all backgrounds to serve a meritocratic India. OTGS is an inclusive school that celebrates and embraces diversity: of geography, of socio-economic background and of skill sets. Differentiated learning and teaching strategies, along with an inclusive approach, are at the core of our curriculum.',
      'Academics at OTGS is a distinguishing characteristic. It challenges the intellect and nurtures the potential of each student to acquire the knowledge, concepts and skills necessary to become thinking, productive and responsible citizens.',
      'Sports has always been an integral part of an OTGS education. This belief stems from the philosophy that learning occurs both inside the classroom and outside it. Participation in sport keeps young minds and bodies positively engaged and helps develop sensorimotor faculties.',
      'The co-curricular programme is perhaps the soul of OTGS. Its aim is to promote the spirit of exploration, curiosity, character development, team building, strategy, leadership, individuality and empathy for all. Resilience, integrity, communication and collaboration are just a few of the skills our activity programme sets out to instil.',
      'Our priority, as it was for my predecessors, is to ensure a progressive, inspiring, stimulating and, above all, a happy environment in school. The Board, the Headmaster and the school management remain committed to this endeavour.',
    ],
  },
  {
    slug: 'secretary',
    name: 'Mrs. Umadevi Srinivas Dhyavarshetty',
    role: 'Secretary',
    portrait: secretary,
    office: secretaryOffice,
    quote: 'It is our responsibility to make every ordinary child into an extraordinary global citizen.',
    headline: 'It is our responsibility to make every ordinary child into an extraordinary global citizen.',
    message: [
      'OTGS started as the germ of an idea: to provide high-quality education that was not limited to academics but focused on the holistic development of every student. We wanted an education that was dynamic, and that kept evolving with the times and the world.',
      'Schools are a very integral part of every child’s life and, by extension, their parents’ lives. Over the last three decades, our sincere commitment has been to gradually build a strong, interconnected global community that pursues excellence and is ready for the future. Today, through the wide expertise, diversity and scale of our global network, we strive to provide the best possible experience to our students so they can build a better tomorrow.',
      'That is why we aim to provide an environment where children not only receive the guidance and support they need, but also find a safe space to express, discover and empower themselves. Enabled by our learning systems, guided by our experienced faculty and supported by our advanced technological infrastructure, we provide a highly personalised and adaptive learning experience, where every student can realise their potential and aptitude, and truly blossom into who they aspire to be.',
    ],
  },
  {
    slug: 'managing-director',
    name: 'Mr. Vishnu Srinivas Dhyavarshetty',
    role: 'Managing Director',
    portrait: md,
    office: mdOffice,
    quote:
      'I strive to create a learning environment where students grow with confidence, values, and skills to lead in tomorrow’s world.',
    headline:
      'Education is not just about learning facts, but shaping futures. The right school empowers a child to dream, grow and lead.',
    message: [
      'Choosing the right school is one of the most meaningful decisions a parent can make. Every parent aspires to give their child not just academic success, but a foundation built on strong values, discipline and character. At the heart of this decision lies a deep desire to see their child grow into a confident, capable and compassionate individual, ready to thrive in every aspect of life.',
      'At OTGS, we are dedicated to maintaining the highest standards of educational excellence. We foster creativity and build strong problem-solving abilities in every learner. As a family-oriented school, OTGS values the partnership between parents and educators, believing it is the key to a child’s holistic growth, confidence and long-term success.',
      'All dynamic institutions today strive to bring creativity into the heart of education. Our teachers are the catalysts of this transformation: guiding, inspiring and equipping students with the skills and confidence they need to succeed in an ever-changing world.',
    ],
  },
  {
    slug: 'director-of-operations',
    name: 'Ms. Meghna Srinivas Dhyavarshetty',
    role: 'Director of Operations',
    portrait: doo,
    office: dooOffice,
    quote:
      'I am dedicated to building a seamless, secure, and supportive environment where academic excellence and student well-being go hand in hand.',
    headline:
      'True education shapes the mind, strengthens the character and awakens the spirit. It prepares individuals not just to succeed, but to lead with purpose.',
    message: [
      'Education is far more than the transmission of information. It is a powerful force that shapes the journey from childhood to adulthood. At Oxford The Global School, we view education as a transformative process that nurtures not just the intellect, but also the heart and spirit of every learner.',
      'As Swami Vivekananda wisely said, “Education is not the amount of information that is put into your brain and runs riot there, undigested, all your life. We want that education by which character is formed, strength of mind is increased, the intellect is expanded, and by which one can stand on one’s own feet.”',
      'In line with this vision, we believe education must support the physical, mental and spiritual growth of every student. It should build character, sharpen intellect and prepare young people to lead meaningful, purpose-driven lives.',
      'We strive to create a learning environment that blends progressive global thinking with the richness of Indian culture and tradition. Every student receives personalised attention and guidance, so that they grow into responsible, confident and compassionate individuals, ready to take their place as global citizens.',
    ],
  },
];
