// Reveal-on-scroll and count-up numbers. Content is fully visible without JS
// (the hidden state is scoped to `.js`) and with reduced motion.

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const supported = 'IntersectionObserver' in window;

const format = (el: HTMLElement, n: number) => {
  const decimals = Number(el.dataset.decimals ?? 0);
  return n.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: false });
};

const countUp = (el: HTMLElement) => {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const duration = 1600;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = format(el, target * eased);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

// Counters start the moment any part of them is on screen, so a number peeking
// above the fold never sits at zero.
if (supported && !reduced) {
  const counters = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        countUp(entry.target as HTMLElement);
        counters.unobserve(entry.target);
      }
    },
    { threshold: 0 },
  );
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    el.textContent = format(el, 0);
    counters.observe(el);
  });
}

const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!supported) {
  revealables.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  revealables.forEach((el) => io.observe(el));
}
