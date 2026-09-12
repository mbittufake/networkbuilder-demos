/* LUME — House of Slow Light · shared app.js · v2 */
const CANDLE_PRODUCTS = [
  { id:1, name:"Fig & Cedar", collection:"Woody", price:1290, mrp:1790, burn:"45h", size:"180g", scent:"Fig, cedarwood, amber", notes:{top:"Ripe fig, bergamot",heart:"Cedarwood, violet leaf",base:"Amber, musk, vetiver"}, mood:"Rainy evenings, books, slow jazz", badge:"Bestseller", rating:4.9, reviews:214, image:"https://images.pexels.com/photos/5200254/pexels-photo-5200254.jpeg?auto=compress&cs=tinysrgb&w=800", desc:"Warm fig meets smoky cedar and a whisper of amber. Grounding, cozy, made for slow evenings." },
  { id:2, name:"Vanilla Ember", collection:"Warm", price:1090, mrp:1490, burn:"40h", size:"180g", scent:"Vanilla, tonka, sandalwood", notes:{top:"Vanilla bean, orange peel",heart:"Tonka, jasmine",base:"Sandalwood, caramel"}, mood:"Sunday baking, cashmere, golden hour", badge:null, rating:4.8, reviews:167, image:"https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=700&fit=crop&q=80", desc:"Creamy vanilla and toasted tonka over sandalwood. Sweet but never cloying — our comfort scent." },
  { id:3, name:"Eucalyptus Rain", collection:"Fresh", price:1190, mrp:1590, burn:"45h", size:"180g", scent:"Eucalyptus, mint, sea salt", notes:{top:"Eucalyptus, mint",heart:"Sea salt, sage",base:"Driftwood, musk"}, mood:"Morning shower, open windows, reset", badge:"New", rating:4.7, reviews:98, image:"https://images.pexels.com/photos/286145/pexels-photo-286145.jpeg?auto=compress&cs=tinysrgb&w=800", desc:"Crisp eucalyptus and mint cut with sea salt. Like a cold shower for your room." },
  { id:4, name:"Rosewood & Oud", collection:"Woody", price:1490, mrp:1990, burn:"50h", size:"220g", scent:"Rose, oud, leather", notes:{top:"Damask rose, saffron",heart:"Oud, geranium",base:"Leather, patchouli"}, mood:"Date night, low light, red wine", badge:"Limited", rating:4.9, reviews:132, image:"https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=700&fit=crop&q=80", desc:"Damask rose softened by smoky oud and leather. Evening scent, low light, red wine." },
  { id:5, name:"Citrus Bloom", collection:"Citrus", price:990, mrp:1390, burn:"35h", size:"150g", scent:"Bergamot, neroli, grapefruit", notes:{top:"Bergamot, grapefruit",heart:"Neroli, orange blossom",base:"White musk"}, mood:"Morning kitchen, fresh sheets, chai sun", badge:null, rating:4.6, reviews:87, image:"https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg?auto=compress&cs=tinysrgb&w=800", desc:"Bright bergamot and neroli over grapefruit peel. Morning kitchen, fresh sheets." },
  { id:6, name:"Lavender Dusk", collection:"Floral", price:1090, mrp:1490, burn:"40h", size:"180g", scent:"Lavender, clary sage, musk", notes:{top:"French lavender, bergamot",heart:"Clary sage, chamomile",base:"Soft musk, cedar"}, mood:"Wind-down, linen spray, deep sleep", badge:null, rating:4.7, reviews:143, image:"https://images.pexels.com/photos/1809347/pexels-photo-1809347.jpeg?auto=compress&cs=tinysrgb&w=800", desc:"French lavender with clary sage and soft musk. Your wind-down ritual." },
  { id:7, name:"Tobacco & Honey", collection:"Warm", price:1390, mrp:1890, burn:"50h", size:"220g", scent:"Tobacco leaf, honey, oak", notes:{top:"Tobacco leaf, dried fruit",heart:"Wild honey, cinnamon",base:"Oak, vanilla bourbon"}, mood:"Library, leather chair, old books", badge:"Editor's Pick", rating:4.8, reviews:201, image:"https://images.pexels.com/photos/356661/pexels-photo-356661.jpeg?auto=compress&cs=tinysrgb&w=800", desc:"Dark tobacco, wild honey, oak. Cozy library, cashmere blanket." },
  { id:8, name:"Sea Salt & Sage", collection:"Fresh", price:1190, mrp:1590, burn:"45h", size:"180g", scent:"Sea salt, sage, driftwood", notes:{top:"Sea salt, bergamot",heart:"Sage, rosemary",base:"Driftwood, amber"}, mood:"Coastal walk, white curtains, breeze", badge:null, rating:4.8, reviews:112, image:"https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=600&h=700&fit=crop&q=80", desc:"Salty air, sage leaf, driftwood. Coastal walk in a jar." },
  { id:9, name:"Amber Noir", collection:"Woody", price:1590, mrp:2090, burn:"60h", size:"300g", scent:"Amber, patchouli, incense", notes:{top:"Incense, pink pepper",heart:"Amber, labdanum",base:"Patchouli, vanilla smoke"}, mood:"Dinner party, candlelit, unforgettable", badge:"Premium", rating:4.9, reviews:94, image:"https://images.pexels.com/photos/278823/pexels-photo-278823.jpeg?auto=compress&cs=tinysrgb&w=800", desc:"Deep amber, patchouli, incense smoke. Dramatic, moody, unforgettable." },
  { id:10, name:"Neroli Sun", collection:"Citrus", price:1090, mrp:1490, burn:"40h", size:"180g", scent:"Neroli, orange blossom, honey", notes:{top:"Neroli, mandarin",heart:"Orange blossom, jasmine",base:"Honey, musk"}, mood:"Balcony mornings, marigold, joy", badge:null, rating:4.6, reviews:76, image:"https://images.pexels.com/photos/225073/pexels-photo-225073.jpeg?auto=compress&cs=tinysrgb&w=800", desc:"Sunlit neroli and orange blossom with a honeyed base. Joyful, golden." },
  { id:11, name:"Sakura Whisper", collection:"Floral", price:1190, mrp:1590, burn:"40h", size:"180g", scent:"Cherry blossom, peony, sandalwood", notes:{top:"Cherry blossom, pear",heart:"Peony, rose water",base:"Sandalwood, white tea"}, mood:"Spring, soft mornings, love letters", badge:"New", rating:4.7, reviews:65, image:"https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&h=700&fit=crop&q=80", desc:"Airy sakura and peony over creamy sandalwood. Delicate, spring-like." },
  { id:12, name:"Oud Midnight", collection:"Woody", price:1690, mrp:2190, burn:"60h", size:"300g", scent:"Oud, leather, black pepper", notes:{top:"Black pepper, cardamom",heart:"Smoked oud, leather",base:"Vetiver, dark amber"}, mood:"Midnight, vinyl, strong throw lovers", badge:null, rating:4.8, reviews:58, image:"https://images.pexels.com/photos/289770/pexels-photo-289770.jpeg?auto=compress&cs=tinysrgb&w=800", desc:"Intense oud, leather, a crack of black pepper. For those who love a strong throw." },
];

const FALLBACK_IMG = 'https://images.pexels.com/photos/5200254/pexels-photo-5200254.jpeg?auto=compress&cs=tinysrgb&w=800';

/* ---------- catalogue ---------- */
function getCandles(){
  try{
    const s=localStorage.getItem('lume_products');
    if(s){
      const parsed=JSON.parse(s);
      if(Array.isArray(parsed) && parsed.length){
        const bad=['photo-1602607203326','photo-1502185865092','photo-1602607203205','photo-1582738697091','photo-1507680273475','photo-1596722810920','photo-1602874806904','photo-1540931699883'];
        if(bad.some(b=>s.includes(b))){ localStorage.removeItem('lume_products'); }
        else {
          // merge notes/mood for old stored items
          return parsed.map(p=>{
            const fresh=CANDLE_PRODUCTS.find(c=>c.id===p.id);
            return fresh ? {...fresh,...p, notes:p.notes||fresh.notes, mood:p.mood||fresh.mood} : p;
          });
        }
      }
    }
  }catch(e){}
  return CANDLE_PRODUCTS;
}
function saveCandles(list){ localStorage.setItem('lume_products', JSON.stringify(list)); }
function resetCandles(){ localStorage.removeItem('lume_products'); return CANDLE_PRODUCTS; }

/* ---------- cart ---------- */
function getCart(){ try{ return JSON.parse(localStorage.getItem('lume_cart')||'[]'); }catch(e){return [];} }
function saveCart(c){ localStorage.setItem('lume_cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(product, opts={}){
  const qty=opts.qty||1;
  const cart=getCart();
  const key = opts.key || `${product.id}`;
  const existing=cart.find(i=>i.key===key);
  if(existing) existing.qty+=qty;
  else cart.push({ key, id:product.id, name:product.name, price: opts.price||product.price, image:product.image||FALLBACK_IMG, collection:product.collection||'Lume', qty, meta: opts.meta||'' });
  saveCart(cart);
}
function quickAdd(id, qty=1){
  const p=getCandles().find(x=>x.id===Number(id));
  if(!p) return;
  addToCart(p,{qty});
  showToast(`${p.name} added to your ritual`);
  openCartDrawer();
}
function removeFromCart(key){ saveCart(getCart().filter(i=>i.key!==key)); }
function updateQty(key, delta){
  const cart=getCart();
  const it=cart.find(i=>i.key===key);
  if(!it) return;
  it.qty=Math.max(1, it.qty+delta);
  saveCart(cart);
}
function setQty(key, qty){
  const cart=getCart();
  const it=cart.find(i=>i.key===key);
  if(!it) return;
  it.qty=Math.max(1, Math.min(99, qty));
  saveCart(cart);
}
function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return getCart().reduce((s,i)=>s+i.price*i.qty,0); }
function formatINR(n){ return '₹'+Number(n||0).toLocaleString('en-IN'); }
function discountPct(mrp,price){ if(!mrp||mrp<=price) return 0; return Math.round((1-price/mrp)*100); }

/* ---------- wishlist ---------- */
function getWishlist(){ try{ return JSON.parse(localStorage.getItem('lume_wishlist')||'[]');}catch(e){return [];} }
function saveWishlist(w){ localStorage.setItem('lume_wishlist', JSON.stringify(w)); updateWishlistCount(); }
function toggleWishlist(id){
  id=Number(id);
  let w=getWishlist();
  if(w.includes(id)) w=w.filter(x=>x!==id); else w.push(id);
  saveWishlist(w);
  // refresh any hearts on page
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(b=>{
    b.textContent = w.includes(id) ? '♥' : '♡';
    b.classList.toggle('is-wished', w.includes(id));
  });
  return w.includes(id);
}
function isWishlisted(id){ return getWishlist().includes(Number(id)); }

/* ---------- counts + toast ---------- */
function updateCartCount(){
  const n=cartCount();
  document.querySelectorAll('[data-cart-count]').forEach(el=>{ el.textContent=n; el.classList.toggle('hidden', n===0); });
  document.querySelectorAll('#hdrCart, #hdrCartM, #cartCountLabel').forEach(el=>{ if(el) el.textContent=n; });
  const bar=document.getElementById('shipBar');
  if(bar){
    const sub=cartSubtotal();
    const pct=Math.min(100, Math.round(sub/1999*100));
    bar.style.width=pct+'%';
    const msg=document.getElementById('shipMsg');
    if(msg) msg.innerHTML = sub>=1999 ? '✓ Free shipping unlocked — nicely done' : `Add <b>${formatINR(1999-sub)}</b> more for free shipping`;
  }
}
function updateWishlistCount(){
  const n=getWishlist().length;
  document.querySelectorAll('[data-wishlist-count]').forEach(el=>{ el.textContent=n; el.classList.toggle('hidden', n===0); });
  document.querySelectorAll('#hdrWish').forEach(el=>{ if(el) el.textContent=n; });
}
function showToast(msg, sub){
  let t=document.getElementById('toast');
  if(!t){
    t=document.createElement('div');
    t.id='toast';
    t.className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] flex items-center gap-3 pl-2 pr-5 py-2 rounded-full shadow-2xl transition-all duration-300 opacity-0 translate-y-4 pointer-events-none';
    t.style.background='#1A0E06'; t.style.color='#FFFBF1'; t.style.border='1px solid rgba(255,255,255,.12)';
    document.body.appendChild(t);
  }
  t.innerHTML = `<span style="width:32px;height:32px;border-radius:9999px;background:#E4572E;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800">✦</span><span><span style="display:block;font-size:13px;font-weight:700">${msg}</span>${sub?`<span style="display:block;font-size:11px;opacity:.65">${sub}</span>`:''}</span>`;
  t.classList.remove('opacity-0','translate-y-4');
  clearTimeout(t._t);
  t._t=setTimeout(()=>{ t.classList.add('opacity-0','translate-y-4'); },2600);
}

/* ---------- helpers ---------- */
function scentColor(f){
  return {Woody:'#8A5A2B',Warm:'#C2541B',Fresh:'#5B8A7A',Floral:'#C47A9E',Citrus:'#D9A441',Custom:'#1A0E06'}[f]||'#8A7D72';
}
function starHTML(r){
  const full=Math.round(r);
  return `<span style="color:#C99A3F;letter-spacing:1px">${'★'.repeat(full)}<span style="opacity:.25">${'★'.repeat(Math.max(0,5-full))}</span></span>`;
}
function familyEmoji(f){
  return {Woody:'🪵',Warm:'🔥',Fresh:'🌿',Floral:'🌸',Citrus:'🍋',Custom:'✦'}[f]||'✦';
}

/* ---------- custom + orders ---------- */
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

/* ---------- search + drawers ---------- */
function openSearch(){
  const el=document.getElementById('searchOverlay');
  if(!el) { location.href='shop.html'; return; }
  el.classList.remove('hidden');
  document.body.style.overflow='hidden';
  renderSearchResults('');
  setTimeout(()=>document.getElementById('searchInput')?.focus(),60);
}
function closeSearch(){ document.getElementById('searchOverlay')?.classList.add('hidden'); document.body.style.overflow=''; }
function renderSearchResults(q){
  const wrap=document.getElementById('searchResults');
  if(!wrap) return;
  const list=getCandles();
  const query=(q||'').toLowerCase().trim();
  const filtered = !query ? list.slice(0,4) : list.filter(p=> p.name.toLowerCase().includes(query) || p.collection.toLowerCase().includes(query) || p.scent.toLowerCase().includes(query));
  const label=document.getElementById('searchLabel');
  if(label) label.textContent = !query ? 'Most loved right now' : `${filtered.length} result${filtered.length!==1?'s':''} for “${q}”`;
  if(!filtered.length){ wrap.innerHTML=`<div class="text-center py-10 opacity-60"><div style="font-size:32px">🕯️</div><div class="font-serif text-xl mt-2">Nothing smells like “${q}” yet</div><div class="text-sm mt-1">Try fig, oud, fresh, honey…</div></div>`; return; }
  wrap.innerHTML=filtered.slice(0,6).map(p=>`
    <a href="product.html?id=${p.id}" class="flex gap-4 p-3 rounded-2xl transition group" style="border:1px solid transparent" onmouseover="this.style.background='rgba(228,87,46,.07)';this.style.borderColor='rgba(228,87,46,.18)'" onmouseout="this.style.background='';this.style.borderColor='transparent'">
      <img src="${p.image}" onerror="this.src='${FALLBACK_IMG}'" class="w-[68px] h-[84px] rounded-xl object-cover" style="border-radius:40px 40px 12px 12px" alt="${p.name}">
      <div class="flex-1 min-w-0">
        <div class="text-[10px] uppercase tracking-[0.2em]" style="color:${scentColor(p.collection)};font-weight:800">${familyEmoji(p.collection)} ${p.collection} · ${p.burn}</div>
        <div class="font-serif text-lg leading-tight">${p.name}</div>
        <div class="text-xs opacity-60 truncate">${p.scent}</div>
        <div class="text-sm font-bold mt-1">${formatINR(p.price)} <span class="text-xs font-normal line-through opacity-50 ml-1">${formatINR(p.mrp)}</span></div>
      </div>
      <span class="self-center w-9 h-9 rounded-full flex items-center justify-center transition group-hover:translate-x-1" style="border:1px solid #EDE0CC">→</span>
    </a>
  `).join('');
}
function openCartDrawer(){
  const d=document.getElementById('cartDrawer');
  if(!d){ location.href='cart.html'; return; }
  d.classList.remove('hidden');
  document.body.style.overflow='hidden';
  renderCartDrawer();
}
function closeCartDrawer(){ document.getElementById('cartDrawer')?.classList.add('hidden'); if(document.getElementById('searchOverlay')?.classList.contains('hidden')) document.body.style.overflow=''; }
function renderCartDrawer(){
  const cart=getCart();
  const wrap=document.getElementById('cartDrawerItems');
  const foot=document.getElementById('cartDrawerFooter');
  if(!wrap) return;
  updateCartCount();
  if(!cart.length){
    wrap.innerHTML=`<div class="text-center py-14"><div class="mx-auto flex items-center justify-center text-3xl" style="width:84px;height:84px;border-radius:9999px;background:#FFF1DC;border:1px dashed #E4572E">🕯️</div><div class="font-serif text-2xl mt-4">Your ritual is empty</div><p class="text-sm opacity-60 mt-1">Light something beautiful tonight.</p><a href="shop.html" onclick="closeCartDrawer()" class="inline-flex mt-6 px-7 py-3 rounded-full text-sm font-bold text-white" style="background:#1A0E06">Shop the twelve →</a><div class="mt-3"><a href="custom.html" class="text-sm font-semibold underline underline-offset-4" style="color:#E4572E">or build a custom →</a></div></div>`;
    foot?.classList.add('hidden'); return;
  }
  foot?.classList.remove('hidden');
  wrap.innerHTML=cart.map(i=>`
    <div class="flex gap-3 py-4" style="border-bottom:1px solid #EDE0CC">
      <a href="product.html?id=${i.id}"><img src="${i.image}" onerror="this.src='${FALLBACK_IMG}'" class="w-[68px] h-[84px] object-cover" style="border-radius:40px 40px 12px 12px;border:1px solid #EDE0CC" alt=""></a>
      <div class="flex-1 min-w-0">
        <div class="text-[10px] uppercase tracking-[0.2em] font-extrabold" style="color:${scentColor(i.collection)}">${i.collection}</div>
        <div class="font-serif leading-tight truncate">${i.name}</div>
        ${i.meta?`<div class="text-[11px] opacity-60 mt-0.5 truncate">${i.meta}</div>`:''}
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center rounded-full overflow-hidden" style="border:1px solid #EDE0CC">
            <button onclick="updateQty('${i.key}',-1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-black/5">−</button>
            <span class="w-7 text-center text-sm font-bold">${i.qty}</span>
            <button onclick="updateQty('${i.key}',1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-black/5">+</button>
          </div>
          <div class="font-bold text-sm">${formatINR(i.price*i.qty)}</div>
        </div>
      </div>
      <button onclick="removeFromCart('${i.key}');renderCartDrawer();showToast('Removed from cart')" class="self-start w-7 h-7 rounded-full flex items-center justify-center opacity-50 hover:opacity-100" style="border:1px solid #EDE0CC">×</button>
    </div>
  `).join('');
  const sub=cartSubtotal();
  const el=document.getElementById('cartDrawerSubtotal');
  if(el) el.textContent=formatINR(sub);
  const lbl=document.getElementById('cartDrawerCountLabel');
  if(lbl) lbl.textContent=`(${cartCount()} item${cartCount()!==1?'s':''})`;
}

/* ---------- global ambience ---------- */
function initEmbers(canvasId){
  const c=document.getElementById(canvasId);
  if(!c) return;
  const ctx=c.getContext('2d');
  let w,h,parts=[];
  function resize(){ w=c.width=c.offsetWidth; h=c.height=c.offsetHeight; }
  resize(); window.addEventListener('resize', resize);
  for(let i=0;i<28;i++) parts.push({x:Math.random(),y:Math.random(),r:Math.random()*2.2+0.6,s:Math.random()*0.0009+0.0003,o:Math.random()*0.5+0.2,ph:Math.random()*Math.PI*2});
  (function tick(t){
    ctx.clearRect(0,0,w,h);
    parts.forEach(p=>{
      p.y-=p.s; if(p.y<0){p.y=1;p.x=Math.random();}
      const flick=Math.sin(t/700+p.ph)*0.5+0.5;
      ctx.beginPath();
      ctx.arc(p.x*w, p.y*h, p.r, 0, Math.PI*2);
      ctx.fillStyle=`rgba(228,87,46,${(p.o*(0.4+flick*0.6)).toFixed(3)})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  })(0);
}
function initReveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target);} }),{threshold:0.12});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
}
function initAnnounce(){
  const el=document.getElementById('announceText');
  if(!el) return;
  const msgs=[
    'Batch №185 curing now — ships in 2 days · <a href="custom.html" style="text-decoration:underline;text-underline-offset:4px">Design yours →</a>',
    'Free shipping over ₹1,999 · COD available',
    'Wedding & Diwali bulk — from 6 pcs · <a href="custom.html" style="text-decoration:underline;text-underline-offset:4px">Get quote →</a>'
  ];
  let i=0;
  setInterval(()=>{ i=(i+1)%msgs.length; el.style.opacity=0; setTimeout(()=>{ el.innerHTML=msgs[i]; el.style.opacity=1; },300); },4200);
}

/* image fallback */
document.addEventListener('error', (e)=>{
  if(e.target && e.target.tagName==='IMG'){
    if(!e.target.src.includes('5200254')) e.target.src=FALLBACK_IMG;
  }
}, true);

document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount(); updateWishlistCount();
  initReveal(); initAnnounce();
  document.getElementById('mobileMenuBtn')?.addEventListener('click', ()=> document.getElementById('mobileMenu')?.classList.toggle('hidden'));
  document.getElementById('mobileMenuBtnM')?.addEventListener('click', ()=> document.getElementById('mobileMenu')?.classList.toggle('hidden'));
  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeSearch(); closeCartDrawer(); } });
});
