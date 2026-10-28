# Matra Energy Sito — Handoff

**Snapshot:** 2026-10-28
**Produzione:** `https://matraenergy.it` (Hostinger Business Web Hosting) — LIVE
**Branch deploy:** `site-live` (auto-generato da GitHub Action su push a `main`)
**Repo:** `MATRAENERGY/SITO-MATRA-ENERGY`
**Working dir DEV:** `C:\siti\matraenergy` (Windows, PowerShell)

> Leggi `CLAUDE.md` per la guida operativa completa.

---

## 1. Stack e deploy

- **Sito:** statico — file unico `index.html` + cartella `assets/`
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
- [ ] Favicon mancante
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
| `fc00182` | Aggiunge GitHub Action per deploy filtrato su branch site-live |
| `2ee5bc5` | Aggiunte foto team recensioni e aggiornamento index.html |
| `0ae6e07` | Production-ready: splash intro, portfolio completo, mobile fixes |
| `d5c1bfe` | Mobile/iPad refinements |
| `8f2b20b` | Redesign responsive mobile/iPad |
