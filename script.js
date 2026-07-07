const siteConfig = {
  phoneDisplay: '+7 (800) 000‑00‑00',
  phoneHref: '+78000000000',
  email: 'info@plaskospb.ru',
  city: 'Санкт‑Петербург'
};

const products = [
  {
    id: 'pla-basic-1kg',
    name: 'PLA Basic 1 кг',
    material: 'PLA',
    use: ['easy', 'visual'],
    colorName: 'базовые цвета',
    price: 1190,
    stock: 'В наличии',
    request: false,
    swatch: 'linear-gradient(135deg, #ffffff 0%, #40d9ff 45%, #7c3aed 100%)',
    desc: 'Универсальный материал для макетов, прототипов, декоративных изделий и повседневной печати.',
    specs: { 'Темп. сопла': '190–220°C', 'Стол': '40–60°C', 'Вес': '1 кг', 'Диаметр': '1.75 мм' }
  },
  {
    id: 'pla-hs-1kg',
    name: 'PLA HS 1 кг',
    material: 'PLA HS',
    use: ['easy', 'functional'],
    colorName: 'чёрный / белый / серый',
    price: 1390,
    stock: 'В наличии',
    request: false,
    swatch: 'linear-gradient(135deg, #0f172a, #94a3b8)',
    desc: 'PLA для скоростной печати: подходит для быстрых прототипов и серийных задач на современных FDM‑принтерах.',
    specs: { 'Темп. сопла': '200–230°C', 'Стол': '45–65°C', 'Вес': '1 кг', 'Скорость': 'до 250 мм/с' }
  },
  {
    id: 'pla-silk-1kg',
    name: 'PLA Silk 1 кг',
    material: 'PLA',
    use: ['visual'],
    colorName: 'шёлковые цвета',
    price: 1590,
    stock: 'Под заказ',
    request: true,
    swatch: 'linear-gradient(135deg, #f59e0b, #fef08a 45%, #fb7185)',
    desc: 'Декоративный PLA с глянцевым эффектом для подарочных изделий, сувениров и визуальных образцов.',
    specs: { 'Темп. сопла': '200–225°C', 'Стол': '45–60°C', 'Вес': '1 кг', 'Эффект': 'глянец' }
  },
  {
    id: 'petg-1kg',
    name: 'PETG 1 кг',
    material: 'PETG',
    use: ['functional', 'easy'],
    colorName: 'прозрачный / чёрный / белый',
    price: 1290,
    stock: 'В наличии',
    request: false,
    swatch: 'linear-gradient(135deg, #67e8f9, #0891b2)',
    desc: 'Прочный повседневный материал с хорошей межслойной адгезией для функциональных деталей и корпусов.',
    specs: { 'Темп. сопла': '225–250°C', 'Стол': '70–85°C', 'Вес': '1 кг', 'Усадка': 'низкая' }
  },
  {
    id: 'abs-1kg',
    name: 'ABS 1 кг',
    material: 'ABS',
    use: ['functional', 'engineering'],
    colorName: 'технические цвета',
    price: 1190,
    stock: 'В наличии',
    request: false,
    swatch: 'linear-gradient(135deg, #111827, #ef4444)',
    desc: 'Классический инженерный пластик для корпусов, оснастки и деталей, требующих постобработки ацетоном.',
    specs: { 'Темп. сопла': '235–260°C', 'Стол': '90–110°C', 'Камера': 'желательна', 'Вес': '1 кг' }
  },
  {
    id: 'tpu-a95-075kg',
    name: 'TPU A95 0.75 кг',
    material: 'TPU',
    use: ['flexible', 'functional'],
    colorName: 'чёрный / прозрачный',
    price: 1690,
    stock: 'В наличии',
    request: false,
    swatch: 'linear-gradient(135deg, #16a34a, #86efac)',
    desc: 'Гибкий материал для амортизаторов, прокладок, защитных кожухов и эластичных изделий.',
    specs: { 'Темп. сопла': '220–240°C', 'Стол': '40–60°C', 'Твёрдость': 'A95', 'Вес': '0.75 кг' }
  },
  {
    id: 'pa12-075kg',
    name: 'PA12 Nylon 0.75 кг',
    material: 'PA',
    use: ['engineering'],
    colorName: 'натуральный / чёрный',
    price: 2490,
    stock: 'Под заказ',
    request: true,
    swatch: 'linear-gradient(135deg, #f8fafc, #cbd5e1 55%, #64748b)',
    desc: 'Полиамид для износостойких и нагруженных деталей. Требует сушки перед печатью и контроля влажности.',
    specs: { 'Темп. сопла': '245–275°C', 'Стол': '80–100°C', 'Сушка': 'обязательна', 'Вес': '0.75 кг' }
  },
  {
    id: 'sbs-1kg',
    name: 'SBS 1 кг',
    material: 'SBS',
    use: ['visual', 'functional'],
    colorName: 'прозрачные цвета',
    price: 1490,
    stock: 'Под заказ',
    request: true,
    swatch: 'linear-gradient(135deg, rgba(14,165,233,.3), rgba(124,58,237,.9))',
    desc: 'Материал для полупрозрачных изделий, ваз, световых корпусов и деталей с красивой химической постобработкой.',
    specs: { 'Темп. сопла': '230–250°C', 'Стол': '70–90°C', 'Вес': '1 кг', 'Фактура': 'глянец' }
  },
  {
    id: 'hips-1kg',
    name: 'HIPS 1 кг',
    material: 'HIPS',
    use: ['engineering', 'functional'],
    colorName: 'натуральный / белый',
    price: 1390,
    stock: 'Под заказ',
    request: true,
    swatch: 'linear-gradient(135deg, #fefce8, #eab308)',
    desc: 'Материал для печати деталей и растворимой поддержки в сочетании с ABS‑подобными пластиками.',
    specs: { 'Темп. сопла': '230–250°C', 'Стол': '90–110°C', 'Вес': '1 кг', 'Поддержки': 'лимонен' }
  },
  {
    id: 'asa-1kg',
    name: 'ASA 1 кг',
    material: 'ASA',
    use: ['engineering', 'functional'],
    colorName: 'чёрный / серый',
    price: 1890,
    stock: 'Под заказ',
    request: true,
    swatch: 'linear-gradient(135deg, #020617, #475569)',
    desc: 'Атмосферостойкий материал для наружных деталей, корпусов, креплений и изделий под УФ‑нагрузкой.',
    specs: { 'Темп. сопла': '240–265°C', 'Стол': '90–110°C', 'Камера': 'желательна', 'Вес': '1 кг' }
  }
];

const currency = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
const cartKey = 'plaskospb-cart-v001';
let state = {
  material: 'all',
  use: 'all',
  sort: 'default',
  search: '',
  cart: loadCart()
};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

function init() {
  applyContacts();
  fillMaterialFilter();
  bindEvents();
  renderProducts();
  renderCart();
}

function applyContacts() {
  qsa('[data-phone-link]').forEach((link) => {
    link.textContent = siteConfig.phoneDisplay;
    link.setAttribute('href', `tel:${siteConfig.phoneHref}`);
  });
  qsa('[data-email-link]').forEach((link) => {
    link.textContent = siteConfig.email;
    link.setAttribute('href', `mailto:${siteConfig.email}`);
  });
}

function fillMaterialFilter() {
  const select = qs('[data-material-filter]');
  const materials = [...new Set(products.map((product) => product.material))].sort((a, b) => a.localeCompare(b, 'ru'));
  materials.forEach((material) => {
    const option = document.createElement('option');
    option.value = material;
    option.textContent = material;
    select.append(option);
  });
}

function bindEvents() {
  qs('[data-search]').addEventListener('input', (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderProducts();
  });
  qs('[data-material-filter]').addEventListener('change', (event) => {
    state.material = event.target.value;
    renderProducts();
  });
  qs('[data-use-filter]').addEventListener('change', (event) => {
    state.use = event.target.value;
    renderProducts();
  });
  qs('[data-sort]').addEventListener('change', (event) => {
    state.sort = event.target.value;
    renderProducts();
  });
  qs('[data-reset-filters]').addEventListener('click', resetFilters);
  qs('[data-home-link]').addEventListener('click', goHome);
  qs('[data-menu-toggle]').addEventListener('click', toggleMenu);
  qsa('.main-nav a').forEach((link) => link.addEventListener('click', closeMenu));
  qs('[data-cart-open]').addEventListener('click', openCart);
  qs('[data-cart-close]').addEventListener('click', closeCart);
  qs('[data-cart-drawer]').addEventListener('click', (event) => {
    if (event.target.matches('[data-cart-drawer]')) closeCart();
  });
  qs('[data-copy-order]').addEventListener('click', copyCurrentOrder);
  qs('[data-checkout-form]').addEventListener('submit', submitCheckout);
  qs('[data-lead-form]').addEventListener('submit', submitLeadForm);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeCart();
  });
}

function toggleMenu() {
  const button = qs('[data-menu-toggle]');
  const nav = qs('.main-nav');
  const willOpen = !nav.classList.contains('open');
  nav.classList.toggle('open', willOpen);
  button.setAttribute('aria-expanded', String(willOpen));
}
function closeMenu() {
  qs('.main-nav').classList.remove('open');
  qs('[data-menu-toggle]').setAttribute('aria-expanded', 'false');
}

function goHome(event) {
  event.preventDefault();
  closeMenu();
  closeCart();
  if (window.location.hash) {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function filteredProducts() {
  let list = [...products];
  if (state.material !== 'all') list = list.filter((product) => product.material === state.material);
  if (state.use !== 'all') list = list.filter((product) => product.use.includes(state.use));
  if (state.search) {
    list = list.filter((product) => [product.name, product.material, product.colorName, product.desc, Object.values(product.specs).join(' ')]
      .join(' ')
      .toLowerCase()
      .includes(state.search));
  }
  if (state.sort === 'priceAsc') list.sort((a, b) => a.price - b.price);
  if (state.sort === 'priceDesc') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'nameAsc') list.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  return list;
}

function renderProducts() {
  const grid = qs('[data-product-grid]');
  const empty = qs('[data-empty-state]');
  const template = qs('#product-card-template');
  const list = filteredProducts();
  grid.innerHTML = '';
  empty.hidden = list.length > 0;

  list.forEach((product) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.style.setProperty('--swatch', product.swatch);
    qs('.pill', node).textContent = product.material;
    const stock = qs('.stock', node);
    stock.textContent = product.stock;
    if (product.request) stock.classList.add('request');
    qs('h3', node).textContent = product.name;
    qs('.product-desc', node).textContent = product.desc;
    const specs = qs('.specs', node);
    Object.entries(product.specs).forEach(([key, value]) => {
      const row = document.createElement('div');
      row.innerHTML = `<dt>${escapeHtml(key)}</dt><dd>${escapeHtml(value)}</dd>`;
      specs.append(row);
    });
    qs('.price', node).textContent = `от ${currency.format(product.price)}`;
    qs('button', node).addEventListener('click', () => addToCart(product.id));
    grid.append(node);
  });
}

function resetFilters() {
  state.material = 'all';
  state.use = 'all';
  state.sort = 'default';
  state.search = '';
  qs('[data-material-filter]').value = 'all';
  qs('[data-use-filter]').value = 'all';
  qs('[data-sort]').value = 'default';
  qs('[data-search]').value = '';
  renderProducts();
}

function addToCart(id) {
  const line = state.cart.find((item) => item.id === id);
  if (line) line.qty += 1;
  else state.cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  openCart();
}
function updateQty(id, delta) {
  const line = state.cart.find((item) => item.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) state.cart = state.cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}
function removeFromCart(id) {
  state.cart = state.cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}
function cartLines() {
  return state.cart
    .map((item) => ({ ...item, product: products.find((product) => product.id === item.id) }))
    .filter((item) => item.product);
}
function cartTotal() {
  return cartLines().reduce((sum, item) => sum + item.product.price * item.qty, 0);
}
function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  qs('[data-cart-count]').textContent = count;
  qs('[data-cart-total]').textContent = currency.format(cartTotal());
  const holder = qs('[data-cart-items]');
  holder.innerHTML = '';

  const lines = cartLines();
  if (lines.length === 0) {
    holder.innerHTML = '<div class="empty-state"><h3>Корзина пустая</h3><p>Добавьте позиции из каталога, чтобы сформировать заявку.</p></div>';
    return;
  }

  lines.forEach(({ product, qty }) => {
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div class="cart-row-swatch" style="--swatch:${product.swatch}"></div>
      <div>
        <h4>${escapeHtml(product.name)}</h4>
        <p>${escapeHtml(product.material)} • ${escapeHtml(product.colorName)} • ${currency.format(product.price)}</p>
        <button class="remove-line" type="button">Удалить</button>
      </div>
      <div class="qty-controls">
        <button type="button" aria-label="Уменьшить">−</button>
        <strong>${qty}</strong>
        <button type="button" aria-label="Увеличить">+</button>
      </div>`;
    const buttons = qsa('.qty-controls button', row);
    buttons[0].addEventListener('click', () => updateQty(product.id, -1));
    buttons[1].addEventListener('click', () => updateQty(product.id, 1));
    qs('.remove-line', row).addEventListener('click', () => removeFromCart(product.id));
    holder.append(row);
  });
}
function openCart() {
  qs('[data-cart-drawer]').setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
}
function closeCart() {
  qs('[data-cart-drawer]').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
}
function saveCart() { localStorage.setItem(cartKey, JSON.stringify(state.cart)); }
function loadCart() {
  try { return JSON.parse(localStorage.getItem(cartKey)) || []; }
  catch { return []; }
}

function buildOrderText(formData = {}) {
  const lines = cartLines();
  const orderLines = lines.map(({ product, qty }, index) => `${index + 1}. ${product.name} — ${qty} шт. × ${currency.format(product.price)} = ${currency.format(product.price * qty)}; цвет/вариант: ${product.colorName}`).join('\n');
  return [
    'Заявка с сайта plaskospb.ru',
    '',
    formData.customer ? `Имя: ${formData.customer}` : '',
    formData.phone ? `Телефон: ${formData.phone}` : '',
    formData.email ? `Email: ${formData.email}` : '',
    formData.delivery ? `Доставка: ${formData.delivery}` : '',
    formData.comment ? `Комментарий: ${formData.comment}` : '',
    '',
    'Состав заказа:',
    orderLines || 'Корзина пустая',
    '',
    `Итого ориентировочно: ${currency.format(cartTotal())}`,
    'Финальная стоимость, наличие и доставка подтверждаются менеджером.'
  ].filter(Boolean).join('\n');
}
async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const area = document.createElement('textarea');
  area.value = text;
  document.body.append(area);
  area.select();
  const ok = document.execCommand('copy');
  area.remove();
  return ok;
}
async function copyCurrentOrder() {
  const text = buildOrderText();
  await copyText(text);
  qs('[data-checkout-status]').textContent = 'Заказ скопирован в буфер обмена.';
}
async function submitCheckout(event) {
  event.preventDefault();
  if (cartLines().length === 0) {
    qs('[data-checkout-status]').textContent = 'Добавьте хотя бы одну позицию в корзину.';
    return;
  }
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const text = buildOrderText(data);
  await copyText(text);
  const subject = encodeURIComponent('Заявка с сайта plaskospb.ru');
  const body = encodeURIComponent(text);
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  qs('[data-checkout-status]').textContent = 'Заявка скопирована и открыта в почтовом клиенте.';
}
async function submitLeadForm(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const text = [
    'Оптовый запрос с сайта plaskospb.ru',
    '',
    `Имя / компания: ${data.name || ''}`,
    `Контакт: ${data.contact || ''}`,
    `Запрос: ${data.message || ''}`
  ].join('\n');
  await copyText(text);
  window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent('Оптовый запрос PLASKO SPB')}&body=${encodeURIComponent(text)}`;
  qs('[data-lead-status]').textContent = 'Запрос скопирован и открыт в почтовом клиенте.';
}
function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

document.addEventListener('DOMContentLoaded', init);
