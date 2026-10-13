// Keep links to the previous single-page layout working.
// The shared navigation uses ordinary page links and needs no JavaScript.
(() => {
  if (location.pathname !== '/' && location.pathname !== '/index.html') return;
  const destinations = {
    '#publications': '/publications/',
    '#experience': '/experience/#internships',
    '#internships': '/experience/#internships',
    '#education': '/experience/#education',
    '#blog': '/blog/'
  };
  const followLegacyLink = () => {
    const destination = destinations[location.hash];
    if (destination) location.replace(destination);
  };
  followLegacyLink();
  window.addEventListener('hashchange', followLegacyLink);
})();
