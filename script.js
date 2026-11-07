/* CRIMES//CIBER — navegação, escala e gerenciamento de vídeos */
(() => {
  const stage = document.getElementById('stage');
  const slides = [...document.querySelectorAll('.slide')];
  const total = slides.length;
  const notesBox = document.getElementById('notes');
  let cur = 0;

  /* ---- escala do palco 1920x1080 ---- */
  function fit() {
    const s = Math.min(innerWidth / 1920, innerHeight / 1080);
    stage.style.transform = `scale(${s})`;
  }
  addEventListener('resize', fit); fit();

  /* ---- cabeçalho e rodapé gerados dinamicamente ---- */
  const coords = ["23°32'S 46°38'W", "48°51'N 2°21'E", "50°50'N 4°21'E", "59°19'N 18°04'E", "1°17'N 103°51'E"];
  slides.forEach((s, i) => {
    const sec = s.dataset.sec || '--';
    const title = s.dataset.title || '';
    s.insertAdjacentHTML('afterbegin', `
      <div class="chrome-top"><span class="sec">SEC.${sec}</span><span>${title}</span><span class="grow"></span>
        <span>LEGISLAÇÃO &amp; ÉTICA // SI</span><span class="cross"><i></i></span><span>${String(i + 1).padStart(2, '0')}/${total}</span></div>
      <div class="chrome-bot"><div class="barcode"></div><span>DIREITO PENAL × CRIMES CIBERNÉTICOS</span><span class="grow"></span>
        <span>${coords[i % coords.length]}</span><span>VOL.2026</span></div>`);
  });

  /* ---- controle de vídeos nos slides individuais ---- */
  function updateSlideVideo(slide, active) {
    const iframe = slide.querySelector('iframe[data-id]');
    if (!iframe) return;
    if (active) {
      if (!iframe.src || iframe.src === 'about:blank') {
        const id = iframe.dataset.id;
        iframe.src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
      }
    } else {
      if (iframe.src && iframe.src !== 'about:blank') {
        iframe.src = 'about:blank';
      }
    }
  }

  /* ---- navegação ---- */
  function show(n) {
    n = Math.max(0, Math.min(total - 1, n));
    if (n === cur && slides[cur].classList.contains('active')) return;

    // Desativa vídeo do slide anterior
    updateSlideVideo(slides[cur], false);
    slides[cur].classList.remove('active');

    cur = n;

    // Ativa vídeo do slide atual se houver
    slides[cur].classList.add('active');
    updateSlideVideo(slides[cur], true);

    document.getElementById('count').textContent = `${cur + 1} / ${total}`;
    document.getElementById('progress').style.width = `${((cur + 1) / total) * 100}%`;
    const note = slides[cur].querySelector('.notes');
    notesBox.innerHTML = note ? note.innerHTML : '';
    history.replaceState(null, '', '#' + (cur + 1));
  }

  const next = () => show(cur + 1);
  const prev = () => show(cur - 1);
  document.getElementById('next').onclick = next;
  document.getElementById('prev').onclick = prev;

  addEventListener('keydown', e => {
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); next(); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
    else if (e.key === 'Home') show(0);
    else if (e.key === 'End') show(total - 1);
    else if (e.key.toLowerCase() === 'f') { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); }
    else if (e.key.toLowerCase() === 'n') notesBox.classList.toggle('on');
  });

  // Gestos touch / swipe para tablets e telas sensíveis
  let touchStartX = 0;
  addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  addEventListener('touchend', e => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (diff < -50) next();
    else if (diff > 50) prev();
  }, { passive: true });

  const start = parseInt(location.hash.slice(1)) - 1;
  slides[0].classList.add('active');
  show(isNaN(start) ? 0 : start);
})();
