/* book-detail.js — logic for book-detail.html */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const book = books.find(b => b.id === id);

  const container = document.getElementById('book-detail-content');

  if (!book) {
    container.innerHTML = `
      <div style="padding:60px 40px; text-align:center;">
        <h2 style="font-family:var(--font-display);color:var(--navy);margin-bottom:12px;">Book Not Found</h2>
        <p style="font-family:var(--font-ui);color:var(--mid-gray);margin-bottom:24px;">We couldn't find the book you were looking for.</p>
        <a class="btn-primary" href="browse.html">Browse All Books</a>
      </div>`;
    return;
  }

  // Update page title
  document.title = `Scholarly – ${book.title}`;

  container.innerHTML = `
    <div class="book-detail-header">
      <div class="book-detail-cover" style="background: ${book.color};">
        <div class="book-detail-cover-title">${book.title}</div>
      </div>
      <div class="book-detail-meta">
        <h1>${book.title}</h1>
        <div class="author">${book.author}</div>
        <div class="book-detail-tags">
          <span class="tag">${book.category}</span>
          <span class="tag">${book.year}</span>
          <span class="tag">${book.pages} pages</span>
        </div>
      </div>
    </div>

    <div class="book-detail-body">
      <div class="book-detail-desc">
        <h2>About This Book</h2>
        <p>${book.fullDesc}</p>
        <h2 style="margin-top:28px;">Key Topics Covered</h2>
        <p style="font-size:0.88rem;line-height:1.7;color:var(--dark-gray);">
          This volume provides comprehensive coverage suitable for both introductory courses and advanced independent study.
          Each chapter begins with learning objectives and ends with summaries, key terms, and graded exercises.
        </p>
      </div>
      <div>
        <div class="book-detail-sidebar-card">
          <h4>Book Information</h4>
          <div class="detail-meta-row"><span class="label">Author(s)</span><span class="value">${book.author}</span></div>
          <div class="detail-meta-row"><span class="label">Year</span><span class="value">${book.year}</span></div>
          <div class="detail-meta-row"><span class="label">Pages</span><span class="value">${book.pages}</span></div>
          <div class="detail-meta-row"><span class="label">Category</span><span class="value">${book.category}</span></div>
          <div class="detail-meta-row"><span class="label">ISBN</span><span class="value">${book.isbn}</span></div>
          <div class="detail-meta-row"><span class="label">Format</span><span class="value">PDF, EPUB</span></div>
          <button class="download-full-btn" onclick="downloadBook('${book.title}')">⬇ Download Full Book</button>
        </div>
      </div>
    </div>`;
});
