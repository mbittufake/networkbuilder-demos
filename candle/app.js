/* LUMEN Candles — shared app.js */
const CANDLE_PRODUCTS = [
  { id:1, name:"Fig & Cedar", collection:"Woody", price:1290, mrp:1790, burn:"45h", size:"180g", scent:"Fig, cedarwood, amber", badge:"Bestseller", rating:4.9, reviews:214, image:"https://images.pexels.com/photos/5200254/pexels-photo-5200254.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Warm fig meets smoky cedar and a whisper of amber. Grounding, cozy, made for slow evenings." },
  { id:2, name:"Vanilla Ember", collection:"Warm", price:1090, mrp:1490, burn:"40h", size:"180g", scent:"Vanilla, tonka, sandalwood", badge:null, rating:4.8, reviews:167, image:"https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=700&fit=crop&q=80", desc:"Creamy vanilla and toasted tonka over sandalwood. Sweet but never cloying — our comfort scent." },
  { id:3, name:"Eucalyptus Rain", collection:"Fresh", price:1190, mrp:1590, burn:"45h", size:"180g", scent:"Eucalyptus, mint, sea salt", badge:"New", rating:4.7, reviews:98, image:"https://images.pexels.com/photos/286145/pexels-photo-286145.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Crisp eucalyptus and mint cut with sea salt. Like a cold shower for your room." },
  { id:4, name:"Rosewood & Oud", collection:"Woody", price:1490, mrp:1990, burn:"50h", size:"220g", scent:"Rose, oud, leather", badge:"Limited", rating:4.9, reviews:132, image:"https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=700&fit=crop&q=80", desc:"Damask rose softened by smoky oud and leather. Evening scent, low light, red wine." },
  { id:5, name:"Citrus Bloom", collection:"Citrus", price:990, mrp:1390, burn:"35h", size:"150g", scent:"Bergamot, neroli, grapefruit", badge:null, rating:4.6, reviews:87, image:"https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Bright bergamot and neroli over grapefruit peel. Morning kitchen, fresh sheets." },
  { id:6, name:"Lavender Dusk", collection:"Floral", price:1090, mrp:1490, burn:"40h", size:"180g", scent:"Lavender, clary sage, musk", badge:null, rating:4.7, reviews:143, image:"https://images.pexels.com/photos/1809347/pexels-photo-1809347.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"French lavender with clary sage and soft musk. Your wind-down ritual." },
  { id:7, name:"Tobacco & Honey", collection:"Warm", price:1390, mrp:1890, burn:"50h", size:"220g", scent:"Tobacco leaf, honey, oak", badge:"Editor's Pick", rating:4.8, reviews:201, image:"https://images.pexels.com/photos/356661/pexels-photo-356661.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Dark tobacco, wild honey, oak. Cozy library, cashmere blanket." },
  { id:8, name:"Sea Salt & Sage", collection:"Fresh", price:1190, mrp:1590, burn:"45h", size:"180g", scent:"Sea salt, sage, driftwood", badge:null, rating:4.8, reviews:112, image:"https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=600&h=700&fit=crop&q=80", desc:"Salty air, sage leaf, driftwood. Coastal walk in a jar." },
  { id:9, name:"Amber Noir", collection:"Woody", price:1590, mrp:2090, burn:"60h", size:"300g", scent:"Amber, patchouli, incense", badge:"Premium", rating:4.9, reviews:94, image:"https://images.pexels.com/photos/278823/pexels-photo-278823.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Deep amber, patchouli, incense smoke. Dramatic, moody, unforgettable." },
  { id:10, name:"Neroli Sun", collection:"Citrus", price:1090, mrp:1490, burn:"40h", size:"180g", scent:"Neroli, orange blossom, honey", badge:null, rating:4.6, reviews:76, image:"https://images.pexels.com/photos/225073/pexels-photo-225073.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Sunlit neroli and orange blossom with a honeyed base. Joyful, golden." },
  { id:11, name:"Sakura Whisper", collection:"Floral", price:1190, mrp:1590, burn:"40h", size:"180g", scent:"Cherry blossom, peony, sandalwood", badge:"New", rating:4.7, reviews:65, image:"https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&h=700&fit=crop&q=80", desc:"Airy sakura and peony over creamy sandalwood. Delicate, spring-like." },
  { id:12, name:"Oud Midnight", collection:"Woody", price:1690, mrp:2190, burn:"60h", size:"300g", scent:"Oud, leather, black pepper", badge:null, rating:4.8, reviews:58, image:"https://images.pexels.com/photos/289770/pexels-photo-289770.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Intense oud, leather, a crack of black pepper. For those who love a strong throw." },
];

function getCandles(){
  try{
    const s=localStorage.getItem('lume_products');
    if(s){
      if(s.includes('photo-1602607203326-43a3f5ea0cf6') || s.includes('photo-1502185865092') || s.includes('photo-1602607203205') || s.includes('photo-1582738697091') || s.includes('photo-1507680273475') || s.includes('photo-1596722810920') || s.includes('photo-1602874806904') || s.includes('photo-1540931699883')){
        localStorage.removeItem('lume_products');
      } else {
        return JSON.parse(s);
      }
    }
  }catch(e){}
  return CANDLE_PRODUCTS;
}
function saveCandles(list){ localStorage.setItem('lume_products', JSON.stringify(list)); }
function resetCandles(){ localStorage.removeItem('lume_products'); return CANDLE_PRODUCTS; }

function getCart(){
  try{ return JSON.parse(localStorage.getItem('lume_cart')||'[]'); }catch(e){return [];}
}
function saveCart(c){ localStorage.setItem('lume_cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(product, opts={qty:1}){
  const cart=getCart();
  const key = opts.key || `${product.id}`;
  const existing=cart.find(i=>i.key===key);
  if(existing) existing.qty+=opts.qty;
  else cart.push({ key, id:product.id, name:product.name, price: opts.price||product.price, image:product.image, collection:product.collection, qty:opts.qty, meta: opts.meta||'' });
  saveCart(cart);
}
function removeFromCart(key){ saveCart(getCart().filter(i=>i.key!==key)); }
function updateQty(key, delta){
  const cart=getCart();
  const it=cart.find(i=>i.key===key);
  if(!it) return;
  it.qty=Math.max(1, it.qty+delta);
  saveCart(cart);
}
function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return getCart().reduce((s,i)=>s+i.price*i.qty,0); }
function formatINR(n){ return '₹'+n.toLocaleString('en-IN'); }
function discountPct(mrp,price){ return Math.round((1-price/mrp)*100); }

function getWishlist(){
  try{ return JSON.parse(localStorage.getItem('lume_wishlist')||'[]');}catch(e){return [];}
}
function saveWishlist(w){ localStorage.setItem('lume_wishlist', JSON.stringify(w)); updateWishlistCount(); }
function toggleWishlist(id){
  let w=getWishlist();
  if(w.includes(id)) w=w.filter(x=>x!==id); else w.push(id);
  saveWishlist(w);
  return w.includes(id);
}
function isWishlisted(id){ return getWishlist().includes(id); }

function updateCartCount(){
  const n=cartCount();
  document.querySelectorAll('[data-cart-count]').forEach(el=>{ el.textContent=n; el.classList.toggle('hidden', n===0); });
}
function updateWishlistCount(){
  const n=getWishlist().length;
  document.querySelectorAll('[data-wishlist-count]').forEach(el=>{ el.textContent=n; el.classList.toggle('hidden', n===0); });
}
function showToast(msg){
  let t=document.getElementById('toast');
  if(!t){
    t=document.createElement('div');
    t.id='toast';
    t.className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] bg-[#1A1A1A] text-white text-sm font-medium px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-300 pointer-events-none';
    document.body.appendChild(t);
  }
  t.innerHTML = `<span class="w-6 h-6 rounded-full bg-[#E8B86D] text-[#1A1A1A] flex items-center justify-center font-bold"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg></span> ${msg}`;
  t.classList.remove('opacity-0','translate-y-4');
  t.classList.add('opacity-100','translate-y-0');
  clearTimeout(t._t);
  t._t=setTimeout(()=>{ t.classList.add('opacity-0','translate-y-4'); t.classList.remove('opacity-100','translate-y-0'); },2600);
}

/* Custom orders */
function getCustomOrders(){
  try{ const s=localStorage.getItem('lume_custom'); if(s) return JSON.parse(s);}catch(e){}
  return [
    { id:'CU-4021', name:'Ananya • Wedding Favor', vessel:'Cream Ceramic', size:'120g', scent:'Rosewood & Oud', qty:40, total: 52000, status:'In Production', date:'2026-05-08', note:'Ivory label, gold foil “A & R”' },
    { id:'CU-4020', name:'Rahul • Housewarming', vessel:'Amber Glass', size:'180g', scent:'Fig & Cedar', qty:6, total: 7740, status:'Pending', date:'2026-05-09', note:'Handwritten tags: “Home Sweet Home”' },
    { id:'CU-4019', name:'Corporate — Niraya', vessel:'Matte Black', size:'220g', scent:'Tobacco & Honey', qty:80, total: 111200, status:'Shipped', date:'2026-05-06', note:'No label, bulk — office gifting' },
  ];
}
function saveCustomOrders(list){ localStorage.setItem('lume_custom', JSON.stringify(list)); }

function getOrders(){
  try{ const s=localStorage.getItem('lume_orders'); if(s) return JSON.parse(s);}catch(e){}
  return [
    { id:'#L-1842', customer:'Priya Mehta', email:'priya@gmail.com', total:2480, items:2, status:'Paid', date:'2026-05-10' },
    { id:'#L-1841', customer:'Sahil Khan', email:'sahil.k@gmail.com', total:3390, items:3, status:'Shipped', date:'2026-05-09' },
    { id:'#L-1840', customer:'Mira Sen', email:'mira.sen@gmail.com', total:1590, items:1, status:'Processing', date:'2026-05-09' },
    { id:'#L-1839', customer:'Arjun Patel', email:'arjun.p@gmail.com', total:5280, items:4, status:'Delivered', date:'2026-05-08' },
  ];
}
function saveOrders(list){ localStorage.setItem('lume_orders', JSON.stringify(list)); }

/* Search + Drawer */
function openSearch(){
  const el=document.getElementById('searchOverlay');
  if(!el) { location.href='search.html'; return; }
  el.classList.remove('hidden');
  setTimeout(()=>document.getElementById('searchInput')?.focus(),60);
}
function closeSearch(){ document.getElementById('searchOverlay')?.classList.add('hidden'); }
function renderSearchResults(q){
  const wrap=document.getElementById('searchResults');
  if(!wrap) return;
  const list=getCandles();
  const query=(q||'').toLowerCase().trim();
  const filtered = !query ? list.slice(0,6) : list.filter(p=> p.name.toLowerCase().includes(query) || p.collection.toLowerCase().includes(query) || p.scent.toLowerCase().includes(query));
  if(!filtered.length){ wrap.innerHTML=`<div class="text-center py-8 text-[#6B6560]">No candles for “${q}”</div>`; return; }
  wrap.innerHTML=filtered.slice(0,6).map(p=>`
    <a href="product.html?id=${p.id}" class="flex gap-4 p-3 hover:bg-[#FDF6EE] rounded-2xl transition">
      <img src="${p.image}" class="w-20 h-20 rounded-xl object-cover">
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-widest text-[#9C8E84]">${p.collection}</div>
        <div class="font-medium">${p.name}</div>
        <div class="text-sm font-semibold">${formatINR(p.price)} <span class="text-xs text-[#9C8E84] line-through ml-1">${formatINR(p.mrp)}</span></div>
      </div>
      <span class="self-center w-8 h-8 rounded-full border flex items-center justify-center">→</span>
    </a>
  `).join('');
}
function openCartDrawer(){
  const d=document.getElementById('cartDrawer');
  if(!d){ location.href='cart.html'; return; }
  d.classList.remove('hidden');
  renderCartDrawer();
}
function closeCartDrawer(){ document.getElementById('cartDrawer')?.classList.add('hidden'); }
function renderCartDrawer(){
  const cart=getCart();
  const wrap=document.getElementById('cartDrawerItems');
  const foot=document.getElementById('cartDrawerFooter');
  if(!wrap) return;
  if(!cart.length){
    wrap.innerHTML=`<div class="text-center py-16"><div class="w-20 h-20 rounded-full bg-[#FDF6EE] flex items-center justify-center mx-auto text-2xl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7c0-1.5 1-2.5 1-4 0 1.5-1 2.5-1 4z"/><path d="M9 21h6"/><path d="M10 21V11a2 2 0 0 1 4 0v10"/><path d="M8 11a2 2 0 0 0-2 2"/></svg></div><div class="font-serif text-xl mt-3">Your cart is empty</div><p class="text-sm text-[#6B6560] mt-1">Light something beautiful.</p><a href="shop.html" class="inline-flex mt-6 bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-sm font-semibold">Shop Candles</a></div>`;
    foot?.classList.add('hidden'); return;
  }
  foot?.classList.remove('hidden');
  wrap.innerHTML=cart.map(i=>`
    <div class="flex gap-4 py-4 border-b border-[#EDE6DA]">
      <img src="${i.image}" class="w-20 h-20 rounded-xl object-cover">
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-widest text-[#9C8E84]">${i.collection}</div>
        <div class="font-medium text-sm leading-tight">${i.name}</div>
        ${i.meta?`<div class="text-xs text-[#6B6560] mt-1">${i.meta}</div>`:''}
        <div class="flex items-center justify-between mt-3">
          <div class="flex items-center border border-[#EDE6DA] rounded-full overflow-hidden">
            <button onclick="updateQty('${i.key}',-1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-[#FDF6EE]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg></button>
            <span class="w-8 text-center text-sm font-semibold">${i.qty}</span>
            <button onclick="updateQty('${i.key}',1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-[#FDF6EE]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button>
          </div>
          <div class="font-semibold text-sm">${formatINR(i.price*i.qty)}</div>
        </div>
      </div>
      <button onclick="removeFromCart('${i.key}');renderCartDrawer();showToast('Removed')" class="self-start text-[#9C8E84] hover:text-[#1A1A1A]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    </div>
  `).join('');
  document.getElementById('cartDrawerSubtotal').textContent=formatINR(cartSubtotal());
  document.getElementById('cartDrawerCountLabel').textContent=`(${cartCount()} items)`;
}

/* Image fallback */
document.addEventListener('error', (e)=>{
  if(e.target.tagName==='IMG'){
    const fallback='https://images.pexels.com/photos/5200254/pexels-photo-5200254.jpeg?auto=compress&cs=tinysrgb&w=600';
    if(e.target.src!==fallback) e.target.src=fallback;
  }
}, true);

document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount(); updateWishlistCount();
  document.getElementById('mobileMenuBtn')?.addEventListener('click', ()=> document.getElementById('mobileMenu')?.classList.toggle('hidden'));
  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeSearch(); closeCartDrawer(); } });
});
