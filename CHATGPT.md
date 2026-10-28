# Matra Energy Sito — Punto di ingresso per ChatGPT

> Leggi **solo questo file** all'avvio. Per stato corrente del sito, controlla `HANDOFF.md`. Gli altri documenti sono mappe consultabili per sezione.

---

## 1. Lettura iniziale

1. Leggi soltanto `CHATGPT.md` all'inizio di ogni sessione.
2. Controlla stato reale su GitHub (branch `main`, `site-live`).
3. `CLAUDE.md` e `HANDOFF.md` sono **mappe consultabili** — leggi soltanto le sezioni pertinenti.
4. Non rileggere file già acquisiti nella stessa sessione.

---

## 2. Divisione dei ruoli

**Utente → ChatGPT:**
- Descrive il problema e il risultato atteso.
- ChatGPT prepara la richiesta per Claude, lasciando le scelte tecniche a Claude.

**Claude Code:**
- Riceve la richiesta già strutturata; pianifica ed esegue nella stessa sessione.
- Legge soltanto i file esplicitamente necessari al task.
- Quando autorizzato nella richiesta, completa commit, push e verifica deploy senza chiedere nuovamente la stessa autorizzazione.
- Prima del report finale verifica che il deploy su Hostinger sia completato (branch `site-live` aggiornato, sito live corretto).

---

## 3. Struttura dei prompt per Claude

Un prompt efficace contiene:

```
Contesto: problema o risultato atteso (concreto, non generico)
Obiettivo verificabile: cosa deve essere vero a fine sessione
Invarianti da preservare: comportamenti o vincoli che non devono cambiare
Autorizzazioni incluse: es. "autorizo commit, push e deploy"
Formato del report finale atteso
```

Claude sceglie autonomamente quali file leggere e come strutturare le modifiche. Non è necessario elencare file o descrivere le modifiche file per file.

**Non usare** formule generiche: "analizza il progetto", "adatta dove serve", "fai quello che serve".

---

## 4. Workflow deploy

```
Claude modifica index.html (o assets/)
  → commit + push su main
    → GitHub Action si attiva automaticamente
      → copia index.html + assets/ su branch site-live
        → Hostinger legge site-live e aggiorna matraenergy.it
          → Claude verifica sito live
            → report finale
```

**Regole operative:**
- REGOLA CRITICA: NON usare sed/bash per modificare `index.html` → usare SOLO Edit tool.
- Un obiettivo verificabile per sessione.
- Nuova sessione per un nuovo obiettivo.
- Commit e push su `main` sempre (mai su `site-live` — è gestito dalla GitHub Action).
- Il branch `site-live` non va mai toccato manualmente.

---

## 5. Mappa rapida del progetto

```
C:\siti\matraenergy\
├── index.html          # Tutto il sito: HTML + CSS + JS inline (file unico)
├── assets/             # Immagini, loghi, SVG
├── server.js           # Server locale (NON usato in produzione)
├── package.json        # Solo per dev locale (jimp ecc.)
├── .github/
│   └── workflows/
│       └── deploy-site-live.yml   # GitHub Action → crea branch site-live
├── CLAUDE.md           # Guida operativa completa
├── CHATGPT.md          # Questo file
└── HANDOFF.md          # Stato corrente progetto
```

**Documenti consultabili per sezione:**

| File | Contiene |
|---|---|
| `CLAUDE.md` | Guida operativa: sezioni sito, asset, CSS vars, breakpoint, funzionalità |
| `HANDOFF.md` | Stato corrente, TODO, ultimo deploy |
| `CHATGPT.md` | Workflow e istruzioni per ChatGPT |

---

## 6. Invarianti critiche del sito

| Invariante | Dettaglio |
|---|---|
| File unico | Tutto il sito è in `index.html` (HTML + CSS + JS inline) |
| Edit tool only | MAI modificare `index.html` con sed/bash — svuota il file |
| Branch deploy | MAI pushare su `site-live` manualmente |
| Background hero | `assets/background per la hero.png` (NON hero-bg.jpg) |
| Form email | Web3Forms → `amministrazione@matraenergy.it` |
| Server locale | `node server.js` → http://localhost:8080 (solo dev) |
