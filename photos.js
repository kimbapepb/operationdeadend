const phonePhotos = (() => {
  const school = ['Jinwon HS.jpeg', 'SMA Jinwon'];
  const folder = 'assets/library/';
  const isImage = name => typeof name === 'string' && /^[^/\\]+\.(avif|gif|jpe?g|png|webp)$/i.test(name);

  async function library() {
    let names = [];
    try {
      const manifest = await fetch(folder + 'photos.json');
      if (!manifest.ok) throw new Error('Photo index unavailable');
      names = await manifest.json();
    } catch {
      // A plain local HTTP server can expose a directory listing instead of a built index.
      try {
        const listing = await fetch(folder);
        if (listing.ok) {
          const doc = new DOMParser().parseFromString(await listing.text(), 'text/html');
          names = [...doc.querySelectorAll('a[href]')].flatMap(link => {
            const href = link.getAttribute('href');
            if (/[/?:#]/.test(href)) return [];
            try { return [decodeURIComponent(href)]; } catch { return []; }
          });
        }
      } catch {}
    }
    if (!Array.isArray(names)) return [];
    return [...new Set(names.filter(isImage))]
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map(name => [folder + encodeURIComponent(name), name.replace(/\.[^.]+$/, '')]);
  }

  function mount(root, pictures, index, close) {
    const image = root.querySelector('.photo-stage img');
    const rail = root.querySelector('.photo-filmstrip');
    const info = root.querySelector('.photo-info');
    const menu = root.querySelector('[data-photo-options]');
    const download = root.querySelector('[data-photo-save]');
    let touchStart;
    let selected = index;

    function select(next) {
      selected = Math.max(0, Math.min(next, pictures.length - 1));
      const [source, title] = pictures[selected];
      image.alt = title;
      image.src = source;
      info.textContent = title;
      download.href = source;
      for (const [position, button] of Array.from(rail.children).entries()) {
        button.setAttribute('aria-current', String(position === selected));
      }
      const active = rail.children[selected];
      if (active) rail.scrollLeft = active.offsetLeft - (rail.clientWidth - active.offsetWidth) / 2;
    }

    if (pictures.length > 1) {
      for (const [position, [source, title]] of pictures.entries()) {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('aria-label', title);
        const thumb = document.createElement('img');
        thumb.alt = '';
        thumb.src = source;
        button.append(thumb);
        button.onclick = () => select(position);
        rail.append(button);
      }
    }
    root.querySelector('[data-photo-close]').onclick = close;
    menu.onclick = () => {
      const panel = root.querySelector('.photo-options');
      panel.hidden = !panel.hidden;
      menu.setAttribute('aria-expanded', String(!panel.hidden));
    };
    root.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      select(selected + (event.key === 'ArrowRight' ? 1 : -1));
    });
    image.addEventListener('touchstart', event => { touchStart = event.touches[0].clientX; }, { passive: true });
    image.addEventListener('touchend', event => {
      const distance = event.changedTouches[0].clientX - touchStart;
      if (Math.abs(distance) > 40) select(selected + (distance < 0 ? 1 : -1));
    }, { passive: true });
    select(index);
  }

  return { school, library, mount };
})();
