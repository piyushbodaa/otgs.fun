export const steps = [
  {
    title: 'Enquire',
    text: 'Share your details through the enquiry form, WhatsApp or a phone call. Our admissions team will get in touch to answer your questions.',
  },
  {
    title: 'Visit the campus',
    text: 'Book a school tour to see our classrooms, labs and grounds, and to meet the people who will teach your child.',
  },
  {
    title: 'Informal interaction',
    text: 'A friendly, age-appropriate interaction with open-ended questions. No prior preparation is required.',
  },
  {
    title: 'Documents & confirmation',
    text: 'Submit the completed application form and documents for verification, and your child’s seat is confirmed.',
  },
];

export const documents = [
  'Completed admission application form',
  'Copy of the student’s birth certificate',
  'Copy of the student’s Aadhaar card',
  'Copy of caste certificate (if the student does not belong to the Open category)',
  '4 recent passport-size photographs of the student and parent',
  'Transfer Certificate (TC) from the previous school, for students transferring from another school',
  'Copy of the parent’s or guardian’s ID proof (Aadhaar card)',
];

const interaction = 'Informal interaction with open-ended questions that gauge the child’s thinking ability.';

export const placement: { grade: string; portion: string }[] = [
  { grade: 'KG 1', portion: interaction },
  { grade: 'KG 2', portion: interaction },
  { grade: 'Grade 1', portion: interaction },
  ...[2, 3, 4, 5, 6, 7, 8, 9].map((g) => ({
    grade: `Grade ${g}`,
    portion: `Basic knowledge of Grade ${g - 1}, with an ${interaction.charAt(0).toLowerCase()}${interaction.slice(1)}`,
  })),
];

export const faqs = [
  {
    q: 'Which curriculum does OTGS follow?',
    a: 'OTGS follows the curriculum prescribed by the Central Board of Secondary Education (CBSE), New Delhi, from Pre-Primary through Grade 10. The school is CBSE affiliated (Affiliation No. 1130737).',
  },
  {
    q: 'For which grades are admissions open?',
    a: 'Admissions for the 2026–27 academic year are open from Pre-Primary to Grade 10.',
  },
  {
    q: 'How large are the classes?',
    a: 'Each class has a maximum of 40 students, and every class is led by a full-time teacher. Pre-primary classes are supported by two teachers each.',
  },
  {
    q: 'Does my child need to prepare for the placement interaction?',
    a: 'No. The entry-level assessment is an informal interaction with open-ended questions. For Grade 2 and above it also touches on the basics of the previous grade, but it does not require prior preparation.',
  },
  {
    q: 'Do young children get homework?',
    a: 'Early primary classes follow an “i-Homework” policy: rather than traditional homework, daily learning and reading are integrated into the school day to keep learning engaging and stress-free.',
  },
  {
    q: 'How does the school keep parents involved?',
    a: 'Parent–teacher meetings are held every month, parents receive regular updates, and teachers, the principal and management are available at school every Saturday to meet parents.',
  },
  {
    q: 'Which languages are taught?',
    a: 'English and Marathi are part of the programme throughout, and Hindi and Sanskrit are introduced as a third language from Class 6.',
  },
  {
    q: 'Do original documents need to be produced?',
    a: 'Yes. All documents must be submitted in original for verification, along with photocopies.',
  },
];
