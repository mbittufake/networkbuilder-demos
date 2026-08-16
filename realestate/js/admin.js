// js/admin.js — admin panel partials (dashboard, properties, property form, enquiries, visits, clients) (browser build)
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.EstateAdmin = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  const { esc, formatINR, priceLabel, statusLabel } = (typeof EstateUtil !== 'undefined' ? EstateUtil : require('./util'));
  const { filterProperties } = (typeof EstateCards !== 'undefined' ? EstateCards : require('./cards'));

  const AGENTS = ['Arjun Mehta', 'Priya Sharma', 'Sanjana Reddy', 'Meera Nair'];
  const AMENITY_OPTIONS = ['Pool', 'Gym', 'Parking', 'Garden', 'CCTV', 'Lift', 'Security', 'Power Backup', 'Clubhouse', 'Balcony'];
  const IMAGES = [
    '1600585154340-be6161a56a0c', '1600596542815-ffad4c1539a9', '1613490493576-7fde63acd811',
    '1512917774080-9991f1c4c750', '1516455590571-18256e5bb9ff', '1560184897-ae75f418493e',
    '1605276374104-dee2a0ed3cd6', '1502672260266-1c1ef2d93688', '1613977257363-707ba9348227',
    '1600607687939-ce8a6c25118c', '1600047509807-ba8f99d2cdde', '1500382017468-9049fed747ef',
    '1568605114967-8130f3a36994', '1522708323590-d24dbb6b0267', '1560448204-e02f11c3d0e2',
    '1600566753190-17f0baa2a6c3', '1497366811353-6870744d04b2', '1497366754035-f200968a6e72',
    '1519389950473-47ba0277781c', '1600585154526-990dced4db0d', '1518780664697-55e3ad937233',
    '1487958449943-2429e8be8625', '1580587771525-78b9dba3b914', '1600210492493-0946911123ea',
  ];

  const badge = (label, cls) => `<span class="text-xs font-bold px-2.5 py-1 rounded-full ${cls}">${label}</span>`;

  function statusPill(p) {
    const map = { buy: 'bg-accent/10 text-accent', rent: 'bg-blue-100 text-accent', commercial: 'bg-purple-100 text-purple-700' };
    return badge(statusLabel(p), map[p.listing] || 'bg-accent/10 text-accent');
  }

  function clientStatusPill(s) {
    const map = { Hot: 'bg-orange-100 text-orange-600', Active: 'bg-green-100 text-green-700', Cold: 'bg-gray-100 text-gray-500' };
    return badge(s, map[s] || 'bg-gray-100 text-gray-500');
  }

  function pageHead(title, sub, actions) {
    return `<div class="flex flex-wrap items-center justify-between gap-3 mb-6">
      <div>
        <h2 class="text-2xl lg:text-3xl font-black font-head text-gray-900">${title}</h2>
        <p class="text-sm text-gray-500 mt-1">${sub}</p>
      </div>
      ${actions ? `<div class="flex flex-wrap gap-2">${actions}</div>` : ''}
    </div>`;
  }

  // ================================================================== Analytics
  function adminAnalyticsPartial(props, leads, clients, trend) {
    const labels = trend.map((t) => t.month);
    const leadsData = trend.map((t) => t.leads);
    const visitsData = trend.map((t) => t.visits);
    const maxL = Math.max.apply(null, leadsData.concat([1]));
    const maxV = Math.max.apply(null, visitsData.concat([1]));
    const bars = (data, max, color, label) => `<div class="flex items-end gap-1 h-40 flex-1" title="${label}">
      ${data.map((d) => `<div class="flex-1 rounded-t ${color} hover:opacity-80 transition-opacity" style="height:${Math.max(6, Math.round((d / max) * 100))}%"></div>`).join('')}
    </div>`;
    const sum = (arr) => arr.reduce((s, n) => s + n, 0);
    const cityProps = {};
    props.forEach((p) => { cityProps[p.city] = (cityProps[p.city] || 0) + 1; });
    const cityList = Object.keys(cityProps).sort((a, b) => cityProps[b] - cityProps[a]);
    const maxCity = Math.max.apply(null, cityList.map((c) => cityProps[c]).concat([1]));
    const typeProps = {};
    props.forEach((p) => { typeProps[p.type] = (typeProps[p.type] || 0) + 1; });
    const statusClients = { Hot: 0, Active: 0, Cold: 0 };
    clients.forEach((c) => { statusClients[c.status] = (statusClients[c.status] || 0) + 1; });
    const totalClients = Math.max(1, clients.length);
    return `
      ${pageHead('Analytics', 'Performance overview for the last 12 months.')}
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <div class="bg-white border border-gray-200 rounded-2xl p-5"><div class="text-2xl font-black font-head text-accent">${sum(leadsData)}</div><div class="text-sm text-gray-500">Total Leads (12 mo)</div><div class="text-xs text-green-600 font-semibold mt-1">▲ 24% YoY</div></div>
        <div class="bg-white border border-gray-200 rounded-2xl p-5"><div class="text-2xl font-black font-head text-emerald-600">${sum(visitsData)}</div><div class="text-sm text-gray-500">Site Visits (12 mo)</div><div class="text-xs text-green-600 font-semibold mt-1">▲ 31% YoY</div></div>
        <div class="bg-white border border-gray-200 rounded-2xl p-5"><div class="text-2xl font-black font-head text-gray-900">${props.length}</div><div class="text-sm text-gray-500">Active Listings</div><div class="text-xs text-gray-400 mt-1">Across ${cityList.length} cities</div></div>
        <div class="bg-white border border-gray-200 rounded-2xl p-5"><div class="text-2xl font-black font-head text-gray-900">${clients.length}</div><div class="text-sm text-gray-500">Clients</div><div class="text-xs text-gray-400 mt-1">${statusClients.Hot || 0} hot · ${statusClients.Active || 0} active</div></div>
      </div>
      <div class="grid lg:grid-cols-2 gap-5">
        <div class="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-2">Leads & Site Visits</h3>
          <p class="text-xs text-gray-400 mb-4">Monthly enquiries and bookings</p>
          <div class="flex gap-6">
            <div class="flex-1"><div class="text-xs font-bold text-gray-500 mb-2">Leads</div>${bars(leadsData, maxL, 'bg-gradient-to-t from-accent to-indigo-500', 'Leads')}</div>
            <div class="flex-1"><div class="text-xs font-bold text-gray-500 mb-2">Visits</div>${bars(visitsData, maxV, 'bg-gradient-to-t from-emerald-400 to-teal-500', 'Visits')}</div>
          </div>
          <div class="flex justify-between mt-3 pt-3 border-t border-gray-100">
            ${labels.map((l) => `<span class="text-[10px] text-gray-400">${esc(l.split(' ')[0])}</span>`).join('')}
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-2">Listings by City</h3>
          <p class="text-xs text-gray-400 mb-4">Distribution of active properties</p>
          <div class="space-y-4">
            ${cityList.map((c) => `<div>
              <div class="flex justify-between text-sm mb-1"><span class="font-semibold text-gray-700">${esc(c)}</span><span class="text-gray-400">${cityProps[c]}</span></div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-accent to-indigo-500 rounded-full" style="width:${Math.round((cityProps[c] / maxCity) * 100)}%"></div></div>
            </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-2 gap-5 mt-5">
        <div class="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-4">Listings by Type</h3>
          <div class="flex flex-wrap gap-2">
            ${Object.keys(typeProps).map((t) => `<div class="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl"><div class="font-black font-head text-gray-900">${typeProps[t]}</div><div class="text-xs text-gray-400 capitalize">${esc(t)}</div></div>`).join('')}
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-4">Client Pipeline</h3>
          <div class="space-y-3">
            ${['Hot', 'Active', 'Cold'].map((s) => `<div class="flex items-center gap-3">
              <span class="w-20 text-sm font-semibold text-gray-600">${s === 'Hot' ? '🔥 Hot' : s}</span>
              <div class="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden"><div class="h-full ${s === 'Hot' ? 'bg-orange-400' : s === 'Active' ? 'bg-emerald-400' : 'bg-gray-300'} rounded-full" style="width:${Math.round((statusClients[s] / totalClients) * 100)}%"></div></div>
              <span class="w-8 text-right text-sm font-bold text-gray-700">${statusClients[s]}</span>
            </div>`).join('')}
          </div>
        </div>
      </div>`;
  }

  // ================================================================== Agents
  function adminAgentsPartial(agents) {
    return `
      ${pageHead('Employees', `${agents.filter((a) => a.active).length} active team members.`, `
        <button hx-get="/partials/admin/agent-form" hx-target="#admin-root" hx-swap="innerHTML" class="bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-200">＋ Add Employee</button>
      `)}
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        ${agents.map((a) => `<div class="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
          <div class="flex items-center gap-4 mb-4">
            <img src="${esc(a.img)}" class="w-14 h-14 rounded-full object-cover border-2 border-accent-light" alt="">
            <div class="flex-1">
              <div class="font-bold text-gray-900">${esc(a.name)}</div>
              <div class="text-xs text-gray-500">${esc(a.role)} · ${esc(a.city)}</div>
              <div class="text-xs font-bold text-amber-500 mt-0.5">★ ${a.rating.toFixed(1)}</div>
            </div>
            ${a.active ? badge('Active', 'bg-green-100 text-green-700') : badge('Inactive', 'bg-gray-100 text-gray-500')}
          </div>
          <div class="grid grid-cols-3 gap-2 text-center bg-gray-50 rounded-xl py-3 mb-4">
            <div><div class="font-black font-head text-gray-900">${a.listings}</div><div class="text-[10px] text-gray-400 uppercase tracking-wide">Listings</div></div>
            <div><div class="font-black font-head text-gray-900">${a.deals}</div><div class="text-[10px] text-gray-400 uppercase tracking-wide">Deals</div></div>
            <div><div class="font-black font-head text-gray-900">${a.rating}</div><div class="text-[10px] text-gray-400 uppercase tracking-wide">Rating</div></div>
          </div>
          <div class="text-xs text-gray-500 mb-4">📞 ${esc(a.phone)}<br>✉️ ${esc(a.email)}</div>
          <div class="flex gap-2">
            <button hx-get="/partials/admin/agent-form?id=${a.id}" hx-target="#admin-root" hx-swap="innerHTML" class="flex-1 text-xs font-semibold border border-gray-200 px-3 py-2 rounded-lg hover:border-accent hover:text-accent transition-all">Edit</button>
            <button hx-delete="/api/agents/${a.id}" hx-target="#admin-root" hx-swap="innerHTML" hx-confirm="Remove employee ${esc(a.name)}?" class="flex-1 text-xs font-semibold border border-red-200 text-red-600 px-3 py-2 rounded-lg hover:bg-red-50 transition-all">Remove</button>
          </div>
        </div>`).join('')}
      </div>`;
  }

  // ================================================================== Agent form
  function adminAgentFormPartial(agents, id) {
    const a = id ? agents.find((x) => String(x.id) === String(id)) : null;
    const method = a ? `hx-put="/api/agents/${a.id}"` : 'hx-post="/api/agents"';
    const title = a ? `Edit — ${a.name}` : 'Add New Employee';
    const v = (key, fallback) => (a && a[key] != null ? a[key] : fallback);
    const is = (key, val) => (a && String(a[key]) === String(val) ? 'selected' : '');
    const inputCls = 'w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow bg-white';
    return `
      ${pageHead(title, 'Add a new employee to the team.', `
        <button hx-get="/partials/admin/agents" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm font-semibold border border-gray-200 px-5 py-2.5 rounded-full hover:border-accent hover:text-accent transition-all">← Back to Employees</button>
      `)}
      <form ${method} hx-target="#admin-root" hx-swap="innerHTML" hx-on::after-request="if(event.detail.successful){htmx.ajax('GET','/partials/admin/agents',{target:'#admin-root',swap:'innerHTML'});}" class="bg-white border border-gray-200 rounded-2xl p-6 space-y-5 max-w-3xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Full Name *</label><input name="name" required value="${esc(v('name', ''))}" class="${inputCls}" placeholder="e.g. Arjun Mehta"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Role</label>
            <select name="role" class="${inputCls}">
              ${['Residential Sales', 'Luxury Homes', 'Commercial Advisory', 'Rentals', 'Investment Advisory'].map((r) => `<option value="${r}" ${is('role', r)}>${r}</option>`).join('')}
            </select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">City *</label>
            <select name="city" class="${inputCls}">
              ${['Mumbai', 'Pune', 'Bangalore', 'Gurgaon', 'Delhi NCR'].map((c) => `<option value="${c}" ${is('city', c)}>${c}</option>`).join('')}
            </select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Phone</label><input name="phone" value="${esc(v('phone', ''))}" class="${inputCls}"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Email</label><input name="email" type="email" value="${esc(v('email', ''))}" class="${inputCls}"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Profile Image URL</label><input name="img" value="${esc(v('img', ''))}" class="${inputCls}" placeholder="images/p/....jpg"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Listings</label><input name="listings" type="number" value="${v('listings', 0)}" class="${inputCls}"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Deals Closed</label><input name="deals" type="number" value="${v('deals', 0)}" class="${inputCls}"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Rating</label><input name="rating" type="number" step="0.1" min="0" max="5" value="${v('rating', 4.5)}" class="${inputCls}"></div>
          <label class="flex items-center gap-2 text-sm font-semibold text-gray-700 cursor-pointer self-end"><input type="checkbox" name="active" value="1" ${a && !a.active ? '' : 'checked'} class="w-4 h-4 accent-blue-600"> Active</label>
        </div>
        <div class="flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
          <button hx-get="/partials/admin/agents" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm font-semibold border border-gray-200 px-6 py-2.5 rounded-xl hover:border-gray-300 transition-all">Cancel</button>
          <button type="submit" class="bg-accent text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200">${a ? 'Save Changes' : 'Add Employee'}</button>
        </div>
      </form>`;
  }

  // ================================================================== Settings
  function adminSettingsPartial(settings) {
    const S = settings || {};
    const inputCls = 'w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow bg-white';
    const checked = (v) => (v ? 'checked' : '');
    return `
      ${pageHead('Settings', 'Manage your portal configuration and notifications.')}
      <div class="grid lg:grid-cols-2 gap-5">
        <form hx-post="/api/settings" hx-target="#admin-root" hx-swap="innerHTML" hx-on::after-request="if(event.detail.successful){}" class="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
          <h3 class="font-bold text-gray-900">Company Profile</h3>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Company Name</label><input name="companyName" value="${esc(S.companyName || 'Estate')}" class="${inputCls}"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Support Email</label><input name="supportEmail" type="email" value="${esc(S.supportEmail || '')}" class="${inputCls}"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Support Phone</label><input name="phone" value="${esc(S.phone || '')}" class="${inputCls}"></div>
          <div class="flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
            <button type="submit" class="bg-accent text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200">Save Settings</button>
          </div>
        </form>
        <div class="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
          <h3 class="font-bold text-gray-900">Notifications</h3>
          <div class="space-y-3">
            ${[['notifyEmail', 'Email alerts for new leads & enquiries', '💌'], ['notifySms', 'SMS alerts for site-visit bookings', '📱'], ['maintenance', 'Maintenance mode (hide public site)', '🛠️']].map(([key, label, icon]) => `<label class="flex items-center justify-between p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
              <div class="flex items-center gap-3"><span class="text-lg">${icon}</span><span class="text-sm font-semibold text-gray-700">${label}</span></div>
              <input type="checkbox" ${checked(S[key])} onclick="var p=new URLSearchParams();p.set('${key}',this.checked?'1':'0');htmx.ajax('POST','/api/settings',{target:'#admin-root',swap:'innerHTML',values:p});" class="w-5 h-5 accent-blue-600">
            </label>`).join('')}
          </div>
        </div>
      </div>`;
  }

  // ================================================================== Login
  function adminDashboardPartial(props, leads, clients) {
    const forSale = props.filter((p) => p.listing === 'buy').length;
    const forRent = props.filter((p) => p.listing === 'rent').length;
    const totalValue = props.filter((p) => p.listing !== 'rent').reduce((s, p) => s + p.price, 0);
    const enquiries = leads.filter((l) => l.type !== 'visit').length;
    const visits = leads.filter((l) => l.type === 'visit').length;
    const stats = [
      { label: 'Total Listings', value: String(props.length), icon: '🏘️', sub: `${forSale} sale · ${forRent} rent · ${props.filter((p) => p.listing === 'commercial').length} commercial`, tint: 'from-blue-500 to-indigo-500' },
      { label: 'Portfolio Value', value: '₹' + (totalValue / 10000000).toLocaleString('en-IN', { maximumFractionDigits: 1 }) + ' Cr', icon: '💰', sub: 'Active sale & commercial', tint: 'from-emerald-500 to-teal-500' },
      { label: 'Enquiries', value: String(enquiries), icon: '📩', sub: `${visits} site visits booked`, tint: 'from-amber-500 to-orange-500' },
      { label: 'Clients', value: String(clients.length), icon: '🤝', sub: `${clients.filter((c) => c.status === 'Hot').length} hot leads`, tint: 'from-rose-500 to-pink-500' },
    ];
    const recentProps = props.slice().sort((a, b) => b.id - a.id).slice(0, 4);
    const recentLeads = leads.slice().reverse().slice(0, 4);
    const hotClients = clients.filter((c) => c.status === 'Hot').slice(0, 4);

    const propRow = (p) => `<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td class="py-3 pl-5 pr-3"><div class="flex items-center gap-3"><img src="${esc(p.images[0])}" class="w-11 h-8 rounded-lg object-cover" alt=""><div><div class="text-sm font-semibold text-gray-900">${esc(p.name)}</div><div class="text-xs text-gray-400">${esc(p.location)}, ${esc(p.city)}</div></div></div></td>
      <td class="py-3 pl-5 pr-3">${statusPill(p)}</td>
      <td class="py-3 text-sm font-bold text-gray-900 whitespace-nowrap">${priceLabel(p)}</td>
    </tr>`;
    const leadRow = (l) => `<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td class="py-3 pl-5 pr-3"><div class="text-sm font-semibold text-gray-900">${esc(l.name)}</div><div class="text-xs text-gray-400">${esc(l.phone)}</div></div></td>
      <td class="py-3 pl-5 pr-3">${l.type === 'visit' ? badge('Site Visit', 'bg-blue-100 text-accent') : badge('Enquiry', 'bg-green-100 text-green-700')}</td>
      <td class="py-3 text-xs text-gray-500 max-w-[180px] truncate">${esc(l.property || l.interest || 'General')}</td>
      <td class="py-3 text-xs text-gray-400">${new Date(l.createdAt).toLocaleDateString('en-IN')}</td>
    </tr>`;

    return `
      ${pageHead('Dashboard', 'Welcome back! Here\'s what\'s happening on Estate today.', `
        <a href="listings.html" target="_blank" class="text-sm font-semibold border border-gray-200 px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-all">View Site →</a>
        <button hx-get="/partials/admin/dashboard" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm font-semibold bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-all">↻ Refresh</button>
      `)}
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
        ${stats.map((s) => `<div class="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:shadow-gray-200/50 transition-shadow">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br ${s.tint} flex items-center justify-center text-lg text-white mb-3 shadow-md">${s.icon}</div>
          <div class="text-2xl font-black font-head text-gray-900">${s.value}</div>
          <div class="text-sm text-gray-500 mt-0.5">${s.label}</div>
          <div class="text-xs text-gray-400 mt-1">${s.sub}</div>
        </div>`).join('')}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <button hx-get="/partials/admin/property-form" hx-target="#admin-root" hx-swap="innerHTML" class="group bg-accent text-white rounded-2xl p-5 text-left hover:bg-blue-700 transition-colors">
          <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-2">＋</div>
          <div class="font-bold">Add New Property</div>
          <div class="text-xs text-blue-100 mt-1">List a home, villa, plot or office →</div>
        </button>
        <button hx-get="/partials/admin/client-form" hx-target="#admin-root" hx-swap="innerHTML" class="group bg-white border border-gray-200 rounded-2xl p-5 text-left hover:border-accent hover:shadow-lg hover:shadow-gray-200/50 transition-all">
          <div class="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-xl mb-2">🤝</div>
          <div class="font-bold text-gray-900">Register Client</div>
          <div class="text-xs text-gray-400 mt-1">Add a new buyer or tenant profile →</div>
        </button>
        <button hx-get="/partials/admin/enquiries" hx-target="#admin-root" hx-swap="innerHTML" class="group bg-white border border-gray-200 rounded-2xl p-5 text-left hover:border-accent hover:shadow-lg hover:shadow-gray-200/50 transition-all">
          <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-xl mb-2">📩</div>
          <div class="font-bold text-gray-900">Review Enquiries</div>
          <div class="text-xs text-gray-400 mt-1">Follow up on website queries →</div>
        </button>
      </div>
      <div class="grid lg:grid-cols-2 gap-5 mt-6">
        <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h3 class="font-bold text-gray-900">Recent Properties</h3>
            <button hx-get="/partials/admin/properties" hx-target="#admin-root" hx-swap="innerHTML" class="text-xs text-accent font-semibold hover:underline">Manage All →</button>
          </div>
          <div class="px-5"><table class="w-full text-left">${recentProps.map(propRow).join('')}</table></div>
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h3 class="font-bold text-gray-900">Recent Leads</h3>
            <div class="flex gap-3">
              <button hx-get="/partials/admin/enquiries" hx-target="#admin-root" hx-swap="innerHTML" class="text-xs text-accent font-semibold hover:underline">Enquiries</button>
              <button hx-get="/partials/admin/visits" hx-target="#admin-root" hx-swap="innerHTML" class="text-xs text-accent font-semibold hover:underline">Visits</button>
            </div>
          </div>
          <div class="px-5">${recentLeads.length
            ? `<table class="w-full text-left">${recentLeads.map(leadRow).join('')}</table>`
            : `<div class="text-center text-sm text-gray-400 py-10">No leads yet. Submit the contact form or book a site visit on the site — it appears here instantly.</div>`}</div>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden mt-5">
        <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h3 class="font-bold text-gray-900">🔥 Hot Clients</h3>
          <button hx-get="/partials/admin/clients" hx-target="#admin-root" hx-swap="innerHTML" class="text-xs text-accent font-semibold hover:underline">View All Clients →</button>
        </div>
        ${hotClients.length ? `<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
          ${hotClients.map((c) => `<div class="border border-orange-200 bg-orange-50/40 rounded-2xl p-4">
            <div class="flex items-center justify-between mb-2"><div class="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">${esc(c.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase())}</div><span class="text-lg">🔥</span></div>
            <div class="font-bold text-sm text-gray-900">${esc(c.name)}</div>
            <div class="text-xs text-gray-500 mt-0.5">${esc(c.city)} · ${esc(c.interested)}</div>
            <div class="text-xs font-bold text-accent mt-2">${esc(c.budget)}</div>
          </div>`).join('')}
        </div>` : `<div class="text-center text-sm text-gray-400 py-10 px-5">No hot clients yet. Mark a client as Hot to see them here.</div>`}
      </div>`;
  }

  // ================================================================== Properties list
  function adminPropertiesPartial(all, query) {
    const list = filterProperties(all, query);
    const rows = list.map((p) => `<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td class="py-3 pl-5 pr-3"><div class="flex items-center gap-3"><img src="${esc(p.images[0])}" class="w-12 h-9 rounded-lg object-cover" alt=""><div><div class="text-sm font-semibold text-gray-900">${esc(p.name)}</div><div class="text-xs text-gray-400">${esc(p.location)}, ${esc(p.city)}</div></div></div></td>
      <td class="py-3 pl-5 pr-3">${statusPill(p)}</td>
      <td class="py-3 pr-3 hidden sm:table-cell"><span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">${esc(p.type)}</span></td>
      <td class="py-3 pr-3 hidden md:table-cell text-sm font-bold text-gray-900 whitespace-nowrap">${priceLabel(p)}</td>
      <td class="py-3 pr-3 hidden lg:table-cell text-xs">${p.featured ? '<span class="font-semibold text-yellow-500">★ Featured</span>' : '<span class="text-gray-300">—</span>'}</td>
      <td class="py-3 pl-3 pr-5 text-right whitespace-nowrap">
        <div class="flex gap-2 justify-end">
          <button hx-get="/partials/admin/property-form?id=${p.id}" hx-target="#admin-root" hx-swap="innerHTML" class="text-xs font-semibold border border-gray-200 px-3 py-1.5 rounded-lg hover:border-accent hover:text-accent transition-all">Edit</button>
          <button hx-delete="/api/properties/${p.id}" hx-include="closest form" hx-target="#admin-root" hx-swap="innerHTML" hx-confirm="Delete ${esc(p.name)}? This cannot be undone." class="text-xs font-semibold border border-red-200 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-all">Delete</button>
        </div>
      </td>
    </tr>`).join('');
    const sel = (name, val) => (query[name] === val || (!query[name] && val === 'any') ? 'selected' : '');
    return `
      ${pageHead('Properties', `${list.length} listing${list.length === 1 ? '' : 's'} found across all cities.`, `
        <button hx-get="/partials/admin/property-form" hx-target="#admin-root" hx-swap="innerHTML" class="bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-200">＋ Add Property</button>
      `)}
      <form id="admin-table-form" hx-get="/partials/admin/properties" hx-target="#admin-root" hx-swap="innerHTML" hx-trigger="submit">
        <div class="flex flex-wrap gap-3 mb-4">
          <input name="q" value="${esc(query.q || '')}" placeholder="Search properties..." hx-get="/partials/admin/properties" hx-include="closest form" hx-trigger="input changed delay:350ms, search" hx-target="#admin-root" hx-swap="innerHTML" class="flex-1 min-w-[220px] text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow">
          <select name="type" hx-get="/partials/admin/properties" hx-include="closest form" hx-trigger="change" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-accent">
            <option value="any" ${sel('type', 'any')}>All Types</option>
            ${['apartment', 'villa', 'penthouse', 'plot', 'commercial'].map((t) => `<option value="${t}" ${sel('type', t)}>${t[0].toUpperCase() + t.slice(1)}</option>`).join('')}
          </select>
          <select name="listing" hx-get="/partials/admin/properties" hx-include="closest form" hx-trigger="change" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-accent">
            <option value="any" ${sel('listing', 'any')}>Buy / Rent / Commercial</option>
            <option value="buy" ${sel('listing', 'buy')}>For Sale</option>
            <option value="rent" ${sel('listing', 'rent')}>For Rent</option>
            <option value="commercial" ${sel('listing', 'commercial')}>Commercial</option>
          </select>
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left min-w-[680px]">
              <thead><tr class="border-b border-gray-200 bg-gray-50">
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Property</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Status</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400 hidden sm:table-cell">Type</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400 hidden md:table-cell">Price</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400 hidden lg:table-cell">Featured</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Actions</th>
              </tr></thead>
              <tbody>${list.length ? rows : `<tr><td colspan="6" class="py-16 text-center text-gray-400">No properties found.</td></tr>`}</tbody>
            </table>
          </div>
        </div>
      </form>`;
  }

  // ================================================================== Property form (full page)
  function adminPropertyFormPartial(all, id) {
    const p = id ? all.find((x) => String(x.id) === String(id)) : null;
    const method = p ? `hx-put="/api/properties/${p.id}"` : 'hx-post="/api/properties"';
    const title = p ? `Edit — ${p.name}` : 'Add New Property';
    const v = (key, fallback) => (p && p[key] != null ? p[key] : fallback);
    const is = (key, val) => (p && String(p[key]) === String(val) ? 'selected' : '');
    const checked = (a) => (p && (p.amenities || []).includes(a) ? 'checked' : '');
    const agentOptions = AGENTS.map((a) => `<option value="${a}" ${p && p.agent.name === a ? 'selected' : ''}>${a}</option>`).join('');
    const imgOptions = IMAGES.map((img) => `<option value="images/p/${img}.jpg">Photo ${img.slice(0, 8)}…</option>`).join('');
    const inputCls = 'w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow bg-white';
    return `
      ${pageHead(title, p ? 'Update the details below and hit Save Changes.' : 'Fill in the details and publish to the site instantly.', `
        <button hx-get="/partials/admin/properties" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm font-semibold border border-gray-200 px-5 py-2.5 rounded-full hover:border-accent hover:text-accent transition-all">← Back to Properties</button>
      `)}
      <form ${method} hx-target="#admin-root" hx-swap="innerHTML" hx-on::after-request="if(event.detail.successful){htmx.ajax('GET','/partials/admin/properties',{target:'#admin-root',swap:'innerHTML'});}" class="bg-white border border-gray-200 rounded-2xl p-6 space-y-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="sm:col-span-2"><label class="text-xs font-bold text-gray-500 block mb-1">Property Name *</label><input name="name" required value="${esc(v('name', ''))}" class="${inputCls}" placeholder="e.g. Villa Serenova"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Type *</label>
            <select name="type" class="${inputCls}">
              <option value="apartment" ${is('type', 'apartment')}>Apartment</option>
              <option value="villa" ${is('type', 'villa')}>Villa</option>
              <option value="penthouse" ${is('type', 'penthouse')}>Penthouse</option>
              <option value="plot" ${is('type', 'plot')}>Plot</option>
              <option value="commercial" ${is('type', 'commercial')}>Commercial</option>
            </select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Listing Type *</label>
            <select name="listing" class="${inputCls}">
              <option value="buy" ${is('listing', 'buy')}>For Sale</option>
              <option value="rent" ${is('listing', 'rent')}>For Rent</option>
              <option value="commercial" ${is('listing', 'commercial')}>Commercial</option>
            </select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Price (₹) *</label><input name="price" type="number" required value="${v('price', '')}" class="${inputCls}" placeholder="e.g. 38000000"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">City *</label>
            <select name="city" class="${inputCls}">
              ${['Mumbai', 'Pune', 'Bangalore', 'Gurgaon', 'Delhi NCR'].map((c) => `<option value="${c}" ${is('city', c)}>${c}</option>`).join('')}
            </select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Location / Locality *</label><input name="location" required value="${esc(v('location', ''))}" class="${inputCls}" placeholder="e.g. Juhu"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Area (sq.ft) *</label><input name="area" type="number" required value="${v('area', '')}" class="${inputCls}"></div>
          <div class="grid grid-cols-3 gap-3 sm:col-span-2">
            <div><label class="text-xs font-bold text-gray-500 block mb-1">BHK</label><input name="bhk" type="number" value="${v('bhk', 0)}" class="${inputCls}"></div>
            <div><label class="text-xs font-bold text-gray-500 block mb-1">Baths</label><input name="baths" type="number" value="${v('baths', 0)}" class="${inputCls}"></div>
            <div><label class="text-xs font-bold text-gray-500 block mb-1">Parking</label><input name="parking" type="number" value="${v('parking', 0)}" class="${inputCls}"></div>
          </div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Possession</label>
            <select name="possession" class="${inputCls}">
              ${['Ready to Move', 'Within 6 Months', 'Within 1 Year', 'Under Construction'].map((o) => `<option ${is('possession', o)}>${o}</option>`).join('')}
            </select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Badge (optional)</label>
            <select name="badge" class="${inputCls}">
              <option value="" ${!p || !p.badge ? 'selected' : ''}>None</option>
              ${['NEW', 'READY', 'PREMIUM', 'LUXURY', 'HOT', 'FURNISHED'].map((b) => `<option value="${b}" ${is('badge', b)}>${b}</option>`).join('')}
            </select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Employee</label>
            <select name="agent" class="${inputCls}">${agentOptions}</select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Main Image</label>
            <div class="flex gap-2">
              <input name="image" list="preset-images" value="${esc(v('image', ''))}" class="${inputCls}" placeholder="Paste image URL or pick a preset">
              <datalist id="preset-images">${imgOptions}</datalist>
              <button type="button" onclick="var ds=document.getElementById('preset-images');var v=ds.options[Math.floor(Math.random()*ds.options.length)].value;var i=document.querySelector('input[name=image]');i.value=v;" class="flex-shrink-0 text-sm border border-gray-200 rounded-xl px-3 hover:border-accent hover:text-accent transition-all">🎲</button>
            </div></div>
          <div class="sm:col-span-2"><label class="text-xs font-bold text-gray-500 block mb-2">Amenities</label>
            <div class="flex flex-wrap gap-2">${AMENITY_OPTIONS.map((a) => `<label class="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 cursor-pointer has-[:checked]:bg-accent has-[:checked]:text-white has-[:checked]:border-accent transition-all"><input type="checkbox" name="amenities" value="${a}" class="hidden" ${checked(a)}>${a}</label>`).join('')}</div></div>
          <div class="sm:col-span-2"><label class="text-xs font-bold text-gray-500 block mb-1">Description</label>
            <textarea name="desc" rows="3" class="${inputCls}" placeholder="Short description shown on the listing...">${esc(v('desc', ''))}</textarea></div>
          <label class="sm:col-span-2 flex items-center gap-2 text-sm font-semibold text-gray-700 cursor-pointer"><input type="checkbox" name="featured" value="1" ${p && p.featured ? 'checked' : ''} class="w-4 h-4 accent-blue-600"> ★ Feature this property on the homepage</label>
        </div>
        <div class="sm:col-span-2 flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
          <button hx-get="/partials/admin/properties" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm font-semibold border border-gray-200 px-6 py-2.5 rounded-xl hover:border-gray-300 transition-all">Cancel</button>
          <button type="submit" class="bg-accent text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200">${p ? 'Save Changes' : 'Add Property'}</button>
        </div>
      </form>`;
  }

  // ================================================================== Enquiries
  function adminEnquiriesPartial(leads) {
    const list = leads.filter((l) => l.type !== 'visit').slice().reverse();
    const rows = list.map((l) => `<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td class="py-3 pl-5 pr-3"><div class="text-sm font-semibold text-gray-900">${esc(l.name)}</div><div class="text-xs text-gray-400">${esc(l.phone)}${l.email ? ' · ' + esc(l.email) : ''}</div></div></td>
      <td class="py-3 pl-5 pr-3">${badge('Enquiry', 'bg-green-100 text-green-700')}</td>
      <td class="py-3 pr-3 text-xs text-gray-500">${esc(l.interest || l.property || 'General')}</td>
      <td class="py-3 pr-3 text-sm text-gray-700 max-w-[260px]">${esc(l.message || '')}</td>
      <td class="py-3 text-xs text-gray-400">${new Date(l.createdAt).toLocaleString('en-IN')}</td>
    </tr>`).join('');
    return `
      ${pageHead('Enquiries', `${list.length} query${list.length === 1 ? '' : 'ies'} from the website contact form.`)}
      <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left min-w-[680px]">
            <thead><tr class="border-b border-gray-200 bg-gray-50">
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Client</th>
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Type</th>
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Interest</th>
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Message</th>
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Date</th>
            </tr></thead>
            <tbody>${list.length ? rows : `<tr><td colspan="5" class="py-16 text-center text-gray-400">No enquiries yet. Submit the contact form on the site and it will appear here instantly.</td></tr>`}</tbody>
          </table>
        </div>
      </div>`;
  }

  // ================================================================== Site visits
  function adminVisitsPartial(leads) {
    const list = leads.filter((l) => l.type === 'visit').slice().reverse();
    const rows = list.map((l) => `<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td class="py-3 pl-5 pr-3"><div class="text-sm font-semibold text-gray-900">${esc(l.name)}</div><div class="text-xs text-gray-400">${esc(l.phone)}${l.email ? ' · ' + esc(l.email) : ''}</div></div></td>
      <td class="py-3 pl-5 pr-3">${badge('Site Visit', 'bg-blue-100 text-accent')}</td>
      <td class="py-3 pr-3 text-sm text-gray-700 font-semibold">${esc(l.property || '—')}</td>
      <td class="py-3 pr-3 text-xs text-gray-500 max-w-[220px] truncate">${esc(l.message || '—')}</td>
      <td class="py-3 text-xs text-gray-400">${new Date(l.createdAt).toLocaleString('en-IN')}</td>
    </tr>`).join('');
    return `
      ${pageHead('Site Visit Leads', `${list.length} site visit request${list.length === 1 ? '' : 's'} booked on property pages.`)}
      <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left min-w-[680px]">
            <thead><tr class="border-b border-gray-200 bg-gray-50">
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Lead</th>
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Type</th>
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Property</th>
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Message</th>
              <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Date</th>
            </tr></thead>
            <tbody>${list.length ? rows : `<tr><td colspan="5" class="py-16 text-center text-gray-400">No site visits yet. Book one from any property page and it appears here instantly.</td></tr>`}</tbody>
          </table>
        </div>
      </div>`;
  }

  // ================================================================== Clients
  function adminClientsPartial(clients, query) {
    const q = (query.q || '').toLowerCase().trim();
    let list = clients.slice();
    if (q) list = list.filter((c) => (c.name + ' ' + c.city + ' ' + c.interested + ' ' + c.status).toLowerCase().includes(q));
    if (query.status && query.status !== 'any') list = list.filter((c) => c.status === query.status);
    const rows = list.map((c) => `<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td class="py-3 pl-5 pr-3"><div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-indigo-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">${esc(c.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase())}</div>
        <div><div class="text-sm font-semibold text-gray-900">${esc(c.name)}</div><div class="text-xs text-gray-400">${esc(c.phone)}${c.email ? ' · ' + esc(c.email) : ''}</div></div>
      </div></td>
      <td class="py-3 pr-3 hidden sm:table-cell text-sm text-gray-700">${esc(c.city)}</td>
      <td class="py-3 pr-3 hidden md:table-cell text-xs text-gray-500">${esc(c.interested)}</td>
      <td class="py-3 pr-3 text-sm font-bold text-gray-900 whitespace-nowrap">${esc(c.budget)}</td>
      <td class="py-3 pl-5 pr-3">${clientStatusPill(c.status)}</td>
      <td class="py-3 pr-3 hidden lg:table-cell text-xs text-gray-400">${esc(c.source)}</td>
      <td class="py-3 pl-3 pr-5 text-right whitespace-nowrap">
        <div class="flex gap-2 justify-end">
          <button hx-get="/partials/admin/client-form?id=${c.id}" hx-target="#admin-root" hx-swap="innerHTML" class="text-xs font-semibold border border-gray-200 px-3 py-1.5 rounded-lg hover:border-accent hover:text-accent transition-all">Edit</button>
          <button hx-delete="/api/clients/${c.id}" hx-target="#admin-root" hx-swap="innerHTML" hx-confirm="Delete ${esc(c.name)} from clients?" class="text-xs font-semibold border border-red-200 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-all">Delete</button>
        </div>
      </td>
    </tr>`).join('');
    const sel = (name, val) => (query[name] === val || (!query[name] && val === 'any') ? 'selected' : '');
    return `
      ${pageHead('Clients', `${list.length} client${list.length === 1 ? '' : 's'} in your CRM.`, `
        <button hx-get="/partials/admin/client-form" hx-target="#admin-root" hx-swap="innerHTML" class="bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-200">＋ Add Client</button>
      `)}
      <form id="admin-client-form" hx-get="/partials/admin/clients" hx-target="#admin-root" hx-swap="innerHTML" hx-trigger="submit">
        <div class="flex flex-wrap gap-3 mb-4">
          <input name="q" value="${esc(query.q || '')}" placeholder="Search clients by name, city or interest..." hx-get="/partials/admin/clients" hx-include="closest form" hx-trigger="input changed delay:350ms, search" hx-target="#admin-root" hx-swap="innerHTML" class="flex-1 min-w-[220px] text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow">
          <select name="status" hx-get="/partials/admin/clients" hx-include="closest form" hx-trigger="change" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-accent">
            <option value="any" ${sel('status', 'any')}>All Status</option>
            <option value="Hot" ${sel('status', 'Hot')}>🔥 Hot</option>
            <option value="Active" ${sel('status', 'Active')}>Active</option>
            <option value="Cold" ${sel('status', 'Cold')}>Cold</option>
          </select>
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left min-w-[760px]">
              <thead><tr class="border-b border-gray-200 bg-gray-50">
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Client</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400 hidden sm:table-cell">City</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400 hidden md:table-cell">Interested In</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Budget</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400">Status</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400 hidden lg:table-cell">Source</th>
                <th class="py-3 px-5 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Actions</th>
              </tr></thead>
              <tbody>${list.length ? rows : `<tr><td colspan="7" class="py-16 text-center text-gray-400">No clients found.</td></tr>`}</tbody>
            </table>
          </div>
        </div>
      </form>`;
  }

  // ================================================================== Client form (full page)
  function adminClientFormPartial(clients, id) {
    const c = id ? clients.find((x) => String(x.id) === String(id)) : null;
    const method = c ? `hx-put="/api/clients/${c.id}"` : 'hx-post="/api/clients"';
    const title = c ? `Edit — ${c.name}` : 'Register New Client';
    const v = (key, fallback) => (c && c[key] != null ? c[key] : fallback);
    const is = (key, val) => (c && String(c[key]) === String(val) ? 'selected' : '');
    const inputCls = 'w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow bg-white';
    return `
      ${pageHead(title, c ? 'Update this client profile below.' : 'Add a buyer or tenant so your team can track them.', `
        <button hx-get="/partials/admin/clients" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm font-semibold border border-gray-200 px-5 py-2.5 rounded-full hover:border-accent hover:text-accent transition-all">← Back to Clients</button>
      `)}
      <form ${method} hx-target="#admin-root" hx-swap="innerHTML" hx-on::after-request="if(event.detail.successful){htmx.ajax('GET','/partials/admin/clients',{target:'#admin-root',swap:'innerHTML'});}" class="bg-white border border-gray-200 rounded-2xl p-6 space-y-5 max-w-3xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Full Name *</label><input name="name" required value="${esc(v('name', ''))}" class="${inputCls}" placeholder="e.g. Ananya Iyer"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Phone *</label><input name="phone" required value="${esc(v('phone', ''))}" class="${inputCls}" placeholder="+91 98XXX XXXXX"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Email</label><input name="email" type="email" value="${esc(v('email', ''))}" class="${inputCls}" placeholder="client@email.com"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">City *</label>
            <select name="city" class="${inputCls}">
              ${['Mumbai', 'Pune', 'Bangalore', 'Gurgaon', 'Delhi NCR'].map((city) => `<option value="${city}" ${is('city', city)}>${city}</option>`).join('')}
            </select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Budget *</label><input name="budget" required value="${esc(v('budget', ''))}" class="${inputCls}" placeholder="e.g. ₹2.5 Cr or ₹65K /mo"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Requirement *</label>
            <select name="type" class="${inputCls}">
              <option value="buy" ${is('type', 'buy')}>Buying a Property</option>
              <option value="rent" ${is('type', 'rent')}>Renting a Property</option>
              <option value="commercial" ${is('type', 'commercial')}>Commercial Space</option>
            </select></div>
          <div class="sm:col-span-2"><label class="text-xs font-bold text-gray-500 block mb-1">Interested In *</label><input name="interested" required value="${esc(v('interested', ''))}" class="${inputCls}" placeholder="e.g. 3 BHK Apartment / Independent Villa / Plot"></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Status</label>
            <select name="status" class="${inputCls}">
              ${['Hot', 'Active', 'Cold'].map((s) => `<option value="${s}" ${is('status', s)}>${s === 'Hot' ? '🔥 Hot' : s}</option>`).join('')}
            </select></div>
          <div><label class="text-xs font-bold text-gray-500 block mb-1">Source</label>
            <select name="source" class="${inputCls}">
              ${['Website', 'Referral', 'Walk-in', 'Call', 'Social Media'].map((s) => `<option value="${s}" ${is('source', s)}>${s}</option>`).join('')}
            </select></div>
          <div class="sm:col-span-2"><label class="text-xs font-bold text-gray-500 block mb-1">Notes</label>
            <textarea name="notes" rows="3" class="${inputCls}" placeholder="Preferences, follow-up reminders, anything useful...">${esc(v('notes', ''))}</textarea></div>
        </div>
        <div class="flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
          <button hx-get="/partials/admin/clients" hx-target="#admin-root" hx-swap="innerHTML" class="text-sm font-semibold border border-gray-200 px-6 py-2.5 rounded-xl hover:border-gray-300 transition-all">Cancel</button>
          <button type="submit" class="bg-accent text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200">${c ? 'Save Changes' : 'Add Client'}</button>
        </div>
      </form>`;
  }

  // ================================================================== Login
  function adminLoginPartial() {
    return `<div class="flex items-center justify-center min-h-[70vh]">
      <div class="w-full max-w-md">
        <div class="text-center mb-6">
          <div class="w-14 h-14 bg-accent rounded-2xl mx-auto flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-200 mb-4">🏛️</div>
          <div class="text-3xl font-black font-head text-gray-900">Estate<span class="text-accent">.</span> Admin</div>
          <p class="text-sm text-gray-500 mt-1">Sign in to manage listings, leads and clients</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
          <form id="admin-login" hx-post="/api/login" hx-target="#admin-root" hx-swap="innerHTML" hx-on::after-request="if(!document.getElementById('admin-login')){localStorage.setItem('estateAdmin','estate-admin');}" class="flex flex-col gap-4">
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1">Admin Password</label>
              <input type="password" name="password" required autofocus placeholder="Enter password" class="w-full text-sm border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-shadow bg-gray-50">
            </div>
            <button type="submit" class="w-full bg-accent text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200">Sign In →</button>
            <p class="text-xs text-gray-400 text-center">Demo password: <code class="bg-gray-100 px-2 py-0.5 rounded">admin123</code></p>
          </form>
        </div>
        <div class="text-center mt-4"><a href="index.html" class="text-xs text-accent font-semibold hover:underline">← Back to website</a></div>
      </div>
    </div>`;
  }

  return { adminDashboardPartial, adminPropertiesPartial, adminPropertyFormPartial, adminEnquiriesPartial, adminVisitsPartial, adminClientsPartial, adminClientFormPartial, adminAnalyticsPartial, adminAgentsPartial, adminAgentFormPartial, adminSettingsPartial, adminLoginPartial, AGENTS };
});