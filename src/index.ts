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

api.mapkey('<Backspace>ps', '[P]refered [S]peed', () => {
  const video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = 1.6;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});
