/* home.js — logic for index.html */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('home-books-grid');
  if (grid) {
    grid.innerHTML = books.slice(0, 6).map(b => bookCardHTML(b)).join('');
  }
});
