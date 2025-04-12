import { getPageTitle, getPageURL } from "./page";
import { whatsAppUntrap } from "./untrap/whatsapp";
import { youTubeUnTrap } from "./untrap/youtube";

// TODO: Review
settings.theme = "";

// TODO: Review
// api.unmap("x");

// Don't active surfingkeys in this domains
settings.blocklistPattern =
  /(trello|ticktick|excalidraw|calendar\.google|docs\.google).com/i;

// Preserve history keymap
api.unmap("<Ctrl-h>");

// Preserve downloads keymap
api.unmap("<Ctrl-j>");

// Use default s `keymap in track.toggl.com/timer` Toggl
api.unmap("s", /track.toggl.com\/timer/);

// I don't want multipliers
api.unmap("0");
api.unmap("1");
api.unmap("2");
api.unmap("3");
api.unmap("4");
api.unmap("5");
api.unmap("6");
api.unmap("7");
api.unmap("8");
api.unmap("9");

api.mapkey("<Backspace>yl", "[Y]ank [L]ink", () => {
  const title = getPageTitle();
  const href = getPageURL();
  const link = `[${title}](${href})`;

  api.Clipboard.write(link);
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

  video.playbackRate = 1.4;

  api.Front.showBanner(`${video.playbackRate.toFixed(1)}x`);
});

// Untrap
whatsAppUntrap();
youTubeUnTrap();
