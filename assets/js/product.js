/* =========================================================
   MON CHÉRIE — product.js
   Pagina de produs (?p=handle): galerie cu zoom, buy-box
   CRO, bundle, accordion, recenzii, „ai văzut recent",
   sticky ATC mobil. Folosește window.MC din shared.js.
   ========================================================= */
(function () {
  "use strict";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var MC = window.MC || {};
  var money = MC.money || function (v) { return v + " lei"; };
  var icon = MC.icon || function () { return ""; };
  var stars = MC.stars || function () { return ""; };
  var PROMOS = (typeof MC_PROMOS !== "undefined") ? MC_PROMOS : { bundles: [], freeShippingThreshold: 200 };
  var COLLECTIONS = (typeof MC_COLLECTIONS !== "undefined") ? MC_COLLECTIONS : {};
  var REVIEWS = (typeof MC_REVIEWS !== "undefined") ? MC_REVIEWS : [];

  /* ---------- Produs curent din ?p= ---------- */
  var DEFAULT_HANDLE = "trening-din-catifea";
  var handle = DEFAULT_HANDLE;
  try {
    var q = new URLSearchParams(location.search).get("p");
    if (q) handle = q;
  } catch (e) { /* noop */ }
  var P = (typeof mcProduct === "function") ? (mcProduct(handle) || mcProduct(DEFAULT_HANDLE)) : null;
  /* handle invalid → fallback vizibil (notă + URL corectat), nu tăcut */
  var invalidHandle = !!(P && handle !== P.handle);
  if (invalidHandle) {
    try { history.replaceState(null, "", location.pathname + "?p=" + encodeURIComponent(P.handle)); } catch (e) { /* file:// */ }
  }

  var gallery = $("#pdp-gallery");
  var buybox = $("#pdp-buybox");
  if (!P || !gallery || !buybox) {
    if (buybox) {
      buybox.innerHTML = '<div class="pdp-notfound"><h1 class="h2">Produsul nu a fost găsit</h1>' +
        '<p>Linkul poate fi greșit sau produsul nu mai există.</p>' +
        '<a class="btn btn-primary" href="collection.html?c=all">Vezi toate produsele</a></div>';
    }
    return;
  }

  document.title = P.title + " — " + money(P.price) + " · Mon Chérie";

  var COL = COLLECTIONS[P.collection] || { title: "Colecție" };

  /* Recenziile sunt un pool global — filtrează-le pe cele nepotrivite contextului */
  var PCOLS = (P.collections || [P.collection]).join(" ");
  var isVelvetProduct = /trening|catifea/i.test(P.handle + " " + PCOLS);
  if (!isVelvetProduct) {
    REVIEWS = REVIEWS.filter(function (r) { return !/catifea|trening|vișin/i.test(r.title + " " + r.text); });
  }
  if (P.sizes === "case" || P.sizes === "set") {
    REVIEWS = REVIEWS.filter(function (r) { return !/mărime/i.test(r.title + " " + r.text); });
  }

  var IMAGES = P.images || [];
  var COLORS = P.colors || [];
  var SIZES = P.sizeList || [];
  var UP = (P.upsells && P.upsells[0] && typeof mcProduct === "function") ? mcProduct(P.upsells[0]) : null;
  var TONE = (P.tone || []).join(",");
  var sale = P.compareAt && P.compareAt > P.price;

  var state = { colorIdx: 0, size: null, qty: 1, bundle: false };

  /* ---------- Promo-hint contextual ---------- */
  function promoHint() {
    var cols = P.collections || [P.collection];
    var isTrening = cols.some(function (c) { return /trening/.test(c); });
    var isTee = cols.some(function (c) { return /tricou/.test(c); }) && P.sizes !== "set";
    var byId = {};
    (PROMOS.bundles || []).forEach(function (b) { byId[b.id] = b; });
    if (isTrening && byId.trening10) return byId.trening10.label;
    if (isTee) {
      var onlyWhite = COLORS.length && COLORS.every(function (c) { return /alb/i.test(c.name); });
      if (onlyWhite && byId.white3) return byId.white3.label;
      if (byId.tee4for3) return byId.tee4for3.label + " — se combină între modele";
    }
    return "Transport gratuit la comenzi peste " + money(PROMOS.freeShippingThreshold || 200);
  }

  /* ---------- Badge helper — sursa unică din shared.js ---------- */
  var badgeClass = MC.badgeClass || function () { return ""; };

  /* =========================================================
     Galerie
     ========================================================= */
  function renderGallery() {
    var slides = IMAGES.map(function (src, i) {
      return '<div class="pdp-slide" data-tone="' + esc(TONE) + '">' +
        '<img src="' + esc(src) + '" alt="' + esc(P.title) + ' — imagine ' + (i + 1) + '"' + (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') + ">" +
        "</div>";
    }).join("");
    var thumbs = IMAGES.map(function (src, i) {
      return '<button type="button" class="pdp-thumb' + (i === 0 ? " active" : "") + '" data-goto="' + i + '" data-tone="' + esc(TONE) + '" aria-pressed="' + (i === 0) + '" aria-label="Imaginea ' + (i + 1) + '">' +
        '<img src="' + esc(src) + '" alt="" loading="lazy">' +
        "</button>";
    }).join("");
    var dots = IMAGES.map(function (_, i) {
      return '<button type="button" class="pdp-dot' + (i === 0 ? " active" : "") + '" data-goto="' + i + '" aria-label="Imaginea ' + (i + 1) + '"></button>';
    }).join("");
    var pct = sale ? Math.round((1 - P.price / P.compareAt) * 100) : 0;
    var single = IMAGES.length < 2; /* produsele reale au adesea o singură imagine */
    gallery.classList.toggle("pdp-gallery--single", single);
    gallery.innerHTML =
      (single ? "" : '<div class="pdp-thumbs" role="group" aria-label="Miniaturi">' + thumbs + "</div>") +
      '<div class="pdp-stage">' +
        '<div class="pdp-track" tabindex="0" aria-label="Imagini produs — derulează">' + slides + "</div>" +
        (P.badge ? '<span class="mc-badge' + badgeClass(P.badge) + '">' + esc(P.badge) + "</span>" : "") +
        (sale && !/^-/.test(P.badge || "") ? '<span class="mc-badge mc-badge--sale' + (P.badge ? " pdp-badge-2" : "") + '">−' + pct + "%</span>" : "") +
        (single ? "" : '<div class="pdp-dots" aria-hidden="true">' + dots + "</div>") +
      "</div>";
  }

  var track, activeIdx = 0;
  function goTo(i, smooth) {
    if (!track) return;
    i = Math.max(0, Math.min(IMAGES.length - 1, i));
    track.scrollTo({ left: i * track.clientWidth, behavior: smooth === false ? "auto" : "smooth" });
  }
  function markActive(i) {
    if (i === activeIdx) return;
    activeIdx = i;
    $$(".pdp-thumb", gallery).forEach(function (t, j) {
      t.classList.toggle("active", j === i);
      t.setAttribute("aria-pressed", j === i ? "true" : "false");
    });
    $$(".pdp-dot", gallery).forEach(function (d, j) { d.classList.toggle("active", j === i); });
  }
  function bindGallery() {
    track = $(".pdp-track", gallery);
    gallery.addEventListener("click", function (e) {
      var b = e.target.closest("[data-goto]");
      if (b) goTo(+b.getAttribute("data-goto"));
    });
    var raf = null;
    track.addEventListener("scroll", function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        if (track.clientWidth) markActive(Math.round(track.scrollLeft / track.clientWidth));
      });
    }, { passive: true });

    /* Zoom la hover (doar pointer fin) */
    if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
      track.addEventListener("pointermove", function (e) {
        var slide = e.target.closest(".pdp-slide");
        if (!slide) return;
        var img = $("img", slide);
        var r = slide.getBoundingClientRect();
        img.style.transformOrigin =
          ((e.clientX - r.left) / r.width * 100).toFixed(1) + "% " +
          ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%";
        img.classList.add("is-zoom");
      });
      track.addEventListener("pointerleave", function () {
        $$(".pdp-slide img", track).forEach(function (img) { img.classList.remove("is-zoom"); });
      });
    }
  }

  /* =========================================================
     Buy-box
     ========================================================= */
  var sizeLabels = { adult: "Mărime", kids: "Mărime (vârstă)", set: "Configurație set", "case": "Model telefon" };

  function tplBundle() {
    if (!UP) return "";
    var combined = P.price + UP.price;
    var bundlePrice = Math.round(combined * 0.9);
    return '<div class="pdp-bundle">' +
      '<span class="micro">Completează setul — <em>economisești 10%</em></span>' +
      '<div class="pdp-bundle-row">' +
        '<img src="' + esc(IMAGES[0] || "") + '" alt="" data-tone="' + esc(TONE) + '" loading="lazy">' +
        '<span class="pdp-bundle-plus" aria-hidden="true">+</span>' +
        '<img src="' + esc((UP.images && UP.images[0]) || "") + '" alt="" data-tone="' + esc((UP.tone || []).join(",")) + '" loading="lazy">' +
        '<span class="pdp-bundle-info">' +
          '<span class="pdp-bundle-names">' + esc(P.title) + " + " + esc(UP.title) + "</span>" +
          '<span class="pdp-bundle-price"><s>' + money(combined) + "</s><b>" + money(bundlePrice) + "</b></span>" +
        "</span>" +
      "</div>" +
      '<label class="pdp-bundle-check"><input type="checkbox" id="pdp-bundle-cb"><span>Adaugă ambele în coș (−10% aplicat în coș)</span></label>' +
      "</div>";
  }

  function tplAccordion() {
    var d = P.details || {};
    var items = [
      { id: "desc", title: "Descriere", open: true, html: "<p>" + esc(P.desc || "") + "</p>" },
      { id: "care", title: "Material & Îngrijire", open: false, html:
        "<dl>" +
        (d.material ? "<dt>Material</dt><dd>" + esc(d.material) + "</dd>" : "") +
        (d.fit ? "<dt>Croială</dt><dd>" + esc(d.fit) + "</dd>" : "") +
        (d.care ? "<dt>Îngrijire</dt><dd>" + esc(d.care) + "</dd>" : "") +
        "</dl>" },
      { id: "ship", title: "Livrare & Retur", open: false, html:
        "<ul>" +
        "<li>" + icon("truck") + "<span>" + esc(PROMOS.shipping || "Livrare în 24–48h prin curier rapid") + "</span></li>" +
        "<li>" + icon("return") + "<span>" + esc(PROMOS.returns || "Retur gratuit în 30 de zile") + "</span></li>" +
        "<li>" + icon("tag") + "<span>Transport gratuit la comenzi peste " + esc(money(PROMOS.freeShippingThreshold || 200)) + "</span></li>" +
        "<li>" + icon("shield") + "<span>Plată securizată: card, PayPal sau ramburs la livrare</span></li>" +
        "</ul>" }
    ];
    return '<div class="pdp-acc">' + items.map(function (it) {
      return '<div class="pdp-acc-item' + (it.open ? " open" : "") + '">' +
        /* + / − comutate din CSS după starea .open (nu „×”) */
        '<h3><button type="button" class="pdp-acc-btn" aria-expanded="' + it.open + '" aria-controls="acc-' + it.id + '">' +
          esc(it.title) + '<span class="pdp-acc-ic" aria-hidden="true">' + icon("plus") + icon("minus") + "</span></button></h3>" +
        '<div class="pdp-acc-panel" id="acc-' + it.id + '"' + (it.open ? "" : ' aria-hidden="true"') + '><div class="pdp-acc-inner"><div>' + it.html + "</div></div></div>" +
      "</div>";
    }).join("") + "</div>";
  }

  var APPLE_LOGO = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>';
  var GOOGLE_LOGO = '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';

  function renderBuybox() {
    var showGuide = P.sizes === "adult" || P.sizes === "kids";
    buybox.innerHTML =
      /* notă pentru handle invalid (fallback pe bestseller) */
      (invalidHandle ? '<p class="pdp-note" role="status">Produsul „' + esc(handle) + '” nu există — îți arătăm în schimb bestsellerul nostru.</p>' : "") +

      /* breadcrumb */
      '<nav class="pdp-crumbs" aria-label="Breadcrumb"><ol>' +
        '<li><a href="index.html">Acasă</a></li><li class="sep" aria-hidden="true">›</li>' +
        '<li><a href="collection.html?c=' + esc(P.collection) + '">' + esc(COL.title) + "</a></li>" +
        '<li class="sep" aria-hidden="true">›</li>' +
        '<li aria-current="page">' + esc(P.title) + "</li>" +
      "</ol></nav>" +

      /* titlu + rating */
      '<h1 class="pdp-title">' + esc(P.title) + "</h1>" +
      '<a class="pdp-rating" href="#pdp-reviews">' + stars(P.rating) +
        "<span><u>" + esc(P.rating) + " (" + esc(P.reviews) + " recenzii)</u></span></a>" +

      /* preț */
      '<div class="pdp-price">' +
        '<span class="pdp-price-now' + (sale ? " is-sale" : "") + '">' + money(P.price) + "</span>" +
        (sale ? '<s class="pdp-price-was">' + money(P.compareAt) + "</s>" +
                '<span class="pdp-save">Economisești ' + money(P.compareAt - P.price) + "</span>" : "") +
      "</div>" +

      /* promo-hint contextual */
      '<p class="pdp-promo">' + icon("tag") + "<span>" + esc(promoHint()) + "</span></p>" +

      /* culori */
      (COLORS.length ? '<div class="pdp-block">' +
        '<div class="pdp-block-label"><span>Culoare: <b data-color-name>' + esc(COLORS[0].name) + "</b></span></div>" +
        '<div class="pdp-colors" role="group" aria-label="Alege culoarea">' +
          COLORS.map(function (c, i) {
            return '<button type="button" class="pdp-color' + (i === 0 ? " active" : "") + '" aria-pressed="' + (i === 0) +
              '" data-color="' + i + '" style="background:' + esc(c.hex) + '" title="' + esc(c.name) + '" aria-label="' + esc(c.name) + '"></button>';
          }).join("") +
        "</div></div>" : "") +

      /* mărimi */
      (SIZES.length ? '<div class="pdp-block">' +
        '<div class="pdp-block-label"><span>' + esc(sizeLabels[P.sizes] || "Mărime") + "</span>" +
          (showGuide ? '<button type="button" class="pdp-guide-link" data-guide>Ghid mărimi</button>' : "") +
        "</div>" +
        '<div class="pdp-sizes" role="group" aria-label="Alege mărimea">' +
          SIZES.map(function (s) {
            return '<button type="button" class="pdp-size" aria-pressed="false" data-size="' + esc(s) + '">' + esc(s) + "</button>";
          }).join("") +
        "</div>" +
        '<p class="pdp-size-msg" role="alert" data-size-msg>' + icon("tag") + "Te rugăm să alegi " + (P.sizes === "case" ? "modelul de telefon" : "o mărime") + " mai întâi.</p>" +
      "</div>" : "") +

      /* qty + ATC */
      '<div class="pdp-buyrow">' +
        '<span class="mc-qty">' +
          '<button type="button" data-qty-dec aria-label="Scade cantitatea">' + icon("minus") + "</button>" +
          '<output data-qty aria-label="Cantitate" aria-live="polite">1</output>' +
          '<button type="button" data-qty-inc aria-label="Crește cantitatea">' + icon("plus") + "</button>" +
        "</span>" +
        '<button type="button" class="btn btn-primary pdp-atc" data-atc>Adaugă în coș — <span data-atc-price>' + money(P.price) + "</span></button>" +
      "</div>" +

      /* express pay mock */
      '<div class="pdp-express" aria-label="Plată rapidă (demo)">' +
        '<button type="button" class="pdp-pay pdp-pay--apple" data-express aria-label="Plătește cu Apple Pay (demo)">' + APPLE_LOGO + "<span>Pay</span></button>" +
        '<button type="button" class="pdp-pay pdp-pay--google" data-express aria-label="Plătește cu Google Pay (demo)">' + GOOGLE_LOGO + "<span>Pay</span></button>" +
      "</div>" +

      /* microcopy livrare */
      '<ul class="pdp-ship">' +
        "<li>" + icon("truck") + "Livrare 24–48h</li>" +
        "<li>" + icon("return") + "Retur gratuit 30 zile</li>" +
        "<li>" + icon("shield") + "Transport gratuit &gt;" + esc(money(PROMOS.freeShippingThreshold || 200)) + "</li>" +
      "</ul>" +

      /* bundle + accordion */
      tplBundle() +
      tplAccordion();
  }

  /* ---------- Preț dinamic ATC + sticky bar ---------- */
  function atcTotal() {
    var t = P.price * state.qty;
    if (state.bundle && UP) {
      t = Math.round((P.price + UP.price) * 0.9) + P.price * (state.qty - 1);
    }
    return t;
  }
  function updatePrice() {
    var el = $("[data-atc-price]", buybox);
    if (el) el.textContent = money(atcTotal());
    var atc = $("[data-atc]", buybox);
    if (atc) atc.firstChild.textContent = state.bundle ? "Adaugă setul — " : "Adaugă în coș — ";
    var sEl = $("[data-sticky-price]");
    if (sEl) {
      sEl.innerHTML = esc(money(atcTotal())) +
        (sale && !state.bundle && state.qty === 1 ? "<s>" + esc(money(P.compareAt)) + "</s>" : "");
    }
  }

  /* ---------- Validare mărime + ATC ---------- */
  function needSize() { return SIZES.length > 0 && !state.size; }
  function flagSizeMissing(scrollTo) {
    var wrap = $(".pdp-sizes", buybox);
    var msg = $("[data-size-msg]", buybox);
    if (msg) msg.classList.add("show");
    if (wrap) {
      wrap.classList.remove("pdp-shake");
      void wrap.offsetWidth;
      wrap.classList.add("pdp-shake");
      if (scrollTo) wrap.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  function doATC() {
    if (needSize()) { flagSizeMissing(false); return false; }
    var color = COLORS[state.colorIdx] ? COLORS[state.colorIdx].name : "";
    /* bundle: ambele piese marcate cu același id → shared.js aplică −10% în coș */
    var bundleId = (state.bundle && UP) ? "set-" + P.handle : "";
    MC.cart.add(P.handle, { color: color, size: state.size || "", qty: state.qty, bundle: bundleId });
    if (state.bundle && UP) {
      /* upsell-ul moștenește mărimea aleasă la produsul principal (dacă există) */
      var upSize = (UP.sizeList || []).indexOf(state.size) !== -1 ? state.size : "";
      MC.cart.add(UP.handle, { qty: 1, size: upSize, bundle: bundleId });
    }
    MC.cart.open();
    return true;
  }

  function bindBuybox() {
    buybox.addEventListener("click", function (e) {
      var t;
      /* culoare → schimbă imaginea activă */
      if ((t = e.target.closest("[data-color]"))) {
        state.colorIdx = +t.getAttribute("data-color");
        $$(".pdp-color", buybox).forEach(function (b, i) {
          b.classList.toggle("active", i === state.colorIdx);
          b.setAttribute("aria-pressed", i === state.colorIdx ? "true" : "false");
        });
        var nameEl = $("[data-color-name]", buybox);
        if (nameEl) nameEl.textContent = COLORS[state.colorIdx].name;
        if (IMAGES.length > 1) goTo(state.colorIdx % IMAGES.length);
        return;
      }
      /* mărime */
      if ((t = e.target.closest("[data-size]"))) {
        state.size = t.getAttribute("data-size");
        $$(".pdp-size", buybox).forEach(function (b) {
          var on = b === t;
          b.classList.toggle("active", on);
          b.setAttribute("aria-pressed", on ? "true" : "false");
        });
        var msg = $("[data-size-msg]", buybox);
        if (msg) msg.classList.remove("show");
        return;
      }
      /* qty */
      if (e.target.closest("[data-qty-inc]") || e.target.closest("[data-qty-dec]")) {
        state.qty = Math.max(1, Math.min(9, state.qty + (e.target.closest("[data-qty-inc]") ? 1 : -1)));
        var out = $("[data-qty]", buybox);
        if (out) out.textContent = state.qty;
        updatePrice();
        return;
      }
      /* ATC */
      if (e.target.closest("[data-atc]")) { doATC(); return; }
      /* express pay mock */
      if (e.target.closest("[data-express]")) {
        if (needSize()) { flagSizeMissing(false); return; }
        MC.toast("Demo: plata expres nu este activă. Folosește coșul.");
        return;
      }
      /* ghid mărimi */
      if (e.target.closest("[data-guide]")) { openGuide(); return; }
      /* accordion */
      if ((t = e.target.closest(".pdp-acc-btn"))) {
        var item = t.closest(".pdp-acc-item");
        var open = !item.classList.contains("open");
        item.classList.toggle("open", open);
        t.setAttribute("aria-expanded", open ? "true" : "false");
        var panel = $(".pdp-acc-panel", item);
        if (panel) { if (open) panel.removeAttribute("aria-hidden"); else panel.setAttribute("aria-hidden", "true"); }
        return;
      }
    });
    /* bundle checkbox */
    var cb = $("#pdp-bundle-cb", buybox);
    if (cb) cb.addEventListener("change", function () {
      state.bundle = cb.checked;
      updatePrice();
    });
  }

  /* =========================================================
     Ghid mărimi — modal
     ========================================================= */
  var modal = $("#pdp-modal");
  var lastFocus = null;
  function guideTable() {
    if (P.sizes === "kids") {
      var rows = [["2 ani", "92", "54"], ["4 ani", "104", "56"], ["6 ani", "116", "60"], ["8 ani", "128", "64"], ["10 ani", "140", "68"], ["12 ani", "152", "72"]];
      return '<table class="pdp-size-table"><thead><tr><th scope="col">Vârstă</th><th scope="col">Înălțime (cm)</th><th scope="col">Piept (cm)</th></tr></thead><tbody>' +
        rows.map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td>" + r[2] + "</td></tr>"; }).join("") +
        "</tbody></table>";
    }
    /* măsurători diferite pentru damă vs bărbați/unisex; doar mărimile din sizeList */
    var male = /barbat|unisex/i.test(P.handle + " " + PCOLS + " " + ((P.details || {}).fit || ""));
    var rows2 = male
      ? [["XS", "88–92", "72–76", "66"], ["S", "92–98", "76–82", "68"], ["M", "98–104", "82–88", "70"], ["L", "104–112", "88–96", "72"], ["XL", "112–120", "96–104", "74"], ["2XL", "120–128", "104–112", "76"]]
      : [["XS", "82–86", "62–66", "60"], ["S", "86–90", "66–70", "62"], ["M", "90–96", "70–76", "64"], ["L", "96–102", "76–82", "66"], ["XL", "102–110", "82–90", "68"], ["2XL", "110–118", "90–98", "70"]];
    var rows3 = rows2.filter(function (r) { return SIZES.indexOf(r[0]) !== -1; });
    if (!rows3.length) rows3 = rows2;
    return '<table class="pdp-size-table"><thead><tr><th scope="col">Mărime</th><th scope="col">' + (male ? "Piept" : "Bust") + ' (cm)</th><th scope="col">Talie (cm)</th><th scope="col">Lungime (cm)</th></tr></thead><tbody>' +
      rows3.map(function (r) { return "<tr><td>" + r.join("</td><td>") + "</td></tr>"; }).join("") +
      "</tbody></table>";
  }
  function openGuide() {
    if (!modal) return;
    var tip = REVIEWS.filter(function (r) { return /mărime în plus/i.test(r.text); })[0];
    modal.innerHTML =
      '<div class="pdp-modal-scrim" data-guide-close></div>' +
      '<div class="pdp-modal-panel" role="dialog" aria-modal="true" aria-labelledby="guide-title">' +
        '<button type="button" class="mc-icon-btn pdp-modal-close" data-guide-close aria-label="Închide ghidul de mărimi">' + icon("close") + "</button>" +
        '<h2 class="pdp-modal-title" id="guide-title">Ghid mărimi</h2>' +
        '<p class="pdp-modal-sub">Măsurători pe corp, în centimetri. Între două mărimi? Alege-o pe cea mare.</p>' +
        guideTable() +
        (tip ? '<div class="pdp-fit-tip">' + icon("heart") + "<div><b>Sfatul clienților despre fit</b>" +
          "„" + esc(tip.text.split(".")[0] + ".") + "” — " + esc(tip.name) + "</div></div>" : "") +
      "</div>";
    modal.hidden = false;
    document.documentElement.classList.add("mc-lock");
    lastFocus = document.activeElement;
    if (MC.trapFocus) MC.trapFocus($(".pdp-modal-panel", modal) || modal);
    var closeBtn = $(".pdp-modal-close", modal);
    if (closeBtn) closeBtn.focus();
  }
  function closeGuide() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    modal.innerHTML = "";
    if (MC.releaseTrap) MC.releaseTrap();
    document.documentElement.classList.remove("mc-lock");
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target.closest("[data-guide-close]")) closeGuide();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeGuide();
    });
  }

  /* =========================================================
     Sticky ATC mobil
     ========================================================= */
  function renderSticky() {
    var bar = $("#pdp-stickybar");
    if (!bar) return;
    bar.innerHTML =
      '<img src="' + esc(IMAGES[0] || "") + '" alt="" data-tone="' + esc(TONE) + '">' +
      '<span class="pdp-stickybar-info">' +
        '<span class="pdp-stickybar-title">' + esc(P.title) + "</span>" +
        '<span class="pdp-stickybar-price" data-sticky-price>' + money(P.price) +
          (sale ? "<s>" + money(P.compareAt) + "</s>" : "") + "</span>" +
      "</span>" +
      '<button type="button" class="btn btn-primary" data-sticky-atc>Adaugă în coș</button>';
    bar.addEventListener("click", function (e) {
      if (e.target.closest("[data-sticky-atc]")) {
        if (needSize()) { flagSizeMissing(true); return; }
        doATC();
      }
    });
    var atc = $("[data-atc]", buybox);
    if (atc && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        var en = entries[0];
        var passed = !en.isIntersecting && en.boundingClientRect.top < 0;
        bar.classList.toggle("show", passed);
        bar.setAttribute("aria-hidden", passed ? "false" : "true");
      }, { threshold: 0 });
      io.observe(atc);
    }
    if (MC.sweepBrokenImages) MC.sweepBrokenImages(bar);
  }

  /* =========================================================
     Sub fold: rail „Merge perfect cu"
     ========================================================= */
  function renderPairs() {
    var sec = $("#pdp-pairs");
    var rail = $("#pairs-rail");
    if (!sec || !rail || !MC.productCard) return;
    var ups = (P.upsells || []).map(function (h) { return mcProduct(h); }).filter(Boolean);
    if (!ups.length) return;
    rail.innerHTML = ups.map(function (u) { return MC.productCard(u); }).join("");
    sec.hidden = false;
    if (MC.sweepBrokenImages) MC.sweepBrokenImages(rail);
  }

  /* =========================================================
     Recenzii — sumar + distribuție plauzibilă + pool
     ========================================================= */
  function distCounts(rating, count) {
    var f5 = Math.min(.92, Math.max(.4, (rating - 3.55) / 1.5));
    var rest = 1 - f5;
    var fr = [f5, rest * .58, rest * .24, rest * .11, rest * .07];
    var counts = fr.map(function (x) { return Math.round(x * count); });
    var sum = counts.reduce(function (a, b) { return a + b; }, 0);
    counts[0] += count - sum;
    return counts; /* [5★, 4★, 3★, 2★, 1★] */
  }
  function revCard(r, hiddenExtra) {
    return '<article class="rev-card"' + (hiddenExtra ? " hidden data-rev-extra" : "") + ">" +
      '<div class="rev-card-head">' + stars(r.stars) + '<span class="rev-card-date">' + esc(r.date) + "</span></div>" +
      '<h3 class="rev-card-title">' + esc(r.title) + "</h3>" +
      '<p class="rev-card-text">' + esc(r.text) + "</p>" +
      '<p class="rev-card-who">' + esc(r.name) +
        (r.verified ? icon("shield") + '<span class="verified">Achiziție verificată</span>' : "") +
      "</p></article>";
  }
  function renderReviews() {
    var wrap = $("#rev-wrap");
    if (!wrap) return;
    var counts = distCounts(P.rating, P.reviews);
    var max = Math.max.apply(null, counts.concat([1]));
    var bars = counts.map(function (c, i) {
      var star = 5 - i;
      return '<div class="rev-bar"><span>' + star + "★</span>" +
        '<span class="rev-bar-track"><i style="width:' + Math.round(c / max * 100) + '%"></i></span>' +
        "<b>" + c + "</b></div>";
    }).join("");
    var visible = REVIEWS.slice(0, 4);
    var extra = REVIEWS.slice(4);
    wrap.innerHTML =
      '<div class="rev-grid">' +
        '<div class="rev-sum">' +
          '<div class="rev-score"><span class="rev-num">' + esc(P.rating) + "</span>" +
            '<span class="rev-score-meta">' + stars(P.rating) + "<br>" + esc(P.reviews) + " recenzii</span></div>" +
          '<div class="rev-bars">' + bars + "</div>" +
        "</div>" +
        "<div>" +
          '<div class="rev-list">' +
            visible.map(function (r) { return revCard(r, false); }).join("") +
            extra.map(function (r) { return revCard(r, true); }).join("") +
          "</div>" +
          (extra.length ? '<button type="button" class="btn btn-ghost rev-more" data-rev-more aria-expanded="false">Vezi mai multe recenzii</button>' : "") +
        "</div>" +
      "</div>";
    var more = $("[data-rev-more]", wrap);
    if (more) more.addEventListener("click", function () {
      var opened = more.getAttribute("aria-expanded") === "true";
      $$("[data-rev-extra]", wrap).forEach(function (c) { c.hidden = opened; });
      more.setAttribute("aria-expanded", opened ? "false" : "true");
      more.textContent = opened ? "Vezi mai multe recenzii" : "Afișează mai puțin";
    });
  }

  /* =========================================================
     Ai văzut recent — localStorage mc_recent
     ========================================================= */
  var RECENT_KEY = "mc_recent";
  function readRecent() {
    try {
      var a = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
      return Array.isArray(a) ? a : [];
    } catch (e) { return []; }
  }
  function renderRecent() {
    var sec = $("#pdp-recent");
    var rail = $("#recent-rail");
    var prev = readRecent()
      .filter(function (h) { return h !== P.handle && mcProduct(h); })
      .slice(0, 4);
    if (sec && rail && MC.productCard && prev.length) {
      rail.innerHTML = prev.map(function (h) { return MC.productCard(mcProduct(h)); }).join("");
      sec.hidden = false;
      if (MC.sweepBrokenImages) MC.sweepBrokenImages(rail);
    }
    /* scrie vizita curentă */
    try {
      var next = [P.handle].concat(readRecent().filter(function (h) { return h !== P.handle; })).slice(0, 5);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch (e) { /* file:// / private mode */ }
  }

  /* =========================================================
     Init
     ========================================================= */
  function init() {
    renderGallery();
    renderBuybox();
    bindGallery();
    bindBuybox();
    renderSticky();
    renderPairs();
    renderReviews();
    renderRecent();
    updatePrice();
    if (MC.sweepBrokenImages) MC.sweepBrokenImages(document);
    if (MC.initReveal) MC.initReveal(document);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
