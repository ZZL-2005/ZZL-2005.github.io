const navigationLinks = Array.from(document.querySelectorAll('.section-nav a'));
const sections = navigationLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

function activateSection(id) {
  for (const link of navigationLinks) {
    if (link.getAttribute('href') === '#' + id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

for (const link of navigationLinks) {
  link.addEventListener('click', () => activateSection(link.getAttribute('href').slice(1)));
}

window.addEventListener('hashchange', () => {
  const id = window.location.hash.slice(1);
  if (sections.some(section => section.id === id)) activateSection(id);
});

// Adjacent internship and education columns can both be visible.
// Preserve the section the visitor chose while it remains in view.
if ('IntersectionObserver' in window) {
  const visibleSections = new Set();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    }
    const preferred = sections.find(section => section.id === window.location.hash.slice(1) && visibleSections.has(section));
    const current = preferred || sections.find(section => visibleSections.has(section));
    if (current) activateSection(current.id);
  }, { rootMargin: '-18% 0px -52% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
