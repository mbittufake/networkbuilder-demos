// Test harness for the static "client-side server" — runs the same JS the browser runs.
globalThis.window = globalThis;
const store = {};
globalThis.localStorage = {
  getItem: (k) => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: (k) => { delete store[k]; },
};
globalThis.ESTATE_DATA = null;
// data/properties.js assigns window.ESTATE_DATA via `window.ESTATE_DATA = ...`
require('../data/properties.js');
require('../js/util.js');
require('../js/cards.js');
require('../js/admin.js');
require('../js/estate.js');

const S = globalThis.EstateServer._handle;
const T = (name, got, want) => {
  const ok = got === want;
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + name + (ok ? '' : `  got=${JSON.stringify(got)} want=${JSON.stringify(want)}`));
};

const props = globalThis.ESTATE_DATA.properties;

// 1. cards partial default (8 of 20)
let r = S('GET', '/partials/cards', null);
T('cards default status', r.status, 200);
T('cards default shows 8', (r.body.match(/class="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover"/g) || []).length, 8);
T('cards has Showing 8 of 20', r.body.includes('Showing <strong class="text-gray-900">8</strong> of <strong class="text-gray-900">20</strong>'), true);

// 1b. load more pagination
T('load more shows 12 more', r.body.includes('Load More Properties (12 more)'), true);
r = S('GET', '/partials/cards?limit=16', null);
T('load more limit 16 cards', (r.body.match(/class="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover"/g) || []).length, 16);
T('load more shows 4 more', r.body.includes('Load More Properties (4 more)'), true);
r = S('GET', '/partials/cards?limit=20', null);
T('no load more at limit 20', r.body.includes('Load More Properties'), false);

// 2. filter city+listing
r = S('GET', '/partials/cards?city=Mumbai&listing=buy&limit=20', null);
T('Mumbai buy count', (r.body.match(/class="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover"/g) || []).length, 7);

// 3. search q=villa
r = S('GET', '/partials/cards?q=villa&limit=20', null);
T('search villa finds Serenova', r.body.includes('Villa Serenova'), true);

// 4. grid mode
r = S('GET', '/partials/cards?featured=1&limit=3&grid=1', null);
T('featured grid 3 cards no wrapper', (r.body.match(/class="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover"/g) || []).length, 3);
T('featured grid no grid wrapper', r.body.includes('sm:grid-cols-2 lg:grid-cols-3 gap-6'), false);

// 5. property partial
r = S('GET', '/partials/property?id=1', null);
T('property partial 200', r.status, 200);
T('property has name', r.body.includes('Villa Serenova'), true);
T('property has visit form', r.body.includes('hx-post="/api/visit"'), true);

// 6. local image refs used
T('no unsplash in cards', r.body.includes('images.unsplash.com'), false);
T('local image in cards', r.body.includes('images/p/1600585154340-be6161a56a0c.jpg'), true);

// 7. admin unauth -> login
r = S('GET', '/partials/admin/dashboard', null);
T('admin unauth shows login', r.body.includes('Sign in to manage'), true);

// 8. login bad / good
r = S('POST', '/api/login', 'password=wrong');
T('bad login shows error', r.body.includes('Incorrect password'), true);
r = S('POST', '/api/login', 'password=admin123');
T('good login returns dashboard', r.body.includes('Welcome back'), true);

// 9. admin dashboard authed
r = S('GET', '/partials/admin/dashboard', null);
T('dashboard stats', r.body.includes('Total Listings'), true);
T('dashboard has hot clients', r.body.includes('Hot Clients'), true);

// 9b. new pages exist
r = S('GET', '/partials/admin/properties', null);
T('properties page', r.body.includes('Properties') && r.body.includes('Add Property'), true);
r = S('GET', '/partials/admin/property-form', null);
T('add property form page', r.body.includes('Add New Property'), true);
r = S('GET', '/partials/admin/client-form', null);
T('add client form page', r.body.includes('Register New Client'), true);
r = S('GET', '/partials/admin/clients', null);
T('clients page seeded', r.body.includes('Ananya Iyer') && r.body.includes('Neha Kulkarni'), true);
r = S('GET', '/partials/admin/enquiries', null);
T('enquiries page seeded', r.body.includes('Karthik Menon') && r.body.includes('Priyanka Rao'), true);
r = S('GET', '/partials/admin/visits', null);
T('visits page seeded', r.body.includes('Ravi Patil') && r.body.includes('Azure Heights'), true);
r = S('GET', '/partials/admin/agents', null);
T('agents page seeded', r.body.includes('Arjun Mehta') && r.body.includes('Priya Sharma'), true);
r = S('GET', '/partials/admin/agent-form', null);
T('add employee form', r.body.includes('Add New Employee'), true);
r = S('GET', '/partials/admin/analytics', null);
T('analytics has trend', r.body.includes('Total Leads (12 mo)') && r.body.includes('Listings by City'), true);
r = S('GET', '/partials/admin/settings', null);
T('settings page', r.body.includes('Company Profile') && r.body.includes('Notifications'), true);

// 11. contact lead -> enquiry
r = S('POST', '/api/contact', 'firstName=Rahul&lastName=Desai&phone=987&email=r@x.com');
T('contact success', r.body.includes('Message sent'), true);
r = S('GET', '/partials/admin/enquiries', null);
T('enquiry appears in admin', r.body.includes('Rahul Desai'), true);
T('enquiry not in visits', !S('GET', '/partials/admin/visits', null).body.includes('Rahul Desai'), true);

// 12. visit lead
r = S('POST', '/api/visit', 'propertyId=1&property=Villa Serenova&name=Asha&phone=123');
T('visit success mentions agent', r.body.includes('Arjun Mehta'), true);
r = S('GET', '/partials/admin/visits', null);
T('visit appears in admin', r.body.includes('Site Visit') && r.body.includes('Asha'), true);
T('visit not in enquiries', !S('GET', '/partials/admin/enquiries', null).body.includes('Asha'), true);

// 13. CRUD create property
r = S('POST', '/api/properties', 'name=Test Villa&type=villa&price=10000000&city=Pune&location=Koregaon');
const created = JSON.parse(r.body);
T('create returns ok', created.ok, true);
T('new id is 21', created.id, 21);

// 14. update
r = S('PUT', '/api/properties/21', 'name=Test Villa Renamed&type=villa&price=12000000&city=Pune&location=Koregaon');
T('update ok', JSON.parse(r.body).ok, true);
r = S('GET', '/partials/property?id=21', null);
T('updated name shows', r.body.includes('Test Villa Renamed'), true);

// 15. delete
r = S('DELETE', '/api/properties/21', '');
T('delete returns properties page', r.body.includes('Properties') && r.body.includes('listings found'), true);
r = S('GET', '/partials/property?id=21', null);
T('deleted property gone', r.body.includes('Property Not Found'), true);

// 16. clients CRUD
r = S('POST', '/api/clients', 'name=New Client&phone=999&city=Pune&budget=2Cr&type=buy&interested=Villa');
const c = JSON.parse(r.body);
T('client create ok', c.ok, true);
T('client id 9', c.id, 9);
r = S('GET', '/partials/admin/clients', null);
T('client appears', r.body.includes('New Client'), true);
r = S('PUT', '/api/clients/9', 'name=New Client Renamed&phone=999&city=Pune&budget=2Cr&type=buy&interested=Villa&status=Hot');
T('client update ok', JSON.parse(r.body).ok, true);
r = S('GET', '/partials/admin/clients?status=Hot', null);
T('client hot filter', r.body.includes('New Client Renamed'), true);
r = S('DELETE', '/api/clients/9', '');
T('client delete returns clients page', r.body.includes('Clients'), true);
r = S('GET', '/partials/admin/clients', null);
T('client gone', !r.body.includes('New Client Renamed'), true);

// 17. agents CRUD
r = S('POST', '/api/agents', 'name=New Agent&role=Residential Sales&city=Pune&phone=111');
const ag = JSON.parse(r.body);
T('agent create ok', ag.ok, true);
T('agent id 7', ag.id, 7);
r = S('GET', '/partials/admin/agents', null);
T('agent appears', r.body.includes('New Agent'), true);
r = S('PUT', '/api/agents/7', 'name=New Agent2&role=Residential Sales&city=Pune&phone=111&rating=4.5');
T('agent update ok', JSON.parse(r.body).ok, true);
r = S('DELETE', '/api/agents/7', '');
T('agent delete returns agents', r.body.includes('Add Employee'), true);
r = S('GET', '/partials/admin/agents', null);
T('agent gone', !r.body.includes('New Agent2'), true);

// 19. settings save
r = S('POST', '/api/settings', 'companyName=Test Homes&supportEmail=x@y.in');
T('settings saved', r.body.includes('Test Homes'), true);
r = S('POST', '/api/settings', 'notifyEmail=0');
T('settings merge keeps company', r.body.includes('Test Homes'), true);

// 20. persistence across "reload" (localStorage-backed)
r = S('GET', '/partials/admin/enquiries', null);
T('enquiries persist', r.body.includes('Rahul Desai'), true);

console.log('\nprops in store:', props.length, '->', globalThis.ESTATE_DATA.properties.length);
console.log('seeded: leads', globalThis.ESTATE_DATA.leads.length, '| clients', globalThis.ESTATE_DATA.clients.length, '| agents', globalThis.ESTATE_DATA.agents.length, '| trend', globalThis.ESTATE_DATA.trend.length);
console.log('ALL DONE');