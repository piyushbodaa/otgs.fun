/** Normalise a request/build path: `/about.html` → `/about`, `/index.html` → `/`. */
export const cleanPath = (pathname: string) => pathname.replace(/\.html$/, '').replace(/\/index$/, '/').replace(/(.)\/$/, '$1') || '/';
