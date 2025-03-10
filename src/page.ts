export function getPageTitle(): string {
  const pageTitle = document.title || "";

  if (pageTitle.includes(" - YouTube")) {
    return pageTitle.replace(" - YouTube", "");
  }

  return pageTitle;
}

export function getPageURL(): string {
  const pageUrl = window.location.href;

  if (pageUrl.includes("youtube") && pageUrl.includes("&list")) {
    return pageUrl.split("&list")[0];
  }

  return pageUrl;
}
