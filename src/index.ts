api.unmap('<Ctrl-h>');
api.unmap('s', /track.toggl.com\/timer/);
api.mapkey('<Backspace>yl', '[Y]ank [L]ink', () => {
  const title = document.title;
  const href = window.location.href;
  const markdownLink = `[${title}](${href})`;

  api.Clipboard.write(markdownLink);
});

api.mapkey("<Ctrl-a>", "Increase speed", () => {
  const video = document.querySelector("video");

  if (!video) return;

  video.playbackRate = video.playbackRate + 0.1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

api.mapkey("<Ctrl-x>", "Decrement speed", () => {
  const video = document.querySelector("video");

  if (!video) return;

  video.playbackRate = video.playbackRate - 0.1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

api.mapkey("<Backspace>rs", "[R]eset [S]peed", () => {
  const video = document.querySelector("video");

  if (!video) return;

  video.playbackRate = 1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

api.mapkey("<Backspace>ps", "[P]referred [S]peed", () => {
  const video = document.querySelector("video");

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

function toggleElements(selectors: string[]): void {
  selectors.forEach((selector) => {
    const element: HTMLElement | null = document.querySelector(selector);

    if (element) toggleElement(element);
  });
}

api.mapkey(
  '<Backspace>ut',
  '[U]n[T]rap WhatsApp',
  () => {
    const SELECTORS: string[] = [
      '[aria-label="Status"]',
      '[aria-label="Channels"]',
      '[aria-label="Communities"]',
    ];

    toggleElements(SELECTORS);

      if (element) element.remove();
    });
  },
  {
    domain: /web.whatsapp.com/,
  },
);
