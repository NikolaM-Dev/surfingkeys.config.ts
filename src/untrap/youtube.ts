import { toggleElements } from "./lib";

const DOMAIN: RegExp = /www.youtube.com/;

export function youTubeUnTrap() {
  api.mapkey(
    "<Backspace>ut",
    "[U]n[T]rap WhatsApp",
    () => {
      toggleElements({
        selectors: ["#secondary-inner > #related"],
        title: "YouTube",
      });
    },
    {
      domain: DOMAIN,
    },
  );
}
