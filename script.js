// ============================================
//   STATIONERY.ID — MAIN SCRIPT
// ============================================

// === PRODUCT DATA ===
const products = [
  {
    id: 1,
    image: "images/paket-menulis-lengkap.jpeg",
    name: "Paket Menulis Lengkap",
    price: 18000,
    shortDesc: "Perlengkapan menulis sehari-hari yang praktis dan hemat untuk anak SD & SMP.",
    intro: "Lengkapi kebutuhan sekolah dan belajar si kecil dengan Paket Menulis Lengkap yang praktis dan hemat. Cocok untuk anak SD, SMP, maupun kebutuhan sehari-hari.",
    items: ["Buku tulis", "Pensil", "Pulpen", "Penghapus", "Penggaris", "Rautan"],
    keunggulan: ["Perlengkapan lengkap dalam satu paket","Cocok untuk sekolah, hadiah, dan kebutuhan belajar","Praktis dibawa dan digunakan sehari-hari","Kualitas baik dengan harga terjangkau","Membantu anak lebih semangat belajar"],
    badge: "Terlaris"
  },
  {
    id: 2,
    image: "images/paket-back-to-school.jpeg",
    name: "Paket Back to School",
    price: 30000,
    shortDesc: "Siapkan perlengkapan sekolah anak jadi lebih praktis untuk tahun ajaran baru.",
    intro: "Siapkan perlengkapan sekolah anak jadi lebih praktis dengan Paket Back to School yang lengkap dan hemat.",
    items: ["Buku tulis 3–5 buah", "Pensil", "Pulpen", "Penghapus", "Penggaris", "Rautan", "Sampul buku"],
    keunggulan: ["Perlengkapan sekolah lengkap","Cocok untuk anak SD & SMP","Praktis dan siap pakai","Harga hemat dan berkualitas","Membantu anak lebih semangat sekolah"],
    badge: "Populer"
  },
  {
    id: 3,
    image: "images/paket-kreatif-anak.jpeg",
    name: "Paket Kreatif Anak",
    price: 40000,
    shortDesc: "Ajak anak belajar sambil berkreasi dengan paket yang seru dan edukatif.",
    intro: "Ajak anak belajar sambil berkreasi dengan Paket Kreatif Anak yang seru dan edukatif.",
    items: ["Kertas origami", "Lem", "Gunting", "Pensil warna", "Spidol warna"],
    keunggulan: ["Melatih kreativitas dan motorik anak","Warna menarik dan lengkap","Cocok untuk kegiatan prakarya","Aman dan nyaman digunakan anak"],
    badge: "Edukatif"
  },
  {
    id: 4,
    image: "images/paket-matematika.jpeg",
    name: "Paket Matematika",
    price: 25000,
    shortDesc: "Paket perlengkapan matematika lengkap untuk SD hingga SMP.",
    intro: "Paket perlengkapan matematika lengkap untuk mendukung kegiatan belajar di sekolah maupun di rumah.",
    items: ["Penggaris", "Busur derajat", "Jangka", "Pensil", "Penghapus"],
    keunggulan: ["Lengkap untuk pelajaran matematika","Praktis dibawa ke sekolah","Membantu belajar lebih mudah","Cocok untuk tugas dan ujian"],
    badge: "Belajar"
  },
  {
    id: 5,
    image: "images/paket-mewarnai.jpeg",
    name: "Paket Mewarnai",
    price: 35000,
    shortDesc: "Buat aktivitas menggambar dan mewarnai jadi lebih seru untuk anak-anak.",
    intro: "Buat aktivitas menggambar dan mewarnai jadi lebih seru dengan Paket Mewarnai yang lengkap dan menarik.",
    items: ["Buku gambar", "Krayon atau pensil warna", "Penghapus", "Pensil"],
    keunggulan: ["Cocok untuk belajar dan bermain","Membantu melatih kreativitas anak","Praktis dan mudah dibawa","Warna cerah dan menarik"],
    badge: "Seru"
  },
  {
    id: 6,
    image: "images/paket-belajar-hemat.jpeg",
    name: "Paket Belajar Hemat",
    price: 12000,
    shortDesc: "Paket alat tulis sederhana dengan harga ekonomis untuk kebutuhan harian.",
    intro: "Paket alat tulis sederhana dengan harga ekonomis untuk kebutuhan sekolah dan belajar sehari-hari.",
    items: ["2 Pensil", "1 Penghapus", "1 Penggaris", "1 Pulpen"],
    keunggulan: ["Harga terjangkau","Cocok untuk pelajar","Praktis dan simpel","Pas untuk kebutuhan harian"],
    badge: "Hemat"
  },
  {
    id: 7,
    image: "images/paket-anak-rajin.jpeg",
    name: "Paket Anak Rajin",
    price: 30000,
    shortDesc: "Paket alat tulis lengkap untuk membantu anak lebih rapi dan semangat belajar.",
    intro: "Paket alat tulis lengkap untuk membantu anak lebih rapi, aktif mencatat, dan semangat belajar setiap hari.",
    items: ["Buku catatan", "Sticky notes", "Stabilo", "Pulpen", "Penggaris"],
    keunggulan: ["Cocok untuk mencatat pelajaran","Membantu belajar lebih teratur","Desain menarik dan praktis","Pas untuk sekolah maupun les"],
    badge: "Favorit"
  },
  {
    id: 8,
    image: "images/paket-hadiah-prestasi.jpeg",
    name: "Paket Hadiah Prestasi",
    price: 25000,
    shortDesc: "Paket hadiah lucu dan menarik untuk apresiasi anak berprestasi.",
    intro: "Paket hadiah lucu dan menarik untuk apresiasi anak berprestasi di sekolah maupun lomba.",
    items: ["Buku tulis lucu", "Pensil karakter", "Penghapus karakter", "Stiker"],
    keunggulan: ["Cocok untuk hadiah dan reward anak","Desain lucu dan menarik","Membuat anak lebih semangat belajar","Pas untuk lomba dan kegiatan sekolah"],
    badge: "Kado"
  },
  {
    id: 9,
    image: "images/paket-ujian-premium.jpeg",
    name: "Paket Ujian Premium",
    price: 28000,
    shortDesc: "Persiapkan ujian dengan perlengkapan lengkap dan nyaman.",
    intro: "Persiapkan ujian dengan perlengkapan lengkap dan nyaman. Ujian jadi lebih siap dan tenang.",
    items: ["Pensil 2B", "Penghapus berkualitas", "Pulpen hitam", "Penggaris", "Rautan", "Air mineral kecil", "Permen"],
    keunggulan: ["Lengkap untuk kebutuhan ujian","Praktis dan siap pakai","Membantu siswa lebih fokus","Cocok untuk ujian sekolah dan try out"],
    badge: "Premium"
  },
  {
    id: 10,
    image: "images/paket-literasi.jpeg",
    name: "Paket Literasi",
    price: 40000,
    shortDesc: "Dukung kebiasaan membaca anak sejak dini dengan paket yang edukatif.",
    intro: "Dukung kebiasaan membaca anak sejak dini dengan Paket Literasi yang edukatif dan menyenangkan.",
    items: ["Buku bacaan anak", "Pembatas buku", "Buku catatan kecil", "Pensil"],
    keunggulan: ["Membantu meningkatkan minat baca","Cocok untuk aktivitas literasi sekolah","Praktis dibawa dan digunakan","Edukatif dan bermanfaat"],
    badge: "Edukatif"
  }
];

// === CART STATE ===
let cart = [];

// === FORMAT RUPIAH ===
function formatRupiah(num) {
  return 'Rp' + num.toLocaleString('id-ID');
}

// === CART FUNCTIONS ===
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showCartToast(product.name);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { updateCartUI(); renderCartItems(); }
}

function clearCart() {
  cart = [];
  updateCartUI();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((sum, c) => sum + c.price * c.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, c) => sum + c.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';

  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = formatRupiah(getCartTotal());

  const checkoutBtn = document.getElementById('checkoutIg');
  const checkoutWa = document.getElementById('checkoutWa');
  const emptyMsg = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');

  if (emptyMsg) emptyMsg.style.display = cart.length === 0 ? 'block' : 'none';
  if (cartFooter) cartFooter.style.display = cart.length === 0 ? 'none' : 'block';
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">${formatRupiah(item.price)}</p>
        <div class="cart-item-qty">
          <button onclick="changeQty(${item.id}, -1)" class="qty-btn">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, +1)" class="qty-btn">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <p class="cart-item-subtotal">${formatRupiah(item.price * item.qty)}</p>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    </div>
  `).join('');
}

function buildOrderMessage() {
  const lines = cart.map(c => `• ${c.name} x${c.qty} = ${formatRupiah(c.price * c.qty)}`);
  lines.push('');
  lines.push(`Total: ${formatRupiah(getCartTotal())}`);
  return lines.join('\n');
}

function openCart() {
  renderCartItems();
  updateCartUI();
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function showCartToast(name) {
  const toast = document.getElementById('cartToast');
  toast.textContent = `${name} ditambahkan ke keranjang!`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// === CHECKOUT ===
function checkoutIG() {
  const msg = buildOrderMessage();
  const url = `https://www.instagram.com/stationery__id?igsh=MWY0OGQzbHR3cjM3Zg==`;
  // Copy message to clipboard then open IG
  navigator.clipboard.writeText('Halo Stationery.id, saya ingin order:\n' + msg).catch(()=>{});
  window.open(url, '_blank');
  const btn = document.getElementById('checkoutIg');
  btn.textContent = 'Pesan disalin! Buka IG...';
  setTimeout(() => btn.innerHTML = '<svg viewBox="0 0 32 32" fill="currentColor" width="18" height="18"><path d="M14 8.81q3 0 5.1 2.1t2.09 5.1-2.1 5.08T14 23.2t-5.1-2.1T6.82 16t2.1-5.1T14 8.82zm0 11.88q1.94 0 3.31-1.38T18.7 16t-1.38-3.31T14 11.3t-3.31 1.38T9.3 16t1.38 3.31T14 20.7zM23.13 8.5q0 .69-.47 1.19t-1.16.5-1.19-.5-.5-1.19.5-1.16 1.19-.46 1.16.46.46 1.16zm4.8 1.75Q28 11.94 28 16t-.06 5.75q-.19 3.81-2.28 5.9t-5.9 2.23Q18.05 30 14 30t-5.75-.13q-3.81-.18-5.87-2.25-.82-.75-1.32-1.75t-.72-1.93-.21-2.2Q0 20.07 0 16t.13-5.81Q.3 6.44 2.38 4.37q2.06-2.12 5.87-2.31Q9.94 2 14 2t5.75.06q3.81.19 5.9 2.28t2.29 5.9zm-3 14q.2-.5.32-1.28t.19-1.88.06-1.78V12.7l-.06-1.78-.19-1.88-.31-1.28q-.75-1.94-2.69-2.69-.5-.18-1.28-.31t-1.88-.19-1.75-.06H10.7l-1.78.06-1.88.19-1.28.31q-1.94.75-2.69 2.7-.18.5-.31 1.27t-.19 1.88-.06 1.75v6l.03 1.53.1 1.6.18 1.34.25 1.12q.82 1.94 2.69 2.69.5.19 1.28.31t1.88.19 1.75.06h6.65l1.78-.06 1.88-.19 1.28-.31q1.94-.81 2.69-2.69z"/></svg> Order via Instagram', 2500);
}

function checkoutWA() {
  const msg = encodeURIComponent('Halo Stationery.id, saya ingin order:\n' + buildOrderMessage());
  window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
}

// === RENDER PRODUCT CARDS ===
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card" data-animate>
      <div class="card-img-wrap" onclick="openModal(${p.id})">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="card-badge">${p.badge}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title" onclick="openModal(${p.id})">${p.name}</h3>
        <p class="card-desc">${p.shortDesc}</p>
        <ul class="card-items">
          ${p.items.slice(0, 3).map(item => `<li>${item}</li>`).join('')}
          ${p.items.length > 3 ? `<li>+${p.items.length - 3} lainnya...</li>` : ''}
        </ul>
        <div class="card-footer">
          <span class="card-price">${formatRupiah(p.price)}</span>
          <button class="card-add-btn" onclick="addToCart(${p.id})">
            <span>+ Keranjang</span>
          </button>
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
    <p class="modal-price">${formatRupiah(product.price)}</p>
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
      <button class="btn-primary" onclick="addToCart(${product.id}); closeModal();">
        + Tambah ke Keranjang
      </button>
      <a href="https://www.instagram.com/stationery__id?igsh=MWY0OGQzbHR3cjM3Zg==" target="_blank" class="btn-outline">
        Lihat di Instagram
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
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
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
  updateCartUI();
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // Cart button
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeCart();
  });
  document.getElementById('clearCartBtn').addEventListener('click', clearCart);
  document.getElementById('checkoutIg').addEventListener('click', checkoutIG);
  document.getElementById('checkoutWa').addEventListener('click', checkoutWA);
});