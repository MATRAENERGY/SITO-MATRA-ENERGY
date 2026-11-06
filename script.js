  /* Hero canvas — particelle calore */
  (function(){
    const cv = document.getElementById('hero-canvas');
    if(!cv) return;
    const ctx = cv.getContext('2d');
    let W, H, pts = [];
    function resize(){ W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);

    function mkPt(){
      return {
        x: Math.random() * W,
        y: H + Math.random() * 60,
        r: Math.random() * 2.2 + 0.6,
        sp: Math.random() * 0.55 + 0.2,
        wo: (Math.random() - 0.5) * 0.4,
        op: Math.random() * 0.5 + 0.15,
        /* colori: bianco, ambra, rosso-arancio brand */
        col: [
          'rgba(255,255,255,',
          'rgba(255,160,60,',
          'rgba(237,80,30,',
          'rgba(180,210,255,'
        ][Math.floor(Math.random()*4)]
      };
    }
    for(let i=0;i<80;i++){ const p=mkPt(); p.y=Math.random()*H; pts.push(p); }

    function draw(){
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = p.col + p.op + ')';
        ctx.fill();
        p.y  -= p.sp;
        p.x  += p.wo;
        p.op -= 0.0008;
        if(p.y < -10 || p.op <= 0){ const n=mkPt(); Object.assign(p,n); }
      });
      requestAnimationFrame(draw);
    }
    draw();
  })();

  /* Navbar scroll */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 48), { passive: true });

  /* Preventivo link su mobile: scroll alla sezione (form in cima) */
  document.querySelectorAll('a[href="#preventivo"]').forEach(a => {
    a.addEventListener('click', e => {
      if (window.innerWidth > 520) return;
      const tgt = document.querySelector('#preventivo');
      if (!tgt) return;
      e.preventDefault();
      const y = tgt.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top:y, behavior:'smooth' });
      if (typeof closeMenu === 'function') closeMenu();
    });
  });

  /* Hamburger */
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mobMenu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('on');
    mob.classList.toggle('on');
    const open = mob.classList.contains('on');
    document.body.style.overflow = open ? 'hidden' : '';
    document.body.classList.toggle('menu-open', open);
  });
  function closeMenu(){ ham.classList.remove('on'); mob.classList.remove('on'); document.body.style.overflow = ''; document.body.classList.remove('menu-open'); }

  /* Scroll animations */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('on'); }
      else { e.target.classList.remove('on'); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.f-up,.f-left,.f-right').forEach(el => io.observe(el));

  /* Counters */
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ runCounter(e.target); cio.unobserve(e.target); } });
  }, { threshold: 0.6 });
  document.querySelectorAll('.counter').forEach(el => cio.observe(el));

  function runCounter(el){
    const t = +el.dataset.t, dur = 1800, step = t / (dur / 16);
    let c = 0;
    const iv = setInterval(() => {
      c = Math.min(c + step, t);
      el.textContent = Math.floor(c).toLocaleString('it-IT');
      if(c >= t) clearInterval(iv);
    }, 16);
  }

  /* Carousel */
  let cur = 0;
  const slides = document.querySelectorAll('.c-slide');
  const dots   = document.querySelectorAll('.c-dot');
  const n = slides.length;
  let ap;
  function goTo(i){
    slides[cur].classList.remove('on'); dots[cur].classList.remove('on');
    cur = (i + n) % n;
    slides[cur].classList.add('on'); dots[cur].classList.add('on');
  }
  function resetAp(){ clearInterval(ap); ap = setInterval(() => goTo(cur+1), 5200); }
  document.getElementById('cNext').addEventListener('click', () => { goTo(cur+1); resetAp(); });
  document.getElementById('cPrev').addEventListener('click', () => { goTo(cur-1); resetAp(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.i); resetAp(); }));
  resetAp();

  /* Swipe touch recensioni */
  var cWrap = slides.length ? slides[0].parentElement : null;
  if (cWrap) {
    let cTX = null, cTY = null;
    cWrap.addEventListener('touchstart', e => {
      cTX = e.touches[0].clientX; cTY = e.touches[0].clientY;
    }, { passive:true });
    cWrap.addEventListener('touchend', e => {
      if (cTX === null) return;
      const dx = e.changedTouches[0].clientX - cTX;
      const dy = e.changedTouches[0].clientY - cTY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        goTo(dx < 0 ? cur+1 : cur-1); resetAp();
      }
      cTX = cTY = null;
    }, { passive:true });
  }

  /* Form — invio a amministrazione@matraenergy.it via Web3Forms */
  document.getElementById('contactForm').addEventListener('submit', async function(e){
    e.preventDefault();
    const nome     = document.getElementById('nome').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const servizio = document.getElementById('servizio').value;
    let ok = true;
    [{id:'nome',v:nome},{id:'telefono',v:telefono},{id:'servizio',v:servizio}].forEach(({id,v}) => {
      const el = document.getElementById(id);
      if(!v){ el.style.borderColor='var(--red)'; ok=false; el.addEventListener('input',()=>el.style.borderColor='',{once:true}); }
    });
    if(!ok) return;
    const btn = document.getElementById('submitBtn');
    btn.disabled = true; btn.textContent = 'Invio in corso…';
    document.getElementById('formErr').style.display = 'none';
    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method:'POST', body: new FormData(this) });
      const data = await res.json();
      if(data.success){ this.style.display='none'; document.getElementById('formOk').classList.add('show'); }
      else { throw new Error(data.message); }
    } catch(err) {
      document.getElementById('formErr').style.display = 'block';
      btn.disabled = false;
      btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Invia Richiesta';
    }
  });

  /* Scroll top */
  /* ===== LIGHTBOX / ALBUM ===== */
  const albums = {
    fotovoltaico:   { label:'Fotovoltaico',          photos:['assets/imagine impianto fotovoltaico.png'] },
    termoidraulica: { label:'Termoidraulica',        photos:[
      'assets/immagine pdc full electric 1 (principale.jpg',
      'assets/immagine pdc full electric 2.jpg',
      'assets/immagine pdc full electric 3.jpg',
      'assets/immagine solare termico.jpg'
    ] },
    climatizzazione:{ label:'Climatizzazione',       photos:[
      'assets/immagine climatizzatore 1 (principale).jpg',
      'assets/immagine climatizzatore 2.jpg'
    ] },
    industriale:    { label:'Impianto Industriale',  photos:[
      'assets/imagine impianto industriale.png',
      'assets/immagine industriale 2.jpg'
    ] },
    scaldabagno:    { label:'Scaldabagno',           photos:[
      'assets/immagine scaldabagno 1 (principale).jpg',
      'assets/immagine scaldabagno 2.jpg',
      'assets/immagine scaldabagno 3.jpg'
    ] },
    ibridi:         { label:'Sistemi Ibridi',        photos:[
      'assets/immagine caldaia ibrida 1 principale).jpg',
      'assets/immagine caldaia ibrida 2.jpg',
      'assets/immagine caldaia ibrida 3.jpg',
      'assets/immagine caldaia ibrida 4.jpg',
      'assets/Immagine caldaia ibrida 5.jpg'
    ] }
  };

  let lbAlbum = null, lbIdx = 0;
  const lb      = document.getElementById('lb');
  const lbCont  = document.getElementById('lbContent');
  const lbCat   = document.getElementById('lbCat');
  const lbCtr   = document.getElementById('lbCounter');
  const lbDots  = document.getElementById('lbDots');
  const lbPrev  = document.getElementById('lbPrev');
  const lbNext  = document.getElementById('lbNext');

  function lbRender() {
    const al = albums[lbAlbum];
    lbCat.textContent = al.label;
    lbCont.innerHTML = '';
    if (al.photos.length === 0) {
      lbCont.innerHTML = `<div class="lb-ph-box"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg><strong style="color:rgba(255,255,255,.7)">Foto in arrivo</strong><span>Stiamo raccogliendo le immagini per questa categoria.</span></div>`;
      lbCtr.textContent = '';
      lbDots.innerHTML = '';
      lbPrev.disabled = true; lbNext.disabled = true;
      return;
    }
    const img = document.createElement('img');
    img.className = 'lb-img';
    img.src = al.photos[lbIdx];
    img.alt = al.label + ' — foto ' + (lbIdx+1);
    lbCont.appendChild(img);
    lbCtr.textContent = (al.photos.length > 1) ? (lbIdx+1) + ' / ' + al.photos.length : '';
    lbPrev.disabled = lbIdx === 0;
    lbNext.disabled = lbIdx === al.photos.length - 1;
    lbDots.innerHTML = al.photos.map((_, i) =>
      `<button class="lb-dot${i===lbIdx?' active':''}" data-i="${i}" aria-label="Foto ${i+1}"></button>`
    ).join('');
    lbDots.querySelectorAll('.lb-dot').forEach(d =>
      d.addEventListener('click', () => { lbIdx = +d.dataset.i; lbRender(); })
    );
  }

  function lbOpen(album) {
    lbAlbum = album; lbIdx = 0;
    lbRender();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    history.pushState({ lb:true }, '');
  }

  function lbClose(fromPop) {
    if (!lb.classList.contains('open')) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
    if (!fromPop && history.state && history.state.lb) {
      history.back();
    }
  }

  document.querySelectorAll('.p-item[data-album]').forEach(el =>
    el.addEventListener('click', () => lbOpen(el.dataset.album))
  );
  document.getElementById('lbClose').addEventListener('click', () => lbClose());
  lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });
  lbPrev.addEventListener('click', () => { lbIdx--; lbRender(); });
  lbNext.addEventListener('click', () => { lbIdx++; lbRender(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowLeft'  && !lbPrev.disabled) { lbIdx--; lbRender(); }
    if (e.key === 'ArrowRight' && !lbNext.disabled) { lbIdx++; lbRender(); }
  });

  window.addEventListener('popstate', () => {
    if (lb.classList.contains('open')) lbClose(true);
  });

  /* Swipe touch lightbox */
  let lbTouchX = null, lbTouchY = null;
  lbCont.addEventListener('touchstart', e => {
    if (!lb.classList.contains('open')) return;
    lbTouchX = e.touches[0].clientX;
    lbTouchY = e.touches[0].clientY;
  }, {passive:true});
  lbCont.addEventListener('touchend', e => {
    if (lbTouchX === null) return;
    const dx = e.changedTouches[0].clientX - lbTouchX;
    const dy = e.changedTouches[0].clientY - lbTouchY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0 && !lbNext.disabled) { lbIdx++; lbRender(); }
      else if (dx > 0 && !lbPrev.disabled) { lbIdx--; lbRender(); }
    }
    lbTouchX = lbTouchY = null;
  }, {passive:true});

  /* ===== PRIVACY / COOKIE MODAL ===== */
  const privacyContent = {
    privacy: `
      <h4>Titolare del Trattamento</h4>
      <p><strong>Matra Energy SRL</strong><br>
      Sede legale e operativa: Strada Capograssa 544, 04100 Latina (LT)<br>
      P.IVA: 03356610596 — REA: LT-334019<br>
      Email: <a href="mailto:amministrazione@matraenergy.it">amministrazione@matraenergy.it</a><br>
      Tel: <a href="tel:+393247790045">+39 324 779 0045</a></p>

      <h4>Dati Raccolti</h4>
      <p>Raccogliamo esclusivamente i dati che l'utente fornisce volontariamente tramite il modulo di contatto/preventivo:</p>
      <ul>
        <li>Nome e cognome</li>
        <li>Numero di telefono</li>
        <li>Indirizzo email (opzionale)</li>
        <li>Tipo di servizio richiesto</li>
        <li>Descrizione della richiesta</li>
      </ul>
      <p>Non raccogliamo dati sensibili né dati di navigazione per finalità di profilazione.</p>

      <h4>Finalità del Trattamento</h4>
      <p>I dati raccolti sono utilizzati esclusivamente per:</p>
      <ul>
        <li>Rispondere alle richieste di preventivo e contatto</li>
        <li>Fornire il servizio richiesto dall'utente</li>
        <li>Adempiere ad obblighi di legge</li>
      </ul>

      <h4>Base Giuridica</h4>
      <p>Il trattamento è fondato sul consenso dell'interessato (art. 6, par. 1, lett. a GDPR) e sull'esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR).</p>

      <h4>Conservazione</h4>
      <p>I dati sono conservati per il tempo strettamente necessario a gestire la richiesta e, successivamente, per i soli adempimenti fiscali e contabili previsti dalla legge (max 10 anni).</p>

      <h4>Condivisione con Terze Parti</h4>
      <p>I dati non vengono venduti né ceduti a terzi. Vengono trasmessi esclusivamente al servizio di invio email <strong>Web3Forms</strong> (web3forms.com) come responsabile del trattamento, al solo scopo di recapitare la richiesta al nostro indirizzo email. Web3Forms è conforme al GDPR.</p>

      <h4>Diritti dell'Interessato</h4>
      <p>L'utente ha diritto di: accedere ai propri dati, rettificarli, cancellarli, limitarne il trattamento, opporsi al trattamento e portarli ad altro titolare. Per esercitare i propri diritti scrivere a: <a href="mailto:amministrazione@matraenergy.it">amministrazione@matraenergy.it</a></p>
      <p>Ha inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">www.garanteprivacy.it</a>).</p>

      <h4>Aggiornamento</h4>
      <p>Informativa aggiornata al <strong>maggio 2026</strong>. Ci riserviamo di aggiornare questo documento in caso di modifiche normative o operative.</p>
    `,
    cookie: `
      <h4>Cosa sono i Cookie</h4>
      <p>I cookie sono piccoli file di testo salvati sul dispositivo dell'utente durante la navigazione. Permettono al sito di ricordare le preferenze e migliorare l'esperienza di utilizzo.</p>

      <h4>Cookie Utilizzati da Questo Sito</h4>
      <p>Il sito <strong>matraenergy.it</strong> utilizza esclusivamente cookie tecnici strettamente necessari al funzionamento delle pagine. Non utilizziamo cookie di profilazione, cookie di tracciamento commerciale né cookie di terze parti a fini pubblicitari.</p>

      <p><strong>Cookie tecnici presenti:</strong></p>
      <ul>
        <li><strong>Sessione browser</strong> — necessari per il corretto funzionamento del modulo di contatto. Non raccolgono dati personali identificativi.</li>
      </ul>

      <h4>Cookie di Terze Parti</h4>
      <p>Il sito carica risorse da server esterni:</p>
      <ul>
        <li><strong>Google Fonts</strong> (fonts.googleapis.com) — carica i caratteri tipografici. Potrebbe registrare l'indirizzo IP a fini tecnici. Privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></li>
        <li><strong>Web3Forms</strong> (api.web3forms.com) — elabora i dati del modulo di contatto. Non installa cookie. Privacy policy: <a href="https://web3forms.com/privacy" target="_blank" rel="noopener">web3forms.com/privacy</a></li>
      </ul>

      <h4>Come Disabilitare i Cookie</h4>
      <p>È possibile disabilitare i cookie direttamente dalle impostazioni del proprio browser. Disabilitare i cookie tecnici potrebbe compromettere alcune funzionalità del sito.</p>
      <ul>
        <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie</li>
        <li>Firefox: Impostazioni → Privacy e sicurezza</li>
        <li>Safari: Preferenze → Privacy</li>
        <li>Edge: Impostazioni → Cookie e autorizzazioni sito</li>
      </ul>

      <h4>Aggiornamento</h4>
      <p>Cookie policy aggiornata al <strong>maggio 2026</strong>.</p>
    `
  };

  let currentTab = 'privacy';
  function openPrivacy(tab) {
    currentTab = tab || 'privacy';
    renderPrivacy();
    document.getElementById('prvOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closePrivacy() {
    document.getElementById('prvOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  function switchTab(tab) {
    currentTab = tab;
    renderPrivacy();
  }
  function renderPrivacy() {
    document.getElementById('tabPrivacy').classList.toggle('active', currentTab==='privacy');
    document.getElementById('tabCookie').classList.toggle('active', currentTab==='cookie');
    document.getElementById('prvTitle').textContent = currentTab==='privacy' ? 'Informativa Privacy' : 'Cookie Policy';
    document.getElementById('prvBody').innerHTML = privacyContent[currentTab];
  }
  document.getElementById('prvOverlay').addEventListener('click', e => { if(e.target===document.getElementById('prvOverlay')) closePrivacy(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape' && document.getElementById('prvOverlay').classList.contains('open')) closePrivacy(); });

  const goTop = document.getElementById('goTop');
  window.addEventListener('scroll', () => goTop.classList.toggle('show', window.scrollY > 480), { passive: true });
  goTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  (function(){
    var gt = document.getElementById('goTop');
    if(!gt) return;
    var darks = document.querySelectorAll('.stats, .reviews, .footer');
    function goTopTheme(){
      var y = window.innerHeight - 40, onDark = false;
      darks.forEach(function(s){
        var r = s.getBoundingClientRect();
        if(r.top <= y && r.bottom >= y) onDark = true;
      });
      gt.classList.toggle('on-dark', onDark);
    }
    window.addEventListener('scroll', goTopTheme, {passive:true});
    window.addEventListener('resize', goTopTheme);
    goTopTheme();
  })();

  /* Active nav */
  const secs = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const id = e.target.id;
        navAs.forEach(a => { a.style.color = a.getAttribute('href')==='#'+id ? 'var(--accent)' : ''; });
      }
    });
  }, { threshold: 0.35, rootMargin: '-72px 0px 0px 0px' }).observe || secs.forEach(s => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          navAs.forEach(a => { a.style.color = a.getAttribute('href')==='#'+e.target.id ? 'var(--accent)' : ''; });
        }
      });
    }, { threshold: 0.35, rootMargin: '-72px 0px 0px 0px' }).observe(s);
  });
  // Fix: usa un solo observer
  const navIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        navAs.forEach(a => { a.style.color = a.getAttribute('href')==='#'+e.target.id ? 'var(--accent)' : ''; });
      }
    });
  }, { threshold: 0.35, rootMargin: '-72px 0px 0px 0px' });
  secs.forEach(s => navIO.observe(s));

  /* Contatti — copia negli appunti (numero / email) */
  (function(){
    const btns = document.querySelectorAll('.ct-copybtn');
    if(!btns.length) return;
    btns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const val = btn.getAttribute('data-copy') || '';
        try {
          if(navigator.clipboard && navigator.clipboard.writeText){
            await navigator.clipboard.writeText(val);
          } else {
            const ta = document.createElement('textarea');
            ta.value = val; ta.style.position='fixed'; ta.style.opacity='0';
            document.body.appendChild(ta); ta.select();
            document.execCommand('copy'); document.body.removeChild(ta);
          }
          btn.classList.add('copied');
          clearTimeout(btn._copyT);
          btn._copyT = setTimeout(() => btn.classList.remove('copied'), 1600);
        } catch(e){ /* no-op */ }
      });
    });
  })();
