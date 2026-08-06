/* =========================================================
   MON CHÉRIE — collection.js
   Pagina de colecție: hero din MC_COLLECTIONS, chips colecții
   înrudite (din același tab MC_MENU), toolbar sticky cu filtre
   client-side (culoare / mărime / preț / reduceri) + sortare,
   grilă cu MC.productCard + editorial break, quick-add cu
   mini-selector de mărime, URL shareable (replaceState).
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

  var SIZE_ORDER = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"];
  var SORTS = ["recomandate", "pret-asc", "pret-desc", "noutati", "rating"];
  /* CTA + imagine per promoție (editorial break) */
  var PROMO_CTA = {
    tee4for3: { href: "collection.html?c=tricouri-dama", label: "Alege tricourile" },
    white3: { href: "collection.html?c=tricouri-barbati", label: "Vezi tricourile albe" },
    color3: { href: "collection.html?c=modele-noi", label: "Vezi tricourile colorate" },
    trening10: { href: "collection.html?c=trening-1", label: "Vezi treningurile" }
  };
  var PROMO_IMG = { tee4for3: "tricouri-dama", white3: "tricouri-barbati", color3: "modele-noi", trening10: "trening-catifea" };

  function init() {
    if (!window.MC || typeof MC_COLLECTIONS === "undefined" || typeof mcByCollection !== "function") return;
    var countText = MC.countText;

    /* iconițe în shell-ul static */
    MC.hydrateIcons(document);

    /* ---------- Colecția curentă (?c=handle) ---------- */
    var params = new URLSearchParams(location.search);
    var reqHandle = params.get("c") || "tricouri-dama";
    var invalid = !Object.prototype.hasOwnProperty.call(MC_COLLECTIONS, reqHandle);
    var handle = invalid ? "all" : reqHandle;
    var col = MC_COLLECTIONS[handle];
    var base = mcByCollection(handle);

    /* ---------- Opțiuni de filtrare derivate din colecție ---------- */
    var colorOpts = [], colorMap = {};
    base.forEach(function (p) {
      (p.colors || []).forEach(function (c) {
        if (!colorMap[c.name]) { colorMap[c.name] = { name: c.name, hex: c.hex, n: 0 }; colorOpts.push(colorMap[c.name]); }
        colorMap[c.name].n++;
      });
    });
    var sizeOpts = [], sizeSeen = {};
    base.forEach(function (p) {
      if (p.sizes !== "adult" && p.sizes !== "kids") return; /* seturi/huse nu intră în filtrul de mărimi */
      (p.sizeList || []).forEach(function (s) { if (!sizeSeen[s]) { sizeSeen[s] = true; sizeOpts.push(s); } });
    });
    sizeOpts.sort(function (a, b) {
      var ia = SIZE_ORDER.indexOf(a), ib = SIZE_ORDER.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
    var prices = base.map(function (p) { return p.price; });
    var PMIN = prices.length ? Math.floor(Math.min.apply(null, prices) / 5) * 5 : 0;
    var PMAX = prices.length ? Math.ceil(Math.max.apply(null, prices) / 5) * 5 : 0;

    /* ---------- Stare filtre din URL (shareable) ---------- */
    function clampPrice(v, fb) {
      v = parseInt(v, 10);
      if (isNaN(v)) return fb;
      return Math.min(PMAX, Math.max(PMIN, v));
    }
    var state = {
      colors: (params.get("culoare") || "").split(",").filter(function (c) { return colorMap[c]; }),
      sizes: (params.get("marime") || "").split(",").filter(function (s) { return sizeSeen[s]; }),
      pmin: clampPrice(params.get("pmin"), PMIN),
      pmax: clampPrice(params.get("pmax"), PMAX),
      sale: params.get("reduceri") === "1",
      sort: SORTS.indexOf(params.get("sort")) !== -1 ? params.get("sort") : "recomandate"
    };
    if (state.pmin > state.pmax) { var sw = state.pmin; state.pmin = state.pmax; state.pmax = sw; }

    /* ---------- Referințe DOM ---------- */
    var grid = $("[data-grid]");
    var emptyEl = $("[data-empty]");
    var countEl = $("[data-count]");
    var activeEl = $("[data-active]");
    var colf = $("[data-colf]");
    var trigger = $("[data-colf-open]");
    var scrim = $("[data-colf-scrim]");
    var toolbar = $("[data-toolbar]");
    var sortSel = $("[data-sort]");
    if (!grid || !colf || !sortSel) return;

    /* ---------- Hero ---------- */
    document.title = col.title + " — Mon Chérie";
    $("[data-col-title]").textContent = col.title;
    $("[data-col-sub]").textContent = col.sub || "";
    $("[data-col-desc]").textContent = col.desc || "";
    $("[data-col-count]").textContent = countText(base.length) + " în colecție";
    if (invalid) {
      var note = $("[data-col-note]");
      note.hidden = false;
      note.textContent = "Colecția „" + reqHandle + "” nu există — îți arătăm în schimb toate produsele.";
    }

    /* ---------- Breadcrumb + chips (tab-ul din MC_MENU) ---------- */
    function collectionLinksOf(tab) {
      var out = [];
      (tab.groups || []).forEach(function (g) {
        (g.links || []).forEach(function (l) {
          var m = /collection\.html\?c=([\w-]+)/.exec(l.href || "");
          if (m) out.push(m[1]);
        });
      });
      return out;
    }
    var MENU = (typeof MC_MENU !== "undefined") ? MC_MENU : [];
    var tab = null;
    for (var ti = 0; ti < MENU.length; ti++) {
      if (collectionLinksOf(MENU[ti]).indexOf(handle) !== -1) { tab = MENU[ti]; break; }
    }
    var crumbs = '<a href="index.html">Acasă</a>';
    if (tab && handle !== "all") crumbs += '<span aria-hidden="true">›</span><span>' + esc(tab.label) + "</span>";
    crumbs += '<span aria-hidden="true">›</span><span aria-current="page">' + esc(col.title) + "</span>";
    $("[data-crumbs]").innerHTML = crumbs;

    var chipHandles = [], chipSeen = {};
    function pushChip(h) {
      if (h === handle || chipSeen[h] || !MC_COLLECTIONS[h]) return;
      chipSeen[h] = true;
      chipHandles.push(h);
    }
    if (tab) collectionLinksOf(tab).forEach(pushChip);
    else MENU.forEach(function (t) { var ls = collectionLinksOf(t); if (ls.length) pushChip(ls[0]); });
    if (handle !== "all") pushChip("all");
    var chipsEl = $("[data-chips]");
    if (chipHandles.length) {
      chipsEl.innerHTML = chipHandles.map(function (h) {
        return '<a class="mc-chip" href="collection.html?c=' + encodeURIComponent(h) + '">' + esc(MC_COLLECTIONS[h].title) + "</a>";
      }).join("");
    } else {
      $(".col-chips-wrap").hidden = true;
    }

    /* ---------- Construirea controalelor de filtrare ---------- */
    function chev() { return '<span class="colf-chev">' + MC.icon("chevron-down") + "</span>"; }
    var groupsHTML = "";
    if (colorOpts.length) {
      groupsHTML += '<div class="colf-group" data-group="color">' +
        '<button type="button" class="colf-btn" data-colf-toggle aria-expanded="false"><span>Culoare</span><b class="colf-n" data-n="color" hidden></b>' + chev() + "</button>" +
        '<div class="colf-panel"><div class="colf-opts colf-opts--colors">' +
        colorOpts.map(function (o) {
          return '<label class="colf-opt"><input type="checkbox" data-f="color" value="' + esc(o.name) + '">' +
            '<span class="colf-swatch" style="background:' + esc(o.hex) + '"></span>' +
            '<span class="colf-opt-label">' + esc(o.name) + "</span>" +
            '<span class="colf-opt-n">' + o.n + "</span></label>";
        }).join("") + "</div></div></div>";
    }
    if (sizeOpts.length) {
      groupsHTML += '<div class="colf-group" data-group="size">' +
        '<button type="button" class="colf-btn" data-colf-toggle aria-expanded="false"><span>Mărime</span><b class="colf-n" data-n="size" hidden></b>' + chev() + "</button>" +
        '<div class="colf-panel"><div class="colf-opts colf-opts--sizes">' +
        sizeOpts.map(function (s) {
          return '<label class="colf-size"><input type="checkbox" data-f="size" value="' + esc(s) + '"><span>' + esc(s) + "</span></label>";
        }).join("") + "</div></div></div>";
    }
    if (prices.length && PMAX > PMIN) {
      groupsHTML += '<div class="colf-group" data-group="price">' +
        '<button type="button" class="colf-btn" data-colf-toggle aria-expanded="false"><span>Preț</span><b class="colf-n" data-n="price" hidden></b>' + chev() + "</button>" +
        '<div class="colf-panel colf-panel--price">' +
        '<p class="colf-price-out" data-price-out></p>' +
        '<label class="colf-range">Minim<input type="range" data-f="pmin" min="' + PMIN + '" max="' + PMAX + '" step="5" value="' + state.pmin + '" aria-label="Preț minim"></label>' +
        '<label class="colf-range">Maxim<input type="range" data-f="pmax" min="' + PMIN + '" max="' + PMAX + '" step="5" value="' + state.pmax + '" aria-label="Preț maxim"></label>' +
        "</div></div>";
    }
    groupsHTML += '<div class="colf-group colf-group--sale" data-group="sale">' +
      '<button type="button" class="colf-btn colf-toggle" data-f="sale" aria-pressed="false">' + MC.icon("tag") + "<span>Reduceri</span></button></div>";

    colf.innerHTML =
      '<div class="colf-head"><p>Filtrează</p><button type="button" class="mc-icon-btn" data-colf-close aria-label="Închide filtrele">' + MC.icon("close") + "</button></div>" +
      '<div class="colf-groups">' + groupsHTML + "</div>" +
      '<div class="colf-foot"><button type="button" class="btn btn-ghost" data-clear-all>Șterge tot</button>' +
      '<button type="button" class="btn btn-primary" data-colf-close data-apply-btn>Vezi produsele</button></div>';

    /* Empty-state pentru colecții fără produse (ex. „friends”) */
    if (!base.length) {
      emptyEl.innerHTML = '<span class="col-ic">' + MC.icon("sparkle") + "</span>" +
        '<p class="h3">Colecția se pregătește.</p>' +
        "<p>Produsele sosesc în curând. Până atunci, explorează restul universului Mon Chérie.</p>" +
        '<a class="btn btn-ghost" href="collection.html?c=all">Vezi toate produsele</a>';
    }

    /* ---------- Filtrare + sortare ---------- */
    function isSale(p) { return !!(p.compareAt && p.compareAt > p.price); }
    function matches(p) {
      if (state.sale && !isSale(p)) return false;
      if (state.colors.length && !(p.colors || []).some(function (c) { return state.colors.indexOf(c.name) !== -1; })) return false;
      if (state.sizes.length && !(p.sizeList || []).some(function (s) { return state.sizes.indexOf(s) !== -1; })) return false;
      if (p.price < state.pmin || p.price > state.pmax) return false;
      return true;
    }
    function filtered() { return base.filter(matches); }
    function sortItems(list) {
      var arr = list.map(function (p, i) { return { p: p, i: i }; });
      var s = state.sort;
      arr.sort(function (a, b) {
        if (s === "pret-asc") return a.p.price - b.p.price || a.i - b.i;
        if (s === "pret-desc") return b.p.price - a.p.price || a.i - b.i;
        if (s === "noutati") {
          var na = /nou/i.test(a.p.badge || "") ? 0 : 1;
          var nb = /nou/i.test(b.p.badge || "") ? 0 : 1;
          return na - nb || a.i - b.i;
        }
        if (s === "rating") return b.p.rating - a.p.rating || b.p.reviews - a.p.reviews || a.i - b.i;
        return a.i - b.i; /* recomandate = ordinea din catalog */
      });
      return arr.map(function (x) { return x.p; });
    }

    /* ---------- Editorial break (promo real din MC_PROMOS) ---------- */
    var promos = ((typeof MC_PROMOS !== "undefined" && MC_PROMOS.bundles) || []).slice();
    var isTrening = base.some(function (p) {
      return String(p.collection + " " + (p.collections || []).join(" ")).indexOf("trening") !== -1;
    });
    if (isTrening) {
      promos.sort(function (a, b) {
        return (a.id === "trening10" ? 0 : 1) - (b.id === "trening10" ? 0 : 1);
      });
    }
    function breakHTML(idx) {
      if (!promos.length) return "";
      /* nu face link către pagina curentă: sari la următoarea promoție potrivită */
      var b = null, cta = null;
      for (var k = 0; k < promos.length; k++) {
        var cand = promos[(idx + k) % promos.length];
        var c = PROMO_CTA[cand.id] || { href: "collection.html?c=all", label: "Descoperă" };
        var m = /c=([\w-]+)/.exec(c.href || "");
        if (!m || m[1] !== handle) { b = cand; cta = c; break; }
      }
      if (!b) { b = promos[idx % promos.length]; cta = null; }
      var src = MC_COLLECTIONS[PROMO_IMG[b.id]] || col;
      var tone = (src.tone || ["#3D2B33", "#8A5A6B"]).join(",");
      return '<aside class="col-break rv" data-tone="' + esc(tone) + '" aria-label="Promoție: ' + esc(b.short || b.label) + '">' +
        '<div class="col-break-media"><img src="' + esc(src.img || "") + '" alt="" loading="lazy"></div>' +
        '<div class="col-break-body">' +
        '<span class="micro">' + esc(b.short || "Ofertă") + "</span>" +
        '<p class="col-break-quote">' + esc(b.label) + ".</p>" +
        (cta ? '<a class="lnk" href="' + esc(cta.href) + '">' + esc(cta.label) + MC.icon("arrow-right") + "</a>" : "") +
        "</div></aside>";
    }

    /* ---------- URL shareable ---------- */
    function syncURL() {
      var q = new URLSearchParams();
      q.set("c", reqHandle);
      if (state.colors.length) q.set("culoare", state.colors.join(","));
      if (state.sizes.length) q.set("marime", state.sizes.join(","));
      if (state.pmin > PMIN) q.set("pmin", state.pmin);
      if (state.pmax < PMAX) q.set("pmax", state.pmax);
      if (state.sale) q.set("reduceri", "1");
      if (state.sort !== "recomandate") q.set("sort", state.sort);
      try {
        history.replaceState(null, "", location.pathname + "?" + q.toString() + location.hash);
      } catch (e) { /* file:// în unele browsere */ }
    }

    /* ---------- Randare grilă + skeleton ---------- */
    var renderToken = 0;
    function skeletonHTML(n) {
      var out = "";
      for (var i = 0; i < n; i++) {
        out += '<div class="col-skel" aria-hidden="true"><div class="skel skel-media"></div>' +
          '<div class="skel skel-line skel-line--short"></div><div class="skel skel-line"></div></div>';
      }
      return out;
    }
    function renderGrid() {
      var items = sortItems(filtered());
      countEl.textContent = countText(items.length);
      if (!items.length) {
        grid.innerHTML = "";
        emptyEl.hidden = false;
      } else {
        emptyEl.hidden = true;
        var html = "", bi = 0;
        items.forEach(function (p, i) {
          html += '<div class="col-cell rv" style="--rv-i:' + (i % 4) + '">' + MC.productCard(p) + "</div>";
          /* editorial break după fiecare ~8 carduri */
          if ((i + 1) % 8 === 0 && i < items.length - 1) html += breakHTML(bi++);
        });
        /* colecțiile sărace nu lasă golul dinaintea footer-ului: umple cu un break */
        if (items.length < 4) html += breakHTML(bi++);
        grid.innerHTML = html;
        MC.sweepBrokenImages(grid);
        MC.initReveal(grid);
      }
      grid.setAttribute("aria-busy", "false");
    }
    function apply(opts) {
      opts = opts || {};
      syncURL();
      updateControls();
      var token = ++renderToken;
      if (opts.instant) { renderGrid(); return; }
      grid.setAttribute("aria-busy", "true");
      emptyEl.hidden = true;
      grid.innerHTML = skeletonHTML(Math.min(8, Math.max(4, filtered().length || 4)));
      setTimeout(function () { if (token === renderToken) renderGrid(); }, 150);
    }

    /* ---------- Sincronizare controale + chips active ---------- */
    function setN(key, n) {
      var el = $('[data-n="' + key + '"]', colf);
      if (el) { el.hidden = !n; el.textContent = n; }
    }
    function readPriceInputs() {
      var rMin = $("input[data-f=pmin]", colf), rMax = $("input[data-f=pmax]", colf);
      if (!rMin || !rMax) return null;
      var a = parseInt(rMin.value, 10), b = parseInt(rMax.value, 10);
      return { min: Math.min(a, b), max: Math.max(a, b) };
    }
    function updatePriceOut(min, max) {
      var out = $("[data-price-out]", colf);
      if (out) out.textContent = "Între " + min + " și " + max + " lei";
    }
    function activeCount() {
      return state.colors.length + state.sizes.length + (state.sale ? 1 : 0) +
        ((state.pmin > PMIN || state.pmax < PMAX) ? 1 : 0);
    }
    function renderActiveChips() {
      var chips = [];
      state.colors.forEach(function (c) { chips.push({ label: c, k: "color", v: c }); });
      state.sizes.forEach(function (s) { chips.push({ label: "Mărime " + s, k: "size", v: s }); });
      if (state.pmin > PMIN || state.pmax < PMAX) chips.push({ label: state.pmin + "–" + state.pmax + " lei", k: "price", v: "" });
      if (state.sale) chips.push({ label: "Doar reduceri", k: "sale", v: "" });
      activeEl.hidden = !chips.length;
      activeEl.innerHTML = chips.map(function (c) {
        return '<button type="button" class="col-chip-x" data-rm-k="' + esc(c.k) + '" data-rm-v="' + esc(c.v) +
          '" aria-label="Elimină filtrul: ' + esc(c.label) + '">' + esc(c.label) + MC.icon("close") + "</button>";
      }).join("") + (chips.length > 1 ? '<button type="button" class="col-clear" data-clear-all>Șterge tot</button>' : "");
    }
    function updateControls() {
      $$("input[data-f=color]", colf).forEach(function (inp) { inp.checked = state.colors.indexOf(inp.value) !== -1; });
      $$("input[data-f=size]", colf).forEach(function (inp) { inp.checked = state.sizes.indexOf(inp.value) !== -1; });
      var rMin = $("input[data-f=pmin]", colf), rMax = $("input[data-f=pmax]", colf);
      if (rMin) rMin.value = state.pmin;
      if (rMax) rMax.value = state.pmax;
      updatePriceOut(state.pmin, state.pmax);
      var saleBtn = $("[data-f=sale]", colf);
      if (saleBtn) saleBtn.setAttribute("aria-pressed", state.sale ? "true" : "false");
      setN("color", state.colors.length);
      setN("size", state.sizes.length);
      setN("price", (state.pmin > PMIN || state.pmax < PMAX) ? 1 : 0);
      var total = activeCount();
      var trigN = $("[data-trigger-n]");
      if (trigN) { trigN.hidden = !total; trigN.textContent = total; }
      var n = filtered().length;
      var applyBtn = $("[data-apply-btn]", colf);
      if (applyBtn) applyBtn.textContent = n ? "Vezi " + countText(n) : "Niciun produs";
      countEl.textContent = countText(n);
      sortSel.value = state.sort;
      renderActiveChips();
    }

    /* ---------- Dropdown-uri (desktop) / bottom-sheet (mobil) ---------- */
    var mqMobile = window.matchMedia("(max-width: 767px)");
    function isMobile() { return mqMobile.matches; }
    function closeGroups(except) {
      $$(".colf-group.open", colf).forEach(function (g) {
        if (g !== except) {
          g.classList.remove("open");
          var b = $("[data-colf-toggle]", g);
          if (b) b.setAttribute("aria-expanded", "false");
        }
      });
    }
    var sheetOpen = false;
    /* Sheet-ul se mută în <body> cât e deschis: toolbar-ul sticky are
       backdrop-filter + z-index și ar deveni containing block pentru fixed. */
    var colfHome = colf.parentNode;
    var colfAnchor = countEl;
    var restoreTimer = null;
    function restoreColf() {
      clearTimeout(restoreTimer);
      if (!sheetOpen && colf.parentNode === document.body) colfHome.insertBefore(colf, colfAnchor);
    }
    function openSheet() {
      if (!isMobile() || sheetOpen) return;
      sheetOpen = true;
      clearTimeout(restoreTimer);
      document.body.appendChild(colf);
      requestAnimationFrame(function () { colf.classList.add("open"); });
      colf.setAttribute("role", "dialog");
      colf.setAttribute("aria-modal", "true");
      colf.setAttribute("aria-label", "Filtrează produsele");
      scrim.classList.add("open");
      document.documentElement.classList.add("col-lock");
      trigger.setAttribute("aria-expanded", "true");
      $$(".colf-group", colf).forEach(function (g) {
        g.classList.add("open");
        var b = $("[data-colf-toggle]", g);
        if (b) b.setAttribute("aria-expanded", "true");
      });
      if (MC.trapFocus) MC.trapFocus(colf);
      var c = $("[data-colf-close]", colf);
      if (c) setTimeout(function () { c.focus(); }, 60);
    }
    function closeSheet(noFocus) {
      if (!sheetOpen) return;
      sheetOpen = false;
      if (MC.releaseTrap) MC.releaseTrap();
      colf.classList.remove("open");
      colf.removeAttribute("role");
      colf.removeAttribute("aria-modal");
      colf.removeAttribute("aria-label");
      scrim.classList.remove("open");
      document.documentElement.classList.remove("col-lock");
      trigger.setAttribute("aria-expanded", "false");
      clearTimeout(restoreTimer);
      restoreTimer = setTimeout(restoreColf, 380); /* după tranziția de închidere */
      if (!noFocus) { try { trigger.focus(); } catch (e) { /* noop */ } }
    }
    scrim.addEventListener("click", function () { closeSheet(); });
    var onMq = function () { if (!isMobile()) { closeSheet(true); restoreColf(); closeGroups(null); } };
    if (mqMobile.addEventListener) mqMobile.addEventListener("change", onMq);
    else if (mqMobile.addListener) mqMobile.addListener(onMq);

    colf.addEventListener("click", function (e) {
      var tg = e.target.closest("[data-colf-toggle]");
      if (tg) {
        var g = tg.closest(".colf-group");
        var willOpen = !g.classList.contains("open");
        if (!isMobile()) closeGroups(g);
        g.classList.toggle("open", willOpen);
        tg.setAttribute("aria-expanded", willOpen ? "true" : "false");
        return;
      }
      var sale = e.target.closest("[data-f=sale]");
      if (sale) { state.sale = !state.sale; apply(); }
    });
    colf.addEventListener("change", function (e) {
      var inp = e.target;
      if (inp.matches("input[data-f=color]")) { toggleIn(state.colors, inp.value, inp.checked); apply(); }
      else if (inp.matches("input[data-f=size]")) { toggleIn(state.sizes, inp.value, inp.checked); apply(); }
      else if (inp.matches("input[data-f=pmin], input[data-f=pmax]")) {
        var v = readPriceInputs();
        if (v) { state.pmin = v.min; state.pmax = v.max; apply(); }
      }
    });
    colf.addEventListener("input", function (e) {
      if (e.target.matches("input[data-f=pmin], input[data-f=pmax]")) {
        var v = readPriceInputs();
        if (v) updatePriceOut(v.min, v.max);
      }
    });
    function toggleIn(arr, v, on) {
      var i = arr.indexOf(v);
      if (on && i === -1) arr.push(v);
      if (!on && i !== -1) arr.splice(i, 1);
    }

    sortSel.addEventListener("change", function () { state.sort = sortSel.value; apply(); });

    /* Quick-add cu mini-selector de mărime: gestionat global în shared.js */

    /* ---------- Interacțiuni la nivel de document ---------- */
    document.addEventListener("click", function (e) {
      var rm = e.target.closest("[data-rm-k]");
      if (rm) {
        var k = rm.getAttribute("data-rm-k"), v = rm.getAttribute("data-rm-v");
        if (k === "color") toggleIn(state.colors, v, false);
        else if (k === "size") toggleIn(state.sizes, v, false);
        else if (k === "price") { state.pmin = PMIN; state.pmax = PMAX; }
        else if (k === "sale") state.sale = false;
        apply();
        return;
      }
      if (e.target.closest("[data-clear-all]")) {
        state.colors = [];
        state.sizes = [];
        state.pmin = PMIN;
        state.pmax = PMAX;
        state.sale = false;
        apply();
        return;
      }
      if (e.target.closest("[data-colf-open]")) { openSheet(); return; }
      if (e.target.closest("[data-colf-close]")) { closeSheet(); return; }
      /* click în afară: închide dropdown-urile */
      if (!e.target.closest(".colf")) closeGroups(null);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (sheetOpen) { closeSheet(); return; }
      closeGroups(null);
    });

    /* ---------- Umbră toolbar când devine sticky ---------- */
    var sentinel = $("[data-sentinel]");
    if (sentinel && toolbar && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        toolbar.classList.toggle("is-stuck", !entries[0].isIntersecting);
      }, { rootMargin: "-70px 0px 0px 0px" }).observe(sentinel);
    }

    /* ---------- Prima randare (fără skeleton) ---------- */
    apply({ instant: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
