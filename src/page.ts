export function getPageTitle(): string {
  return document.title || "";
}

export function getPageURL(): string {
  return window.location.href;
}
