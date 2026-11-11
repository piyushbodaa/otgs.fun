/**
 * Parent hub content. Every item here is taken from something the school has
 * published (its website, Academic Calendar 2026–27 or mandatory disclosure).
 * Add bus routes, office hours or a safeguarding policy only once the school
 * confirms them.
 */

/** From the official site: "Parent teacher meeting every month" and "available at school every Saturday". */
export const partnership = [
  {
    icon: 'users',
    title: 'Every Saturday',
    text: 'Teachers, the principal and management are available at school every Saturday to meet parents.',
  },
  {
    icon: 'calendar',
    title: 'Every month',
    text: 'Parent–teacher meetings are held every month to discuss each child’s progress.',
  },
  {
    icon: 'message',
    title: 'Any day',
    text: 'Call, WhatsApp or email the school office with questions. The numbers and email are below.',
  },
];

/** The principal, as listed in the School Management Committee 2026–27. */
export const principal = {
  name: 'Mr. Anil Apparao Govande',
  role: 'Principal, Oxford The Global School',
};

/** Safety and wellbeing sessions on the Academic Calendar 2026–27. */
export const safetySessions: { date: string; title: string; who: string }[] = [
  { date: '2026-04-07', title: 'World Health Day hygiene talk', who: 'Pre-Primary – Grade 8' },
  { date: '2026-06-12', title: 'Cyber Safety Workshop', who: 'Grades 1 – 10' },
  { date: '2026-06-20', title: 'Fire Safety Drill', who: 'Grades 1 – 10' },
  { date: '2026-06-27', title: 'POCSO Child Rights Session', who: 'Grades 5 – 10' },
  { date: '2026-07-01', title: 'Student Health Check-up Drive', who: 'Pre-Primary – Grade 10' },
  { date: '2026-09-08', title: 'Nutrition & Healthy Eating Campaign', who: 'Pre-Primary – Grade 8' },
  { date: '2027-01-02', title: 'Good Touch, Bad Touch Workshop', who: 'Pre-Primary – Grade 4' },
  { date: '2027-01-15', title: 'Road Safety Awareness Programme', who: 'Pre-Primary – Grade 10' },
];

/** Mandatory-disclosure documents that matter most to current parents, by their number in disclosures.ts. */
export const safetyDocs = [5, 6, 8];
export const parentDocs = [10, 9, 11, 12, 13];
