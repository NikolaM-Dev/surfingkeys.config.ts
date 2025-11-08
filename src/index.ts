import { getBlocklistPatternRegExp } from './lib';
import { getPageTitle, getPageURL } from './page';
import { hintsCSS } from './style';
import { rosePineTeme } from './themes';
import { whatsAppUntrap } from './untrap/whatsapp';
import { youTubeUnTrap } from './untrap/youtube';

api.Hints.style(hintsCSS);
api.Hints.style(hintsCSS, 'text');

settings.theme = rosePineTeme;
settings.tabsThreshold = 0; // Always search tabs using omnibar

// Don't active surfingkeys in this domains
settings.blocklistPattern = getBlocklistPatternRegExp([
  'https://app.todoist.com',
  'https://calendar.google.com',
  'https://docs.google.com',
  'https://excalidraw.com',
  'https://gemini.google.com',
  'https://keep.google.com',
  'https://linear.app',
  'https://mail.google.com',
  'https://nikolam-dev.atlassian.net',
  'https://tasks.google.com',
  'https://ticktick.com',
  'https://track.toggl.com/timer',
  'https://trello.com',
]);

api.unmap('<Ctrl-6>'); // Preserve switch to sixth workspace
api.unmap('<Ctrl-h>'); // Preserve history keymap
api.unmap('<Ctrl-j>'); // Preserve downloads keymap

// I don't want to use multipliers
api.unmap('0');
api.unmap('1');
api.unmap('2');
api.unmap('3');
api.unmap('4');
api.unmap('5');
api.unmap('6');
api.unmap('7');
api.unmap('8');
api.unmap('9');

api.mapkey('<Backspace>yl', '[Y]ank [L]ink', () => {
  const title = getPageTitle();
  const href = getPageURL();
  const link = `[${title}](${href})`;

  api.Clipboard.write(link);
});

api.mapkey('<Ctrl-a>', 'Increase speed', () => {
  const video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = video.playbackRate + 0.1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

api.mapkey('<Ctrl-x>', 'Decrement speed', () => {
  const video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = video.playbackRate - 0.1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

function seekBy(video: HTMLVideoElement, seconds: number): void {
  if (!video.duration || isNaN(video.duration)) return;
  const target = Math.min(
    Math.max(0, video.currentTime + seconds),
    video.duration,
  );

  video.currentTime = target;
}

api.mapkey('<Alt-a>', 'Fast forward 5 seconds', () => {
  const video = document.querySelector('video');
  if (!video) return;

  seekBy(video, 5);
});

api.mapkey('<Alt-x>', 'Rewind 5 seconds', () => {
  const video = document.querySelector('video');
  if (!video) return;

  seekBy(video, -5);
});

api.mapkey('<Backspace>rs', '[R]eset [S]peed', () => {
  const video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = 1;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

api.mapkey('<Backspace>ps', '[P]referred [S]peed', () => {
  const video = document.querySelector('video');

  if (!video) return;

  video.playbackRate = 1.4;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

// Untrap
whatsAppUntrap();
youTubeUnTrap();
