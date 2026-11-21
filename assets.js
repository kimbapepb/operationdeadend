const phoneAssets = (() => {
  const portraits = new Map([
    ['Ko Phi', 'Ko Phi.png'], ['Ko Phi (You)', 'Ko Phi.png'],
    ['Kijang', 'Kijang.png'], ['Kimpul', 'Kimpul.png'],
    ['Koko', 'Kokopedia.png'], ['Koko Pedia', 'Kokopedia.png'],
    ['Abeoji', 'Abeoji.png'], ['Koko Krunch', 'Abeoji.png'],
    ['My Love ❤️', 'Mylove.png'], ['Inspectors Lounge', 'Inspectorlounge.png']
  ]);
  const editions = new Map([
    [68, { thumbnail: 'News 1.png', page: 'Newspaper Gangnam 3.png' }],
    [348, { thumbnail: 'News 2.png', page: 'Newspaper Gangnam 4.png' }]
  ]);
  const assetPath = filename => 'assets/' + encodeURIComponent(filename);

  function portrait(name) {
    const filename = portraits.get(name);
    return filename
      ? '<img class="portrait-image" alt="" src="' + assetPath(filename) + '" onerror="this.remove()">'
      : '';
  }

  for (const [screen, filename] of [['lock', 'Lockscreen.png'], ['home', 'Homescreen.png']]) {
    const url = assetPath(filename);
    const wallpaper = new Image();
    wallpaper.onload = () => {
      const phone = document.getElementById('phone');
      phone.style.setProperty('--' + screen + '-wallpaper', 'url("' + url + '")');
      phone.classList.add('has-' + screen + '-wallpaper');
    };
    wallpaper.src = url;
  }

  return {
    portrait,
    edition(source) {
      const files = editions.get(source);
      return files && { thumbnail: assetPath(files.thumbnail), page: assetPath(files.page) };
    }
  };
})();
