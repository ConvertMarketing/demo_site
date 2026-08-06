# -*- coding: utf-8 -*-
"""Generează assets/js/data.js din catalogul real moncherie.ro.

Rulare:  python3 tools/gen_data.py
Descarcă întregul catalog public Shopify (moncherie.ro/products.json) plus
apartenența pe colecțiile folosite de demo, apoi rescrie assets/js/data.js.
Descărcările se păstrează în tools/.cache/ — șterge directorul pentru refresh.
"""
import json, os, re, subprocess, time, hashlib, html
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, "tools", ".cache")
os.makedirs(CACHE, exist_ok=True)
BASE = "https://moncherie.ro"
CA = "/root/.ccr/ca-bundle.crt"  # proxy-ul mediilor cloud; ignorat dacă lipsește

def http_json(url, tries=5):
    cmd = ["curl", "-sS", "--fail", url]
    if os.path.exists(CA):
        cmd[1:1] = ["--cacert", CA]
    for i in range(tries):
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=90)
        if r.returncode == 0:
            try:
                return json.loads(r.stdout)
            except json.JSONDecodeError:
                pass
        time.sleep(2 * (i + 1))
    raise RuntimeError(f"nu am putut descărca {url}")

def cached(name, fn):
    path = os.path.join(CACHE, name)
    if os.path.exists(path):
        return json.load(open(path))
    data = fn()
    json.dump(data, open(path, "w"), ensure_ascii=False)
    return data

def fetch_all_products():
    out, page = [], 1
    while True:
        d = http_json(f"{BASE}/products.json?limit=250&page={page}")
        ps = d.get("products", [])
        if not ps:
            break
        out.extend(ps)
        print(f"  products.json pagina {page}: {len(ps)}")
        page += 1
        time.sleep(0.4)
    return out

def fetch_membership(handles):
    out = {}
    for h in handles:
        acc, page = [], 1
        while page <= 2:  # max 500/colecție — suficient pentru selecție
            d = http_json(f"{BASE}/collections/{h}/products.json?limit=250&page={page}")
            ps = d.get("products", [])
            if not ps:
                break
            acc.extend(p["handle"] for p in ps)
            page += 1
            time.sleep(0.4)
        out[h] = acc
        print(f"  colecția {h}: {len(acc)} produse")
        time.sleep(0.4)
    return out

print("Descarc catalogul moncherie.ro (sau folosesc cache-ul)...")
products = cached("products_all.json", fetch_all_products)
by_handle = {p["handle"]: p for p in products}

TODAY = datetime.now(timezone.utc)

# ---------- colecțiile demo: handle -> (titlu, sub, desc, tone, cate produse) ----------
COLS = {
  "tricouri-dama":             ("Tricouri Damă", "Bumbac 100% cu imprimeu", "Tricouri damă din bumbac 100%, versatile și ușor de asortat — de la basics impecabile la imprimeuri statement.", ["#EAD9D5", "#9E6B76"], 16),
  "tricouri-negre-dama":       ("Tricouri Negre Damă", "Negrul care nu dă greș", "Tricouri negre damă din bumbac 100% — piesa clasică, croită impecabil, pentru orice garderobă.", ["#2B2B2E", "#6B6B70"], 12),
  "modele-noi":                ("Modele Noi", "Ultimele intrări", "Cele mai noi tricouri damă din bumbac 100% cu imprimeu — prospețime în fiecare săptămână.", ["#F1E4D4", "#B08D57"], 12),
  "tricouri-primavara":        ("Tricouri Primăvară", "Imprimeuri florale", "Colecția de primăvară: imprimeuri inspirate de sezon pe bumbac moale, respirabil.", ["#E7EFE3", "#7A9471"], 12),
  "bluze":                     ("Bluze", "Mâneca lungă, aceeași atitudine", "Bluze damă din bumbac, cu imprimeuri originale — pentru zilele mai răcoroase.", ["#E4DED4", "#8A7F72"], 12),
  "mom":                       ("Tricouri Mama", "Pentru super-mame", "Tricouri dedicate mamelor — mesaje calde, bumbac 100%, cadoul care nu dă greș.", ["#F3E0E2", "#B76E79"], 10),
  "tricouri-barbati":          ("Tricouri Bărbați", "Bumbac 100% cu imprimeu", "Tricouri bărbați cu imprimeuri grafice, motive street style și mesaje cool — confort și stil masculin.", ["#DDE3E8", "#5B6770"], 12),
  "tricouri-text":             ("Tricouri TEXT", "Spune-o pe față", "Mesaje îndrăznețe, tipografie curată — tricouri care vorbesc înainte să o faci tu.", ["#F6F3EE", "#16130F"], 10),
  "tricouri-face":             ("Tricouri Face", "Grafică statement", "Portrete și grafici cu impact — pentru un look modern casual.", ["#E8E2D9", "#8C6A4F"], 5),
  "tricouri-romania":          ("Tricouri România", "Purtate cu mândrie", "Colecția România — simboluri autohtone pe bumbac 100%.", ["#E3E8F0", "#27408B"], 3),
  "tricouri-oversize":         ("Tricouri OVERSIZE", "Croială relaxată", "Tricouri oversize din bumbac gros — croiala lejeră care arată bine pe oricine.", ["#EDEAE4", "#57534E"], 10),
  "tricouri-copii":            ("Tricouri Copii", "2–12 ani", "Tricouri copii din bumbac moale, cu imprimeuri jucăușe — mărimi de la 2 la 12 ani.", ["#FDF0DC", "#E8A15D"], 10),
  "tricouri-mama-si-princess": ("Mama și Princess", "Set asortat", "Seturi asortate mama–fiică: aceeași grafică, două mărimi, de două ori mai multă bucurie.", ["#F3E0E2", "#C78895"], 10),
  "tricouri-cupluri":          ("Tricouri Cuplu", "În doi e mai bine", "Tricouri pereche pentru cupluri — grafici complementare, bumbac 100%.", ["#EAD9D5", "#A31621"], 12),
  "set-bluze":                 ("Set Bluze", "Seturi asortate", "Seturi de bluze asortate pentru cupluri și familie — la preț de set.", ["#E4DED4", "#6B5B4C"], 10),
  "trening-catifea":           ("Trening Catifea", "Moale. Elegant. Al tău.", "Treninguri din catifea moale, plăcută la atingere — bluza cu decolteu în V și manșete elastice, croială relaxată, aer elegant.", ["#3D2B33", "#8A5A6B"], 13),
  "trening-1":                 ("Treninguri", "Confort de zi cu zi", "Treninguri damă din catifea sau bumbac 100% — croieli curate, purtabile oriunde.", ["#DDD8CE", "#57534E"], 12),
  "trening-din-bumbac-100-cu-imprimeu": ("Trening Bumbac cu Imprimeu", "Bumbac 100%", "Treninguri din bumbac 100% cu imprimeuri originale — set complet, comod, cu personalitate.", ["#E4DED4", "#6B5B4C"], 10),
  "tricouri-craciun":          ("Tricouri Damă Crăciun", "Spirit de sărbătoare", "Tricouri damă cu imprimeuri de Crăciun — pentru cele mai calde sărbători.", ["#E8D5D5", "#9E1B32"], 12),
  "tricouri-craciun-barbati":  ("Tricouri Crăciun Bărbați", "Ho ho ho", "Tricouri bărbați cu tematică de Crăciun — cadoul simplu care nimerește mereu.", ["#D8E2DC", "#2D5A47"], 10),
  "tricouri-cuplu-craciun":    ("Tricouri Cuplu Crăciun", "Sărbători în doi", "Seturi pereche de Crăciun pentru cupluri — asortați-vă sub brad.", ["#E8D5D5", "#7C1220"], 10),
  "tricouri-craciun-familie":  ("Tricouri Crăciun Familie", "Toată familia, asortată", "Seturi de familie pentru Crăciun — mărimi pentru mama, tata și copii.", ["#E2D8CC", "#8C2F39"], 10),
  "bluze-craciun":             ("Bluze Damă Crăciun", "Cozy season", "Bluze călduroase cu imprimeuri festive — perfecte pentru serile de decembrie.", ["#E8D5D5", "#9E1B32"], 10),
  "friends":                   ("Friends", "Colecția tematică", "Colecția Friends — grafici inspirate de serialul iconic, pentru fani adevărați.", ["#F1E4D4", "#C77B3B"], 13),
  "best-seller":               ("Cele mai bine vândute", "Favoritele clienților", "Produsele comandate iar și iar — dovada că unele piese nu dau greș niciodată.", ["#F1E4D4", "#B08D57"], 20),
  "lenjerii":                  ("Lenjerii de Pat", "Finet, damasc, satin", "Lenjerii de pat pentru pat dublu — finet moale, damasc elegant sau satin fin, în seturi de 4 sau 6 piese.", ["#E7E3DB", "#8A7F72"], 14),
  "prosoape":                  ("Prosoape", "Baie, față, bucătărie", "Prosoape din bumbac — moi, absorbante, în culori care rezistă spălărilor.", ["#E3EBEA", "#5F8A80"], 10),
}

membership = cached("membership.json", lambda: fetch_membership(list(COLS.keys())))

# ordinea de prioritate pentru colecția primară (specifică -> generică)
PRIMARY_ORDER = [
  "trening-catifea", "trening-din-bumbac-100-cu-imprimeu", "trening-1",
  "tricouri-mama-si-princess", "tricouri-cuplu-craciun", "tricouri-craciun-familie",
  "tricouri-craciun-barbati", "bluze-craciun", "tricouri-craciun", "set-bluze",
  "tricouri-cupluri", "friends", "tricouri-copii", "mom", "tricouri-face",
  "tricouri-romania", "tricouri-text", "tricouri-oversize", "tricouri-negre-dama",
  "tricouri-primavara", "bluze", "tricouri-barbati", "modele-noi", "tricouri-dama",
  "lenjerii", "prosoape", "best-seller",
]

# ---------- helpers ----------
def seeded(handle, lo, hi, salt=""):
    h = int(hashlib.md5((handle + salt).encode()).hexdigest()[:8], 16)
    return lo + h % (hi - lo + 1)

def strip_html(s):
    s = re.sub(r"<(style|script)[^>]*>.*?</\1>", " ", s or "", flags=re.S | re.I)
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    return re.sub(r"\s+", " ", s).strip()

def short_desc(p, primary):
    txt = strip_html(p.get("body_html", ""))
    txt = re.sub(r"(?i)(dimensiuni(le)? disponibile|tabel(ul)? de marimi|ghid marimi).*$", "", txt).strip()
    if len(txt) >= 40:
        cut = txt[:320]
        m = re.search(r"^.*[.!?]", cut)
        out = (m.group(0) if m and len(m.group(0)) >= 60 else cut).strip()
        if len(out) < len(txt) and not out.endswith((".", "!", "?")):
            out = out.rstrip(",;: ") + "…"
        return out
    t, _, _, _, _ = COLS[primary]
    return f"{p['title']} — produs original Mon Chérie din colecția {t}."

COLOR_MAP = [
    (r"\bverde\s+salvie\b|\bsalvie\b", ("Verde salvie", "#B5C0A8")),
    (r"\bnegru\b|\bneagra\b|\bblack\b", ("Negru", "#1C1A1B")),
    (r"\bbej\b|\bbeige\b", ("Bej", "#D9C7AE")),
    (r"\bvisiniu\b|\bbordo\b|\bburgundy\b|\bgrena\b", ("Vișiniu", "#6E2637")),
    (r"\brosu\b|\brosie\b|\bred\b", ("Roșu", "#9E1B32")),
    (r"\balbastru\b|\bbleumarin\b|\bnavy\b|\bblue\b", ("Albastru", "#2A3A55")),
    (r"\broz\b|\bpink\b|\brose\b", ("Roz", "#E3C8C4")),
    (r"\bgri\b|\bgrey\b|\bgray\b", ("Gri", "#B7B3AD")),
    (r"\bmov\b|\blila\b|\bpurple\b", ("Mov", "#8E7CA5")),
    (r"\bgalben\b|\byellow\b", ("Galben", "#E8C15D")),
    (r"\bportocaliu\b|\borange\b", ("Portocaliu", "#C97B4A")),
    (r"\bmaro\b|\bbrown\b|\bmocca\b", ("Maro", "#7A5C49")),
    (r"\bcrem\b|\bivory\b|\becru\b", ("Crem", "#E8DFD0")),
    (r"\bverde\b|\bgreen\b", ("Verde", "#7A9471")),
    (r"\balb\b|\balba\b|\bwhite\b", ("Alb", "#F4F1EA")),
]

def norm(s):
    s = s.lower()
    return (s.replace("ă", "a").replace("â", "a").replace("î", "i")
             .replace("ș", "s").replace("ş", "s").replace("ț", "t").replace("ţ", "t"))

def derive_color(p, primary):
    hay = norm(p["title"] + " " + p.get("product_type", "") + " " + p["handle"].replace("-", " "))
    for pat, col in COLOR_MAP:
        if re.search(pat, hay):
            return [{"name": col[0], "hex": col[1]}]
    # doar tricourile/bluzele fără culoare în titlu sunt implicit albe pe moncherie.ro;
    # la restul (treninguri, lenjerii, prosoape) nu afișăm o culoare inventată
    if re.search(r"tricou|bluz", norm(p["title"] + " " + primary)):
        return [{"name": "Alb", "hex": "#F4F1EA"}]
    return []

OPT_LABEL = {
    "marime dama": "Damă", "marime barbat": "Bărbat", "marime mama": "Mama",
    "marime fata": "Fata", "marime fetita": "Fetița", "marime copil": "Copil",
    "marime baiat": "Băiat", "marime unisex": "Unisex", "gen": "Gen",
}

SIZE_ALIAS = {"XXL": "2XL", "XXXL": "3XL"}  # catalogul amestecă ambele notații
def norm_size(v):
    v = (v or "").strip()
    return SIZE_ALIAS.get(v.upper(), v)

def size_range(vals):
    vals = [norm_size(v) for v in vals if v]
    if not vals: return ""
    return vals[0] if len(vals) == 1 else f"{vals[0]}–{vals[-1]}"

def derive_sizes(p, primary):
    opts = [{"name": (o.get("name") or "").strip(), "values": o.get("values") or []}
            for o in p.get("options", [])]
    real = [o for o in opts if o["name"].lower() != "title"]
    if not real:
        return "home", []
    if len(real) == 1:
        o = real[0]
        vals = [norm_size(v) for v in o["values"]]
        vals = list(dict.fromkeys(vals))  # XXL→2XL poate crea dubluri
        if any("ani" in norm(v) for v in vals) or primary == "tricouri-copii":
            return "kids", vals
        if norm(o["name"]) == "gen":
            return "set", vals
        return "adult", vals
    # >= 2 opțiuni: set (cuplu / mama-fiica / gen+marime)
    gen_opt = next((o for o in real if norm(o["name"]) == "gen"), None)
    if gen_opt and len(real) == 2:
        size_opt = next(o for o in real if o is not gen_opt)
        groups = {}
        for v in p.get("variants", []):
            g = v.get("option1") if norm(p["options"][0]["name"].strip()) == "gen" else v.get("option2")
            s = v.get("option2") if norm(p["options"][0]["name"].strip()) == "gen" else v.get("option1")
            groups.setdefault(g, []).append(s)
        out = [f"{g}: {size_range(list(dict.fromkeys(ss)))}" for g, ss in groups.items() if g]
        return "set", out or [f"{o['name']}: {size_range(o['values'])}" for o in real]
    out = []
    for o in real:
        label = OPT_LABEL.get(norm(o["name"]), o["name"])
        out.append(f"{label}: {size_range(o['values'])}")
    return "set", out

def derive_details(p, primary, sizes_kind):
    t = norm(p["title"])
    if primary == "lenjerii":
        mat = ("Damasc finetat deluxe" if "damasc finetat" in t else
               "Damasc" if "damasc" in t else "Satin extra fin" if "satin" in t else
               "Cocolino" if "cocolino" in t else "Finet")
        pieces = re.search(r"(\d)\s*piese", t)
        fit = (f"Set {pieces.group(1)} piese pentru pat dublu" if pieces else "Set pentru pat dublu")
        if "cu elastic" in t: fit += ", cearșaf cu elastic"
        return {"material": mat, "fit": fit, "care": "Spălare la 40°C, centrifugare redusă. Călcare la temperatură medie."}
    if primary == "prosoape":
        kind = ("baie" if "baie" in t else "față" if "fata" in t else "bucătărie" if "bucatarie" in t else "")
        return {"material": "Bumbac 100%, absorbant", "fit": ("Prosop de " + kind) if kind else "Prosop din bumbac",
                "care": "Spălare la 60°C. Fără balsam la primele spălări, pentru absorbție maximă."}
    if "catifea" in t or primary == "trening-catifea":
        return {"material": "Catifea moale, plăcută la atingere",
                "fit": "Croială relaxată — bluză cu decolteu în V, pantalon cu talie elastică",
                "care": "Spălare la 30°C, pe dos. Nu se calcă direct pe catifea."}
    if "trening" in t:
        return {"material": "Bumbac 100%", "fit": "Set două piese — croială comodă, purtabilă zilnic",
                "care": "Spălare la 30°C, pe dos."}
    if primary in ("bluze", "bluze-craciun", "set-bluze"):
        fit = "Regular feminin, mânecă lungă" if primary != "set-bluze" else "Regular, toate piesele din set"
        return {"material": "Bumbac 100%", "fit": fit, "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."}
    fit = ("Regular copii" if sizes_kind == "kids" else
           "Regular, toate piesele din set" if sizes_kind == "set" else
           "Regular" if primary in ("tricouri-barbati", "tricouri-craciun-barbati") else
           "Oversize, umeri căzuți" if primary == "tricouri-oversize" else "Regular feminin")
    return {"material": "Bumbac 100%", "fit": fit, "care": "Spălare la 30°C, pe dos. Nu se calcă imprimeul."}

def img_url(src, w):
    return src + ("&" if "?" in src else "?") + "width=" + str(w)

def num(x):
    if x is None: return None
    v = float(x)
    return int(v) if v == int(v) else round(v, 2)

# ---------- selecție produse ----------
chosen = {}          # handle -> set(colecții demo din care face parte)
order_in = {}        # colecție -> lista handle-uri alese (în ordinea din magazin)
for ch, (_, _, _, _, cap) in COLS.items():
    picked = []
    for h in membership.get(ch, []):
        if len(picked) >= cap: break
        p = by_handle.get(h)
        if not p or not p.get("images"): continue
        if "test" in norm(p["title"]).split(): continue
        if not p.get("variants"): continue
        picked.append(h)
        chosen.setdefault(h, set()).add(ch)
    order_in[ch] = picked

# membership complet pe colecțiile demo (chiar și pentru produse alese în altă colecție)
for ch in COLS:
    mem = set(membership.get(ch, []))
    for h in chosen:
        if h in mem:
            chosen[h].add(ch)

def primary_of(h):
    cols = chosen[h]
    for c in PRIMARY_ORDER:
        if c in cols: return c
    return next(iter(cols))

# ---------- construiește MC_PRODUCTS ----------
BADGE_RATING = {}
prods_js = []
handles_order = []   # ordinea globală: pe colecții, în ordinea PRIMARY_ORDER
seen = set()
for ch in PRIMARY_ORDER:
    for h in order_in.get(ch, []):
        if h in seen: continue
        seen.add(h)
        handles_order.append(h)

for h in handles_order:
    p = by_handle[h]
    primary = primary_of(h)
    cols_sorted = [c for c in PRIMARY_ORDER if c in chosen[h]]
    if primary in cols_sorted:
        cols_sorted.remove(primary)
    cols_list = [primary] + cols_sorted

    variants = p["variants"]
    vmin = min(variants, key=lambda v: float(v["price"]))
    price = num(vmin["price"])
    compare = num(vmin.get("compare_at_price"))
    if compare is not None and compare <= price: compare = None

    sizes_kind, size_list = derive_sizes(p, primary)
    is_new = False
    try:
        pub = datetime.fromisoformat(p["published_at"])
        is_new = (TODAY - pub.astimezone(timezone.utc)).days <= 45
    except Exception:
        pass
    pct = round((1 - price / compare) * 100) if compare else 0
    if h in set(membership.get("best-seller", [])):
        badge = "Bestseller"
    elif pct >= 15:
        badge = f"-{pct}%"
    elif is_new:
        badge = "Nou"
    elif sizes_kind == "set" and re.search(r"cuplu|famil|set|mama", norm(p["title"])):
        badge = "Set"
    else:
        badge = None

    rating = 4.4 + (seeded(h, 0, 5, "r")) * 0.1
    reviews = seeded(h, 9, 214, "n")
    tone = COLS[primary][3]

    # upsells: următoarele 2 din colecția primară + 1 bestseller;
    # titluri diferite de produs și între ele (catalogul real are multe titluri identice)
    def title_of(x): return by_handle[x]["title"].strip().lower()
    seen_titles = {title_of(h)}
    pool = [x for x in order_in.get(primary, []) if x != h and x in chosen]
    i = pool and (order_in[primary].index(h) if h in order_in[primary] else 0) or 0
    ups = []
    for k in range(len(pool)):
        cand = pool[(i + k) % len(pool)]
        if cand not in ups and title_of(cand) not in seen_titles:
            ups.append(cand); seen_titles.add(title_of(cand))
        if len(ups) == 2: break
    for b in order_in.get("best-seller", []):
        if b != h and b not in ups and b in chosen and title_of(b) not in seen_titles:
            ups.append(b); break

    prods_js.append({
        "handle": h, "title": p["title"], "collection": primary,
        "collections": cols_list,
        "price": price, "compareAt": compare, "badge": badge,
        "rating": round(rating, 1), "reviews": reviews,
        "colors": derive_color(p, primary),
        "sizes": sizes_kind, "sizeList": size_list,
        "desc": short_desc(p, primary),
        "details": derive_details(p, primary, sizes_kind),
        "images": [img_url(im["src"], 1200) for im in p["images"][:4]],
        "tone": tone, "upsells": ups,
    })

print("produse unice:", len(prods_js))

# ---------- MC_COLLECTIONS ----------
def col_img(ch):
    for h in order_in.get(ch, []):
        p = by_handle[h]
        if p.get("images"):
            return img_url(p["images"][0]["src"], 1600)
    return ""

cols_js = {}
for ch, (title, sub, desc, tone, _) in COLS.items():
    cols_js[ch] = {"title": title, "sub": sub, "desc": desc, "img": col_img(ch), "tone": tone}
cols_js["all"] = {"title": "Toate produsele", "sub": "Catalogul complet",
                  "desc": "Explorează întregul univers Mon Chérie.", "img": col_img("best-seller"), "tone": ["#F6F3EE", "#16130F"]}

# ---------- MC_MENU ----------
def fp(ch, idx=0):
    """featured product (handle, titlu, imagine 640, preț) din colecția ch"""
    hs = order_in.get(ch, [])
    if idx >= len(hs): idx = 0
    h = hs[idx]
    p = by_handle[h]
    pr = min(float(v["price"]) for v in p["variants"])
    pr = int(pr) if pr == int(pr) else pr
    return h, p["title"], img_url(p["images"][0]["src"], 640), pr

def fcol(ch):
    return cols_js[ch]["img"].replace("width=1600", "width=640")

h_cat, t_cat, i_cat, p_cat = fp("trening-catifea")
h_bar, t_bar, i_bar, p_bar = fp("tricouri-barbati")
h_cop, t_cop, i_cop, p_cop = fp("tricouri-copii")
h_cup, t_cup, i_cup, p_cup = fp("tricouri-cupluri")
h_tr1, t_tr1, i_tr1, p_tr1 = fp("trening-1")
h_ccu, t_ccu, i_ccu, p_ccu = fp("tricouri-cuplu-craciun")
h_len, t_len, i_len, p_len = fp("lenjerii")
h_pro, t_pro, i_pro, p_pro = fp("prosoape")

def short_t(t, n=34):
    return t if len(t) <= n else t[:n].rstrip() + "…"

menu_js = [
  {"id": "dama", "label": "Damă", "icon": "woman", "tagline": "Bumbac 100%, croieli feminine",
   "groups": [
     {"title": "Tricouri", "links": [
       {"label": "Toate tricourile damă", "href": "collection.html?c=tricouri-dama", "icon": "tee"},
       {"label": "Tricouri negre", "href": "collection.html?c=tricouri-negre-dama", "icon": "tee"},
       {"label": "Modele noi", "href": "collection.html?c=modele-noi", "icon": "sparkle", "badge": "Nou"},
       {"label": "Colecția Primăvară", "href": "collection.html?c=tricouri-primavara", "icon": "flower"},
       {"label": "Tricouri Mama", "href": "collection.html?c=mom", "icon": "heart"},
       {"label": "Tricouri OVERSIZE", "href": "collection.html?c=tricouri-oversize", "icon": "tee"}]},
     {"title": "Mânecă lungă", "links": [
       {"label": "Bluze", "href": "collection.html?c=bluze", "icon": "sweater"},
       {"label": "Trening catifea", "href": "collection.html?c=trening-catifea", "icon": "velvet", "badge": "Bestseller"}]}],
   "featured": [
     {"img": i_cat, "title": short_t(t_cat), "note": f"de la {p_cat} lei", "href": f"product.html?p={h_cat}"},
     {"img": fcol("modele-noi"), "title": "Modele noi", "note": "prospețime săptămânală", "href": "collection.html?c=modele-noi"}]},
  {"id": "barbati", "label": "Bărbați", "icon": "man", "tagline": "Grafic, street, esențial",
   "groups": [
     {"title": "Tricouri", "links": [
       {"label": "Toate tricourile bărbați", "href": "collection.html?c=tricouri-barbati", "icon": "tee"},
       {"label": "Tricouri TEXT", "href": "collection.html?c=tricouri-text", "icon": "quote"},
       {"label": "Tricouri Face", "href": "collection.html?c=tricouri-face", "icon": "face"},
       {"label": "Colecția România", "href": "collection.html?c=tricouri-romania", "icon": "mountain"}]},
     {"title": "Crăciun", "links": [
       {"label": "Tricouri Crăciun bărbați", "href": "collection.html?c=tricouri-craciun-barbati", "icon": "snow"}]}],
   "featured": [
     {"img": i_bar, "title": short_t(t_bar), "note": f"de la {p_bar} lei", "href": f"product.html?p={h_bar}"},
     {"img": fcol("tricouri-text"), "title": "Tricouri TEXT", "note": "spune-o pe față", "href": "collection.html?c=tricouri-text"}]},
  {"id": "copii", "label": "Copii", "icon": "kid", "tagline": "2–12 ani, bumbac moale",
   "groups": [
     {"title": "Cei mici", "links": [
       {"label": "Tricouri copii", "href": "collection.html?c=tricouri-copii", "icon": "tee"},
       {"label": "Mama și Princess", "href": "collection.html?c=tricouri-mama-si-princess", "icon": "crown", "badge": "Set"}]}],
   "featured": [
     {"img": i_cop, "title": short_t(t_cop), "note": f"de la {p_cop} lei", "href": f"product.html?p={h_cop}"},
     {"img": fcol("tricouri-mama-si-princess"), "title": "Mama și Princess", "note": "seturi asortate", "href": "collection.html?c=tricouri-mama-si-princess"}]},
  {"id": "familie", "label": "Familie & Cupluri", "icon": "hearts", "tagline": "Asortați, la preț de set",
   "groups": [
     {"title": "Seturi", "links": [
       {"label": "Tricouri cuplu", "href": "collection.html?c=tricouri-cupluri", "icon": "hearts"},
       {"label": "Set bluze", "href": "collection.html?c=set-bluze", "icon": "sweater"},
       {"label": "Mama și Princess", "href": "collection.html?c=tricouri-mama-si-princess", "icon": "family"}]}],
   "featured": [
     {"img": i_cup, "title": short_t(t_cup), "note": f"de la {p_cup} lei", "href": f"product.html?p={h_cup}"},
     {"img": fcol("set-bluze"), "title": "Set Bluze", "note": "seturi asortate", "href": "collection.html?c=set-bluze"}]},
  {"id": "treninguri", "label": "Treninguri", "icon": "velvet", "tagline": "-10% la 3 treninguri",
   "groups": [
     {"title": "După material", "links": [
       {"label": "Catifea", "href": "collection.html?c=trening-catifea", "icon": "velvet", "badge": "Bestseller"},
       {"label": "Bumbac 100%", "href": "collection.html?c=trening-1", "icon": "cotton"},
       {"label": "Bumbac cu imprimeu", "href": "collection.html?c=trening-din-bumbac-100-cu-imprimeu", "icon": "cotton"}]}],
   "featured": [
     {"img": i_cat, "title": short_t(t_cat), "note": f"de la {p_cat} lei", "href": f"product.html?p={h_cat}"},
     {"img": i_tr1, "title": short_t(t_tr1), "note": f"de la {p_tr1} lei", "href": f"product.html?p={h_tr1}"}]},
  {"id": "sezon", "label": "Sezon & Teme", "icon": "sparkle", "tagline": "Crăciun, Friends, România",
   "groups": [
     {"title": "Crăciun", "links": [
       {"label": "Damă", "href": "collection.html?c=tricouri-craciun", "icon": "snow"},
       {"label": "Bărbați", "href": "collection.html?c=tricouri-craciun-barbati", "icon": "snow"},
       {"label": "Cupluri", "href": "collection.html?c=tricouri-cuplu-craciun", "icon": "hearts"},
       {"label": "Familie", "href": "collection.html?c=tricouri-craciun-familie", "icon": "family"},
       {"label": "Bluze", "href": "collection.html?c=bluze-craciun", "icon": "sweater"}]},
     {"title": "Tematice", "links": [
       {"label": "Friends", "href": "collection.html?c=friends", "icon": "quote"},
       {"label": "România", "href": "collection.html?c=tricouri-romania", "icon": "mountain"}]}],
   "featured": [
     {"img": fcol("tricouri-craciun"), "title": "Colecția Crăciun", "note": "sub brad, asortați", "href": "collection.html?c=tricouri-craciun"},
     {"img": i_ccu, "title": short_t(t_ccu), "note": f"de la {p_ccu} lei", "href": f"product.html?p={h_ccu}"}]},
  {"id": "casa", "label": "Casă & Textile", "icon": "cotton", "tagline": "Lenjerii, prosoape",
   "groups": [
     {"title": "Dormitor & baie", "links": [
       {"label": "Lenjerii de pat", "href": "collection.html?c=lenjerii", "icon": "cotton"},
       {"label": "Prosoape", "href": "collection.html?c=prosoape", "icon": "sparkle"}]}],
   "featured": [
     {"img": i_len, "title": short_t(t_len), "note": f"de la {p_len} lei", "href": f"product.html?p={h_len}"},
     {"img": i_pro, "title": short_t(t_pro), "note": f"de la {p_pro} lei", "href": f"product.html?p={h_pro}"}]},
]

# ---------- serializare data.js ----------
def js(v, indent=0):
    return json.dumps(v, ensure_ascii=False)

lines = []
lines.append("""/* =========================================================
   MON CHÉRIE — Catalog demo cu PRODUSE REALE moncherie.ro
   Titluri, prețuri, reduceri, mărimi, descrieri și imagini
   preluate din catalogul public Shopify al magazinului
   (moncherie.ro/products.json). Imaginile vin direct de pe
   cdn.shopify.com. Ratingurile și recenziile sunt valori
   demonstrative (magazinul nu le expune public prin API).
   Generat de tools/gen_data.py: """ + TODAY.strftime("%Y-%m-%d") + """.
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
const MC_COLLECTIONS = {""")
col_lines = []
for ch, c in cols_js.items():
    col_lines.append(f'  {js(ch)}: {{ title: {js(c["title"])}, sub: {js(c["sub"])}, desc: {js(c["desc"])}, img: {js(c["img"])}, tone: {js(c["tone"])} }}')
lines.append(",\n".join(col_lines))
lines.append("};\n")

lines.append("""/* ---------- PRODUSE (reale, selecție curatoriată din 5.477) ---------- */
/* sizes: "adult" => mărimi adulți, "kids" => mărimi copii, "set" => mărimi per membru, "home" => o singură variantă */
const MC_PRODUCTS = [""")
prod_lines = []
for p in prods_js:
    prod_lines.append(
        "  {\n"
        f'    handle: {js(p["handle"])}, title: {js(p["title"])},\n'
        f'    collection: {js(p["collection"])}, collections: {js(p["collections"])},\n'
        f'    price: {js(p["price"])}, compareAt: {js(p["compareAt"])}, badge: {js(p["badge"])}, rating: {js(p["rating"])}, reviews: {js(p["reviews"])},\n'
        f'    colors: {js(p["colors"])},\n'
        f'    sizes: {js(p["sizes"])}, sizeList: {js(p["sizeList"])},\n'
        f'    desc: {js(p["desc"])},\n'
        f'    details: {js(p["details"])},\n'
        f'    images: {js(p["images"])},\n'
        f'    tone: {js(p["tone"])}, upsells: {js(p["upsells"])}\n'
        "  }")
lines.append(",\n".join(prod_lines))
lines.append("];\n")

lines.append("/* ---------- MEGA-MENU ---------- */\nconst MC_MENU = " + json.dumps(menu_js, ensure_ascii=False, indent=2) + ";\n")

lines.append("""/* ---------- RECENZII (pool demonstrativ pentru pagina de produs) ---------- */
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
function mcPrice(v) { return v % 1 === 0 ? v + " lei" : v.toFixed(2).replace(".", ",") + " lei"; }""")

out = "\n".join(lines) + "\n"
dest = os.path.join(ROOT, "assets", "js", "data.js")
open(dest, "w").write(out)
print("scris:", dest, f"({len(out)} bytes, {len(prods_js)} produse)")
print("ATENȚIE: hero-ul din home.js/index.html referă handle-ul",
      order_in["trening-catifea"][0], "— actualizează-l dacă s-a schimbat.")
