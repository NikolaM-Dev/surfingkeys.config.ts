api.unmap('<Ctrl-h>');
api.unmap('s', /track.toggl.com\/timer/);
api.mapkey('<Backspace>yl', '[Y]ank [L]ink', () => {
  const title = document.title;
  const href = window.location.href;
  const markdownLink = `[${title}](${href})`;

  api.Clipboard.write(markdownLink);
});

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

// [U]n[T]rap

function toggleElement<T extends HTMLElement>(element: T): void {
  element.style.display === 'none'
    ? (element.style.display = 'block')
    : (element.style.display = 'none');
}
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
