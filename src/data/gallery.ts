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

/**
 * Description of each photo ("album/file"), used as its alt text and lightbox caption.
 * Describe what is visible; don't name people or events the photo can't confirm.
 * Photos without an entry fall back to the album's generic alt text.
 */
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
  'annual-day/01.jpg': 'Three dancers in orange classical dance costumes posing on stage',
  'annual-day/02.jpg': 'A classical dance group in red and green before a golden Nataraja backdrop',
  'annual-day/03.jpg': 'Young girls in party gowns dancing through stage smoke',
  'annual-day/04.jpg': 'A performer in a tall decorated headdress, arms raised, on the floodlit ground',
  'annual-day/05.jpg': 'Children dressed as Krishna and Radha, Krishna playing the flute',
  'annual-day/06.jpg': 'Students in white forming a human pyramid in front of the main building',
  'annual-day/07.jpg': 'A young performer waving a large saffron flag on the ground',
  'annual-day/08.jpg': 'A large group dance on the ground in front of the school building',
  'annual-day/09.jpg': 'Young children holding up letter cards that spell “We love Oxford”',
  'annual-day/10.jpg': 'Dancers in feathered headdresses and maroon skirts performing a folk dance',
  'annual-day/11.jpg': 'A dancer in a swirling black, red and yellow skirt leading a folk dance',
  'annual-day/12.jpg': 'A student in white performing with a large hoop wheel',
  'annual-day/13.jpg': 'Dancers in blue peacock costumes',
  'annual-day/14.jpg': 'Dancers in red costumes with tall woven headdresses and tinsel skirts',
  'annual-day/15.jpg': 'A martial arts student in white leaping above two wooden stools',
  'annual-day/16.jpg': 'Two dancers in white saris with red borders, holding decorated plates',
  'annual-day/17.jpg': 'A dance group in yellow forming a tableau on the brightly lit stage',
  'annual-day/18.jpg': 'A child with painted face and woven headdress, hands folded, in the middle of a performance',
  'annual-day/19.jpg': 'A young child in a crown, holding a small drum and a painted trident, sitting on the grass',
  'annual-day/20.jpg': 'Students in face paint and feathered headbands waiting backstage in a tent',
  'annual-day/21.jpg': 'Two students in face paint and feathered headbands holding up painted shields',
  'sports-games/01.jpg': 'Boys competing for the ball in a football match',
  'sports-games/02.jpg': 'Two boys facing off over the ball in front of the goal',
  'sports-games/03.jpg': 'Boys chasing footballs during practice on the big field',
  'sports-games/04.jpg': 'The girls’ football team in a practice match',
  'sports-games/05.jpg': 'A girl dribbling the ball past a defender',
  'sports-games/06.jpg': 'A student moving a piece during a game of chess',
  'sports-games/07.jpg': 'A student taking aim in a game of carrom',
  'labs-learning/01.jpg': 'Students measuring out a solution in the science lab',
  'labs-learning/02.jpg': 'Students gathered round a microscope in the lab',
  'labs-learning/03.jpg': 'Students working at computers in the computer lab',
  'labs-learning/04.jpg': 'Students typing in the computer lab',
  'labs-learning/05.jpg': 'A student working through a Grade 7 physics workbook',
  'labs-learning/06.jpg': 'Students examining anatomy models in the science lab',
  'labs-learning/07.jpg': 'Students carrying out experiments at a lab bench',
  'labs-learning/08.jpg': 'A student recording observations beside biology models',
  'achievements/01.jpg': 'The school staff in a group photo on the front steps',
  'achievements/02.jpg': 'Teachers and guests at a felicitation, holding certificates',
  'achievements/03.jpg': 'Students and a teacher beside a table of dishes they prepared',
  'achievements/04.jpg': 'Students holding their certificates with teachers',
  'achievements/05.jpg': 'A student receiving a prize on stage at a science competition',
  'achievements/06.jpg': 'Students and a teacher presenting a project on the classroom screen',
  'little-learners/01.jpg': 'Smiley-face balloons for Yellow Day',
  'little-learners/02.jpg': 'A teacher in a yellow sari beside a “Happy Yellow Day” display',
  'little-learners/03.jpg': 'Pre-primary children dressed in yellow, some as mangoes, for Yellow Day',
  'little-learners/06.jpg': 'Smiley-face balloons hanging over a painted classroom wall',
  'little-learners/08.jpg': 'Children sharing a snack at summer camp',
  'little-learners/09.jpg': 'Children in caps and sun-print T-shirts watching a cartoon',
  'little-learners/10.jpg': 'A teacher in a chef’s hat preparing food for a cooking activity',
  'little-learners/11.jpg': 'Children and a teacher in front of the “OTGS Summer Camp” display',
  'little-learners/12.jpg': 'Dishes laid out on a table, seen from above',
  'little-learners/13.jpg': 'Summer camp children in white caps cheering together',
  'little-learners/14.jpg': 'Children lying in a circle on a mat with their heads together',
  'little-learners/15.jpg': 'A young child tasting a treat at summer camp',
  'little-learners/16.jpg': 'A child lying on a mat, chin in hands',
  'little-learners/17.jpg': 'Children and a teacher posing in a “Smile Please” photo frame',
  'little-learners/18.jpg': 'A child resting on a green mat',
  'little-learners/19.jpg': 'A smiley-face pen stand with paper flowers, made in a craft session',
  'little-learners/20.jpg': 'Children showing the smiling suns printed on the backs of their T-shirts',
  'little-learners/21.jpg': 'A “Welcome to Summer Camp” display with paper palm trees and ice creams',
  'little-learners/22.jpg': 'A “Beat the heat with our summer camp” poster with a paper sun and flowers',
  'little-learners/23.jpg': 'A “Happy cool summer vibes” poster with smiling suns and watermelons',
  'little-learners/24.jpg': 'A child striking a pose at summer camp',
  'little-learners/25.jpg': 'A “Welcome to Summer Camp 2025” poster with drawings of instruments and skates',
  'little-learners/26.jpg': 'A pre-primary child holding up an “I love Dad” card',
  'little-learners/27.jpg': 'A pre-primary child in uniform holding up their pigtails',
  'little-learners/28.jpg': 'Four pre-primary children with flower badges by a months-of-the-year mural',
  'little-learners/29.jpg': 'Pre-primary children holding paper badges beside a “Papa” display',
  'little-learners/30.jpg': 'A pre-primary class with their badges beside the “Papa” display',
  'little-learners/31.jpg': 'Another pre-primary class with their badges beside the “Papa” display',
  'little-learners/32.jpg': 'Pre-primary children holding up their “Best Dad” badges',
  'little-learners/33.jpg': 'Three children holding “Best Dad” badges beside the class rules board',
  'little-learners/34.jpg': 'A pre-primary class and teachers on the steps beside the “Papa” display',
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
  .map(({ album, file, image, caption }, i, all) => ({ album, file, image, caption, index: all.slice(0, i + 1).filter((p) => p.album === album).length }));

export const photosByAlbum = (id: AlbumId) => photos.filter((p) => p.album === id);
