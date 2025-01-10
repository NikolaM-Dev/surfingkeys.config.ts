console.log('Hello via Bun!');
api.mapkey('<Ctrl-a>', 'Increase speed', () => {
  let video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = video.playbackRate + 0.1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

api.mapkey('<Ctrl-x>', 'Decrement speed', () => {
  let video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = video.playbackRate - 0.1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

api.mapkey('<Backspace>rs', '[R]eset [S]peed', () => {
  let video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = 1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

api.mapkey('<Backspace>ps', '[P]referred [S]peed', () => {
  const video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = 1.6;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

api.mapkey(
  '<Backspace>ut',
  '[U]n[T]rap WhatsApp',
  () => {
    const elementsToRemove: string[] = [
      '[aria-label="Status"]',
      '[aria-label="Channels"]',
      '[aria-label="Communities"]',
    ];

    elementsToRemove.forEach((selector) => {
      const element = document.querySelector(selector);

      if (element) element.remove();
    });
  },
  {
    domain: /web.whatsapp.com/,
  },
);
