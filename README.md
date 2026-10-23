# otgs.fun: Oxford The Global School, Nanded

A rebuilt website for Oxford The Global School (CBSE Affiliation No. 1130737), made with [Astro](https://astro.build).
It is a fast, static site with no server or database, and it can be hosted anywhere (Vercel config included).

**Live:** [otgs.fun](https://otgs.fun) · Official school website: [oxfordtheglobalschool.com](https://oxfordtheglobalschool.com)

## Run it

```bash
npm install
npm run dev       # local dev server with hot reload, http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the built site
npm run check     # type-check the project
```

Requires Node 22.12 or newer.

## Where things live

| What | Where |
| --- | --- |
| School details, phone numbers, nav, board results, toppers, testimonials | `src/data/site.ts` |
| Leadership names, photos and messages | `src/data/leaders.ts` |
| Stages, talking points, Prep Zone exams, core values | `src/data/academics.ts` |
| Activities, houses (and their colours), "We Love", summer camp | `src/data/life.ts` |
| Admission steps, documents, placement table, FAQs | `src/data/admissions.ts` |
| Upcoming events (from the Academic Calendar) | `src/data/events.ts` |
| Mandatory disclosure PDFs | `src/data/disclosures.ts` (links to the official site) |
| Pages | `src/pages/` |
| Design tokens (colours, type, buttons) | `src/styles/global.css` |
| Photos | `src/assets/` (Astro converts them to AVIF/WebP at build time) |

### Common updates

- **New academic year:** change `admissionsYear` in `src/data/site.ts`, and in `src/data/events.ts` replace the dates
  and update `academicCalendarYear` and the calendar PDF link. Past events hide themselves automatically (by the
  visitor's date, so the site doesn't need redeploying), and the section disappears once every listed event has passed.
- **New results:** add a row to `boardResults` and replace `toppers` in `src/data/site.ts`.
- **Gallery photos:** drop numbered photos (`22.jpg`, `23.jpg`, …; JPEG, PNG or WebP) into an album folder under
  `src/assets/gallery/`. To add a new album, create the folder and add an entry to `albums` in `src/data/gallery.ts`
  (the build stops with a message naming any folder that has no entry).

## How enquiries work

The enquiry and school-tour forms have no backend. Submitting opens WhatsApp (to +91 93224 13340) or the visitor's
email app (to oxfordtgsnnd@gmail.com) with the details pre-filled, so every enquiry reaches the school directly and
nothing is stored by the website.

## Deploying

The site is hosted on Vercel and connected to this repository: every push to `main` deploys to production at
[otgs.fun](https://otgs.fun), and pull requests get their own preview URL.

`vercel.json` sets clean URLs, caching headers, and 301 redirects from the old WordPress URLs such as
`/about-otgs/` and `/chairmans-message/`. To deploy manually with the Vercel CLI:

```bash
vercel          # preview deployment
vercel --prod   # production
```

Any static host (Netlify, Cloudflare Pages, GitHub Pages) also works: upload `dist/` after `npm run build`.

## License

The source code is released under the [MIT License](LICENSE). The school's name, crest, photographs and written
content are **not** covered by it; see [NOTICE.md](NOTICE.md).
