/* =========================================================
   MON CHÉRIE — Catalog demo cu PRODUSE REALE moncherie.ro
   Titluri, prețuri, reduceri, mărimi, descrieri și imagini
   preluate din catalogul public Shopify al magazinului
   (moncherie.ro/products.json). Imaginile vin direct de pe
   cdn.shopify.com. Ratingurile și recenziile sunt valori
   demonstrative (magazinul nu le expune public prin API).
   Generat de tools/gen_data.py: 2026-08-06.
   ========================================================= */

/* ---------- PROMOȚII REALE ---------- */
const MC_PROMOS = {
  freeShippingThreshold: 200, // lei — transport gratuit peste 200 lei
  headline: "4 tricouri la preț de 3",
  bundles: [
    { id: "tee4for3",   label: "Alege 4 tricouri, plătești doar 3", short: "4 = 3" },
    { id: "white3",     label: "Minim 3 tricouri albe → 30 lei/buc", short: "3 albe · 30 lei/buc" },
    { id: "color3",     label: "Minim 3 tricouri colorate → 50 lei/buc", short: "3 colorate · 50 lei/buc" },
    { id: "trening10",  label: "-10% la 3 treninguri cumpărate", short: "-10% la 3 treninguri" }
  ],
  shipping: "Livrare în 24–48h prin curier rapid",
  returns: "Retur gratuit în 30 de zile"
};

/* ---------- COLECȚII (handle-uri reale moncherie.ro) ---------- */
const MC_COLLECTIONS = {
  "tricouri-dama": { title: "Tricouri Damă", sub: "Bumbac 100% cu imprimeu", desc: "Tricouri damă din bumbac 100%, versatile și ușor de asortat — de la basics impecabile la imprimeuri statement.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-03_at_16.33.29_13.jpg?v=1767457081&width=1600", tone: ["#EAD9D5", "#9E6B76"] },
  "tricouri-negre-dama": { title: "Tricouri Negre Damă", sub: "Negrul care nu dă greș", desc: "Tricouri negre damă din bumbac 100% — piesa clasică, croită impecabil, pentru orice garderobă.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-03at22.22.26_26.jpg?v=1777838738&width=1600", tone: ["#2B2B2E", "#6B6B70"] },
  "modele-noi": { title: "Modele Noi", sub: "Ultimele intrări", desc: "Cele mai noi tricouri damă din bumbac 100% cu imprimeu — prospețime în fiecare săptămână.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_6.jpg?v=1759052627&width=1600", tone: ["#F1E4D4", "#B08D57"] },
  "tricouri-primavara": { title: "Tricouri Primăvară", sub: "Imprimeuri florale", desc: "Colecția de primăvară: imprimeuri inspirate de sezon pe bumbac moale, respirabil.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-06_at_17.22.03.jpg?v=1772810587&width=1600", tone: ["#E7EFE3", "#7A9471"] },
  "bluze": { title: "Bluze", sub: "Mâneca lungă, aceeași atitudine", desc: "Bluze damă din bumbac, cu imprimeuri originale — pentru zilele mai răcoroase.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at17.03.36.jpg?v=1767366280&width=1600", tone: ["#E4DED4", "#8A7F72"] },
  "mom": { title: "Tricouri Mama", sub: "Pentru super-mame", desc: "Tricouri dedicate mamelor — mesaje calde, bumbac 100%, cadoul care nu dă greș.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2023-12-23at07.36.49.jpg?v=1703346968&width=1600", tone: ["#F3E0E2", "#B76E79"] },
  "tricouri-barbati": { title: "Tricouri Bărbați", sub: "Bumbac 100% cu imprimeu", desc: "Tricouri bărbați cu imprimeuri grafice, motive street style și mesaje cool — confort și stil masculin.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14_5.jpg?v=1778528493&width=1600", tone: ["#DDE3E8", "#5B6770"] },
  "tricouri-text": { title: "Tricouri TEXT", sub: "Spune-o pe față", desc: "Mesaje îndrăznețe, tipografie curată — tricouri care vorbesc înainte să o faci tu.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_1.jpg?v=1759049897&width=1600", tone: ["#F6F3EE", "#16130F"] },
  "tricouri-face": { title: "Tricouri Face", sub: "Grafică statement", desc: "Portrete și grafici cu impact — pentru un look modern casual.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-11_at_18.13.41_6.jpg?v=1768148936&width=1600", tone: ["#E8E2D9", "#8C6A4F"] },
  "tricouri-romania": { title: "Tricouri România", sub: "Purtate cu mândrie", desc: "Colecția România — simboluri autohtone pe bumbac 100%.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2024-06-17_at_12.27.05.jpg?v=1718653245&width=1600", tone: ["#E3E8F0", "#27408B"] },
  "tricouri-oversize": { title: "Tricouri OVERSIZE", sub: "Croială relaxată", desc: "Tricouri oversize din bumbac gros — croiala lejeră care arată bine pe oricine.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-24at14.55.46.jpg?v=1758752146&width=1600", tone: ["#EDEAE4", "#57534E"] },
  "tricouri-copii": { title: "Tricouri Copii", sub: "2–12 ani", desc: "Tricouri copii din bumbac moale, cu imprimeuri jucăușe — mărimi de la 2 la 12 ani.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.53.jpg?v=1755635100&width=1600", tone: ["#FDF0DC", "#E8A15D"] },
  "tricouri-mama-si-princess": { title: "Mama și Princess", sub: "Set asortat", desc: "Seturi asortate mama–fiică: aceeași grafică, două mărimi, de două ori mai multă bucurie.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-02-23_at_21.46.36_4.jpg?v=1771876109&width=1600", tone: ["#F3E0E2", "#C78895"] },
  "tricouri-cupluri": { title: "Tricouri Cuplu", sub: "În doi e mai bine", desc: "Tricouri pereche pentru cupluri — grafici complementare, bumbac 100%.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4177.jpg?v=1618435056&width=1600", tone: ["#EAD9D5", "#A31621"] },
  "set-bluze": { title: "Set Bluze", sub: "Seturi asortate", desc: "Seturi de bluze asortate pentru cupluri și familie — la preț de set.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.15PM.jpg?v=1668619109&width=1600", tone: ["#E4DED4", "#6B5B4C"] },
  "trening-catifea": { title: "Trening Catifea", sub: "Moale. Elegant. Al tău.", desc: "Treninguri din catifea moale, plăcută la atingere — bluza cu decolteu în V și manșete elastice, croială relaxată, aer elegant.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_10.jpg?v=1773413604&width=1600", tone: ["#3D2B33", "#8A5A6B"] },
  "trening-1": { title: "Treninguri", sub: "Confort de zi cu zi", desc: "Treninguri damă din catifea sau bumbac 100% — croieli curate, purtabile oriunde.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40.jpg?v=1773413471&width=1600", tone: ["#DDD8CE", "#57534E"] },
  "trening-din-bumbac-100-cu-imprimeu": { title: "Trening Bumbac cu Imprimeu", sub: "Bumbac 100%", desc: "Treninguri din bumbac 100% cu imprimeuri originale — set complet, comod, cu personalitate.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4767.png?v=1778183730&width=1600", tone: ["#E4DED4", "#6B5B4C"] },
  "tricouri-craciun": { title: "Tricouri Damă Crăciun", sub: "Spirit de sărbătoare", desc: "Tricouri damă cu imprimeuri de Crăciun — pentru cele mai calde sărbători.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-24at23.02.19_7.jpg?v=1764019029&width=1600", tone: ["#E8D5D5", "#9E1B32"] },
  "tricouri-craciun-barbati": { title: "Tricouri Crăciun Bărbați", sub: "Ho ho ho", desc: "Tricouri bărbați cu tematică de Crăciun — cadoul simplu care nimerește mereu.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-21at23.39.11_8.jpg?v=1763762604&width=1600", tone: ["#D8E2DC", "#2D5A47"] },
  "tricouri-cuplu-craciun": { title: "Tricouri Cuplu Crăciun", sub: "Sărbători în doi", desc: "Seturi pereche de Crăciun pentru cupluri — asortați-vă sub brad.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-12-01at10.56.56.jpg?v=1638349925&width=1600", tone: ["#E8D5D5", "#7C1220"] },
  "tricouri-craciun-familie": { title: "Tricouri Crăciun Familie", sub: "Toată familia, asortată", desc: "Seturi de familie pentru Crăciun — mărimi pentru mama, tata și copii.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-24at23.51.04_7.jpg?v=1764021681&width=1600", tone: ["#E2D8CC", "#8C2F39"] },
  "bluze-craciun": { title: "Bluze Damă Crăciun", sub: "Cozy season", desc: "Bluze călduroase cu imprimeuri festive — perfecte pentru serile de decembrie.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-12-11at23.51.15_56efc9d7-cbf3-4d57-adf8-9821e6e1e24a.jpg?v=1765490157&width=1600", tone: ["#E8D5D5", "#9E1B32"] },
  "friends": { title: "Friends", sub: "Colecția tematică", desc: "Colecția Friends — grafici inspirate de serialul iconic, pentru fani adevărați.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.45.jpg?v=1705752494&width=1600", tone: ["#F1E4D4", "#C77B3B"] },
  "best-seller": { title: "Cele mai bine vândute", sub: "Favoritele clienților", desc: "Produsele comandate iar și iar — dovada că unele piese nu dau greș niciodată.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-06at17.30.38.jpg?v=1772811070&width=1600", tone: ["#F1E4D4", "#B08D57"] },
  "lenjerii": { title: "Lenjerii de Pat", sub: "Finet, damasc, satin", desc: "Lenjerii de pat pentru pat dublu — finet moale, damasc elegant sau satin fin, în seturi de 4 sau 6 piese.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-25at06.30.05_3.jpg?v=1756131492&width=1600", tone: ["#E7E3DB", "#8A7F72"] },
  "prosoape": { title: "Prosoape", sub: "Baie, față, bucătărie", desc: "Prosoape din bumbac — moi, absorbante, în culori care rezistă spălărilor.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.19_2.jpg?v=1744990756&width=1600", tone: ["#E3EBEA", "#5F8A80"] },
  "all": { title: "Toate produsele", sub: "Catalogul complet", desc: "Explorează întregul univers Mon Chérie.", img: "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-06at17.30.38.jpg?v=1772811070&width=1600", tone: ["#F6F3EE", "#16130F"] }
};

/* ---------- PRODUSE (reale, selecție curatoriată din 5.477) ---------- */
/* sizes: "adult" => mărimi adulți, "kids" => mărimi copii, "set" => mărimi per membru, "home" => o singură variantă */
const MC_PRODUCTS = [
  {
    handle: "trening-din-catifea-8", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.5, reviews: 15,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_10.jpg?v=1773413604&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-1", "trening-din-catifea-7", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-1", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.5, reviews: 102,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_4.jpg?v=1773413797&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-7", "trening-din-catifea-10", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-7", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.7, reviews: 90,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_9.jpg?v=1773413634&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-10", "trening-din-catifea-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-10", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.6, reviews: 136,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_3.jpg?v=1773413554&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-3", "trening-din-catifea-5", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-3", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.4, reviews: 154,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_6.jpg?v=1773413754&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-5", "trening-din-catifea-6", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-5", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.9, reviews: 153,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.54.45.jpg?v=1773413708&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-6", "trening-din-catifea-11", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-6", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.6, reviews: 92,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_5.jpg?v=1773413657&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-11", "trening-din-catifea-4", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-11", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.4, reviews: 94,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_11.jpg?v=1773413527&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-4", "trening-din-catifea-13", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-4", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.6, reviews: 30,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_7.jpg?v=1773413731&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-13", "trening-din-catifea-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-13", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 229, badge: "-44%", rating: 4.5, reviews: 208,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-19at23.56.56.jpg?v=1773958260&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-2", "trening-din-catifea", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-2", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.8, reviews: 104,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_8.jpg?v=1773413776&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea", "trening-din-catifea-12", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.4, reviews: 141,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-17at16.17.08_1.jpg?v=1768659567&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-12", "trening-din-catifea-8", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-catifea-12", title: "Trening Dama din Catifea Soft",
    collection: "trening-catifea", collections: ["trening-catifea", "trening-1"],
    price: 129, compareAt: 229, badge: "-44%", rating: 4.6, reviews: 68,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil intr-o textura catifelata — trening dama din catifea soft, set 2 piese. Catifea soft, moale si placuta la atingere — acest trening dama de 2 piese este gandit pentru confort si stil.",
    details: {"material": "Catifea moale, plăcută la atingere", "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică", "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-19at23.56.56_1.jpg?v=1773957495&width=1200"],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-din-catifea-8", "trening-din-catifea-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-stars", title: "Trening Dama din Bumbac 100% Stars",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.6, reviews: 140,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Set complet trening dama din bumbac 100% — croiala lejera, material moale si respirabil. Acest trening dama cu imprimeu Stars este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4767.png?v=1778183730&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-moon", "trening-din-bumbac-100-cu-imprimeu-face", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-moon", title: "Trening Dama din Bumbac 100% Moon",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.7, reviews: 206,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil casual intr-un singur set — trening dama din bumbac 100% French Terry, moale si respirabil. Cu imprimeul Moon, acest trening dama din bumbac 100% combina confortul cu un design modern.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4748.png?v=1778185284&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-face", "trening-din-bumbac-100-cu-imprimeu-black-face", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-face", title: "Trening Dama din Bumbac 100% Face",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.5, reviews: 27,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama cu imprimeu Face este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4753.png?v=1778187182&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-black-face", "trening-din-bumbac-100-cu-imprimeu-travel", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-black-face", title: "Trening Dama din Bumbac 100% Black Face",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.7, reviews: 198,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Cu imprimeul Black Face, acest trening dama din bumbac 100% combina confortul cu un design modern.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4734_cf52ef29-f450-441c-926a-d6ad93154371.png?v=1778187128&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-travel", "trening-din-bumbac-100-cu-imprimeu-cat", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-travel", title: "Trening Dama din Bumbac 100% Travel",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.6, reviews: 179,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Set complet trening dama din bumbac 100% — croiala lejera, material moale si respirabil. Imprimeul Travel completeaza un look relaxat si feminin.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4757.png?v=1778185114&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-cat", "trening-din-bumbac-100-cu-imprimeu-blue-new-butterflies", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-cat", title: "Trening Dama din Bumbac 100% Cat",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.4, reviews: 194,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort natural si croiala feminina — trening dama din bumbac 100% French Terry. Imprimeul Cat completeaza un look relaxat si feminin.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4749.png?v=1778187530&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-blue-new-butterflies", "trening-din-bumbac-100-cu-imprimeu-nice-look", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-blue-new-butterflies", title: "Trening Dama din Bumbac 100% Blue New Butterflies",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.8, reviews: 99,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort natural si croiala feminina — trening dama din bumbac 100% French Terry. Cu imprimeul Blue New Butterflies, acest trening dama din bumbac 100% combina confortul cu un design modern.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4732.png?v=1778184536&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-nice-look", "trening-din-bumbac-100-cu-imprimeu-fundita-gold", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-nice-look", title: "Trening Dama din Bumbac 100% Nice Look",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.7, reviews: 31,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort si stil casual intr-un singur set — trening dama din bumbac 100% French Terry, moale si respirabil. Imprimeul Nice Look completeaza un look relaxat si feminin.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4756.png?v=1778187350&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-fundita-gold", "trening-din-bumbac-100-cu-imprimeu-way-maker", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-fundita-gold", title: "Trening Dama din Bumbac 100% Fundita Gold",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.9, reviews: 72,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Set complet trening dama din bumbac 100% — croiala lejera, material moale si respirabil. Cu imprimeul Fundita Gold, acest trening dama din bumbac 100% combina confortul cu un design modern.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4766.png?v=1778186984&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-way-maker", "trening-din-bumbac-100-cu-imprimeu-stars", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100-cu-imprimeu-way-maker", title: "Trening Dama din Bumbac 100% Way Maker",
    collection: "trening-din-bumbac-100-cu-imprimeu", collections: ["trening-din-bumbac-100-cu-imprimeu", "trening-1"],
    price: 129, compareAt: 239, badge: "-46%", rating: 4.4, reviews: 41,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Confort natural si croiala feminina — trening dama din bumbac 100% French Terry. Cu imprimeul Way Maker, acest trening dama din bumbac 100% combina confortul cu un design modern.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/IMG_4727.png?v=1778185593&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["trening-din-bumbac-100-cu-imprimeu-stars", "trening-din-bumbac-100-cu-imprimeu-moon", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-102", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.5, reviews: 29,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40.jpg?v=1773413471&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-103", "trening-din-bumbac-104", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-103", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.8, reviews: 32,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-06-26_at_16.10.39.jpg?v=1782480450&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-104", "trening-din-bumbac-100", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-104", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.9, reviews: 193,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.39_8.jpg?v=1773413426&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-100", "trening-din-bumbac-111", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-100", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.4, reviews: 41,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.39.jpg?v=1773413508&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-111", "trening-din-bumbac-106", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-111", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.7, reviews: 194,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-13at16.45.39_1.jpg?v=1773414107&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-106", "trening-din-bumbac-108", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-106", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.9, reviews: 144,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-13at16.45.39_6.jpg?v=1773413889&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-108", "trening-din-bumbac-107", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-108", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.7, reviews: 172,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-13at16.45.39_4.jpg?v=1773413983&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-107", "trening-din-bumbac-109", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-107", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.7, reviews: 189,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-13at16.45.39_5.jpg?v=1773413928&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-109", "trening-din-bumbac-110", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-109", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.7, reviews: 78,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-13at16.45.39_3.jpg?v=1773414015&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-110", "trening-din-bumbac-105", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-110", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.8, reviews: 208,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-13at16.45.39_2.jpg?v=1773414066&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-105", "trening-dama-din-bumbac-101", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-din-bumbac-105", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.9, reviews: 196,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.39_9.jpg?v=1773413397&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-dama-din-bumbac-101", "trening-din-bumbac-102", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "trening-dama-din-bumbac-101", title: "Trening Dama din Bumbac 100%",
    collection: "trening-1", collections: ["trening-1"],
    price: 129, compareAt: 209, badge: "-38%", rating: 4.6, reviews: 188,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Livrare 2-7 zile lucratoare Simplu, confortabil si usor de purtat — trening dama din bumbac 100%, set 2 piese. Acest trening dama este realizat din bumbac 100% French Terry — un material moale, respirabil si usor elastic, care se asaza natural pe corp.",
    details: {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic", "care": "Spălare la 30°C, pe dos."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-06-23at19.54.34_2.jpg?v=1782236060&width=1200"],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-bumbac-102", "trening-din-bumbac-103", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-fata-34", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 34",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 89, compareAt: 149, badge: "-40%", rating: 4.9, reviews: 15,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Fata: 2 ANI–12 ANI"],
    desc: "Confort si dragoste in aceeasi tinuta — set tricouri mama si copil din bumbac 100%. Setul Mama si Fata 34 combina stilul cu confortul. Tricourile din bumbac 100% sunt moale la atingere, respirabile si potrivite pentru purtare zilnica — atat pentru mama, cat si pentru copil.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-02-23_at_21.46.36_4.jpg?v=1771876109&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-fata-16", "tricouri-mama-si-fata-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-fata-16", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 16",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 89, compareAt: 149, badge: "-40%", rating: 4.7, reviews: 23,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Mama: XS–XXL", "Fata: 4 ani–12 ani"],
    desc: "Set tricouri mama si copil din bumbac 100% — pentru mamele care iubesc tinutele asortate. Setul Mama si Fata 16 combina stilul cu confortul. Tricourile din bumbac 100% sunt moale la atingere, respirabile si potrivite pentru purtare zilnica — atat pentru mama, cat si pentru copil.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/mama-si-fata-16.jpg?v=1621523872&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-fata-3", "tricouri-mama-si-fata-38", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-fata-3", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 3",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 109, compareAt: 149, badge: "-27%", rating: 4.4, reviews: 214,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Mama: XS–XXL", "Fata: 2 ani–12 ani"],
    desc: "Un cadou perfect sau o tinuta de cuplu mama-copil — set tricouri din bumbac 100%. Designul Mama si Fata 3 face din acest set de tricouri mama si copil o alegere speciala. Bumbacul 100% ofera o senzatie placuta la purtare atat pentru mama, cat si pentru cel mic, fiind respirabil si usor de intretinut.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/mama-si-fata-3.jpg?v=1621524524&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-fata-38", "tricouri-mama-si-fata-15", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-fata-38", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 18",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 89, compareAt: 149, badge: "-40%", rating: 4.4, reviews: 21,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Fata: 2 ANI–12 ANI"],
    desc: "Un cadou perfect sau o tinuta de cuplu mama-copil — set tricouri din bumbac 100%. Setul Mama si Fata 18 combina stilul cu confortul. Tricourile din bumbac 100% sunt moale la atingere, respirabile si potrivite pentru purtare zilnica — atat pentru mama, cat si pentru copil.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-02-26at18.08.07.jpg?v=1645891954&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-fata-15", "tricouri-mama-si-baiatul-17", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-fata-15", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 15",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 89, compareAt: 149, badge: "-40%", rating: 4.9, reviews: 209,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Mama: XS–XXL", "Fata: 4 ani–12 ani"],
    desc: "Un cadou perfect sau o tinuta de cuplu mama-copil — set tricouri din bumbac 100%. Cu designul Mama si Fata 15, acest set de tricouri mama si copil din bumbac 100% este ideal pentru sedinte foto, iesiri in parc sau orice ocazie in care vreti sa fiti asortati. Materialul natural ofera confort pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/mama-si-fata-15.jpg?v=1621524174&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-baiatul-17", "tricouri-mama-si-fata-22", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-baiatul-17", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 17",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 89, compareAt: 149, badge: "-40%", rating: 4.7, reviews: 196,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Mama: XS–XXL", "Băiat: 4 ani–12 ani"],
    desc: "Un cadou perfect sau o tinuta de cuplu mama-copil — set tricouri din bumbac 100%. Setul Mama si Fata 17 combina stilul cu confortul. Tricourile din bumbac 100% sunt moale la atingere, respirabile si potrivite pentru purtare zilnica — atat pentru mama, cat si pentru copil.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/mama-si-baiatul-17.jpg?v=1621524292&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-fata-22", "tricouri-mama-si-fata-9", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-fata-22", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 22",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 89, compareAt: 149, badge: "-40%", rating: 4.7, reviews: 168,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Mama: XS–XXL", "Fata: 4 ani–12 ani"],
    desc: "Set tricouri mama si copil din bumbac 100% — pentru mamele care iubesc tinutele asortate. Setul Mama si Fata 22 combina stilul cu confortul. Tricourile din bumbac 100% sunt moale la atingere, respirabile si potrivite pentru purtare zilnica — atat pentru mama, cat si pentru copil.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/mama-si-fata.jpg?v=1621523972&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-fata-9", "tricouri-mama-si-fata-10", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-fata-9", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 9",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 89, compareAt: 149, badge: "-40%", rating: 4.4, reviews: 205,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Mama: XS–XXL", "Fata: 2 ani–12 ani"],
    desc: "Tricouri asortate mama si copil din bumbac 100% — pentru momente unice impreuna. Setul de tricouri mama si copil cu designul Mama si Fata 9 este realizat din bumbac 100%, placut la purtare si respirabil. Tricourile se asorteaza perfect, creand un look de familie coordonat si plin de personalitate.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/mama-si-fata-9.jpg?v=1621524049&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-fata-10", "tricouri-mama-si-fata-18", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-fata-10", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 10",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 89, compareAt: 149, badge: "-40%", rating: 4.4, reviews: 109,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Mama: XS–XXL", "Fata: 4 ani–12 ani"],
    desc: "Un cadou perfect sau o tinuta de cuplu mama-copil — set tricouri din bumbac 100%. Designul Mama si Fata 10 face din acest set de tricouri mama si copil o alegere speciala. Bumbacul 100% ofera o senzatie placuta la purtare atat pentru mama, cat si pentru cel mic, fiind respirabil si usor de intretinut.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/mama-si-fata-10.jpg?v=1621523929&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-fata-18", "tricouri-mama-si-fata-34", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-mama-si-fata-18", title: "Set Tricouri Mama si Copil din Bumbac 100% - Mama si Fata 18",
    collection: "tricouri-mama-si-princess", collections: ["tricouri-mama-si-princess"],
    price: 89, compareAt: 149, badge: "-40%", rating: 4.7, reviews: 121,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Mama: XS–XXL", "Fata: 4 ani–12 ani"],
    desc: "Un cadou perfect sau o tinuta de cuplu mama-copil — set tricouri din bumbac 100%. Setul de tricouri mama si copil cu designul Mama si Fata 18 este realizat din bumbac 100%, placut la purtare si respirabil. Tricourile se asorteaza perfect, creand un look de familie coordonat si plin de personalitate.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/mama-si-fata-18.jpg?v=1621524089&width=1200"],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricouri-mama-si-fata-34", "tricouri-mama-si-fata-16", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-craciun-black-3", title: "Tricouri din bumbac 100% Cuplu Craciun Black 3",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun", "tricouri-craciun"],
    price: 139, compareAt: 179, badge: "-22%", rating: 4.4, reviews: 55,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-12-01at10.56.56.jpg?v=1638349925&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricouri-cuplu-craciun-3", "tricou-cuplu-craciun-4", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-craciun-3", title: "Tricouri din bumbac 100% Cuplu Craciun 3",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun", "tricouri-craciun"],
    price: 99, compareAt: 139, badge: "-29%", rating: 4.5, reviews: 121,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-11-10at10.54.19_1.jpg?v=1636570823&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricou-cuplu-craciun-4", "tricouri-cuplu-wine-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-cuplu-craciun-4", title: "Tricouri din bumbac 100% Cuplu Craciun 4",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun", "tricouri-craciun"],
    price: 139, compareAt: 169, badge: "-18%", rating: 4.9, reviews: 123,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-11-10at10.54.20.jpg?v=1636570912&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricouri-cuplu-wine-2", "tricou-cuplu-craciun", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-wine-2", title: "Tricouri din bumbac 100% Cuplu Wine 2",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun", "tricouri-craciun"],
    price: 139, compareAt: 179, badge: "-22%", rating: 4.8, reviews: 70,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-12-01at10.56.48_1.jpg?v=1638353589&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricou-cuplu-craciun", "tricouri-cuplu-happy-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-cuplu-craciun", title: "Tricouri din bumbac 100% Cuplu Craciun",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun"],
    price: 99, compareAt: 139, badge: "-29%", rating: 4.4, reviews: 81,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-09-02at15.30.59.jpg?v=1630588650&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricouri-cuplu-happy-christmas", "tricouri-cuplu-craciun-8", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-happy-christmas", title: "Tricouri din bumbac 100% Cuplu Happy Christmas",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun", "tricouri-craciun"],
    price: 99, compareAt: 139, badge: "-29%", rating: 4.6, reviews: 39,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-19at3.01.21PM.jpg?v=1668863667&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricouri-cuplu-craciun-8", "tricouri-cuplu-cute-ren-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-craciun-8", title: "Tricouri din bumbac 100%Cuplu Craciun 8",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun", "tricouri-craciun"],
    price: 99, compareAt: 139, badge: "-29%", rating: 4.5, reviews: 199,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-11-10at10.54.22.jpg?v=1636571290&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricouri-cuplu-cute-ren-2", "tricouri-cuplu-merry-christmas-black", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-cute-ren-2", title: "Tricouri Cuplu Cute Ren 2",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun"],
    price: 99, compareAt: null, badge: "Set", rating: 4.4, reviews: 44,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-12-01at10.56.57.jpg?v=1638349761&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricouri-cuplu-merry-christmas-black", "tricouri-cuplu-om-de-craciun", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-merry-christmas-black", title: "Tricouri din bumbac 100% Cuplu Merry Christmas Black",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun", "tricouri-craciun"],
    price: 139, compareAt: 179, badge: "-22%", rating: 4.6, reviews: 101,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-12-01at10.56.56_1.jpg?v=1638349850&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricouri-cuplu-om-de-craciun", "tricouri-cuplu-craciun-black-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-om-de-craciun", title: "Tricouri din bumbac 100% Cuplu Om de Craciun",
    collection: "tricouri-cuplu-craciun", collections: ["tricouri-cuplu-craciun", "tricouri-craciun"],
    price: 99, compareAt: 139, badge: "-29%", rating: 4.7, reviews: 100,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-12-01at10.56.55_1.jpg?v=1638351253&width=1200"],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricouri-cuplu-craciun-black-3", "tricouri-cuplu-craciun-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-craciun-fericit", title: "Tricouri Familie Craciun fericit",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.8, reviews: 139,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2XL", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "Material: bumbac 100%. Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-24at23.51.04_7.jpg?v=1764021681&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-13", "tricouri-familie-12", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-13", title: "Tricou Tricouri Familie Merry Christmas – Bumbac 100%",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.5, reviews: 152,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - XS", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2XL", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou dama din bumbac 100%. Cu imprimeul Tricouri Familie Merry Christmas, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-11at23.22.14_3.jpg?v=1762896476&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-12", "tricouri-familie-9", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-12", title: "Tricou Tricouri Familie Craciun Fericit – Bumbac 100%",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.5, reviews: 80,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - XS", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2XL", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "Purtare usoara, aspect modern, confort zilnic — tricou dama din bumbac 100% natural. Imprimeul Tricouri Familie Craciun Fericit da un accent modern unei piese casual esentiale.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-11at23.22.14_4.jpg?v=1762896419&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-9", "tricouri-familie-7", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-9", title: "Tricou Tricouri Familie Scrisoare Pentru Mos Craciun – Bumbac 100%",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.8, reviews: 67,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - XS", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2XL", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Cu designul Tricouri Familie Scrisoare Pentru Mos Craciun, acest tricou dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-11at23.22.14_7.jpg?v=1762896259&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-7", "tricouri-familie-16", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-7", title: "Tricouri Familie Ren",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.7, reviews: 41,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - XS", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2XL", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "Material: bumbac 100%. Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-10at21.34.43.jpg?v=1762804496&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-16", "tricouri-familie-mos-craciun-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-16", title: "Tricou Tricouri Familie Mos Craciun cu Sacu Rosu – Bumbac 100%",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.8, reviews: 213,
    colors: [{"name": "Roșu", "hex": "#9E1B32"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - XS", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2XL", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "Alegerea potrivita pentru un look casual si relaxat — tricou dama din bumbac 100% natural. Imprimeul Tricouri Familie Mos Craciun cu Sacu Rosu da un accent modern unei piese casual esentiale.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-11at23.22.14.jpg?v=1762896646&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-mos-craciun-1", "tricouri-familie-5", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-mos-craciun-1", title: "Tricouri Familie Mos craciun",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.5, reviews: 179,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2X", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "Material: bumbac 100%. Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-24at23.51.04.jpg?v=1764021980&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-5", "tricouri-familie-17", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-5", title: "Tricouri Familie Family",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.4, reviews: 205,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - XS", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2XL", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "Material: bumbac 100%. Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-10at21.34.43_2.jpg?v=1762804393&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-17", "tricouri-familie-11", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-17", title: "Tricou Tricouri Familie Hohoho – Bumbac 100%",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.8, reviews: 163,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2XL", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou dama din bumbac 100%. Designul Tricouri Familie Hohoho se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-11at23.22.13.jpg?v=1762896699&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-11", "tricouri-familie-craciun-fericit", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-familie-11", title: "Tricou Tricouri Familie Merry Christmas – Bumbac 100%",
    collection: "tricouri-craciun-familie", collections: ["tricouri-craciun-familie"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.9, reviews: 195,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["DAMA - XS", "DAMA - S", "DAMA - M", "DAMA - L", "DAMA - XL", "DAMA - 2XL", "BARBAT - XS", "BARBAT - S", "BARBAT - M", "BARBAT - L", "BARBAT - XL", "BARBAT - 2XL", "COPIL 1 UNISEX - 2 ANI", "COPIL 1 UNISEX - 4 ANI", "COPIL 1 UNISEX - 6 ANI", "COPIL 1 UNISEX - 8 ANI", "COPIL 1 UNISEX - 10 ANI", "COPIL 1 UNISEX - 12 ANI", "COPIL 2 UNISEX - 2 ANI", "COPIL 2 UNISEX - 4 ANI", "COPIL 2 UNISEX - 6 ANI", "COPIL 2 UNISEX - 8 ANI", "COPIL 2 UNISEX - 10 ANI", "COPIL 2 UNISEX - 12 ANI"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou dama din bumbac 100%. Cu imprimeul Tricouri Familie Merry Christmas, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-11at23.22.14_5.jpg?v=1762896376&width=1200"],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-familie-craciun-fericit", "tricouri-familie-13", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-barbati-din-bumbac-100-merry-christmas-1", title: "Tricou din bumbac 100% Merry christmas",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 89, badge: "-56%", rating: 4.4, reviews: 191,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-21at23.39.11_8.jpg?v=1763762604&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-barbati-din-bumbac-100-white-christmas", "tricou-barbati-din-bumbac-100-merry-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-barbati-din-bumbac-100-white-christmas", title: "Tricou din bumbac 100% White christmas",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 89, badge: "-56%", rating: 4.9, reviews: 19,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-21at23.39.11_12.jpg?v=1763762320&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-barbati-din-bumbac-100-merry-christmas", "tricou-din-bumbac-100-mos-craciun-dance-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-barbati-din-bumbac-100-merry-christmas", title: "Tricou din bumbac 100% Merry christmas",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 89, badge: "-56%", rating: 4.9, reviews: 71,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-21at23.39.11_9.jpg?v=1763762526&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-din-bumbac-100-mos-craciun-dance-2", "tricou-barbati-din-bumbac-100-mos-craciun-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-din-bumbac-100-mos-craciun-dance-2", title: "Tricou din bumbac 100% Mos craciun dance 2",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 89, badge: "-56%", rating: 4.9, reviews: 16,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-24at22.31.18_7.jpg?v=1764016780&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-barbati-din-bumbac-100-mos-craciun-2", "tricou-din-bumbac-100-photo-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-barbati-din-bumbac-100-mos-craciun-2", title: "Tricou din bumbac 100% Mos craciun",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 89, badge: "-56%", rating: 4.6, reviews: 64,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-21at23.39.10.jpg?v=1763763312&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-din-bumbac-100-photo-christmas", "tricou-barbati-din-bumbac-100-new-wine", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-din-bumbac-100-photo-christmas", title: "Tricou din bumbac 100% Photo christmas",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.8, reviews: 178,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-24at23.29.35_1.jpg?v=1764020220&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-barbati-din-bumbac-100-new-wine", "tricou-barbati-din-bumbac-100-red-team", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-barbati-din-bumbac-100-new-wine", title: "Tricou din bumbac 100% New wine",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 89, badge: "-56%", rating: 4.4, reviews: 51,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-22at00.36.42.jpg?v=1763764683&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-barbati-din-bumbac-100-red-team", "tricou-barbati-din-bumbac-100-ball", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-barbati-din-bumbac-100-red-team", title: "Tricou din bumbac 100% Red team",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 89, badge: "-56%", rating: 4.4, reviews: 63,
    colors: [{"name": "Roșu", "hex": "#9E1B32"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-21at23.39.12_2.jpg?v=1763762118&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-barbati-din-bumbac-100-ball", "tricou-barbati-din-bumbac-100-hohoho", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-barbati-din-bumbac-100-ball", title: "Tricou din bumbac 100% Ball",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 89, badge: "-56%", rating: 4.9, reviews: 115,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-22at00.23.24_4.jpg?v=1763764273&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-barbati-din-bumbac-100-hohoho", "tricou-barbati-din-bumbac-100-merry-christmas-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-barbati-din-bumbac-100-hohoho", title: "Tricou din bumbac 100% Hohoho",
    collection: "tricouri-craciun-barbati", collections: ["tricouri-craciun-barbati"],
    price: 39, compareAt: 89, badge: "-56%", rating: 4.7, reviews: 118,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-21at23.39.12_4.jpg?v=1763761994&width=1200"],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-barbati-din-bumbac-100-merry-christmas-1", "tricou-barbati-din-bumbac-100-white-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-white-merry-christmas", title: "Bluza Alba Dama din Bumbac 100% - White Merry Christmas",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.6, reviews: 175,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-12-11at23.51.15_56efc9d7-cbf3-4d57-adf8-9821e6e1e24a.jpg?v=1765490157&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-alba-din-bumbac-100-merry-christmas-to-all", "bluza-turcoaz-din-bumbac-100-christmas-time", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-merry-christmas-to-all", title: "Bluza Alba Dama din Bumbac 100% - Merry Christmas to All",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.8, reviews: 130,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-21_at_00.35.46_14.jpg?v=1763678385&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-turcoaz-din-bumbac-100-christmas-time", "bluza-om-de-zapada-9", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-turcoaz-din-bumbac-100-christmas-time", title: "Bluza Turcoaz Dama din Bumbac 100% - Christmas Time",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 129, compareAt: 189, badge: "-32%", rating: 4.5, reviews: 82,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-22at19.38.59_9.jpg?v=1763836048&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-om-de-zapada-9", "bluza-turcoaz-din-bumbac-100-mos-craciun-cu-cadouri", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-om-de-zapada-9", title: "Bluza Alba Dama din Bumbac 100% - Om de Zapada",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.7, reviews: 111,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/3A7887AD-FD2C-4B6E-8A32-215B26460772.png?v=1763646830&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-turcoaz-din-bumbac-100-mos-craciun-cu-cadouri", "bluza-turcoaz-din-bumbac-100-om-de-zapada-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-turcoaz-din-bumbac-100-mos-craciun-cu-cadouri", title: "Bluza Turcoaz Dama din Bumbac 100% - Mos Craciun cu Cadouri",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 129, compareAt: 189, badge: "-32%", rating: 4.9, reviews: 126,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-22at19.38.59_3.jpg?v=1763835935&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-turcoaz-din-bumbac-100-om-de-zapada-1", "bluza-neagra-din-bumbac-100-brad-de-craciun", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-turcoaz-din-bumbac-100-om-de-zapada-1", title: "Bluza Turcoaz Dama din Bumbac 100% - Om de Zapada",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 129, compareAt: 189, badge: "-32%", rating: 4.8, reviews: 54,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-22at19.38.59_7.jpg?v=1763835871&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-neagra-din-bumbac-100-brad-de-craciun", "bluza-turcoaz-din-bumbac-100-happy-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-neagra-din-bumbac-100-brad-de-craciun", title: "Bluza Neagra Dama din Bumbac 100% - Brad de Craciun",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 79, compareAt: 159, badge: "-50%", rating: 4.6, reviews: 118,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-22_at_19.46.02.jpg?v=1763833592&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-turcoaz-din-bumbac-100-happy-1", "bluza-alba-din-bumbac-100-ren-si-om-de-zapada", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-turcoaz-din-bumbac-100-happy-1", title: "Bluza Turcoaz Dama din Bumbac 100% - Happy",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 129, compareAt: 189, badge: "-32%", rating: 4.5, reviews: 34,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-22at19.38.59_4.jpg?v=1763835821&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-alba-din-bumbac-100-ren-si-om-de-zapada", "bluza-turcoaz-din-bumbac-100-cute-ren", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-ren-si-om-de-zapada", title: "Bluza Alba Dama din Bumbac 100% - Ren si Om de Zapada",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.8, reviews: 75,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-20_at_21.22.57.jpg?v=1763666670&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-turcoaz-din-bumbac-100-cute-ren", "bluza-alba-din-bumbac-100-white-merry-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-turcoaz-din-bumbac-100-cute-ren", title: "Bluza Turcoaz Dama din Bumbac 100% - Cute Ren",
    collection: "bluze-craciun", collections: ["bluze-craciun"],
    price: 129, compareAt: 189, badge: "-32%", rating: 4.4, reviews: 172,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-22at19.38.59_11.jpg?v=1763835734&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-alba-din-bumbac-100-white-merry-christmas", "bluza-alba-din-bumbac-100-merry-christmas-to-all", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-din-bumbac-100-sweet-christmas", title: "Tricou din bumbac 100% Sweet christmas",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.5, reviews: 196,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-24at23.02.19_7.jpg?v=1764019029&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-din-bumbac-100-black-and-white-cat-1", "tricou-cute-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-din-bumbac-100-black-and-white-cat-1", title: "Tricou din bumbac 100% Black and white cat",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.5, reviews: 68,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-24at23.02.19_6.jpg?v=1764018765&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-cute-christmas", "bluza-red-team-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-cute-christmas", title: "Tricou din bumbac 100% Cute Christmas",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 104,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-14_at_09.12.12_2.jpg?v=1763105098&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-red-team-1", "tricou-mos-craciun-cu-sacu-rosu", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-red-team-1", title: "Tricou din bumbac 100% Red Team",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 39, compareAt: 69, badge: "-43%", rating: 4.4, reviews: 176,
    colors: [{"name": "Roșu", "hex": "#9E1B32"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-14_at_09.16.29_9.jpg?v=1763105425&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-mos-craciun-cu-sacu-rosu", "tricou-mos-craciun-7", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-mos-craciun-cu-sacu-rosu", title: "Tricou din bumbac 100% Mos Craciun Cu Sacu Rosu",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 110,
    colors: [{"name": "Roșu", "hex": "#9E1B32"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-14_at_09.12.12_4.jpg?v=1763105486&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-mos-craciun-7", "tricou-craciun-fericit-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-mos-craciun-7", title: "Tricou din bumbac 100% Mos Craciun",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 185,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-14_at_09.12.12_5.jpg?v=1763105766&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-craciun-fericit-3", "tricou-crazy-season", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-craciun-fericit-3", title: "Tricou din bumbac 100% Craciun Fericit",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 153,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-14_at_09.16.30_4.jpg?v=1763106052&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-crazy-season", "tricou-om-de-zapada-6", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-crazy-season", title: "Tricou din bumbac 100% Cozy Season",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 92,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-14_at_09.12.12_6.jpg?v=1763106124&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-om-de-zapada-6", "tricou-mos-craciun-8", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-om-de-zapada-6", title: "Tricou din bumbac 100% Om de zapada",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 172,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-15_at_00.58.05_8.jpg?v=1763161238&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-mos-craciun-8", "tricou-gold-brad", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-mos-craciun-8", title: "Tricou din bumbac 100% Mos Craciun 4",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 34,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-14_at_09.12.12_7.jpg?v=1763105577&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-gold-brad", "tricou-peace-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-gold-brad", title: "Tricou din bumbac 100% Gold Brad",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 132,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-15_at_00.58.05_7.jpg?v=1763161282&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-peace-christmas", "tricou-din-bumbac-100-sweet-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-peace-christmas", title: "Tricou din bumbac 100% Peace Christmas",
    collection: "tricouri-craciun", collections: ["tricouri-craciun"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 132,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–3XL", "BARBAT: XS–3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-11-14_at_09.12.12_8.jpg?v=1763107060&width=1200"],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-din-bumbac-100-sweet-christmas", "tricou-din-bumbac-100-black-and-white-cat-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-merry-christmas", title: "Set Bluze Cuplu Merry Christmas",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.6, reviews: 206,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.15PM.jpg?v=1668619109&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-ren-5", "set-bluze-cuplu-sweet-heart", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-ren-5", title: "Set Bluze Cuplu Ren 5",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.8, reviews: 202,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.24PM.jpg?v=1668620562&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-sweet-heart", "set-bluze-cuplu-happy-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-sweet-heart", title: "Set Bluze Cuplu Sweet Heart",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.9, reviews: 36,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.20PM.jpg?v=1668620059&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-happy-christmas", "set-bluze-cuplu-merry-christmas-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-happy-christmas", title: "Set Bluze Cuplu Happy Christmas",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.9, reviews: 153,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.28PM.jpg?v=1668621363&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-merry-christmas-1", "set-bluze-cuplu-happy", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-merry-christmas-1", title: "Set Bluze Cuplu Merry Christmas",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.8, reviews: 55,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.20PM_1.jpg?v=1668620135&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-happy", "set-bluze-cuplu-merry-christmas-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-happy", title: "Set Bluze Cuplu Happy",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.6, reviews: 116,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.18PM_1.jpg?v=1668619756&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-merry-christmas-3", "set-bluze-cuplu-ffamily", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-merry-christmas-3", title: "Set Bluze Cuplu Merry Christmas 3",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.8, reviews: 179,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.27PM_2.jpg?v=1668621297&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-ffamily", "set-bluze-cuplu-om-de-zapada", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-ffamily", title: "Set Bluze Cuplu Family",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.9, reviews: 203,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.41PM.jpg?v=1668621809&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-om-de-zapada", "set-bluze-cuplu-cute", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-om-de-zapada", title: "Set Bluze Cuplu Om de Zapada",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.7, reviews: 25,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.25PM_1.jpg?v=1668620779&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-cute", "set-bluze-cuplu-merry-christmas", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "set-bluze-cuplu-cute", title: "Set Bluze Cuplu Cute",
    collection: "set-bluze", collections: ["set-bluze"],
    price: 159, compareAt: null, badge: "Set", rating: 4.6, reviews: 9,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Material: 100% Bumbac POT EXISTA MICI DIFERENTE DE +/-1 LA TOATE MARIMILE ATENTIE!! Pentru intreaga circumferinta a bustului se va calcula C x 2 deoarece in tabelul de mai jos indica doar pentru partea din fata!",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.30PM_2.jpg?v=1668621751&width=1200"],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["set-bluze-cuplu-merry-christmas", "set-bluze-cuplu-ren-5", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-red-heart", title: "Set Tricouri Cuplu din Bumbac 100% - Red Heart",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 129, compareAt: null, badge: "Set", rating: 4.8, reviews: 145,
    colors: [{"name": "Roșu", "hex": "#9E1B32"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Asorteaza-te cu jumatatea ta! Set tricouri cuplu din bumbac 100%, comode si stilate. Designul Red Heart face din acest set de tricouri pentru cuplu o alegere speciala. Bumbacul 100% ofera o senzatie placuta la purtare atat pentru el, cat si pentru ea, fiind respirabil si usor de intretinut.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4177.jpg?v=1618435056&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-queen-king-1", "tricouri-shes-mine-hes-mine", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-queen-king-1", title: "Set Tricouri Cuplu din Bumbac 100% - Queen / King",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 129, compareAt: null, badge: "Set", rating: 4.7, reviews: 139,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Asorteaza-te cu jumatatea ta! Set tricouri cuplu din bumbac 100%, comode si stilate. Setul Queen / King combina stilul cu confortul. Tricourile din bumbac 100% sunt moale la atingere, respirabile si potrivite pentru purtare zilnica — atat pentru el, cat si pentru ea.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4128.jpg?v=1618434208&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-shes-mine-hes-mine", "tricouri-cuplu-always-together", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-shes-mine-hes-mine", title: "Set Tricouri Cuplu din Bumbac 100% - She's Mine / He's Mine",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 99, compareAt: null, badge: "Set", rating: 4.7, reviews: 199,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Un cadou perfect sau o tinuta asortata — set tricouri cuplu din bumbac 100%. Cu designul She's Mine / He's Mine, acest set de tricouri pentru cuplu din bumbac 100% este ideal pentru aniversari, sedinte foto, vacante sau orice ocazie in care vreti sa fiti asortati.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4142.jpg?v=1618434830&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-cuplu-always-together", "tricouri-cuplu-i-found-the-key", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-always-together", title: "Set Tricouri Cuplu din Bumbac 100% - Always Together",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 99, compareAt: null, badge: "Set", rating: 4.8, reviews: 167,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–2XL", "Bărbat: XS–2XL"],
    desc: "Un set de tricouri pentru cuplu din bumbac 100% — perfecte pentru momente speciale impreuna. Cu designul Always Together, acest set de tricouri pentru cuplu din bumbac 100% este ideal pentru aniversari, sedinte foto, vacante sau orice ocazie in care vreti sa fiti asortati.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-01-29at09.10.26_2.jpg?v=1738171461&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-cuplu-i-found-the-key", "tricouri-everything-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-i-found-the-key", title: "Set Tricouri Cuplu din Bumbac 100% - I Found the Key",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 99, compareAt: null, badge: "Set", rating: 4.9, reviews: 183,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Un set de tricouri pentru cuplu din bumbac 100% — perfecte pentru momente speciale impreuna. Cu designul I Found the Key, acest set de tricouri pentru cuplu din bumbac 100% este ideal pentru aniversari, sedinte foto, vacante sau orice ocazie in care vreti sa fiti asortati.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4151.jpg?v=1618435191&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-everything-2", "tricouri-where-are-you-im-here", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-everything-2", title: "Set Tricouri Cuplu din Bumbac 100% - Everything 2",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 99, compareAt: null, badge: "Set", rating: 4.9, reviews: 136,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Asorteaza-te cu jumatatea ta! Set tricouri cuplu din bumbac 100%, comode si stilate. Setul Everything 2 combina stilul cu confortul. Tricourile din bumbac 100% sunt moale la atingere, respirabile si potrivite pentru purtare zilnica — atat pentru el, cat si pentru ea.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4175.jpg?v=1618434927&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-where-are-you-im-here", "tricouri-cuple-lo-ve", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-where-are-you-im-here", title: "Set Tricouri Cuplu din Bumbac 100% - Where Are You? I'm Here!!",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 99, compareAt: null, badge: "Set", rating: 4.8, reviews: 57,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Tricouri pentru cuplu din bumbac 100% — confort si stil asortat pentru momente de neuitat. Setul de tricouri pentru cuplu cu designul Where Are You? I'm Here!! este realizat din bumbac 100%, placut la purtare si respirabil. Tricourile se asorteaza perfect, creand un look de cuplu coordonat si plin de personalitate.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4136.jpg?v=1618434484&width=1200", "https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4137.jpg?v=1618434485&width=1200", "https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4138.jpg?v=1618434486&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-cuple-lo-ve", "tricouri-cuplu-red-heart-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuple-lo-ve", title: "Set Tricouri Cuplu din Bumbac 100% - LO VE",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 99, compareAt: null, badge: "Set", rating: 4.8, reviews: 125,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Set tricouri asortate pentru cuplu din bumbac 100%, ideale pentru iesiri, aniversari sau sedinte foto. Setul LO VE combina stilul cu confortul. Tricourile din bumbac 100% sunt moale la atingere, respirabile si potrivite pentru purtare zilnica — atat pentru el, cat si pentru ea.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4156.jpg?v=1618435328&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-cuplu-red-heart-2", "tricouri-cuplu-im-hers-hes-mine", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-red-heart-2", title: "Set Tricouri Cuplu din Bumbac 100% - Red Heart 2",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 99, compareAt: null, badge: "Set", rating: 4.9, reviews: 127,
    colors: [{"name": "Roșu", "hex": "#9E1B32"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Tricouri asortate pentru cuplu din bumbac 100% — pentru momente unice impreuna. Cu designul Red Heart 2, acest set de tricouri pentru cuplu din bumbac 100% este ideal pentru aniversari, sedinte foto, vacante sau orice ocazie in care vreti sa fiti asortati. Materialul natural ofera confort pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4178.jpg?v=1618435130&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-cuplu-im-hers-hes-mine", "tricouri-everything-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-im-hers-hes-mine", title: "Set Tricouri Cuplu din Bumbac 100% - I'm Hers / He's Mine",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 129, compareAt: null, badge: "Set", rating: 4.7, reviews: 190,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Un cadou perfect sau o tinuta asortata — set tricouri cuplu din bumbac 100%. Setul I'm Hers / He's Mine combina stilul cu confortul. Tricourile din bumbac 100% sunt moale la atingere, respirabile si potrivite pentru purtare zilnica — atat pentru el, cat si pentru ea.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4125_1.jpg?v=1618434106&width=1200", "https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4126.jpg?v=1618434107&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-everything-3", "tricouri-cuplu-infinity", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-everything-3", title: "Set Tricouri Cuplu din Bumbac 100% - Everything 3",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 129, compareAt: null, badge: "Set", rating: 4.6, reviews: 208,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–XXL", "Bărbat: XS–XXL"],
    desc: "Un cadou perfect sau o tinuta asortata — set tricouri cuplu din bumbac 100%. Setul de tricouri pentru cuplu cu designul Everything 3 este realizat din bumbac 100%, placut la purtare si respirabil. Tricourile se asorteaza perfect, creand un look de cuplu coordonat si plin de personalitate.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4176.jpg?v=1618434992&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-cuplu-infinity", "tricouri-cuplu-red-heart", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricouri-cuplu-infinity", title: "Set Tricouri Cuplu din Bumbac 100% - Infinity",
    collection: "tricouri-cupluri", collections: ["tricouri-cupluri"],
    price: 99, compareAt: null, badge: "Set", rating: 4.6, reviews: 110,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["Damă: XS–2XL", "Bărbat: XS–2XL"],
    desc: "Tricouri pentru cuplu din bumbac 100% — confort si stil asortat pentru momente de neuitat. Designul Infinity face din acest set de tricouri pentru cuplu o alegere speciala. Bumbacul 100% ofera o senzatie placuta la purtare atat pentru el, cat si pentru ea, fiind respirabil si usor de intretinut.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-01-29at09.10.25.jpg?v=1738171701&width=1200"],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-cuplu-red-heart", "tricouri-queen-king-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-friends", title: "Tricou Dama Friends – Bumbac 100%",
    collection: "friends", collections: ["friends"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 96,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Cu imprimeul Friends, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.45.jpg?v=1705752494&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-wonderful", "tricou-vara", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-wonderful", title: "Tricou Dama Wonderful – Bumbac 100%",
    collection: "friends", collections: ["friends", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 188,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou dama din bumbac 100%. Imprimeul Wonderful completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.46_65952f6e-4784-4fef-b528-a7daf00445ea.jpg?v=1705752655&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-vara", "tricou-friends-4", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-vara", title: "Tricou Dama Vara – Bumbac 100%",
    collection: "friends", collections: ["friends", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 13,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Purtare usoara, aspect modern, confort zilnic — tricou dama din bumbac 100% natural. Imprimeul Vara da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-19at05.36.23_1.jpg?v=1705675205&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-friends-4", "tricou-soul-sisters", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-friends-4", title: "Tricou Dama Friends 4 – Bumbac 100%",
    collection: "friends", collections: ["friends", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 196,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Confort natural pentru purtarea de zi cu zi — tricou dama din bumbac 100%. Imprimeul Friends 4 da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.46.jpg?v=1705752533&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-soul-sisters", "tricou-best-friends", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-soul-sisters", title: "Tricou Dama Soul Sisters – Bumbac 100%",
    collection: "friends", collections: ["friends", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 188,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Confort natural pentru purtarea de zi cu zi — tricou dama din bumbac 100%. Imprimeul Soul Sisters completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.45_1.jpg?v=1705752612&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-best-friends", "tricou-best-friends-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-best-friends", title: "Tricou Dama Best Friends – Bumbac 100%",
    collection: "friends", collections: ["friends"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 43,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Confort, stil si lejeritate — un tricou dama din bumbac 100% cu un imprimeu care iese in evidenta. Imprimeul Best Friends completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.42_2.jpg?v=1705752444&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-best-friends-1", "tricou-friends-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-best-friends-1", title: "Tricou Dama Best Friends – Bumbac 100%",
    collection: "friends", collections: ["friends", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 47,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Confort, stil si lejeritate — un tricou dama din bumbac 100% cu un imprimeu care iese in evidenta. Imprimeul Best Friends completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.43.jpg?v=1705752461&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-friends-1", "tricou-life-is-better", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-friends-1", title: "Tricou Dama Friends 2 – Bumbac 100%",
    collection: "friends", collections: ["friends"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 109,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Simplu, confortabil si usor de inclus in tinutele zilnice — tricou dama din bumbac 100%. Imprimeul Friends 2 da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.42_1.jpg?v=1705752514&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-life-is-better", "tricou-hair", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-life-is-better", title: "Tricou Dama Life Is Better – Bumbac 100%",
    collection: "friends", collections: ["friends", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.5, reviews: 36,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Purtare usoara, aspect modern, confort zilnic — tricou dama din bumbac 100% natural. Imprimeul Life Is Better completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.44_1.jpg?v=1705752579&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-hair", "tricou-best-friends-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-hair", title: "Tricou Dama Hair – Bumbac 100%",
    collection: "friends", collections: ["friends", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 206,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou dama din bumbac 100%. Acest tricou dama cu imprimeu Hair este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni scurti. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.41.jpg?v=1705752554&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-best-friends-2", "tricou-sisters", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-best-friends-2", title: "Tricou Dama Best Friends – Bumbac 100%",
    collection: "friends", collections: ["friends"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 73,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Confort, stil si lejeritate — un tricou dama din bumbac 100% cu un imprimeu care iese in evidenta. Imprimeul Best Friends completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.44.jpg?v=1705752476&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-sisters", "tricou-friends-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-sisters", title: "Tricou Dama Sisters – Bumbac 100%",
    collection: "friends", collections: ["friends", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.5, reviews: 188,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Combinatia ideala intre confort si un look modern — tricou dama din bumbac 100%. Acest tricou dama cu imprimeu Sisters este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni scurti. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-20at03.20.42.jpg?v=1705752595&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-friends-2", "tricou-friends", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-friends-2", title: "Tricou Dama Friends – Bumbac 100%",
    collection: "friends", collections: ["friends", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.5, reviews: 98,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Cu imprimeul Friends, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-19at07.54.19.jpg?v=1705680563&width=1200"],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricou-friends", "tricou-wonderful", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-teacher-2", title: "Tricou Copii din Bumbac 100% - Teacher 2",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.9, reviews: 158,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Un tricou pentru copii din bumbac 100%, ideal pentru joaca, pentru scoala sau pentru iesirile in familie. Cu designul Teacher 2, acest tricou pentru copii din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul permite libertate de miscare.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.53.jpg?v=1755635100&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-blue-pink", "tricou-back-to-school-8", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-blue-pink", title: "Tricou Copii din Bumbac 100% - Blue Pink",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.6, reviews: 172,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "O alegere simpla si confortabila pentru garderoba celor mici — tricou pentru copii din bumbac 100%. Imprimeul Blue Pink completeaza un look vesel si jucaus. Materialul natural ofera confort la purtare, iar croiul lejer permite libertate de miscare pentru cei mici.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.53_1.jpg?v=1755635043&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-back-to-school-8", "tricou-back-to-school-7", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-back-to-school-8", title: "Tricou Copii din Bumbac 100% - Back to School 8",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.4, reviews: 115,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Respirabil, placut la purtare si usor de intretinut — tricou pentru copii din bumbac 100%. Designul Back to School 8 se integreaza usor in tinutele casual ale celor mici. Materialul respirabil si croiul confortabil il fac potrivit pentru scoala, joaca sau iesiri in familie.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.53_2.jpg?v=1755634993&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-back-to-school-7", "tricou-teacher", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-back-to-school-7", title: "Tricou Copii din Bumbac 100% - Back to School 7",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.6, reviews: 67,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Alegerea potrivita pentru un look casual si jucaus — tricou pentru copii din bumbac 100% natural. Cu designul Back to School 7, acest tricou pentru copii din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul permite libertate de miscare.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.53_3.jpg?v=1755634940&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-teacher", "tricou-back-to-school-6", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-teacher", title: "Tricou Copii din Bumbac 100% - Teacher",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.6, reviews: 196,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Alegerea potrivita pentru un look casual si jucaus — tricou pentru copii din bumbac 100% natural. Acest tricou pentru copii cu imprimeu Teacher este realizat din bumbac 100% si este potrivit atat pentru joaca, cat si pentru iesiri.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.53_4.jpg?v=1755634890&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-back-to-school-6", "tricou-welcome", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-back-to-school-6", title: "Tricou Copii din Bumbac 100% - Back to School 6",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.6, reviews: 136,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Simplu, confortabil si usor de asortat — tricou pentru copii din bumbac 100%. Designul Back to School 6 se integreaza usor in tinutele casual ale celor mici. Materialul respirabil si croiul confortabil il fac potrivit pentru scoala, joaca sau iesiri in familie.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.54.jpg?v=1755634844&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-welcome", "tricou-we-back", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-welcome", title: "Tricou Copii din Bumbac 100% - Welcome",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.9, reviews: 204,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Un tricou pentru copii din bumbac 100% care imbina confortul cu un design placut. Imprimeul Welcome da un accent vesel unei piese esentiale din garderoba copilului. Bumbacul 100% ofera o senzatie placuta la purtare si este usor de intretinut.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.54_1.jpg?v=1755634803&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-we-back", "tricou-blue-6", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-we-back", title: "Tricou Copii din Bumbac 100% - We Back",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.6, reviews: 38,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "home", sizeList: [],
    desc: "O piesa vesela pe care copilul o va purta cu placere — tricou pentru copii din bumbac 100%. Imprimeul We Back da un accent vesel unei piese esentiale din garderoba copilului. Bumbacul 100% ofera o senzatie placuta la purtare si este usor de intretinut.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.54_2.jpg?v=1755634764&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-blue-6", "tricou-back-to-school-5", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-blue-6", title: "Tricou Copii din Bumbac 100% - Blue",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.5, reviews: 39,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Confort si stil pentru cei mici — un tricou pentru copii din bumbac 100% cu un imprimeu vesel si colorat. Imprimeul Blue da un accent vesel unei piese esentiale din garderoba copilului. Bumbacul 100% ofera o senzatie placuta la purtare si este usor de intretinut.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.54_3.jpg?v=1755634719&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-back-to-school-5", "tricou-teacher-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-back-to-school-5", title: "Tricou Copii din Bumbac 100% - Back to School 5",
    collection: "tricouri-copii", collections: ["tricouri-copii"],
    price: 39, compareAt: 59, badge: "-34%", rating: 4.6, reviews: 20,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Purtare usoara si confort zilnic — tricou pentru copii din bumbac 100% natural. Cu imprimeul Back to School 5, acest tricou pentru copii din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica in orice sezon.",
    details: {"material": "Bumbac 100%", "fit": "Regular copii", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.54_4.jpg?v=1755634683&width=1200"],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-teacher-2", "tricou-blue-pink", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-stylish-team", title: "Tricou Alb Dama din Bumbac 100% - Stylish Team",
    collection: "mom", collections: ["mom", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 110,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou dama din bumbac 100%. Cu designul Stylish Team, acest tricou dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2023-12-23at07.36.49.jpg?v=1703346968&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-lovely-time", "tricou-white-dress", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-lovely-time", title: "Tricou Alb Dama din Bumbac 100% - Lovely Time",
    collection: "mom", collections: ["mom", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 161,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Designul Lovely Time se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-18_at_13.24.49_8.jpg?v=1768737632&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-white-dress", "tricou-my-cute-girl", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-white-dress", title: "Tricou Alb Dama din Bumbac 100% - White Dress",
    collection: "mom", collections: ["mom", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 60,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Combinatia ideala intre confort si un look feminin — tricou dama din bumbac 100%. Cu designul White Dress, acest tricou dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2023-12-23at07.36.37.jpg?v=1703347059&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-my-cute-girl", "tricou-my-son-my-love-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-my-cute-girl", title: "Tricou Alb Dama din Bumbac 100% - My Cute Girl",
    collection: "mom", collections: ["mom"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 102,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa casual pe care o vei purta cu placere — tricou dama din bumbac 100%. Imprimeul My Cute Girl da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-18_at_13.24.49_7.jpg?v=1768737209&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-my-son-my-love-1", "tricou-lovin-the-mom-life", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-my-son-my-love-1", title: "Tricou Alb Dama din Bumbac 100% - My Son My Love",
    collection: "mom", collections: ["mom", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 62,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Simplu, confortabil si usor de inclus in tinutele zilnice — tricou dama din bumbac 100%. Imprimeul My Son My Love da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-09-26at20.20.14_3.jpg?v=1664217171&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-lovin-the-mom-life", "tricou-mom-wow", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-lovin-the-mom-life", title: "Tricou Alb Dama din Bumbac 100% - Lovin the Mom Life",
    collection: "mom", collections: ["mom", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 129,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Confort natural pentru purtarea de zi cu zi — tricou dama din bumbac 100%. Acest tricou dama cu imprimeu Lovin the Mom Life este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2023-12-23at07.36.38.jpg?v=1703346584&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-mom-wow", "tricou-pink-dress-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-mom-wow", title: "Tricou Alb Dama din Bumbac 100% - Mom Wow",
    collection: "mom", collections: ["mom", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 159,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Confort natural pentru purtarea de zi cu zi — tricou dama din bumbac 100%. Designul Mom Wow se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-19at07.54.32.jpg?v=1705681755&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-pink-dress-1", "tricou-kiss-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-pink-dress-1", title: "Tricou Alb Dama din Bumbac 100% - Pink Dress",
    collection: "mom", collections: ["mom", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 97,
    colors: [{"name": "Roz", "hex": "#E3C8C4"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou dama din bumbac 100%. Imprimeul Pink Dress da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2023-12-23at07.36.40.jpg?v=1703346757&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-kiss-3", "tricou-black-super-mom-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-kiss-3", title: "Tricou Alb Dama din Bumbac 100% - Kiss 3",
    collection: "mom", collections: ["mom", "tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 197,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou dama din bumbac 100%. Cu imprimeul Kiss 3, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2023-12-23at07.36.39.jpg?v=1703346415&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-black-super-mom-1", "tricou-stylish-team", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-black-super-mom-1", title: "Tricou Negru Dama din Bumbac 100% - Black Super Mom",
    collection: "mom", collections: ["mom", "tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.8, reviews: 16,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Cu imprimeul Black Super Mom, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-10-20at12.32.12.jpg?v=1634722938&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-stylish-team", "tricou-lovely-time", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-color-face", title: "Tricou Dama Color Face – Bumbac 100%",
    collection: "tricouri-face", collections: ["tricouri-face"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 44,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Confort, stil si lejeritate — un tricou dama din bumbac 100% cu un imprimeu care iese in evidenta. Acest tricou dama cu imprimeu Color Face este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni scurti.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-11_at_18.13.41_6.jpg?v=1768148936&width=1200"],
    tone: ["#E8E2D9", "#8C6A4F"], upsells: ["tricou-black-face", "tricou-flower-girl-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-black-face", title: "Tricou Dama Black Face – Bumbac 100%",
    collection: "tricouri-face", collections: ["tricouri-face"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.5, reviews: 136,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Confort natural pentru purtarea de zi cu zi — tricou dama din bumbac 100%. Cu designul Black Face, acest tricou dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-11_at_18.13.41_5.jpg?v=1768148851&width=1200"],
    tone: ["#E8E2D9", "#8C6A4F"], upsells: ["tricou-flower-girl-3", "tricou-face-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-flower-girl-3", title: "Tricou Alb Dama din Bumbac 100% - Flower Girl",
    collection: "tricouri-face", collections: ["tricouri-face"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 88,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou alb dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Cu designul Flower Girl, acest tricou alb dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-04_at_15.09.06_3.jpg?v=1767532591&width=1200"],
    tone: ["#E8E2D9", "#8C6A4F"], upsells: ["tricou-face-1", "tricou-face-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-face-1", title: "Tricou Dama Face – Bumbac 100%",
    collection: "tricouri-face", collections: ["tricouri-face"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.5, reviews: 19,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Comod, respirabil si potrivit pentru orice tinuta lejera — tricou dama din bumbac 100%. Cu imprimeul Face, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-05_at_23.20.23_8.jpg?v=1767648541&width=1200"],
    tone: ["#E8E2D9", "#8C6A4F"], upsells: ["tricou-face-3", "tricou-color-face", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-face-3", title: "Tricou Dama Face 3 – Bumbac 100%",
    collection: "tricouri-face", collections: ["tricouri-face"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 81,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Alegerea potrivita pentru un look casual si relaxat — tricou dama din bumbac 100% natural. Cu imprimeul Face 3, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-05_at_23.20.23_18.jpg?v=1767648495&width=1200"],
    tone: ["#E8E2D9", "#8C6A4F"], upsells: ["tricou-color-face", "tricou-black-face", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-i-love-romania", title: "Tricou Dama I Love Romania – Bumbac 100%",
    collection: "tricouri-romania", collections: ["tricouri-romania"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 63,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–XXL", "BARBAT: XS–XXL"],
    desc: "Comod, respirabil si potrivit pentru orice tinuta lejera — tricou dama din bumbac 100%. Cu imprimeul I Love Romania, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2024-06-17_at_12.27.05.jpg?v=1718653245&width=1200"],
    tone: ["#E3E8F0", "#27408B"], upsells: ["tricou-romania", "tricou-romania-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-romania", title: "Tricou Romania",
    collection: "tricouri-romania", collections: ["tricouri-romania"],
    price: 39, compareAt: null, badge: null, rating: 4.7, reviews: 157,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["BARBAT: XS–XXL", "DAMA: XS–XXL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-06-17at12.27.05_1.jpg?v=1718653744&width=1200"],
    tone: ["#E3E8F0", "#27408B"], upsells: ["tricou-romania-2", "tricou-i-love-romania", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-romania-2", title: "Tricou Dama Romania 2 – Bumbac 100%",
    collection: "tricouri-romania", collections: ["tricouri-romania"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 14,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["BARBAT: XS–XXL", "DAMA: XS–XXL"],
    desc: "Confort natural pentru purtarea de zi cu zi — tricou dama din bumbac 100%. Acest tricou dama cu imprimeu Romania 2 este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni scurti. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular, toate piesele din set", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-06-17at12.27.06.jpg?v=1718653836&width=1200"],
    tone: ["#E3E8F0", "#27408B"], upsells: ["tricou-i-love-romania", "tricou-romania", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-makes-you-happy", title: "Tricou dama din bumbac 100% Makes you happy",
    collection: "tricouri-text", collections: ["tricouri-text"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.8, reviews: 148,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_1.jpg?v=1759049897&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-rased", "tricou-dama-din-bumbac-100-momlife", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-rased", title: "Tricou dama din bumbac 100% Rased",
    collection: "tricouri-text", collections: ["tricouri-text"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.9, reviews: 21,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_24.jpg?v=1759050948&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-momlife", "tricou-dama-din-bumbac-100-low-battery", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-momlife", title: "Tricou Alb Dama din Bumbac 100% - Momlife",
    collection: "mom", collections: ["mom", "tricouri-text"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 31,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou dama din bumbac 100%. Imprimeul Momlife completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_20.jpg?v=1759052366&width=1200"],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-stylish-team", "tricou-lovely-time", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-low-battery", title: "Tricou dama din bumbac 100% Low battery",
    collection: "tricouri-text", collections: ["tricouri-text"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.5, reviews: 207,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.49.jpg?v=1759052157&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-good-things", "tricou-dama-din-bumbac-100-love", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-good-things", title: "Tricou dama din bumbac 100% Good Things",
    collection: "tricouri-text", collections: ["tricouri-text"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.9, reviews: 103,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.49_7.jpg?v=1759051998&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-love", "tricou-dama-din-bumbac-100-cosmopolitan", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-love", title: "Tricou dama din bumbac 100% Love",
    collection: "tricouri-text", collections: ["tricouri-text"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.7, reviews: 69,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_16.jpg?v=1759051811&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-cosmopolitan", "tricou-dama-din-bumbac-100-nurse-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-cosmopolitan", title: "Tricou dama din bumbac 100% Cosmopolitan",
    collection: "tricouri-text", collections: ["tricouri-text"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.7, reviews: 135,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.49_2.jpg?v=1759051624&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-nurse-1", "tricou-dama-din-bumbac-100-malibu", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-nurse-1", title: "Tricou dama din bumbac 100% Nurse",
    collection: "tricouri-text", collections: ["tricouri-text"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.7, reviews: 37,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.49_1.jpg?v=1759051507&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-malibu", "tricou-dama-din-bumbac-100-love-yourself", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-malibu", title: "Tricou dama din bumbac 100% Malibu",
    collection: "tricouri-text", collections: ["tricouri-text"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.6, reviews: 11,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.49_6.jpg?v=1759051409&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-love-yourself", "tricou-dama-din-bumbac-100-makes-you-happy", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-love-yourself", title: "Tricou dama din bumbac 100% Love yourself",
    collection: "tricouri-text", collections: ["tricouri-text"],
    price: 39, compareAt: 79, badge: "-51%", rating: 4.6, reviews: 198,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Material: bumbac 100% Greutate material: 165 g/m² Mărimi disponibile: XS, S , M , L , XL , 2XL, 3XL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.49_5.jpg?v=1759051332&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-makes-you-happy", "tricou-dama-din-bumbac-100-rased", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-din-bumbac-100-stay-independet", title: "Tricou Oversize Dama din Bumbac 100% - Stay independet",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.6, reviews: 16,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou oversize dama din bumbac 100%. Imprimeul Stay independet completeaza un look relaxat si modern. Materialul natural cu gramaj de 200 g/m² ofera confort la purtare, iar croiul oversize ofera libertate de miscare si un aspect casual contemporan.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-24at14.55.46.jpg?v=1758752146&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-din-bumbac-100-blue-fashion", "tricou-oversize-din-bumbac-100-hey", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-din-bumbac-100-blue-fashion", title: "Tricou Oversize Dama din Bumbac 100% - Blue fashion",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.9, reviews: 174,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou oversize dama din bumbac 100%. Imprimeul Blue fashion da un accent modern unei piese casual esentiale. Bumbacul 100% cu gramaj premium ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-24at14.55.46_1.jpg?v=1758752083&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-din-bumbac-100-hey", "tricou-oversize-din-bumbac-100-infinite-butterflies", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-din-bumbac-100-hey", title: "Tricou Oversize Dama din Bumbac 100% - Hey",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.4, reviews: 27,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou oversize dama din bumbac 100%. Acest tricou oversize dama cu imprimeu Hey este realizat din bumbac 100% cu gramaj de 200 g/m² si se asorteaza usor cu blugi, pantaloni scurti sau joggers.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-24at14.55.46_3.jpg?v=1758751931&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-din-bumbac-100-infinite-butterflies", "tricou-oversize-din-bumbac-100-imperfect", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-din-bumbac-100-infinite-butterflies", title: "Tricou Oversize Dama din Bumbac 100% - Infinite butterflies",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.5, reviews: 83,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou oversize dama din bumbac 100%. Cu imprimeul Infinite butterflies, acest tricou oversize dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca piesa statement in tinutele streetwear.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-24at14.55.46_8.jpg?v=1758751638&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-din-bumbac-100-imperfect", "tricou-oversize-vogue", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-din-bumbac-100-imperfect", title: "Tricou Oversize Dama din Bumbac 100% - Imperfect",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.6, reviews: 32,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Confort natural si croi lejer — tricou oversize dama din bumbac 100%. Acest tricou oversize dama cu imprimeu Imperfect este realizat din bumbac 100% cu gramaj de 200 g/m² si se asorteaza usor cu blugi, pantaloni scurti sau joggers.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-24at14.55.46_9.jpg?v=1758751501&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-vogue", "tricou-oversize-coffee-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-vogue", title: "Tricou Oversize Dama din Bumbac 100% - Vogue",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.9, reviews: 111,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Simplu, confortabil si usor de inclus in tinutele zilnice — tricou oversize dama din bumbac 100%. Acest tricou oversize dama cu imprimeu Vogue este realizat din bumbac 100% cu gramaj de 200 g/m² si se asorteaza usor cu blugi, pantaloni scurti sau joggers.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-12-28at03.17.34_3.jpg?v=1735385320&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-coffee-2", "tricou-oversize-fundita-multicolor", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-coffee-2", title: "Tricou Oversize Dama din Bumbac 100% - Coffee",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.9, reviews: 87,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Combinatia ideala intre confort si un look streetwear — tricou oversize dama din bumbac 100%. Designul Coffee se integreaza usor in tinutele casual sau streetwear. Materialul respirabil cu gramaj de 200 g/m² si croiul oversize il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-12-28at03.17.34_6.jpg?v=1735385476&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-fundita-multicolor", "tricou-oversize-coffee-style", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-fundita-multicolor", title: "Tricou Oversize Dama din Bumbac 100% - Fundita Multicolor",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.8, reviews: 193,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Comod, respirabil si potrivit pentru orice tinuta lejera — tricou oversize dama din bumbac 100%. Cu designul Fundita Multicolor, acest tricou oversize dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul lejer se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-12-21at03.23.38_10.jpg?v=1734782841&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-coffee-style", "tricou-oversize-simple", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-coffee-style", title: "Tricou Oversize Dama din Bumbac 100% - Coffee Style",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.7, reviews: 147,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Combinatia ideala intre confort si un look streetwear — tricou oversize dama din bumbac 100%. Cu designul Coffee Style, acest tricou oversize dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul lejer se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-12-28at03.17.34_8.jpg?v=1735385175&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-simple", "tricou-oversize-din-bumbac-100-stay-independet", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-oversize-simple", title: "Tricou Oversize Dama din Bumbac 100% - Simple",
    collection: "tricouri-oversize", collections: ["tricouri-oversize"],
    price: 69, compareAt: 85, badge: "-19%", rating: 4.9, reviews: 179,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Simplu, confortabil si usor de inclus in tinutele zilnice — tricou oversize dama din bumbac 100%. Imprimeul Simple da un accent modern unei piese casual esentiale. Bumbacul 100% cu gramaj premium ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Oversize, umeri căzuți", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-12-21at03.23.38.jpg?v=1734782131&width=1200"],
    tone: ["#EDEAE4", "#57534E"], upsells: ["tricou-oversize-din-bumbac-100-stay-independet", "tricou-oversize-din-bumbac-100-blue-fashion", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-way-maker", title: "Tricou Negru Dama din Bumbac 100% - Way Maker",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.8, reviews: 30,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Confort, stil si feminitate — un tricou negru dama din bumbac 100% cu un imprimeu care iese in evidenta. Cu designul Way Maker, acest tricou negru dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-03at22.22.26_26.jpg?v=1777838738&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-dama-din-bumbac-100-money-maker-1", "tricou-dama-din-bumbac-100-crazy-idea-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-money-maker-1", title: "Tricou Negru Dama din Bumbac 100% - Money Maker",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.5, reviews: 87,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou negru dama din bumbac 100%. Imprimeul Money Maker da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.15_8.jpg?v=1778530444&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-dama-din-bumbac-100-crazy-idea-1", "tricou-dama-din-bumbac-100-pink-drink-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-crazy-idea-1", title: "Tricou Negru Dama din Bumbac 100% - Crazy Idea",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.7, reviews: 182,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Purtare usoara, aspect modern, confort zilnic — tricou negru dama din bumbac 100% natural. Designul Crazy Idea se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.15_7.jpg?v=1778530537&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-dama-din-bumbac-100-pink-drink-1", "tricou-dama-din-bumbac-100-power-puff-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-pink-drink-1", title: "Tricou Negru Dama din Bumbac 100% - Pink Drink",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.6, reviews: 154,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "O piesa casual pe care o vei purta cu placere — tricou negru dama din bumbac 100%. Designul Pink Drink se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.15_5.jpg?v=1778530642&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-dama-din-bumbac-100-power-puff-1", "tricou-dama-din-bumbac-100-black-heels-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-power-puff-1", title: "Tricou Negru Dama din Bumbac 100% - Power Puff",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.6, reviews: 41,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Un tricou negru dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Imprimeul Power Puff da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.15_4.jpg?v=1778530724&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-dama-din-bumbac-100-black-heels-1", "tricou-dama-din-bumbac-100-drink-coffee-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-black-heels-1", title: "Tricou Negru Dama din Bumbac 100% - Black Heels",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.6, reviews: 50,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Comod, respirabil si potrivit pentru orice tinuta lejera — tricou negru dama din bumbac 100%. Imprimeul Black Heels da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.15_2.jpg?v=1778530792&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-dama-din-bumbac-100-drink-coffee-1", "tricou-din-bumbac-100-fundita-gold", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-drink-coffee-1", title: "Tricou Negru Dama din Bumbac 100% - Drink Coffee",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.4, reviews: 94,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Un tricou negru dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Cu imprimeul Drink Coffee, acest tricou negru dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.15_3.jpg?v=1778530863&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-din-bumbac-100-fundita-gold", "tricou-din-bumbac-100-small-heart", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-din-bumbac-100-fundita-gold", title: "Tricou Negru Dama din Bumbac 100% - Fundita Gold",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.5, reviews: 113,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Combinatia ideala intre confort si un look modern — tricou negru dama din bumbac 100%. Imprimeul Fundita Gold completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-04-30at23.14.26.jpg?v=1777580446&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-din-bumbac-100-small-heart", "tricou-din-bumbac-100-walk-cat", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-din-bumbac-100-small-heart", title: "Tricou Negru Dama din Bumbac 100% - Small Heart",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.5, reviews: 18,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Purtare usoara, aspect modern, confort zilnic — tricou negru dama din bumbac 100% natural. Imprimeul Small Heart da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-04-30at23.14.26_1.jpg?v=1777580376&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-din-bumbac-100-walk-cat", "tricou-din-bumbac-100-dramatic", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-din-bumbac-100-walk-cat", title: "Tricou Negru Dama din Bumbac 100% - Walk Cat",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.4, reviews: 24,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Combinatia ideala intre confort si un look modern — tricou negru dama din bumbac 100%. Acest tricou negru dama cu imprimeu Walk Cat este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-04-30at23.14.26_2.jpg?v=1777580320&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-din-bumbac-100-dramatic", "tricou-din-bumbac-100-3-white-flowers", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-din-bumbac-100-dramatic", title: "Tricou Negru Dama din Bumbac 100% - Dramatic",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.4, reviews: 44,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Alegerea potrivita pentru un look casual si feminin — tricou negru dama din bumbac 100% natural. Designul Dramatic se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-04-30at23.14.26_3.jpg?v=1777580236&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-din-bumbac-100-3-white-flowers", "tricou-dama-din-bumbac-100-way-maker", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-din-bumbac-100-3-white-flowers", title: "Tricou Negru Dama din Bumbac 100% - 3 White Flowers",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.6, reviews: 154,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou negru dama din bumbac 100%. Designul 3 White Flowers se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-04-30at23.14.26_4.jpg?v=1777580166&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-dama-din-bumbac-100-way-maker", "tricou-dama-din-bumbac-100-money-maker-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-faith-hope-love", title: "Tricou Alb Dama din Bumbac 100% - Faith Hope Love",
    collection: "tricouri-primavara", collections: ["tricouri-primavara", "best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.7, reviews: 68,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou dama din bumbac 100%. Imprimeul Faith Hope Love completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-06_at_17.22.03.jpg?v=1772810587&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-nice-dragon-fly", "tricou-mov-libelula", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-nice-dragon-fly", title: "Tricou Alb Dama din Bumbac 100% - Nice Dragon Fly",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 181,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou dama din bumbac 100%. Acest tricou dama cu imprimeu Nice Dragon Fly este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.09_4.jpg?v=1767797332&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-mov-libelula", "tricou-dragon-fly", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-mov-libelula", title: "Tricou Alb Dama din Bumbac 100% - Mov Libelula",
    collection: "tricouri-primavara", collections: ["tricouri-primavara", "best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.4, reviews: 141,
    colors: [{"name": "Mov", "hex": "#8E7CA5"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "O piesa casual pe care o vei purta cu placere — tricou dama din bumbac 100%. Imprimeul Mov Libelula da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-06_at_17.22.03_1.jpg?v=1772810622&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-dragon-fly", "tricou-love-black-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dragon-fly", title: "Tricou Alb Dama din Bumbac 100% - Dragon Fly",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 29,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "O piesa casual pe care o vei purta cu placere — tricou dama din bumbac 100%. Imprimeul Dragon Fly completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.09_3.jpg?v=1767797646&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-love-black-1", "tricou-change-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-love-black-1", title: "Tricou Alb Dama din Bumbac 100% - Love Black",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.9, reviews: 165,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Confort natural pentru purtarea de zi cu zi — tricou dama din bumbac 100%. Imprimeul Love Black completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.09_2.jpg?v=1767797909&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-change-1", "tricou-hope", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-change-1", title: "Tricou Alb Dama din Bumbac 100% - Change",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.5, reviews: 199,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Comod, respirabil si potrivit pentru orice tinuta lejera — tricou dama din bumbac 100%. Imprimeul Change da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.09_1.jpg?v=1767798018&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-hope", "tricou-petala-6", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-hope", title: "Tricou Alb Dama din Bumbac 100% - Hope",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 64,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Purtare usoara, aspect modern, confort zilnic — tricou dama din bumbac 100% natural. Imprimeul Hope da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.09.jpg?v=1767798126&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-petala-6", "tricou-libelula-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-petala-6", title: "Tricou Alb Dama din Bumbac 100% - Petala 3",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 166,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Combinatia ideala intre confort si un look feminin — tricou dama din bumbac 100%. Cu imprimeul Petala 3, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.08_15.jpg?v=1767797261&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-libelula-2", "tricou-petala-5", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-libelula-2", title: "Tricou Alb Dama din Bumbac 100% - Libelula 2",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 35,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    desc: "Confort natural pentru purtarea de zi cu zi — tricou dama din bumbac 100%. Cu imprimeul Libelula 2, acest tricou dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.08_14.jpg?v=1767797709&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-petala-5", "tricou-petala-verde", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-petala-5", title: "Tricou Alb Dama din Bumbac 100% - Petala 2",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 89,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou dama din bumbac 100%. Imprimeul Petala 2 completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.08_13.jpg?v=1767797282&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-petala-verde", "tricou-infinit-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-petala-verde", title: "Tricou Alb Dama din Bumbac 100% - Petala Verde",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 138,
    colors: [{"name": "Verde", "hex": "#7A9471"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa casual pe care o vei purta cu placere — tricou dama din bumbac 100%. Designul Petala Verde se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.08_12.jpg?v=1767797304&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-infinit-3", "tricou-faith-hope-love", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-infinit-3", title: "Tricou Alb Dama din Bumbac 100% - Infinit 3",
    collection: "tricouri-primavara", collections: ["tricouri-primavara"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 128,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Imprimeul Infinit 3 da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-07_at_13.25.08_10.jpg?v=1767797354&width=1200"],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-faith-hope-love", "tricou-nice-dragon-fly", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-cat-walk", title: "Bluza Alba Dama din Bumbac 100% Cat Walk",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.9, reviews: 57,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Confort, stil si feminitate — o bluza dama din bumbac 100% cu un imprimeu care iese in evidenta. Imprimeul Cat Walk completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul face piesa usor de integrat in tinutele casual sau office de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at17.03.36.jpg?v=1767366280&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-5-hearts-2", "bluza-alba-din-bumbac-100-pinky", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-5-hearts-2", title: "Bluza Alba Dama din Bumbac 100% 5 Hearts 2",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.7, reviews: 204,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Piesa comoda, usor de purtat si de asortat — bluza dama din bumbac 100%. Aceasta bluza dama cu imprimeu 5 Hearts 2 este realizata din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni office. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at16.10.03_1.jpg?v=1767363350&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-pinky", "bluza-alba-din-bumbac-100-cat-and-hand", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-pinky", title: "Bluza Alba Dama din Bumbac 100% Pinky",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.7, reviews: 32,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BABRBAT: XS–2XL"],
    desc: "Alegerea potrivita pentru un look casual si feminin — bluza dama din bumbac 100% natural. Aceasta bluza dama cu imprimeu Pinky este realizata din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni office. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.29_10.jpg?v=1767360816&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-cat-and-hand", "bluza-alba-din-bumbac-100-one-day-at-a-time", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-cat-and-hand", title: "Bluza Alba Dama din Bumbac 100% Cat and Hand",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.4, reviews: 129,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — bluza dama din bumbac 100%. Designul Cat and Hand se integreaza usor in tinutele casual sau office. Materialul respirabil si croiul confortabil o fac potrivita pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.29_9.jpg?v=1767360965&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-one-day-at-a-time", "bluza-alba-din-bumbac-100-amalfi-coast", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-one-day-at-a-time", title: "Bluza Alba Dama din Bumbac 100% One Day at a Time",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.8, reviews: 22,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Alegerea potrivita pentru un look casual si feminin — bluza dama din bumbac 100% natural. Cu designul One Day at a Time, aceasta bluza dama din bumbac 100% este gandita pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.29_8.jpg?v=1767361405&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-amalfi-coast", "bluza-alba-din-bumbac-100-aperol", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-amalfi-coast", title: "Bluza Alba Dama din Bumbac 100% Amalfi Coast",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.4, reviews: 17,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Alegerea potrivita pentru un look casual si feminin — bluza dama din bumbac 100% natural. Cu designul Amalfi Coast, aceasta bluza dama din bumbac 100% este gandita pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.29_7.jpg?v=1767361544&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-aperol", "bluza-alba-din-bumbac-100-aje", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-aperol", title: "Bluza Alba Dama din Bumbac 100% Aperol",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.4, reviews: 200,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Alegerea potrivita pentru un look casual si feminin — bluza dama din bumbac 100% natural. Cu designul Aperol, aceasta bluza dama din bumbac 100% este gandita pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.29_6.jpg?v=1767361690&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-aje", "bluza-alba-din-bumbac-100-5-color-hearts", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-aje", title: "Bluza Alba Dama din Bumbac 100% Aje",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.6, reviews: 67,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Piesa comoda, usor de purtat si de asortat — bluza dama din bumbac 100%. Cu designul Aje, aceasta bluza dama din bumbac 100% este gandita pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.29_5.jpg?v=1767361832&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-5-color-hearts", "bluza-alba-din-bumbac-100-one-star", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-5-color-hearts", title: "Bluza Alba Dama din Bumbac 100% 5 Color Hearts",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.6, reviews: 128,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Comoda, respirabila si potrivita pentru orice tinuta lejera — bluza dama din bumbac 100%. Aceasta bluza dama cu imprimeu 5 Color Hearts este realizata din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni office. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.29_3.jpg?v=1767361973&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-one-star", "bluza-alba-din-bumbac-100-bicycle", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-one-star", title: "Bluza Alba Dama din Bumbac 100% One Star",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.7, reviews: 96,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Comoda, respirabila si potrivita pentru orice tinuta lejera — bluza dama din bumbac 100%. Designul One Star se integreaza usor in tinutele casual sau office. Materialul respirabil si croiul confortabil o fac potrivita pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.29_2.jpg?v=1767362048&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-bicycle", "bluza-alba-din-bumbac-100-flowers", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-bicycle", title: "Bluza Alba Dama din Bumbac 100% Bicycle",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.8, reviews: 9,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Confort, stil si feminitate — o bluza dama din bumbac 100% cu un imprimeu care iese in evidenta. Cu designul Bicycle, aceasta bluza dama din bumbac 100% este gandita pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.28.jpg?v=1767362122&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-flowers", "bluza-alba-din-bumbac-100-cat-walk", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "bluza-alba-din-bumbac-100-flowers", title: "Bluza Alba Dama din Bumbac 100% Flowers",
    collection: "bluze", collections: ["bluze"],
    price: 79, compareAt: 139, badge: "-43%", rating: 4.6, reviews: 123,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "set", sizeList: ["DAMA: XS–2XL", "BARBAT: XS–2XL"],
    desc: "Combinatia ideala intre confort si un look feminin — bluza dama din bumbac 100%. Aceasta bluza dama cu imprimeu Flowers este realizata din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni office. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin, mânecă lungă", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-01-02at15.28.29.jpg?v=1767362194&width=1200"],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["bluza-alba-din-bumbac-100-cat-walk", "bluza-alba-din-bumbac-100-5-hearts-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-alb-din-bumbac-100-color-boy", title: "Tricou Alb Barbati din Bumbac 100% - Color Boy",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 49, compareAt: 69, badge: "-29%", rating: 4.9, reviews: 75,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14_5.jpg?v=1778528493&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-alb-din-bumbac-100-craniu-color", "tricou-alb-din-bumbac-100-bad-boy-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-alb-din-bumbac-100-craniu-color", title: "Tricou Alb Barbati din Bumbac 100% - Craniu Color",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 49, compareAt: 69, badge: "-29%", rating: 4.5, reviews: 105,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14_6.jpg?v=1778528451&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-alb-din-bumbac-100-bad-boy-1", "tricou-alb-din-bumbac-100-black", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-alb-din-bumbac-100-bad-boy-1", title: "Tricou Alb Barbati din Bumbac 100% - Bad Boy",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 49, compareAt: 69, badge: "-29%", rating: 4.6, reviews: 90,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.15.jpg?v=1778528403&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-alb-din-bumbac-100-black", "tricou-alb-din-bumbac-100-ursulet-color", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-alb-din-bumbac-100-black", title: "Tricou Alb Barbati din Bumbac 100% - Black",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 49, compareAt: 69, badge: "-29%", rating: 4.6, reviews: 51,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14_7.jpg?v=1778528340&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-alb-din-bumbac-100-ursulet-color", "tricou-negru-din-bumbac-100-ursulet-color", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-alb-din-bumbac-100-ursulet-color", title: "Tricou Alb Barbati din Bumbac 100% - Ursulet Color",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 49, compareAt: 69, badge: "-29%", rating: 4.6, reviews: 92,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.15_1.jpg?v=1778528270&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-negru-din-bumbac-100-ursulet-color", "tricou-negru-din-bumbac-100-bad-boy", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-negru-din-bumbac-100-ursulet-color", title: "Tricou Negru Barbati din Bumbac 100% - Ursulet Color",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 69, compareAt: 89, badge: "-22%", rating: 4.9, reviews: 208,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14_4.jpg?v=1778528048&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-negru-din-bumbac-100-bad-boy", "tricou-negru-din-bumbac-100-black", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-negru-din-bumbac-100-bad-boy", title: "Tricou Negru Barbati din Bumbac 100% - Bad Boy",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 69, compareAt: 89, badge: "-22%", rating: 4.5, reviews: 27,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14_3.jpg?v=1778527993&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-negru-din-bumbac-100-black", "tricou-negru-din-bumbac-100-craniu-color", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-negru-din-bumbac-100-black", title: "Tricou Negru Barbati din Bumbac 100% - Black",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 69, compareAt: 89, badge: "-22%", rating: 4.5, reviews: 40,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14_2.jpg?v=1778527950&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-negru-din-bumbac-100-craniu-color", "tricou-negru-din-bumbac-100-color-boy", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-negru-din-bumbac-100-craniu-color", title: "Tricou Negru Barbati din Bumbac 100% - Craniu Color",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 69, compareAt: 89, badge: "-22%", rating: 4.9, reviews: 84,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14_1.jpg?v=1778527900&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-negru-din-bumbac-100-color-boy", "tricou-alb-din-bumbac-100", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-negru-din-bumbac-100-color-boy", title: "Tricou Negru Barbati din Bumbac 100% - Color Boy",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 69, compareAt: 89, badge: "-22%", rating: 4.8, reviews: 207,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Material: bumbac 100% Greutate material: 155 g/m² Mărimi disponibile: XS, S , M , L , XL , XXL. Temperatura de spălare: 40°C Pozele postate sunt pentru a prezenta modelul imprimat pe tricou.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14.jpg?v=1778527827&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-alb-din-bumbac-100", "tricou-alb-din-bumbac-100-tricou-negru", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-alb-din-bumbac-100", title: "Tricou Alb Barbati din Bumbac 100% - Alb Din Bumbac 100%",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 45, compareAt: null, badge: null, rating: 4.6, reviews: 21,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Combinatia ideala intre confort si un look modern — tricou barbati din bumbac 100%. Designul Alb Din Bumbac 100% se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-01at22.49.08.jpg?v=1772398300&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-alb-din-bumbac-100-tricou-negru", "tricou-alb-din-bumbac-100-color-boy", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-alb-din-bumbac-100-tricou-negru", title: "Tricou Negru Barbati din Bumbac 100% - Din Bumbac 100%",
    collection: "tricouri-barbati", collections: ["tricouri-barbati"],
    price: 55, compareAt: null, badge: null, rating: 4.7, reviews: 13,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou barbati din bumbac 100%. Cu designul Negru Din Bumbac 100%, acest tricou barbati din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.11.07.jpg?v=1778526713&width=1200"],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-alb-din-bumbac-100-color-boy", "tricou-alb-din-bumbac-100-craniu-color", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-blue-colors", title: "Tricou Alb Dama din Bumbac 100% - Blue Colors",
    collection: "modele-noi", collections: ["modele-noi"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.5, reviews: 205,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou alb dama din bumbac 100%. Cu imprimeul Blue Colors, acest tricou alb dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_6.jpg?v=1759052627&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-dama-din-bumbac-100-fundita-fashion", "tricou-dama-din-bumbac-100-2-color-hands", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-fundita-fashion", title: "Tricou Alb Dama din Bumbac 100% - Fundita Fashion",
    collection: "modele-noi", collections: ["modele-noi"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.5, reviews: 38,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou alb dama din bumbac 100%. Cu designul Fundita Fashion, acest tricou alb dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-04-30at22.11.58.jpg?v=1777576552&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-dama-din-bumbac-100-2-color-hands", "tricou-dama-din-bumbac-100-just-kiss-me-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-2-color-hands", title: "Tricou Alb Dama din Bumbac 100% - 2 Color Hands",
    collection: "modele-noi", collections: ["modele-noi"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 88,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Purtare usoara, aspect modern, confort zilnic — tricou alb dama din bumbac 100% natural. Imprimeul 2 Color Hands da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_23.jpg?v=1759052431&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-dama-din-bumbac-100-just-kiss-me-1", "tricou-italy", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-just-kiss-me-1", title: "Tricou Alb Dama din Bumbac 100% - Mood",
    collection: "tricouri-text", collections: ["tricouri-text", "modele-noi"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 206,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou alb dama din bumbac 100%. Imprimeul Mood completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_5.jpg?v=1759049994&width=1200"],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-din-bumbac-100-makes-you-happy", "tricou-dama-din-bumbac-100-rased", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-italy", title: "Tricou Alb Dama din Bumbac 100% - Italy",
    collection: "modele-noi", collections: ["modele-noi", "best-seller"],
    price: 49, compareAt: 89, badge: "Bestseller", rating: 4.4, reviews: 177,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa casual pe care o vei purta cu placere — tricou alb dama din bumbac 100%. Cu imprimeul Italy, acest tricou alb dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-06-20at08.55.10_11.jpg?v=1750435028&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-fundita-color", "tricou-smile-6", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-fundita-color", title: "Tricou Alb Dama din Bumbac 100% - Fundita Color",
    collection: "modele-noi", collections: ["modele-noi"],
    price: 49, compareAt: 89, badge: "-45%", rating: 4.7, reviews: 23,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou alb dama din bumbac 100%. Designul Fundita Color se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-06-20at08.55.10_13.jpg?v=1750435079&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-smile-6", "tricou-be-real-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-smile-6", title: "Tricou Alb Dama din Bumbac 100% - Smile",
    collection: "modele-noi", collections: ["modele-noi", "best-seller"],
    price: 49, compareAt: 89, badge: "Bestseller", rating: 4.7, reviews: 89,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Confort, stil si feminitate — un tricou alb dama din bumbac 100% cu un imprimeu care iese in evidenta. Imprimeul Smile completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/5D938D05-A370-46F8-8B53-B7CB81964B9B.png?v=1753432433&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-be-real-2", "tricou-imperfect", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-be-real-2", title: "Tricou Alb Dama din Bumbac 100% - Be Real 2",
    collection: "modele-noi", collections: ["modele-noi"],
    price: 49, compareAt: 89, badge: "-45%", rating: 4.6, reviews: 67,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Confort natural pentru purtarea de zi cu zi — tricou alb dama din bumbac 100%. Cu imprimeul Be Real 2, acest tricou alb dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/7F644D45-E7B2-49EE-B681-E195B1AF3B80.png?v=1753432477&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-imperfect", "tricou-brave", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-imperfect", title: "Tricou Alb Dama din Bumbac 100% - Imperfect",
    collection: "modele-noi", collections: ["modele-noi", "best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.5, reviews: 68,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Confort, stil si feminitate — un tricou alb dama din bumbac 100% cu un imprimeu care iese in evidenta. Designul Imperfect se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-05at05.53.38_3.jpg?v=1757076844&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-brave", "tricou-hey", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-brave", title: "Tricou Alb Dama din Bumbac 100% - Brave",
    collection: "modele-noi", collections: ["modele-noi", "best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.4, reviews: 9,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Comod, respirabil si potrivit pentru orice tinuta lejera — tricou alb dama din bumbac 100%. Imprimeul Brave completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-05at05.53.38_2.jpg?v=1757076937&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-hey", "tricou-perfectly", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-hey", title: "Tricou Alb Dama din Bumbac 100% - Hey",
    collection: "modele-noi", collections: ["modele-noi", "best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.5, reviews: 130,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Comod, respirabil si potrivit pentru orice tinuta lejera — tricou alb dama din bumbac 100%. Acest tricou alb dama cu imprimeu Hey este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-05at05.53.38_1_355d704a-3200-4625-ad83-cdfbf0fc816d.jpg?v=1757076904&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-perfectly", "tricou-dama-din-bumbac-100-blue-colors", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-perfectly", title: "Tricou Alb Dama din Bumbac 100% - Perfectly",
    collection: "modele-noi", collections: ["modele-noi", "best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.5, reviews: 122,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou alb dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Imprimeul Perfectly completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-07-24at13.19.26_4_9abd5f64-c494-422c-8c18-bf8635e92806.jpg?v=1753430453&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-dama-din-bumbac-100-blue-colors", "tricou-dama-din-bumbac-100-fundita-fashion", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-fluture-albastru-mare", title: "Tricou Alb Dama din Bumbac 100% - Fluture Albastru Mare",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 89,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou alb dama din bumbac 100%. Imprimeul Fluture Albastru Mare da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-03_at_16.33.29_13.jpg?v=1767457081&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-love-gold", "tricou-tree-multicolor", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-love-gold", title: "Tricou Alb Dama din Bumbac 100% - Love Gold",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 190,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou dama din bumbac 100%. Imprimeul Love Gold da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-22_at_10.08.46_3.jpg?v=1769071034&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-tree-multicolor", "tricou-black-tree", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-tree-multicolor", title: "Tricou Dama Tree Multicolor – Bumbac 100%",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 112,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Alegerea potrivita pentru un look casual si relaxat — tricou dama din bumbac 100% natural. Imprimeul Tree Multicolor completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-06_at_23.54.32.jpg?v=1767736975&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-black-tree", "tricou-love-3", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-black-tree", title: "Tricou Negru Dama din Bumbac 100% - Tree",
    collection: "tricouri-negre-dama", collections: ["tricouri-negre-dama", "tricouri-dama"],
    price: 69, compareAt: 129, badge: "-47%", rating: 4.9, reviews: 25,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Simplu, confortabil si usor de inclus in tinutele zilnice — tricou negru dama din bumbac 100%. Cu designul Tree, acest tricou negru dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/tree-multicolor-negru.jpg?v=1621523270&width=1200"],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-dama-din-bumbac-100-way-maker", "tricou-dama-din-bumbac-100-money-maker-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-love-3", title: "Tricou Dama Love 3 – Bumbac 100%",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 87,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Confort, stil si lejeritate — un tricou dama din bumbac 100% cu un imprimeu care iese in evidenta. Cu designul Love 3, acest tricou dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-22_at_10.08.46_2.jpg?v=1769071282&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-3-x-heart", "tricou-stea", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-3-x-heart", title: "Tricou Alb Dama din Bumbac 100% - 3 X Heart",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 36,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Purtare usoara, aspect modern, confort zilnic — tricou dama din bumbac 100% natural. Designul 3 X Heart se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-09-26at18.30.43.jpg?v=1664209698&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-stea", "tricou-spring", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-stea", title: "Tricou Alb Dama din Bumbac 100% - Stea",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 163,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Imprimeul Stea da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at03.55.48_5.jpg?v=1759057882&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-spring", "tricou-heart-gold-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-spring", title: "Tricou Alb Dama din Bumbac 100% - Spring",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 37,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou alb dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Acest tricou alb dama cu imprimeu Spring este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-04_at_13.29.43_16.jpg?v=1767530448&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-heart-gold-2", "tricou-compassion", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-heart-gold-2", title: "Tricou Alb Dama din Bumbac 100% - Heart Gold 2",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.7, reviews: 186,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Confort, stil si feminitate — un tricou dama din bumbac 100% cu un imprimeu care iese in evidenta. Cu designul Heart Gold 2, acest tricou dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-22_at_10.08.46_1.jpg?v=1769071011&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-compassion", "tricou-love-coffee", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-compassion", title: "Tricou Alb Dama din Bumbac 100% - Compassion",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 208,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou dama din bumbac 100%. Acest tricou dama cu imprimeu Compassion este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-22_at_10.08.45_15.jpg?v=1769071219&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-love-coffee", "tricou-nice-sunglasses", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-love-coffee", title: "Tricou Alb Dama din Bumbac 100% - Love Coffee",
    collection: "tricouri-dama", collections: ["tricouri-dama", "best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.9, reviews: 82,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou alb dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Acest tricou alb dama cu imprimeu Love Coffee este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-05at07.07.34_2.jpg?v=1754403037&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-nice-sunglasses", "tricou-peace-2", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-nice-sunglasses", title: "Tricou Alb Dama din Bumbac 100% - Nice Sunglasses",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 194,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Alegerea potrivita pentru un look casual si feminin — tricou dama din bumbac 100% natural. Designul Nice Sunglasses se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-09-28_at_03.55.48_11.jpg?v=1759057744&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-peace-2", "tricou-basket-mauve", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-peace-2", title: "Tricou Dama Peace 2 – Bumbac 100%",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.8, reviews: 143,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Alegerea potrivita pentru un look casual si relaxat — tricou dama din bumbac 100% natural. Imprimeul Peace 2 completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-24at01.13.21.jpg?v=1706087901&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-basket-mauve", "tricou-pink-heart-5", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-basket-mauve", title: "Tricou Dama Basket Mauve – Bumbac 100%",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.6, reviews: 48,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou dama din bumbac 100%. Imprimeul Basket Mauve da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-18_at_13.24.47_3.jpg?v=1768737067&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-pink-heart-5", "tricou-just-one", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-pink-heart-5", title: "Tricou Alb Dama din Bumbac 100% - Pink Heart 5",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 39,
    colors: [{"name": "Roz", "hex": "#E3C8C4"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Alegerea potrivita pentru un look casual si feminin — tricou dama din bumbac 100% natural. Imprimeul Pink Heart 5 da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-26_at_22.11.56_10.jpg?v=1769459827&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-just-one", "tricou-fluture-albastru-mare", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-just-one", title: "Tricou Dama Just One – Bumbac 100%",
    collection: "tricouri-dama", collections: ["tricouri-dama"],
    price: 49, compareAt: 79, badge: "-38%", rating: 4.4, reviews: 154,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "XXL"],
    desc: "Respirabil, placut la purtare si usor de asortat — tricou dama din bumbac 100%. Cu designul Just One, acest tricou dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2024-01-19at03.33.47_4.jpg?v=1705664608&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-fluture-albastru-mare", "tricou-love-gold", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-548", title: "Lenjerie Pat Dublu Satin Extra Fin cu Elastic 4 Piese - F-548",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 150, compareAt: 210, badge: "-29%", rating: 4.7, reviews: 151,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "O lenjerie de pat dublu din satin extra fin, cu o textura deosebit de fina si un aspect premium. Materialul satin extra fin este extrem de neted si placut la atingere, oferind un confort superior. Setul complet transforma dormitorul intr-un spatiu elegant si primitor.",
    details: {"material": "Satin extra fin", "fit": "Set 4 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-25at06.30.05_3.jpg?v=1756131492&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-602", "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-604", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-602", title: "Lenjerie Pat Dublu Satin Extra Fin cu Elastic 4 Piese - F-602",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 150, compareAt: 210, badge: "-29%", rating: 4.6, reviews: 10,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "O lenjerie de pat dublu din satin extra fin, cu o textura deosebit de fina si un aspect premium. Satinul extra fin ofera o senzatie deosebit de delicata pe piele si un aspect premium dormitorului. Setul include toate piesele necesare, iar materialul este rezistent si usor de intretinut.",
    details: {"material": "Satin extra fin", "fit": "Set 4 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/GD8014.jpg?v=1758892077&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-604", "lenjerie-de-pat-dublu-6-piese-din-damasc-finetat-f-105", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-604", title: "Lenjerie Pat Dublu Satin Extra Fin cu Elastic 4 Piese - F-604",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 150, compareAt: 210, badge: "-29%", rating: 4.9, reviews: 157,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "Lux si confort pentru dormitorul tau — lenjerie de pat dublu din satin extra fin, delicata si eleganta. Materialul satin extra fin este extrem de neted si placut la atingere, oferind un confort superior. Setul complet transforma dormitorul intr-un spatiu elegant si primitor.",
    details: {"material": "Satin extra fin", "fit": "Set 4 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/GD8007.jpg?v=1758892155&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-6-piese-din-damasc-finetat-f-105", "lenjerie-pat-dublu-satin-cu-elastic-4-piese-f-97", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-6-piese-din-damasc-finetat-f-105", title: "Lenjerie Pat Dublu Finet - F-105",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 130, compareAt: null, badge: null, rating: 4.4, reviews: 102,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "O lenjerie de pat dublu din finet de calitate, gandita pentru un somn confortabil si odihnitor. Finetul moale si placut la atingere ofera o senzatie de confort pe tot parcursul noptii. Setul include toate piesele necesare pentru un pat complet, iar materialul isi pastreaza aspectul si dupa spalari repetate.",
    details: {"material": "Finet", "fit": "Set pentru pat dublu", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/H85-1.jpg?v=1749566111&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-pat-dublu-satin-cu-elastic-4-piese-f-97", "lenjerie-pat-dublu-satin-cu-elastic-4-piese-f-105", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-pat-dublu-satin-cu-elastic-4-piese-f-97", title: "Lenjerie Pat Dublu Satin cu Elastic 4 Piese - F-97",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 140, compareAt: null, badge: null, rating: 4.6, reviews: 68,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "Lenjerie de pat dublu din satin — aspect premium si confort pentru nopti odihnoare. Materialul satin este neted, placut la atingere si ofera un aspect premium. Acest set de lenjerie pat dublu combina eleganta cu confortul.",
    details: {"material": "Satin extra fin", "fit": "Set 4 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-06-04at01.26.40_1.jpg?v=1749026185&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-pat-dublu-satin-cu-elastic-4-piese-f-105", "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-603", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-pat-dublu-satin-cu-elastic-4-piese-f-105", title: "Lenjerie Pat Dublu Satin cu Elastic 4 Piese - F-105",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 140, compareAt: null, badge: null, rating: 4.7, reviews: 87,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "Set complet lenjerie pat dublu din satin — material fin, elegant si usor de intretinut. Satinul fin ofera o senzatie placuta pe piele si un aspect elegant dormitorului. Setul include toate piesele necesare, iar materialul isi pastreaza luciul si dupa spalari repetate.",
    details: {"material": "Satin extra fin", "fit": "Set 4 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-06-04at01.26.34_1.jpg?v=1749026442&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-603", "lenjerie-de-pat-dublu-6-piese-din-damasc-finetat-f-106", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-603", title: "Lenjerie Pat Dublu Satin Extra Fin cu Elastic 4 Piese - F-603",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 150, compareAt: 210, badge: "-29%", rating: 4.9, reviews: 177,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "O lenjerie de pat dublu din satin extra fin, cu o textura deosebit de fina si un aspect premium. Materialul satin extra fin este extrem de neted si placut la atingere, oferind un confort superior. Setul complet transforma dormitorul intr-un spatiu elegant si primitor.",
    details: {"material": "Satin extra fin", "fit": "Set 4 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/GD8009.jpg?v=1758892110&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-6-piese-din-damasc-finetat-f-106", "lenjerie-de-pat-dublu-6-piese-damasc-finetat-deluxe-cu-elastic-f-211", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-6-piese-din-damasc-finetat-f-106", title: "Lenjerie Pat Dublu Finet - F-106",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 130, compareAt: null, badge: null, rating: 4.5, reviews: 50,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "Set complet lenjerie pat dublu din finet — material moale, placut la atingere si usor de intretinut. Finetul moale si placut la atingere ofera o senzatie de confort pe tot parcursul noptii. Setul include toate piesele necesare pentru un pat complet, iar materialul isi pastreaza aspectul si dupa spalari repetate.",
    details: {"material": "Finet", "fit": "Set pentru pat dublu", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/H56-1.jpg?v=1749566198&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-6-piese-damasc-finetat-deluxe-cu-elastic-f-211", "lenjerie-pat-dublu-4-piese-din-damasc-finetat-f-128", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-6-piese-damasc-finetat-deluxe-cu-elastic-f-211", title: "Lenjerie Pat Dublu Finet cu Elastic 6 Piese - F-211",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 150, compareAt: 210, badge: "-29%", rating: 4.8, reviews: 150,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "Un set de lenjerie pat dublu din finet care transforma dormitorul intr-un spatiu primitor si confortabil. Materialul finet este moale, respirabil si usor de intretinut. Acest set de lenjerie pat dublu ofera tot ce ai nevoie pentru un dormitor ingrijit si confortabil.",
    details: {"material": "Finet", "fit": "Set 6 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-11at13.13.49_3.jpg?v=1754943821&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-pat-dublu-4-piese-din-damasc-finetat-f-128", "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-601", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-pat-dublu-4-piese-din-damasc-finetat-f-128", title: "Lenjerie Pat Dublu Finet - F-128",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 130, compareAt: null, badge: null, rating: 4.9, reviews: 134,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "Un set de lenjerie pat dublu din finet care transforma dormitorul intr-un spatiu primitor si confortabil. Materialul finet este moale, respirabil si usor de intretinut. Acest set de lenjerie pat dublu ofera tot ce ai nevoie pentru un dormitor ingrijit si confortabil.",
    details: {"material": "Finet", "fit": "Set pentru pat dublu", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/AT77.jpg?v=1749585232&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-601", "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-600", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-601", title: "Lenjerie Pat Dublu Satin Extra Fin cu Elastic 4 Piese - F-601",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 150, compareAt: 210, badge: "-29%", rating: 4.5, reviews: 32,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "Lux si confort pentru dormitorul tau — lenjerie de pat dublu din satin extra fin, delicata si eleganta. Satinul extra fin ofera o senzatie deosebit de delicata pe piele si un aspect premium dormitorului. Setul include toate piesele necesare, iar materialul este rezistent si usor de intretinut.",
    details: {"material": "Satin extra fin", "fit": "Set 4 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/GD8015.jpg?v=1758892042&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-600", "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-549", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-600", title: "Lenjerie Pat Dublu Satin Extra Fin cu Elastic 4 Piese - F-600",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 150, compareAt: 210, badge: "-29%", rating: 4.6, reviews: 139,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "Lux si confort pentru dormitorul tau — lenjerie de pat dublu din satin extra fin, delicata si eleganta. Materialul satin extra fin este extrem de neted si placut la atingere, oferind un confort superior. Setul complet transforma dormitorul intr-un spatiu elegant si primitor.",
    details: {"material": "Satin extra fin", "fit": "Set 4 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/GD8019-1.jpg?v=1758891978&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-549", "lenjerie-pat-dublu-4-piese-din-damasc-finetat-f-111", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-549", title: "Lenjerie Pat Dublu Satin Extra Fin cu Elastic 4 Piese - F-548",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 150, compareAt: 210, badge: "-29%", rating: 4.9, reviews: 135,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "O lenjerie de pat dublu din satin extra fin, cu o textura deosebit de fina si un aspect premium. Materialul satin extra fin este extrem de neted si placut la atingere, oferind un confort superior. Setul complet transforma dormitorul intr-un spatiu elegant si primitor.",
    details: {"material": "Satin extra fin", "fit": "Set 4 piese pentru pat dublu, cearșaf cu elastic", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-25at06.30.05_1.jpg?v=1756131527&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-pat-dublu-4-piese-din-damasc-finetat-f-111", "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-548", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "lenjerie-pat-dublu-4-piese-din-damasc-finetat-f-111", title: "Lenjerie Pat Dublu Finet - F-111",
    collection: "lenjerii", collections: ["lenjerii"],
    price: 130, compareAt: null, badge: null, rating: 4.4, reviews: 106,
    colors: [],
    sizes: "home", sizeList: [],
    desc: "Un set de lenjerie pat dublu din finet care transforma dormitorul intr-un spatiu primitor si confortabil. Materialul finet este moale, respirabil si usor de intretinut. Acest set de lenjerie pat dublu ofera tot ce ai nevoie pentru un dormitor ingrijit si confortabil.",
    details: {"material": "Finet", "fit": "Set pentru pat dublu", "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/AT118-1.jpg?v=1749584423&width=1200"],
    tone: ["#E7E3DB", "#8A7F72"], upsells: ["lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-548", "lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-602", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata-roz-ciclam", title: "Prosop fata roz ciclam",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.7, reviews: 169,
    colors: [{"name": "Roz", "hex": "#E3C8C4"}],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: roz ciclam",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.19_2.jpg?v=1744990756&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata-mov", "prosop-fata-albastru-1", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata-mov", title: "Prosop fata mov",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.8, reviews: 138,
    colors: [{"name": "Mov", "hex": "#8E7CA5"}],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: mov",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.20_1.jpg?v=1744990540&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata-albastru-1", "prosop-fata-albastru", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata-albastru-1", title: "Prosop fata albastru",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.6, reviews: 55,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: albastru",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.19.jpg?v=1744990943&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata-albastru", "prosop-fata-gri", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata-albastru", title: "Prosop fata blue",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.6, reviews: 162,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: blue",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.20_2.jpg?v=1744990486&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata-gri", "prosop-fata-turquoise", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata-gri", title: "Prosop fata gri deschis",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.7, reviews: 178,
    colors: [{"name": "Gri", "hex": "#B7B3AD"}],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: gri deschis",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.20_3.jpg?v=1744990380&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata-turquoise", "prosop-fata-alb", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata-turquoise", title: "Prosop fata turquoise",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.7, reviews: 48,
    colors: [],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: turqoise",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.21.jpg?v=1744990173&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata-alb", "prosop-fata-galben-mustar", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata-alb", title: "Prosop fata alb",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.4, reviews: 125,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: alb",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.19_1.jpg?v=1744990896&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata-galben-mustar", "prosop-fata-gri-inchis", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata-galben-mustar", title: "Prosop fata galben mustar",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.7, reviews: 121,
    colors: [{"name": "Galben", "hex": "#E8C15D"}],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: galben mustar",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.19_3.jpg?v=1744990664&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata-gri-inchis", "prosop-fata", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata-gri-inchis", title: "Prosop fata gri inchis",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.8, reviews: 77,
    colors: [{"name": "Gri", "hex": "#B7B3AD"}],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: gri inchis",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.20.jpg?v=1744990601&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata", "prosop-fata-roz-ciclam", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "prosop-fata", title: "Prosop fata grena",
    collection: "prosoape", collections: ["prosoape"],
    price: 20, compareAt: null, badge: null, rating: 4.8, reviews: 124,
    colors: [{"name": "Vișiniu", "hex": "#6E2637"}],
    sizes: "adult", sizeList: ["500 g/mp", "400 g/mp"],
    desc: "Material: Bumbac 100% Dimensiune: 50x90 cm Culoare: grena",
    details: {"material": "Bumbac 100%, absorbant", "fit": "Prosop de față", "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.21_1.jpg?v=1744989803&width=1200"],
    tone: ["#E3EBEA", "#5F8A80"], upsells: ["prosop-fata-roz-ciclam", "prosop-fata-mov", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-tricou-negru", title: "Tricou Negru Dama din Bumbac 100% - Din Bumbac 100%",
    collection: "best-seller", collections: ["best-seller"],
    price: 55, compareAt: null, badge: "Bestseller", rating: 4.4, reviews: 44,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou dama din bumbac 100%. Cu designul Negru Din Bumbac 100%, acest tricou dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-06at17.30.38.jpg?v=1772811070&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-dama-din-bumbac-100-tricou-alb", "tricou-infinite-butterflies", "tricou-faith-hope-love"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-tricou-alb", title: "Tricou Alb Dama din Bumbac 100%",
    collection: "best-seller", collections: ["best-seller"],
    price: 45, compareAt: null, badge: "Bestseller", rating: 4.9, reviews: 36,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Combinatia ideala intre confort si un look feminin — tricou alb dama din bumbac 100%. Designul unicolor se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-03-01at22.38.05.jpg?v=1772397572&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-infinite-butterflies", "tricou-faith-hope-love", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-infinite-butterflies", title: "Tricou Alb Dama din Bumbac 100% - Infinite Butterflies",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.8, reviews: 181,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou alb dama din bumbac 100%. Acest tricou alb dama cu imprimeu Infinite Butterflies este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/50186210-B25C-4C90-A74A-315E762FC574.png?v=1753432015&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-faith-hope-love", "tricou-fluture-simplu", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-fluture-simplu", title: "Tricou Alb Dama din Bumbac 100% - Fluture Simplu",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.9, reviews: 79,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou alb dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Designul Fluture Simplu se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-07-26_at_04.34.26_598fe206-55cb-46ac-aa63-1d7fddf50803.jpg?v=1753531186&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-love-coffee", "tricou-black-heart-11", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-black-heart-11", title: "Tricou Alb Dama din Bumbac 100% - Black Heart",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 89, badge: "Bestseller", rating: 4.7, reviews: 192,
    colors: [{"name": "Negru", "hex": "#1C1A1B"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Simplu, confortabil si usor de inclus in tinutele zilnice — tricou dama din bumbac 100%. Designul Black Heart se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-26_at_22.11.55.jpg?v=1769458773&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-perfectly", "tricou-dama-din-bumbac-100-pinky", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-pinky", title: "Tricou Dama Pinky – Bumbac 100%",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 89, badge: "Bestseller", rating: 4.6, reviews: 178,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Imprimeul Pinky completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at23.25.51_1.jpg?v=1755671713&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-dama-din-bumbac-100-one-flower", "tricou-dama-din-bumbac-100-cherry", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-one-flower", title: "Tricou Dama One Flower – Bumbac 100%",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 89, badge: "Bestseller", rating: 4.5, reviews: 108,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Designul One Flower se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at23.25.51_3.jpg?v=1755671554&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-dama-din-bumbac-100-cherry", "tricou-spring-butterfly", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-dama-din-bumbac-100-cherry", title: "Tricou Dama Cherry – Bumbac 100%",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 89, badge: "Bestseller", rating: 4.5, reviews: 140,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O alegere simpla si confortabila pentru garderoba casuala — tricou dama din bumbac 100%. Imprimeul Cherry completeaza un look relaxat si modern. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at23.25.51_4.jpg?v=1755671476&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-spring-butterfly", "tricou-blue-new-butterflies", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-spring-butterfly", title: "Tricou Alb Dama din Bumbac 100% - Spring Butterfly",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.5, reviews: 82,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Simplu, confortabil si usor de inclus in tinutele zilnice — tricou alb dama din bumbac 100%. Imprimeul Spring Butterfly completeaza un look relaxat si feminin. Materialul natural ofera confort la purtare, iar croiul lejer face piesa usor de integrat in tinutele casual de zi cu zi.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-10_at_16.17.16_10.jpg?v=1773152628&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-blue-new-butterflies", "tricou-perfect", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-blue-new-butterflies", title: "Tricou Alb Dama din Bumbac 100% - Blue New Butterflies",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.6, reviews: 11,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou alb dama din bumbac 100%. Cu imprimeul Blue New Butterflies, acest tricou alb dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-06_at_17.09.31.jpg?v=1772809849&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-perfect", "tricou-fluturi-15", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-perfect", title: "Tricou Alb Dama din Bumbac 100% - Perfect",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.7, reviews: 130,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa casual pe care o vei purta cu placere — tricou alb dama din bumbac 100%. Designul Perfect se integreaza usor in tinutele casual. Materialul respirabil si croiul confortabil il fac potrivit pentru purtare zilnica, usor de combinat cu piesele preferate din garderoba.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-10_at_16.17.16_7.jpg?v=1773152417&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-fluturi-15", "tricou-heart-butterfly", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-fluturi-15", title: "Tricou Alb Dama din Bumbac 100% - Fluturi 15",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.9, reviews: 48,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Comod, respirabil si potrivit pentru orice tinuta lejera — tricou alb dama din bumbac 100%. Cu designul Fluturi 15, acest tricou alb dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-10_at_16.17.16_11.jpg?v=1773152478&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-heart-butterfly", "tricou-butterfly-bicycle", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-heart-butterfly", title: "Tricou Alb Dama din Bumbac 100% - Heart Butterfly",
    collection: "tricouri-dama", collections: ["tricouri-dama", "best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.6, reviews: 29,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Acest tricou dama cu imprimeu Heart Butterfly este realizat din bumbac 100% si se asorteaza usor cu blugi, fuste sau pantaloni. Bumbacul ofera o senzatie placuta la purtare si lasa pielea sa respire pe tot parcursul zilei.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-26_at_22.34.30.jpg?v=1769459684&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-fluture-albastru-mare", "tricou-love-gold", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-butterfly-bicycle", title: "Tricou Alb Dama din Bumbac 100% - Butterfly Bicycle",
    collection: "tricouri-dama", collections: ["tricouri-dama", "best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.9, reviews: 109,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Un tricou alb dama din bumbac 100%, ideal pentru tinute lejere de zi cu zi. Cu designul Butterfly Bicycle, acest tricou alb dama din bumbac 100% este gandit pentru confort zilnic. Materialul natural lasa pielea sa respire, iar croiul se potriveste usor cu diverse tinute.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-10_at_16.17.16_4.jpg?v=1773152657&width=1200"],
    tone: ["#EAD9D5", "#9E6B76"], upsells: ["tricou-fluture-albastru-mare", "tricou-love-gold", "tricou-dama-din-bumbac-100-tricou-negru"]
  },
  {
    handle: "tricou-blue-new-butterflies-1", title: "Tricou Alb Dama din Bumbac 100% - Blue New Butterflies",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 79, badge: "Bestseller", rating: 4.4, reviews: 81,
    colors: [{"name": "Albastru", "hex": "#2A3A55"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "O piesa comoda, usor de purtat si de asortat — tricou alb dama din bumbac 100%. Cu imprimeul Blue New Butterflies, acest tricou alb dama din bumbac 100% este placut la atingere si permite pielii sa respire, fiind potrivit pentru purtare zilnica atat vara, cat si ca strat de baza in sezonul rece.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2025-07-26_at_04.34.27_1.jpg?v=1753530668&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-always-be-free-1", "tricou-dama-din-bumbac-100-tricou-negru", "tricou-dama-din-bumbac-100-tricou-alb"]
  },
  {
    handle: "tricou-always-be-free-1", title: "Tricou Alb Dama din Bumbac 100% - Always Be Free",
    collection: "best-seller", collections: ["best-seller"],
    price: 49, compareAt: 89, badge: "Bestseller", rating: 4.8, reviews: 80,
    colors: [{"name": "Alb", "hex": "#F4F1EA"}],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    desc: "Comod, respirabil si potrivit pentru orice tinuta lejera — tricou alb dama din bumbac 100%. Imprimeul Always Be Free da un accent modern unei piese casual esentiale. Bumbacul 100% ofera o senzatie placuta la purtare si este potrivit pentru orice ocazie lejera — de la o iesire in oras la o zi de lucru relaxata.",
    details: {"material": "Bumbac 100%", "fit": "Regular feminin", "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."},
    images: ["https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-01-03_at_16.33.27_6.jpg?v=1767451544&width=1200"],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-dama-din-bumbac-100-tricou-negru", "tricou-dama-din-bumbac-100-tricou-alb", "tricou-infinite-butterflies"]
  }
];

/* ---------- MEGA-MENU ---------- */
const MC_MENU = [
  {
    "id": "dama",
    "label": "Damă",
    "icon": "woman",
    "tagline": "Bumbac 100%, croieli feminine",
    "groups": [
      {
        "title": "Tricouri",
        "links": [
          {
            "label": "Toate tricourile damă",
            "href": "collection.html?c=tricouri-dama",
            "icon": "tee"
          },
          {
            "label": "Tricouri negre",
            "href": "collection.html?c=tricouri-negre-dama",
            "icon": "tee"
          },
          {
            "label": "Modele noi",
            "href": "collection.html?c=modele-noi",
            "icon": "sparkle",
            "badge": "Nou"
          },
          {
            "label": "Colecția Primăvară",
            "href": "collection.html?c=tricouri-primavara",
            "icon": "flower"
          },
          {
            "label": "Tricouri Mama",
            "href": "collection.html?c=mom",
            "icon": "heart"
          },
          {
            "label": "Tricouri OVERSIZE",
            "href": "collection.html?c=tricouri-oversize",
            "icon": "tee"
          }
        ]
      },
      {
        "title": "Mânecă lungă",
        "links": [
          {
            "label": "Bluze",
            "href": "collection.html?c=bluze",
            "icon": "sweater"
          },
          {
            "label": "Trening catifea",
            "href": "collection.html?c=trening-catifea",
            "icon": "velvet",
            "badge": "Bestseller"
          }
        ]
      }
    ],
    "featured": [
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_10.jpg?v=1773413604&width=640",
        "title": "Trening Dama din Catifea Soft",
        "note": "de la 129 lei",
        "href": "product.html?p=trening-din-catifea-8"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_6.jpg?v=1759052627&width=640",
        "title": "Modele noi",
        "note": "prospețime săptămânală",
        "href": "collection.html?c=modele-noi"
      }
    ]
  },
  {
    "id": "barbati",
    "label": "Bărbați",
    "icon": "man",
    "tagline": "Grafic, street, esențial",
    "groups": [
      {
        "title": "Tricouri",
        "links": [
          {
            "label": "Toate tricourile bărbați",
            "href": "collection.html?c=tricouri-barbati",
            "icon": "tee"
          },
          {
            "label": "Tricouri TEXT",
            "href": "collection.html?c=tricouri-text",
            "icon": "quote"
          },
          {
            "label": "Tricouri Face",
            "href": "collection.html?c=tricouri-face",
            "icon": "face"
          },
          {
            "label": "Colecția România",
            "href": "collection.html?c=tricouri-romania",
            "icon": "mountain"
          }
        ]
      },
      {
        "title": "Crăciun",
        "links": [
          {
            "label": "Tricouri Crăciun bărbați",
            "href": "collection.html?c=tricouri-craciun-barbati",
            "icon": "snow"
          }
        ]
      }
    ],
    "featured": [
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2026-05-11at22.28.14_5.jpg?v=1778528493&width=640",
        "title": "Tricou Alb Barbati din Bumbac 100%…",
        "note": "de la 49 lei",
        "href": "product.html?p=tricou-alb-din-bumbac-100-color-boy"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-09-28at01.47.48_1.jpg?v=1759049897&width=640",
        "title": "Tricouri TEXT",
        "note": "spune-o pe față",
        "href": "collection.html?c=tricouri-text"
      }
    ]
  },
  {
    "id": "copii",
    "label": "Copii",
    "icon": "kid",
    "tagline": "2–12 ani, bumbac moale",
    "groups": [
      {
        "title": "Cei mici",
        "links": [
          {
            "label": "Tricouri copii",
            "href": "collection.html?c=tricouri-copii",
            "icon": "tee"
          },
          {
            "label": "Mama și Princess",
            "href": "collection.html?c=tricouri-mama-si-princess",
            "icon": "crown",
            "badge": "Set"
          }
        ]
      }
    ],
    "featured": [
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-19at13.10.53.jpg?v=1755635100&width=640",
        "title": "Tricou Copii din Bumbac 100% - Tea…",
        "note": "de la 39 lei",
        "href": "product.html?p=tricou-teacher-2"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-02-23_at_21.46.36_4.jpg?v=1771876109&width=640",
        "title": "Mama și Princess",
        "note": "seturi asortate",
        "href": "collection.html?c=tricouri-mama-si-princess"
      }
    ]
  },
  {
    "id": "familie",
    "label": "Familie & Cupluri",
    "icon": "hearts",
    "tagline": "Asortați, la preț de set",
    "groups": [
      {
        "title": "Seturi",
        "links": [
          {
            "label": "Tricouri cuplu",
            "href": "collection.html?c=tricouri-cupluri",
            "icon": "hearts"
          },
          {
            "label": "Set bluze",
            "href": "collection.html?c=set-bluze",
            "icon": "sweater"
          },
          {
            "label": "Mama și Princess",
            "href": "collection.html?c=tricouri-mama-si-princess",
            "icon": "family"
          }
        ]
      }
    ],
    "featured": [
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/products/IMG_4177.jpg?v=1618435056&width=640",
        "title": "Set Tricouri Cuplu din Bumbac 100%…",
        "note": "de la 129 lei",
        "href": "product.html?p=tricouri-cuplu-red-heart"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2022-11-16at7.03.15PM.jpg?v=1668619109&width=640",
        "title": "Set Bluze",
        "note": "seturi asortate",
        "href": "collection.html?c=set-bluze"
      }
    ]
  },
  {
    "id": "treninguri",
    "label": "Treninguri",
    "icon": "velvet",
    "tagline": "-10% la 3 treninguri",
    "groups": [
      {
        "title": "După material",
        "links": [
          {
            "label": "Catifea",
            "href": "collection.html?c=trening-catifea",
            "icon": "velvet",
            "badge": "Bestseller"
          },
          {
            "label": "Bumbac 100%",
            "href": "collection.html?c=trening-1",
            "icon": "cotton"
          },
          {
            "label": "Bumbac cu imprimeu",
            "href": "collection.html?c=trening-din-bumbac-100-cu-imprimeu",
            "icon": "cotton"
          }
        ]
      }
    ],
    "featured": [
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40_10.jpg?v=1773413604&width=640",
        "title": "Trening Dama din Catifea Soft",
        "note": "de la 129 lei",
        "href": "product.html?p=trening-din-catifea-8"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsApp_Image_2026-03-13_at_16.45.40.jpg?v=1773413471&width=640",
        "title": "Trening Dama din Bumbac 100%",
        "note": "de la 129 lei",
        "href": "product.html?p=trening-din-bumbac-102"
      }
    ]
  },
  {
    "id": "sezon",
    "label": "Sezon & Teme",
    "icon": "sparkle",
    "tagline": "Crăciun, Friends, România",
    "groups": [
      {
        "title": "Crăciun",
        "links": [
          {
            "label": "Damă",
            "href": "collection.html?c=tricouri-craciun",
            "icon": "snow"
          },
          {
            "label": "Bărbați",
            "href": "collection.html?c=tricouri-craciun-barbati",
            "icon": "snow"
          },
          {
            "label": "Cupluri",
            "href": "collection.html?c=tricouri-cuplu-craciun",
            "icon": "hearts"
          },
          {
            "label": "Familie",
            "href": "collection.html?c=tricouri-craciun-familie",
            "icon": "family"
          },
          {
            "label": "Bluze",
            "href": "collection.html?c=bluze-craciun",
            "icon": "sweater"
          }
        ]
      },
      {
        "title": "Tematice",
        "links": [
          {
            "label": "Friends",
            "href": "collection.html?c=friends",
            "icon": "quote"
          },
          {
            "label": "România",
            "href": "collection.html?c=tricouri-romania",
            "icon": "mountain"
          }
        ]
      }
    ],
    "featured": [
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-11-24at23.02.19_7.jpg?v=1764019029&width=640",
        "title": "Colecția Crăciun",
        "note": "sub brad, asortați",
        "href": "collection.html?c=tricouri-craciun"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/products/WhatsAppImage2021-12-01at10.56.56.jpg?v=1638349925&width=640",
        "title": "Tricouri din bumbac 100% Cuplu Cra…",
        "note": "de la 139 lei",
        "href": "product.html?p=tricouri-cuplu-craciun-black-3"
      }
    ]
  },
  {
    "id": "casa",
    "label": "Casă & Textile",
    "icon": "cotton",
    "tagline": "Lenjerii, prosoape",
    "groups": [
      {
        "title": "Dormitor & baie",
        "links": [
          {
            "label": "Lenjerii de pat",
            "href": "collection.html?c=lenjerii",
            "icon": "cotton"
          },
          {
            "label": "Prosoape",
            "href": "collection.html?c=prosoape",
            "icon": "sparkle"
          }
        ]
      }
    ],
    "featured": [
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-08-25at06.30.05_3.jpg?v=1756131492&width=640",
        "title": "Lenjerie Pat Dublu Satin Extra Fin…",
        "note": "de la 150 lei",
        "href": "product.html?p=lenjerie-de-pat-dublu-din-satin-extra-fin-cu-elastic-4-piese-f-548"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0555/7593/7208/files/WhatsAppImage2025-04-18at18.21.19_2.jpg?v=1744990756&width=640",
        "title": "Prosop fata roz ciclam",
        "note": "de la 20 lei",
        "href": "product.html?p=prosop-fata-roz-ciclam"
      }
    ]
  }
];

/* ---------- RECENZII (pool demonstrativ pentru pagina de produs) ---------- */
const MC_REVIEWS = [
  { name: "Andreea M.", stars: 5, date: "acum 3 zile",  title: "Exact ca în poze", text: "Materialul e superb, foarte moale, iar croiala e exact cum speram. Am luat M la 1.68m/60kg și e perfect. Comand și pe negru!", verified: true },
  { name: "Cristina P.", stars: 5, date: "acum o săptămână", title: "A treia comandă", text: "După prima comandă am revenit pentru încă două modele. Livrarea a ajuns a doua zi, ambalaj impecabil. Se simte mult peste prețul lui.", verified: true },
  { name: "Mihai D.", stars: 4, date: "acum 2 săptămâni", title: "Foarte bun, o mărime mai mare", text: "Calitate bună, doar că recomand o mărime în plus dacă vă place mai lejer. Materialul nu s-a schimbat după 5 spălări.", verified: true },
  { name: "Elena V.", stars: 5, date: "acum 3 săptămâni", title: "Cadou reușit", text: "L-am luat cadou pentru sora mea și acum vrea toată familia. Culoarea e și mai frumoasă în realitate.", verified: true },
  { name: "Ioana T.", stars: 5, date: "acum o lună", title: "Wow", text: "Rar scriu recenzii, dar aici merită: material premium, cusături impecabile, croială flatantă.", verified: false },
  { name: "Alexandra R.", stars: 4, date: "acum o lună", title: "Recomand", text: "Bun raport calitate-preț. Transportul gratuit peste 200 lei m-a convins să mai adaug un tricou — nicio urmă de regret.", verified: true }
];

/* ---------- HELPERS CATALOG ---------- */
function mcProduct(handle) { return MC_PRODUCTS.find(function (p) { return p.handle === handle; }); }
function mcByCollection(handle) {
  if (handle === "all") return MC_PRODUCTS.slice();
  return MC_PRODUCTS.filter(function (p) { return p.collection === handle || (p.collections || []).indexOf(handle) !== -1; });
}
function mcPrice(v) { return v % 1 === 0 ? v + " lei" : v.toFixed(2).replace(".", ",") + " lei"; }
