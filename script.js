// ============================================
//   STATIONERY.ID — MAIN SCRIPT
// ============================================

// === PRODUCT DATA ===
const products = [
  {
    id: 1,
    image: "images/paket-menulis-lengkap.jpeg",
    name: "Paket Menulis Lengkap",
    shortDesc: "Perlengkapan menulis sehari-hari yang praktis dan hemat untuk anak SD & SMP.",
    intro: "Lengkapi kebutuhan sekolah dan belajar si kecil dengan Paket Menulis Lengkap yang praktis dan hemat. Cocok untuk anak SD, SMP, maupun kebutuhan sehari-hari.",
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
    image: "images/paket-back-to-school.jpeg",
    name: "Paket Back to School",
    shortDesc: "Siapkan perlengkapan sekolah anak jadi lebih praktis untuk tahun ajaran baru.",
    intro: "Siapkan perlengkapan sekolah anak jadi lebih praktis dengan Paket Back to School yang lengkap dan hemat. Cocok untuk tahun ajaran baru dan hadiah sekolah.",
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
    image: "images/paket-kreatif-anak.jpeg",
    name: "Paket Kreatif Anak",
    shortDesc: "Ajak anak belajar sambil berkreasi dengan paket yang seru dan edukatif.",
    intro: "Ajak anak belajar sambil berkreasi dengan Paket Kreatif Anak yang seru dan edukatif. Cocok untuk aktivitas sekolah, tugas prakarya, dan bermain kreatif di rumah.",
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
    image: "images/paket-matematika.jpeg",
    name: "Paket Matematika",
    shortDesc: "Paket perlengkapan matematika lengkap untuk SD hingga SMP.",
    intro: "Paket perlengkapan matematika lengkap untuk mendukung kegiatan belajar di sekolah maupun di rumah. Cocok untuk siswa SD hingga SMP.",
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
    image: "images/paket-mewarnai.jpeg",
    name: "Paket Mewarnai",
    shortDesc: "Buat aktivitas menggambar dan mewarnai jadi lebih seru untuk anak-anak.",
    intro: "Buat aktivitas menggambar dan mewarnai jadi lebih seru dengan Paket Mewarnai yang lengkap dan menarik untuk anak-anak.",
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
    image: "images/paket-belajar-hemat.jpeg",
    name: "Paket Belajar Hemat",
    shortDesc: "Paket alat tulis sederhana dengan harga ekonomis untuk kebutuhan harian.",
    intro: "Paket alat tulis sederhana dengan harga ekonomis untuk kebutuhan sekolah dan belajar sehari-hari. Solusi hemat untuk perlengkapan sekolah.",
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
    image: "images/paket-anak-rajin.jpeg",
    name: "Paket Anak Rajin",
    shortDesc: "Paket alat tulis lengkap untuk membantu anak lebih rapi dan semangat belajar.",
    intro: "Paket alat tulis lengkap untuk membantu anak lebih rapi, aktif mencatat, dan semangat belajar setiap hari.",
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
    image: "images/paket-hadiah-prestasi.jpeg",
    name: "Paket Hadiah Prestasi",
    shortDesc: "Paket hadiah lucu dan menarik untuk apresiasi anak berprestasi.",
    intro: "Paket hadiah lucu dan menarik untuk apresiasi anak berprestasi di sekolah maupun lomba. Hadiah sederhana yang bikin anak bahagia.",
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
    image: "images/paket-ujian-premium.jpeg",
    name: "Paket Ujian Premium",
    shortDesc: "Persiapkan ujian dengan perlengkapan lengkap dan nyaman.",
    intro: "Persiapkan ujian dengan perlengkapan lengkap dan nyaman menggunakan Paket Ujian Premium. Ujian jadi lebih siap dan tenang.",
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
    image: "images/paket-literasi.jpeg",
    name: "Paket Literasi",
    shortDesc: "Dukung kebiasaan membaca anak sejak dini dengan paket yang edukatif.",
    intro: "Dukung kebiasaan membaca anak sejak dini dengan Paket Literasi yang edukatif dan menyenangkan. Yuk tumbuhkan budaya membaca sejak sekarang.",
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
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="card-badge">${p.badge}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.name}</h3>
        <p class="card-desc">${p.shortDesc}</p>
        <ul class="card-items">
          ${p.items.slice(0, 3).map(item => `<li>${item}</li>`).join('')}
          ${p.items.length > 3 ? `<li>+${p.items.length - 3} lainnya...</li>` : ''}
        </ul>
        <div class="card-cta">
          <span class="card-link">Lihat Detail</span>
          <div class="card-arrow">→</div>
        </div>
      </div>
    </div>
  `).join('');

  observeElements();
}

// === MODAL ===
function openModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <h2 class="modal-title">${product.name}</h2>
    <p class="modal-intro">${product.intro}</p>
    <p class="modal-subtitle">Isi Paket:</p>
    <ul class="modal-items">
      ${product.items.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p class="modal-subtitle">Keunggulan:</p>
    <ul class="modal-keunggulan">
      ${product.keunggulan.map(k => `<li>${k}</li>`).join('')}
    </ul>
    <div class="modal-actions">
      <a href="https://www.instagram.com/stationery__id?igsh=MWY0OGQzbHR3cjM3Zg==" target="_blank" class="btn-primary">
        Order via Instagram
      </a>
      <a href="https://wa.me/6281234567890?text=Halo%20Stationery.id%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}" target="_blank" class="btn-outline">
        Chat WhatsApp
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
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(el => observer.observe(el));
}

// === NAVBAR SCROLL ===
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}

// === HAMBURGER MENU ===
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
    });
  });
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  observeElements();
  initHamburger();
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
});