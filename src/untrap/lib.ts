export function toggleElement<T extends HTMLElement>(element: T): void {
  element.style.display === "none"
    ? (element.style.display = "block")
    : (element.style.display = "none");
}

export function toggleElements(payload: {
  selectors: string[];
  title: string;
}): void {
  const { selectors, title } = payload;

  selectors.forEach((selector) => {
    const element: HTMLElement | null = document.querySelector(selector);

    if (element) toggleElement(element);
  });

  api.Front.showBanner(`${title} UnTrap`);
}
