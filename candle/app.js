/* LUME — House of Slow Light · Ember & Ivory system v3 */
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
const FALLBACK_IMG='https://images.pexels.com/photos/5200254/pexels-photo-5200254.jpeg?auto=compress&cs=tinysrgb&w=800';
const INK='#1A0E06', EMBER='#E4572E', LINE='#EDE0CC', PAPER='#FFFBF1';

/* catalogue */
function getCandles(){
  try{
    const s=localStorage.getItem('lume_products');
    if(s){ const parsed=JSON.parse(s);
      if(Array.isArray(parsed)&&parsed.length){
        return parsed.map(p=>{ const f=CANDLE_PRODUCTS.find(c=>c.id===p.id); return f?{...f,...p,notes:p.notes||f.notes,mood:p.mood||f.mood}:p; });
      }
    }
  }catch(e){}
  return CANDLE_PRODUCTS;
}
function saveCandles(l){ try{localStorage.setItem('lume_products',JSON.stringify(l));}catch(e){} }
function resetCandles(){ localStorage.removeItem('lume_products'); return CANDLE_PRODUCTS; }

/* cart */
function getCart(){ try{return JSON.parse(localStorage.getItem('lume_cart')||'[]');}catch(e){return[];} }
function saveCart(c){ try{localStorage.setItem('lume_cart',JSON.stringify(c));}catch(e){} updateCartCount(); }
function addToCart(product,opts={}){
  const qty=opts.qty||1, cart=getCart(), key=opts.key||`${product.id}`;
  const ex=cart.find(i=>i.key===key);
  if(ex) ex.qty+=qty;
  else cart.push({key,id:product.id,name:product.name,price:opts.price||product.price,image:product.image||FALLBACK_IMG,collection:product.collection||'Lume',qty,meta:opts.meta||''});
  saveCart(cart);
}
function quickAdd(id,qty=1){ const p=getCandles().find(x=>x.id===Number(id)); if(!p)return; addToCart(p,{qty}); showToast(`${p.name} added to your ritual`,'View bag →'); openCartDrawer(); }
function removeFromCart(k){ saveCart(getCart().filter(i=>i.key!==k)); }
function updateQty(k,d){ const c=getCart(),it=c.find(i=>i.key===k); if(!it)return; it.qty=Math.max(1,it.qty+d); saveCart(c); }
function setQty(k,q){ const c=getCart(),it=c.find(i=>i.key===k); if(!it)return; it.qty=Math.max(1,Math.min(99,q)); saveCart(c); }
function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return getCart().reduce((s,i)=>s+i.price*i.qty,0); }
function formatINR(n){ return '₹'+Number(n||0).toLocaleString('en-IN'); }
function discountPct(m,p){ if(!m||m<=p)return 0; return Math.round((1-p/m)*100); }

/* wishlist */
function getWishlist(){ try{return JSON.parse(localStorage.getItem('lume_wishlist')||'[]');}catch(e){return[];} }
function saveWishlist(w){ try{localStorage.setItem('lume_wishlist',JSON.stringify(w));}catch(e){} updateWishlistCount(); }
function toggleWishlist(id){
  id=Number(id); let w=getWishlist();
  if(w.includes(id))w=w.filter(x=>x!==id); else w.push(id);
  saveWishlist(w);
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(b=>{ b.textContent=w.includes(id)?'♥':'♡'; b.classList.toggle('is-wished',w.includes(id)); });
  return w.includes(id);
}
function isWishlisted(id){ return getWishlist().includes(Number(id)); }

/* counts + toast */
function updateCartCount(){
  const n=cartCount();
  document.querySelectorAll('[data-cart-count]').forEach(el=>{el.textContent=n;el.classList.toggle('hidden',n===0);});
  document.querySelectorAll('#hdrCart,#hdrCartM').forEach(el=>{if(el)el.textContent=n;});
  ['shipBar','pageBar'].forEach(id=>{
    const bar=document.getElementById(id);
    if(bar){ const sub=cartSubtotal(),pct=Math.min(100,Math.round(sub/1999*100)); bar.style.width=pct+'%'; }
  });
  const msg=document.getElementById('shipMsg');
  if(msg){ const sub=cartSubtotal(); msg.innerHTML=sub>=1999?'✓ Free shipping unlocked — beautifully done':`Add <b>${formatINR(1999-sub)}</b> more for free shipping`; }
  const pm=document.getElementById('pageMsg');
  if(pm){ const sub=cartSubtotal(); pm.innerHTML=sub>=1999?'✓ <b>Free shipping unlocked!</b>':`Add <b>${formatINR(1999-sub)}</b> more for free shipping`; }
}
function updateWishlistCount(){
  const n=getWishlist().length;
  document.querySelectorAll('[data-wishlist-count]').forEach(el=>{el.textContent=n;el.classList.toggle('hidden',n===0);});
  document.querySelectorAll('#hdrWish').forEach(el=>{if(el)el.textContent=n;});
}
function showToast(msg,sub){
  let t=document.getElementById('toast');
  if(!t){ t=document.createElement('div'); t.id='toast';
    t.className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] flex items-center gap-3 pl-2 pr-5 py-2 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none';
    t.style.cssText=`background:${INK};color:${PAPER};border-radius:9999px;box-shadow:0 20px 50px -12px rgba(26,14,6,.5);border:1px solid rgba(255,255,255,.14)`;
    document.body.appendChild(t);
  }
  t.innerHTML=`<span style="width:32px;height:32px;border-radius:99px;background:${EMBER};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800">✦</span><span style="font-size:13px;font-weight:700">${msg}${sub?`<span style="display:block;font-size:11px;opacity:.6;font-weight:500">${sub}</span>`:''}</span>`;
  t.classList.remove('opacity-0','translate-y-4');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.add('opacity-0','translate-y-4'),2600);
}

/* helpers */
function scentColor(f){ return {Woody:'#8A5A2B',Warm:'#C2541B',Fresh:'#5B8A7A',Floral:'#C47A9E',Citrus:'#D9A441',Custom:'#1A0E06'}[f]||'#8A7D72'; }
function scentGradient(f){ return {Woody:'linear-gradient(135deg,#8A5A2B,#3d2b16)',Warm:'linear-gradient(135deg,#E4572E,#7a2c12)',Fresh:'linear-gradient(135deg,#5B8A7A,#24423a)',Floral:'linear-gradient(135deg,#C47A9E,#6d2f4d)',Citrus:'linear-gradient(135deg,#D9A441,#7a5a12)'}[f]||'linear-gradient(135deg,#8A7D72,#3a3632)'; }
function starHTML(r){ const f=Math.round(r); return `<span style="color:#C99A3F;letter-spacing:1px">${'★'.repeat(f)}<span style="opacity:.25">${'★'.repeat(Math.max(0,5-f))}</span></span>`; }
function familyEmoji(f){ return {Woody:'🪵',Warm:'🔥',Fresh:'🌿',Floral:'🌸',Citrus:'🍋',Custom:'✦'}[f]||'✦'; }
function familyDot(f){ const c=scentColor(f); return `<span style="display:inline-block;width:8px;height:8px;border-radius:99px;background:${c};box-shadow:0 0 0 3px ${c}22"></span>`; }
function throwLevel(p){ if(p.id===12||p.id===9)return 5; if(p.collection==='Woody'||p.collection==='Warm')return 4; return 3; }
function throwLabel(n){ return ['','Whisper','Soft','Balanced','Strong','Statement'][n]||'Balanced'; }
function throwDots(n){ return `<span style="display:inline-flex;gap:3px">${[1,2,3,4,5].map(i=>`<span style="width:16px;height:5px;border-radius:99px;background:${i<=n?EMBER:LINE}"></span>`).join('')}</span>`; }
function burnHours(p){ const m=String(p.burn||'45h').match(/(\d+)/); return m?Number(m[1]):45; }
function valuePerHour(p){ return Math.round(p.price/(burnHours(p)||45)); }
function fmtDate(d){ return d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'}); }
function deliveryWindow(){ const a=new Date(Date.now()+3*864e5),b=new Date(Date.now()+5*864e5); return `${fmtDate(a)} – ${fmtDate(b)}`; }
function liveBurningNow(){ return 17+Math.floor((Date.now()/60000)%23); }
function batchCountdown(){ const n=new Date(),t=new Date(n); t.setDate(n.getDate()+2); t.setHours(18,0,0,0); let d=Math.max(0,t-n); const dd=Math.floor(d/864e5);d-=dd*864e5;const h=Math.floor(d/36e5);d-=h*36e5;const m=Math.floor(d/6e4);d-=m*6e4;const s=Math.floor(d/1e3); return {d:dd,h,m,s}; }

/* reviews */
const SEED_REVIEWS={
  1:[{n:'Nisha V.',t:'Fills the room without shouting',b:'Lit it during rains with old playlists. Vessel is now my pen stand.',r:5,d:'2 weeks ago',h:42},{n:'Arjun M.',t:'Gifted twice already',b:'Fig in the start, deep cedar later. No headache, just calm.',r:5,d:'1 month ago',h:18}],
  7:[{n:'Kabir S.',t:'My permanent night scent',b:'Tobacco + honey sounds heavy but burns so smooth.',r:5,d:'3 weeks ago',h:31}],
  4:[{n:'Meera K.',t:'Date night approved',b:'Rose without being sweet, oud without being loud.',r:5,d:'5 days ago',h:12}]
};
function getReviewsList(id){
  const seed=SEED_REVIEWS[id]||[{n:'Ananya R.',t:'Slow luxury',b:'Clean burn till the end, no soot. Packaging felt like a gift.',r:5,d:'2 weeks ago',h:9},{n:'Rahul S.',t:'Worth it',b:'Strong throw for the size. One bedroom, one for mom.',r:4,d:'1 month ago',h:6}];
  try{ return [...JSON.parse(localStorage.getItem('lume_reviews_'+id)||'[]'),...seed]; }catch(e){ return seed; }
}
function saveUserReview(id,rev){ try{ const k='lume_reviews_'+id,cur=JSON.parse(localStorage.getItem(k)||'[]'); cur.unshift(rev); localStorage.setItem(k,JSON.stringify(cur)); }catch(e){} }
function getHelpful(id,idx,base){ try{ const v=localStorage.getItem(`lume_help_${id}_${idx}`); if(v!==null)return Number(v);}catch(e){} return base||0; }
function toggleHelpful(id,idx,base){
  const cur=getHelpful(id,idx,base), k=`lume_help_${id}_${idx}`;
  const voted=localStorage.getItem(k+'_v')==='1';
  try{
    if(voted){ localStorage.setItem(k,String(cur-1)); localStorage.setItem(k+'_v','0'); return cur-1; }
    localStorage.setItem(k,String(cur+1)); localStorage.setItem(k+'_v','1'); return cur+1;
  }catch(e){ return cur; }
}

/* recent / compare / track */
function getRecent(){ try{return JSON.parse(localStorage.getItem('lume_recent')||'[]');}catch(e){return[];} }
function pushRecent(id){ try{ let r=getRecent(); r=[Number(id),...r.filter(x=>x!==Number(id))].slice(0,8); localStorage.setItem('lume_recent',JSON.stringify(r)); }catch(e){} }
function getCompare(){ try{return JSON.parse(localStorage.getItem('lume_compare')||'[]');}catch(e){return[];} }
function toggleCompare(id){
  id=Number(id); let c=getCompare();
  if(c.includes(id))c=c.filter(x=>x!==id); else{ if(c.length>=3){showToast('Compare up to 3');return c;} c.push(id); }
  try{localStorage.setItem('lume_compare',JSON.stringify(c));}catch(e){}
  renderCompareBar(); return c;
}
function renderCompareBar(){
  const bar=document.getElementById('compareBar'); if(!bar)return;
  const c=getCompare();
  if(!c.length){bar.classList.add('hidden');return;}
  bar.classList.remove('hidden');
  bar.querySelector('#compareCount').textContent=c.length;
  bar.querySelector('#compareThumbs').innerHTML=c.map(id=>{ const p=getCandles().find(x=>x.id===id); if(!p)return''; return `<span style="position:relative"><img src="${p.image}" style="width:40px;height:40px;border-radius:99px;object-fit:cover;border:2px solid ${PAPER}"><button onclick="toggleCompare(${id})" style="position:absolute;top:-4px;right:-4px;width:20px;height:20px;border-radius:99px;background:${INK};color:#fff;font-size:10px">×</button></span>`; }).join('');
}
function trackOrder(id){
  id=String(id||'').trim().toUpperCase(); if(!id)return null;
  const norm=id.startsWith('#')?id:'#'+id.replace(/^#/,'');
  const o=getOrders().find(x=>x.id.toUpperCase()===norm||x.id.replace('#','').toUpperCase()===id.replace('#',''));
  if(o)return{type:'order',...o};
  const cu=getCustomOrders().find(x=>x.id.toUpperCase()===id);
  if(cu)return{type:'custom',...cu};
  return null;
}

/* custom + orders */
function getCustomOrders(){
  try{ const s=localStorage.getItem('lume_custom'); if(s)return JSON.parse(s);}catch(e){}
  return [
    { id:'CU-4021', name:'Ananya • Wedding Favor', vessel:'Cream Ceramic', size:'120g', scent:'Rosewood & Oud', qty:40, total:52000, status:'In Production', date:'2026-05-08', note:'Ivory label, gold foil “A & R”' },
    { id:'CU-4020', name:'Rahul • Housewarming', vessel:'Amber Glass', size:'180g', scent:'Fig & Cedar', qty:6, total:7740, status:'Pending', date:'2026-05-09', note:'Handwritten tags' },
    { id:'CU-4019', name:'Corporate — Niraya', vessel:'Matte Black', size:'220g', scent:'Tobacco & Honey', qty:80, total:111200, status:'Shipped', date:'2026-05-06', note:'Bulk gifting' },
  ];
}
function saveCustomOrders(l){ try{localStorage.setItem('lume_custom',JSON.stringify(l));}catch(e){} }
function getOrders(){
  try{ const s=localStorage.getItem('lume_orders'); if(s)return JSON.parse(s);}catch(e){}
  return [
    { id:'#L-1842', customer:'Priya Mehta', email:'priya@gmail.com', total:2480, items:2, status:'Paid', date:'2026-05-10' },
    { id:'#L-1841', customer:'Sahil Khan', email:'sahil.k@gmail.com', total:3390, items:3, status:'Shipped', date:'2026-05-09' },
    { id:'#L-1840', customer:'Mira Sen', email:'mira.sen@gmail.com', total:1590, items:1, status:'Processing', date:'2026-05-09' },
    { id:'#L-1839', customer:'Arjun Patel', email:'arjun.p@gmail.com', total:5280, items:4, status:'Delivered', date:'2026-05-08' },
  ];
}
function saveOrders(l){ try{localStorage.setItem('lume_orders',JSON.stringify(l));}catch(e){} }

/* search + drawers */
function openSearch(){ const el=document.getElementById('searchOverlay'); if(!el){location.href='shop.html';return;} el.classList.remove('hidden'); document.body.style.overflow='hidden'; renderSearchResults(''); setTimeout(()=>document.getElementById('searchInput')?.focus(),60); }
function closeSearch(){ document.getElementById('searchOverlay')?.classList.add('hidden'); document.body.style.overflow=''; }
function renderSearchResults(q){
  const wrap=document.getElementById('searchResults'); if(!wrap)return;
  const list=getCandles(), query=(q||'').toLowerCase().trim();
  const filtered=!query?list.slice(0,4):list.filter(p=>p.name.toLowerCase().includes(query)||p.collection.toLowerCase().includes(query)||p.scent.toLowerCase().includes(query));
  const label=document.getElementById('searchLabel');
  if(label)label.textContent=!query?'Most loved right now':`${filtered.length} result${filtered.length!==1?'s':''} for “${q}”`;
  if(!filtered.length){ wrap.innerHTML=`<div style="text-align:center;padding:40px 0;color:#8A7D72"><div class="serif" style="font-size:24px">Nothing smells like “${q}” yet</div><div style="font-size:13px">Try fig, oud, fresh, honey…</div></div>`; return; }
  wrap.innerHTML=filtered.slice(0,6).map(p=>`
    <a href="product.html?id=${p.id}" style="display:flex;gap:14px;padding:12px;border-radius:18px;align-items:center" onmouseover="this.style.background='rgba(228,87,46,.07)'" onmouseout="this.style.background=''">
      <img src="${p.image}" onerror="this.src='${FALLBACK_IMG}'" style="width:64px;height:78px;object-fit:cover;border-radius:14px" alt="${p.name}">
      <div style="flex:1;min-width:0"><div style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:${scentColor(p.collection)};font-weight:800">${p.collection} · ${p.burn}</div>
      <div class="serif" style="font-size:19px">${p.name}</div>
      <div style="font-size:12px;color:#8A7D72;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.scent}</div>
      <div style="font-size:14px;font-weight:700">${formatINR(p.price)} <span style="font-size:12px;color:#9A9A9A;text-decoration:line-through;font-weight:400">${formatINR(p.mrp)}</span></div></div>
      <span style="width:36px;height:36px;border-radius:99px;border:1px solid ${LINE};display:flex;align-items:center;justify-content:center">→</span>
    </a>`).join('');
}
function openCartDrawer(){ const d=document.getElementById('cartDrawer'); if(!d){location.href='cart.html';return;} d.classList.remove('hidden'); document.body.style.overflow='hidden'; renderCartDrawer(); }
function closeCartDrawer(){ document.getElementById('cartDrawer')?.classList.add('hidden'); if(document.getElementById('searchOverlay')?.classList.contains('hidden'))document.body.style.overflow=''; }
function renderCartDrawer(){
  const cart=getCart(), wrap=document.getElementById('cartDrawerItems'), foot=document.getElementById('cartDrawerFooter');
  if(!wrap)return; updateCartCount();
  if(!cart.length){
    wrap.innerHTML=`<div style="text-align:center;padding:56px 0"><div style="width:84px;height:84px;border-radius:99px;background:#FFF1DC;border:1px dashed ${EMBER};display:flex;align-items:center;justify-content:center;font-size:30px;margin:0 auto">🕯️</div><div class="serif" style="font-size:26px;margin-top:12px">Your ritual is empty</div><p style="font-size:13px;color:#8A7D72">Light something beautiful tonight.</p><a href="shop.html" onclick="closeCartDrawer()" style="display:inline-block;margin-top:20px;background:${INK};color:#fff;padding:12px 28px;border-radius:99px;font-size:13px;font-weight:700">Shop the twelve →</a></div>`;
    foot?.classList.add('hidden'); return;
  }
  foot?.classList.remove('hidden');
  wrap.innerHTML=cart.map(i=>`
    <div style="display:flex;gap:12px;padding:14px 0;border-bottom:1px solid ${LINE}">
      <a href="product.html?id=${i.id}"><img src="${i.image}" onerror="this.src='${FALLBACK_IMG}'" style="width:64px;height:80px;object-fit:cover;border-radius:14px;border:1px solid ${LINE}"></a>
      <div style="flex:1;min-width:0"><div style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;font-weight:800;color:${scentColor(i.collection)}">${i.collection}</div>
      <div class="serif" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i.name}</div>
      ${i.meta?`<div style="font-size:11px;color:#8A7D72;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i.meta}</div>`:''}
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
        <div style="display:flex;align-items:center;border:1px solid ${LINE};border-radius:99px;overflow:hidden"><button onclick="updateQty('${i.key}',-1);renderCartDrawer()" style="width:32px;height:32px">−</button><span style="width:28px;text-align:center;font-size:13px;font-weight:800">${i.qty}</span><button onclick="updateQty('${i.key}',1);renderCartDrawer()" style="width:32px;height:32px">+</button></div>
        <div style="font-weight:800;font-size:14px">${formatINR(i.price*i.qty)}</div>
      </div></div>
      <button onclick="removeFromCart('${i.key}');renderCartDrawer();showToast('Removed')" style="align-self:flex-start;opacity:.5">×</button>
    </div>`).join('');
  const sub=cartSubtotal();
  const el=document.getElementById('cartDrawerSubtotal'); if(el)el.textContent=formatINR(sub);
  const lbl=document.getElementById('cartDrawerCountLabel'); if(lbl)lbl.textContent=`(${cartCount()})`;
}
function openWishDrawer(){ const d=document.getElementById('wishDrawer'); if(!d){location.href='shop.html?wish=1';return;} d.classList.remove('hidden'); document.body.style.overflow='hidden'; renderWishDrawer(); }
function closeWishDrawer(){ document.getElementById('wishDrawer')?.classList.add('hidden'); document.body.style.overflow=''; }
function renderWishDrawer(){
  const wrap=document.getElementById('wishDrawerItems'); if(!wrap)return;
  const list=getCandles().filter(p=>getWishlist().includes(p.id));
  if(!list.length){ wrap.innerHTML=`<div style="text-align:center;padding:56px 0"><div class="serif" style="font-size:26px">Wishlist is empty</div><p style="font-size:13px;color:#8A7D72">Tap ♡ on any candle.</p></div>`; return; }
  wrap.innerHTML=list.map(p=>`<div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid ${LINE}"><img src="${p.image}" onerror="this.src='${FALLBACK_IMG}'" style="width:56px;height:66px;object-fit:cover;border-radius:14px"><div style="flex:1;min-width:0"><div class="serif" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</div><div style="font-size:12px;color:#8A7D72">${p.scent}</div><div style="font-size:14px;font-weight:800">${formatINR(p.price)}</div></div><div><button onclick="quickAdd(${p.id});closeWishDrawer()" style="font-size:11px;background:${INK};color:#fff;padding:7px 12px;border-radius:99px">Add +</button></div></div>`).join('');
}
function openQuickView(id){
  const p=getCandles().find(x=>x.id===Number(id)); if(!p)return; pushRecent(p.id);
  let m=document.getElementById('quickView');
  if(!m){ m=document.createElement('div'); m.id='quickView'; m.className='hidden fixed inset-0 z-[75] flex items-center justify-center p-4'; m.style.background='rgba(26,14,6,.6)'; m.style.backdropFilter='blur(6px)'; document.body.appendChild(m); }
  const t=throwLevel(p);
  m.innerHTML=`<div style="background:${PAPER};border-radius:28px;max-width:640px;width:100%;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;max-height:90vh" class="qv-grid">
    <div style="background:#F4F1EA;padding:12px"><img src="${p.image}" onerror="this.src='${FALLBACK_IMG}'" style="width:100%;height:100%;min-height:320px;object-fit:cover;border-radius:14px"></div>
    <div style="padding:26px;overflow:auto">
      <div style="display:flex;justify-content:space-between"><div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:800;color:${scentColor(p.collection)}">${p.collection} · ${p.burn}</div><button onclick="closeQuickView()" style="width:36px;height:36px;border-radius:99px;border:1px solid ${LINE}">×</button></div>
      <div class="serif" style="font-size:34px;line-height:1;margin-top:6px">${p.name}</div>
      <div style="font-size:13px;color:#8A7D72">${p.scent}</div>
      <div style="font-size:13px;margin-top:8px">${starHTML(p.rating)} <b>${p.rating}</b> <span style="color:#8A7D72">(${p.reviews})</span></div>
      <div style="display:flex;gap:8px;align-items:baseline;margin-top:10px"><span style="font-size:24px;font-weight:800">${formatINR(p.price)}</span><span style="color:#9A9A9A;text-decoration:line-through;font-size:13px">${formatINR(p.mrp)}</span><span style="font-size:11px;font-weight:800;background:rgba(228,87,46,.12);color:#B63A17;padding:3px 9px;border-radius:99px">-${discountPct(p.mrp,p.price)}%</span></div>
      <p style="font-size:13.5px;color:#4A4A4A;margin-top:10px;line-height:1.6">${p.desc}</p>
      <div style="font-size:12px;font-weight:700;margin-top:10px">Throw ${throwDots(t)} <span style="color:#8A7D72;font-weight:500">${throwLabel(t)} · ~₹${valuePerHour(p)}/hr</span></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:16px"><button onclick="quickAdd(${p.id});closeQuickView()" style="background:${EMBER};color:#fff;padding:14px;border-radius:99px;font-weight:800;font-size:13px">Add to bag +</button><a href="product.html?id=${p.id}" style="background:${INK};color:#fff;padding:14px;border-radius:99px;font-weight:700;font-size:13px;text-align:center">Full story →</a></div>
      <div style="font-size:11px;color:#8A7D72;margin-top:10px">Free ship ₹1,999+ · ${deliveryWindow()} · COD</div>
    </div></div>`;
  m.classList.remove('hidden'); document.body.style.overflow='hidden';
  m.onclick=e=>{ if(e.target===m)closeQuickView(); };
}
function closeQuickView(){ document.getElementById('quickView')?.classList.add('hidden'); document.body.style.overflow=''; }

/* motion */
function initEmbers(id){
  const c=document.getElementById(id); if(!c)return;
  const ctx=c.getContext('2d'); let w,h,parts=[];
  function rs(){ w=c.width=c.offsetWidth; h=c.height=c.offsetHeight; }
  rs(); addEventListener('resize',rs);
  for(let i=0;i<26;i++)parts.push({x:Math.random(),y:Math.random(),r:Math.random()*2.2+.6,s:Math.random()*.0009+.0003,o:Math.random()*.5+.2,ph:Math.random()*6});
  (function tick(t){ ctx.clearRect(0,0,w,h);
    parts.forEach(p=>{ p.y-=p.s; if(p.y<0){p.y=1;p.x=Math.random();} const f=Math.sin(t/700+p.ph)*.5+.5; ctx.beginPath(); ctx.arc(p.x*w,p.y*h,p.r,0,7); ctx.fillStyle=`rgba(228,87,46,${(p.o*(.4+f*.6)).toFixed(3)})`; ctx.fill(); });
    requestAnimationFrame(tick); })(0);
}
function initReveal(){ const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}}),{threshold:.12}); document.querySelectorAll('.rv').forEach(el=>io.observe(el)); }
function initCountUp(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(!e.isIntersecting)return; io.unobserve(e.target);
    const el=e.target,end=Number(el.dataset.count||0),suf=el.dataset.suffix||'',t0=performance.now();
    (function step(t){ const k=Math.min(1,(t-t0)/1400),ez=1-Math.pow(1-k,3); el.textContent=(end%1?(end*ez).toFixed(1):Math.round(end*ez).toLocaleString('en-IN'))+suf; if(k<1)requestAnimationFrame(step); })(t0);
  }),{threshold:.4});
  document.querySelectorAll('[data-count]').forEach(el=>io.observe(el));
}
function initMagnetic(){ if(matchMedia('(pointer:coarse)').matches)return; document.querySelectorAll('.magnet').forEach(el=>{ el.addEventListener('pointermove',e=>{ const r=el.getBoundingClientRect(); el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.12}px)`; }); el.addEventListener('pointerleave',()=>el.style.transform=''); }); }
function initTiltGlobal(){ if(matchMedia('(pointer:coarse)').matches)return; document.querySelectorAll('[data-tilt]').forEach(card=>{ const inner=card.querySelector('[data-tilt-inner]')||card; card.addEventListener('pointermove',e=>{ const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5; inner.style.transform=`rotateY(${x*10}deg) rotateX(${-y*8}deg)`; }); card.addEventListener('pointerleave',()=>inner.style.transform=''); }); }
function initAnnounce(){
  const el=document.getElementById('announceText'); if(!el)return;
  const msgs=['Batch №185 curing now — ships in 2 days · <a href="custom.html" style="text-decoration:underline;text-underline-offset:4px">Design yours →</a>','Free shipping over ₹1,999 · COD available','Wedding & Diwali bulk — from 6 pcs · <a href="custom.html" style="text-decoration:underline;text-underline-offset:4px">Get quote →</a>'];
  let i=0; setInterval(()=>{ i=(i+1)%msgs.length; el.style.opacity=0; setTimeout(()=>{el.innerHTML=msgs[i];el.style.opacity=1;},300); },4200);
}
/* highlight active category in the header nav (shop filter + product collection) */
function syncHeaderNav(){
  const params=new URLSearchParams(location.search);
  let col=params.get('col');
  if(!col && /product\.html/.test(location.pathname)){
    const pr=getCandles().find(x=>x.id===Number(params.get('id')||0));
    if(pr) col=pr.collection;
  }
  if(!col) return;
  document.querySelectorAll('header nav a').forEach(a=>{
    const m=(a.getAttribute('href')||'').match(/[?&]col=(\w+)/);
    if(m && m[1]===col){ a.style.color='#E4572E'; a.style.fontWeight='800'; }
  });
  document.querySelectorAll('.colBtn').forEach(b=>{
    const on=b.dataset.col===col;
    b.classList.toggle('on',on);
    b.setAttribute('aria-pressed',on?'true':'false');
  });
}
document.addEventListener('error',e=>{ if(e.target&&e.target.tagName==='IMG'&&!e.target.src.includes('5200254'))e.target.src=FALLBACK_IMG; },true);
document.addEventListener('DOMContentLoaded',()=>{
  updateCartCount(); updateWishlistCount(); initReveal(); initAnnounce(); initCountUp(); initMagnetic(); initTiltGlobal(); renderCompareBar(); syncHeaderNav();
  document.getElementById('mobileMenuBtn')?.addEventListener('click',()=>document.getElementById('mobileMenu')?.classList.toggle('hidden'));
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){closeSearch();closeCartDrawer();closeQuickView?.();closeWishDrawer?.();} });
  document.querySelectorAll('[data-burning]').forEach(el=>{ el.textContent=liveBurningNow(); setInterval(()=>el.textContent=liveBurningNow(),60000); });
  setInterval(()=>{ const c=batchCountdown(); document.querySelectorAll('[data-batch-cd]').forEach(el=>el.textContent=`${c.d}d : ${String(c.h).padStart(2,'0')}h : ${String(c.m).padStart(2,'0')}m`); },1000);
});
