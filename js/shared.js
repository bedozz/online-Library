/* ═══════════════════════════════════════════════
   shared.js  —  data & utilities used by every page
   ═══════════════════════════════════════════════ */

/* ─── Book Data ──────────────────────────────── */
const books = [
  {
    id: 'ml',
    title: 'Principles of Machine Learning',
    author: 'Dr. Amelia T. Hartwood & Prof. Nasser Al-Rashid',
    category: 'Computer Science',
    year: 2024, pages: 580,
    isbn: '978-0-123456-78-9',
    color: 'linear-gradient(135deg, #005f8a, #003865)',
    desc: 'A comprehensive and accessible introduction to the mathematical foundations and real-world applications of machine learning.',
    fullDesc: 'This landmark textbook bridges the gap between theoretical rigor and practical application in modern machine learning. Starting from linear algebra and probability theory, it builds step-by-step to cover the full landscape of contemporary ML: regression, classification, neural networks, convolutional and recurrent architectures, transformers, reinforcement learning, and responsible AI practices. Rich with worked examples, Python code exercises, and case studies from healthcare, finance, and engineering, this book is essential for advanced undergraduates and practicing data scientists alike.'
  },
  {
    id: 'chem',
    title: 'Introduction to Organic Chemistry',
    author: 'Prof. Sara El-Masri',
    category: 'Natural Sciences',
    year: 2023, pages: 712,
    isbn: '978-0-234567-89-0',
    color: 'linear-gradient(135deg, #1a6b2f, #0a3315)',
    desc: 'A thorough, visually-rich introduction to organic chemistry for undergraduate students, with abundant reaction mechanisms and laboratory guidance.',
    fullDesc: 'Organic chemistry is the gateway to medicine, pharmacology, and materials science. This textbook presents the subject with unusual clarity, using visual 3D molecular models alongside traditional structural formulas. The book covers alkanes, alkenes, alkynes, aromatic compounds, stereochemistry, carbonyl chemistry, amines, and bioorganic macromolecules. Each chapter ends with synthesis exercises designed to build genuine problem-solving intuition.'
  },
  {
    id: 'history',
    title: 'Modern History of the Middle East',
    author: 'Dr. Khalid Mansour',
    category: 'Humanities',
    year: 2022, pages: 440,
    isbn: '978-0-345678-90-1',
    color: 'linear-gradient(135deg, #8b4500, #5c2c00)',
    desc: 'A balanced scholarly account of the Middle East from the fall of the Ottoman Empire to the present.',
    fullDesc: 'Drawing on primary Arabic, Turkish, and Persian sources alongside Western archives, this authoritative history reframes the modern Middle East from within. The book covers the collapse of the Ottomans, mandate periods, independence movements, the oil era, regional wars, and the Arab Spring with equal attention to states, communities, and individuals. Essential reading for students of history, international relations, and area studies.'
  },
  {
    id: 'calc',
    title: 'Calculus: Theory and Applications',
    author: 'Prof. Mia Chen & Dr. Rami Youssef',
    category: 'Mathematics',
    year: 2024, pages: 810,
    isbn: '978-0-456789-01-2',
    color: 'linear-gradient(135deg, #5b3f8a, #2d1a5e)',
    desc: 'A rigorous yet approachable calculus text for first-year university students, covering single and multivariable calculus.',
    fullDesc: 'This calculus text achieves an unusual balance: it proves every major theorem carefully while always motivating abstract concepts with vivid physical and geometric examples. Limits, derivatives, integrals, sequences and series, vectors, partial derivatives, and multiple integration are developed systematically. Hundreds of exercises range from routine practice to challenging proof problems, with full solutions available online.'
  },
  {
    id: 'econ',
    title: 'Behavioral Economics',
    author: 'Dr. Layla Farouq',
    category: 'Business',
    year: 2023, pages: 380,
    isbn: '978-0-567890-12-3',
    color: 'linear-gradient(135deg, #2c5f8a, #0e3a5c)',
    desc: 'An engaging exploration of how psychology shapes economic decisions, with lessons for policy, business strategy, and personal finance.',
    fullDesc: 'Why do people consistently make choices that contradict classical economic models? This book answers that question by synthesizing 50 years of experimental psychology and behavioral economics research. Topics include loss aversion, cognitive biases, nudge theory, social preferences, and market anomalies. Real-world case studies from consumer behaviour, public policy, and healthcare illustrate how these insights are being applied today.'
  },
  {
    id: 'civil',
    title: 'Foundations of Civil Engineering',
    author: 'Prof. Ahmed Farouk',
    category: 'Engineering',
    year: 2022, pages: 650,
    isbn: '978-0-678901-23-4',
    color: 'linear-gradient(135deg, #c8472b, #7a1a0a)',
    desc: 'A comprehensive introduction to civil engineering fundamentals including structural mechanics, materials, hydraulics, and project management.',
    fullDesc: 'This textbook provides a complete first course in civil engineering, covering structural analysis, soil mechanics, fluid mechanics, transportation systems, environmental engineering, and construction management. Richly illustrated case studies from real infrastructure projects ground abstract theory in professional practice. Aligned with international engineering accreditation standards.'
  },
  {
    id: 'psych',
    title: 'Clinical Psychology Handbook',
    author: 'Dr. Nadia El-Sayed & Prof. Omar Taha',
    category: 'Medicine & Health',
    year: 2024, pages: 520,
    isbn: '978-0-789012-34-5',
    color: 'linear-gradient(135deg, #006655, #003322)',
    desc: 'A definitive handbook for clinical psychology students and practitioners, covering assessment, diagnosis, evidence-based therapies, and professional ethics.',
    fullDesc: 'Written by leading clinicians and researchers, this handbook offers the most current synthesis of clinical psychology theory and practice. Diagnostic frameworks including DSM-5-TR and ICD-11 are presented comparatively. Assessment chapters cover psychological testing, structured interviews, and neuropsychological evaluation. Treatment sections address CBT, psychodynamic therapy, DBT, ACT, family systems, and pharmacological co-treatments. Chapters on cultural competence and professional ethics round out this essential reference.'
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    author: 'Dr. Youssef Ibrahim',
    category: 'Computer Science',
    year: 2023, pages: 490,
    isbn: '978-0-890123-45-6',
    color: 'linear-gradient(135deg, #00264d, #004080)',
    desc: 'A clear, implementation-focused guide to the data structures and algorithms every computer science student must master.',
    fullDesc: 'Mastering data structures and algorithms is the cornerstone of professional software engineering. This book presents arrays, linked lists, stacks, queues, trees, heaps, graphs, and hash tables with full implementations in Python and C++. Algorithm analysis using Big-O notation is developed rigorously. Separate chapters cover sorting, searching, dynamic programming, greedy algorithms, graph traversal, and NP-completeness. Interview-style problem sets prepare readers for technical employment challenges.'
  }
];

/* ─── PDF Map ────────────────────────────────── */
const bookPDFs = {
  'Principles of Machine Learning':    'https://assets.openstax.org/oscms-prodcms/media/documents/IntroductoryBusinessStatistics-OP.pdf',
  'Introduction to Organic Chemistry': 'https://assets.openstax.org/oscms-prodcms/media/documents/OrganicChemistry-OP.pdf',
  'Modern History of the Middle East': 'https://assets.openstax.org/oscms-prodcms/media/documents/WorldHistoryVolume2-OP.pdf',
  'Calculus: Theory and Applications':  'https://assets.openstax.org/oscms-prodcms/media/documents/CalculusVolume1-OP.pdf',
  'Behavioral Economics':               'https://assets.openstax.org/oscms-prodcms/media/documents/PrinciplesofMacroeconomics3e-OP.pdf',
  'Foundations of Civil Engineering':   'https://assets.openstax.org/oscms-prodcms/media/documents/UniversityPhysicsVolume1-OP.pdf',
  'Clinical Psychology Handbook':       'https://assets.openstax.org/oscms-prodcms/media/documents/Psychology2e-OP.pdf',
  'Data Structures & Algorithms':       'https://assets.openstax.org/oscms-prodcms/media/documents/CalculusVolume3-OP.pdf'
};

/* ─── Toast ──────────────────────────────────── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ─── Download ───────────────────────────────── */
function downloadBook(title) {
  const url = bookPDFs[title];
  if (url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = title.replace(/[^a-z0-9]/gi, '_') + '.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('⬇ Downloading "' + title + '" …');
  } else {
    showToast('⚠ PDF not available for this title.');
  }
}

/* ─── Book Card HTML ─────────────────────────── */
function bookCardHTML(b, detailPage = 'book-detail.html') {
  return `
    <a class="book-card" href="${detailPage}?id=${b.id}">
      <div class="book-cover" style="background: ${b.color};">
        <div class="book-cover-title">${b.title}</div>
      </div>
      <div class="book-info">
        <div class="book-author">${b.author.split('&')[0].trim()}</div>
        <div class="book-title">${b.title}</div>
        <div class="book-meta">
          <span class="book-badge">${b.category}</span>
          <button class="book-download-btn"
            onclick="event.preventDefault(); event.stopPropagation(); downloadBook('${b.title}')">
            PDF ↓
          </button>
        </div>
      </div>
    </a>`;
}

/* ─── Search (nav bar) ───────────────────────── */
function handleSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const q = input.value.trim();
  if (q) window.location.href = `browse.html?search=${encodeURIComponent(q)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSearch(); });
  }
});
