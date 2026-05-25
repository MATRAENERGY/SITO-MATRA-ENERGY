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
Data aggiornamento: 26 maggio 2026
File: index.html (tutto in uno — HTML + CSS + JS insieme)
Start: node server.js → http://localhost:8080
IMPORTANTE: mai usare sed su index.html — svuota il file. Usare SOLO Edit tool.

---

SEZIONI E STATO ATTUALE

Navbar
- Bianco, bordo blu sottile
- Logo SVG 90px
- Link blu → rossi su hover
- CTA rosso "Preventivo Gratuito"
- Hamburger mobile (overlay blu scuro)
- Altezza: 106px

Hero
- Background: assets/background per la hero.png (NON hero-bg.jpg)
- Due colonne: testo sx, mascotte dx (mascotte.svg / mascotte.png fallback)
- Mascotte 470px con animazione float
- Speech bubble, badge "Latina e Provincia — Dal 2008"
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

Portfolio
- 6 card con data-album per lightbox (click apre galleria, frecce, ESC chiude)
- Fotovoltaico: imagine impianto fotovoltaico.png (bg-position center 30%)
- Impianto Industriale: imagine impianto industriale.png
- Termoidraulica, Climatizzazione, Ristrutturazione, Manutenzione: gradiente placeholder
- Badge "1 foto" / "Prossimamente" + hover hint camera

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
- Sfondo: gradiente profondo #010c24 con radial glow (uguale footer)
- 4 card glassmorphism (backdrop-filter:blur(12px))
- Icone: BIANCHE (non rosse) — .ct-ico bg rgba(255,255,255,.1), stroke:#fff
- Card 1: messaggi — "Messaggi & Telefono" + WhatsApp
- Card 2: email — "Email"
- Card 3: pin — "Sede Operativa"
- Card 4: orologio — "Orari"
- Hover card: glow rosso sottile

Footer
- Sfondo: gradiente #010c24 → #012554 (continua visivamente dai contatti)
- Separatore contatti/footer: rgba(255,255,255,.1) — NON rosso
- Logo bianco 260px (filter invert)
- Social: FB, IG, WhatsApp — icone 52px, Instagram SVG filled single-path
- Colonna "Assistenza": testo + bottone mailto (NON lista link)
- f-bottom: © 2026, REA LT-334019, link Privacy Policy + Cookie Policy (modal)

---

ASSET IN assets/
- logo-testo.svg → Navbar + footer
- mascotte.svg → Hero (galleggiante)
- mascotte.png → fallback hero
- mascotte per preventivi.png → Sezione preventivo (sfondo RIMOSSO con jimp)
- background per la hero.png → Background hero (NON hero-bg.jpg)
- imagine sezione chi siamo.png → Sezione Chi Siamo
- imagine impianto fotovoltaico.png → Portfolio card Fotovoltaico
- imagine impianto industriale.png → Portfolio card Impianto Industriale
- logo.png, logo.svg → vari usi
- Logo completo / solo mascotte → .ai .eps .pdf .png .svg (sorgenti)

SERVER
- File: server.js (Node.js http puro, no framework)
- Porta: 8080, solo localhost
- IMPORTANTE: usa decodeURIComponent per gestire spazi nei nomi file
- npm installato (package.json presente) con jimp (usato per rimuovere sfondo mascotte)
- Riavvio: termina processo su porta 8080, poi: node server.js

---

FUNZIONA ✅
- Navigazione smooth + scroll-to-top
- Animazioni scroll-in (f-left, f-right, f-up)
- Mascotte float + pulse ombra
- Contatori animati (25+, 500+, 300+, 1200kW)
- Carousel recensioni (auto + manuale)
- Form → invia email reale a amministrazione@matraenergy.it (Web3Forms)
- Menu mobile
- Nav evidenzia sezione corrente su scroll
- Responsive: 1040px (iPad+mobile layout compatto 2-col), 768px, 520px
- MOBILE/iPad (≤1040): nav ham sx|logo centro|CTA dx; hero 2-col compatto come desktop (bg-photo + overlay laterale); mascotte dx absolute bottom:-28px sovrapposta a stats card; stats 3-col; servizi/portfolio/contatti tutti 2x2; reviews compatti; preventivo grid "text mascot / form form" con perks piccoli + mascotte 200px padding-top:40px; footer: brand full | Servizi+Azienda 2col | Assistenza full
- Immagini con spazi nel nome: decodificate correttamente dal server
- Sfondo mascotte preventivi: rimosso (PNG trasparente)
- Lightbox portfolio con album per categoria (prev/next/dots/ESC)
- Privacy Policy + Cookie Policy (modal 2 tab, GDPR 2026)

NON FUNZIONA / MANCA ❌
Priorità alta:
- Recensioni: sono placeholder (Marco Rossi, Laura Bianchi ecc.) — inserire vere da Google
- Google Reviews API: serve Place ID + Google API key (chiamata server-side via server.js)
- Portfolio: 4 card ancora placeholder — servono foto (termoidraulica, climatizzazione, ristrutturazione, manutenzione)

Tecnici minori:
- Favicon: manca
- Meta og:image: manca (social share senza preview)
- robots.txt + sitemap.xml: mancano (SEO base)
- Cookie banner GDPR: manca banner visibile all'ingresso (modal privacy presente ma non auto-popup)
- Google Maps embed: sezione contatti ha solo card, no mappa

---

TECH RAPIDO
- File unico: index.html (HTML + CSS + JS inline)
- Server: node server.js → http://localhost:8080
- Font: Poppins (Google CDN)
- CSS vars: --blue #01366b | --red #ed2613 | --blue-bg #eef4fa | --blue-dark #012554
- Sfondo sezioni scure: #010c24 con radial gradient (stats, recensioni, contatti, footer)
- Navbar h: 106px
- Breakpoint: 1040px | 768px | 520px
- Form endpoint: https://api.web3forms.com/submit
- REGOLA CRITICA: NON usare sed/bash per modificare index.html → usa Edit tool
