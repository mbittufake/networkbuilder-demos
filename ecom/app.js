/* PERNAL — shared app logic */
const DEFAULT_PRODUCTS = [
  { id: 1, name: "Oversized Wool Coat", category: "Apparel", price: 8990, mrp: 12990, rating: 4.8, reviews: 124, badge: "Bestseller", colors: ["Camel","Black","Grey"], sizes: ["XS","S","M","L"], image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=700&fit=crop&q=80", desc: "Heavyweight wool-blend coat with dropped shoulders and deep pockets. Tailored for layering over knits." },
  { id: 2, name: "Cropped Linen Shirt", category: "Apparel", price: 2490, mrp: 3490, rating: 4.6, reviews: 89, badge: "New In", colors: ["White","Sage","Sand"], sizes: ["XS","S","M","L","XL"], image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=700&fit=crop&q=80", desc: "Breathable pure linen, cropped cut with mother-of-pearl buttons. Perfect for warm days." },
  { id: 3, name: "Wide-Leg Tailored Trousers", category: "Apparel", price: 3490, mrp: 4490, rating: 4.7, reviews: 156, badge: null, colors: ["Black","Beige","Charcoal"], sizes: ["XS","S","M","L"], image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=700&fit=crop&q=80", desc: "High-waist wide-leg trousers with pressed creases. Fluid drape, office to evening." },
  { id: 4, name: "Ribbed Knit Dress", category: "Apparel", price: 4290, mrp: 5990, rating: 4.9, reviews: 203, badge: "Editor's Pick", colors: ["Black","Cream","Chocolate"], sizes: ["XS","S","M","L"], image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=700&fit=crop&q=80", desc: "Body-skimming ribbed knit with long sleeves and subtle side slit. Stretch comfort meets elegance." },
  { id: 5, name: "Leather Chelsea Boots", category: "Footwear", price: 7490, mrp: 9990, rating: 4.8, reviews: 98, badge: "Limited", colors: ["Tan","Black"], sizes: ["36","37","38","39","40","41"], image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=700&fit=crop&q=80", desc: "Full-grain leather Chelsea boots with elastic gussets and stacked heel. Hand-finished." },
  { id: 6, name: "Minimal Sneakers", category: "Footwear", price: 4990, mrp: 6990, rating: 4.7, reviews: 210, badge: null, colors: ["White","Black","Grey"], sizes: ["36","37","38","39","40","41","42"], image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=700&fit=crop&q=80", desc: "Clean leather sneakers with cushioned sole. Minimal branding, maximal comfort." },
  { id: 7, name: "Suede Loafers", category: "Footwear", price: 6290, mrp: 7990, rating: 4.6, reviews: 76, badge: null, colors: ["Brown","Navy","Tan"], sizes: ["37","38","39","40","41"], image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=700&fit=crop&q=80", desc: "Soft suede loafers with moc stitching and leather sole. Effortless sophistication." },
  { id: 8, name: "Quilted Crossbody Bag", category: "Accessories", price: 3890, mrp: 5290, rating: 4.8, reviews: 143, badge: "Trending", colors: ["Black","Blush","Olive"], sizes: ["One Size"], image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=700&fit=crop&q=80", desc: "Quilted vegan leather crossbody with chain strap and zip compartments." },
  { id: 9, name: "Structured Tote Bag", category: "Accessories", price: 4590, mrp: 5990, rating: 4.7, reviews: 112, badge: null, colors: ["Cognac","Black","Cream"], sizes: ["One Size"], image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=700&fit=crop&q=80", desc: "Structured tote with inner laptop sleeve and top handles. Work to weekend." },
  { id: 10, name: "Silk Scarf 90×90", category: "Accessories", price: 1890, mrp: 2490, rating: 4.9, reviews: 67, badge: null, colors: ["Printed","Navy","Rust"], sizes: ["One Size"], image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=700&fit=crop&q=80", desc: "Mulberry silk twill scarf with hand-rolled edges. Artful print." },
  { id: 11, name: "Gold Hoop Earrings", category: "Accessories", price: 1290, mrp: 1890, rating: 4.8, reviews: 234, badge: "Bestseller", colors: ["Gold"], sizes: ["One Size"], image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=700&fit=crop&q=80", desc: "Lightweight 18k gold-plated hoops. Tarnish-resistant, everyday luxury." },
  { id: 12, name: "Aviator Sunglasses", category: "Accessories", price: 2190, mrp: 2990, rating: 4.6, reviews: 98, badge: null, colors: ["Black","Gold","Silver"], sizes: ["One Size"], image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=700&fit=crop&q=80", desc: "UV400 aviators with acetate frame and polarized lenses." },
  { id: 13, name: "Lip & Cheek Tint", category: "Beauty", price: 890, mrp: 1190, rating: 4.7, reviews: 412, badge: "Bestseller", colors: ["Rose","Berry","Peach"], sizes: ["12ml"], image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=700&fit=crop&q=80", desc: "Cream tint for lips and cheeks. Buildable, dewy finish, 8-hour wear." },
  { id: 14, name: "Hydra Serum 30ml", category: "Beauty", price: 1490, mrp: 1990, rating: 4.8, reviews: 189, badge: null, colors: ["Clear"], sizes: ["30ml"], image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=700&fit=crop&q=80", desc: "Hyaluronic acid + niacinamide serum. Plumps, brightens, non-sticky." },
  { id: 15, name: "Scented Candle — Fig & Cedar", category: "Home", price: 1290, mrp: 1890, rating: 4.9, reviews: 76, badge: null, colors: ["Ivory"], sizes: ["180g"], image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=700&fit=crop&q=80", desc: "Soy wax candle with fig, cedar and amber notes. 45-hour burn time." },
  { id: 16, name: "Ceramic Mug Set (2)", category: "Home", price: 990, mrp: 1490, rating: 4.7, reviews: 54, badge: null, colors: ["Sand","White","Sage"], sizes: ["Set of 2"], image: "https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Matte stoneware mugs, hand-glazed. Microwave & dishwasher safe." },
  { id: 17, name: "Woven Throw Blanket", category: "Home", price: 2790, mrp: 3790, rating: 4.8, reviews: 43, badge: "New In", colors: ["Natural","Charcoal","Rust"], sizes: ["130×170cm"], image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=700&fit=crop&q=80", desc: "Cotton woven throw with fringed edges. Cozy texture for sofa or bed." },
  { id: 18, name: "Vintage Denim Jacket", category: "Apparel", price: 5290, mrp: 6990, rating: 4.6, reviews: 88, badge: null, colors: ["Indigo","Washed"], sizes: ["XS","S","M","L","XL"], image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&h=700&fit=crop&q=80", desc: "Oversized denim jacket with vintage wash and chest pockets." },
  { id: 19, name: "Pleated Midi Skirt", category: "Apparel", price: 2990, mrp: 3990, rating: 4.7, reviews: 67, badge: null, colors: ["Black","Cream","Sage"], sizes: ["XS","S","M","L"], image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=700&fit=crop&q=80", desc: "Fluid pleated midi with elastic waist. Floaty movement, fully lined." },
  { id: 20, name: "Chunky Knit Sweater", category: "Apparel", price: 3790, mrp: 4990, rating: 4.8, reviews: 132, badge: "Winter Edit", colors: ["Oatmeal","Grey","Navy"], sizes: ["S","M","L","XL"], image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=700&fit=crop&q=80", desc: "Chunky fisherman knit in soft wool blend. Relaxed fit, ribbed cuffs." },
  { id: 21, name: "Straw Market Tote", category: "Accessories", price: 1590, mrp: 2190, rating: 4.6, reviews: 41, badge: null, colors: ["Natural"], sizes: ["One Size"], image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&h=700&fit=crop&q=80", desc: "Handwoven straw tote with leather handles. Beach to market." },
  { id: 22, name: "Trail Runner", category: "Footwear", price: 5590, mrp: 7490, rating: 4.7, reviews: 59, badge: null, colors: ["White/Orange","Black"], sizes: ["36","37","38","39","40","41","42"], image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=700&fit=crop&q=80", desc: "Trail runner with breathable mesh and rugged outsole." },
  { id: 23, name: "Satin Scrunchie Pack", category: "Accessories", price: 590, mrp: 890, rating: 4.8, reviews: 312, badge: null, colors: ["Mixed"], sizes: ["Pack of 3"], image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=700&fit=crop&q=80", desc: "Satin scrunchies gentle on hair. 3 muted tones." },
  { id: 24, name: "Linen Bed Set", category: "Home", price: 5990, mrp: 7990, rating: 4.9, reviews: 38, badge: "Premium", colors: ["White","Sand","Slate"], sizes: ["King","Queen"], image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=700&fit=crop&q=80", desc: "Washed French linen duvet + 2 pillowcases. Breathable, gets softer with every wash." },
];

function getProducts() {
  try {
    const stored = localStorage.getItem('pernal_products');
    if (stored) {
      // invalidate cache if it contains old broken images (404s)
      if (stored.includes('photo-1515372039744') || stored.includes('photo-1614253429381') || stored.includes('photo-1514228742587')) {
        localStorage.removeItem('pernal_products');
      } else {
        return JSON.parse(stored);
      }
    }
  } catch(e){}
  return DEFAULT_PRODUCTS;
}
function saveProducts(list){ localStorage.setItem('pernal_products', JSON.stringify(list)); }
function resetProducts(){ localStorage.removeItem('pernal_products'); return DEFAULT_PRODUCTS; }

function getCart(){
  try { return JSON.parse(localStorage.getItem('pernal_cart')||'[]'); } catch(e){ return []; }
}
function saveCart(c){ localStorage.setItem('pernal_cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(product, opts={qty:1, color:null, size:null}){
  const cart = getCart();
  const key = `${product.id}-${opts.color||''}-${opts.size||''}`;
  const existing = cart.find(i=>i.key===key);
  if(existing) existing.qty += opts.qty;
  else cart.push({ key, id: product.id, name: product.name, price: product.price, image: product.image, category: product.category, qty: opts.qty, color: opts.color, size: opts.size });
  saveCart(cart);
  return cart;
}
function removeFromCart(key){ saveCart(getCart().filter(i=>i.key!==key)); }
function updateQty(key, delta){
  const cart = getCart();
  const it = cart.find(i=>i.key===key);
  if(!it) return;
  it.qty = Math.max(1, it.qty+delta);
  saveCart(cart);
}
function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return getCart().reduce((s,i)=>s+i.price*i.qty,0); }

function getWishlist(){
  try { return JSON.parse(localStorage.getItem('pernal_wishlist')||'[]'); } catch(e){ return []; }
}
function saveWishlist(w){ localStorage.setItem('pernal_wishlist', JSON.stringify(w)); updateWishlistCount(); }
function toggleWishlist(id){
  let w = getWishlist();
  if(w.includes(id)) w = w.filter(x=>x!==id);
  else w.push(id);
  saveWishlist(w);
  return w.includes(id);
}
function isWishlisted(id){ return getWishlist().includes(id); }

function updateCartCount(){
  const n = cartCount();
  document.querySelectorAll('[data-cart-count]').forEach(el=>{ el.textContent = n; el.classList.toggle('hidden', n===0); });
}
function updateWishlistCount(){
  const n = getWishlist().length;
  document.querySelectorAll('[data-wishlist-count]').forEach(el=>{ el.textContent = n; el.classList.toggle('hidden', n===0); });
}

function formatINR(n){ return '₹' + n.toLocaleString('en-IN'); }
function discountPercent(mrp, price){ return Math.round((1-price/mrp)*100); }

function showToast(msg, type='success'){
  let t = document.getElementById('toast');
  if(!t){
    t = document.createElement('div');
    t.id='toast';
    t.className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] bg-ink text-white text-sm font-medium px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-300 pointer-events-none';
    document.body.appendChild(t);
  }
  t.innerHTML = type==='success'
    ? `<span class="w-6 h-6 rounded-full bg-white text-ink flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg></span> ${msg}`
    : msg;
  t.classList.remove('opacity-0','translate-y-4');
  t.classList.add('opacity-100','translate-y-0');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>{ t.classList.add('opacity-0','translate-y-4'); t.classList.remove('opacity-100','translate-y-0'); }, 2500);
}

/* Orders mock */
function getOrders(){
  try{ const o=localStorage.getItem('pernal_orders'); if(o) return JSON.parse(o); }catch(e){}
  return [
    { id:'#10421', customer:'Ananya Sharma', email:'ananya@gmail.com', total:8990, items:1, status:'Paid', date:'2026-05-10' },
    { id:'#10420', customer:'Rahul Verma', email:'rahulv@gmail.com', total:12470, items:3, status:'Shipped', date:'2026-05-09' },
    { id:'#10419', customer:'Priya Kapoor', email:'priya.k@gmail.com', total:4590, items:1, status:'Processing', date:'2026-05-09' },
    { id:'#10418', customer:'Kabir Singh', email:'kabir@gmail.com', total:7490, items:1, status:'Delivered', date:'2026-05-08' },
    { id:'#10417', customer:'Sneha Patel', email:'sneha.p@gmail.com', total:6780, items:2, status:'Paid', date:'2026-05-07' },
    { id:'#10416', customer:'Aman Gupta', email:'aman.g@gmail.com', total:3290, items:2, status:'Cancelled', date:'2026-05-07' },
  ];
}
function saveOrders(list){ localStorage.setItem('pernal_orders', JSON.stringify(list)); }

/* Customers mock */
function getCustomers(){
  try{ const c=localStorage.getItem('pernal_customers'); if(c) return JSON.parse(c); }catch(e){}
  return [
    { name:'Ananya Sharma', email:'ananya@gmail.com', orders:4, spent:24120, joined:'2025-11-12' },
    { name:'Rahul Verma', email:'rahulv@gmail.com', orders:7, spent:38900, joined:'2025-09-03' },
    { name:'Priya Kapoor', email:'priya.k@gmail.com', orders:2, spent:8980, joined:'2026-02-18' },
    { name:'Kabir Singh', email:'kabir@gmail.com', orders:5, spent:27450, joined:'2025-12-20' },
    { name:'Sneha Patel', email:'sneha.p@gmail.com', orders:3, spent:13200, joined:'2026-03-05' },
  ];
}

/* Image fallback for any broken CDN url */
document.addEventListener('error', (e)=>{
  if(e.target.tagName==='IMG'){
    const fallback='https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600&h=700&fit=crop&q=80';
    if(e.target.src!==fallback) e.target.src=fallback;
  }
}, true);

/* Init counts on load */
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount(); updateWishlistCount();
  document.getElementById('mobileMenuBtn')?.addEventListener('click', ()=> document.getElementById('mobileMenu')?.classList.toggle('hidden'));
  // close search on escape
  document.addEventListener('keydown', e=>{
    if(e.key==='Escape'){
      document.getElementById('searchOverlay')?.classList.add('hidden');
      document.getElementById('cartDrawer')?.classList.add('hidden');
    }
  });
});

/* Search overlay helpers */
function openSearch(q=''){
  const el=document.getElementById('searchOverlay');
  if(!el) { window.location.href='search.html'+(q?'?q='+encodeURIComponent(q):''); return; }
  el.classList.remove('hidden');
  setTimeout(()=>document.getElementById('searchInput')?.focus(),50);
  if(q) document.getElementById('searchInput').value=q;
  renderSearchResults(q);
}
function closeSearch(){ document.getElementById('searchOverlay')?.classList.add('hidden'); }

function renderSearchResults(query){
  const wrap=document.getElementById('searchResults');
  if(!wrap) return;
  const products=getProducts();
  const q=(query||'').toLowerCase().trim();
  let filtered = !q ? products.slice(0,6) : products.filter(p=> p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  if(!filtered.length){
    wrap.innerHTML = `<div class="text-center py-12 text-muted">No results for "<span class="text-ink font-semibold">${query}</span>"<br><span class="text-sm">Try Apparel, Footwear, Bag, Beauty...</span></div>`;
    return;
  }
  wrap.innerHTML = filtered.slice(0,8).map(p=>`
    <a href="product.html?id=${p.id}" class="flex gap-4 p-3 hover:bg-paper rounded-2xl transition">
      <img src="${p.image}" class="w-20 h-20 rounded-xl object-cover flex-shrink-0">
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-widest text-muted">${p.category}</div>
        <div class="font-medium leading-tight truncate">${p.name}</div>
        <div class="text-sm font-semibold mt-1">${formatINR(p.price)} <span class="text-xs text-muted line-through ml-1">${formatINR(p.mrp)}</span></div>
      </div>
      <span class="self-center w-8 h-8 rounded-full border flex items-center justify-center">→</span>
    </a>
  `).join('');
}

/* Cart Drawer */
function openCartDrawer(){
  const d=document.getElementById('cartDrawer');
  if(!d){ window.location.href='cart.html'; return; }
  d.classList.remove('hidden');
  renderCartDrawer();
}
function closeCartDrawer(){ document.getElementById('cartDrawer')?.classList.add('hidden'); }
function renderCartDrawer(){
  const cart=getCart();
  const wrap=document.getElementById('cartDrawerItems');
  const footer=document.getElementById('cartDrawerFooter');
  if(!wrap) return;
  if(!cart.length){
    wrap.innerHTML = `<div class="text-center py-16">
      <div class="w-20 h-20 rounded-full bg-paper flex items-center justify-center mx-auto mb-4 text-2xl"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6h15l-1.5 9H7z"/><path d="M6 6L5 2H2"/><circle cx="9" cy="20" r="1.8"/><circle cx="18" cy="20" r="1.8"/></svg></div>
      <div class="font-serif text-xl">Your bag is empty</div>
      <p class="text-sm text-muted mt-1">Add some pieces you love.</p>
      <a href="shop.html" onclick="closeCartDrawer()" class="inline-flex mt-6 bg-ink text-white px-6 py-3 rounded-full text-sm font-semibold">Continue Shopping</a>
    </div>`;
    footer?.classList.add('hidden');
    return;
  }
  footer?.classList.remove('hidden');
  wrap.innerHTML = cart.map(i=>`
    <div class="flex gap-4 py-4 border-b border-line">
      <img src="${i.image}" class="w-20 h-20 rounded-xl object-cover">
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-widest text-muted">${i.category}</div>
        <div class="font-medium text-sm leading-tight">${i.name}</div>
        ${i.color||i.size?`<div class="text-xs text-muted mt-1">${i.color||''} ${i.size? '· '+i.size:''}</div>`:''}
        <div class="flex items-center justify-between mt-3">
          <div class="flex items-center border rounded-full overflow-hidden">
            <button onclick="updateQty('${i.key}',-1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-paper"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg></button>
            <span class="w-8 text-center text-sm font-semibold">${i.qty}</span>
            <button onclick="updateQty('${i.key}',1);renderCartDrawer()" class="w-8 h-8 flex items-center justify-center hover:bg-paper"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button>
          </div>
          <div class="font-semibold text-sm">${formatINR(i.price*i.qty)}</div>
        </div>
      </div>
      <button onclick="removeFromCart('${i.key}');renderCartDrawer();showToast('Removed from bag')" class="self-start text-muted hover:text-ink"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    </div>
  `).join('');
  const sub=cartSubtotal();
  document.getElementById('cartDrawerSubtotal').textContent = formatINR(sub);
  document.getElementById('cartDrawerCountLabel').textContent = `(${cartCount()} items)`;
}
