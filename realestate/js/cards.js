// js/cards.js — property card / listing / detail partials (browser build)
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.EstateCards = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  const { esc, formatINR, priceLabel, statusLabel, bedLabel, parseAmount, emi, HEART, PIN } = (typeof EstateUtil !== 'undefined' ? EstateUtil : require('./util'));

function filterProperties(all, query) {
  let list = all.slice();
  const q = (query.q || '').toLowerCase().trim();
  if (q) {
    list = list.filter((p) =>
      (p.name + ' ' + p.location + ' ' + p.city + ' ' + p.type + ' ' + p.badge).toLowerCase().includes(q)
    );
  }
  if (query.type && query.type !== 'any' && query.type !== 'all') list = list.filter((p) => p.type === query.type);
  if (query.listing && query.listing !== 'any' && query.listing !== 'all') list = list.filter((p) => p.listing === query.listing);
  if (query.city && query.city !== 'any' && query.city !== 'all') list = list.filter((p) => p.city === query.city);

  const min = parseAmount(query.minPrice);
  const max = parseAmount(query.maxPrice);
  if (min != null) list = list.filter((p) => p.price >= min);
  if (max != null) list = list.filter((p) => p.price <= max);

  if (query.bhk && query.bhk !== 'any' && query.bhk !== '') {
    const b = parseInt(query.bhk, 10);
    list = list.filter((p) => (b >= 4 ? p.bhk >= 4 : p.bhk === b));
  }
  if (query.possession && query.possession !== 'any' && query.possession !== '') {
    list = list.filter((p) => p.possession === query.possession);
  }
  if (query.amenities) {
    const need = String(query.amenities).split(',').filter(Boolean);
    list = list.filter((p) => need.every((a) => (p.amenities || []).includes(a)));
  }
  if (query.featured === '1' || query.featured === 'true') list = list.filter((p) => p.featured);

  switch (query.sort) {
    case 'price-asc': list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'newest': list.sort((a, b) => (b.builtYear || 0) - (a.builtYear || 0)); break;
    case 'area-desc': list.sort((a, b) => b.area - a.area); break;
    default: list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.id - b.id);
  }
  return list;
}

function cardHTML(p) {
  const badge = p.badge
    ? `<span class="text-[11px] font-extrabold tracking-wide px-2.5 py-1 rounded-full text-[#2A2111]" style="background:linear-gradient(135deg,#F3D9A4,#C9A86A);box-shadow:0 4px 14px rgba(201,168,106,.4)">◆ ${esc(p.badge)}</span>`
    : '';
  return `<a href="property.html?id=${p.id}" class="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover">
    <div class="relative overflow-hidden bg-[#0A0F1E]">
      <img src="${esc(p.images[0])}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" alt="${esc(p.name)}" loading="lazy">
      <div class="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div class="absolute top-3 left-3 flex gap-1.5 flex-wrap">
        <span class="bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">${statusLabel(p)}</span>
        ${badge}
      </div>
      <span class="absolute bottom-3 left-3 text-[10px] font-extrabold tracking-[0.08em] px-2.5 py-1 rounded-full text-[#F3D9A4] bg-[#0A0F1E]/75 border border-[#C9A86A]/60 backdrop-blur">◆ RERA VERIFIED</span>
      <button class="fav-btn absolute top-3 right-3 w-8 h-8 bg-white/95 backdrop-blur rounded-full shadow-lg flex items-center justify-center border border-white/60 hover:scale-110 transition-transform" onclick="event.preventDefault();this.classList.toggle('active')">${HEART}</button>
    </div>
    <div class="p-4">
      <div class="text-accent text-lg font-black font-head">${priceLabel(p)}</div>
      <div class="font-bold text-gray-900 text-sm mt-0.5 mb-1">${esc(p.name)}</div>
      <div class="text-xs text-gray-400 flex items-center gap-1 mb-3">${PIN}${esc(p.location)}, ${esc(p.city)}</div>
      <div class="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
        <span>🛏 ${bedLabel(p)}</span><span>🚿 ${p.baths} Bath</span><span>📐 ${formatINR(p.area)} sq.ft</span>
      </div>
      <div class="flex items-center justify-between mt-3">
        <div class="flex items-center gap-2"><img src="${esc(p.agent.img)}" class="w-6 h-6 rounded-full object-cover" alt=""><span class="text-xs text-gray-500">${esc(p.agent.name)}</span></div>
        <span class="text-xs bg-accent text-white px-3 py-1 rounded-full font-bold">View</span>
      </div>
    </div>
  </a>`;
}

function miniCardHTML(p) {
  return `<a href="property.html?id=${p.id}" class="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover">
    <div class="relative overflow-hidden bg-[#0A0F1E]"><img src="${esc(p.images[0])}" class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" alt="${esc(p.name)}" loading="lazy"><div class="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div><span class="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">${statusLabel(p)}</span><span class="absolute bottom-3 left-3 text-[10px] font-extrabold tracking-[0.08em] px-2.5 py-1 rounded-full text-[#F3D9A4] bg-[#0A0F1E]/75 border border-[#C9A86A]/60 backdrop-blur">◆ RERA</span></div>
    <div class="p-4"><div class="text-accent text-lg font-black font-head">${priceLabel(p)}</div><div class="font-bold text-sm text-gray-900 mt-0.5">${esc(p.name)}</div><div class="text-xs text-gray-400 mt-1 mb-3">${esc(p.location)}, ${esc(p.city)}</div><div class="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3"><span>🛏 ${bedLabel(p)}</span><span>📐 ${formatINR(p.area)} sq.ft</span></div><div class="mt-3 flex justify-end"><span class="text-xs bg-accent text-white font-bold px-3 py-1 rounded-full">View Details</span></div></div>
  </a>`;
}

function cardsGrid(list) {
  if (!list.length) {
    return `<div class="sm:col-span-2 col-span-1">
      <div class="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl py-16 text-center">
        <div class="text-3xl mb-3">🔍</div>
        <div class="font-bold text-gray-900">No properties match your filters</div>
        <p class="text-sm text-gray-400 mt-1">Try clearing a few filters or searching a different area.</p>
      </div>
    </div>`;
  }
  return list.map(cardHTML).join('');
}

const SORT_OPTIONS = [
  ['recommended', 'Sort: Recommended'],
  ['price-asc', 'Price: Low to High'],
  ['price-desc', 'Price: High to Low'],
  ['newest', 'Newest First'],
  ['area-desc', 'Area: Large to Small'],
];

function resultsPartial(all, query) {
  const list = filterProperties(all, query);
  const limit = parseInt(query.limit || '8', 10) || 8;
  const shown = list.slice(0, limit);
  const total = list.length;
  const more = total - shown.length;
  const sortOptions = SORT_OPTIONS.map(
    ([v, label]) => `<option value="${v}" ${query.sort === v ? 'selected' : ''}>${label}</option>`
  ).join('');
  const loadMore =
    more > 0
      ? `<div class="text-center mt-10">
        <button type="button" onclick="var l=document.getElementById('limit')||document.querySelector('#filters input[name=\'limit\']');if(l){l.value=parseInt(l.value||'8',10)+8;}htmx.ajax('GET','/partials/cards',{target:'#results',swap:'outerHTML',include:'#filters'})" class="border border-gray-200 text-sm font-semibold px-8 py-3 rounded-full hover:border-accent hover:text-accent transition-all">Load More Properties (${more} more)</button>
      </div>`
      : '';
  return `<div id="results">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
      <p class="text-sm text-gray-500">Showing <strong class="text-gray-900">${shown.length}</strong> of <strong class="text-gray-900">${total}</strong> properties</p>
      <select name="sort" hx-get="/partials/cards" hx-include="#filters" hx-target="#results" hx-swap="outerHTML" hx-trigger="change" class="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-accent">${sortOptions}</select>
    </div>
    <div class="grid sm:grid-cols-2 gap-5">${cardsGrid(shown)}</div>
    ${loadMore}
  </div>`;
}

function propertyPartial(all, id) {
  const p = all.find((x) => String(x.id) === String(id));
  if (!p) {
    return `<div class="text-center py-24">
      <div class="text-4xl mb-4">🏚️</div>
      <h1 class="text-2xl font-black font-head text-gray-900 mb-2">Property Not Found</h1>
      <p class="text-gray-500 mb-6">The listing you are looking for may have been removed.</p>
      <a href="listings.html" class="inline-block bg-accent text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-all">Browse Properties</a>
    </div>`;
  }
  const similar = all
    .filter((x) => x.id !== p.id && (x.type === p.type || x.city === p.city))
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    .slice(0, 3);

  const specs = [
    ['Bedrooms', p.type === 'plot' ? '—' : String(p.bhk || 0)],
    ['Bathrooms', String(p.baths)],
    ['Area (sq.ft)', formatINR(p.area)],
    ['Parking', String(p.parking || 0)],
    ['Floors', esc(p.floors || '—')],
    ['Built Year', p.builtYear ? String(p.builtYear) : '—'],
    ['Facing', esc(p.facing || '—')],
    ['Furnishing', esc(p.furnished || '—')],
  ]
    .map(
      ([k, v]) =>
        `<div class="text-center"><div class="text-xl font-black font-head text-gray-900">${v}</div><div class="text-xs text-gray-500 mt-1">${k}</div></div>`
    )
    .join('');

  const amenities = (p.amenities || [])
    .map((a) => `<div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm"><span>✅</span> ${esc(a)}</div>`)
    .join('');

  const typeName =
    p.type === 'plot' ? 'Plot / Land' : p.type === 'commercial' ? 'Commercial Space' : p.type === 'villa' ? 'Independent Villa' : p.type === 'penthouse' ? 'Penthouse' : 'Apartment';
  const detailsRows = [
    ['Property Type', typeName, true],
    ['RERA ID', p.rera || '—', true],
    ['Furnishing', esc(p.furnished || '—'), false],
    ['Possession', esc(p.possession || '—'), p.possession === 'Ready to Move'],
    ['Overlooking', esc(p.overlooking || '—'), false],
    ['Transaction', p.listing === 'rent' ? 'Rental' : p.listing === 'commercial' ? 'Commercial' : 'Sale', false],
    ['Price', priceLabel(p), true],
    ['Price / sq.ft', '₹' + formatINR(Math.round(p.price / p.area)), false],
  ]
    .map(
      ([k, v, hl]) =>
        `<div class="flex justify-between py-2 border-b border-gray-100 text-sm"><span class="text-gray-500">${k}</span><span class="font-semibold ${hl ? 'text-accent' : ''}">${v}</span></div>`
    )
    .join('');

  const gallery = `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-[1.75rem] overflow-hidden h-64 sm:h-96 ring-1 ring-[#C9A86A]/30 shadow-2xl shadow-[#0A0F1E]/20">
      <div class="sm:col-span-2 relative overflow-hidden group"><img src="${esc(p.images[0])}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${esc(p.name)} main"><div class="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/50 via-transparent to-transparent"></div><span class="absolute bottom-4 left-4 text-[10px] font-extrabold tracking-[0.1em] px-3 py-1.5 rounded-full text-[#F3D9A4] bg-[#0A0F1E]/75 border border-[#C9A86A]/60 backdrop-blur">◆ RERA APPROVED · ${esc(p.rera || 'VERIFIED')}</span></div>
      <div class="hidden sm:grid grid-rows-2 gap-2">
        <div class="overflow-hidden"><img src="${esc(p.images[1] || p.images[0])}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt=""></div>
        <div class="relative overflow-hidden"><img src="${esc(p.images[2] || p.images[0])}" class="w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-[#0A0F1E]/60 backdrop-blur-[1px] flex items-center justify-center"><button class="text-white text-sm font-bold flex items-center gap-2 bg-white/10 border border-white/25 px-4 py-2 rounded-full backdrop-blur hover:bg-white/20 transition-all">📷 ${p.images.length + 6} Photos</button></div></div>
      </div>
    </div>`;

  const pricePerSqft = '₹' + formatINR(Math.round(p.price / p.area));
  const showEmi = p.listing !== 'rent' && p.listing !== 'commercial';

  const contactCard = `
    <div class="w-full lg:w-80 xl:w-96 flex-shrink-0">
      <div class="lg:sticky lg:top-24">
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl">
          <div class="text-2xl font-black font-head text-accent mb-1">${priceLabel(p)}</div>
          <div class="text-xs text-gray-400 mb-5">${pricePerSqft}/sq.ft</div>
          <div class="flex items-center gap-3 mb-5 pb-5 border-b border-gray-100">
            <img src="${esc(p.agent.img)}" class="w-12 h-12 rounded-full object-cover border-2 border-accent-light" alt="${esc(p.agent.name)}">
            <div><div class="font-bold text-sm text-gray-900">${esc(p.agent.name)}</div><div class="text-xs text-gray-500">${esc(p.agent.role)} Specialist</div><div class="text-xs text-green-600 font-semibold mt-0.5">✓ Verified Agent</div></div>
          </div>
          <div class="text-sm font-bold text-gray-900 mb-3">Request a Site Visit</div>
          <form id="visit-form" hx-post="/api/visit" hx-target="#visit-msg" hx-swap="innerHTML" class="flex flex-col gap-3">
            <input type="hidden" name="propertyId" value="${p.id}">
            <input type="hidden" name="property" value="${esc(p.name)}">
            <input type="text" name="name" required placeholder="Your Full Name" class="w-full text-sm border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-gray-50">
            <input type="tel" name="phone" required placeholder="Your Phone Number" class="w-full text-sm border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-gray-50">
            <input type="email" name="email" placeholder="Your Email (optional)" class="w-full text-sm border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-gray-50">
            <textarea name="message" rows="2" placeholder="Any specific requirements?" class="w-full text-sm border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-gray-50 resize-none"></textarea>
            <button type="submit" class="w-full mt-1 bg-accent text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Schedule Visit</button>
          </form>
          <div id="visit-msg" class="mt-3"></div>
          <a href="tel:+919876543210" class="w-full mt-2 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-all text-sm">📞 Call Agent</a>
          <p class="text-xs text-gray-400 text-center mt-3">🔒 Your information is 100% safe &amp; private</p>
          ${showEmi ? `
          <div class="mt-5 pt-5 border-t border-gray-100">
            <div class="text-xs font-bold text-gray-500 mb-2">💰 EMI Estimate</div>
            <div class="text-2xl font-black font-head text-gray-900">₹${formatINR(emi(p.price))}<span class="text-sm font-normal text-gray-500">/month</span></div>
            <div class="text-xs text-gray-400 mt-1">@8.5% p.a. for 20 years, 20% down payment</div>
          </div>` : ''}
        </div>
      </div>
    </div>`;

  return `<script>document.title="${esc(p.name)} — ${priceLabel(p).replace(/"/g, '')} | Estate";</script>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center gap-2 text-xs text-gray-400">
        <a href="index.html" class="hover:text-accent">Home</a>
        <span>/</span><a href="listings.html" class="hover:text-accent">Properties</a>
        <span>/</span><span>${esc(p.city)}</span>
        <span>/</span><span class="text-gray-800 font-semibold">${esc(p.name)}</span>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">${gallery}</div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="flex flex-col lg:flex-row gap-10">
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full">${statusLabel(p)}</span>
                ${p.badge ? `<span class="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">${esc(p.badge)}</span>` : ''}
                <span class="bg-blue-100 text-accent text-xs font-bold px-2.5 py-1 rounded-full">RERA APPROVED</span>
              </div>
              <h1 class="text-3xl lg:text-4xl font-black font-head text-gray-900 mb-2">${esc(p.name)}</h1>
              <div class="flex items-center gap-1 text-sm text-gray-500">${PIN} ${esc(p.location)}, ${esc(p.city)}</div>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-400 mb-1">${p.listing === 'rent' ? 'Monthly Rent' : p.listing === 'commercial' ? 'Price' : 'Sale Price'}</div>
              <div class="text-4xl font-black font-head text-accent">${priceLabel(p)}</div>
              <div class="text-sm text-gray-400 mt-1">${pricePerSqft}/sq.ft</div>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 rounded-2xl p-5 mb-8">${specs}</div>
          <div class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">About This Property</h2>
            <p class="text-gray-600 text-sm leading-relaxed mb-3">${esc(p.desc)}</p>
            <p class="text-gray-600 text-sm leading-relaxed">${esc(p.desc2 || '')}</p>
          </div>
          <div class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Amenities &amp; Features</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${amenities}</div>
          </div>
          <div class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Property Details</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${detailsRows}</div>
          </div>
          <div class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Location</h2>
            <div class="bg-gray-100 rounded-2xl h-52 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 text-gray-400 gap-3">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div class="text-center"><div class="text-sm font-semibold text-gray-700">${esc(p.location)}, ${esc(p.city)}</div><div class="text-xs text-gray-500">India</div></div>
            </div>
          </div>
        </div>
        ${contactCard}
      </div>
    </div>
    <div class="bg-gray-50 py-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl lg:text-3xl font-black font-head text-gray-900">Similar Properties</h2>
          <a href="listings.html" class="text-sm font-semibold border border-gray-200 px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-all">View All</a>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">${similar.map(miniCardHTML).join('')}</div>
      </div>
    </div>`;
}

  return { filterProperties, cardHTML, miniCardHTML, cardsGrid, resultsPartial, propertyPartial };
});