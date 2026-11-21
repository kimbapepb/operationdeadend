const phoneMusic = (() => {
  const tracks = [
    { title: 'Listen and Learn', artist: 'Jay Price', file: 'Jay Price - Listen and Learn', cover: 3 },
    { title: 'Can You See In The Dark', artist: 'Crystal Places', file: 'Crystal Places - Can You See In The Dark', cover: 5 },
    { title: 'Hunt You Down', artist: 'Lee Richardson', file: 'Lee Richardson - Hunt You Down', cover: 4 },
    { title: 'Fade Into Forever', artist: 'Im Joongwon', file: 'Im Joongwon - Fade Into Forever', cover: 1 },
    { title: 'Simple As Us', artist: '4BOUT', file: '4BOUT - Simple As Us', cover: 1 },
    { title: 'First and Last', artist: '4BOUT', file: '4BOUT - First And Last', cover: 1 },
    { title: 'Wah Wah Wah', artist: 'Chihuahua', file: 'Wah Wah Wah - Chihuahua', cover: 2 }
  ];
  const path = filename => 'assets/' + encodeURIComponent(filename);
  const audio = new Audio();
  audio.preload = 'metadata';
  const durations = new Map();
  const icons = { play: '▶', pause: '❚❚', next: '⏭' };
  let active = 0, view, error = '', request = 0, probed = false;
  const formatTime = seconds => {
    const value = Math.floor(seconds);
    return Math.floor(value / 60) + ':' + String(value % 60).padStart(2, '0');
  };
  const cover = track => '<span class="music-cover cover-' + track.cover + '"><span aria-hidden="true">♫</span>'
    + '<img alt="" src="' + path('OST ' + track.cover + '.png') + '" onerror="this.remove()"></span>';

  function update() {
    if (!view?.isConnected) return;
    const playing = !audio.paused && !audio.ended;
    const play = view.querySelector('[data-music-play]');
    play.textContent = playing ? icons.pause : icons.play;
    play.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
    const progress = view.querySelector('.music-progress');
    const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    progress.disabled = !duration;
    progress.max = duration || 1;
    progress.value = audio.currentTime;
    progress.setAttribute('aria-valuetext', formatTime(audio.currentTime) + ' / ' + formatTime(duration));
    view.querySelector('.music-error').textContent = error;
    view.querySelectorAll('[data-duration]').forEach(node => {
      const duration = durations.get(Number(node.dataset.duration));
      node.textContent = duration ? formatTime(duration) : '';
    });
  }

  function updateTrack() {
    if (!view?.isConnected) return;
    const track = tracks[active];
    view.querySelector('.music-current').innerHTML = cover(track) + '<span><strong>' + track.title
      + '</strong><small>' + track.artist + '</small></span>';
    view.querySelectorAll('[data-track]').forEach(button => {
      if (Number(button.dataset.track) === active) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
    update();
  }

  async function playTrack() {
    const attempt = ++request;
    const track = tracks[active];
    error = '';
    if (!audio.getAttribute('src') || audio.error) audio.src = path(track.file + '.mp3');
    update();
    try {
      await audio.play();
    } catch (failure) {
      if (attempt !== request || failure.name === 'AbortError') return;
      error = failure.name === 'NotAllowedError' ? 'Tap Play to start the track.'
        : 'Could not play ' + track.file + '.mp3';
      update();
    }
  }

  function select(index) {
    active = index;
    error = '';
    audio.src = path(tracks[index].file + '.mp3');
    updateTrack();
    playTrack();
  }

  function next() {
    select((active + 1) % tracks.length);
  }

  function pause() {
    ++request;
    audio.pause();
    update();
  }

  audio.addEventListener('loadedmetadata', () => {
    if (Number.isFinite(audio.duration)) durations.set(active, audio.duration);
    update();
  });
  audio.addEventListener('ended', () => {
    if (active < tracks.length - 1) next();
    else update();
  });
  for (const event of ['timeupdate', 'play', 'pause', 'emptied']) audio.addEventListener(event, update);

  function probeDurations() {
    if (probed) return;
    probed = true;
    tracks.forEach((track, index) => {
      const probe = new Audio();
      probe.preload = 'metadata';
      function release() {
        probe.removeAttribute('src');
        probe.load();
      }
      probe.addEventListener('loadedmetadata', () => {
        if (Number.isFinite(probe.duration)) durations.set(index, probe.duration);
        update();
        release();
      }, { once: true });
      probe.addEventListener('error', release, { once: true });
      probe.src = path(track.file + '.mp3');
    });
  }

  function mount(container) {
    view = container;
    view.classList.add('music-app');
    const trackInfo = track => '<span class="music-title"><strong>' + track.title + '</strong>'
      + '<small>' + track.artist + '</small></span>';
    view.innerHTML = '<div class="music-library"><header class="music-header"><h2>Music</h2>'
      + '<span class="music-profile" aria-label="Ko Phi">KP' + phoneAssets.portrait('Ko Phi') + '</span></header>'
      + '<div class="music-shelf" aria-label="Soundtrack covers">' + tracks.map((track, i) =>
        '<button class="music-card" type="button" data-track="' + i + '">' + cover(track) + trackInfo(track) + '</button>').join('') + '</div>'
      + '<div class="music-list" aria-label="Soundtrack tracks">' + tracks.map((track, i) =>
        '<button class="music-row" type="button" data-track="' + i + '">' + cover(track)
        + trackInfo(track) + '<time data-duration="' + i + '"></time></button>').join('') + '</div></div>'
      + '<div class="music-bottom"><p class="music-error" role="status"></p>'
      + '<div class="music-player" aria-label="Now playing"><input class="music-progress" type="range" min="0" step="0.1" aria-label="Playback position">'
      + '<div class="music-current"></div><button type="button" data-music-play></button>'
      + '<button type="button" data-music-next aria-label="Next track">' + icons.next + '</button></div></div>';
    view.querySelectorAll('[data-track]').forEach(button => {
      button.onclick = () => select(Number(button.dataset.track));
    });
    view.querySelector('[data-music-play]').onclick = () => audio.paused ? playTrack() : pause();
    view.querySelector('[data-music-next]').onclick = next;
    view.querySelector('.music-progress').oninput = event => {
      audio.currentTime = Number(event.target.value);
    };
    updateTrack();
    probeDurations();
  }

  return { mount, pause };
})();
