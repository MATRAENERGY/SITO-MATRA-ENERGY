# Matra Energy Sito — Handoff

**Snapshot:** 2026-11-06
**Produzione:** `https://matraenergy.it` (Hostinger Business Web Hosting) — LIVE
**Branch deploy:** `site-live` (auto-generato da GitHub Action su push a `main`)
**Repo:** `MATRAENERGY/SITO-MATRA-ENERGY`
**Working dir DEV:** `C:\siti\matraenergy` (Windows, PowerShell)

> Leggi `CLAUDE.md` per la guida operativa completa.

---

## 1. Stack e deploy

- **Sito:** statico — struttura a 3 file in root: `index.html` (HTML) + `style.css` (CSS, con 3 zone responsive isolate in fondo) + `script.js` (JS) + cartella `assets/`
- **Server locale:** `node server.js` → http://localhost:8080 (solo dev, NON in produzione)
- **Font:** Poppins (Google CDN)
- **Form:** Web3Forms → `amministrazione@matraenergy.it`
- **Deploy pipeline:**
  - Push su `main` → GitHub Action (`deploy-site-live.yml`) → branch `site-live` aggiornato → Hostinger auto-deploy su `public_html`
  - Il ciclo completo dura ~1 minuto

---

## 2. Stato sezioni

| Sezione | Stato | Note |
|---|---|---|
| Splash intro | ✅ | Zoom lineare 1.8s, logo completo |
| Navbar | ✅ | Scroll blur, hamburger mobile |
| Hero | ✅ | 2 colonne desktop, mascotte float |
| Stats | ✅ | 4 contatori animati |
| Chi Siamo | ✅ | Foto reale + testo |
| Servizi | ✅ | 4 card hover |
| Portfolio | ✅ | 6 album lightbox |
| Recensioni | ✅ | Carousel auto — DA SOSTITUIRE con vere da Google |
| Preventivo | ✅ | Form funzionante, email reale |
| Contatti | ✅ | 4 card bianche, mappa embed |
| Footer | ✅ | Logo bianco, social, privacy modal |

---

## 3. Task aperti

**Alta priorità:**
- [ ] Inserire recensioni reali da Google (attualmente placeholder)
- [ ] Google Reviews API: serve Place ID + Google API key

**SEO / tecnici:**
- [ ] Meta og:image mancante (social share senza preview)
- [ ] robots.txt + sitemap.xml mancanti
- [ ] Cookie banner GDPR (modal presente ma non auto-popup all'ingresso)

---

## 4. Infrastruttura Hostinger

| Voce | Valore |
|---|---|
| Piano | Business |
| Dominio | matraenergy.it |
| SSH IP | 92.113.18.89 |
| SSH porta | 65002 |
| SSH utente | u757689513 |
| SSH stato | ACTIVE |
| Git integration | SITO-MATRA-ENERGY / branch site-live / public_html |
| GitHub App | Hostinger installata su account MATRAENERGY |

---

## 5. Commit recenti

| SHA | Descrizione |
|---|---|
| `6a39c64` | Contatti mobile: fix overflow colonne (min-width:0 + minmax(0,1fr) sulla grid) |
| `edd3a72` | Mobile: fix overflow Contatti (orari/indirizzo/copia) + hardening Preventivo |
| `8b3524b` | Preventivo: card a 3 pannelli con mascotte che spunta dall'onda (mano visibile, onda a 2 strati) |
| `bb6cea8` | Prova: ambience hero + mascotte ridotta + bubble animata |
| `4fa993b` | Revert "Preventivo: scena SVG soft attorno alla mascotte (casa, condizionatore, collinette) + fascia 3 icone-servizio" |
