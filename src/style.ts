function get_plain_css(styles: string): string {
  return styles.split('\n').join();
}

export const hintsCSS = get_plain_css(`
  background-color: #232136;
  background: #232136;
  border: 1px solid #56526e;
  color: #e0def4 !important;
  font-family: 'Maple Mono NF', 'JetBrains Mono NL', 'Cascadia Code', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`);
