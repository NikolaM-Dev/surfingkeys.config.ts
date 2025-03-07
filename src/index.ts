import { getPageTitle, getPageURL } from "./page";
import { whatsAppUntrap } from "./untrap/whatsapp";
import { youTubeUnTrap } from "./untrap/youtube";
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

// Untrap
whatsAppUntrap();
youTubeUnTrap();
