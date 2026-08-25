/* TAAR — Handcrafted Studio shared app */
const WORKS = [
  { id:1, name:"Ganesha String Art — Blessings", category:"String Art", material:"String + Teak Wood", price:4200, mrp:5800, size:"18 inch • Circular", badge:"Bestseller", rating:4.9, reviews:87, image:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900&h=1100&fit=crop&q=80","https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=900&h=1100&fit=crop&q=80"], desc:"Hand-nailed teak base with 340m silk thread. 12 hours of winding. Ganesha silhouette in gold + ivory — blessing for new homes.", custom:false },
  { id:2, name:"House Name Board — Nilaya", category:"Nameboard", material:"Resin + Acacia Wood", price:3500, mrp:4500, size:"12×18 inch", badge:"Custom", rating:4.9, reviews:124, image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=1100&fit=crop&q=80"], desc:"Acacia wood with ocean-blue resin pour, brass letters and hanging jute. Weather-proof for outdoor.", custom:true },
  { id:3, name:"Ocean Wave Resin Clock", category:"Resin Art", material:"Epoxy Resin + MDF", price:6800, mrp:8500, size:"18 inch • Clock", badge:"New", rating:4.8, reviews:43, image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&h=1100&fit=crop&q=80"], desc:"Triple-layer ocean pour — deep blue, turquoise foam, real sand edge. Silent quartz movement.", custom:false },
  { id:4, name:"Evil Eye String Mandala", category:"String Art", material:"String + MDF", price:2800, mrp:3600, size:"14 inch", badge:null, rating:4.8, reviews:61, image:"https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=900&h=1100&fit=crop&q=80"], desc:"Protective evil-eye motif — concentric blue thread winding on navy base. 200 nails, hypnotic finish.", custom:false },
  { id:5, name:"Couple Name — Heart Thread", category:"String Art", material:"String + Wood", price:5200, mrp:6500, size:"20×14 inch", badge:"Couple Fav", rating:5.0, reviews:92, image:"https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=900&h=1100&fit=crop&q=80"], desc:"Two names entwined with heart string — perfect anniversary gift. Photo + nails + thread, takes 2 days.", custom:true },
  { id:6, name:"Geode Acrylic — Teal & Gold", category:"Acrylic", material:"Acrylic + Canvas", price:3900, mrp:5200, size:"24×18 inch", badge:null, rating:4.7, reviews:38, image:"https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=900&h=1100&fit=crop&q=80"], desc:"Fluid acrylic geode with gold leaf veins, teal + ivory cells. Ready to hang, varnished.", custom:false },
  { id:7, name:"Baby Name Cloud — Aarav", category:"Nameboard", material:"Acrylic + Wood", price:2400, mrp:3200, size:"16 inch • Cloud", badge:"Kids", rating:4.9, reviews:54, image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&h=1100&fit=crop&q=80"], desc:"Cloud-shaped nameboard — pastel acrylic, LED optional, wooden stand + wall hook. Nursery bestseller.", custom:true },
  { id:8, name:"Resin Beach Tray Set", category:"Resin Art", material:"Resin + Wood", price:3100, mrp:4000, size:"Set of 3", badge:"Gift Set", rating:4.8, reviews:29, image:"https://images.unsplash.com/photo-1616046229478-9901c5536daa?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1616046229478-9901c5536daa?w=900&h=1100&fit=crop&q=80"], desc:"Serving tray + 2 coasters — white + beige beach pour with gold flakes. Food-safe resin.", custom:false },
  { id:9, name:"Portrait Thread Art — Custom Photo", category:"String Art", material:"String + Wood", price:7500, mrp:9500, size:"24×18 inch", badge:"Made to Order", rating:4.9, reviews:67, image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&h=1100&fit=crop&q=80"], desc:"Your photo converted to nail map — 600+ nails, 800m thread. Send HD photo, we sketch approval before winding.", custom:true },
  { id:10, name:"Mandala Acrylic Dot — Lotus", category:"Acrylic", material:"Acrylic on Canvas", price:2900, mrp:3800, size:"18 inch • Round", badge:null, rating:4.7, reviews:41, image:"https://images.unsplash.com/photo-1578301973809-5921112ab69d?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1578301973809-5921112ab69d?w=900&h=1100&fit=crop&q=80"], desc:"Dot mandala lotus — hand-dotted with precision tools, 16 hours, vibrant festive colors.", custom:false },
  { id:11, name:"House of Sharma — Rustic Board", category:"Nameboard", material:"Pine + String", price:3800, mrp:4800, size:"18×12 inch", badge:"Outdoor Safe", rating:4.8, reviews:73, image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=1100&fit=crop&q=80"], desc:"Rustic pine with rope-wrapped letters and resin flower corners. Brass hooks, PU coated for monsoon.", custom:true },
  { id:12, name:"Resin Mantra Frame — Om", category:"Resin Art", material:"Resin + Gold Leaf", price:4600, mrp:6000, size:"16×20 inch", badge:"Spiritual", rating:4.9, reviews:36, image:"https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=800&h=1000&fit=crop&q=80", images:["https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=900&h=1100&fit=crop&q=80"], desc:"Deep ocean + gold leaf with Om mantra, wooden frame. Diwali + housewarming favorite.", custom:false },
];

function getWorks(){
  try{
    const s=localStorage.getItem('taar_works');
    if(s) return JSON.parse(s);
  }catch(e){}
  return WORKS;
}
function saveWorks(list){ localStorage.setItem('taar_works', JSON.stringify(list)); }
function resetWorks(){ localStorage.removeItem('taar_works'); return WORKS; }

function getCart(){
  try{ return JSON.parse(localStorage.getItem('taar_cart')||'[]'); }catch(e){return [];}
}
function saveCart(c){ localStorage.setItem('taar_cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(work, opts={qty:1}){
  const cart=getCart();
  const key = opts.key || `${work.id}`;
  const existing=cart.find(i=>i.key===key);
  if(existing) existing.qty+=opts.qty;
  else cart.push({ key, id:work.id, name:work.name, price: opts.price||work.price, image:work.image, category:work.category, qty:opts.qty, meta: opts.meta||work.size });
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
  try{ return JSON.parse(localStorage.getItem('taar_wishlist')||'[]');}catch(e){return [];}
}
function saveWishlist(w){ localStorage.setItem('taar_wishlist', JSON.stringify(w)); updateWishlistCount(); }
function toggleWishlist(id){
  let w=getWishlist();
  if(w.includes(id)) w=w.filter(x=>x!==id); else w.push(id);
  saveWishlist(w);
  return w.includes(id);
}
function isWishlisted(id){ return getWishlist().includes(id); }

function updateCartCount(){
  const n=cartCount();
  document.querySelectorAll('[data-cart-count]').forEach(el=>{ el.textContent=n; el.classList.toggle('hidden', n===0); el.classList.toggle('flex', n!==0); });
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
    t.className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] bg-[#1A1412] text-white text-sm font-medium px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-300 pointer-events-none';
    document.body.appendChild(t);
  }
  t.innerHTML = `<span class="w-6 h-6 rounded-full bg-[#D98E32] text-[#1A1412] flex items-center justify-center">✓</span> ${msg}`;
  t.classList.remove('opacity-0','translate-y-4');
  t.classList.add('opacity-100','translate-y-0');
  clearTimeout(t._t);
  t._t=setTimeout(()=>{ t.classList.add('opacity-0','translate-y-4'); t.classList.remove('opacity-100','translate-y-0'); },2600);
}

/* Custom orders */
function getCustomQueue(){
  try{ const s=localStorage.getItem('taar_custom'); if(s) return JSON.parse(s);}catch(e){}
  return [
    { id:'TAAR-2084', name:'Neha & Raj • Anniversary Heart', type:'String Art • Couple Name', qty:1, budget:'₹5,200', status:'Design Approval', date:'2026-08-22', note:'Red + ivory thread, 20×14, photo attached' },
    { id:'TAAR-2083', name:'Ishita • Baby Aarav Cloud', type:'Nameboard • Cloud', qty:1, budget:'₹2,400', status:'In Production', date:'2026-08-21', note:'Pastel blue, LED yes, wall + stand' },
    { id:'TAAR-2082', name:'Mehta Family • House Name', type:'Nameboard • Rustic', qty:1, budget:'₹3,800', status:'Winding', date:'2026-08-20', note:'Pine + rope letters, Outdoor PU' },
    { id:'TAAR-2081', name:'Corporate — 12 Gifts', type:'Resin Tray Set ×12', qty:12, budget:'₹37,200', status:'Pending Review', date:'2026-08-19', note:'Beige beach pour, logo on back' },
  ];
}
function saveCustomQueue(list){ localStorage.setItem('taar_custom', JSON.stringify(list)); }

function getOrders(){
  try{ const s=localStorage.getItem('taar_orders'); if(s) return JSON.parse(s);}catch(e){}
  return [
    { id:'#TA-3412', customer:'Priya Sharma', email:'priya.s@gmail.com', total:4200, items:1, status:'Paid', date:'2026-08-23' },
    { id:'#TA-3411', customer:'Rohan Mehta', email:'rohan.m@gmail.com', total:10300, items:2, status:'Shipped', date:'2026-08-22' },
    { id:'#TA-3410', customer:'Ananya Gupta', email:'ananya.g@gmail.com', total:2800, items:1, status:'Processing', date:'2026-08-22' },
    { id:'#TA-3409', customer:'Kabir Singh', email:'kabir.s@gmail.com', total:7500, items:1, status:'Delivered', date:'2026-08-20' },
  ];
}
function saveOrders(list){ localStorage.setItem('taar_orders', JSON.stringify(list)); }

/* Search + Drawer + Mobile */
function openSearch(){
  const el=document.getElementById('searchOverlay');
  if(!el) return;
  el.classList.remove('hidden');
  setTimeout(()=>document.getElementById('searchInput')?.focus(),60);
}
function closeSearch(){ document.getElementById('searchOverlay')?.classList.add('hidden'); }
function renderSearchResults(q){
  const wrap=document.getElementById('searchResults');
  if(!wrap) return;
  const list=getWorks();
  const query=(q||'').toLowerCase().trim();
  const filtered = !query ? list.slice(0,6) : list.filter(p=> p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.material.toLowerCase().includes(query));
  if(!filtered.length){ wrap.innerHTML=`<div class="text-center py-8 text-[#9C8E84]">No works for “${q}” — try “String”, “Resin”, “Nameboard”</div>`; return; }
  wrap.innerHTML=filtered.slice(0,6).map(p=>`
    <a href="product.html?id=${p.id}" class="flex gap-4 p-3 hover:bg-[#FFFBF5] rounded-2xl transition">
      <img src="${p.image}" class="w-20 h-20 rounded-xl object-cover">
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-widest text-[#9C8E84]">${p.category} • ${p.material}</div>
        <div class="font-medium leading-tight">${p.name}</div>
        <div class="text-sm font-semibold">${formatINR(p.price)} <span class="text-xs text-[#9C8E84] line-through ml-1">${formatINR(p.mrp)}</span></div>
      </div>
      <span class="self-center w-8 h-8 rounded-full border flex items-center justify-center">→</span>
    </a>
  `).join('');
}
function openCartDrawer(){
  const d=document.getElementById('cartDrawer');
  if(!d) { location.href='gallery.html'; return; }
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
    wrap.innerHTML=`<div class="text-center py-16"><div class="w-20 h-20 rounded-full bg-[#FFFBF5] flex items-center justify-center mx-auto text-2xl border">♡</div><div class="font-serif text-xl mt-3">Your cart is empty</div><p class="text-sm text-[#9C8E84] mt-1">Add a handcrafted piece.</p><a href="gallery.html" class="inline-flex mt-6 bg-[#1A1412] text-white px-6 py-3 rounded-full text-sm font-semibold">Explore Works</a></div>`;
    foot?.classList.add('hidden'); return;
  }
  foot?.classList.remove('hidden');
  wrap.innerHTML=cart.map(i=>`
    <div class="flex gap-4 py-4 border-b border-[#E8DDD3]">
      <img src="${i.image}" class="w-20 h-20 rounded-xl object-cover">
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-widest text-[#9C8E84]">${i.category}</div>
        <div class="font-medium text-sm leading-tight">${i.name}</div>
        ${i.meta?`<div class="text-xs text-[#6B6560] mt-1">${i.meta}</div>`:''}
        <div class="flex items-center justify-between mt-3">
          <div class="flex items-center border border-[#E8DDD3] rounded-full overflow-hidden">
            <button onclick="updateQty('${i.key}',-1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-[#FFFBF5]">−</button>
            <span class="w-8 text-center text-sm font-semibold">${i.qty}</span>
            <button onclick="updateQty('${i.key}',1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-[#FFFBF5]">+</button>
          </div>
          <div class="font-semibold text-sm">${formatINR(i.price*i.qty)}</div>
        </div>
      </div>
      <button onclick="removeFromCart('${i.key}');renderCartDrawer();showToast('Removed from cart')" class="self-start text-[#9C8E84] hover:text-[#1A1412]">✕</button>
    </div>
  `).join('');
  const sub=document.getElementById('cartDrawerSubtotal');
  if(sub) sub.textContent=formatINR(cartSubtotal());
  const lbl=document.getElementById('cartDrawerCountLabel');
  if(lbl) lbl.textContent=`(${cartCount()} items)`;
}

document.addEventListener('error', (e)=>{
  if(e.target.tagName==='IMG'){
    const fallback='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=700&fit=crop&q=80';
    if(e.target.src!==fallback) e.target.src=fallback;
  }
}, true);

function openMobileMenu(){
  const menu=document.getElementById('mobileMenu');
  const overlay=document.getElementById('mobileOverlay');
  if(!menu) return;
  menu.classList.remove('-translate-x-full');
  if(overlay){
    overlay.classList.remove('hidden');
    requestAnimationFrame(()=>{
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
    });
  }
  document.body.style.overflow='hidden';
}
function closeMobileMenu(){
  const menu=document.getElementById('mobileMenu');
  const overlay=document.getElementById('mobileOverlay');
  if(!menu) return;
  menu.classList.add('-translate-x-full');
  if(overlay){
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    setTimeout(()=> overlay.classList.add('hidden'), 300);
  }
  document.body.style.overflow='';
}

document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount(); updateWishlistCount();
  // legacy hidden toggle fallback + new drawer
  document.getElementById('mobileMenuBtn')?.addEventListener('click', ()=>{
    const menu=document.getElementById('mobileMenu');
    if(menu && menu.classList.contains('-translate-x-full')){
      openMobileMenu();
    } else if(menu && menu.classList.contains('transform')){
      closeMobileMenu();
    } else {
      menu?.classList.toggle('hidden');
    }
  });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeSearch(); closeCartDrawer(); closeMobileMenu(); } });
});
