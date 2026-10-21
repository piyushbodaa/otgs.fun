const base = 'https://oxfordtheglobalschool.com/mpd/';

export const disclosures = [
  { title: 'Affiliation Upgradation Certificate (2025–2030) & Recent Extension of Affiliation', file: '01-Affiliation-Upgradation-Certificate-(2025-2030)-and-Recent-Extension-of-Affiliation.pdf', group: 'Affiliation & recognition' },
  { title: 'Trust Registration Certificate', file: '02-Trust-Registration-Certifcate.pdf', group: 'Affiliation & recognition' },
  { title: 'No Objection Certificate (NOC)', file: '03-No-Objection-Certificate.pdf', group: 'Affiliation & recognition' },
  { title: 'Recognition Certificate under RTE Act, 2009', file: '04-Recognition-Certificate-under-RTE-ACT-2009.pdf', group: 'Affiliation & recognition' },
  { title: 'Building Safety Certificate', file: '05-Building-Safety-Certificate.pdf', group: 'Safety & infrastructure' },
  { title: 'Fire Safety Certificate', file: '06-Fire-Safety-Certificate.pdf', group: 'Safety & infrastructure' },
  { title: 'DEO Certificate', file: '07-DEO-Certificate.pdf', group: 'Affiliation & recognition' },
  { title: 'Drinking Water Test Report & Health and Sanitation Certificate', file: '08-Drinking-water-test-report-Health-and-Sanitation-Certificate.pdf', group: 'Safety & infrastructure' },
  { title: 'Fee Structure, Grades I to X (2025–26)', file: '09-Fee_Structure_I_to_X_2025-26.pdf', group: 'Academics & governance' },
  { title: 'Academic Calendar (2026–27)', file: '10-Academic-Calender-2026-27.pdf', group: 'Academics & governance' },
  { title: 'School Management Committee (SMC)', file: '11-School-management-Commetee-2026-27.pdf', group: 'Academics & governance' },
  { title: 'Parent Teacher Association (PTA) Members List', file: '12-PTA-Member-List.pdf', group: 'Academics & governance' },
  { title: 'Last Three Years’ Board Examination Results', file: '13-Last-Three-Year-Result-of-the-board-exam.pdf', group: 'Academics & governance' },
  { title: 'Self-Declaration Certificate', file: '14-Self-Declaration-certificate.pdf', group: 'Affiliation & recognition' },
  { title: 'Land Certificate', file: '15-Land-Certificate.pdf', group: 'Safety & infrastructure' },
].map((d, i) => ({ ...d, no: i + 1, url: base + encodeURIComponent(d.file).replace(/[()]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase()) }));

export const generalInfo = [
  { label: 'Name of the school', value: 'Oxford The Global School, Nanded' },
  { label: 'CBSE affiliation number', value: '1130737' },
  { label: 'Affiliation level & period', value: 'Secondary · 2025 – 2030' },
  { label: 'UDISE code', value: '27150105803' },
  { label: 'Managed by', value: 'Shri Gyan Saraswati Education Society, Nanded' },
  { label: 'Address', value: 'At Post Puyni, Nilla Road, Nanded, Maharashtra 431605' },
  { label: 'Email', value: 'oxfordtgsnnd@gmail.com' },
  { label: 'Phone', value: '+91 93224 13340 · +91 93099 88709' },
];
