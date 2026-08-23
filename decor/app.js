/* FOLKFORM — DIY Home Decor Atelier app.js — categories: Bottle, Light, Flowerpot, Wall Hanging, Vase, Planter */
const FOLK_PRODUCTS = [
  { id:1, name:"Arch Macramé Wall Hanging Kit", cat:"Wall Hanging", price:1890, mrp:2690, badge:"Bestseller", rating:4.9, reviews:342, difficulty:"Beginner", time:"3–4 hr", includes:"Cotton rope • Brass arch • Guide", image:"https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=700&h=700&fit=crop&q=80", desc:"Weave your own statement arch. No experience needed — our step video + pre-cut rope makes it meditative, not messy. Finish: 38×72cm." },
  { id:2, name:"Rattan Glow Pendant Kit", cat:"Light", price:2490, mrp:3590, badge:"Editor's Pick", rating:4.8, reviews:187, difficulty:"Intermediate", time:"2 hr", includes:"Rattan rings • LED cord • Brass fitting", image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&h=700&fit=crop&q=80", desc:"Bend, weave, wire — and hang. A warm pool of light, made by your hands. Approved for LED, 40cm shade." },
  { id:3, name:"Terracotta Ripple Vase — Trio", cat:"Vase", price:1690, mrp:2290, badge:"New", rating:4.7, reviews:98, difficulty:"Beginner", time:"2.5 hr + dry", includes:"Air-dry clay 1kg • Tools • Paints", image:"https://images.unsplash.com/photo-1578500354195-e6e55b658d4b?w=700&h=700&fit=crop&q=80", desc:"Pinch, coil and carve three ripple vases. No kiln needed — air-dry, sand & paint with our mineral terracotta palette." },
  { id:4, name:"Seagrass Basket Weave Kit — Large", cat:"Planter", price:2190, mrp:2990, badge:null, rating:4.8, reviews:221, difficulty:"Beginner", time:"4 hr", includes:"Seagrass • Palm handles • Needle", image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&h=700&fit=crop&q=80", desc:"Sturdy enough for blankets, pretty enough for open shelving. Coil-weave with palm stitch. Finished: ø36cm. Also perfect as flowerpot cover." },
  { id:5, name:"Bottle Art Kit — Painted Glass (Set of 3)", cat:"Bottle", price:1490, mrp:2090, badge:"Trending", rating:4.9, reviews:267, difficulty:"Beginner", time:"2 hr", includes:"3 glass bottles • Acrylics • Jute twine", image:"https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=700&h=700&fit=crop&q=80", desc:"Upcycle bottles into boho vases. Paint, wrap jute, add dried pampas. No cutting needed — our bottles are pre-cleaned & sanded." },
  { id:6, name:"Macramé Plant Hanger Trio", cat:"Flowerpot", price:1290, mrp:1890, badge:null, rating:4.9, reviews:412, difficulty:"Beginner", time:"1.5 hr", includes:"Recycled cotton cord • 3 rings", image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=700&h=700&fit=crop&q=80", desc:"Three heights, one afternoon. Knotted hangers for 10–14cm pots. Great first knot project — kids can help." },
  { id:7, name:"Mason Bottle Lamp — DIY Wiring Kit", cat:"Bottle", price:1790, mrp:2490, badge:"Light + Bottle", rating:4.7, reviews:143, difficulty:"Intermediate", time:"1.5 hr", includes:"Mason bottle • LED strip • Cork switch", image:"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=700&h=700&fit=crop&q=80", desc:"Turn a bottle into a warm table lamp. Pre-drilled cork, no electrician needed — battery LED, dimmable." },
  { id:8, name:"Mini Loom Wall Hanging Kit", cat:"Wall Hanging", price:1490, mrp:2090, badge:"Kit + Frame", rating:4.7, reviews:189, difficulty:"Beginner", time:"3 hr", includes:"Wooden loom 30cm • Yarns • Shuttle", image:"https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=700&h=700&fit=crop&q=80", desc:"Warp, weave, fringe. Includes adjustable loom you keep. Makes a 24×30cm wall piece in our ‘Dune’ yarn palette." },
  { id:9, name:"Jute Light Fringe Pendant — 30cm", cat:"Light", price:2690, mrp:3690, badge:"Statement", rating:4.8, reviews:112, difficulty:"Intermediate", time:"2.5 hr", includes:"Jute fringe • Metal ring • Cord kit", image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&h=700&fit=crop&q=80", desc:"Fringe + glow. Tie jute tassels around a ring and wire the pendant. Boho meets coastal — heavier than it looks, hangs flat." },
  { id:10, name:"Hand-Pinched Planter Trio — Terracotta", cat:"Flowerpot", price:1890, mrp:2590, badge:"With Seeds", rating:4.7, reviews:154, difficulty:"Beginner", time:"2 hr + dry", includes:"Stoneware clay • Liners • Seeds", image:"https://images.unsplash.com/photo-1459411552884-521ffdd32c7f?w=700&h=700&fit=crop&q=80", desc:"No wheel needed — just thumbs. Make three textured planters and plant the included snake plant seeds. Liners included." },
  { id:11, name:"Ceramic Vase — Wheel-Free Sculpt Kit", cat:"Vase", price:1990, mrp:2790, badge:"Slow Made", rating:4.8, reviews:98, difficulty:"Intermediate", time:"2 hr + dry", includes:"Porcelain clay • Glaze • Tools", image:"https://images.unsplash.com/photo-1608111113071-8ffaba6217e8?w=700&h=700&fit=crop&q=80", desc:"Hand-build a sculptural vase. Pinch & coil technique, no wheel. Fires at home — air-dry + seal." },
  { id:12, name:"Rope Flowerpot Cover — Jute Wrap Kit", cat:"Flowerpot", price:1190, mrp:1690, badge:null, rating:4.6, reviews:87, difficulty:"Beginner", time:"1.5 hr", includes:"Jute rope 40m • Pot • Glue", image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=700&h=700&fit=crop&q=80", desc:"Wrap a plain plastic pot into a designer jute cover. Sturdy coiled wrap, no sewing." },
];

function getProducts(){
  try{
    const s=localStorage.getItem('folkform_products');
    if(s){
      const parsed=JSON.parse(s);
      const cats=new Set(parsed.map(p=>p.cat));
      // invalidate old categories (pre-Dec 2026): Macramé, Weaving, Wood Craft, Textile, Clay & Ceramic
      if(cats.has('Macramé') || cats.has('Weaving') || cats.has('Wood Craft') || cats.has('Textile') || cats.has('Clay & Ceramic')){
        localStorage.removeItem('folkform_products');
      } else {
        return parsed;
      }
    }
  }catch(e){}
  return FOLK_PRODUCTS;
}
function saveProducts(list){ localStorage.setItem('folkform_products', JSON.stringify(list)); }
function resetProducts(){ localStorage.removeItem('folkform_products'); return FOLK_PRODUCTS; }

function getCart(){
  try{ return JSON.parse(localStorage.getItem('folkform_cart')||'[]'); }catch(e){return [];}
}
function saveCart(c){ localStorage.setItem('folkform_cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(product, opts={qty:1}){
  const cart=getCart();
  const key = opts.key || `${product.id}`;
  const existing=cart.find(i=>i.key===key);
  if(existing) existing.qty+=opts.qty;
  else cart.push({ key, id:product.id, name:product.name, price: opts.price||product.price, image:product.image, cat:product.cat, qty:opts.qty, meta: opts.meta||'' });
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
  try{ return JSON.parse(localStorage.getItem('folkform_wishlist')||'[]');}catch(e){return [];}
}
function saveWishlist(w){ localStorage.setItem('folkform_wishlist', JSON.stringify(w)); updateWishlistCount(); }
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
    t.className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] bg-[#1E1A16] text-[#FFFCF5] text-sm font-medium px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-300 pointer-events-none';
    document.body.appendChild(t);
  }
  t.innerHTML = `<span class="w-6 h-6 rounded-full bg-[#D87A4A] text-white flex items-center justify-center font-bold"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg></span> ${msg}`;
  t.classList.remove('opacity-0','translate-y-4');
  t.classList.add('opacity-100','translate-y-0');
  clearTimeout(t._t);
  t._t=setTimeout(()=>{ t.classList.add('opacity-0','translate-y-4'); t.classList.remove('opacity-100','translate-y-0'); },2600);
}

/* Orders / Workshops / Custom */
function getOrders(){
  try{ const s=localStorage.getItem('folkform_orders'); if(s) return JSON.parse(s);}catch(e){}
  return [
    { id:'#FF-3821', customer:'Meera Patel', email:'meera.p@gmail.com', total:3780, items:2, status:'Paid', date:'2026-08-20' },
    { id:'#FF-3820', customer:'Kabir Das', email:'kabir.d@gmail.com', total:2490, items:1, status:'Making', date:'2026-08-19' },
    { id:'#FF-3819', customer:'Ananya Singh', email:'ananya.s@gmail.com', total:5280, items:3, status:'Shipped', date:'2026-08-18' },
    { id:'#FF-3818', customer:'Rohan Gupta', email:'rohan.g@gmail.com', total:1290, items:1, status:'Delivered', date:'2026-08-17' },
    { id:'#FF-3817', customer:'Priya Nair', email:'priya.n@gmail.com', total:4180, items:2, status:'Paid', date:'2026-08-16' },
  ];
}
function saveOrders(list){ localStorage.setItem('folkform_orders', JSON.stringify(list)); }

function getWorkshops(){
  try{ const s=localStorage.getItem('folkform_workshops'); if(s) return JSON.parse(s);}catch(e){}
  return [
    { id:'WS-09', title:'Macramé Arch — Live', date:'30 Aug · Jaipur Studio', seats:'12/16', price:1800, status:'Filling' },
    { id:'WS-10', title:'Terracotta Vases — Online', date:'06 Sep · Zoom + Kit', seats:'44/60', price:1690, status:'Open' },
    { id:'WS-11', title:'Rattan Light — Jaipur', date:'13 Sep · Studio', seats:'6/12', price:2490, status:'Open' },
  ];
}

/* Search + Drawer + Wishlist modal helpers */
function openSearch(){
  const el=document.getElementById('searchOverlay');
  if(!el) { location.href='shop.html'; return; }
  el.classList.remove('hidden');
  setTimeout(()=>document.getElementById('searchInput')?.focus(),60);
}
function closeSearch(){ document.getElementById('searchOverlay')?.classList.add('hidden'); }
function renderSearchResults(q){
  const wrap=document.getElementById('searchResults');
  if(!wrap) return;
  const list=getProducts();
  const query=(q||'').toLowerCase().trim();
  const filtered = !query ? list.slice(0,6) : list.filter(p=> p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query) || p.difficulty.toLowerCase().includes(query));
  if(!filtered.length){ wrap.innerHTML=`<div class="text-center py-8 text-[#9C8E84]">No kits for “${q}” — try Bottle, Light, Flowerpot, Vase</div>`; return; }
  wrap.innerHTML=filtered.slice(0,6).map(p=>`
    <a href="product.html?id=${p.id}" class="flex gap-4 p-3 hover:bg-[#FFF6EC] rounded-2xl transition">
      <img src="${p.image}" class="w-20 h-20 rounded-xl object-cover">
      <div class="flex-1 min-w-0">
        <div class="text-[11px] uppercase tracking-widest text-[#9C8E84]">${p.cat} • ${p.difficulty}</div>
        <div class="font-medium leading-tight">${p.name}</div>
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
    wrap.innerHTML=`<div class="text-center py-16"><div class="w-20 h-20 rounded-full bg-[#FFF6EC] border border-[#EADBC8] flex items-center justify-center mx-auto text-2xl"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 3a9 9 0 0 1 5.5 16.5"/><path d="M12 3a9 9 0 0 0-5.5 16.5"/><path d="M3 12a9 9 0 0 1 16.5-5.5"/><path d="M3 12a9 9 0 0 0 16.5 5.5"/></svg></div><div class="font-serif text-xl mt-3 text-[#1E1A16]">Your studio is empty</div><p class="text-sm text-[#6B5E55] mt-1">Pick a kit — make it this weekend.</p><a href="shop.html" class="inline-flex mt-6 bg-[#1E1A16] text-white px-6 py-3 rounded-full text-sm font-semibold">Browse Kits</a></div>`;
    foot?.classList.add('hidden'); return;
  }
  foot?.classList.remove('hidden');
  wrap.innerHTML=cart.map(i=>`
    <div class="flex gap-4 py-4 border-b border-[#EADBC8]">
      <img src="${i.image}" class="w-20 h-20 rounded-xl object-cover border border-[#EADBC8]">
      <div class="flex-1 min-w-0">
        <div class="text-[11px] uppercase tracking-widest text-[#9C8E84]">${i.cat}</div>
        <div class="font-medium text-sm leading-tight">${i.name}</div>
        ${i.meta?`<div class="text-xs text-[#6B5E55] mt-1">${i.meta}</div>`:''}
        <div class="flex items-center justify-between mt-3">
          <div class="flex items-center border border-[#EADBC8] rounded-full overflow-hidden bg-white">
            <button onclick="updateQty('${i.key}',-1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-[#FFF6EC]">−</button>
            <span class="w-8 text-center text-sm font-semibold">${i.qty}</span>
            <button onclick="updateQty('${i.key}',1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-[#FFF6EC]">+</button>
          </div>
          <div class="font-semibold text-sm">${formatINR(i.price*i.qty)}</div>
        </div>
      </div>
      <button onclick="removeFromCart('${i.key}');renderCartDrawer();showToast('Removed')" class="self-start text-[#9C8E84] hover:text-[#1E1A16]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    </div>
  `).join('');
  document.getElementById('cartDrawerSubtotal').textContent=formatINR(cartSubtotal());
  document.getElementById('cartDrawerCountLabel').textContent=`(${cartCount()} items)`;
}

/* Image fallback */
document.addEventListener('error', (e)=>{
  if(e.target.tagName==='IMG'){
    const fallback='https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&h=600&fit=crop&q=80';
    if(e.target.src!==fallback) e.target.src=fallback;
  }
}, true);

document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount(); updateWishlistCount();
  document.getElementById('mobileMenuBtn')?.addEventListener('click', ()=> document.getElementById('mobileMenu')?.classList.toggle('hidden'));
  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeSearch(); closeCartDrawer(); } });
});
