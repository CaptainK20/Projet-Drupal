document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#content h2, #content h3').forEach((heading, index) => {
    if (!heading.id) {
      const slug = heading.textContent
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '');
      heading.id = slug + '-' + index;
    }
  });

  // Initialisation TOCBOT sans scroll JS
  tocbot.init({
    tocSelector: '#toc',
    contentSelector: '#content',
    headingSelector: 'h2, h3',
    orderedList: false,
    scrollSmooth: false,  
    scrollSmoothOffset: 0,
    headingLabelCallback: (text, anchor) => text || anchor
  });
});
