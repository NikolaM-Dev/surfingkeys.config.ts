export function getPageTitle(): string {
  const pageTitle = document.title || "";

  if (pageTitle.includes(" - YouTube")) {
    return pageTitle.replace(" - YouTube", "");
  }

  return pageTitle;
}

export function getPageURL(): string {
  return window.location.href;
}
