const siteConfig = {
  phoneDisplay: '+7 (800) 000‑00‑00',
  phoneHref: '+78000000000',
  email: 'info@plaskospb.ru',
  city: 'Санкт‑Петербург'
};

const products = [
  {
    id: 'pla-standart-bgr',
    name: 'PLA Standart — BGR',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'код цвета BGR',
    image: 'assets/products/PLA_ST_BGR.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #9a6c3b, #d7b07a)',
    desc: 'Оригинальное фото из присланного архива. Точное коммерческое название и цена будут перенесены после полной выгрузки каталога PLASKO.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'BGR', 'Источник фото': 'исходный архив', 'Статус': 'частичная загрузка' }
  },
  {
    id: 'pla-standart-bl',
    name: 'PLA Standart — Black',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'чёрный (BL)',
    image: 'assets/products/PLA_ST_BL.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #111827, #475569)',
    desc: 'Оригинальное фото PLA Standart. Цвет обозначен по имени исходного файла.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'BL', 'Цвет': 'Black', 'Статус': 'частичная загрузка' }
  },
  {
    id: 'pla-standart-blu',
    name: 'PLA Standart — Blue',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'синий (BLu)',
    image: 'assets/products/PLA_ST_BLu.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
    desc: 'Оригинальное фото PLA Standart. Цвет обозначен по имени исходного файла.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'BLu', 'Цвет': 'Blue', 'Статус': 'частичная загрузка' }
  },
  {
    id: 'pla-standart-gr',
    name: 'PLA Standart — Green',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'зелёный (gr)',
    image: 'assets/products/PLA_ST_gr.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #166534, #4ade80)',
    desc: 'Оригинальное фото PLA Standart. Цвет обозначен по имени исходного файла.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'gr', 'Цвет': 'Green', 'Статус': 'частичная загрузка' }
  },
  {
    id: 'pla-standart-grey',
    name: 'PLA Standart — Grey',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'серый (grey)',
    image: 'assets/products/PLA_ST_grey.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #64748b, #cbd5e1)',
    desc: 'Оригинальное фото PLA Standart. Цвет обозначен по имени исходного файла.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'grey', 'Цвет': 'Grey', 'Статус': 'частичная загрузка' }
  },
  {
    id: 'pla-standart-nat',
    name: 'PLA Standart — Natural',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'натуральный (nat)',
    image: 'assets/products/PLA_ST_nat.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #f5f5f4, #d6d3d1)',
    desc: 'Оригинальное фото PLA Standart. Цвет обозначен по имени исходного файла.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'nat', 'Цвет': 'Natural', 'Статус': 'частичная загрузка' }
  },
  {
    id: 'pla-standart-or',
    name: 'PLA Standart — Orange',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'оранжевый (OR)',
    image: 'assets/products/PLA_ST_OR.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #ea580c, #fb923c)',
    desc: 'Оригинальное фото PLA Standart. Цвет обозначен по имени исходного файла.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'OR', 'Цвет': 'Orange', 'Статус': 'частичная загрузка' }
  },
  {
    id: 'pla-standart-rd',
    name: 'PLA Standart — Red',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'красный (RD)',
    image: 'assets/products/PLA_ST_RD.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #b91c1c, #fb7185)',
    desc: 'Оригинальное фото PLA Standart. Цвет обозначен по имени исходного файла.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'RD', 'Цвет': 'Red', 'Статус': 'частичная загрузка' }
  },
  {
    id: 'pla-standart-wt',
    name: 'PLA Standart — White',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'белый (WT)',
    image: 'assets/products/PLA_ST_WT.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #ffffff, #e2e8f0)',
    desc: 'Оригинальное фото PLA Standart. Цвет обозначен по имени исходного файла.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'WT', 'Цвет': 'White', 'Статус': 'частичная загрузка' }
  },
  {
    id: 'pla-standart-yel',
    name: 'PLA Standart — Yellow',
    material: 'PLA Standart',
    use: ['easy', 'visual'],
    colorName: 'жёлтый (YEL)',
    image: 'assets/products/PLA_ST_YEL.jpg',
    price: null,
    priceLabel: 'Цена переносится 1:1 с оригинального сайта',
    stock: 'Частично',
    request: true,
    action: 'request',
    swatch: 'linear-gradient(135deg, #eab308, #fde047)',
    desc: 'Оригинальное фото PLA Standart. Цвет обозначен по имени исходного файла.',
    specs: { 'Материал': 'PLA Standart', 'Код цвета': 'YEL', 'Цвет': 'Yellow', 'Статус': 'частичная загрузка' }
  }
];

const currency = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
const cartKey = 'plaskospb-cart-v001';
let state = {
  material: 'all',
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
  if (state.search) {
    list = list.filter((product) => [product.name, product.material, product.colorName, product.desc, Object.values(product.specs).join(' ')]
      .join(' ')
      .toLowerCase()
      .includes(state.search));
  }
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
    const photo = qs('.product-photo', node);
    const art = qs('.product-art', node);
    if (product.image) {
      photo.src = product.image;
      photo.alt = product.name;
      art.classList.add('has-photo');
    }
    const specs = qs('.specs', node);
    Object.entries(product.specs).forEach(([key, value]) => {
      const row = document.createElement('div');
      row.innerHTML = `<dt>${escapeHtml(key)}</dt><dd>${escapeHtml(value)}</dd>`;
      specs.append(row);
    });
    qs('.price', node).textContent = product.priceLabel || `от ${currency.format(product.price)}`;
    const button = qs('button', node);
    if (product.action === 'request' || !Number.isFinite(product.price)) {
      button.textContent = 'Уточнить';
      button.addEventListener('click', () => requestProduct(product));
    } else {
      button.addEventListener('click', () => addToCart(product.id));
    }
    grid.append(node);
  });
}

function resetFilters() {
  state.material = 'all';
  state.sort = 'default';
  state.search = '';
  qs('[data-material-filter]').value = 'all';
  qs('[data-sort]').value = 'default';
  qs('[data-search]').value = '';
  renderProducts();
}

function requestProduct(product) {
  const message = qs('[data-lead-form] textarea[name="message"]');
  message.value = `Интересует позиция: ${product.name}. Цвет/вариант: ${product.colorName}. Нужна актуальная цена и условия поставки.`;
  qs('#wholesale').scrollIntoView({ behavior: 'smooth', block: 'start' });
  message.focus();
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
    .filter((item) => item.product && Number.isFinite(item.product.price));
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
    holder.innerHTML = '<div class="empty-state"><h3>Корзина пустая</h3><p>В текущей частичной версии подтверждённые позиции оформлены через запрос, поэтому корзина пока может оставаться пустой.</p></div>';
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
    qs('[data-checkout-status]').textContent = 'В корзине нет позиций с подтверждённой ценой. Используйте форму запроса ниже.';
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
    'Запрос с сайта plaskospb.ru',
    '',
    `Имя / компания: ${data.name || ''}`,
    `Контакт: ${data.contact || ''}`,
    `Запрос: ${data.message || ''}`
  ].join('\n');
  await copyText(text);
  window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent('Запрос PLASKO SPB')}&body=${encodeURIComponent(text)}`;
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
