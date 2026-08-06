# MON CHÉRIE — Redesign Demo (moncherie.ro)

Demo static HTML/CSS/JS pentru redesign-ul moncherie.ro: homepage, pagină de colecție, pagină de produs, mega-menu avansat. Datele (colecții, produse, prețuri, promoții) sunt preluate de pe site-ul real. Imaginile sunt stand-in-uri premium (Unsplash) cu fallback elegant — se înlocuiesc 1:1 cu URL-urile cdn.shopify.com în producție.

## Direcție: „Parisian ease, Romanian heart”
Fashion premium accesibil — editorial, aerisit, cald. Nu streetwear agresiv, nu lux rece: un magazin care vinde bumbac bun cu grafică personală, prezentat ca un brand parizian. Multă lumină, tipografie mare cu serif expresiv, accente cireșiu („chérie”), micro-etichete uppercase, imagini 4:5.

## Tokens (definite în `assets/css/main.css` sub `:root`)
```
--bg: #F6F3EE;        /* ivory cald — fundal global */
--surface: #FFFFFF;
--ink: #16130F;       /* aproape negru, cald */
--ink-soft: #5C554B;
--muted: #8A7F72;
--line: #E4DED4;      /* hairlines, borduri */
--cherry: #A31621;    /* accent principal — folosit CU ZGÂRCENIE */
--cherry-deep: #7C1220;
--blush: #EAD9D5;
--gold: #B08D57;      /* stele rating, badge-uri premium */
--dark: #16130F;      /* secțiuni întunecate */
--radius: 2px;        /* colțuri aproape drepte = editorial */
--radius-lg: 6px;
--shadow: 0 24px 60px -30px rgba(22,19,15,.25);
--container: 1280px;  /* max-width conținut, padding lateral clamp(20px, 4vw, 48px) */
--header-h: 64px;
```
Fonturi (Google Fonts, cu fallback): `Playfair Display` (display; optical size, ligaturi, italic pentru accente) + `Manrope` (UI/body). Fallback: `Georgia, serif` / `system-ui, sans-serif`. Diacritice românești obligatorii (subset latin-ext).

Scară tipografică: display `clamp(2.6rem, 6vw, 5rem)` Playfair Display 340–420 weight, letter-spacing -0.02em; h2 secțiuni `clamp(1.8rem, 3.4vw, 2.6rem)`; micro-etichete 11px uppercase tracking .18em Manrope 600; body 15–16px/1.6.

## Reguli vizuale
- Cireșiul apare doar la: CTA principal, badge-uri reducere, contor promo, hover pe linkuri cheie, progres transport gratuit. Restul = ivory/ink/taupe.
- Imagini produs: aspect-ratio 4/5, `object-fit: cover`, colțuri `--radius`. Hover pe card: schimbă în a doua imagine + zoom 1.04 (transition .6s cubic-bezier(.22,1,.36,1)).
- Butoane: dreptunghiulare, uppercase 12px tracking .14em, păstrează înălțime 48px+ pe touch. Primary = ink pe ivory / cherry la hover; pe fundal dark inversat. Underline-animat pentru linkuri text.
- Secțiuni: spațiere verticală `clamp(64px, 10vw, 120px)`. Hairline `--line` între zone.
- Reveal on scroll: IntersectionObserver, translateY(24px)→0 + fade, stagger 60ms, o singură dată. `prefers-reduced-motion` → dezactivat.
- Stele rating: SVG inline, culoare `--gold`.

## Sistem de imagini + fallback (obligatoriu, în shared.js)
Toate `<img>` primesc `loading="lazy"` (except hero) și `alt`. shared.js instalează un handler global de eroare (capture) care înlocuiește imaginea căzută cu un placeholder SVG data-URI generat din `data-tone` (gradient din tonurile produsului + monograma „MC" + eticheta produsului) — demo-ul arată intenționat și fără rețea. Cardurile de produs setează `data-tone` din `p.tone`.

## Contract de fișiere
```
index.html          + assets/css/home.css       + assets/js/home.js
collection.html     + assets/css/collection.css + assets/js/collection.js
product.html        + assets/css/product.css    + assets/js/product.js
assets/css/main.css   — tokens, reset, tipografie, header, mega-menu, drawer mobil, cart drawer, footer, butoane, carduri produs, badge-uri, toast, skeleton
assets/js/shared.js   — MC_ICONS (sprite SVG inline), randare header+mega-menu+footer+cart, coș localStorage, quick-add, toast, image-fallback, reveal, utilitare
assets/js/data.js     — catalog (EXISTĂ — nu se modifică fără motiv)
```
Fiecare pagină include: `<div id="mc-header"></div>` … conținut … `<div id="mc-footer"></div>` și scripturile `data.js`, `shared.js`, apoi scriptul paginii. `shared.js` expune `window.MC = { renderChrome(), cart: {add(handle, opts), remove(), setQty(), items(), count(), total(), open(), close()}, toast(msg), money(v), productCard(p) → html, icon(name) → svg string, initReveal(root) }`. `MC.productCard(p)` este SINGURA sursă de carduri de produs — orice grilă îl folosește (consistență între pagini). Cardul: imagine 4/5 cu hover-swap, badge stânga-sus, quick-add „+" dreapta-jos (apare la hover, mereu vizibil pe touch), titlu, rating mic, preț + compare-at tăiat, swatch-uri culoare (max 4 + „+n").

## Header + Mega-menu (centrul cerinței de UX)
Header: bară anunț sus (marquee lent cu cele 4 promoții reale, pauză la hover) → header sticky (blur backdrop, umbră la scroll): logo „MON CHÉRIE" (Playfair Display, „chérie" italic), nav desktop = tab-urile din MC_MENU + link „Oferte" (cherry), icons: căutare (overlay cu sugestii din catalog), cont, coș cu badge count.
Mega-menu desktop: la hover/focus pe tab → panou full-width (animație fade+translateY 8px, 200ms; delay de închidere 150ms; se închide la Escape/mouseleave). Layout 3 zone: (1) coloane de grupuri cu titluri micro-etichetă și linkuri cu iconiță SVG 18px stroke 1.5 + badge opțional; (2) separator hairline; (3) 2 feature-cards cu imagine 16:10, titlu, notă, hover zoom. Sub panou, o bară subtilă cu tagline-ul tab-ului + link „Vezi tot". Accesibil: roving tabindex, `aria-expanded`, se deschide și la focus, Escape închide.
Mobil (<1024px): buton hamburger → drawer stânga full-height cu animație; nivel 1 = tab-uri cu iconiță + chevron; tap → nivel 2 cu buton „← Înapoi", grupuri + feature-cards ca imagini mici; jos: promo bar + linkuri cont/căutare. Body scroll-lock cât e deschis.
Cart drawer (dreapta): produse cu imagine mică, qty stepper, remove; bara de progres transport gratuit (200 lei — „Mai adaugă X lei"); upsell compact „Adaugă și…" (1 produs mic din upsells); subtotal + CTA checkout (demo). Toast la add-to-cart.

## Homepage (index.html)
1. **Hero editorial**: split 60/40 — stânga: micro-etichetă „Colecția nouă", display „Poartă-ți inima pe bumbac", subtitlu, 2 CTA („Cumpără femei", „Cumpără bărbați"); dreapta: imagine mare 4/5 cu card plutitor produs (Trening Catifea, preț, link). Fundal ivory, ornament tipografic „chérie" italic mare, foarte subtil în spate.
2. **USP bar**: 4 iconițe + text scurt (Bumbac 100% · Livrare 24–48h · Retur 30 zile · Transport gratuit >200 lei), hairlines între ele.
3. **Categorii**: grilă editorială asimetrică (Damă mare + Bărbați, Copii, Treninguri, Cupluri, Accesorii) — imagine, titlu Playfair Display, „Descoperă →".
4. **Bestsellers**: micro-etichetă + h2 + rail orizontal cu scroll-snap (6–8 produse via MC.productCard), săgeți pe desktop.
5. **Banda promo 4=3**: secțiune dark (ink) cu tipografie mare „4 tricouri. Plătești 3.", cele 3 mecanici de preț ca listă elegantă, CTA cherry.
6. **Poveste catifea**: split imagine/text pentru Trening Catifea (bestseller real) cu citat recenzie și CTA spre produs.
7. **Modele noi**: grilă 4 produse + link colecție.
8. **Social proof**: 3 recenzii scurte cu stele + „4.8/5 din 1.200+ recenzii".
9. **Newsletter**: dark sau blush, „10% la prima comandă", input + buton (demo, validare simplă).
Footer (global): 4 coloane (Magazin/Ajutor/Companie/Contact), social icons, plăți (SVG generice), copyright + notă demo discretă.

## Pagina de colecție (collection.html?c=handle)
- Hero compact: breadcrumb, titlu Playfair Display + sub + desc din MC_COLLECTIONS, count produse.
- Sub-nav chips orizontale (colecții înrudite din același tab de meniu) — scroll-snap pe mobil.
- Toolbar sticky sub header: count, filtre (Culoare — swatch-uri, Mărime, Preț — range simplu, Reduceri toggle) în dropdown-uri pe desktop / bottom-sheet pe mobil; sort (Recomandate, Preț ↑, Preț ↓, Noutăți, Rating); chips active cu x.
- Grilă: 4 col desktop / 2 tabletă / 2 mobil (gutter mic), MC.productCard, reveal stagger. La fiecare ~8 carduri, un „editorial break" — card wide cu imagine + citat promo (ex. 3 albe → 30 lei/buc).
- Filtrare/sortare client-side pe MC_PRODUCTS (după colecție), empty-state elegant, „Se încarcă" skeleton la schimbare (150ms fake).
- Quick-add: pe carduri cu o singură mărime relevantă (huse/seturi) → direct; altfel deschide mini-selector de mărime în card (popover) și apoi adaugă.

## Pagina de produs (product.html?p=handle) — optimizată CRO, stil US
Două coloane desktop (galerie 55% / buy-box 45%, buy-box sticky), o coloană mobil (galerie sus).
- **Galerie**: imagine principală 4/5 + thumbnails verticale (desktop) / dots swipe (mobil); zoom la hover (scale în container); badge-uri.
- **Buy-box** (ordinea exactă, totul compact): breadcrumb mic › colecție; titlu Playfair Display; rând rating (stele gold + „4.8 (127 recenzii)" — ancoră la recenzii); preț mare + compare-at tăiat + badge „Economisești X lei"; promo-hint contextual într-o linie (ex. „-10% la 3 treninguri" pentru treninguri, „3+ → 30 lei/buc" la tricouri albe) cu iconiță tag; culori ca swatch-uri rotunde cu nume selectat; mărimi ca butoane pill + link „Ghid mărimi" (modal cu tabel + sfat fit real din recenzii „Mihai: recomand o mărime în plus"); qty stepper + ATC mare full-width (ink→cherry hover, „Adaugă în coș — 149 lei" cu preț dinamic × qty); sub ATC: butoane express slim mock (Apple Pay negru, Google Pay alb); microcopy livrare cu iconițe („Livrare 24–48h · Retur gratuit 30 zile · Transport gratuit >200 lei"); **modul bundle compact** „Completează setul — economisești 10%": 1 rând cu thumbnail produs curent + „+" + thumbnail upsell[0] + preț combinat tăiat/redus + checkbox „Adaugă ambele"; accordion (Descriere / Material & Îngrijire / Livrare & Retur) — primul deschis, restul închise (economie de scroll).
- **Sub fold**: „Merge perfect cu" — rail orizontal compact (upsells, MC.productCard mărime S); recenzii: sumar (nota mare + bare 5→1) + 4 recenzii (pool MC_REVIEWS) + „Vezi toate"; „Ai văzut recent" (localStorage, max 4, se populează real).
- **Sticky ATC mobil**: bară jos cu mini-imagine, preț, buton ATC — apare după ce ATC-ul principal iese din viewport.
- Toate elementele funcționale: schimbarea culorii schimbă imaginea activă (dacă există), mărimea se selectează, ATC adaugă în coșul real din shared.js cu varianta aleasă, bundle adaugă ambele produse cu discount aplicat la afișare.

## Accesibilitate & calitate
- HTML5 semantic (header/nav/main/section/footer), un singur h1/pagină, skip-link, focus-visible stilizat, aria pe meniu/drawere/acordeoane, contrast AA pe text, `lang="ro"`.
- Zero erori în consolă; funcționează din `file://` și de pe server static; fără dependențe externe de JS (vanilla).
- Responsive: 360px, 768px, 1024px, 1440px. Fără scroll orizontal.
