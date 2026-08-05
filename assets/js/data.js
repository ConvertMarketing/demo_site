/* =========================================================
   MON CHÉRIE — Demo catalog
   Date reale preluate de pe moncherie.ro (colecții, produse,
   prețuri, promoții). Imaginile sunt hotlink-uri premium de
   tip stand-in (Unsplash); pentru producție se înlocuiesc cu
   URL-urile cdn.shopify.com ale magazinului.
   ========================================================= */

/* Helper: imagine Unsplash optimizată */
function u(id, w) {
  return "https://images.unsplash.com/photo-" + id + "?q=80&w=" + (w || 1100) + "&auto=format&fit=crop";
}

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
  "tricouri-dama":            { title: "Tricouri Damă",            sub: "Bumbac 100% cu imprimeu",          desc: "Tricouri damă din bumbac 100%, versatile și ușor de asortat — de la basics impecabile la imprimeuri statement.", img: u("1571945153237-4929e783af4a"), tone: ["#EAD9D5", "#9E6B76"] },
  "tricouri-negre-dama":      { title: "Tricouri Negre Damă",      sub: "Negrul care nu dă greș",           desc: "Tricouri negre damă din bumbac 100% — piesa clasică, croită impecabil, pentru orice garderobă.", img: u("1529374255404-311a2a4f16fd"), tone: ["#2B2B2E", "#6B6B70"] },
  "modele-noi":               { title: "Modele Noi",               sub: "Ultimele intrări",                 desc: "Cele mai noi tricouri damă din bumbac 100% cu imprimeu — prospețime în fiecare săptămână.", img: u("1596755094514-f87e34085b2c"), tone: ["#F1E4D4", "#B08D57"] },
  "tricouri-primavara":       { title: "Tricouri Primăvară",       sub: "Imprimeuri florale",               desc: "Colecția de primăvară: imprimeuri inspirate de sezon pe bumbac moale, respirabil.", img: u("1524504388940-b1c1722653e1"), tone: ["#E7EFE3", "#7A9471"] },
  "bluze":                    { title: "Bluze",                     sub: "Mâneca lungă, aceeași atitudine",  desc: "Bluze damă din bumbac, cu imprimeuri originale — pentru zilele mai răcoroase.", img: u("1556821840-3a63f95609a7"), tone: ["#E4DED4", "#8A7F72"] },
  "mom":                      { title: "Tricouri Mama",             sub: "Pentru super-mame",                desc: "Tricouri dedicate mamelor — mesaje calde, bumbac 100%, cadoul care nu dă greș.", img: u("1509631179647-0177331693ae"), tone: ["#F3E0E2", "#B76E79"] },
  "tricouri-barbati":         { title: "Tricouri Bărbați",          sub: "Bumbac 100% cu imprimeu",          desc: "Tricouri bărbați cu imprimeuri grafice, motive street style și mesaje cool — confort și stil masculin.", img: u("1516826957135-700dedea698c"), tone: ["#DDE3E8", "#5B6770"] },
  "tricouri-text":            { title: "Tricouri TEXT",             sub: "Spune-o pe față",                  desc: "Mesaje îndrăznețe, tipografie curată — tricouri care vorbesc înainte să o faci tu.", img: u("1503341504253-dff4815485f1"), tone: ["#F6F3EE", "#16130F"] },
  "tricouri-face":            { title: "Tricouri Face",             sub: "Grafică statement",                desc: "Portrete și grafici animale cu impact — pentru un look modern casual.", img: u("1593030761757-71fae45fa0e7"), tone: ["#E8E2D9", "#8C6A4F"] },
  "tricouri-romania":         { title: "Tricouri România",          sub: "Purtate cu mândrie",               desc: "Colecția România — simboluri autohtone reinterpretate minimal, pe bumbac 100%.", img: u("1583743814966-8936f5b7be1a"), tone: ["#E3E8F0", "#27408B"] },
  "tricouri-copii":           { title: "Tricouri Copii",            sub: "2–12 ani",                         desc: "Tricouri copii din bumbac moale, cu imprimeuri jucăușe — mărimi de la 2 la 12 ani.", img: u("1503919545889-aef636e10ad4"), tone: ["#FDF0DC", "#E8A15D"] },
  "tricouri-mama-si-princess":{ title: "Mama și Princess",          sub: "Set asortat",                      desc: "Seturi asortate mama–fiică: aceeași grafică, două mărimi, de două ori mai multă bucurie.", img: u("1476703993599-0035a21b17a9"), tone: ["#F3E0E2", "#C78895"] },
  "tricouri-cupluri":         { title: "Tricouri Cuplu",            sub: "În doi e mai bine",                desc: "Tricouri pereche pentru cupluri — grafici complementare, bumbac 100%.", img: u("1516726817505-f5ed825624d8"), tone: ["#EAD9D5", "#A31621"] },
  "set-bluze":                { title: "Set Bluze",                 sub: "Seturi asortate",                  desc: "Seturi de bluze asortate pentru cupluri și familie — la preț de set.", img: u("1523381210434-271e8be1f52b"), tone: ["#E4DED4", "#6B5B4C"] },
  "trening-catifea":          { title: "Trening Catifea",           sub: "Moale. Elegant. Al tău.",          desc: "Treninguri din catifea moale, plăcută la atingere — bluza cu decolteu în V și manșete elastice, croială relaxată, aer elegant.", img: u("1552374196-1ab2a1c593e8"), tone: ["#3D2B33", "#8A5A6B"] },
  "treninguri":               { title: "Treninguri",                sub: "Confort de zi cu zi",              desc: "Treninguri damă și bărbați — catifea sau bumbac 100%, croieli curate, purtabile oriunde.", img: u("1515886657613-9f3515b0c78f"), tone: ["#DDD8CE", "#57534E"] },
  "tricouri-craciun":         { title: "Tricouri Damă Crăciun",     sub: "Spirit de sărbătoare",             desc: "Tricouri damă cu imprimeuri de Crăciun — pentru cele mai calde sărbători.", img: u("1512389142860-9c449e58a543"), tone: ["#E8D5D5", "#9E1B32"] },
  "tricouri-craciun-barbati": { title: "Tricouri Crăciun Bărbați",  sub: "Ho ho ho",                         desc: "Tricouri bărbați cu tematică de Crăciun — cadoul simplu care nimerește mereu.", img: u("1543589077-47d81606c1bf"), tone: ["#D8E2DC", "#2D5A47"] },
  "tricouri-cuplu-craciun":   { title: "Tricouri Cuplu Crăciun",    sub: "Sărbători în doi",                 desc: "Seturi pereche de Crăciun pentru cupluri — asortați-vă sub brad.", img: u("1482575832494-771f74bf6857"), tone: ["#E8D5D5", "#7C1220"] },
  "tricouri-craciun-familie": { title: "Tricouri Crăciun Familie",  sub: "Toată familia, asortată",          desc: "Seturi de familie pentru Crăciun — mărimi pentru mama, tata și copii de la 2 la 12 ani.", img: u("1511895426328-dc8714191300"), tone: ["#E2D8CC", "#8C2F39"] },
  "bluze-craciun":            { title: "Bluze Damă Crăciun",        sub: "Cozy season",                      desc: "Bluze călduroase cu imprimeuri festive — perfecte pentru serile de decembrie.", img: u("1544022613-e87ca75a784a"), tone: ["#E8D5D5", "#9E1B32"] },
  "friends":                  { title: "Friends",                   sub: "Colecția tematică",                desc: "Colecția Friends — grafici inspirate de serialul iconic, pentru fani adevărați.", img: u("1522337660859-02fbefca4702"), tone: ["#F1E4D4", "#C77B3B"] },
  "huse-marble":              { title: "Huse Marble",               sub: "iPhone & Samsung",                 desc: "Huse de telefon cu design marble — protecție cu aer premium pentru iPhone și Samsung.", img: u("1601593346740-925612772716"), tone: ["#EDE8E4", "#A89B8C"] },
  "all":                      { title: "Toate produsele",           sub: "Catalogul complet",                desc: "Explorează întregul univers Mon Chérie.", img: u("1441986300917-64674bd600d8"), tone: ["#F6F3EE", "#16130F"] }
};

/* ---------- PRODUSE ---------- */
/* sizes: "adult" => XS–2XL, "kids" => 2–12 ani, "set" => mărimi per membru, "case" => modele telefon */
const MC_PRODUCTS = [
  /* ===== FLAGSHIP: TRENINGURI ===== */
  {
    handle: "trening-din-catifea", title: "Trening din Catifea", collection: "trening-catifea",
    collections: ["trening-catifea", "treninguri"],
    price: 149, compareAt: 189, badge: "Bestseller", rating: 4.8, reviews: 127,
    colors: [
      { name: "Vișiniu", hex: "#6E2637" }, { name: "Negru", hex: "#1C1A1B" },
      { name: "Grej", hex: "#B9A895" }, { name: "Bleumarin", hex: "#2A3A55" }
    ],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Set din două piese, din catifea moale, plăcută la atingere — ideal pentru ținute comode cu aer elegant. Bluza are croială lejeră cu decolteu în V și manșete elastice, oferind libertate de mișcare și un aspect modern.",
    details: { material: "Catifea premium, exterior moale cu revers periat", fit: "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică și șnur", care: "Spălare la 30°C, pe dos. Fără uscător. Călcare la temperatură joasă." },
    images: [u("1552374196-1ab2a1c593e8"), u("1515886657613-9f3515b0c78f"), u("1524504388940-b1c1722653e1")],
    tone: ["#3D2B33", "#8A5A6B"], upsells: ["trening-catifea-royal", "tricou-dama-negru-muse", "husa-marble-noir"]
  },
  {
    handle: "trening-catifea-royal", title: "Trening Catifea Royal", collection: "trening-catifea",
    collections: ["trening-catifea", "treninguri"],
    price: 159, compareAt: null, badge: "Nou", rating: 4.7, reviews: 43,
    colors: [{ name: "Smarald", hex: "#1F4A3D" }, { name: "Negru", hex: "#1C1A1B" }, { name: "Mocca", hex: "#7A5C49" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Varianta royal a treningului nostru din catifea: nuanțe profunde, fermoar discret la bluză și buzunare laterale ascunse. Aceeași moliciune, plus un strop de dramă.",
    details: { material: "Catifea densă 320 g/m²", fit: "Regular — bluză cu fermoar, pantalon conic", care: "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea." },
    images: [u("1515886657613-9f3515b0c78f"), u("1552374196-1ab2a1c593e8"), u("1490481651871-ab68de25d43d")],
    tone: ["#1F4A3D", "#6B8F7E"], upsells: ["trening-din-catifea", "tricou-dama-basic-alb"]
  },
  {
    handle: "trening-dama-bumbac", title: "Trening Damă din Bumbac 100%", collection: "treninguri",
    collections: ["treninguri"],
    price: 75, compareAt: null, badge: null, rating: 4.6, reviews: 89,
    colors: [{ name: "Gri melanj", hex: "#B7B3AD" }, { name: "Negru", hex: "#1C1A1B" }, { name: "Crem", hex: "#E8DFD0" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Treningul de zi cu zi: bumbac 100% natural, rezistent și respirabil, cu croială curată care arată la fel de bine la cafea sau pe canapea.",
    details: { material: "Bumbac 100%, 280 g/m²", fit: "Regular — hanorac fără glugă, pantalon drept", care: "Spălare la 40°C. Se poate usca la uscător, program delicat." },
    images: [u("1571945153237-4929e783af4a"), u("1556821840-3a63f95609a7"), u("1523381210434-271e8be1f52b")],
    tone: ["#DDD8CE", "#57534E"], upsells: ["trening-din-catifea", "tricou-dama-line-art"]
  },
  {
    handle: "trening-barbati-street", title: "Trening Bărbați Street", collection: "treninguri",
    collections: ["treninguri"],
    price: 129, compareAt: 149, badge: null, rating: 4.5, reviews: 36,
    colors: [{ name: "Negru", hex: "#1C1A1B" }, { name: "Antracit", hex: "#3E3E42" }, { name: "Olive", hex: "#5C5A44" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Trening bărbați cu atitudine street: hanorac supradimensionat subtil, pantalon conic cu manșetă elastică. Bumbac gros, cusături întărite.",
    details: { material: "Bumbac 80% / poliester 20%, interior periat", fit: "Relaxed — hanorac oversized, pantalon conic", care: "Spălare la 40°C, pe dos." },
    images: [u("1552902865-b72c031ac5ea"), u("1516826957135-700dedea698c"), u("1503341504253-dff4815485f1")],
    tone: ["#3E3E42", "#8A8A90"], upsells: ["tricou-one", "tricou-face-wolf"]
  },

  /* ===== TRICOURI DAMĂ ===== */
  {
    handle: "tricou-guns-n-roses", title: "Tricou Damă Guns-N-Roses", collection: "tricouri-dama",
    collections: ["tricouri-dama", "modele-noi"],
    price: 59, compareAt: 79, badge: "-25%", rating: 4.9, reviews: 64,
    colors: [{ name: "Negru", hex: "#1C1A1B" }, { name: "Alb", hex: "#F4F1EA" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Rock atitude pe bumbac 100%: grafica Guns-N-Roses, imprimeu rezistent la spălări, croială feminină ușor cambrată.",
    details: { material: "Bumbac 100%, 180 g/m²", fit: "Slim feminin, gât rotund", care: "Spălare la 30°C, pe dos. Nu se calcă imprimeul." },
    images: [u("1529374255404-311a2a4f16fd"), u("1571945153237-4929e783af4a"), u("1596755094514-f87e34085b2c")],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-dama-negru-muse", "trening-din-catifea"]
  },
  {
    handle: "tricou-dama-basic-alb", title: "Tricou Damă Alb Essential", collection: "tricouri-dama",
    collections: ["tricouri-dama"],
    price: 49, compareAt: null, badge: "3+ → 30 lei/buc", rating: 4.7, reviews: 203,
    colors: [{ name: "Alb", hex: "#F4F1EA" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Tricoul alb perfect există: bumbac dens care nu e transparent, guler care își ține forma, croială care flatează. Piesa de bază a oricărei garderobe.",
    details: { material: "Bumbac 100% pieptănat, 190 g/m²", fit: "Regular feminin", care: "Spălare la 40°C. Nu necesită călcare dacă e întins la uscat." },
    images: [u("1596755094514-f87e34085b2c"), u("1571945153237-4929e783af4a"), u("1523381210434-271e8be1f52b")],
    tone: ["#F1E4D4", "#B08D57"], upsells: ["tricou-dama-negru-muse", "tricou-dama-coeur"]
  },
  {
    handle: "tricou-dama-negru-muse", title: "Tricou Negru Damă Muse", collection: "tricouri-negre-dama",
    collections: ["tricouri-negre-dama", "tricouri-dama"],
    price: 55, compareAt: null, badge: null, rating: 4.8, reviews: 156,
    colors: [{ name: "Negru", hex: "#1C1A1B" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Negrul care nu se decolorează: tricou damă din bumbac 100% cu tratament de fixare a culorii, croială clasică ușor cambrată, versatil la orice oră.",
    details: { material: "Bumbac 100%, vopsit reactiv", fit: "Regular feminin, gât rotund", care: "Spălare la 30°C cu culori închise." },
    images: [u("1529374255404-311a2a4f16fd"), u("1583743814966-8936f5b7be1a"), u("1524504388940-b1c1722653e1")],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-guns-n-roses", "trening-din-catifea"]
  },
  {
    handle: "tricou-primavara-bloom", title: "Tricou Damă Bloom", collection: "tricouri-primavara",
    collections: ["tricouri-primavara", "modele-noi", "tricouri-dama"],
    price: 59, compareAt: null, badge: "Nou", rating: 4.6, reviews: 27,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Salvie", hex: "#B5C0A8" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Primăvara pe bumbac: imprimeu floral delicat, culori care rezistă, croială lejeră. Se asortează cu orice și cu oricine.",
    details: { material: "Bumbac 100%, 180 g/m²", fit: "Relaxed feminin", care: "Spălare la 30°C, pe dos." },
    images: [u("1524504388940-b1c1722653e1"), u("1596755094514-f87e34085b2c"), u("1509631179647-0177331693ae")],
    tone: ["#E7EFE3", "#7A9471"], upsells: ["tricou-primavara-fleur", "tricou-dama-basic-alb"]
  },
  {
    handle: "tricou-primavara-fleur", title: "Tricou Damă Fleur", collection: "tricouri-primavara",
    collections: ["tricouri-primavara", "tricouri-dama"],
    price: 59, compareAt: null, badge: null, rating: 4.5, reviews: 19,
    colors: [{ name: "Crem", hex: "#E8DFD0" }, { name: "Roz pudră", hex: "#E3C8C4" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Fleur: o singură floare, desenată în linie continuă, poziționată asimetric. Minimalism care se observă.",
    details: { material: "Bumbac 100%, 180 g/m²", fit: "Regular feminin", care: "Spălare la 30°C, pe dos." },
    images: [u("1509631179647-0177331693ae"), u("1524504388940-b1c1722653e1"), u("1571945153237-4929e783af4a")],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["tricou-primavara-bloom", "bluza-dama-ivory"]
  },
  {
    handle: "tricou-dama-line-art", title: "Tricou Damă Line Art", collection: "modele-noi",
    collections: ["modele-noi", "tricouri-dama"],
    price: 55, compareAt: null, badge: "Nou", rating: 4.7, reviews: 31,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Negru", hex: "#1C1A1B" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Un portret în linie continuă, imprimat serigrafic. Artă purtabilă, bumbac 100%, atitudine 100%.",
    details: { material: "Bumbac 100% pieptănat", fit: "Regular feminin", care: "Spălare la 30°C, pe dos. Nu se calcă imprimeul." },
    images: [u("1576566588028-4147f3842f27"), u("1596755094514-f87e34085b2c"), u("1529374255404-311a2a4f16fd")],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-dama-coeur", "tricou-dama-basic-alb"]
  },
  {
    handle: "tricou-dama-coeur", title: "Tricou Damă Coeur", collection: "modele-noi",
    collections: ["modele-noi", "tricouri-dama"],
    price: 59, compareAt: null, badge: "Favorit", rating: 4.9, reviews: 88,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Vișiniu", hex: "#6E2637" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Coeur — inima Mon Chérie, brodată discret pe piept. Tricoul care spune totul fără să spună nimic.",
    details: { material: "Bumbac 100%, broderie fir vișiniu", fit: "Slim feminin", care: "Spălare la 30°C, pe dos." },
    images: [u("1571945153237-4929e783af4a"), u("1596755094514-f87e34085b2c"), u("1524504388940-b1c1722653e1")],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricou-dama-basic-alb", "trening-din-catifea"]
  },

  /* ===== BLUZE ===== */
  {
    handle: "bluza-dama-ivory", title: "Bluză Damă Ivory Soft", collection: "bluze",
    collections: ["bluze"],
    price: 89, compareAt: null, badge: null, rating: 4.6, reviews: 42,
    colors: [{ name: "Ivory", hex: "#EDE6D8" }, { name: "Grej", hex: "#B9A895" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Bluză din bumbac cu interior ușor periat — călduroasă fără volum, cu mâneci lungi și margini duble. Companionul perfect al toamnei.",
    details: { material: "Bumbac 95% / elastan 5%", fit: "Regular, ușor cambrat", care: "Spălare la 30°C." },
    images: [u("1556821840-3a63f95609a7"), u("1523381210434-271e8be1f52b"), u("1571945153237-4929e783af4a")],
    tone: ["#E4DED4", "#8A7F72"], upsells: ["trening-din-catifea", "tricou-dama-coeur"]
  },
  {
    handle: "bluza-halloween", title: "Bluză Halloween Spooky Season", collection: "bluze",
    collections: ["bluze"],
    price: 79, compareAt: 95, badge: "-17%", rating: 4.4, reviews: 23,
    colors: [{ name: "Negru", hex: "#1C1A1B" }, { name: "Portocaliu ars", hex: "#B45A2B" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Spooky season, dar fă-o cu stil: bluză neagră cu grafică Halloween serigrafiată, bumbac gros, croială unisex.",
    details: { material: "Bumbac 100%, 240 g/m²", fit: "Unisex relaxed", care: "Spălare la 30°C, pe dos." },
    images: [u("1509557965875-b88c97052f0e"), u("1529374255404-311a2a4f16fd"), u("1503341504253-dff4815485f1")],
    tone: ["#2B2B2E", "#B45A2B"], upsells: ["bluza-dama-ivory", "tricou-dama-negru-muse"]
  },
  {
    handle: "tricou-mom-est", title: "Tricou Mama Est. 2024", collection: "mom",
    collections: ["mom", "tricouri-dama"],
    price: 55, compareAt: null, badge: null, rating: 4.9, reviews: 74,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Roz pudră", hex: "#E3C8C4" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "„Mama — Est. anul tău” — personalizabil la comandă. Tipografie elegantă, bumbac moale, cadoul care emoționează garantat.",
    details: { material: "Bumbac 100%", fit: "Regular feminin", care: "Spălare la 30°C, pe dos." },
    images: [u("1509631179647-0177331693ae"), u("1476703993599-0035a21b17a9"), u("1596755094514-f87e34085b2c")],
    tone: ["#F3E0E2", "#B76E79"], upsells: ["set-mama-princess", "tricou-dama-basic-alb"]
  },

  /* ===== TRICOURI BĂRBAȚI ===== */
  {
    handle: "tricou-one", title: "Tricou Alb Bărbați One", collection: "tricouri-barbati",
    collections: ["tricouri-barbati"],
    price: 45, compareAt: null, badge: "3+ → 30 lei/buc", rating: 4.7, reviews: 118,
    colors: [{ name: "Alb", hex: "#F4F1EA" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "One: tricoul alb din bumbac 100% care rezolvă jumătate de garderobă. Material rezistent, respirabil și plăcut la atingere, ideal pentru purtarea de zi cu zi.",
    details: { material: "Bumbac 100%, 190 g/m²", fit: "Regular, gât rotund cu bandă dublă", care: "Spălare la 40°C." },
    images: [u("1521572163474-6864f9cf17ab"), u("1516826957135-700dedea698c"), u("1503341504253-dff4815485f1")],
    tone: ["#F6F3EE", "#5B6770"], upsells: ["tricou-barbati-negru-shadow", "trening-barbati-street"]
  },
  {
    handle: "tricou-o", title: "Tricou O", collection: "tricouri-barbati",
    collections: ["tricouri-barbati", "tricouri-text"],
    price: 45, compareAt: null, badge: null, rating: 4.5, reviews: 52,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Negru", hex: "#1C1A1B" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "O singură literă, o mie de interpretări. Tipografie supradimensionată pe bumbac dens — minimalism cu voce.",
    details: { material: "Bumbac 100%", fit: "Regular", care: "Spălare la 40°C, pe dos." },
    images: [u("1503341504253-dff4815485f1"), u("1521572163474-6864f9cf17ab"), u("1593030761757-71fae45fa0e7")],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-one", "tricou-text-nu-azi"]
  },
  {
    handle: "tricou-barbati-negru-shadow", title: "Tricou Negru Bărbați Shadow", collection: "tricouri-barbati",
    collections: ["tricouri-barbati"],
    price: 55, compareAt: null, badge: null, rating: 4.8, reviews: 97,
    colors: [{ name: "Negru", hex: "#1C1A1B" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Negrul esențial: bumbac gros care cade impecabil, fără logo-uri, fără zgomot. Doar un tricou negru făcut foarte bine.",
    details: { material: "Bumbac 100%, 200 g/m²", fit: "Regular", care: "Spălare la 30°C cu culori închise." },
    images: [u("1593030761757-71fae45fa0e7"), u("1529374255404-311a2a4f16fd"), u("1516826957135-700dedea698c")],
    tone: ["#2B2B2E", "#6B6B70"], upsells: ["tricou-one", "trening-barbati-street"]
  },
  {
    handle: "tricou-text-nu-azi", title: "Tricou TEXT „Nu azi”", collection: "tricouri-text",
    collections: ["tricouri-text", "tricouri-barbati"],
    price: 49, compareAt: null, badge: "Favorit", rating: 4.8, reviews: 145,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Negru", hex: "#1C1A1B" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "„Nu azi.” — răspunsul universal, tipărit cu litere apăsate. Tricoul care vorbește în locul tău în zilele acelea.",
    details: { material: "Bumbac 100%", fit: "Regular unisex", care: "Spălare la 40°C, pe dos." },
    images: [u("1583743814966-8936f5b7be1a"), u("1503341504253-dff4815485f1"), u("1521572163474-6864f9cf17ab")],
    tone: ["#F6F3EE", "#16130F"], upsells: ["tricou-text-legenda", "tricou-o"]
  },
  {
    handle: "tricou-text-legenda", title: "Tricou TEXT „Legendă locală”", collection: "tricouri-text",
    collections: ["tricouri-text", "tricouri-barbati"],
    price: 49, compareAt: null, badge: null, rating: 4.6, reviews: 67,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Gri melanj", hex: "#B7B3AD" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Pentru cel pe care îl știe tot cartierul. Tipografie condensată, imprimeu mat, bumbac 100%.",
    details: { material: "Bumbac 100%", fit: "Regular unisex", care: "Spălare la 40°C, pe dos." },
    images: [u("1521572163474-6864f9cf17ab"), u("1593030761757-71fae45fa0e7"), u("1583743814966-8936f5b7be1a")],
    tone: ["#DDE3E8", "#5B6770"], upsells: ["tricou-text-nu-azi", "tricou-one"]
  },
  {
    handle: "tricou-face-tiger", title: "Tricou Face Tiger", collection: "tricouri-face",
    collections: ["tricouri-face", "tricouri-barbati"],
    price: 59, compareAt: null, badge: null, rating: 4.7, reviews: 58,
    colors: [{ name: "Negru", hex: "#1C1A1B" }, { name: "Alb", hex: "#F4F1EA" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Privirea tigrului, redată în tuș fin pe piept. Grafică animală cu impact, imprimată serigrafic pe bumbac dens.",
    details: { material: "Bumbac 100%, 200 g/m²", fit: "Regular", care: "Spălare la 30°C, pe dos." },
    images: [u("1576566588028-4147f3842f27"), u("1593030761757-71fae45fa0e7"), u("1503341504253-dff4815485f1")],
    tone: ["#E8E2D9", "#8C6A4F"], upsells: ["tricou-face-wolf", "tricou-barbati-negru-shadow"]
  },
  {
    handle: "tricou-face-wolf", title: "Tricou Face Wolf", collection: "tricouri-face",
    collections: ["tricouri-face", "tricouri-barbati"],
    price: 59, compareAt: null, badge: null, rating: 4.6, reviews: 41,
    colors: [{ name: "Antracit", hex: "#3E3E42" }, { name: "Alb", hex: "#F4F1EA" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Lupul singuratic, în linii geometrice. Pentru cei care merg în haita lor proprie.",
    details: { material: "Bumbac 100%, 200 g/m²", fit: "Regular", care: "Spălare la 30°C, pe dos." },
    images: [u("1593030761757-71fae45fa0e7"), u("1576566588028-4147f3842f27"), u("1516826957135-700dedea698c")],
    tone: ["#3E3E42", "#8A8A90"], upsells: ["tricou-face-tiger", "trening-barbati-street"]
  },
  {
    handle: "tricou-romania-carpati", title: "Tricou România Carpați", collection: "tricouri-romania",
    collections: ["tricouri-romania", "tricouri-barbati"],
    price: 55, compareAt: null, badge: null, rating: 4.8, reviews: 93,
    colors: [{ name: "Verde brad", hex: "#2D4A3A" }, { name: "Alb", hex: "#F4F1EA" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Creasta Carpaților, desenată într-o singură linie. Purtat cu mândrie, de la munte până la mare.",
    details: { material: "Bumbac 100%", fit: "Regular unisex", care: "Spălare la 40°C, pe dos." },
    images: [u("1583743814966-8936f5b7be1a"), u("1521572163474-6864f9cf17ab"), u("1576566588028-4147f3842f27")],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-romania-tricolor", "tricou-one"]
  },
  {
    handle: "tricou-romania-tricolor", title: "Tricou România Tricolor Minimal", collection: "tricouri-romania",
    collections: ["tricouri-romania"],
    price: 55, compareAt: null, badge: null, rating: 4.7, reviews: 61,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Negru", hex: "#1C1A1B" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Tricolorul, redus la trei linii fine brodate pe piept. Patriotism discret, execuție impecabilă.",
    details: { material: "Bumbac 100%, broderie", fit: "Regular unisex", care: "Spălare la 30°C, pe dos." },
    images: [u("1521572163474-6864f9cf17ab"), u("1583743814966-8936f5b7be1a"), u("1503341504253-dff4815485f1")],
    tone: ["#E3E8F0", "#27408B"], upsells: ["tricou-romania-carpati", "tricou-text-nu-azi"]
  },

  /* ===== COPII ===== */
  {
    handle: "tricou-copii-dino", title: "Tricou Copii Dino Roar", collection: "tricouri-copii",
    collections: ["tricouri-copii"],
    price: 39, compareAt: null, badge: null, rating: 4.9, reviews: 47,
    colors: [{ name: "Verde", hex: "#7A9471" }, { name: "Alb", hex: "#F4F1EA" }],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Un T-Rex prietenos care face ROAR! Bumbac moale, certificat pentru pielea sensibilă, imprimeu fără ftalați.",
    details: { material: "Bumbac 100% certificat OEKO-TEX", fit: "Regular copii", care: "Spălare la 40°C." },
    images: [u("1503919545889-aef636e10ad4"), u("1519238263530-99bdd11df2ea"), u("1476703993599-0035a21b17a9")],
    tone: ["#FDF0DC", "#E8A15D"], upsells: ["tricou-copii-sunshine", "tricouri-familie-smile"]
  },
  {
    handle: "tricou-copii-sunshine", title: "Tricou Copii Sunshine", collection: "tricouri-copii",
    collections: ["tricouri-copii"],
    price: 39, compareAt: null, badge: null, rating: 4.8, reviews: 33,
    colors: [{ name: "Galben soare", hex: "#E8C15D" }, { name: "Alb", hex: "#F4F1EA" }],
    sizes: "kids", sizeList: ["2 ani", "4 ani", "6 ani", "8 ani", "10 ani", "12 ani"],
    desc: "Micul soare al casei merită un tricou pe măsură. Imprimeu vesel, bumbac moale, culori care rezistă la orice năzbâtie.",
    details: { material: "Bumbac 100% certificat OEKO-TEX", fit: "Regular copii", care: "Spălare la 40°C." },
    images: [u("1519238263530-99bdd11df2ea"), u("1503919545889-aef636e10ad4"), u("1476703993599-0035a21b17a9")],
    tone: ["#FDF0DC", "#E8C15D"], upsells: ["tricou-copii-dino", "set-mama-princess"]
  },
  {
    handle: "set-mama-princess", title: "Set Tricouri Mama și Princess", collection: "tricouri-mama-si-princess",
    collections: ["tricouri-mama-si-princess", "mom", "tricouri-copii"],
    price: 109, compareAt: 129, badge: "Set", rating: 4.9, reviews: 56,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Roz pudră", hex: "#E3C8C4" }],
    sizes: "set", sizeList: ["Mama: XS–2XL", "Princess: 2–12 ani"],
    desc: "Aceeași grafică, două inimi: set asortat mama–fiică cu coronițe brodate. Include ambele tricouri, la preț de set.",
    details: { material: "Bumbac 100%", fit: "Regular, ambele piese", care: "Spălare la 30°C, pe dos." },
    images: [u("1476703993599-0035a21b17a9"), u("1509631179647-0177331693ae"), u("1519238263530-99bdd11df2ea")],
    tone: ["#F3E0E2", "#C78895"], upsells: ["tricou-mom-est", "tricou-copii-sunshine"]
  },

  /* ===== FAMILIE & CUPLURI ===== */
  {
    handle: "tricouri-familie-smile", title: "Tricouri Familie Smile", collection: "tricouri-craciun-familie",
    collections: ["tricouri-cupluri", "tricouri-copii"],
    price: 149, compareAt: 165, badge: "Set", rating: 4.8, reviews: 39,
    colors: [{ name: "Alb", hex: "#F4F1EA" }],
    sizes: "set", sizeList: ["Damă: XS–2XL", "Bărbat: XS–2XL", "Copil: 2–12 ani"],
    desc: "Trei zâmbete asortate: set de familie cu grafică Smile — mărimi pentru mama, tata și cel mic. Fiecare tricou, bumbac 100%.",
    details: { material: "Bumbac 100%", fit: "Regular, toate piesele", care: "Spălare la 40°C." },
    images: [u("1511895426328-dc8714191300"), u("1476703993599-0035a21b17a9"), u("1503919545889-aef636e10ad4")],
    tone: ["#F1E4D4", "#C77B3B"], upsells: ["tricouri-familie-my", "tricou-copii-dino"]
  },
  {
    handle: "tricouri-familie-my", title: "Tricouri Familie My", collection: "tricouri-cupluri",
    collections: ["tricouri-cupluri"],
    price: 149, compareAt: null, badge: "Set", rating: 4.7, reviews: 28,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Negru", hex: "#1C1A1B" }],
    sizes: "set", sizeList: ["Damă: XS–2XL", "Bărbat: XS–2XL", "Copil: 2–12 ani"],
    desc: "My King, My Queen, My Prince(ss): setul de familie care își spune povestea singur. Trei piese, o singură echipă.",
    details: { material: "Bumbac 100%", fit: "Regular, toate piesele", care: "Spălare la 40°C, pe dos." },
    images: [u("1511895426328-dc8714191300"), u("1516726817505-f5ed825624d8"), u("1519238263530-99bdd11df2ea")],
    tone: ["#EAD9D5", "#A31621"], upsells: ["tricouri-familie-smile", "tricouri-cuplu-mr-mrs"]
  },
  {
    handle: "tricouri-cuplu-mr-mrs", title: "Tricouri Cuplu Mr & Mrs", collection: "tricouri-cupluri",
    collections: ["tricouri-cupluri"],
    price: 98, compareAt: 110, badge: "Set", rating: 4.9, reviews: 84,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Negru", hex: "#1C1A1B" }],
    sizes: "set", sizeList: ["Damă: XS–2XL", "Bărbat: XS–2XL"],
    desc: "Mr. & Mrs. — clasicul care nu se demodează. Set pereche cu tipografie elegantă, cadou perfect de nuntă sau aniversare.",
    details: { material: "Bumbac 100%", fit: "Regular, ambele piese", care: "Spălare la 40°C, pe dos." },
    images: [u("1516726817505-f5ed825624d8"), u("1521577352947-9bb58764b69a"), u("1511895426328-dc8714191300")],
    tone: ["#EAD9D5", "#A31621"], upsells: ["set-bluze-cuplu-family", "tricouri-familie-my"]
  },
  {
    handle: "set-bluze-cuplu-family", title: "Set Bluze Cuplu Family", collection: "set-bluze",
    collections: ["set-bluze", "tricouri-cupluri"],
    price: 178, compareAt: null, badge: "Set", rating: 4.6, reviews: 21,
    colors: [{ name: "Ivory", hex: "#EDE6D8" }, { name: "Negru", hex: "#1C1A1B" }],
    sizes: "set", sizeList: ["Damă: XS–2XL", "Bărbat: XS–2XL"],
    desc: "Varianta cozy a setului de cuplu: bluze cu mânecă lungă, interior periat, grafică Family asortată.",
    details: { material: "Bumbac 100%, interior periat", fit: "Regular, ambele piese", care: "Spălare la 30°C." },
    images: [u("1521577352947-9bb58764b69a"), u("1516726817505-f5ed825624d8"), u("1556821840-3a63f95609a7")],
    tone: ["#E4DED4", "#6B5B4C"], upsells: ["tricouri-cuplu-mr-mrs", "bluza-dama-ivory"]
  },

  /* ===== SEZON: CRĂCIUN ===== */
  {
    handle: "tricou-craciun-dama-merry", title: "Tricou Damă Merry", collection: "tricouri-craciun",
    collections: ["tricouri-craciun", "tricouri-dama"],
    price: 55, compareAt: null, badge: null, rating: 4.7, reviews: 35,
    colors: [{ name: "Roșu", hex: "#9E1B32" }, { name: "Alb", hex: "#F4F1EA" }],
    sizes: "adult", sizeList: ["XS", "S", "M", "L", "XL", "2XL"],
    desc: "Merry everything: tipografie festivă cu sclipici discret, pe bumbac moale. Uniforma oficială a lunii decembrie.",
    details: { material: "Bumbac 100%", fit: "Regular feminin", care: "Spălare la 30°C, pe dos." },
    images: [u("1512389142860-9c449e58a543"), u("1543589077-47d81606c1bf"), u("1544022613-e87ca75a784a")],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["bluza-craciun-renne", "tricouri-cuplu-craciun-deer"]
  },
  {
    handle: "tricou-craciun-barbati-ho", title: "Tricou Bărbați Ho Ho Ho", collection: "tricouri-craciun-barbati",
    collections: ["tricouri-craciun-barbati", "tricouri-barbati"],
    price: 55, compareAt: null, badge: null, rating: 4.5, reviews: 26,
    colors: [{ name: "Verde brad", hex: "#2D4A3A" }, { name: "Roșu", hex: "#9E1B32" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Ho Ho Ho, varianta cool: tipografie bold pe verde brad. Pentru bărbatul care recunoaște că iubește Crăciunul.",
    details: { material: "Bumbac 100%", fit: "Regular", care: "Spălare la 40°C, pe dos." },
    images: [u("1543589077-47d81606c1bf"), u("1512389142860-9c449e58a543"), u("1482575832494-771f74bf6857")],
    tone: ["#D8E2DC", "#2D5A47"], upsells: ["tricou-craciun-dama-merry", "tricouri-familie-16"]
  },
  {
    handle: "tricouri-familie-16", title: "Tricouri Familie Moș Crăciun cu sacul roșu", collection: "tricouri-craciun-familie",
    collections: ["tricouri-craciun-familie", "tricouri-cupluri"],
    price: 155, compareAt: 175, badge: "Set", rating: 4.8, reviews: 44,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Roșu", hex: "#9E1B32" }],
    sizes: "set", sizeList: ["Damă: XS–2XL", "Bărbat: XS–2XL", "Copil: 2–12 ani"],
    desc: "Setul de Crăciun al familiei: Moșul cu sacul roșu, în trei mărimi asortate. Fotografia de sub brad se face singură.",
    details: { material: "Bumbac 100%", fit: "Regular, toate piesele", care: "Spălare la 30°C, pe dos." },
    images: [u("1511895426328-dc8714191300"), u("1512389142860-9c449e58a543"), u("1482575832494-771f74bf6857")],
    tone: ["#E2D8CC", "#8C2F39"], upsells: ["tricouri-cuplu-craciun-deer", "tricou-copii-dino"]
  },
  {
    handle: "tricouri-cuplu-craciun-deer", title: "Tricouri Cuplu Crăciun Deer", collection: "tricouri-cuplu-craciun",
    collections: ["tricouri-cuplu-craciun", "tricouri-cupluri"],
    price: 98, compareAt: null, badge: "Set", rating: 4.7, reviews: 31,
    colors: [{ name: "Alb", hex: "#F4F1EA" }, { name: "Roșu", hex: "#9E1B32" }],
    sizes: "set", sizeList: ["Damă: XS–2XL", "Bărbat: XS–2XL"],
    desc: "El: Deer. Ea: Dear. Setul pereche care smulge zâmbete la orice masă de Crăciun.",
    details: { material: "Bumbac 100%", fit: "Regular, ambele piese", care: "Spălare la 30°C, pe dos." },
    images: [u("1482575832494-771f74bf6857"), u("1512389142860-9c449e58a543"), u("1516726817505-f5ed825624d8")],
    tone: ["#E8D5D5", "#7C1220"], upsells: ["tricouri-familie-16", "tricouri-cuplu-mr-mrs"]
  },
  {
    handle: "bluza-craciun-renne", title: "Bluză Damă Crăciun Renne", collection: "bluze-craciun",
    collections: ["bluze-craciun", "bluze"],
    price: 85, compareAt: null, badge: null, rating: 4.6, reviews: 18,
    colors: [{ name: "Roșu", hex: "#9E1B32" }, { name: "Ivory", hex: "#EDE6D8" }],
    sizes: "adult", sizeList: ["S", "M", "L", "XL", "2XL"],
    desc: "Renul Renne, brodat pe bluza călduroasă de decembrie. Interior periat, exterior festiv.",
    details: { material: "Bumbac 100%, interior periat", fit: "Regular feminin", care: "Spălare la 30°C." },
    images: [u("1544022613-e87ca75a784a"), u("1512389142860-9c449e58a543"), u("1556821840-3a63f95609a7")],
    tone: ["#E8D5D5", "#9E1B32"], upsells: ["tricou-craciun-dama-merry", "bluza-dama-ivory"]
  },

  /* ===== ACCESORII ===== */
  {
    handle: "husa-marble-rose", title: "Husă Marble Rose", collection: "huse-marble",
    collections: ["huse-marble"],
    price: 45, compareAt: 59, badge: "-24%", rating: 4.5, reviews: 62,
    colors: [{ name: "Rose", hex: "#D9B8B4" }, { name: "Alb marmură", hex: "#E8E4E0" }],
    sizes: "case", sizeList: ["iPhone 14/15/16", "iPhone Pro / Pro Max", "Samsung S23/S24", "Samsung A54/A55"],
    desc: "Marmură roz cu vinișoare aurii — husă flexibilă cu margini întărite și finisaj soft-touch care nu alunecă.",
    details: { material: "TPU flexibil cu print UV", fit: "Compatibilă iPhone & Samsung — alege modelul", care: "Se curăță cu lavetă umedă." },
    images: [u("1601593346740-925612772716"), u("1592750475338-74b7b21085ab"), u("1541123437800-1bb1317badc2")],
    tone: ["#EDE8E4", "#C9A9A6"], upsells: ["husa-marble-noir", "tricou-dama-coeur"]
  },
  {
    handle: "husa-marble-noir", title: "Husă Marble Noir", collection: "huse-marble",
    collections: ["huse-marble"],
    price: 45, compareAt: 59, badge: "-24%", rating: 4.6, reviews: 48,
    colors: [{ name: "Negru marmură", hex: "#2B2B2E" }, { name: "Gri fum", hex: "#8A8A90" }],
    sizes: "case", sizeList: ["iPhone 14/15/16", "iPhone Pro / Pro Max", "Samsung S23/S24", "Samsung A54/A55"],
    desc: "Marmură neagră cu striații albe — eleganță rece, protecție caldă. Margini ridicate pentru ecran și cameră.",
    details: { material: "TPU flexibil cu print UV", fit: "Compatibilă iPhone & Samsung — alege modelul", care: "Se curăță cu lavetă umedă." },
    images: [u("1592750475338-74b7b21085ab"), u("1601593346740-925612772716"), u("1541123437800-1bb1317badc2")],
    tone: ["#2B2B2E", "#8A8A90"], upsells: ["husa-marble-rose", "trening-din-catifea"]
  }
];

/* ---------- MEGA-MENU ---------- */
/* Structura de navigare: tab-uri principale cu grupuri, feature cards și iconițe SVG (cheile din MC_ICONS, definite în shared.js) */
const MC_MENU = [
  {
    id: "dama", label: "Damă", icon: "woman",
    tagline: "Bumbac 100%, croieli feminine",
    groups: [
      { title: "Tricouri", links: [
        { label: "Toate tricourile damă", href: "collection.html?c=tricouri-dama", icon: "tee" },
        { label: "Tricouri negre", href: "collection.html?c=tricouri-negre-dama", icon: "tee" },
        { label: "Modele noi", href: "collection.html?c=modele-noi", icon: "sparkle", badge: "Nou" },
        { label: "Colecția Primăvară", href: "collection.html?c=tricouri-primavara", icon: "flower" },
        { label: "Tricouri Mama", href: "collection.html?c=mom", icon: "heart" }
      ]},
      { title: "Mânecă lungă", links: [
        { label: "Bluze", href: "collection.html?c=bluze", icon: "sweater" },
        { label: "Trening catifea", href: "collection.html?c=trening-catifea", icon: "velvet", badge: "Bestseller" }
      ]}
    ],
    featured: [
      { img: u("1552374196-1ab2a1c593e8", 640), title: "Trening din Catifea", note: "de la 149 lei", href: "product.html?p=trening-din-catifea" },
      { img: u("1596755094514-f87e34085b2c", 640), title: "Modele noi", note: "prospețime săptămânală", href: "collection.html?c=modele-noi" }
    ]
  },
  {
    id: "barbati", label: "Bărbați", icon: "man",
    tagline: "Grafic, street, esențial",
    groups: [
      { title: "Tricouri", links: [
        { label: "Toate tricourile bărbați", href: "collection.html?c=tricouri-barbati", icon: "tee" },
        { label: "Tricouri TEXT", href: "collection.html?c=tricouri-text", icon: "quote" },
        { label: "Tricouri Face", href: "collection.html?c=tricouri-face", icon: "face" },
        { label: "Colecția România", href: "collection.html?c=tricouri-romania", icon: "mountain" }
      ]},
      { title: "Treninguri", links: [
        { label: "Trening Street", href: "product.html?p=trening-barbati-street", icon: "hoodie" },
        { label: "Toate treningurile", href: "collection.html?c=treninguri", icon: "velvet" }
      ]}
    ],
    featured: [
      { img: u("1521572163474-6864f9cf17ab", 640), title: "Tricou Alb One", note: "45 lei · 3+ → 30 lei/buc", href: "product.html?p=tricou-one" },
      { img: u("1593030761757-71fae45fa0e7", 640), title: "Colecția Face", note: "grafică statement", href: "collection.html?c=tricouri-face" }
    ]
  },
  {
    id: "copii", label: "Copii", icon: "kid",
    tagline: "2–12 ani, bumbac certificat",
    groups: [
      { title: "Cei mici", links: [
        { label: "Tricouri copii", href: "collection.html?c=tricouri-copii", icon: "tee" },
        { label: "Mama și Princess", href: "collection.html?c=tricouri-mama-si-princess", icon: "crown", badge: "Set" }
      ]}
    ],
    featured: [
      { img: u("1503919545889-aef636e10ad4", 640), title: "Dino Roar", note: "39 lei · 2–12 ani", href: "product.html?p=tricou-copii-dino" },
      { img: u("1476703993599-0035a21b17a9", 640), title: "Mama și Princess", note: "seturi asortate", href: "collection.html?c=tricouri-mama-si-princess" }
    ]
  },
  {
    id: "familie", label: "Familie & Cupluri", icon: "hearts",
    tagline: "Asortați, la preț de set",
    groups: [
      { title: "Seturi", links: [
        { label: "Tricouri cuplu", href: "collection.html?c=tricouri-cupluri", icon: "hearts" },
        { label: "Set bluze", href: "collection.html?c=set-bluze", icon: "sweater" },
        { label: "Seturi familie", href: "collection.html?c=tricouri-cupluri", icon: "family" }
      ]}
    ],
    featured: [
      { img: u("1516726817505-f5ed825624d8", 640), title: "Mr & Mrs", note: "98 lei setul", href: "product.html?p=tricouri-cuplu-mr-mrs" },
      { img: u("1511895426328-dc8714191300", 640), title: "Seturi familie", note: "3 piese asortate", href: "collection.html?c=tricouri-cupluri" }
    ]
  },
  {
    id: "treninguri", label: "Treninguri", icon: "velvet",
    tagline: "-10% la 3 treninguri",
    groups: [
      { title: "După material", links: [
        { label: "Catifea", href: "collection.html?c=trening-catifea", icon: "velvet", badge: "Bestseller" },
        { label: "Bumbac 100%", href: "collection.html?c=treninguri", icon: "cotton" }
      ]},
      { title: "După stil", links: [
        { label: "Damă", href: "collection.html?c=treninguri", icon: "woman" },
        { label: "Bărbați Street", href: "product.html?p=trening-barbati-street", icon: "hoodie" }
      ]}
    ],
    featured: [
      { img: u("1552374196-1ab2a1c593e8", 640), title: "Trening din Catifea", note: "149 lei · 4 culori", href: "product.html?p=trening-din-catifea" },
      { img: u("1515886657613-9f3515b0c78f", 640), title: "Catifea Royal", note: "nuanțe profunde", href: "product.html?p=trening-catifea-royal" }
    ]
  },
  {
    id: "sezon", label: "Sezon & Teme", icon: "sparkle",
    tagline: "Crăciun, Friends, România",
    groups: [
      { title: "Crăciun", links: [
        { label: "Damă", href: "collection.html?c=tricouri-craciun", icon: "snow" },
        { label: "Bărbați", href: "collection.html?c=tricouri-craciun-barbati", icon: "snow" },
        { label: "Cupluri", href: "collection.html?c=tricouri-cuplu-craciun", icon: "hearts" },
        { label: "Familie", href: "collection.html?c=tricouri-craciun-familie", icon: "family" },
        { label: "Bluze", href: "collection.html?c=bluze-craciun", icon: "sweater" }
      ]},
      { title: "Tematice", links: [
        { label: "Friends", href: "collection.html?c=friends", icon: "quote" },
        { label: "România", href: "collection.html?c=tricouri-romania", icon: "mountain" }
      ]}
    ],
    featured: [
      { img: u("1512389142860-9c449e58a543", 640), title: "Colecția Crăciun", note: "sub brad, asortați", href: "collection.html?c=tricouri-craciun" },
      { img: u("1482575832494-771f74bf6857", 640), title: "Cuplu Deer", note: "el Deer, ea Dear", href: "product.html?p=tricouri-cuplu-craciun-deer" }
    ]
  },
  {
    id: "accesorii", label: "Accesorii", icon: "phone",
    tagline: "Huse marble, iPhone & Samsung",
    groups: [
      { title: "Huse telefon", links: [
        { label: "Huse Marble", href: "collection.html?c=huse-marble", icon: "phone", badge: "-24%" }
      ]}
    ],
    featured: [
      { img: u("1601593346740-925612772716", 640), title: "Marble Rose", note: "45 lei", href: "product.html?p=husa-marble-rose" },
      { img: u("1592750475338-74b7b21085ab", 640), title: "Marble Noir", note: "45 lei", href: "product.html?p=husa-marble-noir" }
    ]
  }
];

/* ---------- RECENZII (pool pentru pagina de produs) ---------- */
const MC_REVIEWS = [
  { name: "Andreea M.", stars: 5, date: "acum 3 zile",  title: "Exact ca în poze", text: "Catifeaua e superbă, foarte moale, iar croiala e exact cum speram. Am luat M la 1.68m/60kg și e perfect. Comand și pe negru!", verified: true },
  { name: "Cristina P.", stars: 5, date: "acum o săptămână", title: "Al treilea trening comandat", text: "După primul am revenit pentru încă două culori. Livrarea a ajuns a doua zi, ambalaj impecabil. Se simte mult peste prețul lui.", verified: true },
  { name: "Mihai D.", stars: 4, date: "acum 2 săptămâni", title: "Foarte bun, o mărime mai mare", text: "Calitate bună, doar că recomand o mărime în plus dacă vă place mai lejer. Materialul nu s-a schimbat după 5 spălări.", verified: true },
  { name: "Elena V.", stars: 5, date: "acum 3 săptămâni", title: "Cadou reușit", text: "L-am luat cadou pentru sora mea și acum vrea toată familia. Culoarea vișinie e și mai frumoasă în realitate.", verified: true },
  { name: "Ioana T.", stars: 5, date: "acum o lună", title: "Wow", text: "Rar scriu recenzii, dar aici merită: material premium, cusături impecabile, iar bluza cu decolteu în V e foarte flatantă.", verified: false },
  { name: "Alexandra R.", stars: 4, date: "acum o lună", title: "Recomand", text: "Bun raport calitate-preț. Transportul gratuit peste 200 lei m-a convins să iau și un tricou — nicio urmă de regret.", verified: true }
];

/* ---------- HELPERS CATALOG ---------- */
function mcProduct(handle) { return MC_PRODUCTS.find(function (p) { return p.handle === handle; }); }
function mcByCollection(handle) {
  if (handle === "all") return MC_PRODUCTS.slice();
  return MC_PRODUCTS.filter(function (p) { return p.collection === handle || (p.collections || []).indexOf(handle) !== -1; });
}
function mcPrice(v) { return v % 1 === 0 ? v + " lei" : v.toFixed(2).replace(".", ",") + " lei"; }
