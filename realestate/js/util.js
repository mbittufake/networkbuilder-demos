// js/util.js — formatting helpers (works in browser, also require-able in Node for tests)
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.EstateUtil = api;
  if (typeof document !== 'undefined' && window.visualViewport) {
    (function () {
      var nav = document.getElementById('navbar');
      if (!nav) return;
      var pin = function () {
        nav.style.top = window.visualViewport.offsetTop + 'px';
      };
      window.visualViewport.addEventListener('resize', pin);
      window.visualViewport.addEventListener('scroll', pin);
      pin();
    })();
  }
})(typeof window !== 'undefined' ? window : globalThis, function () {
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatINR(n) {
    return Number(n || 0).toLocaleString('en-IN');
  }

  function priceLabel(p) {
    if (p.listing === 'rent') return '₹' + formatINR(p.price) + '/mo';
    if (p.price >= 10000000) {
      return '₹' + (p.price / 10000000).toLocaleString('en-IN', { maximumFractionDigits: 1 }) + ' Cr';
    }
    return '₹' + (p.price / 100000).toLocaleString('en-IN', { maximumFractionDigits: 1 }) + ' L';
  }

  function statusLabel(p) {
    if (p.listing === 'rent') return 'FOR RENT';
    if (p.listing === 'commercial') return 'COMMERCIAL';
    return 'FOR SALE';
  }

  function bedLabel(p) {
    if (p.type === 'plot') return 'Plot';
    if (p.type === 'commercial') return 'Office';
    if (!p.bhk) return '—';
    return p.bhk + ' BHK';
  }

  function parseAmount(raw) {
    if (raw == null || String(raw).trim() === '') return null;
    let s = String(raw).trim().toLowerCase().replace(/,/g, '');
    const mult = s.endsWith('cr')
      ? 10000000
      : s.endsWith('l') || s.endsWith('lakh') ? 100000 : 1;
    s = s.replace(/cr|lakh|l/g, '').trim();
    const n = parseFloat(s);
    return isNaN(n) ? null : n * mult;
  }

  function emi(price) {
    const principal = Number(price) * 0.8;
    const r = 0.085 / 12;
    const n = 20 * 12;
    const e = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(e / 100) * 100;
  }

  const HEART =
    '<svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
  const PIN =
    '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/></svg>';

  return { esc, formatINR, priceLabel, statusLabel, bedLabel, parseAmount, emi, HEART, PIN };
});