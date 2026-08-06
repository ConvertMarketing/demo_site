/* =========================================================
   MON CHÉRIE — shared.js
   Chrome global (announce bar, header, mega-menu, drawer
   mobil, search, cart drawer, footer), coș localStorage,
   card produs, toast, fallback imagini, reveal on scroll.
   Expune window.MC. Totul defensiv — zero crash-uri.
   ========================================================= */
(function () {
  "use strict";

  document.documentElement.classList.add("mc-js");

  /* ---------- Utilitare mici ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[ăâ]/g, "a").replace(/[î]/g, "i")
      .replace(/[șş]/g, "s").replace(/[țţ]/g, "t").replace(/é/g, "e");
  }
  var PRODUCTS = (typeof MC_PRODUCTS !== "undefined") ? MC_PRODUCTS : [];
  var MENU = (typeof MC_MENU !== "undefined") ? MC_MENU : [];
  var PROMOS = (typeof MC_PROMOS !== "undefined") ? MC_PROMOS : { freeShippingThreshold: 200, bundles: [] };
  var COLLECTIONS = (typeof MC_COLLECTIONS !== "undefined") ? MC_COLLECTIONS : {};
  function product(handle) {
    if (typeof mcProduct === "function") return mcProduct(handle);
    return PRODUCTS.filter(function (p) { return p.handle === handle; })[0];
  }

  /* =========================================================
     MC_ICONS — sprite SVG inline (24×24, stroke 1.5)
     ========================================================= */
  var STROKE_ATTRS = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
  var MC_ICONS_RAW = {
    /* — catalog (chei folosite în data.js) — */
    woman: '<circle cx="12" cy="4.75" r="2.25"/><path d="M10 9h4l2.2 7.2h-2.7l.6 4.8h-4.2l.6-4.8H7.8L10 9z"/>',
    man: '<circle cx="12" cy="4.75" r="2.25"/><path d="M8.75 9h6.5v6.2h-1.9V21h-2.7v-5.8h-1.9V9z"/>',
    kid: '<circle cx="12" cy="6.4" r="2.6"/><path d="M9.4 11h5.2v4.6h-1.3V19h-2.6v-3.4H9.4V11z"/><path d="M6.8 13.2 9.4 11m7.8 2.2L14.6 11"/>',
    hearts: '<path d="M9 13.2S4.5 10.3 3.4 7.8A3.1 3.1 0 0 1 9 5.6a3.1 3.1 0 0 1 5.6 2.2C13.5 10.3 9 13.2 9 13.2z"/><path d="M15.6 20.4s-4.1-2.7-5.1-5a2.85 2.85 0 0 1 5.1-2 2.85 2.85 0 0 1 5.1 2c-1 2.3-5.1 5-5.1 5z"/>',
    family: '<circle cx="6.7" cy="5.9" r="1.9"/><circle cx="17.3" cy="5.9" r="1.9"/><circle cx="12" cy="10.3" r="1.55"/><path d="M3.8 20.5v-3.4c0-2.7 1.2-4.3 2.9-4.3s2.9 1.6 2.9 4.3"/><path d="M14.4 17.1c0-2.7 1.2-4.3 2.9-4.3s2.9 1.6 2.9 4.3v3.4"/><path d="M9.8 20.5v-2.2c0-1.8.9-2.9 2.2-2.9s2.2 1.1 2.2 2.9v2.2"/>',
    tee: '<path d="M8.6 3.9 3.6 6.7l1.7 3.3 2.1-1v11h9.2V9l2.1 1 1.7-3.3-5-2.8a3.4 3.4 0 0 1-6.8 0z"/>',
    sweater: '<path d="M8.6 3.9 4.3 6.3 3.2 14l2.9.5.6-3V20h10.6v-8.5l.6 3 2.9-.5-1.1-7.7-4.3-2.4a3.4 3.4 0 0 1-6.8 0z"/>',
    velvet: '<rect x="3.75" y="3.75" width="16.5" height="16.5" rx="1"/><path d="M3.75 9.2c2.1 1.5 4.1-1.5 6.2 0s4.1-1.5 6.2 0 4.1 0 4.1 0"/><path d="M3.75 14.6c2.1 1.5 4.1-1.5 6.2 0s4.1-1.5 6.2 0 4.1 0 4.1 0"/>',
    cotton: '<circle cx="9.3" cy="8.7" r="3.1"/><circle cx="14.7" cy="8.7" r="3.1"/><circle cx="12" cy="12.6" r="3.1"/><path d="M12 15.7V21m0-5.3 3.2 3.5"/>',
    hoodie: '<path d="M8.4 5.6 5 7.7 4.1 20h15.8L19 7.7l-3.4-2.1"/><path d="M8.4 5.6c0-2 1.6-3.1 3.6-3.1s3.6 1.1 3.6 3.1S14 9.2 12 9.2 8.4 7.6 8.4 5.6z"/><path d="M9.7 20v-3.9h4.6V20"/>',
    quote: '<path d="M9.9 7.8c-2.4.9-3.7 2.6-3.7 5.3V16h4.2v-4.2H8.5c.1-1.5.9-2.6 2.3-3.2l-.9-.8z"/><path d="M17.8 7.8c-2.4.9-3.7 2.6-3.7 5.3V16h4.2v-4.2h-1.9c.1-1.5.9-2.6 2.3-3.2l-.9-.8z"/>',
    face: '<circle cx="12" cy="12" r="8.25"/><path d="M9.1 10.1h.01M14.9 10.1h.01"/><path d="M8.9 14.3c.9 1 2 1.5 3.1 1.5s2.2-.5 3.1-1.5"/>',
    mountain: '<path d="M3 19.25h18L14.9 8.4l-2.5 4.2-2.9-5.4L3 19.25z"/><path d="M8.2 11.4l1.3 1.3 1.3-1"/>',
    flower: '<circle cx="12" cy="7.2" r="2.5"/><circle cx="16.8" cy="10.7" r="2.5"/><circle cx="15" cy="16.3" r="2.5"/><circle cx="9" cy="16.3" r="2.5"/><circle cx="7.2" cy="10.7" r="2.5"/><circle cx="12" cy="12" r="2"/>',
    heart: '<path d="M12 20.6s-7.4-4.8-9.6-9.3A5.2 5.2 0 0 1 12 7.1a5.2 5.2 0 0 1 9.6 4.2c-2.2 4.5-9.6 9.3-9.6 9.3z"/>',
    sparkle: '<path d="M12 3.2c.7 4.1 2.7 6.1 6.8 6.8-4.1.7-6.1 2.7-6.8 6.8-.7-4.1-2.7-6.1-6.8-6.8 4.1-.7 6.1-2.7 6.8-6.8z"/><path d="M18.6 17.1c.3 1.7 1.1 2.5 2.8 2.8-1.7.3-2.5 1.1-2.8 2.8-.3-1.7-1.1-2.5-2.8-2.8 1.7-.3 2.5-1.1 2.8-2.8z"/>',
    snow: '<path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"/><path d="M12 3l-2 2m2-2 2 2M12 21l-2-2m2 2 2-2"/>',
    crown: '<path d="M4.4 16.6 3.2 8l4.9 3.4L12 5.2l3.9 6.2L20.8 8l-1.2 8.6H4.4z"/><path d="M5.4 19.6h13.2"/>',
    phone: '<rect x="7" y="2.75" width="10" height="18.5" rx="2.2"/><path d="M10.6 5.4h2.8"/><path d="M12 18.4h.01"/>',
    mail: '<rect x="3.25" y="5.25" width="17.5" height="13.5" rx="1.5"/><path d="m3.9 6.6 8.1 6.3 8.1-6.3"/>',
    clock: '<circle cx="12" cy="12" r="8.25"/><path d="M12 7.6V12l3.1 2.4"/>',

    /* — UI — */
    search: '<circle cx="11" cy="11" r="7"/><path d="M16.4 16.4 21 21"/>',
    user: '<circle cx="12" cy="7.8" r="3.4"/><path d="M4.6 20.2c1.4-3.4 4.1-4.9 7.4-4.9s6 1.5 7.4 4.9"/>',
    cart: '<path d="M5.8 8h12.4l-.9 12.2H6.7L5.8 8z"/><path d="M9 8V6.2a3 3 0 0 1 6 0V8"/>',
    menu: '<path d="M4 8h16M4 16h16"/>',
    close: '<path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>',
    "chevron-down": '<path d="M6.5 9.5 12 15l5.5-5.5"/>',
    "chevron-right": '<path d="M9.5 6.5 15 12l-5.5 5.5"/>',
    "chevron-left": '<path d="M14.5 6.5 9 12l5.5 5.5"/>',
    plus: '<path d="M12 5.5v13M5.5 12h13"/>',
    minus: '<path d="M5.5 12h13"/>',
    truck: '<path d="M2.75 6.75h11.5v10H2.75z"/><path d="M14.25 10h3.4l3.1 3.2v3.55h-6.5"/><circle cx="6.6" cy="18.9" r="1.7"/><circle cx="16.9" cy="18.9" r="1.7"/>',
    "return": '<path d="M3.5 4.25v5.5H9"/><path d="M4.3 14.75a8.25 8.25 0 1 0 .3-6.6L3.5 9.75"/>',
    shield: '<path d="M12 3.1 18.9 5.9v5c0 4.4-2.9 7.6-6.9 9.8-4-2.2-6.9-5.4-6.9-9.8v-5L12 3.1z"/><path d="m9.1 11.9 2.1 2.1 3.9-3.9"/>',
    tag: '<path d="M20.25 4.5h-7.1L4 13.65 10.35 20l9.15-9.15L20.25 4.5z"/><circle cx="16.35" cy="7.9" r="1.1"/>',
    "arrow-right": '<path d="M4 12h16M14.2 6.2 20 12l-5.8 5.8"/>',
    "arrow-left": '<path d="M20 12H4M9.8 6.2 4 12l5.8 5.8"/>',
    check: '<path d="m5 13 4.3 4.3L19 7"/>',
    filter: '<path d="M4 5.5h16l-6.2 7.2v5.5l-3.6 1.8v-7.3L4 5.5z"/>',
    sort: '<path d="M7.5 4.5v13.5m0 0-3.2-3.2m3.2 3.2 3.2-3.2"/><path d="M16.5 19.5V6m0 0-3.2 3.2M16.5 6l3.2 3.2"/>',

    /* — social (bonus, folosite în footer) — */
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.8"/><path d="M17.1 6.9h.01"/>',
    facebook: '<path d="M14.8 4h-2.2A3.4 3.4 0 0 0 9.2 7.4V10H7v3h2.2v7h3.2v-7h2.4l.5-3h-2.9V7.8c0-.5.3-.8.8-.8h2V4z"/>',
    tiktok: '<path d="M14.5 3.5v10.9a3.7 3.7 0 1 1-3.7-3.7"/><path d="M14.5 5.3c.7 1.9 2.2 3.2 4.5 3.4"/>'
  };
  /* Stele: pline (fill gold prin currentColor) */
  var STAR_FULL = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.9l2.7 5.7 6.2.8-4.6 4.3 1.2 6.1-5.5-3-5.5 3 1.2-6.1L3.1 9.4l6.2-.8L12 2.9z"/></svg>';
  var STAR_HALF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.9l2.7 5.7 6.2.8-4.6 4.3 1.2 6.1-5.5-3-5.5 3 1.2-6.1L3.1 9.4l6.2-.8L12 2.9z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 2.9v13.9l-5.5 3 1.2-6.1L3.1 9.4l6.2-.8L12 2.9z" fill="currentColor"/></svg>';
  var STAR_EMPTY = '<svg viewBox="0 0 24 24" aria-hidden="true" style="opacity:.35"><path d="M12 2.9l2.7 5.7 6.2.8-4.6 4.3 1.2 6.1-5.5-3-5.5 3 1.2-6.1L3.1 9.4l6.2-.8L12 2.9z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';

  var MC_ICONS = {};
  Object.keys(MC_ICONS_RAW).forEach(function (k) {
    MC_ICONS[k] = '<svg viewBox="0 0 24 24" ' + STROKE_ATTRS + ' aria-hidden="true">' + MC_ICONS_RAW[k] + "</svg>";
  });
  MC_ICONS.star = STAR_FULL;
  MC_ICONS["star-half"] = STAR_HALF;
  MC_ICONS["star-empty"] = STAR_EMPTY;

  function icon(name) { return MC_ICONS[name] || MC_ICONS.sparkle || ""; }

  /* ---------- Bani ---------- */
  function money(v) {
    if (typeof mcPrice === "function") return mcPrice(v);
    return v + " lei";
  }

  /* ---------- Numeral românesc: 1 produs / 19 produse / 21 de produse ---------- */
  function countText(n) {
    if (n === 1) return "1 produs";
    if (n < 20) return n + " produse";
    return n + " de produse";
  }

  /* ---------- Hidratare iconițe din HTML (data-mc-icon / data-icon) ---------- */
  function hydrateIcons(root) {
    $$("[data-mc-icon], [data-icon]", root || document).forEach(function (el) {
      el.innerHTML = icon(el.getAttribute("data-mc-icon") || el.getAttribute("data-icon"));
    });
  }

  /* ---------- Stele rating ---------- */
  function stars(rating) {
    var r = Math.max(0, Math.min(5, Number(rating) || 0));
    var out = "";
    for (var i = 1; i <= 5; i++) {
      var d = r - (i - 1);
      out += d >= 0.75 ? STAR_FULL : (d >= 0.25 ? STAR_HALF : STAR_EMPTY);
    }
    return '<span class="mc-stars" aria-hidden="true">' + out + "</span>";
  }

  /* =========================================================
     Fallback imagini — SVG data-URI din data-tone
     ========================================================= */
  var DEFAULT_TONE = ["#EAD9D5", "#8A7F72"];
  function parseTone(el) {
    var host = el && el.closest ? el.closest("[data-tone]") : null;
    if (!host) return DEFAULT_TONE;
    var raw = host.getAttribute("data-tone") || "";
    var parts = raw.split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    return parts.length >= 2 ? parts : DEFAULT_TONE;
  }
  function luminance(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(String(hex).trim());
    if (!m) return 0.5;
    var n = parseInt(m[1], 16);
    return (0.299 * (n >> 16 & 255) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255;
  }
  function placeholderURI(tones, label) {
    var c1 = tones[0], c2 = tones[1] || tones[0];
    var light = (luminance(c1) + luminance(c2)) / 2 > 0.62;
    var fg = light ? "rgba(22,19,15,.55)" : "rgba(246,243,238,.82)";
    var fg2 = light ? "rgba(22,19,15,.38)" : "rgba(246,243,238,.55)";
    /* taie la graniță de cuvânt + elipsă doar dacă s-a scurtat */
    var text = String(label || "Mon Chérie");
    if (text.length > 34) text = text.slice(0, 34).replace(/\s+\S*$/, "") + "…";
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/>' +
      "</linearGradient></defs>" +
      '<rect width="800" height="1000" fill="url(#g)"/>' +
      '<text x="400" y="500" font-family="Georgia, serif" font-style="italic" font-size="150" fill="' + fg + '" text-anchor="middle">MC</text>' +
      '<text x="400" y="580" font-family="Georgia, serif" font-style="italic" font-size="30" letter-spacing="3" fill="' + fg2 + '" text-anchor="middle">' + esc(text) + "</text>" +
      "</svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  function applyFallback(img) {
    if (!img || img.dataset.mcFb === "1" || img.dataset.nofb === "1") return;
    img.dataset.mcFb = "1";
    img.src = placeholderURI(parseTone(img), img.getAttribute("alt") || "");
    img.removeAttribute("srcset");
  }
  function installImageFallback() {
    window.addEventListener("error", function (e) {
      var t = e.target;
      if (t && t.tagName === "IMG") applyFallback(t);
    }, true);
  }
  function sweepBrokenImages(root) {
    $$("img", root || document).forEach(function (img) {
      if (img.complete && img.naturalWidth === 0 && img.src) applyFallback(img);
    });
  }

  /* =========================================================
     Coș — localStorage (mc_cart)
     ========================================================= */
  var CART_KEY = "mc_cart";
  var cartListeners = [];
  function cartRead() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(arr)) return [];
      /* normalizează intrările (localStorage poate fi corupt manual) */
      return arr.filter(function (it) { return it && product(it.handle); }).map(function (it) {
        return {
          handle: it.handle,
          color: String(it.color || ""),
          size: String(it.size || ""),
          qty: Math.max(1, Math.min(99, it.qty | 0 || 1)),
          bundle: String(it.bundle || "")
        };
      });
    } catch (e) { return []; }
  }
  function cartWrite(items) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch (e) { /* file:// / private mode */ }
    cartEmit();
  }
  function cartEmit() {
    renderCartUI();
    cartListeners.forEach(function (fn) {
      try { fn(cart.items()); } catch (e) { /* noop */ }
    });
  }
  var cart = {
    items: cartRead,
    add: function (handle, opts) {
      var p = product(handle);
      if (!p) return;
      opts = opts || {};
      var color = opts.color || (p.colors && p.colors[0] && p.colors[0].name) || "";
      var size = opts.size || (p.sizeList && p.sizeList[0]) || "";
      var qty = Math.max(1, opts.qty | 0 || 1);
      var bundle = String(opts.bundle || "");
      var items = cartRead();
      var same = items.filter(function (it) {
        return it.handle === handle && it.color === color && it.size === size && it.bundle === bundle;
      })[0];
      if (same) same.qty = Math.min(99, same.qty + qty);
      else items.push({ handle: handle, color: color, size: size, qty: qty, bundle: bundle });
      cartWrite(items);
      var badge = $(".mc-cart-count");
      if (badge) { badge.classList.remove("pulse"); void badge.offsetWidth; badge.classList.add("pulse"); }
    },
    remove: function (idx) {
      var items = cartRead();
      items.splice(idx, 1);
      cartWrite(items);
    },
    setQty: function (idx, qty) {
      var items = cartRead();
      if (!items[idx]) return;
      qty = qty | 0;
      if (qty <= 0) items.splice(idx, 1);
      else items[idx].qty = Math.min(99, qty);
      cartWrite(items);
    },
    count: function () {
      return cartRead().reduce(function (n, it) { return n + it.qty; }, 0);
    },
    total: function () { return computePromos(cartRead()).total; },
    promos: function () { return computePromos(cartRead()); },
    open: function () { openLayer("cart"); },
    close: function () { closeLayers(); },
    onChange: function (fn) { if (typeof fn === "function") cartListeners.push(fn); }
  };

  /* =========================================================
     Mini-motor de promoții — aplică în coș mecanicile promise
     (4=3, praguri tricouri albe/colorate, -10% treninguri,
     -10% la setul din bundle-ul de pe PDP)
     ========================================================= */
  function colsOf(p) { return (p.collections || [p.collection]).join(" "); }
  function isTee(p) { return /tricou/.test(colsOf(p)) && p.sizes !== "set"; }
  function isTrening(p) { return /trening/.test(colsOf(p)); }
  function computePromos(items) {
    var subtotal = 0, discounts = [], hint = "";
    var tees = [], trCount = 0, trTotal = 0, bundles = {};
    items.forEach(function (it) {
      var p = product(it.handle);
      if (!p) return;
      subtotal += p.price * it.qty;
      if (it.bundle) (bundles[it.bundle] = bundles[it.bundle] || []).push({ price: p.price, qty: it.qty });
      if (isTee(p)) {
        /* doar „Alb” exact — /alb/ s-ar potrivi și pe „Albastru” */
        for (var i = 0; i < it.qty; i++) tees.push({ price: p.price, white: /^alb$/i.test((it.color || "").trim()) });
      }
      if (isTrening(p)) { trCount += it.qty; trTotal += p.price * it.qty; }
    });

    /* Setul din PDP: −10% pe pereche (o dată per pereche completă) */
    Object.keys(bundles).forEach(function (k) {
      var arr = bundles[k];
      if (arr.length >= 2) {
        var pair = arr[0].price + arr[1].price;
        var pairs = Math.min(arr[0].qty, arr[1].qty);
        var d = (pair - Math.round(pair * 0.9)) * pairs;
        if (d > 0) discounts.push({ label: "Reducere set −10%", amount: d });
      }
    });

    /* Tricouri: 4=3 SAU pragurile 3 albe / 3 colorate — cea mai avantajoasă */
    var prices = tees.map(function (t) { return t.price; }).sort(function (a, b) { return a - b; });
    var freeN = Math.floor(tees.length / 4);
    var amt43 = 0;
    for (var f = 0; f < freeN; f++) amt43 += prices[f];
    var whites = tees.filter(function (t) { return t.white; });
    var colored = tees.filter(function (t) { return !t.white; });
    var amtW = 0, amtC = 0;
    if (whites.length >= 3) whites.forEach(function (t) { amtW += Math.max(0, t.price - 30); });
    if (colored.length >= 3) colored.forEach(function (t) { amtC += Math.max(0, t.price - 50); });
    if (amt43 > 0 && amt43 >= amtW + amtC) {
      discounts.push({ label: "4 = 3: cel mai ieftin tricou gratuit", amount: amt43 });
    } else {
      if (amtW > 0) discounts.push({ label: "3+ tricouri albe → 30 lei/buc", amount: amtW });
      if (amtC > 0) discounts.push({ label: "3+ tricouri colorate → 50 lei/buc", amount: amtC });
    }

    /* -10% la 3 treninguri */
    if (trCount >= 3 && trTotal > 0) {
      discounts.push({ label: "−10% la 3 treninguri", amount: Math.round(trTotal * 0.1) });
    }

    /* Nudge de progres spre 4=3 */
    if (tees.length >= 2 && tees.length < 4) {
      var need = 4 - tees.length;
      hint = "Mai adaugă " + need + (need === 1 ? " tricou" : " tricouri") + " și cel mai ieftin e gratuit (4=3).";
    }

    var off = discounts.reduce(function (n, d) { return n + d.amount; }, 0);
    return { subtotal: subtotal, discounts: discounts, total: Math.max(0, subtotal - off), hint: hint };
  }

  /* =========================================================
     Card produs — SINGURA sursă (folosit de toate paginile)
     ========================================================= */
  function badgeClass(badge) {
    if (!badge) return "";
    if (/^-|→|=/.test(badge)) return " mc-badge--sale";
    if (/bestseller/i.test(badge)) return " mc-badge--gold";
    return "";
  }
  function productCard(p) {
    if (!p) return "";
    var href = "product.html?p=" + encodeURIComponent(p.handle);
    var img0 = (p.images && p.images[0]) || "";
    var img1 = (p.images && p.images[1]) || "";
    var tone = (p.tone || DEFAULT_TONE).join(",");
    var colors = p.colors || [];
    var shown = colors.slice(0, 4);
    var extra = colors.length - shown.length;
    var sale = p.compareAt && p.compareAt > p.price;

    var swatches = "";
    if (colors.length > 1) {
      swatches = '<div class="mc-swatches" aria-label="Culori disponibile">' +
        shown.map(function (c) {
          return '<span class="mc-swatch" style="background:' + esc(c.hex) + '" title="' + esc(c.name) + '"></span>';
        }).join("") +
        (extra > 0 ? '<span class="mc-swatch-more">+' + extra + "</span>" : "") +
        "</div>";
    }

    return (
      '<article class="mc-card" data-tone="' + esc(tone) + '" data-handle="' + esc(p.handle) + '">' +
        '<div class="mc-card-media">' +
          '<img class="mc-card-img is-primary' + (img1 ? " has-alt" : "") + '" src="' + esc(img0) + '" alt="' + esc(p.title) + '" loading="lazy">' +
          (img1 ? '<img class="mc-card-img is-alt" src="' + esc(img1) + '" alt="" loading="lazy" aria-hidden="true">' : "") +
          '<a href="' + href + '" aria-label="' + esc(p.title) + '"></a>' +
          (p.badge ? '<span class="mc-badge' + badgeClass(p.badge) + '">' + esc(p.badge) + "</span>" : "") +
          '<button type="button" class="mc-quick-add" data-quick-add data-handle="' + esc(p.handle) + '" aria-label="Adaugă rapid în coș: ' + esc(p.title) + '">' + icon("plus") + "</button>" +
        "</div>" +
        '<div class="mc-card-body">' +
          '<h3 class="mc-card-title"><a href="' + href + '">' + esc(p.title) + "</a></h3>" +
          '<div class="mc-card-rating">' + stars(p.rating) + "<span>" + esc(p.rating) + " (" + esc(p.reviews) + ")</span></div>" +
          '<div class="mc-card-price">' +
            '<span class="mc-price' + (sale ? " mc-price--sale" : "") + '">' + money(p.price) + "</span>" +
            (sale ? '<s class="mc-compare">' + money(p.compareAt) + "</s>" : "") +
          "</div>" +
          swatches +
        "</div>" +
      "</article>"
    );
  }

  /* =========================================================
     Toast
     ========================================================= */
  var toastTimer = null;
  function toast(msg) {
    var el = $(".mc-toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "mc-toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    el.innerHTML = icon("check") + "<span>" + esc(msg) + "</span>";
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2600);
  }

  /* =========================================================
     Reveal on scroll
     ========================================================= */
  var revealObserver = null;
  function initReveal(root) {
    root = root || document;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      $$(".rv", root).forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            revealObserver.unobserve(en.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    }
    $$(".rv:not(.in)", root).forEach(function (el) { revealObserver.observe(el); });
  }

  /* =========================================================
     Chrome — template-uri
     ========================================================= */
  function toneFor(href) {
    var m = /product\.html\?p=([\w-]+)/.exec(href || "");
    if (m) { var p = product(m[1]); if (p && p.tone) return p.tone.join(","); }
    m = /collection\.html\?c=([\w-]+)/.exec(href || "");
    if (m && COLLECTIONS[m[1]] && COLLECTIONS[m[1]].tone) return COLLECTIONS[m[1]].tone.join(",");
    return DEFAULT_TONE.join(",");
  }

  function tplAnnounce() {
    var items = [];
    (PROMOS.bundles || []).forEach(function (b) { items.push({ icon: "tag", text: b.label }); });
    if (PROMOS.shipping) items.push({ icon: "truck", text: PROMOS.shipping });
    if (PROMOS.returns) items.push({ icon: "return", text: PROMOS.returns });
    if (PROMOS.freeShippingThreshold) items.push({ icon: "truck", text: "Transport gratuit peste " + money(PROMOS.freeShippingThreshold) });
    var seq = items.map(function (it) {
      return '<span class="mc-announce-item">' + icon(it.icon) + esc(it.text) + '<i class="mc-announce-dot" aria-hidden="true">◆</i></span>';
    }).join("");
    /* copia a doua e doar pentru bucla CSS — ascunsă de SR */
    return '<div class="mc-announce" aria-label="Promoții curente"><div class="mc-announce-track">' + seq + '<span aria-hidden="true">' + seq + "</span></div></div>";
  }

  function tplLogo() {
    return '<a class="mc-logo" href="index.html" aria-label="Mon Chérie — acasă">' +
      '<img class="mc-logo-img" data-nofb="1" alt="Mon Chérie" ' +
      'src="assets/img/logo-moncherie.jpg" ' +
      'onerror="this.closest(&quot;.mc-logo&quot;).classList.add(&quot;logo-text&quot;);this.remove()">' +
      '<span class="mc-logo-fb">MON <em>chérie</em></span></a>';
  }

  function tplMega(tab) {
    var groups = (tab.groups || []).map(function (g) {
      return '<div class="mc-mega-group"><span class="micro">' + esc(g.title) + "</span><ul>" +
        (g.links || []).map(function (l) {
          return '<li><a class="mc-mega-link" href="' + esc(l.href) + '">' + icon(l.icon) +
            "<span>" + esc(l.label) + "</span>" +
            (l.badge ? '<span class="mc-mega-badge">' + esc(l.badge) + "</span>" : "") +
            "</a></li>";
        }).join("") + "</ul></div>";
    }).join("");
    var feats = (tab.featured || []).map(function (f) {
      return '<a class="mc-feat" href="' + esc(f.href) + '" data-tone="' + esc(toneFor(f.href)) + '">' +
        '<span class="mc-feat-media"><img src="' + esc(f.img) + '" alt="' + esc(f.title) + '" loading="lazy"></span>' +
        '<span class="mc-feat-title">' + esc(f.title) + "</span>" +
        '<span class="mc-feat-note">' + esc(f.note) + "</span></a>";
    }).join("");
    var viewAll = "";
    if (tab.groups && tab.groups[0] && tab.groups[0].links && tab.groups[0].links[0]) {
      viewAll = tab.groups[0].links[0].href;
    }
    return '<div class="mc-mega" id="mc-mega-' + esc(tab.id) + '" role="group" aria-label="' + esc(tab.label) + '">' +
      '<div class="container"><div class="mc-mega-grid">' +
        '<div class="mc-mega-cols">' + groups + "</div>" +
        '<div class="mc-mega-feats">' + feats + "</div>" +
      "</div></div>" +
      '<div class="mc-mega-bar"><div class="container mc-mega-bar-inner">' +
        "<em>" + esc(tab.tagline || "") + "</em>" +
        (viewAll ? '<a class="lnk" href="' + esc(viewAll) + '">Vezi tot ' + icon("arrow-right") + "</a>" : "") +
      "</div></div></div>";
  }

  function tplHeader() {
    var tabs = MENU.map(function (tab) {
      return '<li class="mc-nav-item" data-tab="' + esc(tab.id) + '">' +
        '<button type="button" class="mc-nav-tab" aria-expanded="false" aria-controls="mc-mega-' + esc(tab.id) + '">' +
          "<span>" + esc(tab.label) + "</span>" + icon("chevron-down") +
        "</button>" + tplMega(tab) + "</li>";
    }).join("");
    return '<header class="mc-header">' +
      '<div class="container mc-header-inner">' +
        '<button type="button" class="mc-burger mc-icon-btn" aria-label="Deschide meniul" aria-expanded="false" aria-controls="mc-drawer">' + icon("menu") + "</button>" +
        tplLogo() +
        '<nav class="mc-nav" aria-label="Navigație principală"><ul>' + tabs +
          '<li><a class="mc-nav-link mc-nav-offers" href="collection.html?c=all&amp;reduceri=1">Oferte</a></li>' +
        "</ul></nav>" +
        '<div class="mc-actions">' +
          '<button type="button" class="mc-icon-btn" data-mc-open="search" aria-label="Caută">' + icon("search") + "</button>" +
          '<button type="button" class="mc-icon-btn" data-mc-account aria-label="Contul meu">' + icon("user") + "</button>" +
          '<button type="button" class="mc-icon-btn" data-mc-open="cart" aria-label="Coșul de cumpărături">' + icon("cart") +
            '<span class="mc-cart-count is-empty" aria-hidden="true">0</span>' +
          "</button>" +
        "</div>" +
      "</div></header>";
  }

  function tplSearch() {
    return '<div class="mc-search" role="dialog" aria-modal="true" aria-label="Căutare produse">' +
      '<div class="container mc-search-inner">' +
        '<form class="mc-search-bar" role="search" action="collection.html">' +
          icon("search") +
          '<input class="mc-search-input" type="search" name="q" placeholder="Caută tricouri, treninguri…" autocomplete="off" aria-label="Caută produse">' +
          '<button type="button" class="mc-icon-btn" data-mc-close aria-label="Închide căutarea">' + icon("close") + "</button>" +
        "</form>" +
        '<div class="mc-search-hints"><span class="micro">Populare</span>' +
          ["Trening catifea", "Tricou alb", "Cuplu", "Crăciun"].map(function (t) {
            return '<button type="button" class="mc-chip" data-search-hint>' + esc(t) + "</button>";
          }).join("") +
        "</div>" +
        '<div class="mc-search-sugg" aria-live="polite"></div>' +
      "</div></div>";
  }

  function tplDrawer() {
    var tabs = MENU.map(function (tab) {
      return '<li><button type="button" class="mc-drawer-tab" data-drawer-tab="' + esc(tab.id) + '">' +
        icon(tab.icon) + "<span>" + esc(tab.label) + "</span>" +
        '<span class="mc-chev">' + icon("chevron-right") + "</span></button></li>";
    }).join("");
    var promo = (PROMOS.bundles && PROMOS.bundles[0]) ? PROMOS.bundles[0].label : "";
    return '<div class="mc-drawer" id="mc-drawer" role="dialog" aria-modal="true" aria-label="Meniu">' +
      '<div class="mc-drawer-head">' + tplLogo() +
        '<button type="button" class="mc-icon-btn" data-mc-close aria-label="Închide meniul">' + icon("close") + "</button></div>" +
      '<div class="mc-drawer-viewport">' +
        '<div class="mc-drawer-lvl mc-drawer-lvl1"><ul>' + tabs +
          '<li><a class="mc-drawer-tab mc-nav-offers" href="collection.html?c=all&amp;reduceri=1">' + icon("tag") + "<span>Oferte</span></a></li>" +
        "</ul></div>" +
        '<div class="mc-drawer-lvl mc-drawer-lvl2"></div>' +
      "</div>" +
      '<div class="mc-drawer-foot">' +
        (promo ? '<p class="mc-drawer-promo">' + icon("tag") + esc(promo) + "</p>" : "") +
        '<div class="mc-drawer-links">' +
          '<button type="button" data-mc-open="search">' + icon("search") + "Căutare</button>" +
          '<button type="button" data-mc-account>' + icon("user") + "Contul meu</button>" +
        "</div>" +
      "</div></div>";
  }

  function tplCartDrawer() {
    return '<aside class="mc-cartd" role="dialog" aria-modal="true" aria-label="Coșul de cumpărături">' +
      '<div class="mc-cartd-head">' +
        '<p class="mc-cartd-title">Coșul tău<span data-cart-n></span></p>' +
        '<button type="button" class="mc-icon-btn" data-mc-close aria-label="Închide coșul">' + icon("close") + "</button>" +
      "</div>" +
      '<div class="mc-cartd-ship" data-cart-ship></div>' +
      '<div class="mc-cartd-items" data-cart-items></div>' +
      '<div class="mc-cartd-upsell" data-cart-upsell hidden></div>' +
      '<div class="mc-cartd-foot">' +
        '<div class="mc-cartd-discounts" data-cart-discounts hidden></div>' +
        '<p class="mc-cartd-total"><span>Subtotal</span><b data-cart-total></b></p>' +
        '<p class="mc-cartd-note">Taxele și transportul se calculează la checkout. Demo — comanda nu este reală.</p>' +
        '<button type="button" class="btn btn-primary btn--block" data-cart-checkout>Finalizează comanda</button>' +
      "</div></aside>";
  }

  function tplFooter() {
    var year = new Date().getFullYear();
    var pay = {
      visa: '<svg viewBox="0 0 40 26" aria-label="Visa"><text x="20" y="17" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="bold" font-size="10" fill="#27408B">VISA</text></svg>',
      mc: '<svg viewBox="0 0 40 26" aria-label="Mastercard"><circle cx="16" cy="13" r="7" fill="#B54B36" opacity=".9"/><circle cx="24" cy="13" r="7" fill="#B08D57" opacity=".85"/></svg>',
      paypal: '<svg viewBox="0 0 40 26" aria-label="PayPal"><text x="20" y="16.5" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="8.5" fill="#27408B">Pay<tspan fill="#5B6770">Pal</tspan></text></svg>',
      cod: '<svg viewBox="0 0 40 26" aria-label="Plată ramburs"><rect x="7" y="7" width="26" height="12" rx="2" fill="none" stroke="#5C554B" stroke-width="1.4"/><circle cx="20" cy="13" r="3" fill="none" stroke="#5C554B" stroke-width="1.4"/></svg>'
    };
    return '<footer class="mc-footer">' +
      '<div class="container">' +
        '<div class="mc-footer-top">' +
          '<div class="mc-footer-brand">' + tplLogo() +
            "<p>Fashion premium accesibil: bumbac bun, grafică personală, croieli care flatează. Din România, cu inimă pariziană.</p>" +
            '<div class="mc-footer-social">' +
              '<a href="#" aria-label="Instagram">' + icon("instagram") + "</a>" +
              '<a href="#" aria-label="Facebook">' + icon("facebook") + "</a>" +
              '<a href="#" aria-label="TikTok">' + icon("tiktok") + "</a>" +
            "</div></div>" +
          '<nav class="mc-footer-col" aria-label="Magazin"><span class="micro">Magazin</span><ul>' +
            '<li><a href="collection.html?c=tricouri-dama">Damă</a></li>' +
            '<li><a href="collection.html?c=tricouri-barbati">Bărbați</a></li>' +
            '<li><a href="collection.html?c=tricouri-copii">Copii</a></li>' +
            '<li><a href="collection.html?c=trening-catifea">Trening catifea</a></li>' +
            '<li><a href="collection.html?c=all">Toate produsele</a></li>' +
          "</ul></nav>" +
          '<nav class="mc-footer-col" aria-label="Ajutor"><span class="micro">Ajutor</span><ul>' +
            '<li><a href="#">Livrare 24–48h</a></li>' +
            '<li><a href="#">Retur gratuit 30 zile</a></li>' +
            '<li><a href="#">Ghid mărimi</a></li>' +
            '<li><a href="#">Întrebări frecvente</a></li>' +
          "</ul></nav>" +
          '<nav class="mc-footer-col" aria-label="Companie"><span class="micro">Companie</span><ul>' +
            '<li><a href="#">Despre noi</a></li>' +
            '<li><a href="#">Povestea Mon Chérie</a></li>' +
            '<li><a href="#">Sustenabilitate</a></li>' +
            '<li><a href="#">Termeni și condiții</a></li>' +
          "</ul></nav>" +
          '<div class="mc-footer-col"><span class="micro">Contact</span><ul class="mc-footer-contact">' +
            "<li>" + icon("phone") + "<span>0740 000 000</span></li>" +
            "<li>" + icon("mail") + "<span>salut@moncherie.ro</span></li>" +
            "<li>" + icon("clock") + "<span>Luni–Vineri, 9:00–17:00</span></li>" +
          "</ul></div>" +
        "</div>" +
        '<div class="mc-footer-bottom">' +
          "<span>© " + year + " Mon Chérie · Demo de redesign — nu este magazinul real.</span>" +
          '<span class="mc-payments">' + pay.visa + pay.mc + pay.paypal + pay.cod + "</span>" +
        "</div>" +
      "</div></footer>";
  }

  /* =========================================================
     Layere (drawer / search / cart) + scrim
     ========================================================= */
  var lastFocus = null;

  /* Focus-trap generic pentru dialoguri aria-modal (refolosit de toate layerele) */
  var trapHandler = null;
  function trapFocus(container) {
    releaseTrap();
    if (!container) return;
    trapHandler = function (e) {
      if (e.key !== "Tab") return;
      var f = $$('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', container)
        .filter(function (el) { return el.getClientRects().length > 0; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      var inside = container.contains(document.activeElement);
      if (e.shiftKey && (!inside || document.activeElement === first)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (!inside || document.activeElement === last)) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", trapHandler, true);
  }
  function releaseTrap() {
    if (trapHandler) { document.removeEventListener("keydown", trapHandler, true); trapHandler = null; }
  }

  function layerEl(name) {
    return { drawer: $(".mc-drawer"), search: $(".mc-search"), cart: $(".mc-cartd") }[name];
  }
  function openLayer(name) {
    closeLayers(true);
    var el = layerEl(name);
    var scrim = $(".mc-scrim");
    if (!el) return;
    lastFocus = document.activeElement;
    el.classList.add("open");
    if (scrim) scrim.classList.add("open");
    document.documentElement.classList.add("mc-lock");
    if (name === "drawer") { var b = $(".mc-burger"); if (b) b.setAttribute("aria-expanded", "true"); }
    trapFocus(el);
    var focusable = el.querySelector("input, button, a[href]");
    if (name === "search") focusable = el.querySelector(".mc-search-input") || focusable;
    if (focusable) setTimeout(function () { focusable.focus(); }, 60);
  }
  function closeLayers(soft) {
    releaseTrap();
    var any = false;
    ["drawer", "search", "cart"].forEach(function (n) {
      var el = layerEl(n);
      if (el && el.classList.contains("open")) { el.classList.remove("open"); any = true; }
    });
    var drawer = $(".mc-drawer");
    if (drawer) drawer.classList.remove("is-sub");
    var b = $(".mc-burger");
    if (b) b.setAttribute("aria-expanded", "false");
    if (!soft) {
      var scrim = $(".mc-scrim");
      if (scrim) scrim.classList.remove("open");
      document.documentElement.classList.remove("mc-lock");
      if (any && lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} lastFocus = null; }
    }
    return any;
  }

  /* =========================================================
     Mega-menu — interacțiuni
     ========================================================= */
  function bindMegaMenu() {
    var nav = $(".mc-nav");
    if (!nav) return;
    var items = $$(".mc-nav-item", nav);
    var closeTimer = null;
    var suppressFocusOpen = false;

    function setOpen(item, on) {
      items.forEach(function (it) {
        var is = on && it === item;
        it.classList.toggle("open", is);
        var btn = $(".mc-nav-tab", it);
        if (btn) btn.setAttribute("aria-expanded", is ? "true" : "false");
      });
    }
    function closeAll() { setOpen(null, false); }

    items.forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        clearTimeout(closeTimer);
        setOpen(item, true);
      });
      item.addEventListener("mouseleave", function () {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(closeAll, 150); /* delay de închidere */
      });
      var btn = $(".mc-nav-tab", item);
      if (btn) {
        btn.addEventListener("click", function () {
          setOpen(item, !item.classList.contains("open"));
        });
        btn.addEventListener("focus", function () {
          if (!suppressFocusOpen) setOpen(item, true);
        });
      }
      /* focus-trap blând: închide când focusul iese din item */
      item.addEventListener("focusout", function (e) {
        if (!item.contains(e.relatedTarget)) {
          closeTimer = setTimeout(function () {
            if (!item.contains(document.activeElement)) setOpen(item, false);
          }, 120);
        }
      });
    });

    /* roving tabindex + săgeți între tab-uri */
    var tabs = $$(".mc-nav-tab, .mc-nav-link", nav);
    tabs.forEach(function (t, i) { t.tabIndex = i === 0 ? 0 : -1; });
    nav.addEventListener("keydown", function (e) {
      var idx = tabs.indexOf(document.activeElement);
      if (idx === -1) return;
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(idx + 1) % tabs.length];
      else if (e.key === "ArrowLeft") next = tabs[(idx - 1 + tabs.length) % tabs.length];
      else if (e.key === "Home") next = tabs[0];
      else if (e.key === "End") next = tabs[tabs.length - 1];
      if (next) {
        e.preventDefault();
        tabs.forEach(function (t) { t.tabIndex = -1; });
        next.tabIndex = 0;
        next.focus();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      var open = items.filter(function (it) { return it.classList.contains("open"); })[0];
      if (open) {
        closeAll();
        var btn = $(".mc-nav-tab", open);
        if (btn) {
          suppressFocusOpen = true;
          btn.focus();
          setTimeout(function () { suppressFocusOpen = false; }, 150);
        }
      }
    });
  }

  /* =========================================================
     Drawer mobil — nivel 1 / nivel 2
     ========================================================= */
  function bindDrawer() {
    var drawer = $(".mc-drawer");
    if (!drawer) return;
    var lvl2 = $(".mc-drawer-lvl2", drawer);
    drawer.addEventListener("click", function (e) {
      var tabBtn = e.target.closest("[data-drawer-tab]");
      if (tabBtn && lvl2) {
        var tab = MENU.filter(function (t) { return t.id === tabBtn.getAttribute("data-drawer-tab"); })[0];
        if (!tab) return;
        var groups = (tab.groups || []).map(function (g) {
          return '<span class="micro">' + esc(g.title) + "</span><ul>" +
            (g.links || []).map(function (l) {
              return '<li><a class="mc-mega-link" href="' + esc(l.href) + '">' + icon(l.icon) +
                "<span>" + esc(l.label) + "</span>" +
                (l.badge ? '<span class="mc-mega-badge">' + esc(l.badge) + "</span>" : "") + "</a></li>";
            }).join("") + "</ul>";
        }).join("");
        var feats = (tab.featured || []).map(function (f) {
          return '<a class="mc-feat" href="' + esc(f.href) + '" data-tone="' + esc(toneFor(f.href)) + '">' +
            '<span class="mc-feat-media"><img src="' + esc(f.img) + '" alt="' + esc(f.title) + '" loading="lazy"></span>' +
            '<span class="mc-feat-title">' + esc(f.title) + "</span>" +
            '<span class="mc-feat-note">' + esc(f.note) + "</span></a>";
        }).join("");
        lvl2.innerHTML =
          '<button type="button" class="mc-drawer-back" data-drawer-back>' + icon("chevron-left") + esc(tab.label) + " — Înapoi</button>" +
          groups +
          (feats ? '<div class="mc-drawer-feats">' + feats + "</div>" : "");
        drawer.classList.add("is-sub");
        var back = $("[data-drawer-back]", drawer);
        if (back) back.focus();
        return;
      }
      if (e.target.closest("[data-drawer-back]")) {
        drawer.classList.remove("is-sub");
        return;
      }
      if (e.target.closest("a[href]")) closeLayers();
    });
  }

  /* =========================================================
     Search — sugestii live
     ========================================================= */
  function suggItem(p) {
    return '<a class="mc-sugg-item" href="product.html?p=' + encodeURIComponent(p.handle) + '" data-tone="' + esc((p.tone || DEFAULT_TONE).join(",")) + '">' +
      '<img src="' + esc((p.images && p.images[0]) || "") + '" alt="" loading="lazy">' +
      "<span><span class='mc-sugg-title'>" + esc(p.title) + "</span><br>" +
      "<span class='mc-sugg-meta'>" + esc((COLLECTIONS[p.collection] || {}).title || "") + "</span></span>" +
      '<span class="mc-sugg-price">' + money(p.price) + "</span></a>";
  }
  function bindSearch() {
    var box = $(".mc-search");
    if (!box) return;
    var input = $(".mc-search-input", box);
    var sugg = $(".mc-search-sugg", box);
    if (!input || !sugg) return;

    function run() {
      var q = norm(input.value.trim());
      if (q.length < 2) { sugg.innerHTML = ""; sweepBrokenImages(sugg); return; }
      var hits = PRODUCTS.filter(function (p) {
        var hay = norm(p.title + " " + p.handle + " " + ((COLLECTIONS[p.collection] || {}).title || ""));
        return q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
      }).slice(0, 6);
      sugg.innerHTML = hits.length
        ? hits.map(suggItem).join("")
        : '<p class="mc-sugg-empty">Nimic pentru „' + esc(input.value.trim()) + "”. Încearcă „trening” sau „tricou”.</p>";
      sweepBrokenImages(sugg);
    }
    input.addEventListener("input", run);
    var form = $(".mc-search-bar", box);
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var first = $(".mc-sugg-item", sugg);
      if (first) { location.href = first.getAttribute("href"); return; }
      /* fără sugestii: Enter duce la catalogul complet, nu într-un dead-end */
      location.href = "collection.html?c=all";
    });
    box.addEventListener("click", function (e) {
      var hint = e.target.closest("[data-search-hint]");
      if (hint) { input.value = hint.textContent; input.focus(); run(); }
    });
  }

  /* =========================================================
     Cart drawer — randare
     ========================================================= */
  function pickUpsell(items) {
    var inCart = {};
    items.forEach(function (it) { inCart[it.handle] = true; });
    for (var i = 0; i < items.length; i++) {
      var p = product(items[i].handle);
      var ups = (p && p.upsells) || [];
      for (var j = 0; j < ups.length; j++) {
        if (!inCart[ups[j]] && product(ups[j])) return product(ups[j]);
      }
    }
    return null;
  }
  function renderCartUI() {
    var items = cart.items();
    var promo = computePromos(items);
    var count = items.reduce(function (n, it) { return n + it.qty; }, 0);
    var total = promo.total;

    /* badge header */
    $$(".mc-cart-count").forEach(function (b) {
      b.textContent = count;
      b.classList.toggle("is-empty", count === 0);
    });

    var drawer = $(".mc-cartd");
    if (!drawer) return;
    var nEl = $("[data-cart-n]", drawer);
    if (nEl) nEl.textContent = count ? "(" + countText(count) + ")" : "";

    /* progres transport gratuit (ascuns pe coș gol) + nudge promo */
    var ship = $("[data-cart-ship]", drawer);
    var T = PROMOS.freeShippingThreshold || 200;
    if (ship) {
      if (!items.length) {
        ship.innerHTML = "";
        ship.hidden = true;
      } else {
        ship.hidden = false;
        var left = Math.max(0, T - total);
        var pct = Math.min(100, Math.round(total / T * 100));
        ship.innerHTML = (left > 0
          ? "Mai adaugă <strong>" + money(left) + "</strong> pentru transport gratuit."
          : '<span class="is-done">' + icon("check") + "Ai transport gratuit!</span>") +
          '<span class="mc-ship-bar"><i style="width:' + pct + '%"></i></span>' +
          (promo.hint ? '<span class="mc-cartd-hint">' + icon("tag") + esc(promo.hint) + "</span>" : "");
      }
    }

    /* items — cu memorarea focusului (re-randarea nu aruncă tastatura afară) */
    var list = $("[data-cart-items]", drawer);
    if (list) {
      var focusSel = null;
      var ae = document.activeElement;
      if (ae && list.contains(ae) && ae.closest) {
        var fb = ae.closest("[data-cart-inc],[data-cart-dec],[data-cart-remove]");
        if (fb) {
          ["data-cart-inc", "data-cart-dec", "data-cart-remove"].some(function (a) {
            if (fb.hasAttribute(a)) { focusSel = "[" + a + '="' + fb.getAttribute(a) + '"]'; return true; }
            return false;
          });
        }
      }
      if (!items.length) {
        list.innerHTML = '<div class="mc-cart-empty">' + icon("cart") +
          "<p>Coșul tău e gol.</p>" +
          '<a class="btn btn-ghost" href="collection.html?c=all" data-mc-close-link>Descoperă colecțiile</a></div>';
      } else {
        list.innerHTML = items.map(function (it, idx) {
          var p = product(it.handle);
          if (!p) return "";
          var href = "product.html?p=" + encodeURIComponent(p.handle);
          var lineSale = p.compareAt && p.compareAt > p.price;
          return '<div class="mc-cart-item" data-tone="' + esc((p.tone || DEFAULT_TONE).join(",")) + '">' +
            '<a href="' + href + '" tabindex="-1" aria-hidden="true"><img src="' + esc((p.images && p.images[0]) || "") + '" alt="" loading="lazy"></a>' +
            "<div>" +
              '<p class="mc-cart-item-title"><a href="' + href + '">' + esc(p.title) + "</a></p>" +
              '<p class="mc-cart-item-meta">' + esc([it.color, it.size].filter(Boolean).join(" · ")) + "</p>" +
              '<div class="mc-cart-item-row">' +
                '<span class="mc-qty">' +
                  '<button type="button" data-cart-dec="' + idx + '" aria-label="Scade cantitatea">' + icon("minus") + "</button>" +
                  "<output aria-label='Cantitate'>" + it.qty + "</output>" +
                  '<button type="button" data-cart-inc="' + idx + '" aria-label="Crește cantitatea">' + icon("plus") + "</button>" +
                "</span>" +
                "<span>" +
                  '<span class="mc-cart-item-price">' + money(p.price * it.qty) +
                    (lineSale ? "<s>" + money(p.compareAt * it.qty) + "</s>" : "") + "</span>" +
                  '<button type="button" class="mc-cart-remove" data-cart-remove="' + idx + '">Șterge</button>' +
                "</span>" +
              "</div>" +
            "</div></div>";
        }).join("");
      }
      sweepBrokenImages(list);
      if (focusSel && drawer.classList.contains("open")) {
        var nf = $(focusSel, list) || $("[data-cart-inc], [data-cart-dec]", list) || $("[data-mc-close]", drawer);
        if (nf) { try { nf.focus(); } catch (e) { /* noop */ } }
      }
    }

    /* rânduri de reducere (promoțiile „automate” chiar se aplică) */
    var discBox = $("[data-cart-discounts]", drawer);
    if (discBox) {
      if (promo.discounts.length) {
        discBox.hidden = false;
        discBox.innerHTML = promo.discounts.map(function (d) {
          return '<p class="mc-cartd-disc"><span>' + esc(d.label) + "</span><b>−" + esc(money(d.amount)) + "</b></p>";
        }).join("");
      } else {
        discBox.hidden = true;
        discBox.innerHTML = "";
      }
    }

    /* upsell */
    var upsBox = $("[data-cart-upsell]", drawer);
    if (upsBox) {
      var up = items.length ? pickUpsell(items) : null;
      if (up) {
        upsBox.hidden = false;
        upsBox.innerHTML = '<span class="micro">Adaugă și…</span>' +
          '<div class="mc-upsell-row" data-tone="' + esc((up.tone || DEFAULT_TONE).join(",")) + '">' +
            '<img src="' + esc((up.images && up.images[0]) || "") + '" alt="' + esc(up.title) + '" loading="lazy">' +
            "<span><span class='mc-upsell-title'>" + esc(up.title) + "</span><br>" +
            "<span class='mc-upsell-price'>" + money(up.price) + "</span></span>" +
            '<button type="button" class="mc-upsell-add" data-quick-add data-handle="' + esc(up.handle) + '" aria-label="Adaugă ' + esc(up.title) + ' în coș">' + icon("plus") + "</button>" +
          "</div>";
        sweepBrokenImages(upsBox);
      } else {
        upsBox.hidden = true;
        upsBox.innerHTML = "";
      }
    }

    var totalEl = $("[data-cart-total]", drawer);
    if (totalEl) totalEl.textContent = money(total);
  }

  function bindCart() {
    var drawer = $(".mc-cartd");
    if (!drawer) return;
    drawer.addEventListener("click", function (e) {
      var t;
      if ((t = e.target.closest("[data-cart-inc]"))) {
        var i = +t.getAttribute("data-cart-inc");
        cart.setQty(i, (cart.items()[i] || { qty: 0 }).qty + 1);
      } else if ((t = e.target.closest("[data-cart-dec]"))) {
        var j = +t.getAttribute("data-cart-dec");
        cart.setQty(j, (cart.items()[j] || { qty: 1 }).qty - 1);
      } else if ((t = e.target.closest("[data-cart-remove]"))) {
        cart.remove(+t.getAttribute("data-cart-remove"));
      } else if (e.target.closest("[data-cart-checkout]")) {
        toast("Demo: checkout-ul nu este activ. Mulțumim!");
      } else if (e.target.closest("[data-mc-close-link]")) {
        closeLayers();
      }
    });
  }

  /* =========================================================
     Interacțiuni globale
     ========================================================= */
  /* Quick-add cu mini-selector de mărime — global (home, colecție, PDP, upsell coș) */
  var qaPop = null, qaTrigger = null;
  function needsSizePop(p) {
    /* huse & seturi → direct; adult/kids cu mai multe mărimi → alege mărimea */
    return (p.sizes === "adult" || p.sizes === "kids") && p.sizeList && p.sizeList.length > 1;
  }
  function closeQuickPop(refocus) {
    if (!qaPop) return;
    var t = qaTrigger;
    if (t) t.setAttribute("aria-expanded", "false");
    qaPop.remove();
    qaPop = null;
    qaTrigger = null;
    if (refocus && t) { try { t.focus(); } catch (e) { /* noop */ } }
  }
  function openQuickPop(qa, p) {
    var host = qa.closest(".mc-card-media, .mc-upsell-row");
    if (!host) { cart.add(p.handle); toast("Adăugat în coș: " + p.title); return; }
    var pop = document.createElement("div");
    pop.className = "qa-pop";
    pop.setAttribute("role", "dialog");
    pop.setAttribute("aria-label", "Alege mărimea pentru " + p.title);
    pop.setAttribute("data-handle", p.handle);
    pop.innerHTML = '<p class="micro">Alege mărimea</p><div class="qa-sizes">' +
      p.sizeList.map(function (s) {
        return '<button type="button" data-qa-size="' + esc(s) + '">' + esc(s) + "</button>";
      }).join("") + "</div>";
    host.appendChild(pop);
    qaPop = pop;
    qaTrigger = qa;
    qa.setAttribute("aria-expanded", "true");
    requestAnimationFrame(function () { pop.classList.add("in"); });
    var first = $("button", pop);
    if (first) setTimeout(function () { first.focus(); }, 40);
  }

  function bindGlobal() {
    /* deschidere layere + quick-add (delegare pe document) */
    document.addEventListener("click", function (e) {
      var open = e.target.closest("[data-mc-open]");
      if (open) { openLayer(open.getAttribute("data-mc-open")); return; }
      if (e.target.closest("[data-mc-close]")) { closeLayers(); return; }
      var burger = e.target.closest(".mc-burger");
      if (burger) { openLayer("drawer"); return; }
      if (e.target.closest("[data-mc-account]")) {
        toast("Demo: contul clienților va fi disponibil în curând.");
        return;
      }
      /* linkurile placeholder din footer nu sar la începutul paginii */
      if (e.target.closest('.mc-footer a[href="#"]')) { e.preventDefault(); return; }
      /* mărime aleasă din popover */
      var sizeBtn = e.target.closest("[data-qa-size]");
      if (sizeBtn && qaPop) {
        var ph = qaPop.getAttribute("data-handle");
        var pp = product(ph);
        var size = sizeBtn.getAttribute("data-qa-size");
        if (pp) {
          cart.add(ph, { size: size });
          toast("Adăugat în coș: " + pp.title + " — " + size);
        }
        closeQuickPop(false);
        return;
      }
      var qa = e.target.closest("[data-quick-add]");
      if (qa && !e.defaultPrevented) {
        var h = qa.getAttribute("data-handle");
        var p = product(h);
        if (!p) return;
        if (needsSizePop(p)) {
          if (qaTrigger === qa) { closeQuickPop(false); return; }
          closeQuickPop(false);
          openQuickPop(qa, p);
        } else {
          closeQuickPop(false);
          cart.add(h);
          toast("Adăugat în coș: " + p.title);
        }
        return;
      }
      /* click în afară închide popover-ul */
      if (qaPop && !e.target.closest(".qa-pop")) closeQuickPop(false);
    });
    var scrim = $(".mc-scrim");
    if (scrim) scrim.addEventListener("click", function () { closeLayers(); });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (qaPop) { closeQuickPop(true); return; }
      closeLayers();
    });

    /* umbră header la scroll */
    var header = $(".mc-header");
    if (header) {
      var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 4); };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  /* =========================================================
     renderChrome
     ========================================================= */
  var chromeDone = false;
  function renderChrome() {
    if (chromeDone) return;
    var headerHost = $("#mc-header");
    var footerHost = $("#mc-footer");
    if (headerHost) {
      chromeDone = true;
      headerHost.innerHTML = tplAnnounce() + tplHeader() + tplSearch() + tplDrawer() + tplCartDrawer() + '<div class="mc-scrim"></div>';
      /* skip-link ca prim element din body */
      if (!$(".skip-link")) {
        var skip = document.createElement("a");
        skip.className = "skip-link";
        skip.href = "#main";
        skip.textContent = "Sari la conținut";
        document.body.insertBefore(skip, document.body.firstChild);
      }
      bindMegaMenu();
      bindDrawer();
      bindSearch();
      bindCart();
      renderCartUI();
    }
    if (footerHost) footerHost.innerHTML = tplFooter();
    bindGlobal();
    sweepBrokenImages();
  }

  /* =========================================================
     Export + auto-init
     ========================================================= */
  window.MC = {
    icons: MC_ICONS,
    icon: icon,
    money: money,
    stars: stars,
    esc: esc,
    countText: countText,
    badgeClass: badgeClass,
    hydrateIcons: hydrateIcons,
    trapFocus: trapFocus,
    releaseTrap: releaseTrap,
    productCard: productCard,
    renderChrome: renderChrome,
    cart: cart,
    toast: toast,
    initReveal: initReveal,
    placeholderURI: placeholderURI,
    sweepBrokenImages: sweepBrokenImages
  };

  installImageFallback();

  function boot() {
    renderChrome();
    initReveal();
    sweepBrokenImages();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
