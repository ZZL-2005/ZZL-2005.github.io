// Navigation is an enhancement; every section and link works without JavaScript.
const navigationLinks = Array.from(document.querySelectorAll('.section-nav a'));
const sections = navigationLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

if ('IntersectionObserver' in window) {
  const visibleSections = new Set();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    }
    const current = sections.find(section => visibleSections.has(section));
    if (!current) return;
    for (const link of navigationLinks) {
      if (link.getAttribute('href') === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }, { rootMargin: '-8% 0px -62% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
