/* =========================================================
   MON CHÉRIE — home.js
   Populează homepage-ul din catalog (data.js) prin API-ul MC:
   hero float-card, categorii, bestsellers rail, promo 4=3,
   povestea catifelei, modele noi, recenzii, newsletter.
   ========================================================= */
(function () {
  "use strict";
  var MC = window.MC;
  if (!MC || typeof MC_PRODUCTS === "undefined") return;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function toneOf(o) { return ((o && o.tone) || ["#EAD9D5", "#8A7F72"]).join(","); }
  /* Adaugă .rv + index de stagger pe o listă de noduri */
  function stagger(nodes, mod) {
    nodes.forEach(function (el, i) {
      el.classList.add("rv");
      el.style.setProperty("--rv-i", String(mod ? i % mod : i));
    });
  }

  /* Iconițe declarate în HTML prin data-mc-icon */
  $$("[data-mc-icon]").forEach(function (el) {
    el.innerHTML = MC.icon(el.getAttribute("data-mc-icon"));
  });

  /* ---------- 1. Hero — card plutitor produs ---------- */
  var heroP = mcProduct("trening-din-catifea");
  var floatHost = $("#hero-float");
  if (floatHost && heroP) {
    floatHost.innerHTML =
      '<a class="hero-float" href="product.html?p=' + encodeURIComponent(heroP.handle) + '" data-tone="' + esc(toneOf(heroP)) + '">' +
        '<img src="' + esc(heroP.images[0]) + '" alt="" loading="lazy">' +
        "<span>" +
          '<span class="hero-float-kicker">' + esc(heroP.badge || "Bestseller") + "</span>" +
          '<span class="hero-float-title">' + esc(heroP.title) + "</span>" +
          '<span class="hero-float-price">' + MC.money(heroP.price) +
            (heroP.compareAt ? "<s>" + MC.money(heroP.compareAt) + "</s>" : "") +
          "</span>" +
        "</span>" +
        '<span class="hero-float-arrow" aria-hidden="true">' + MC.icon("arrow-right") + "</span>" +
      "</a>";
  }

  /* ---------- 3. Categorii — grilă asimetrică ---------- */
  var CATS = [
    { c: "tricouri-dama",    label: "Damă",       cls: "cat-tile--lead" },
    { c: "tricouri-barbati", label: "Bărbați" },
    { c: "tricouri-copii",   label: "Copii" },
    { c: "treninguri",       label: "Treninguri" },
    { c: "tricouri-cupluri", label: "Cupluri" },
    { c: "huse-marble",      label: "Accesorii",  cls: "cat-tile--wide" }
  ];
  var catsHost = $("#cats-grid");
  if (catsHost) {
    catsHost.innerHTML = CATS.map(function (k) {
      var col = MC_COLLECTIONS[k.c];
      if (!col) return "";
      var big = !!k.cls;
      return '<a class="cat-tile' + (k.cls ? " " + k.cls : "") + '" href="collection.html?c=' + encodeURIComponent(k.c) + '" data-tone="' + esc(toneOf(col)) + '">' +
        '<img src="' + esc(col.img) + '" alt="' + esc(col.title) + '" loading="lazy">' +
        '<span class="cat-overlay" aria-hidden="true"></span>' +
        '<span class="cat-body">' +
          '<span class="cat-title">' + esc(k.label) + "</span>" +
          (big ? '<span class="cat-sub">' + esc(col.sub) + "</span>" : "") +
          '<span class="cat-link">Descoperă' + MC.icon("arrow-right") + "</span>" +
        "</span>" +
      "</a>";
    }).join("");
    stagger($$(".cat-tile", catsHost));
  }

  /* ---------- 4. Bestsellers — badge Bestseller/Favorit + rating mare ---------- */
  function isStarBadge(p) { return !!p.badge && /bestseller|favorit/i.test(p.badge); }
  var bestHost = $("#best-rail");
  if (bestHost) {
    var pool = MC_PRODUCTS.filter(function (p) { return isStarBadge(p) || p.rating >= 4.8; });
    pool.sort(function (a, b) {
      var d = (isStarBadge(b) ? 1 : 0) - (isStarBadge(a) ? 1 : 0);
      if (d) return d;
      if (b.rating !== a.rating) return b.rating - a.rating;
      return b.reviews - a.reviews;
    });
    /* Flagship-ul deschide rail-ul */
    var best = pool.filter(function (p) { return p.handle !== "trening-din-catifea"; });
    if (heroP) best.unshift(heroP);
    best = best.slice(0, 8);
    bestHost.innerHTML = best.map(MC.productCard).join("");
    stagger($$(".mc-card", bestHost), 8);
    bindRail(bestHost, $("#best-prev"), $("#best-next"));
  }

  function bindRail(rail, prev, next) {
    function step() {
      var card = rail.firstElementChild;
      var gap = parseFloat(getComputedStyle(rail).columnGap) || 18;
      var w = card ? card.getBoundingClientRect().width + gap : rail.clientWidth * .8;
      return Math.max(w, Math.min(w * 2, rail.clientWidth)); /* ~2 carduri per click */
    }
    function update() {
      var max = rail.scrollWidth - rail.clientWidth - 6;
      if (prev) prev.disabled = rail.scrollLeft <= 6; /* toleranță pentru snap/padding */
      if (next) next.disabled = rail.scrollLeft >= max;
    }
    if (prev) prev.addEventListener("click", function () { rail.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { rail.scrollBy({ left: step(), behavior: "smooth" }); });
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------- 5. Promo 4=3 — cele 3 mecanici de preț ---------- */
  var promoHost = $("#promo-list");
  if (promoHost && typeof MC_PROMOS !== "undefined") {
    var mechanics = (MC_PROMOS.bundles || []).filter(function (b) { return b.id !== "tee4for3"; }).slice(0, 3);
    promoHost.innerHTML = mechanics.map(function (b, i) {
      return '<li class="rv" style="--rv-i:' + i + '">' +
        '<span class="promo-num" aria-hidden="true">0' + (i + 1) + "</span>" +
        '<span class="promo-label">' + esc(b.label) + "</span>" +
      "</li>";
    }).join("");
  }

  /* ---------- 6. Povestea catifelei ---------- */
  if (heroP) {
    var storyMedia = $("#story-media");
    if (storyMedia) {
      storyMedia.setAttribute("data-tone", toneOf(heroP));
      storyMedia.innerHTML =
        '<img src="' + esc(heroP.images[1] || heroP.images[0]) + '" alt="' + esc(heroP.title) + ' — detaliu" loading="lazy">' +
        (heroP.badge ? '<span class="mc-badge mc-badge--gold">' + esc(heroP.badge) + "</span>" : "");
    }
    var storyDesc = $("#story-desc");
    if (storyDesc) {
      var col = (typeof MC_COLLECTIONS !== "undefined" && MC_COLLECTIONS["trening-catifea"]) || null;
      storyDesc.textContent = (col && col.desc) || heroP.desc;
    }
    var quote = (typeof MC_REVIEWS !== "undefined" && MC_REVIEWS[0]) || null;
    var storyQuote = $("#story-quote");
    if (storyQuote && quote) {
      storyQuote.innerHTML =
        MC.stars(quote.stars) +
        "<p>„" + esc(quote.text) + "”</p>" +
        "<footer>" + esc(quote.name) + (quote.verified ? " · Achiziție verificată" : "") + "</footer>";
    }
    var storyCta = $("#story-cta");
    if (storyCta) storyCta.textContent = "Descoperă treningul — " + MC.money(heroP.price);
  }

  /* ---------- 7. Modele noi — 4 produse ---------- */
  var freshHost = $("#fresh-grid");
  if (freshHost) {
    var fresh = mcByCollection("modele-noi").slice(0, 4);
    freshHost.innerHTML = fresh.map(MC.productCard).join("");
    stagger($$(".mc-card", freshHost), 4);
  }

  /* ---------- 8. Social proof — 3 recenzii ---------- */
  var proofHost = $("#proof-grid");
  if (proofHost && typeof MC_REVIEWS !== "undefined") {
    var starsHead = $("#proof-stars");
    if (starsHead) starsHead.innerHTML = MC.stars(4.8);
    var picks = [MC_REVIEWS[1], MC_REVIEWS[3], MC_REVIEWS[5]].filter(Boolean);
    proofHost.innerHTML = picks.map(function (r, i) {
      return '<article class="proof-card rv" style="--rv-i:' + i + '">' +
        MC.stars(r.stars) +
        '<h3 class="proof-title">' + esc(r.title) + "</h3>" +
        '<p class="proof-text">„' + esc(r.text) + '”</p>' +
        '<footer class="proof-meta">' +
          '<span class="proof-name">' + esc(r.name) + "</span>" +
          (r.verified ? '<span class="proof-verified">' + MC.icon("check") + "Achiziție verificată</span>" : "") +
        "</footer>" +
      "</article>";
    }).join("");
  }

  /* ---------- 9. Newsletter — validare demo ---------- */
  var nlForm = $("#nl-form");
  var nlInput = $("#nl-email");
  var nlMsg = $("#nl-msg");
  if (nlForm && nlInput && nlMsg) {
    nlForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = nlInput.value.trim();
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
      if (!ok) {
        nlInput.setAttribute("aria-invalid", "true");
        nlMsg.className = "nl-msg is-error";
        nlMsg.textContent = "Hmm, adresa nu pare validă. Mai încearcă o dată.";
        nlInput.focus();
        return;
      }
      nlInput.removeAttribute("aria-invalid");
      nlForm.hidden = true;
      nlMsg.className = "nl-msg is-ok";
      nlMsg.innerHTML = MC.icon("check") + "<span>Mulțumim! Codul de 10% ajunge imediat pe " + esc(v) + ". (demo)</span>";
      MC.toast("Bun venit în familia Mon Chérie!");
    });
    nlInput.addEventListener("input", function () {
      if (nlInput.getAttribute("aria-invalid")) {
        nlInput.removeAttribute("aria-invalid");
        nlMsg.className = "nl-msg";
        nlMsg.textContent = "";
      }
    });
  }

  /* Reveal + fallback pentru tot ce am randat */
  MC.initReveal(document);
  MC.sweepBrokenImages(document);
})();
