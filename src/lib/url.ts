export function getBlocklistPatternRegExp(urls: string[]): RegExp {
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error('Input must be a non-empty array of URLs.');
  }

  // Escape special regex characters in a string
  const escapeRegExp = (payload: string): string => {
    return payload.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the matched substring
  };

  const domainPatterns = urls
    .map((url) => {
      try {
        const { hostname } = new URL(url);
        // Remove 'www.' prefix if it exists for broader matching
        const cleanedHostname = hostname.startsWith('www.')
          ? hostname.substring(4)
          : hostname;

        // Escape the cleaned hostname for regex
        const escapedHostname = escapeRegExp(cleanedHostname);

        // This part tries to make the regex more flexible for subdomains.
        // E.g., for google.com, it will match anything.google.com,
        // but for docs.google.com, it will specifically match docs.google.com.
        // If you always want to match subdomains for *any* URL,
        // you could simplify this.
        const parts = escapedHostname.split('.');
        if (parts.length > 2) {
          // If it has multiple subdomains (e.g., docs.google.com),
          // we'll match it exactly.
          return `(?:^|\\.)?${escapedHostname}`;
        } else {
          // If it's just domain.com, allow any subdomain or no subdomain
          return `(?:^|\\.?.*\\.)?${escapedHostname}`;
        }
      } catch (e) {
        console.warn(`Invalid URL provided: ${url}. Skipping this URL.`);
        return null;
      }
    })
    .filter(Boolean); // Remove null values from invalid URLs

  if (domainPatterns.length === 0) {
    return new RegExp('a^', 'i'); // Return a regex that matches nothing if no valid URLs
  }

  // Combine the patterns with OR
  const regexString = domainPatterns.join('|');

  // Create a RegExp object with case-insensitive flag
  // It matches if the URL contains any of the domains
  return new RegExp(regexString, 'i');
}
