// js/estate.js — a client-side "server" for the Estate demo.
// Intercepts htmx AJAX requests and serves the same HTML partials a real server would,
// generated from embedded data. No backend required — works on any static host
// (GitHub Pages, file://, local static server).
(function () {
  const LS_PROPS = 'estate_props';
  const LS_LEADS = 'estate_leads';
  const LS_CLIENTS = 'estate_clients';
  const LS_AGENTS = 'estate_agents';
  const LS_SETTINGS = 'estate_settings';
  const LS_AUTH = 'estateAdmin';
  const AUTH_KEY = 'estate-admin';
  const PASS = 'admin123';
  const seed = (typeof window !== 'undefined' && window.ESTATE_DATA) || { properties: [], leads: [] };

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) {} },
    del(key) { try { localStorage.removeItem(key); } catch (e) {} },
  };

  // Bump DATA_VERSION whenever the seed data changes so cached localStorage resets to the new demo data.
  const DATA_VERSION = 'v5';
  if (store.get('estate_ver') !== DATA_VERSION) {
    store.del(LS_PROPS);
    store.del(LS_LEADS);
    store.del(LS_CLIENTS);
    store.del(LS_AGENTS);
    store.del(LS_SETTINGS);
    store.set('estate_ver', DATA_VERSION);
  }

  function loadSaved(key, fallback) {
    const raw = store.get(key);
    if (!raw) return fallback;
    try { const v = JSON.parse(raw); return Array.isArray(v) ? v : fallback; } catch (e) { return fallback; }
  }

  function getProps() { return loadSaved(LS_PROPS, seed.properties || []); }
  function getLeads() { return loadSaved(LS_LEADS, seed.leads || []); }
  function getClients() { return loadSaved(LS_CLIENTS, seed.clients || []); }
  function getAgents() { return loadSaved(LS_AGENTS, seed.agents || []); }
  function getSettings() {
    const raw = store.get(LS_SETTINGS);
    if (!raw) return seed.settings || {};
    try { return JSON.parse(raw); } catch (e) { return seed.settings || {}; }
  }
  function saveProps(list) { store.set(LS_PROPS, JSON.stringify(list)); }
  function saveLeads(list) { store.set(LS_LEADS, JSON.stringify(list)); }
  function saveClients(list) { store.set(LS_CLIENTS, JSON.stringify(list)); }
  function saveAgents(list) { store.set(LS_AGENTS, JSON.stringify(list)); }
  function saveSettings(s) { store.set(LS_SETTINGS, JSON.stringify(s)); }
  const isAuthed = () => store.get(LS_AUTH) === AUTH_KEY;

  function parseBody(body) {
    const out = {};
    if (!body) return out;
    const add = (k, v) => {
      if (k in out) out[k] = Array.isArray(out[k]) ? out[k].concat(v) : [out[k], v];
      else out[k] = v;
    };
    if (typeof body === 'string') new URLSearchParams(body).forEach((v, k) => add(k, v));
    else if (typeof FormData !== 'undefined' && body instanceof FormData) body.forEach((v, k) => add(k, v));
    return out;
  }

  function qparams(params) {
    const o = {};
    params.forEach((v, k) => { o[k] = v; });
    return o;
  }

  function normalizeProperty(body, existing) {
    const base = existing || {};
    const listAmen = (a) => (Array.isArray(a) ? a : a ? [a] : []);
    const agent = base.agent || {
      name: 'Arjun Mehta',
      role: 'Residential',
      img: 'images/p/1507003211169-0a1dd7228f2d.jpg',
    };
    return {
      ...base,
      name: body.name || base.name || 'Untitled Property',
      type: body.type || base.type || 'apartment',
      listing: body.listing || base.listing || 'buy',
      price: parseInt(body.price, 10) || base.price || 0,
      city: body.city || base.city || 'Mumbai',
      location: body.location || base.location || '',
      area: parseInt(body.area, 10) || base.area || 0,
      bhk: parseInt(body.bhk, 10) || base.bhk || 0,
      baths: parseInt(body.baths, 10) || base.baths || 0,
      parking: parseInt(body.parking, 10) || base.parking || 0,
      possession: body.possession || base.possession || 'Ready to Move',
      badge: body.badge || base.badge || '',
      agent,
      amenities: listAmen(body.amenities).length ? listAmen(body.amenities) : base.amenities || [],
      featured: !!body.featured || !!base.featured,
      images: body.image ? [body.image].concat((base.images || []).slice(1)) : base.images || [],
      desc: body.desc || base.desc || 'A beautifully designed property in a prime location.',
      desc2: base.desc2 || '',
      builtYear: base.builtYear || 2024,
      rera: base.rera || 'RERA-PB-2024-' + (Math.floor(Math.random() * 9000) + 1000),
    };
  }

  function normalizeClient(body, existing) {
    const base = existing || {};
    return {
      ...base,
      name: body.name || base.name || 'Unnamed Client',
      phone: body.phone || base.phone || '—',
      email: body.email || base.email || '',
      city: body.city || base.city || 'Mumbai',
      budget: body.budget || base.budget || '—',
      type: body.type || base.type || 'buy',
      interested: body.interested || base.interested || 'Property',
      status: body.status || base.status || 'Active',
      source: body.source || base.source || 'Website',
      notes: body.notes || base.notes || '',
      createdAt: base.createdAt || new Date().toISOString(),
    };
  }

  function normalizeAgent(body, existing) {
    const base = existing || {};
    return {
      ...base,
      name: body.name || base.name || 'Unnamed Agent',
      role: body.role || base.role || 'Residential Sales',
      city: body.city || base.city || 'Mumbai',
      phone: body.phone || base.phone || '—',
      email: body.email || base.email || '',
      img: body.img || base.img || 'images/p/1507003211169-0a1dd7228f2d.jpg',
      listings: parseInt(body.listings, 10) || base.listings || 0,
      deals: parseInt(body.deals, 10) || base.deals || 0,
      rating: parseFloat(body.rating) || base.rating || 4.5,
      active: body.active ? true : base.active !== false,
    };
  }

  function loginError() {
    return `<div class="flex items-center justify-center min-h-[70vh]">
      <div class="w-full max-w-md">
        <div class="text-center mb-6"><div class="text-3xl font-black font-head text-gray-900">Estate<span class="text-accent">.</span> Admin</div><p class="text-sm text-gray-500 mt-1">Sign in to manage listings and leads</p></div>
        <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
          <div class="bg-red-50 border border-red-200 text-red-600 rounded-xl p-3 mb-4 text-sm font-semibold">✗ Incorrect password. Try again.</div>
          <form id="admin-login" hx-post="/api/login" hx-target="#admin-root" hx-swap="innerHTML" hx-on::after-request="if(!document.getElementById('admin-login')){localStorage.setItem('estateAdmin','estate-admin');}" class="flex flex-col gap-4">
            <div><label class="text-xs font-bold text-gray-500 block mb-1">Admin Password</label><input type="password" name="password" required autofocus placeholder="Enter password" class="w-full text-sm border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-gray-50"></div>
            <button type="submit" class="w-full bg-accent text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all">Sign In →</button>
            <p class="text-xs text-gray-400 text-center">Demo password: <code class="bg-gray-100 px-2 py-0.5 rounded">admin123</code></p>
          </form>
        </div>
        <div class="text-center mt-4"><a href="index.html" class="text-xs text-accent font-semibold hover:underline">← Back to website</a></div>
      </div>
    </div>`;
  }

  function handleRequest(method, rawUrl, body) {
    const path = String(rawUrl).split('?')[0];
    const params = new URLSearchParams(String(rawUrl).split('?')[1] || '');
    const q = qparams(params);
    const data = parseBody(body);
    const props = getProps();
    const leads = getLeads();
    const clients = getClients();
    const agents = getAgents();
    const settings = getSettings();
    const html = (b, status) => ({ status: status || 200, contentType: 'text/html', body: b });
    const json = (b, status) => ({ status: status || 200, contentType: 'application/json', body: JSON.stringify(b) });

    // ---------- Public partials ----------
    if (method === 'GET' && path === '/partials/cards') {
      const list = EstateCards.filterProperties(props, q);
      if (params.get('grid') === '1') {
        const gridLimit = parseInt(params.get('limit') || '3', 10) || 3;
        return html(EstateCards.cardsGrid(list.slice(0, gridLimit)));
      }
      return html(EstateCards.resultsPartial(props, q));
    }
    if (method === 'GET' && path === '/partials/property') {
      return html(EstateCards.propertyPartial(props, params.get('id')));
    }

    // ---------- Admin partials ----------
    if (method === 'GET' && path.indexOf('/partials/admin/') === 0) {
      if (!isAuthed()) return html(loginError());
      if (path === '/partials/admin/dashboard') return html(EstateAdmin.adminDashboardPartial(props, leads, clients));
      if (path === '/partials/admin/properties') return html(EstateAdmin.adminPropertiesPartial(props, q));
      if (path === '/partials/admin/property-form') return html(EstateAdmin.adminPropertyFormPartial(props, params.get('id')));
      if (path === '/partials/admin/enquiries') return html(EstateAdmin.adminEnquiriesPartial(leads));
      if (path === '/partials/admin/visits') return html(EstateAdmin.adminVisitsPartial(leads));
      if (path === '/partials/admin/clients') return html(EstateAdmin.adminClientsPartial(clients, q));
      if (path === '/partials/admin/client-form') return html(EstateAdmin.adminClientFormPartial(clients, params.get('id')));
      if (path === '/partials/admin/analytics') return html(EstateAdmin.adminAnalyticsPartial(props, leads, clients, seed.trend || []));
      if (path === '/partials/admin/agents') return html(EstateAdmin.adminAgentsPartial(agents));
      if (path === '/partials/admin/agent-form') return html(EstateAdmin.adminAgentFormPartial(agents, params.get('id')));
      if (path === '/partials/admin/settings') return html(EstateAdmin.adminSettingsPartial(settings));
      return html('<div class="text-center py-20 text-gray-400">Unknown admin partial: ' + EstateUtil.esc(path) + '</div>');
    }

    // ---------- API ----------
    if (path === '/api/login' && method === 'POST') {
      if (data.password === PASS) {
        store.set(LS_AUTH, AUTH_KEY);
        return html(EstateAdmin.adminDashboardPartial(props, leads, clients));
      }
      return html(loginError());
    }

    if (path === '/api/contact' && method === 'POST') {
      const list = leads.concat([{
        id: Date.now(),
        type: 'enquiry',
        name: (data.firstName || '') + ' ' + (data.lastName || ''),
        phone: data.phone || '—',
        email: data.email || '',
        interest: data.interest || 'Buying a Property',
        property: data.property || '',
        message: data.message || '',
        createdAt: new Date().toISOString(),
      }]);
      saveLeads(list);
      return html(`<div class="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-5 text-sm font-semibold">✅ Message sent! We'll get back to you within 2 hours. Your enquiry has been logged.</div>`);
    }

    if (path === '/api/visit' && method === 'POST') {
      const list = leads.concat([{
        id: Date.now(),
        type: 'visit',
        name: data.name || '—',
        phone: data.phone || '—',
        email: data.email || '',
        property: data.property || '',
        propertyId: data.propertyId || '',
        message: data.message || '',
        createdAt: new Date().toISOString(),
      }]);
      saveLeads(list);
      const prop = props.find((x) => String(x.id) === String(data.propertyId));
      const agentName = (prop && prop.agent && prop.agent.name) || 'our agent';
      return html(`<div class="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-sm font-semibold">✅ Visit request received! ${EstateUtil.esc(agentName)} will call you within 15 minutes to confirm a slot.</div>`);
    }

    if (path === '/api/properties' && method === 'GET') {
      return json(EstateCards.filterProperties(props, q));
    }
    if (path === '/api/properties' && method === 'POST') {
      if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
      if (!data.name) return json({ error: 'Name is required' }, 400);
      const nextId = props.reduce((m, p) => Math.max(m, Number(p.id) || 0), 0) + 1;
      const item = normalizeProperty(data, {});
      item.id = nextId;
      saveProps(props.concat([item]));
      return json({ ok: true, id: nextId });
    }

    const propMatch = path.match(/^\/api\/properties\/(\d+)$/);
    if (propMatch) {
      const id = propMatch[1];
      if (method === 'PUT') {
        if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
        const idx = props.findIndex((p) => String(p.id) === String(id));
        if (idx === -1) return json({ error: 'Not found' }, 404);
        const updated = props.slice();
        updated[idx] = normalizeProperty(data, updated[idx]);
        saveProps(updated);
        return json({ ok: true, id });
      }
      if (method === 'DELETE') {
        if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
        const updated = props.filter((p) => String(p.id) !== String(id));
        saveProps(updated);
        return html(EstateAdmin.adminPropertiesPartial(updated, q));
      }
    }

    if (path === '/api/clients' && method === 'GET') {
      return json(clients);
    }
    if (path === '/api/clients' && method === 'POST') {
      if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
      if (!data.name) return json({ error: 'Name is required' }, 400);
      const nextId = clients.reduce((m, c) => Math.max(m, Number(c.id) || 0), 0) + 1;
      const item = normalizeClient(data, {});
      item.id = nextId;
      saveClients(clients.concat([item]));
      return json({ ok: true, id: nextId });
    }

    const clientMatch = path.match(/^\/api\/clients\/(\d+)$/);
    if (clientMatch) {
      const cid = clientMatch[1];
      if (method === 'PUT') {
        if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
        const idx = clients.findIndex((c) => String(c.id) === String(cid));
        if (idx === -1) return json({ error: 'Not found' }, 404);
        const updated = clients.slice();
        updated[idx] = normalizeClient(data, updated[idx]);
        saveClients(updated);
        return json({ ok: true, id: cid });
      }
      if (method === 'DELETE') {
        if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
        const updated = clients.filter((c) => String(c.id) !== String(cid));
        saveClients(updated);
        return html(EstateAdmin.adminClientsPartial(updated, q));
      }
    }

    if (path === '/api/agents' && method === 'GET') {
      return json(agents);
    }
    if (path === '/api/agents' && method === 'POST') {
      if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
      if (!data.name) return json({ error: 'Name is required' }, 400);
      const nextId = agents.reduce((m, x) => Math.max(m, Number(x.id) || 0), 0) + 1;
      const item = normalizeAgent(data, {});
      item.id = nextId;
      saveAgents(agents.concat([item]));
      return json({ ok: true, id: nextId });
    }

    const agentMatch = path.match(/^\/api\/agents\/(\d+)$/);
    if (agentMatch) {
      const aid = agentMatch[1];
      if (method === 'PUT') {
        if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
        const idx = agents.findIndex((x) => String(x.id) === String(aid));
        if (idx === -1) return json({ error: 'Not found' }, 404);
        const updated = agents.slice();
        updated[idx] = normalizeAgent(data, updated[idx]);
        saveAgents(updated);
        return json({ ok: true, id: aid });
      }
      if (method === 'DELETE') {
        if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
        const updated = agents.filter((x) => String(x.id) !== String(aid));
        saveAgents(updated);
        return html(EstateAdmin.adminAgentsPartial(updated));
      }
    }

    if (path === '/api/settings' && method === 'POST') {
      if (!isAuthed()) return json({ error: 'Unauthorized' }, 401);
      const merged = { ...settings, ...data };
      if ('active' in data) merged.active = data.active === '1';
      saveSettings(merged);
      return html(EstateAdmin.adminSettingsPartial(merged));
    }

    return null;
  }

  // ---------- Intercept htmx's XHR requests ----------
  if (typeof XMLHttpRequest !== 'undefined') {
  const origOpen = XMLHttpRequest.prototype.open;
  const origSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    this.__eurl = String(url);
    this.__emethod = String(method).toUpperCase();
    return origOpen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (body) {
    const method = this.__emethod || 'GET';
    const url = this.__eurl || '';
    let resp = null;
    try { resp = handleRequest(method, url, body); } catch (err) { console.error('[Estate] handler error', err); }
    if (resp) {
      const xhr = this;
      setTimeout(function () {
        try {
          Object.defineProperty(xhr, 'responseText', { configurable: true, value: resp.body });
          Object.defineProperty(xhr, 'response', { configurable: true, value: resp.body });
          Object.defineProperty(xhr, 'status', { configurable: true, value: resp.status });
          Object.defineProperty(xhr, 'statusText', { configurable: true, value: resp.status === 200 ? 'OK' : 'Error' });
          Object.defineProperty(xhr, 'readyState', { configurable: true, value: 4 });
        } catch (e) {
          xhr.status = resp.status;
          xhr.responseText = resp.body;
          xhr.readyState = 4;
        }
        if (typeof xhr.onreadystatechange === 'function') xhr.onreadystatechange();
        if (typeof xhr.onload === 'function') xhr.onload();
      }, 90);
      return;
    }
    return origSend.apply(this, arguments);
  };
  }

  // ---------- Public API ----------
  const g = typeof window !== 'undefined' ? window : globalThis;
  g.EstateServer = {
    reset() {
      store.del(LS_PROPS);
      store.del(LS_LEADS);
      store.del(LS_CLIENTS);
      store.del(LS_AGENTS);
      store.del(LS_SETTINGS);
      store.del(LS_AUTH);
    },
    _handle: handleRequest,
  };
})();