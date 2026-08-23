/* OTAKU — Anime Figure & Keychain Store — REAL ANIME IMAGES */
const ANIME_PRODUCTS = [
  { id:1, name:"Naruto Uzumaki — Sage Mode 1/7", category:"Figures", price:2490, mrp:3490, rating:4.9, reviews:342, badge:"Bestseller", stock:12, image:"https://shop.otakuhouse.com/cdn/shop/files/figurines-banpresto-naruto-shippuden-uzumaki-naruto-combination-battle-2-figure-1242899768.jpg", desc:"1/7 scale, 22cm — Sage Mode with Rasenshuriken effect parts. PVC/ABS, pre-painted." },
  { id:2, name:"Monkey D. Luffy — Gear 5 Nika Figure", category:"Figures", price:3290, mrp:4490, rating:4.9, reviews:298, badge:"New", stock:8, image:"https://shop.otakuhouse.com/cdn/shop/files/figurines-banpresto-one-piece-monkey-d-luffy-gear-4-senkou-zekkei-figure-1242899778.jpg", desc:"Gear 5 Nika — white hair, joy-boy pose, 24cm. Limited edition with base." },
  { id:3, name:"Nezuko Kamado — Chibi Demon Box", category:"Figures", price:1890, mrp:2490, rating:4.8, reviews:167, badge:null, stock:20, image:"https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg", desc:"Chibi Nezuko in bamboo box — 14cm, cute desk display, includes mini bamboo." },
  { id:4, name:"Satoru Gojo — Hollow Purple", category:"Figures", price:2790, mrp:3590, rating:4.8, reviews:212, badge:"Limited", stock:5, image:"https://shop.otakuhouse.com/cdn/shop/files/figurines-banpresto-naruto-shippuden-uchiha-sasuke-combination-battle-2-figure-1242899771.jpg", desc:"Gojo with Hollow Purple effect — 20cm, blindfold removable, premium shading." },
  { id:5, name:"Straw Hat Crew — Acrylic Stand Set (9 pcs)", category:"Keychains", price:690, mrp:990, rating:4.7, reviews:412, badge:"Trending", stock:40, image:"https://shop.otakuhouse.com/cdn/shop/files/figurines-one-piece-sanji-king-of-artist-special-version-figure-1242899688.png", desc:"9-piece acrylic stands — Luffy to Brook, 8cm each, double-sided print." },
  { id:6, name:"One Piece — Straw Hat Keychain (Metal)", category:"Keychains", price:390, mrp:590, rating:4.6, reviews:534, badge:null, stock:60, image:"https://shop.otakuhouse.com/cdn/shop/files/figurines-banpresto-one-piece-marco-battle-record-collection-figure-1228913696.jpg", desc:"Die-cast straw hat — 4cm, antique brass, comes in treasure box." },
  { id:7, name:"Katana Keychain — Demon Slayer Nichirin", category:"Keychains", price:490, mrp:690, rating:4.7, reviews:289, badge:null, stock:35, image:"https://shop.otakuhouse.com/cdn/shop/files/figurines-banpresto-naruto-shippuden-deidara-vibration-stars-figure-1208365765.jpg", desc:"Mini Nichirin — 12cm, Tanjiro / Rengoku design, alloy + sheath." },
  { id:8, name:"Akira — Neo Tokyo Poster (A2)", category:"Posters", price:590, mrp:890, rating:4.7, reviews:98, badge:null, stock:25, image:"https://shop.otakuhouse.com/cdn/shop/files/figurines-naruto-vibration-stars-figure-hatake-kakashi-and-uchiha-obit-1242899058.jpg", desc:"Akira bike slide — A2, 300gsm matte, licensed reprint." },
  { id:9, name:"Attack on Titan — Wings Hoodie (Unisex)", category:"Apparel", price:1990, mrp:2990, rating:4.8, reviews:143, badge:"Apparel", stock:18, image:"https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_SL1500_.jpg", desc:"Wings of Freedom — 320gsm fleece, embroidered, S-XXL." },
  { id:10, name:"Pikachu — Sleeping Plush 35cm", category:"Plush", price:1290, mrp:1790, rating:4.9, reviews:267, badge:"Bestseller", stock:22, image:"https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Sleeping Pikachu — 35cm, super soft, squishy." },
  { id:11, name:"Totoro — Big Plush 40cm", category:"Plush", price:1590, mrp:2190, rating:4.9, reviews:198, badge:null, stock:14, image:"https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Studio Ghibli Totoro — 40cm, grey, leaf included." },
  { id:12, name:"Sailor Moon — Moon Stick Keychain", category:"Keychains", price:450, mrp:650, rating:4.6, reviews:176, badge:null, stock:45, image:"https://shop.otakuhouse.com/cdn/shop/files/figurines-banpresto-one-piece-vista-battle-record-collection-figure-1228913661.jpg", desc:"Crescent Moon Stick — acrylic + glitter, 7cm." },
  { id:13, name:"MHA — Blind Box (Series 4)", category:"Figures", price:890, mrp:1190, rating:4.7, reviews:203, badge:"Blind Box", stock:30, image:"https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600&h=700&fit=crop&q=80", desc:"My Hero Academia blind box — 1 random of 6, 8cm. Chase Deku 1:72." },
  { id:14, name:"Anya Forger — Spy x Family Figure", category:"Figures", price:2190, mrp:2890, rating:4.8, reviews:134, badge:null, stock:10, image:"https://shop.otakuhouse.com/cdn/shop/files/figurines-naruto-shippuden-haruno-sakura-grandista-figure-1242899048.jpg", desc:"Anya with peanuts — 16cm, expressive face, Heh pose." },
  { id:15, name:"Saitama — One Punch Man 1/6", category:"Figures", price:1990, mrp:2690, rating:4.7, reviews:89, badge:null, stock:16, image:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"Saitama serious punch — 18cm, cape wire, crater base." },
  { id:16, name:"Demon Slayer — Manga Box Set Vol 1-10", category:"Manga", price:2790, mrp:3590, rating:4.9, reviews:76, badge:"Manga", stock:7, image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&h=700&fit=crop&q=80", desc:"Box set Vol 1-10 — English, official Viz, slipcase." },
];

function getProducts(){
  try{
    const s=localStorage.getItem('otaku_products');
    if(s){
      // invalidate old cache with random Unsplash (non-anime) images
      if(s.includes('photo-1578662996442')||s.includes('photo-1596727147705')||s.includes('photo-1560972550')||s.includes('photo-1618331835717')){
        localStorage.removeItem('otaku_products');
      } else return JSON.parse(s);
    }
  }catch(e){}
  return ANIME_PRODUCTS;
}
function saveProducts(list){ localStorage.setItem('otaku_products', JSON.stringify(list)); }

function getCart(){ try{return JSON.parse(localStorage.getItem('otaku_cart')||'[]');}catch(e){return [];} }
function saveCart(c){ localStorage.setItem('otaku_cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(p, opts={qty:1}){
  const cart=getCart();
  const key=`${p.id}`;
  const ex=cart.find(i=>i.key===key);
  if(ex) ex.qty+=opts.qty;
  else cart.push({key, id:p.id, name:p.name, price:p.price, image:p.image, category:p.category, qty:opts.qty});
  saveCart(cart);
}
function removeFromCart(key){ saveCart(getCart().filter(i=>i.key!==key)); }
function updateQty(key, delta){
  const cart=getCart();
  const it=cart.find(i=>i.key===key);
  if(!it) return;
  it.qty=Math.max(1,it.qty+delta);
  saveCart(cart);
}
function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return getCart().reduce((s,i)=>s+i.price*i.qty,0); }
function formatINR(n){ return '₹'+n.toLocaleString('en-IN'); }
function discountPct(mrp,price){ return Math.round((1-price/mrp)*100); }

function getWishlist(){ try{return JSON.parse(localStorage.getItem('otaku_wish')||'[]');}catch(e){return [];} }
function saveWishlist(w){ localStorage.setItem('otaku_wish', JSON.stringify(w)); updateWishlistCount(); }
function toggleWishlist(id){
  let w=getWishlist();
  if(w.includes(id)) w=w.filter(x=>x!==id); else w.push(id);
  saveWishlist(w); return w.includes(id);
}
function isWishlisted(id){ return getWishlist().includes(id); }
function updateCartCount(){
  const n=cartCount();
  document.querySelectorAll('[data-cart-count]').forEach(el=>{ el.textContent=n; el.classList.toggle('hidden', n===0); });
}
function updateWishlistCount(){
  const n=getWishlist().length;
  document.querySelectorAll('[data-wish-count]').forEach(el=>{ el.textContent=n; el.classList.toggle('hidden', n===0); });
}
function showToast(msg){
  let t=document.getElementById('toast');
  if(!t){ t=document.createElement('div'); t.id='toast'; t.className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] bg-[#0A0A0A] text-white text-sm font-medium px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 opacity-0 translate-y-4 transition-all duration-300 pointer-events-none'; document.body.appendChild(t); }
  t.innerHTML=`<span class="w-6 h-6 rounded-full bg-[#FF3B82] text-white flex items-center justify-center font-bold"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg></span> ${msg}`;
  t.classList.remove('opacity-0','translate-y-4'); t.classList.add('opacity-100','translate-y-0');
  clearTimeout(t._t); t._t=setTimeout(()=>{ t.classList.add('opacity-0','translate-y-4'); t.classList.remove('opacity-100','translate-y-0'); },2400);
}
function getOrders(){
  try{const s=localStorage.getItem('otaku_orders'); if(s) return JSON.parse(s);}catch(e){}
  return [
    {id:'#OT-2041', customer:'Aarav Mehta', email:'aarav@gmail.com', total:5280, items:2, status:'Paid', date:'2026-05-10'},
    {id:'#OT-2040', customer:'Sana Khan', email:'sana.k@gmail.com', total:1890, items:1, status:'Shipped', date:'2026-05-09'},
    {id:'#OT-2039', customer:'Rohan Das', email:'rohan@gmail.com', total:3780, items:3, status:'Processing', date:'2026-05-09'},
    {id:'#OT-2038', customer:'Misha Patel', email:'misha@gmail.com', total:2490, items:1, status:'Delivered', date:'2026-05-08'},
  ];
}
function saveOrders(l){ localStorage.setItem('otaku_orders', JSON.stringify(l)); }

/* Search + Drawer */
function openSearch(){
  const el=document.getElementById('searchOverlay');
  if(!el){ location.href='search.html'; return; }
  el.classList.remove('hidden'); setTimeout(()=>document.getElementById('searchInput')?.focus(),60);
}
function closeSearch(){ document.getElementById('searchOverlay')?.classList.add('hidden'); }
function renderSearchResults(q){
  const wrap=document.getElementById('searchResults'); if(!wrap) return;
  const list=getProducts();
  const query=(q||'').toLowerCase().trim();
  const filtered=!query? list.slice(0,6) : list.filter(p=> p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
  if(!filtered.length){ wrap.innerHTML=`<div class="text-center py-8 text-zinc-500">No results for “${q}”</div>`; return; }
  wrap.innerHTML=filtered.slice(0,6).map(p=>`
    <a href="product.html?id=${p.id}" class="flex gap-4 p-3 hover:bg-zinc-50 rounded-2xl transition">
      <img src="${p.image}" class="w-20 h-20 rounded-xl object-cover">
      <div class="flex-1 min-w-0"><div class="text-xs uppercase tracking-widest text-zinc-500">${p.category}</div><div class="font-medium truncate">${p.name}</div><div class="text-sm font-bold">${formatINR(p.price)}</div></div><span class="self-center w-8 h-8 rounded-full border flex items-center justify-center">→</span>
    </a>
  `).join('');
}
function openCartDrawer(){ const d=document.getElementById('cartDrawer'); if(!d){ location.href='cart.html'; return; } d.classList.remove('hidden'); renderCartDrawer(); }
function closeCartDrawer(){ document.getElementById('cartDrawer')?.classList.add('hidden'); }
function renderCartDrawer(){
  const cart=getCart(); const wrap=document.getElementById('cartDrawerItems'); const foot=document.getElementById('cartDrawerFooter'); if(!wrap) return;
  if(!cart.length){ wrap.innerHTML=`<div class="text-center py-16"><div class="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mx-auto text-2xl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6h15l-1.5 9H7z"/><path d="M6 6L5 2H2"/><circle cx="9" cy="20" r="1.8"/><circle cx="18" cy="20" r="1.8"/></svg></div><div class="font-bold text-xl mt-3">Cart empty</div><p class="text-sm text-zinc-500">Add your grails.</p><a href="shop.html" class="inline-flex mt-6 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold">Shop Now</a></div>`; foot?.classList.add('hidden'); return; }
  foot?.classList.remove('hidden');
  wrap.innerHTML=cart.map(i=>`
    <div class="flex gap-4 py-4 border-b border-zinc-100">
      <img src="${i.image}" class="w-20 h-20 rounded-xl object-cover">
      <div class="flex-1 min-w-0"><div class="text-xs uppercase tracking-widest text-zinc-500">${i.category}</div><div class="font-medium text-sm leading-tight">${i.name}</div><div class="flex items-center justify-between mt-3"><div class="flex items-center border rounded-full overflow-hidden"><button onclick="updateQty('${i.key}',-1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-zinc-100"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg></button><span class="w-8 text-center text-sm font-bold">${i.qty}</span><button onclick="updateQty('${i.key}',1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-zinc-100"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button></div><div class="font-bold text-sm">${formatINR(i.price*i.qty)}</div></div></div><button onclick="removeFromCart('${i.key}');renderCartDrawer();showToast('Removed')" class="self-start text-zinc-400 hover:text-black"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    </div>
  `).join('');
  document.getElementById('cartDrawerSubtotal').textContent=formatINR(cartSubtotal());
  document.getElementById('cartDrawerCountLabel').textContent=`(${cartCount()} items)`;
}
document.addEventListener('error', (e)=>{
  if(e.target.tagName==='IMG'){
    const fallback='https://shop.otakuhouse.com/cdn/shop/files/figurines-banpresto-naruto-shippuden-uzumaki-naruto-combination-battle-2-figure-1242899768.jpg';
    if(e.target.src!==fallback) e.target.src=fallback;
  }
}, true);
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount(); updateWishlistCount();
  document.getElementById('mobileMenuBtn')?.addEventListener('click', ()=> document.getElementById('mobileMenu')?.classList.toggle('hidden'));
  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeSearch(); closeCartDrawer(); } });
});
