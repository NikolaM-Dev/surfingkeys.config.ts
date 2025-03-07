import { toggleElements } from "./lib";

const DOMAIN: RegExp = /web.whatsapp.com/;

export function whatsAppUntrap(): void {
  api.mapkey(
    "<Backspace>ut",
    "[U]n[T]rap WhatsApp",
    () => {
      toggleElements({
        selectors: [
          '[aria-label="Status"]',
          '[aria-label="Channels"]',
          '[aria-label="Communities"]',
        ],
        title: "WhatsApp",
      });
    },
    {
      domain: DOMAIN,
    },
  );
}
