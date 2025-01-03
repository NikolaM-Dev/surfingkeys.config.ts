console.log('Hello via Bun!');
api.mapkey('<Ctrl-a>', 'Increase speed', () => {
  let video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = video.playbackRate + 0.1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});
