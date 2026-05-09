/* reviews.js — logic for reviews.html */

let currentRating = 0;

const defaultReviews = [
  { name: 'Fatima H.',  book: 'Principles of Machine Learning',    rating: 5, text: 'Absolutely brilliant textbook. The progression from theory to application is seamless, and the Python examples are genuinely useful for real projects.', date: 'April 28, 2026' },
  { name: 'Mohamed A.', book: 'Data Structures & Algorithms',       rating: 5, text: 'Best DSA book I have come across. Youssef Ibrahim explains complex concepts with unusual simplicity. My whole study group uses this.', date: 'April 15, 2026' },
  { name: 'Sara K.',    book: 'Behavioral Economics',               rating: 4, text: 'Very readable and the case studies are genuinely interesting. Would love a bit more mathematical depth in certain chapters, but otherwise excellent.', date: 'March 30, 2026' },
  { name: 'Omar R.',    book: 'Modern History of the Middle East',  rating: 5, text: 'Rare to find a history book this balanced and well-sourced. The use of primary Arabic sources makes it stand apart from Western-centric accounts.', date: 'March 12, 2026' },
];

// Load reviews from sessionStorage (persists within the tab session) or fall back to defaults
function loadReviews() {
  try {
    const saved = sessionStorage.getItem('scholarly_reviews');
    return saved ? JSON.parse(saved) : [...defaultReviews];
  } catch {
    return [...defaultReviews];
  }
}

function saveReviews(reviews) {
  try { sessionStorage.setItem('scholarly_reviews', JSON.stringify(reviews)); } catch {}
}

function renderReviews() {
  const reviews = loadReviews();
  const list = document.getElementById('reviews-list');
  list.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-card-header">
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="review-book">📖 ${r.book}</div>
        </div>
        <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      </div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-date">${r.date}</div>
    </div>`).join('');
}

function setRating(n) {
  currentRating = n;
  document.querySelectorAll('#starRating span').forEach((s, i) => {
    s.classList.toggle('active', i < n);
  });
}

function submitReview() {
  const name = document.getElementById('review-name').value.trim();
  const book = document.getElementById('review-book').value;
  const text = document.getElementById('review-text').value.trim();

  if (!name || !book || !text || currentRating === 0) {
    showToast('⚠ Please fill in all fields and select a rating.');
    return;
  }

  const reviews = loadReviews();
  reviews.unshift({
    name, book,
    rating: currentRating,
    text,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  });
  saveReviews(reviews);
  renderReviews();

  // Reset form
  document.getElementById('review-name').value = '';
  document.getElementById('review-book').value = '';
  document.getElementById('review-text').value = '';
  setRating(0);

  showToast('✓ Your review was submitted successfully!');
}

document.addEventListener('DOMContentLoaded', renderReviews);
