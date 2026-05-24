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
Data aggiornamento: 24 maggio 2026
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
- Due colonne: testo + foto placeholder
- Testo: "Con oltre 25 anni di esperienza…"

Servizi
- 4 card su sfondo --blue-bg
- Hover: sale + barra rossa top

Portfolio
- 6 card placeholder con gradienti colorati

Recensioni
- Sfondo: gradiente profondo #010c24 (stesso palette stats/contatti)
- Card glassmorphism (backdrop-filter:blur(20px))
- Stelle SVG gialle (#FBBC04, non emoji)
- Badge "Recensione Google" con logo G colorato (4 colori ufficiali)
- Quote " decorativa in basso-destra (opacity .07)
- 5 recensioni placeholder — DA SOSTITUIRE con vere da Google
- Carousel auto ogni 5.2s + frecce + puntini

Sezione Preventivo (id="preventivo")
- Layout 3 COLONNE: 260px mascotte | 1.1fr testo | 1.4fr form
- Col 1: mascotte per preventivi.png (sfondo rimosso con jimp) + speech bubble sopra
- Col 2: tag + h2 "Inizia a risparmiare / già da oggi" + perks list
- Col 3: form-card (padding 50x52px, input 14px padding, textarea 124px)
- Form invia REALMENTE via Web3Forms → amministrazione@matraenergy.it
- Chiave Web3Forms: b7cb4961-7aed-4508-b728-933945ddba89
- Campi: Nome*, Telefono*, Email (opzionale), Servizio*, Messaggio

Contatti
- Sfondo: gradiente profondo #010c24 con radial glow (uguale footer)
- 4 card glassmorphism (backdrop-filter:blur(12px))
- Icona 1: messaggi (non telefono) — "Messaggi & Telefono"
- Subtitle: margin:0 auto → centrato
- Hover card: glow rosso sottile

Footer
- Sfondo: gradiente #010c24 → #012554 (continua visivamente dai contatti)
- Separatore contatti/footer: rgba(255,255,255,.1) — NON rosso
- Logo bianco 260px (filter invert)
- Social: FB, IG, WhatsApp

---

ASSET IN assets/
- logo-testo.svg → Navbar + footer
- mascotte.svg → Hero (galleggiante)
- mascotte.png → fallback hero
- mascotte per preventivi.png → Sezione preventivo (sfondo RIMOSSO con jimp)
- background per la hero.png → Background hero (NON hero-bg.jpg)
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
- Responsive: 1040px, 768px, 520px
- Immagini con spazi nel nome: decodificate correttamente dal server
- Sfondo mascotte preventivi: rimosso (PNG trasparente)

NON FUNZIONA / MANCA ❌
Priorità alta:
- Recensioni: sono placeholder (Marco Rossi, Laura Bianchi ecc.) — inserire vere da Google
- Google Reviews API: struttura pronta, serve Place ID + Google API key
- Portfolio: 6 card vuote — servono foto progetti veri
- Chi Siamo: manca foto team/cantiere

Tecnici minori:
- Favicon: manca
- Meta og:image: manca (social share senza preview)
- robots.txt + sitemap.xml: mancano (SEO base)
- Cookie banner GDPR: obbligatorio per sito italiano
- Google Maps embed: sezione contatti ha solo card, no mappa
- Copyright: verificare anno (attualmente non aggiornato)

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
