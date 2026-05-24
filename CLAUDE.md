\## Ultra Caveman Output



Speak less.



Default answer:

\- max 5 short lines

\- no long explanation

\- no theory

\- no options unless needed

\- no repeated warnings

\- no big summaries



Use this format:



Status:

Done / Not done / Risk



Next:

One command or one action



Ask:

Only if truly blocked



When coding:

\- say file touched

\- say section touched

\- say result

\- stop



Do not write paragraphs.

Do not over-explain.

Do not teach unless user asks.

MATRA ENERGY SRL — STATO PROGETTO (CAVEMAN MODE)
Data: 24 maggio 2026
File: index.html (tutto in uno — HTML + CSS + JS insieme)
Start: node server.js → vai su http://localhost:8080
Backup: Nessuno. Attenzione = vita tua.

FATTO
Navbar (barra top)

Bianco, bordo blu sottile
Logo SVG 90px — colori original
Link blu, diventano rossi quando tocchi
Pulsante CTA rosso "Preventivo Gratuito"
Menu hamburger mobile (overlay blu scuro)
Alto: 106px

Hero (sezione big top)

Due colonne: testo sinistra, mascotte destra
Mascotte 470px — galleggia su/giù, sfumatura basso, ombra
Ombra pavimento pulsa con mascotte
Blob + onda curva come base
Speech bubble: "Richiedi preventivo gratis!"
Titolo + sottotitolo + 2 bottoni + 3 numeri (15+, 500+, 300+)
Badge: "Latina e Provincia — Dal 2008"
Scroll hint animato

Stats (numeri grandi)

Sfondo blu, 4 contatori: 15+, 500+, 300+, 1200kW
Animano quando vedi (scroll)
Linee verticali tra

Chi Siamo

Due colonne: testo + foto placeholder
4 punti valori azienda
Foto vuota = istruzioni dentro

Servizi

4 card: Termoidraulica, Fotovoltaico, Climatizzazione, Manutenzione
Hover = sale su + barra rossa top
Link "Richiedi preventivo" in ogni card

Portfolio

6 card placeholder (sfumature colori diversi)
Istruzioni foto dentro
Hover = overlay blu

Recensioni

Carousel 5 stelle, scroll automatico ogni 5.2 secondi
Frecce + puntini navigazione manuale
Clienti placeholder (da sostituire)

Sezione Preventivo

Sinistra: mascotte piccola (100px) + speech bubble + 5 benefit
Destra: form (Nome, Telefono, Servizio, Messaggio)
Validazione: evidenzia campi vuoti
Submit = mostra "Ok!" (non invia davvero)

Contatti

4 card blu: Telefono/WhatsApp, Email, Indirizzo, Orari
Pulsante WhatsApp verde

Footer

Blu scuro (#012554), bordo rosso top
Logo bianco 260px (invertito)
Descrizione azienda
3 colonne link: Servizi, Azienda, Contatti
Social: Facebook, Instagram, WhatsApp (bianco sfondo, blue→red hover)
Copyright + P.IVA + indirizzo

Global

Animazioni scroll (entra da sinistra/destra/basso)
Pulsante scroll-to-top rosso
Nav evidenzia sezione attuale mentre scrolli
Responsive: 1040px, 768px, 520px
Font: Poppins (Google)
Colori: bianco, blu #01366b, rosso #ed2613



ASSET IN assets/
NomeUsologo-testo.svgNavbar + footer (versione URL-safe)mascotte.svgHero + CTA section (1400 linee Illustrator)mascotte.pngFallback mascottelogo.pngFallback logo.ai, .eps, .pdfSorgenti — non serviti

FUNZIONA ✅

Navigazione smooth
Animazioni (float, pulse, numeri, scroll-in)
Carousel recensioni (auto + manuale)
Form validazione (frontend)
Menu mobile
Scroll-to-top
Nav evidenzia su scroll
Responsive tutto
Logo originale navbar (sfondo bianco)
Logo bianco footer (filter invert)



NON FUNZIONA ❌ / PROBLEMI
Critici

Form non invia — mostra "ok!" ma dati scompaiono. Serve endpoint (Formspree, EmailJS, PHP/Node)
No git/backup — modifica sbagliata = rollback manuale

Placeholder da riempire

Portfolio: 6 card vuote (colorate) — servono foto progetti veri
Chi Siamo: manca foto team/cantiere
Recensioni: 5 clienti finti (Marco, Laura, ecc.) — metti veri o approvati
Social: facebook.com/matraenergy + instagram.com/matraenergy esistono
Telefono: +39 324 779 0045
Email: amministrazione@matraenergy.it

Tecnici (minori)

Favicon: manca, browser mostra generico
Meta og:image: niente (share social non ha preview)
robots.txt + sitemap.xml: niente (SEO base)
Cookie banner GDPR: obbligatorio sito italiano — manca
Google Maps: sezione Contatti ha solo card, no mappa
Dead code: righe \~1347–1361 (duplicate observer nav) — funziona lo stesso
Copyright: dice "© 2024" — update a 2025/2026
logo-testo.svg: è copia rinominata — se originale cambia, ricopia

TECH RAPIDO

File:        Un file HTML — tutto inline
Server:      node server.js → http://localhost:8080
Charset:     UTF-8
Font:        Poppins (Google CDN)
Vars CSS:    --blue #01366b | --red #ed2613 | --white #fff
Navbar h:    106px (sincro con scroll-padding-top + hero padding)
Breakpoint:  1040px | 768px | 520px

