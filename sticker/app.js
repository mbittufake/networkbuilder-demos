/* STICKCRAFT — shared app logic v3 — real business sticker images */
const REAL_IMAGES = [
  "https://m.media-amazon.com/images/I/81M0LS1gY9L._AC_UF894,1000_QL80_.jpg",
  "https://stickerme.in/wp-content/uploads/2023/04/Hand-made-with-love-yourcompany.com-Kraft-1_.webp",
  "https://5.imimg.com/data5/SELLER/Default/2024/3/398641516/VC/TU/CQ/3047910/business-stickers.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCoH3whZJkbi_zk4EX_mPuQ-hQ7A3VDi_6fSTcsfNLQ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIWgCdItHe5X0q35Xdo7EWzphAPcUj52bU7GDvQGqvg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4P5IkT_EBdj1Vn3JZ25teN_zz1XM3gdwp3AjYPNtpzA",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTs8kKP70SL0Z_eN_z0ejagp4rKB9yS2lQLC6nN-RfCw",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSGhH8Wiqprocx0UZCiTikdxy54vsfKzCiGffBPAfPw",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-znCAk7xbFpqAZGasZDARsXTI3Xsv2vIB3NP7g81mtg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKA-dUdxu0eEWWGFDV4Z1LHbtyTqV2nj_F4XCIs6qFA",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9dlyKEyJ7lsAuYSTDr5G4bo0-nDSNo0rrOMNIvsaIQ"
];

const DEFAULT_PRODUCTS = [
  { id: 1, name: "Thank You Stickers — Business Pack", category: "Packaging", material: "Paper Gloss", shape:"Circle", finish:"Gloss", pattern:"Solid", colors:["#FFFFFF","#FECACA","#0F1A1C"], price: 490, mrp: 690, rating: 4.9, reviews: 423, badge: "Bestseller", image: REAL_IMAGES[0], desc: "Printtoo-style thank-you & logo stickers for D2C parcels — 1.5″ circle, 500 per roll, vivid print." },
  { id: 2, name: "Kraft Handmade With Love — Eco", category: "Packaging", material: "Kraft Paper", shape:"Circle", finish:"Kraft", pattern:"Kraft", colors:["#EDE6DA","#92400E"], price: 540, mrp: 790, rating: 4.8, reviews: 198, badge: "Bestseller", image: REAL_IMAGES[1], desc: "StickerMe kraft 'Handmade with love • yourcompany.com' — compostable, rubber adhesive for organic & bakery." },
  { id: 3, name: "Business Stickers — Logo Sheet Mix", category: "Business Branding", material: "Vinyl Gloss", shape:"Die-Cut", finish:"Gloss", pattern:"Mixed", colors:["#0F1A1C","#E85D3F","#FACC15"], price: 890, mrp: 1290, rating: 4.9, reviews: 312, badge: "Bestseller", image: REAL_IMAGES[2], desc: "IndiaMART-style business logo sheets — mixed sizes, waterproof vinyl, crisp contour cut for shutters & packaging." },
  { id: 4, name: "Custom Business Stickers — Small Shop Pack", category: "Business Branding", material: "Vinyl Gloss", shape:"Circle", finish:"Gloss", pattern:"Solid", colors:["#0F1A1C","#0E7490"], price: 690, mrp: 990, rating: 4.8, reviews: 167, badge: null, image: REAL_IMAGES[3], desc: "Round logo stickers for cafés, salons & Kirana — waterproof, strong adhesive, 2″–4″." },
  { id: 5, name: "Holographic Logo Stickers — Prism", category: "Promo & Safety", material: "Holographic", shape:"Star", finish:"Holo", pattern:"Prism", colors:["holo"], price: 1290, mrp: 1790, rating: 4.9, reviews: 298, badge: "Trending", image: REAL_IMAGES[4], desc: "Rainbow prism effect for drops & events — eye-catching, thick vinyl, outdoor durable." },
  { id: 6, name: "Rectangle Product Labels — BOPP Clear", category: "Product Labels", material: "Vinyl Gloss", shape:"Rectangle", finish:"Gloss", pattern:"Solid", colors:["#FFF7ED","#0F1A1C"], price: 890, mrp: 1190, rating: 4.8, reviews: 187, badge: null, image: REAL_IMAGES[5], desc: "2×3″ & 3×4″ rectangles for jars & pouches — oil & water resistant, freezer-safe." },
  { id: 7, name: "Chrome Mirror Stickers — Gold/Silver", category: "Business Branding", material: "Chrome", shape:"Hexagon", finish:"Mirror", pattern:"Mirror", colors:["#FDE68A","#E5E7EB"], price: 1490, mrp: 1990, rating: 4.8, reviews: 89, badge: "Premium", image: REAL_IMAGES[6], desc: "Luxury mirror chrome for premium unboxing — gold & silver, scratch-resistant." },
  { id: 8, name: "Kiss-Cut Sheet — Thank You Mix", category: "Packaging", material: "Paper Matte", shape:"Kiss-Cut Sheet", finish:"Matte", pattern:"Grid", colors:["#FFFFFF","#FDE68A"], price: 590, mrp: 790, rating: 4.8, reviews: 203, badge: "New In", image: REAL_IMAGES[7], desc: "A4 kiss-cut sheets — 20 stickers per sheet, easy peel for thank-you seals & branding." },
  { id: 9, name: "Kraft Eco Seals — Handmade", category: "Packaging", material: "Kraft Paper", shape:"Square", finish:"Kraft", pattern:"Kraft", colors:["#EDE6DA"], price: 540, mrp: 790, rating: 4.7, reviews: 156, badge: null, image: REAL_IMAGES[1], desc: "Same kraft handmade look — square seals for bakery & organic, compostable." },
  { id: 10, name: "Mascot Die-Cut — Any Outline", category: "Custom Die-Cut", material: "Vinyl Gloss", shape:"Die-Cut", finish:"Gloss", pattern:"Illustrated", colors:["#0E7490","#FACC15"], price: 1590, mrp: 2190, rating: 4.8, reviews: 134, badge: null, image: REAL_IMAGES[8], desc: "Send any mascot — we contour cut it with white border, precise Roland cut." },
  { id: 11, name: "Roll Labels — 500 on Roll", category: "Packaging", material: "Vinyl Matte", shape:"Roll", finish:"Matte", pattern:"Solid", colors:["#FFFFFF","#0F1A1C"], price: 1890, mrp: 2590, rating: 4.7, reviews: 134, badge: null, image: REAL_IMAGES[0], desc: "Dispenser-ready rolls — 500 per roll for bakeries, D2C & FMCG, strong adhesive." },
  { id: 12, name: "Square Business Labels — Minimal", category: "Product Labels", material: "Paper Matte", shape:"Square", finish:"Matte", pattern:"Minimal", colors:["#FFFFFF","#0F1A1C"], price: 590, mrp: 850, rating: 4.8, reviews: 198, badge: null, image: REAL_IMAGES[9], desc: "Clean square labels with 6mm radius — writable, food-grade adhesive for glass & kraft." },
  { id: 13, name: "Transparent Clear Stickers", category: "Product Labels", material: "Transparent", shape:"Circle", finish:"Clear", pattern:"Clear", colors:["transparent"], price: 990, mrp: 1450, rating: 4.8, reviews: 167, badge: null, image: REAL_IMAGES[10], desc: "No-label look on glass — crystal BOPP with white-ink backing, premium." },
  { id: 14, name: "Text Cut-Out — Brand Name", category: "Custom Die-Cut", material: "Vinyl Gloss", shape:"Text Cut", finish:"Gloss", pattern:"Typography", colors:["#0F1A1C","#FACC15"], price: 890, mrp: 1290, rating: 4.9, reviews: 245, badge: "Trending", image: REAL_IMAGES[3], desc: "Contour cut around your wordmark — no border, letter-by-letter precision." },
  { id: 15, name: "Warning Labels — Fragile & Safety", category: "Promo & Safety", material: "Vinyl Gloss", shape:"Rectangle", finish:"Gloss", pattern:"Warning", colors:["#FEF3C7","#DC2626"], price: 790, mrp: 1090, rating: 4.7, reviews: 112, badge: null, image: REAL_IMAGES[4], desc: "Industrial fragile/handle-with-care, high-contrast, weatherproof." },
  { id: 16, name: "QR UPI Stickers — Scan & Pay", category: "Business Branding", material: "Vinyl Matte", shape:"Square", finish:"Matte", pattern:"QR", colors:["#FFFFFF","#0F1A1C"], price: 690, mrp: 990, rating: 4.8, reviews: 203, badge: "Bestseller", image: REAL_IMAGES[5], desc: "Scannable QR for menu/UPI/reviews — tested contrast, free QR generation." },
  { id: 17, name: "Eggshell VOID — Security", category: "Promo & Safety", material: "Eggshell", shape:"Rectangle", finish:"Matte", pattern:"Security", colors:["#FFFFFF","#DC2626"], price: 1390, mrp: 1890, rating: 4.7, reviews: 67, badge: "Security", image: REAL_IMAGES[6], desc: "Destructible VOID tamper seal — fragments on removal for parcels & warranty." },
  { id: 18, name: "Floor Graphics — Giant Circle", category: "Promo & Safety", material: "Vinyl Matte", shape:"Circle", finish:"Matte Laminated", pattern:"Floor", colors:["#0E7490"], price: 2490, mrp: 3290, rating: 4.6, reviews: 54, badge: null, image: REAL_IMAGES[7], desc: "Anti-slip floor decals for retail wayfinding — walk-on durable." },
  { id: 19, name: "Window Decals — Inside Glass", category: "Business Branding", material: "Transparent", shape:"Text Cut", finish:"Clear", pattern:"Typography", colors:["transparent"], price: 1890, mrp: 2490, rating: 4.8, reviews: 76, badge: "New In", image: REAL_IMAGES[8], desc: "Inside-glass reverse print for timings/offers — no residue." },
  { id: 20, name: "Glow in Dark — Star Pack", category: "Promo & Safety", material: "Vinyl Gloss", shape:"Star", finish:"Glow", pattern:"Glow", colors:["#FEF3C7"], price: 1690, mrp: 2290, rating: 4.7, reviews: 58, badge: "New In", image: REAL_IMAGES[9], desc: "Photoluminescent stars — charges in light, glows for hours." },
  { id: 21, name: "Die-Cut Vinyl — Mixed Pack 40", category: "Business Branding", material: "Vinyl Matte", shape:"Die-Cut", finish:"Matte", pattern:"Mixed", colors:["#0F1A1C","#E85D3F","#FACC15"], price: 890, mrp: 1290, rating: 4.9, reviews: 298, badge: "Creator Pack", image: REAL_IMAGES[10], desc: "40 mixed die-cut merch stickers — teams & giveaways, mixed sizes." },
  { id: 22, name: "Thermal Labels — 100×150", category: "Product Labels", material: "Paper Thermal", shape:"Rectangle", finish:"Matte", pattern:"Minimal", colors:["#FFFFFF"], price: 390, mrp: 590, rating: 4.7, reviews: 221, badge: null, image: REAL_IMAGES[0], desc: "Thermal for Shiprocket/Delhivery — 1000 per roll, crisp barcode." }
];

function getProducts(){
  try{
    const s=localStorage.getItem('stickcraft_products');
    if(s) {
      const parsed=JSON.parse(s);
      // force refresh if old unsplash data or missing real images
      if(parsed.length && parsed[0].image && parsed[0].image.includes('unsplash.com')) {
        localStorage.removeItem('stickcraft_products');
        return DEFAULT_PRODUCTS;
      }
      if(parsed.length>=10 && !parsed[0].image.includes('m.media-amazon.com') && !parsed[0].image.includes('stickerme.in')) {
        localStorage.removeItem('stickcraft_products');
        return DEFAULT_PRODUCTS;
      }
      return parsed;
    }
  }catch(e){}
  return DEFAULT_PRODUCTS;
}
function saveProducts(list){ localStorage.setItem('stickcraft_products', JSON.stringify(list)); }
function resetProducts(){ localStorage.removeItem('stickcraft_products'); return DEFAULT_PRODUCTS; }

function getCart(){
  try{ return JSON.parse(localStorage.getItem('stickcraft_cart')||'[]'); }catch(e){return [];}
}
function saveCart(c){ localStorage.setItem('stickcraft_cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(product, opts={qty:1, material:null, size:null, finish:null}){
  const cart=getCart();
  const key=`${product.id}-${opts.material||''}-${opts.size||''}-${opts.finish||''}`;
  const ex=cart.find(i=>i.key===key);
  if(ex) ex.qty+=opts.qty;
  else cart.push({key, id:product.id, name:product.name, price:product.price, image:product.image, category:product.category, qty:opts.qty, material:opts.material, size:opts.size, finish:opts.finish, shape:product.shape});
  saveCart(cart); return cart;
}
function removeFromCart(key){ saveCart(getCart().filter(i=>i.key!==key)); }
function updateQty(key, delta){
  const cart=getCart(); const it=cart.find(i=>i.key===key); if(!it) return; it.qty=Math.max(1,it.qty+delta); saveCart(cart);
}
function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return getCart().reduce((s,i)=>s+i.price*i.qty,0); }

function getWishlist(){
  try{ return JSON.parse(localStorage.getItem('stickcraft_wishlist')||'[]'); }catch(e){return [];}
}
function saveWishlist(w){ localStorage.setItem('stickcraft_wishlist', JSON.stringify(w)); updateWishlistCount(); }
function toggleWishlist(id){
  let w=getWishlist(); if(w.includes(id)) w=w.filter(x=>x!==id); else w.push(id); saveWishlist(w); return w.includes(id);
}
function isWishlisted(id){ return getWishlist().includes(id); }
function updateCartCount(){
  const n=cartCount(); document.querySelectorAll('[data-cart-count]').forEach(el=>{ el.textContent=n; el.classList.toggle('hidden', n===0); });
}
function updateWishlistCount(){
  const n=getWishlist().length; document.querySelectorAll('[data-wishlist-count]').forEach(el=>{ el.textContent=n; el.classList.toggle('hidden', n===0); });
}
function formatINR(n){ return '₹'+n.toLocaleString('en-IN'); }
function discountPercent(mrp, price){ return Math.round((1-price/mrp)*100); }

function showToast(msg, type='success'){
  let t=document.getElementById('toast');
  if(!t){ t=document.createElement('div'); t.id='toast'; t.className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] bg-[#0F1A1C] text-white text-sm font-medium px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-300 pointer-events-none'; document.body.appendChild(t); }
  t.innerHTML = type==='success' ? `<span class="w-6 h-6 rounded-full bg-white text-[#0F1A1C] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg></span> ${msg}` : msg;
  t.classList.remove('opacity-0','translate-y-4'); t.classList.add('opacity-100','translate-y-0');
  clearTimeout(t._timer); t._timer=setTimeout(()=>{ t.classList.add('opacity-0','translate-y-4'); t.classList.remove('opacity-100','translate-y-0'); },2600);
}

function getOrders(){
  try{ const o=localStorage.getItem('stickcraft_orders'); if(o) return JSON.parse(o);}catch(e){}
  return [
    { id:'#SK-2104', customer:'Aarav Mehta • BrewBean Café', email:'aarav@brewbean.in', total:8900, qty:1000, status:'Paid', date:'2026-05-18', item:'Thank You Pack' },
    { id:'#SK-2103', customer:'Neha Gupta • Glow Organics', email:'neha@gloworganics.com', total:5940, qty:800, status:'Shipped', date:'2026-05-17', item:'Kraft Handmade + Business Mix' },
    { id:'#SK-2102', customer:'Rohit Jain • Jain Electronics', email:'rohit@jainelec.co.in', total:12900, qty:2000, status:'Processing', date:'2026-05-16', item:'Business Stickers + QR' },
    { id:'#SK-2101', customer:'Sneha Traders', email:'sneha.traders@gmail.com', total:4720, qty:500, status:'Delivered', date:'2026-05-14', item:'Roll Labels — 500' },
    { id:'#SK-2100', customer:'Urban Bakehouse', email:'hello@urbanbake.in', total:2450, qty:1000, status:'Paid', date:'2026-05-13', item:'Thank You Rolls ×5' },
    { id:'#SK-2099', customer:'Pixel Studio', email:'pixel@studio.com', total:8900, qty:250, status:'Cancelled', date:'2026-05-12', item:'Holographic' }
  ];
}
function saveOrders(list){ localStorage.setItem('stickcraft_orders', JSON.stringify(list)); }
function getCustomers(){
  try{ const c=localStorage.getItem('stickcraft_customers'); if(c) return JSON.parse(c);}catch(e){}
  return [
    { name:'Aarav Mehta', company:'BrewBean Café', email:'aarav@brewbean.in', orders:6, spent:32400, joined:'2025-10-11', gst:'27AABCU9603R1ZM' },
    { name:'Neha Gupta', company:'Glow Organics', email:'neha@gloworganics.com', orders:9, spent:48900, joined:'2025-08-04', gst:'07AAGFG1234H1Z5' },
    { name:'Rohit Jain', company:'Jain Electronics', email:'rohit@jainelec.co.in', orders:4, spent:29800, joined:'2025-12-02', gst:'08AABCJ1234K1Z2' },
    { name:'Sneha Traders', company:'Sneha Traders', email:'sneha.traders@gmail.com', orders:3, spent:14200, joined:'2026-01-20', gst:'24AABCS1234L1Z9' },
    { name:'Urban Bakehouse', company:'Urban Bakehouse', email:'hello@urbanbake.in', orders:11, spent:56700, joined:'2025-07-15', gst:'27AABFU1234C1Z0' }
  ];
}
function getCustomOrders(){
  try{ const c=localStorage.getItem('stickcraft_customs'); if(c) return JSON.parse(c);}catch(e){}
  return [
    { id:'#CQ-881', customer:'Divya • D-Creations', email:'divya@dcreations.in', qty:1200, size:'3″ circle', material:'Vinyl Gloss', status:'Quote Sent', date:'2026-05-19', file:'divya-logo-ai.pdf' },
    { id:'#CQ-880', customer:'Karan • FitFuel', email:'karan@fitfuel.in', qty:500, size:'2×4″ rect', material:'Transparent', status:'In Production', date:'2026-05-18', file:'fitfuel-diecut.png' },
    { id:'#CQ-879', customer:'Meera Textiles', email:'meera@textiles.co.in', qty:2000, size:'2″ die-cut', material:'Holographic', status:'New', date:'2026-05-17', file:'meera-mascot.pdf' },
    { id:'#CQ-878', customer:'Arjun • The Burger Co', email:'arjun@burgerco.in', qty:800, size:'4″ window decal', material:'Transparent', status:'Delivered', date:'2026-05-15', file:'burger-window.ai' }
  ];
}
function saveCustomOrders(list){ localStorage.setItem('stickcraft_customs', JSON.stringify(list)); }

document.addEventListener('error', e=>{
  if(e.target.tagName==='IMG'){
    const fallback='https://m.media-amazon.com/images/I/81M0LS1gY9L._AC_UF894,1000_QL80_.jpg';
    if(e.target.src!==fallback) e.target.src=fallback;
  }
}, true);

function toggleMobileMenu(){
  const menu=document.getElementById('mobileMenu');
  const backdrop=document.getElementById('mobileBackdrop');
  const btn=document.getElementById('mobileMenuBtn');
  if(!menu) return;
  const isHidden=menu.classList.contains('hidden');
  if(isHidden){
    menu.classList.remove('hidden');
    backdrop?.classList.remove('hidden');
    btn?.setAttribute('aria-expanded','true');
    btn?.querySelector('.menu-icon')?.classList.add('hidden');
    btn?.querySelector('.close-icon')?.classList.remove('hidden');
    document.body.style.overflow='hidden';
  } else {
    closeMobileMenu();
  }
}
function closeMobileMenu(){
  const menu=document.getElementById('mobileMenu');
  const backdrop=document.getElementById('mobileBackdrop');
  const btn=document.getElementById('mobileMenuBtn');
  menu?.classList.add('hidden');
  backdrop?.classList.add('hidden');
  btn?.setAttribute('aria-expanded','false');
  btn?.querySelector('.menu-icon')?.classList.remove('hidden');
  btn?.querySelector('.close-icon')?.classList.add('hidden');
  document.body.style.overflow='';
}
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount(); updateWishlistCount();
  document.getElementById('mobileMenuBtn')?.addEventListener('click', toggleMobileMenu);
  document.querySelectorAll('#mobileMenu a').forEach(a=> a.addEventListener('click', closeMobileMenu));
  document.addEventListener('keydown', e=>{
    if(e.key==='Escape'){
      closeMobileMenu();
      document.getElementById('searchOverlay')?.classList.add('hidden');
      document.getElementById('cartDrawer')?.classList.add('hidden');
    }
  });
  const path=location.pathname.split('/').pop();
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.getAttribute('href')===path || (path==='' && a.getAttribute('href')==='index.html')) a.classList.add('text-accent','font-semibold');
  });
});

function openSearch(q=''){
  const el=document.getElementById('searchOverlay');
  if(!el){ window.location.href='shop.html'+(q?'?q='+encodeURIComponent(q):''); return; }
  el.classList.remove('hidden'); setTimeout(()=>document.getElementById('searchInput')?.focus(),50);
  if(q) document.getElementById('searchInput').value=q; renderSearchResults(q);
}
function closeSearch(){ document.getElementById('searchOverlay')?.classList.add('hidden'); }
function renderSearchResults(query){
  const wrap=document.getElementById('searchResults'); if(!wrap) return;
  const products=getProducts();
  const q=(query||'').toLowerCase().trim();
  let filtered=!q ? products.slice(0,6) : products.filter(p=> p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.material.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.shape.toLowerCase().includes(q));
  if(!filtered.length){ wrap.innerHTML=`<div class="text-center py-12 text-[#6B7280]">No results for "<span class="text-[#0F1A1C] font-semibold">${query}</span>"<br><span class="text-sm">Try vinyl, transparent, kraft, circle...</span></div>`; return; }
  wrap.innerHTML=filtered.slice(0,8).map(p=>`
    <a href="product.html?id=${p.id}" class="flex gap-4 p-3 hover:bg-[#F8F7F5] rounded-2xl transition">
      <img src="${p.image}" class="w-20 h-20 rounded-xl object-cover flex-shrink-0 bg-paper">
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-widest text-[#6B7280]">${p.category} • ${p.material} • ${p.shape}</div>
        <div class="font-medium leading-tight truncate">${p.name}</div>
        <div class="text-sm font-semibold mt-1">${formatINR(p.price)}<span class="text-xs font-normal text-[#6B7280]"> / 100 pcs</span> <span class="text-xs text-[#6B7280] line-through ml-1">${formatINR(p.mrp)}</span></div>
      </div>
      <span class="self-center w-8 h-8 rounded-full border flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
    </a>
  `).join('');
}

function openCartDrawer(){
  const d=document.getElementById('cartDrawer');
  if(!d){ window.location.href='cart.html'; return; }
  d.classList.remove('hidden'); renderCartDrawer();
}
function closeCartDrawer(){ document.getElementById('cartDrawer')?.classList.add('hidden'); }
function renderCartDrawer(){
  const cart=getCart(); const wrap=document.getElementById('cartDrawerItems'); const footer=document.getElementById('cartDrawerFooter');
  if(!wrap) return;
  if(!cart.length){
    wrap.innerHTML=`<div class="text-center py-16">
      <div class="w-20 h-20 rounded-full bg-[#F8F7F5] flex items-center justify-center mx-auto mb-4 text-2xl"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9H7z"/><path d="M6 6L5 2H2"/><circle cx="9" cy="20" r="1.8"/><circle cx="18" cy="20" r="1.8"/></svg></div>
      <div class="font-serif text-xl">Your cart is empty</div>
      <p class="text-sm text-[#6B7280] mt-1">Add real business stickers or request custom.</p>
      <a href="shop.html" onclick="closeCartDrawer()" class="inline-flex mt-6 bg-[#0F1A1C] text-white px-6 py-3 rounded-full text-sm font-semibold">Browse Real Stickers</a>
      <a href="custom.html" class="inline-flex mt-2 border border-[#0F1A1C] px-6 py-3 rounded-full text-sm font-semibold">Get Custom Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    </div>`;
    footer?.classList.add('hidden'); return;
  }
  footer?.classList.remove('hidden');
  wrap.innerHTML=cart.map(i=>`
    <div class="flex gap-4 py-4 border-b border-[#E5E7EB]">
      <img src="${i.image}" class="w-20 h-20 rounded-xl object-cover bg-paper">
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-widest text-[#6B7280]">${i.category} • ${i.shape||''}</div>
        <div class="font-medium text-sm leading-tight">${i.name}</div>
        ${i.material||i.size?`<div class="text-xs text-[#6B7280] mt-1">${i.material||''}${i.size?' • '+i.size:''}${i.finish?' • '+i.finish:''}</div>`:''}
        <div class="flex items-center justify-between mt-3">
          <div class="flex items-center border rounded-full overflow-hidden">
            <button onclick="updateQty('${i.key}',-1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-[#F8F7F5]">−</button>
            <span class="w-8 text-center text-sm font-semibold">${i.qty}</span>
            <button onclick="updateQty('${i.key}',1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-[#F8F7F5]">+</button>
          </div>
          <div class="font-semibold text-sm">${formatINR(i.price*i.qty)}</div>
        </div>
      </div>
      <button onclick="removeFromCart('${i.key}');renderCartDrawer();showToast('Removed')" class="self-start text-[#6B7280] hover:text-[#0F1A1C]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    </div>
  `).join('');
  const sub=cartSubtotal();
  document.getElementById('cartDrawerSubtotal').textContent=formatINR(sub);
  document.getElementById('cartDrawerCountLabel').textContent=`(${cartCount()} items)`;
}
