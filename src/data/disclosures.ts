const base = 'https://oxfordtheglobalschool.com/mpd/';

export const disclosures = [
  { title: 'Affiliation Upgradation Certificate (2025–2030) & Recent Extension of Affiliation', file: '01-Affiliation-Upgradation-Certificate-(2025-2030)-and-Recent-Extension-of-Affiliation.pdf', group: 'B · Documents and information' },
  { title: 'Trust Registration Certificate', file: '02-Trust-Registration-Certifcate.pdf', group: 'B · Documents and information' },
  { title: 'No Objection Certificate (NOC)', file: '03-No-Objection-Certificate.pdf', group: 'B · Documents and information' },
  { title: 'Recognition Certificate under RTE Act, 2009', file: '04-Recognition-Certificate-under-RTE-ACT-2009.pdf', group: 'B · Documents and information' },
  { title: 'Building Safety Certificate', file: '05-Building-Safety-Certificate.pdf', group: 'B · Documents and information' },
  { title: 'Fire Safety Certificate', file: '06-Fire-Safety-Certificate.pdf', group: 'B · Documents and information' },
  { title: 'DEO Certificate', file: '07-DEO-Certificate.pdf', group: 'B · Documents and information' },
  { title: 'Drinking Water Test Report & Health and Sanitation Certificate', file: '08-Drinking-water-test-report-Health-and-Sanitation-Certificate.pdf', group: 'B · Documents and information' },
  { title: 'Fee Structure, Grades I to X (2025–26)', file: '09-Fee_Structure_I_to_X_2025-26.pdf', group: 'C · Result and academics' },
  { title: 'Academic Calendar (2026–27)', file: '10-Academic-Calender-2026-27.pdf', group: 'C · Result and academics' },
  { title: 'School Management Committee (SMC)', file: '11-School-management-Commetee-2026-27.pdf', group: 'C · Result and academics' },
  { title: 'Parent Teacher Association (PTA) Members List', file: '12-PTA-Member-List.pdf', group: 'C · Result and academics' },
  { title: 'Last Three Years’ Board Examination Results', file: '13-Last-Three-Year-Result-of-the-board-exam.pdf', group: 'C · Result and academics' },
  { title: 'Self-Declaration Certificate', file: '14-Self-Declaration-certificate.pdf', group: 'Additional documents' },
  { title: 'Land Certificate', file: '15-Land-Certificate.pdf', group: 'Additional documents' },
].map((d, i) => ({ ...d, no: i + 1, url: base + encodeURIComponent(d.file).replace(/[()]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase()) }));

export const generalInfo = [
  { label: 'Name of the school', value: 'Oxford The Global School, Nanded' },
  { label: 'CBSE affiliation number', value: '1130737' },
  { label: 'Affiliation level & period', value: 'Secondary · 2025 – 2030' },
  { label: 'UDISE code', value: '27150105803' },
  { label: 'Managed by', value: 'Shri Gyan Saraswati Education Society, Nanded' },
  { label: 'Address', value: 'At Post Puyni, Nilla Road, Nanded, Maharashtra 431605' },
  { label: 'Principal', value: 'Mr. Anil Apparao Govande' },
  { label: 'Email', value: 'oxfordtgsnnd@gmail.com' },
  { label: 'Phone', value: '+91 93224 13340 · +91 93099 88709' },
];
