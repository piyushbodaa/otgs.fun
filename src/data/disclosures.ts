const base = 'https://oxfordtheglobalschool.com/mpd/';

/*
 * `bytes` and `scanned` describe the school's PDFs as checked on 12 November 2026
 * (Content-Length, and whether `pdftotext` finds any text: scanned files are
 * images only, so screen readers and search can't read them). Re-check when the
 * school replaces a file.
 *
 * `status` flags a document whose own text shows it is out of date. Document 05
 * says it was issued on 28.07.2023 and is "valid for a period of two years from
 * the date of issue". We say what the published copy states; we don't claim
 * anything about the school's current certification.
 */
type Disclosure = { title: string; file: string; group: string; bytes: number; scanned?: boolean; status?: string };

export const formatBytes = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)} MB` : `${Math.round(n / 1e3)} KB`);

const documents: Disclosure[] = [
  { title: 'Affiliation Upgradation Certificate (2025–2030) & Recent Extension of Affiliation', file: '01-Affiliation-Upgradation-Certificate-(2025-2030)-and-Recent-Extension-of-Affiliation.pdf', group: 'B · Documents and information', bytes: 4685212 },
  { title: 'Trust Registration Certificate', file: '02-Trust-Registration-Certifcate.pdf', group: 'B · Documents and information', bytes: 240377, scanned: true },
  { title: 'No Objection Certificate (NOC)', file: '03-No-Objection-Certificate.pdf', group: 'B · Documents and information', bytes: 946256, scanned: true },
  { title: 'Recognition Certificate under RTE Act, 2009', file: '04-Recognition-Certificate-under-RTE-ACT-2009.pdf', group: 'B · Documents and information', bytes: 2491152, scanned: true },
  { title: 'Building Safety Certificate', file: '05-Building-Safety-Certificate.pdf', group: 'B · Documents and information', bytes: 393744, scanned: true, status: 'Dated 28 July 2023 and valid for two years, so this copy lapsed in July 2025. Ask the school for the current certificate.' },
  { title: 'Fire Safety Certificate', file: '06-Fire-Safety-Certificate.pdf', group: 'B · Documents and information', bytes: 1587173, scanned: true },
  { title: 'DEO Certificate', file: '07-DEO-Certificate.pdf', group: 'B · Documents and information', bytes: 403973, scanned: true },
  { title: 'Drinking Water Test Report & Health and Sanitation Certificate', file: '08-Drinking-water-test-report-Health-and-Sanitation-Certificate.pdf', group: 'B · Documents and information', bytes: 1890747, scanned: true },
  { title: 'Fee Structure, Grades I to X (2025–26)', file: '09-Fee_Structure_I_to_X_2025-26.pdf', group: 'C · Result and academics', bytes: 7464731, scanned: true },
  { title: 'Academic Calendar (2026–27)', file: '10-Academic-Calender-2026-27.pdf', group: 'C · Result and academics', bytes: 573861 },
  { title: 'School Management Committee (SMC)', file: '11-School-management-Commetee-2026-27.pdf', group: 'C · Result and academics', bytes: 1827116, scanned: true },
  { title: 'Parent Teacher Association (PTA) Members List', file: '12-PTA-Member-List.pdf', group: 'C · Result and academics', bytes: 4738034 },
  { title: 'Last Three Years’ Board Examination Results', file: '13-Last-Three-Year-Result-of-the-board-exam.pdf', group: 'C · Result and academics', bytes: 123719, scanned: true },
  { title: 'Self-Declaration Certificate', file: '14-Self-Declaration-certificate.pdf', group: 'Additional documents', bytes: 318963, scanned: true },
  { title: 'Land Certificate', file: '15-Land-Certificate.pdf', group: 'Additional documents', bytes: 574311, scanned: true },
];

export const disclosures = documents.map((d, i) => ({ ...d, no: i + 1, size: formatBytes(d.bytes), url: base + encodeURIComponent(d.file).replace(/[()]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase()) }));

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

/*
 * Text version of document 09 (Fee Structure 2025–26), transcribed cell by cell
 * from the school's scanned PDF on 12 November 2026 and checked against an OCR
 * pass. Headings and values are exactly as printed, including the unlabelled last
 * column; the PDF remains the official version.
 */
export const feeTable2025 = {
  headers: ['Class', 'Month', 'I-Term', 'II-Term', 'Yearly', 'Months', 'Monthly fees', 'Term-I', 'Term-II', 'Reg. Fees', 'Total', 'New Adm.', 'Less 1 month', '(unlabelled)'],
  rows: [
    ['Nursery', '2400', '2400', '2400', '33600', '12', '28800', '2400', '2400', '1000', '34600', '34600', '32200', ''],
    ['LKG', '2500', '2500', '2500', '35000', '12', '30000', '2500', '2500', '1000', '36000', '36000', '33500', ''],
    ['UKG', '2700', '2700', '2700', '37800', '12', '32400', '2700', '2700', '1000', '38800', '38800', '36100', ''],
    ['1 & 2', '3400', '2800', '2800', '46400', '12', '40800', '2800', '2800', '1000', '47400', '47400', '44000', ''],
    ['3 & 4', '3600', '3100', '3100', '49400', '3', '10800', '3100', '0', '0', '13900', '49400', '45800', 'with IIT'],
    ['5 to 7', '3700', '3100', '3100', '50600', '3', '11100', '3100', '0', '1000', '15200', '51600', '47900', '65600'],
    ['8 to 10', '3900', '3100', '3100', '53000', '12', '46800', '3100', '3100', '1000', '54000', '54000', '50100', '68000'],
  ],
  months: 'The sheet also numbers the fee months 1 to 12 as June to May.',
};
