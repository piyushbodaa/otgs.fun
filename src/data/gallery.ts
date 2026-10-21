import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/gallery/*/*.jpg', { eager: true });

export const albums = [
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

export const photos = Object.entries(files)
  .map(([path, mod]) => {
    const [, album, file] = path.match(/gallery\/([^/]+)\/(\d+)\.jpg$/) ?? [];
    return { album: album as AlbumId, index: Number(file), image: mod.default };
  })
  .sort((a, b) => albums.findIndex((x) => x.id === a.album) - albums.findIndex((x) => x.id === b.album) || a.index - b.index);

export const photosByAlbum = (id: AlbumId) => photos.filter((p) => p.album === id);
