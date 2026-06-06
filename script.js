// ============================================
//   STATIONERY.ID — MAIN SCRIPT
// ============================================

// === PRODUCT DATA ===
const products = [
  {
    id: 1,
    emoji: "📝",
    name: "Paket Menulis Lengkap",
    shortDesc: "Perlengkapan menulis sehari-hari yang praktis dan hemat untuk anak SD & SMP.",
    intro: "📝 Paket Menulis Lengkap – Perlengkapan Sekolah & Belajar Anak\n\nLengkapi kebutuhan sekolah dan belajar si kecil dengan Paket Menulis Lengkap yang praktis dan hemat.",
    items: ["Buku tulis", "Pensil", "Pulpen", "Penghapus", "Penggaris", "Rautan"],
    keunggulan: [
      "Perlengkapan lengkap dalam satu paket",
      "Cocok untuk sekolah, hadiah, dan kebutuhan belajar",
      "Praktis dibawa dan digunakan sehari-hari",
      "Kualitas baik dengan harga terjangkau",
      "Membantu anak lebih semangat belajar"
    ],
    badge: "Terlaris"
  },
  {
    id: 2,
    emoji: "🎒",
    name: "Paket Back to School",
    shortDesc: "Siapkan perlengkapan sekolah anak jadi lebih praktis untuk tahun ajaran baru.",
    intro: "🎒 Paket Kembali ke Sekolah – Cocok untuk tahun ajaran baru, hadiah sekolah, maupun kebutuhan belajar harian.",
    items: ["Buku tulis 3–5 buah", "Pensil", "Pulpen", "Penghapus", "Penggaris", "Rautan", "Sampul buku"],
    keunggulan: [
      "Perlengkapan sekolah lengkap",
      "Cocok untuk anak SD & SMP",
      "Praktis dan siap pakai",
      "Harga hemat dan berkualitas",
      "Membantu anak lebih semangat sekolah"
    ],
    badge: "Populer"
  },
  {
    id: 3,
    emoji: "🎨",
    name: "Paket Kreatif Anak",
    shortDesc: "Ajak anak belajar sambil berkreasi dengan paket yang seru dan edukatif.",
    intro: "🎨 Paket Kreatif Anak – Cocok untuk aktivitas sekolah, tugas prakarya, dan bermain kreatif di rumah.",
    items: ["Kertas origami", "Lem", "Gunting", "Pensil warna", "Spidol warna"],
    keunggulan: [
      "Melatih kreativitas dan motorik anak",
      "Warna menarik dan lengkap",
      "Cocok untuk kegiatan prakarya",
      "Aman dan nyaman digunakan anak"
    ],
    badge: "Edukatif"
  },
  {
    id: 4,
    emoji: "📐",
    name: "Paket Matematika",
    shortDesc: "Paket perlengkapan matematika lengkap untuk SD hingga SMP.",
    intro: "📐 Paket Matematika – Perlengkapan lengkap untuk mendukung kegiatan belajar matematika di sekolah maupun di rumah.",
    items: ["Penggaris", "Busur derajat", "Jangka", "Pensil", "Penghapus"],
    keunggulan: [
      "Lengkap untuk pelajaran matematika",
      "Praktis dibawa ke sekolah",
      "Membantu belajar lebih mudah",
      "Cocok untuk tugas dan ujian"
    ],
    badge: "Belajar"
  },
  {
    id: 5,
    emoji: "🖍️",
    name: "Paket Mewarnai",
    shortDesc: "Buat aktivitas menggambar dan mewarnai jadi lebih seru untuk anak-anak.",
    intro: "🖍️ Paket Mewarnai – Warna cerah dan menarik untuk menemani waktu belajar dan bermain anak.",
    items: ["Buku gambar", "Krayon atau pensil warna", "Penghapus", "Pensil"],
    keunggulan: [
      "Cocok untuk belajar dan bermain",
      "Membantu melatih kreativitas anak",
      "Praktis dan mudah dibawa",
      "Warna cerah dan menarik"
    ],
    badge: "Seru"
  },
  {
    id: 6,
    emoji: "💰",
    name: "Paket Belajar Hemat",
    shortDesc: "Paket alat tulis sederhana dengan harga ekonomis untuk kebutuhan harian.",
    intro: "💰 Paket Belajar Hemat – Solusi hemat untuk perlengkapan sekolah dan belajar sehari-hari.",
    items: ["2 Pensil", "1 Penghapus", "1 Penggaris", "1 Pulpen"],
    keunggulan: [
      "Harga terjangkau",
      "Cocok untuk pelajar",
      "Praktis dan simpel",
      "Pas untuk kebutuhan harian"
    ],
    badge: "Hemat"
  },
  {
    id: 7,
    emoji: "📚",
    name: "Paket Anak Rajin",
    shortDesc: "Paket alat tulis lengkap untuk membantu anak lebih rapi dan semangat belajar.",
    intro: "📚 Paket Anak Rajin – Membantu anak lebih rapi, aktif mencatat, dan semangat belajar setiap hari.",
    items: ["Buku catatan", "Sticky notes", "Stabilo", "Pulpen", "Penggaris"],
    keunggulan: [
      "Cocok untuk mencatat pelajaran",
      "Membantu belajar lebih teratur",
      "Desain menarik dan praktis",
      "Pas untuk sekolah maupun les"
    ],
    badge: "Favorit"
  },
  {
    id: 8,
    emoji: "🏆",
    name: "Paket Hadiah Prestasi",
    shortDesc: "Paket hadiah lucu dan menarik untuk apresiasi anak berprestasi.",
    intro: "🏆 Paket Hadiah Prestasi – Hadiah sederhana yang bikin anak bahagia dan makin semangat belajar.",
    items: ["Buku tulis lucu", "Pensil karakter", "Penghapus karakter", "Stiker"],
    keunggulan: [
      "Cocok untuk hadiah dan reward anak",
      "Desain lucu dan menarik",
      "Membuat anak lebih semangat belajar",
      "Pas untuk lomba dan kegiatan sekolah"
    ],
    badge: "Kado"
  },
  {
    id: 9,
    emoji: "✏️",
    name: "Paket Ujian Premium",
    shortDesc: "Persiapkan ujian dengan perlengkapan lengkap dan nyaman.",
    intro: "✏️ Paket Ujian Premium – Ujian jadi lebih siap dan tenang dengan perlengkapan yang lengkap.",
    items: ["Pensil 2B", "Penghapus berkualitas", "Pulpen hitam", "Penggaris", "Rautan", "Air mineral kecil", "Permen"],
    keunggulan: [
      "Lengkap untuk kebutuhan ujian",
      "Praktis dan siap pakai",
      "Membantu siswa lebih fokus",
      "Cocok untuk ujian sekolah dan try out"
    ],
    badge: "Premium"
  },
  {
    id: 10,
    emoji: "📖",
    name: "Paket Literasi",
    shortDesc: "Dukung kebiasaan membaca anak sejak dini dengan paket yang edukatif.",
    intro: "📖 Paket Literasi – Tumbuhkan budaya membaca sejak sekarang dengan paket yang menyenangkan.",
    items: ["Buku bacaan anak", "Pembatas buku", "Buku catatan kecil", "Pensil"],
    keunggulan: [
      "Membantu meningkatkan minat baca",
      "Cocok untuk aktivitas literasi sekolah",
      "Praktis dibawa dan digunakan",
      "Edukatif dan bermanfaat"
    ],
    badge: "Edukatif"
  }
];

// === RENDER PRODUCT CARDS ===
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card" data-animate onclick="openModal(${p.id})">
      <span class="card-emoji">${p.emoji}</span>
      <h3 class="card-title">${p.name}</h3>
      <p class="card-desc">${p.shortDesc}</p>
      <ul class="card-items">
        ${p.items.slice(0, 4).map(item => `<li>${item}</li>`).join('')}
        ${p.items.length > 4 ? `<li>+${p.items.length - 4} lainnya...</li>` : ''}
      </ul>
      <div class="card-cta">
        <span class="card-badge">${p.badge}</span>
        <div class="card-arrow">→</div>
      </div>
    </div>
  `).join('');

  // Re-observe new animated elements
  observeElements();
}

// === MODAL ===
function openModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <span class="modal-emoji">${product.emoji}</span>
    <h2 class="modal-title">${product.name}</h2>
    <p class="modal-intro">${product.intro.replace(/\n/g, '<br>')}</p>
    <p class="modal-subtitle">✨ Isi Paket:</p>
    <ul class="modal-items">
      ${product.items.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p class="modal-subtitle">✅ Keunggulan:</p>
    <ul class="modal-keunggulan">
      ${product.keunggulan.map(k => `<li>${k}</li>`).join('')}
    </ul>
    <div class="modal-actions">
      <a href="https://www.instagram.com/stationery__id?igsh=MWY0OGQzbHR3cjM3Zg==" target="_blank" class="btn-primary">
        🛍️ Order via Instagram
      </a>
      <a href="https://wa.me/6281234567890?text=Halo%20Stationery.id%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}" target="_blank" class="btn-outline">
        💬 WhatsApp
      </a>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal handlers
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// === SCROLL ANIMATIONS ===
function observeElements() {
  const elements = document.querySelectorAll('[data-animate]:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay) || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

// === NAVBAR SCROLL ===
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// === HAMBURGER MENU ===
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => s.style.transform = '');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[1].style.opacity = '1';
    }
  });

  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '1';
      });
    });
  });
}

// === SMOOTH ACTIVE LINK ===
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--primary)';
          }
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  observeElements();
  initHamburger();
  initActiveNav();
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
});