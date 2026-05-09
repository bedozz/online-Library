/* browse.js — logic for browse.html */

function renderBooks(filtered, label) {
  const heading = document.getElementById('category-heading');
  heading.innerHTML = `<span>Showing</span>${label}`;

  const grid = document.getElementById('menu-books-grid');
  if (filtered.length === 0) {
    grid.innerHTML = `<p style="font-family:var(--font-ui);color:var(--mid-gray);grid-column:1/-1;">No books found matching your search.</p>`;
  } else {
    grid.innerHTML = filtered.map(b => bookCardHTML(b)).join('');
  }
}

function showCategory(name) {
  // Deactivate all category cards, activate the clicked one
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
  const activeCard = [...document.querySelectorAll('.category-card')]
    .find(c => c.dataset.category === name);
  if (activeCard) activeCard.classList.add('active');

  const filtered = books.filter(b => b.category === name);
  renderBooks(filtered, name);

  document.getElementById('menu-books-grid')
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
  // Wire up category cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      // Decode HTML entities in data-category (e.g. &amp; → &)
      const raw = card.getAttribute('data-category');
      const cat = new DOMParser().parseFromString(raw, 'text/html').body.textContent;
      showCategory(cat);
    });
  });

  // Check for ?search= or ?category= in URL
  const params = new URLSearchParams(window.location.search);
  const search  = params.get('search');
  const cat     = params.get('category');

  if (search) {
    const q = search.toLowerCase();
    const filtered = books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q)
    );
    renderBooks(filtered, `"${search}"`);
    document.getElementById('searchInput').value = search;
    document.getElementById('menu-books-grid')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (cat) {
    showCategory(cat);
  } else {
    // Show all books by default
    renderBooks(books, 'All Books');
  }
});
