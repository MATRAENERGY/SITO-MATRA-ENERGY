## Ultra Caveman Output

Speak less.

Default answer:
- max 5 short lines
- no long explanation
- no theory
- no options unless needed
- no repeated warnings
- no big summaries

Use this format:

Status:
Done / Not done / Risk

Next:
One command or one action

Ask:
Only if truly blocked

When coding:
- say file touched
- say section touched
- say result
- stop

Do not write paragraphs.
Do not over-explain.
Do not teach unless user asks.

---

MATRA ENERGY SRL — STATO PROGETTO
Data aggiornamento: 25 maggio 2026 (versione production-ready)
File: index.html (tutto in uno — HTML + CSS + JS insieme)
Start LOCALE: node server.js → http://localhost:8080
ONLINE: sito statico, basta caricare `index.html` + cartella `assets/` su qualsiasi hosting (Netlify, Vercel, Aruba, ecc.). server.js NON serve online.
IMPORTANTE: mai usare sed su index.html — svuota il file. Usare SOLO Edit tool.

---

DEPLOY ONLINE — COSA CARICARE
Sul server/hosting carica SOLO:
- index.html
- assets/ (intera cartella)

NON caricare:
- server.js, package.json, package-lock.json, node_modules/, remove-bg.js (sono dev locale)
- CLAUDE.md, .gitignore, .git/

---

SEZIONI E STATO ATTUALE

Splash Intro (NUOVO)
- Overlay full-screen all'apertura con logo completo mascotte+scritta
- Animazione: fade-in + zoom lineare da scale .7 a 1.25 (1.4s)
- Fade-out a 1.2s, remove totale a 1.8s
- Body class `splash-on` blocca scroll durante intro
- Logo: assets/Logo Completo mascotte + scritta.svg (fallback .png)

Navbar
- Bianco, bordo blu sottile, scroll → bg bianco + blur
- Logo SVG 90px
- Link blu → rossi su hover
- CTA rosso "Preventivo Gratuito"
- Hamburger mobile (overlay blu scuro)
- Altezza: 106px
- Quando menu mobile aperto: logo navbar diventa BIANCO (filter invert), nav.scrolled bg trasparente

Hero
- Background: assets/background per la hero.png (NON hero-bg.jpg)
- Due colonne desktop: testo sx, mascotte dx (mascotte.svg / mascotte.png fallback)
- Mascotte 470px con animazione float
- Speech bubble, badge "Lazio e dintorni — 25+ anni di esperienza"
- Numeri: 25+, 500+, 300+

Stats (sotto hero)
- Sfondo: gradiente profondo #010c24 con radial glow blu
- 4 contatori animati: 25+, 500+, 300+, 1200kW
- Hover su ogni stat: sale di 4px

Chi Siamo
- Due colonne: testo + foto reale
- Immagine: assets/imagine sezione chi siamo.png (.about-real-img, aspect-ratio 4/3)
- Testo: "Con oltre 25 anni di esperienza…"

Servizi
- 4 card su sfondo --blue-bg
- Hover: sale + barra rossa top

Portfolio (AGGIORNATO)
- 6 card con data-album per lightbox (click apre galleria, frecce, ESC chiude)
- Fotovoltaico: imagine impianto fotovoltaico.png (1 foto)
- Termoidraulica: pdc full electric 1-3 + solare termico (4 foto)
- Climatizzazione: immagine climatizzatore 1-2 (2 foto)
- Impianto Industriale: imagine impianto industriale.png + immagine industriale 2.jpg (2 foto)
- Scaldabagno (era Ristrutturazione): immagine scaldabagno 1-3 (3 foto)
- Sistemi Ibridi (era Manutenzione): immagine caldaia ibrida 1-5 (5 foto)
- Badge "N foto" + hover hint camera

Recensioni
- Sfondo: gradiente profondo #010c24 (stesso palette stats/contatti)
- Card glassmorphism (backdrop-filter:blur(20px))
- Stelle SVG gialle (#FBBC04, non emoji)
- Badge "Recensione Google" con logo G colorato (4 colori ufficiali)
- Quote " decorativa in basso-destra (opacity .07)
- 5 recensioni placeholder — DA SOSTITUIRE con vere da Google
- Carousel auto ogni 5.2s + frecce + puntini

Sezione Preventivo (id="preventivo")
- Layout 3 COLONNE: 1fr testo | 1.6fr form | 280px mascotte
- Col 1: tag + h2 "Inizia a risparmiare / già da oggi" + perks list (bordo rosso sx su paragrafo)
- Col 2: form-card (padding 38x44px, textarea 88px)
- Col 3: mascotte per preventivi.png + speech bubble (radius gira verso sx)
- Form invia REALMENTE via Web3Forms → amministrazione@matraenergy.it
- Chiave Web3Forms: b7cb4961-7aed-4508-b728-933945ddba89
- Campi: Nome*, Telefono*, Email (opzionale), Servizio*, Messaggio

Contatti
- Sfondo sezione: gradiente profondo #010c24 con radial glow (uguale footer)
- 4 card BIANCHE (#fff bg, border #e3ebf6, shadow) per contrasto su bg scuro
- Testi card: titoli #7a8aa3, link var(--blue), p #5a6478
- Icone colorate per servizio: WhatsApp verde #25d366 fill, Mail blu #1a73e8, Pin rosso, Orari var(--red)
- Card 1: WhatsApp + telefono — "Messaggi & Telefono"
- Card 2: email — link `.ct-mail-link` nowrap+ellipsis (no overflow mobile)
- Card 3: pin — "Sede Operativa" con mappa Google embed
- Card 4: orologio — "Orari"
- Hover card: glow rosso sottile

Footer
- Sfondo: gradiente #010c24 → #012554 (continua visivamente dai contatti)
- Separatore contatti/footer: rgba(255,255,255,.1) — NON rosso
- Logo bianco 260px (filter invert)
- Social: FB, IG, WhatsApp — icone 52px
- Colonna "Assistenza": testo + bottone mailto (NON lista link)
- f-bottom: © 2026, REA LT-334019, link Privacy Policy + Cookie Policy (modal)

Menu Mobile (overlay)
- SOLO links + CTA + social (NIENTE secondo logo)
- Logo della navbar in alto diventa bianco quando menu aperto
- Social: 3 bottoni bianchi rotondi (48px), hover rosso
- Instagram: SVG outline pulito (camera+pallino)

---

ASSET IN assets/
- logo-testo.svg → Navbar + footer
- Logo Completo mascotte + scritta.svg/png → Splash intro
- mascotte.svg → Hero (galleggiante)
- mascotte.png / matra.png → fallback hero
- mascotte per preventivi.png → Sezione preventivo (sfondo RIMOSSO con jimp)
- background per la hero.png → Background hero (NON hero-bg.jpg)
- imagine sezione chi siamo.png → Sezione Chi Siamo
- imagine impianto fotovoltaico.png → Portfolio Fotovoltaico
- imagine impianto industriale.png + immagine industriale 2.jpg → Portfolio Industriale
- immagine pdc full electric 1 (principale.jpg, 2, 3 → Portfolio Termoidraulica
- immagine solare termico.jpg → Portfolio Termoidraulica
- immagine climatizzatore 1 (principale).jpg, 2 → Portfolio Climatizzazione
- immagine scaldabagno 1 (principale).jpg, 2, 3 → Portfolio Scaldabagno
- immagine caldaia ibrida 1 principale).jpg, 2, 3, 4, 5 → Portfolio Sistemi Ibridi
- logo.png, logo.svg → vari usi
- Sorgenti loghi: Logo completo / solo mascotte → .ai .eps .pdf .png .svg

SERVER (solo locale)
- File: server.js (Node.js http puro, no framework)
- Porta: 8080, solo localhost
- IMPORTANTE: usa decodeURIComponent per gestire spazi nei nomi file
- npm installato (package.json presente) con jimp (usato per rimuovere sfondo mascotte)
- Riavvio: termina processo su porta 8080, poi: node server.js
- NON serve in produzione (sito statico)

---

FUNZIONA ✅
- Splash intro con logo zoom lineare (1.8s totali)
- Navigazione smooth + scroll-to-top
- Animazioni scroll-in (f-left, f-right, f-up)
- Mascotte float + pulse ombra
- Contatori animati (25+, 500+, 300+, 1200kW)
- Carousel recensioni (auto + manuale)
- Form → invia email reale a amministrazione@matraenergy.it (Web3Forms)
- Menu mobile (senza doppio logo, logo navbar diventa bianco)
- Nav evidenzia sezione corrente su scroll
- Responsive: 1040px (iPad+mobile layout compatto 2-col), 768px, 620px, 520px, 416px (ultra-stretti)
- MOBILE/iPad (≤1040): nav ham sx|logo centro|CTA dx; hero 2-col compatto; mascotte dx absolute sovrapposta stats card; stats 3-col; servizi/portfolio/contatti 2x2; reviews compatti; preventivo grid "text mascot / form form"; footer: brand full | Servizi+Azienda 2col | Assistenza full
- 521-600px: features pill stack verticale + bubble preventivo ridotta
- MOBILE (≤520): hero 1-col text full width, mascotte absolute right:85px (più centrale), bubble accanto al viso (left:100% margin-left:-24px), features pill stack verticale; preventivo riarrangiato 1-col; JS scroll-handler su `a[href="#preventivo"]` (solo su ≤520)
- ULTRA-STRETTI (≤416): container padding 12px, bottoni padding ridotto, stats card font ridotto per anti-overflow
- Speech bubble mascotte hero: posizionata absolute accanto al viso (bottom:78px left:100% margin-left:-24px)
- Mascotte preventivo mobile: animazione `mascotFloatMini` -2px↔-7px (oscilla solo in alto, no overlap form)
- Immagini con spazi nel nome: decodificate correttamente dal server
- Sfondo mascotte preventivi: rimosso (PNG trasparente)
- Lightbox portfolio con album per categoria (prev/next/dots/ESC)
- Privacy Policy + Cookie Policy (modal 2 tab, GDPR 2026)

NON FUNZIONA / MANCA ❌
Priorità alta:
- Recensioni: sono placeholder (Marco Rossi, Laura Bianchi ecc.) — inserire vere da Google
- Google Reviews API: serve Place ID + Google API key (chiamata server-side)

Tecnici minori:
- Favicon: manca
- Meta og:image: manca (social share senza preview)
- robots.txt + sitemap.xml: mancano (SEO base)
- Cookie banner GDPR: manca banner visibile all'ingresso (modal privacy presente ma non auto-popup)

---

TECH RAPIDO
- File unico: index.html (HTML + CSS + JS inline)
- Server locale: node server.js → http://localhost:8080
- Online: sito statico, carica index.html + assets/
- Font: Poppins (Google CDN)
- CSS vars: --blue #01366b | --red #ed2613 | --blue-bg #eef4fa | --blue-dark #012554
- Sfondo sezioni scure: #010c24 con radial gradient (stats, recensioni, contatti, footer)
- Navbar h: 106px
- Breakpoint: 1040px | 768px | 620px | 520px | 416px
- Form endpoint: https://api.web3forms.com/submit
- REGOLA CRITICA: NON usare sed/bash per modificare index.html → usa Edit tool
