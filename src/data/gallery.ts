import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/gallery/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });

export const albums = [
  {
    id: 'moments',
    name: 'Everyday Moments',
    description: 'Assemblies, classrooms, playtime and celebrations, as shared on the school’s Instagram.',
    alt: 'A recent moment at Oxford The Global School',
  },
  {
    id: 'annual-day',
    name: 'Annual Day',
    description: 'Dance, drama and a stage full of colour under the stars.',
    alt: 'Students performing at the OTGS Annual Day celebration',
  },
  {
    id: 'sports-games',
    name: 'Sports & Games',
    description: 'Football on the big field, and focus over the chessboard.',
    alt: 'Students playing sports and games at OTGS',
  },
  {
    id: 'labs-learning',
    name: 'Labs & Learning',
    description: 'Microscopes, code and curiosity in our labs and classrooms.',
    alt: 'Students learning in the OTGS labs and classrooms',
  },
  {
    id: 'achievements',
    name: 'Achievements & Events',
    description: 'Felicitations, exhibitions and proud moments.',
    alt: 'Students and teachers at an OTGS achievement event',
  },
  {
    id: 'little-learners',
    name: 'Little Learners',
    description: 'Yellow Day, summer camp and the joyful world of pre-primary.',
    alt: 'Pre-primary children enjoying a themed celebration',
  },
] as const;

export type AlbumId = (typeof albums)[number]['id'];

/** Optional description of a single photo ("album/file"), used as its alt text and caption. */
const captions: Record<string, string> = {
  'moments/01.jpg': 'Morning assembly, with the whole school gathered in front of the main building',
  'moments/02.jpg': 'Pencils ready in a pre-primary classroom',
  'moments/03.jpg': 'Playtime on the pre-primary playground',
  'moments/04.jpg': 'A yoga session in the activity hall',
  'moments/05.jpg': 'The girls’ football team warming up',
  'moments/06.jpg': 'A human pyramid on Sports Day',
  'moments/07.jpg': 'A young singer at the Christmas celebration',
  'moments/08.jpg': 'Young artists with their Veer Baal Divas drawings',
  'moments/09.jpg': 'Heads down and writing in class',
  'moments/10.jpg': 'Football practice on the school ground',
  'moments/11.jpg': 'On stage at the Christmas celebration',
  'moments/12.jpg': 'The nativity play at the Christmas celebration',
  'moments/13.jpg': 'Christmas celebration with the school’s leadership',
  'moments/14.jpg': 'Morning assembly, seen from above',
  'moments/15.jpg': 'A memento from a state-level mathematics competition',
};

const albumOrder = (id: string) => albums.findIndex((a) => a.id === id);

// Photos sort by album, then by file name (01.jpg, 02.jpg, … 10.jpg); `index` is
// the photo's 1-based position within its album.
export const photos = Object.entries(files)
  .map(([path, mod]) => {
    const [, album = '', file = ''] = path.match(/gallery\/([^/]+)\/([^/]+)$/) ?? [];
    if (albumOrder(album) < 0) throw new Error(`Gallery folder "${album}" has no entry in albums (src/data/gallery.ts).`);
    return { album: album as AlbumId, file, image: mod.default, caption: captions[`${album}/${file}`] as string | undefined };
  })
  .sort((a, b) => albumOrder(a.album) - albumOrder(b.album) || a.file.localeCompare(b.file, 'en', { numeric: true }))
  .map(({ album, image, caption }, i, all) => ({ album, image, caption, index: all.slice(0, i + 1).filter((p) => p.album === album).length }));

export const photosByAlbum = (id: AlbumId) => photos.filter((p) => p.album === id);
