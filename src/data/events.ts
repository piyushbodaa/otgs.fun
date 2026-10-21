/** School activities from the official Academic Calendar 2026–27 (public holidays omitted). */
export type SchoolEvent = { date: string; title: string; who?: string };

export const academicCalendarPdf = 'https://oxfordtheglobalschool.com/mpd/10-Academic-Calender-2026-27.pdf';

export const events: SchoolEvent[] = [
  { date: '2026-10-24', title: 'Heritage & Culture Day', who: 'Pre-Primary – Grade 8' },
  { date: '2026-11-07', title: 'Colour Day: Pink', who: 'Pre-Primary' },
  { date: '2026-11-11', title: 'National Education Day' },
  { date: '2026-11-14', title: 'Children’s Day Celebration' },
  { date: '2026-11-28', title: 'Robotics & AI Expo', who: 'Grades 5 – 10' },
  { date: '2026-12-04', title: 'Indian Navy Day' },
  { date: '2026-12-05', title: 'Colour Day: Brown', who: 'Pre-Primary' },
  { date: '2026-12-12', title: 'Student Field Visit', who: 'Pre-Primary – Grade 8' },
  { date: '2026-12-19', title: 'Community Service Drive', who: 'Student-led' },
  { date: '2026-12-24', title: 'Christmas Celebration' },
  { date: '2026-12-31', title: 'Year-End Celebration' },
  { date: '2027-01-02', title: 'Good Touch, Bad Touch Workshop', who: 'Pre-Primary – Grade 4' },
  { date: '2027-01-12', title: 'National Youth Day', who: 'Swami Vivekananda Jayanti' },
  { date: '2027-01-15', title: 'Road Safety Awareness Programme', who: 'Pre-Primary – Grade 10' },
  { date: '2027-01-23', title: 'Colour Day: Grey', who: 'Pre-Primary' },
  { date: '2027-01-26', title: 'Republic Day' },
  { date: '2027-01-30', title: 'Letter Writing Session', who: 'Grades 1 – 10' },
  { date: '2027-02-06', title: 'Story Writing Activity', who: 'Grades 5 – 8' },
  { date: '2027-02-13', title: 'Reading Carnival', who: 'Grades 1 – 10' },
  { date: '2027-02-20', title: 'Debate & Elocution', who: 'Grades 9 – 10' },
  { date: '2027-02-27', title: 'National Science Day' },
  { date: '2027-03-03', title: 'Holi Celebration at School' },
  { date: '2027-03-13', title: 'Colour Day: Light Green', who: 'Pre-Primary' },
  { date: '2027-03-20', title: 'Water Conservation Drive', who: 'Grades 1 – 8' },
];
