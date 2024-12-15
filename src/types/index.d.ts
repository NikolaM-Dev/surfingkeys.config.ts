/**
 * https://github.com/brookhong/Surfingkeys/blob/master/docs/API.md
 * https://github.com/brookhong/Surfingkeys/blob/master/docs/command_message_flow.md
 */
declare namespace api {
  interface IMapKeyOptions {
    /**
     * A Javascript regex pattern to identify the domains that this mapping
     * works, for example, `/github\.com/i` says that this mapping works
     * only for github.com.
     */
    domain: string;

    /**
     * Whether this action can be repeated by dot command.
     */
    repeatIgnore?: boolean;
  }

  /**
   * Create a shortcut in normal mode to execute your own action.
   *
   * Example:
   * ```js
   *  mapkey(
   *    '<Space>',
   *    'pause/resume on youtube',
   *    function () {
   *      var btn =
   *        document.querySelector('button.ytp-ad-overlay-close-button') ||
   *        document.querySelector('button.ytp-ad-skip-button') ||
   *        document.querySelector('ytd-watch-flexy button.ytp-play-button');
   *      btn.click();
   *    },
   *    { domain: /youtube.com/i },
   *  );
   *  ```
   */
  function mapkey(
    /**
     * The key sequence for the shortcut.
     */
    keys: string,

    /**
     * A help message to describe the action, which will displayed in help
     * opened by `?`.
     */
    annotation: string,

    /**
     * A Javascript function to be bound. If the function needs an argument,
     * next pressed key will be fed to the function.
     */
    jscode: () => void,

    options: IMapKeyOptions,
  ): void;

  /**
   * Create a shortcut in visual mode to execute your own action.
   *
   * @see `mapkey` to view a example.
   */
  function vmapkey(
    /**
     * The key sequence for the shortcut.
     */
    keys: string,

    /**
     * A help message to describe the action, which will displayed in help
     * opened by `?`.
     */
    annotation: string,

    /**
     * A Javascript function to be bound. If the function needs an argument,
     * next pressed key will be fed to the function.
     */
    jscode: () => void,

    options: IMapKeyOptions,
  ): void;

  /**
   * Create a shortcut in insert mode to execute your own action.
   *
   * @see `mapkey` to view a example.
   */
  function imapkey(
    /**
     * The key sequence for the shortcut.
     */
    keys: string,

    /**
     * A help message to describe the action, which will displayed in help
     * opened by `?`.
     */
    annotation: string,

    /**
     * A Javascript function to be bound. If the function needs an argument,
     * next pressed key will be fed to the function.
     */
    jscode: () => void,

    options: IMapKeyOptions,
  ): void;

  /**
   * Map a key sequence to another in normal mode.
   *
   * Example:
   * ```js
   * map(';d', '<Ctrl-Alt-d>');
   * ```
   */
  function map(
    /**
     * A key sequence to replace
     */
    newKeystroke: string,

    /**
     * A key sequence to be replaced
     */
    oldKeystroke: string,

    /**
     * A Javascript regex pattern to identify the domains that this mapping
     * works.
     */
    domain?: string,

    /**
     * Use it instead of the annotation from old_keystroke if provided.
     */
    newAnnotation?: string,
  ): void;

  /**
   * Map a key sequence to another in omnibar.
   *
   * @see `map` to view a example.
   */
  function cmap(
    /**
     * A key sequence to replace
     */
    newKeystroke: string,

    /**
     * A key sequence to be replaced
     */
    oldKeystroke: string,

    /**
     * A Javascript regex pattern to identify the domains that this mapping
     * works.
     */
    domain?: string,

    /**
     * Use it instead of the annotation from old_keystroke if provided.
     */
    newAnnotation?: string,
  ): void;

  /**
   * Map a key sequence to another in visual mode.
   *
   * @see `map` to view a example.
   */
  function vmap(
    /**
     * A key sequence to replace
     */
    newKeystroke: string,

    /**
     * A key sequence to be replaced
     */
    oldKeystroke: string,

    /**
     * A Javascript regex pattern to identify the domains that this mapping
     * works.
     */
    domain?: string,

    /**
     * Use it instead of the annotation from old_keystroke if provided.
     */
    newAnnotation?: string,
  ): void;

  /**
   * Map a key sequence to another in insert mode.
   *
   * @see `map` to view a example.
   */
  function imap(
    /**
     * A key sequence to replace.
     */
    newKeystroke: string,

    /**
     * A key sequence to be replaced.
     */
    oldKeystroke: string,

    /**
     * A Javascript regex pattern to identify the domains that this mapping
     * works.
     */
    domain?: string,

    /**
     *  Use it instead of the annotation from old_keystroke if provided.
     */
    newAnnotation?: string,
  ): void;

  /**
   * Map a key sequence to another in lurk mode.
   *
   * @see `map` to view a example.
   */
  function lmap(
    /**
     * A key sequence to replace.
     */
    newKeystroke: string,

    /**
     * A key sequence to be replaced.
     */
    oldKeystroke: string,

    /**
     * A Javascript regex pattern to identify the domains that this mapping
     * works.
     */
    domain?: string,

    /**
     *  Use it instead of the annotation from old_keystroke if provided.
     */
    newAnnotation?: string,
  ): void;

  /**
   * Unmap a key sequence in visual mode.
   *
   * Example:
   * ```js
   * unmap("<<", /youtube.com/);
   * ```
   */
  function unmap(
    /**
     * A key sequence to be removed.
     */
    keystroke: string,

    /**
     * A Javascript regex pattern to identify the domains that this mapping will
     * be removed.
     */
    domain?: string,
  ): void;

  /**
   * Unmap a key sequence in insert mode.
   *
   * @see `unmap` to view a example.
   */
  function iunmap(
    /**
     * A key sequence to be removed.
     */
    keystroke: string,

    /**
     * A Javascript regex pattern to identify the domains that this mapping will
     * be removed.
     */
    domain?: string,
  ): void;

  /**
   * Unmap a key sequence in visual mode.
   *
   * @see `unmap` to view a example.
   */
  function vunmap(
    /**
     * A key sequence to be removed.
     */
    keystroke: string,

    /**
     * A Javascript regex pattern to identify the domains that this mapping will
     * be removed.
     */
    domain?: string,
  ): void;

  /**
   * Unmap all keybindings except those specified.
   *
   * Example:
   * ```js
   * unmapAllExcept(['E','R','T'], /google.com|twitter.com/);
   * ```
   */
  function unmapAllExcept(
    /**
     * Array the keybindings you want to keep.
     */
    keystrokes: string[],

    /**
     * A Javascript regex pattern to identify the domains that this mapping will
     * be removed.
     */
    domain?: string,
  ): void;

  type ICallbackToParseSuggestion = (
    reponse: {
      /**
       * Holds the text of the response.
       */
      text: string;
    },

    request: {
      /**
       * Text of the query and `url` which is the formatted URL for the request
       */
      query?: string;
    },
  ) => void;

  interface IAddSearchAliasOptions {
    /**
     * URL for favicon for this search engine.
     */
    favicon_url: string;

    /**
     * If `true` disable creating key mappings for this search engine.
     */
    skipMaps?: boolean;
  }

  /**
   * Add a search engine alias into Omnibar.
   *
   * Example:
   * ```js
   * addSearchAlias(
   *   'd',
   *   'duckduckgo',
   *   'https://duckduckgo.com/?q=',
   *   's',
   *   'https://duckduckgo.com/ac/?q=',
   *   function (response) {
   *     var res = JSON.parse(response.text);
   *     return res.map(function (r) {
   *       return r.phrase;
   *     });
   *   },
   * );
   * ```
   */
  function addSearchAlias(
    /**
     * The key to trigger this search engine, one or several chars, used as
     * search alias, when you input the string and press space in omnibar, the
     * search engine will be triggered.
     */
    alias: string,

    /**
     * A caption to be placed in front of the omnibar.
     */
    prompt: string,

    /**
     * The URL of the search engine, for example,
     * `https://www.s.com/search.html?query=`, if there are extra parameters for
     * the search engine, you can use it as
     * `https://www.s.com/search.html?query={0}&type=cs` or
     * `https://www.s.com/search.html?type=cs&query=`(since order of URL
     * parameters usually does not matter).
     */
    searchUrl: string,

    /**
     * `<search_leader_key><alias>` in normal mode will search selected text with
     * this search engine directly without opening the omnibar, for example
     * `sd`. (optional, default `s`).
     */
    searchLeaderKey?: string | 's',

    /**
     * The URL to fetch suggestions in omnibar when this search engine is
     * triggered.
     */
    suggestionUrl?: string,

    /**
     * A function to parse the response from `suggestionUrl` and return a list
     * of strings as suggestions.
     */
    callbackToParseSuggestion?: ICallbackToParseSuggestion,

    /**
     * `<search_leader_key><only_this_site_key><alias>` in normal mode will
     * search selected text within current site with this search engine directly
     * without opening the omnibar, for example `sod`. (optional, default `o`).
     */
    onlyThisSiteKey?: string | 'o',

    options?: IAddSearchAliasOptions,
  ): void;

  /**
   * Remove a search engine alias from Omnibar.
   *
   * Example:
   * ```js
   * removeSearchAlias('d');
   * ```
   */
  function removeSearchAlias(
    /**
     * The alias of the search engine to be removed.
     */
    alias: string,

    /**
     * `<search_leader_key><alias>` in normal mode will search selected text
     * with this search engine directly without opening the omnibar, for example
     * `sd`. (optional, default `s`).
     */
    searchLeaderKey?: string | 's',

    /**
     * `<search_leader_key><only_this_site_key><alias>` in normal mode will
     * search selected text within current site with this search engine directly
     * without opening the omnibar, for example `sod`. (optional, default `o`)
     */
    onlyThisSiteKey?: string | 'o',
  ): void;

  /**
   * Search selected with.
   *
   * Example:
   * ```typescript
   * searchSelectedWith('https://translate.google.com/?hl=en#auto/en/');
   * ```
   */
  function searchSelectedWith(
    /**
     * A search engine's search URL
     */
    se: string,

    /**
     * Whether to search only within current site, need support from the
     * provided search engine. (optional, default `false`)
     */
    onlyThisSite?: boolean,

    /**
     * Whether to search in interactive mode, in case that you need some small
     * modification on the selected content. (optional, default `false`)
     */
    interactive?: boolean,

    /**
     * Only used with interactive mode, in such case the url from `se` is
     * ignored, SurfingKeys will construct search URL from the alias
     * registered by `addSearchAlias`. (optional, default `''`)
     */
    alias?: string,
  ): void;

declare namespace Clipboard {
  /**
   * Read from clipboard
   *
   * Example:
   * ```typescript
   * Clipboard.read(function(response) {
   *   console.log(response.data);
   * });
   * ```
   */
  function read(
    /**
     * A callback function to handle text read from clipboard.
     */
    onReady: () => void,
  ): void;

  /**
   * Write text to clipboard.
   *
   * Example:
   * ```typescript
   * Clipboard.write(window.location.href);
   * ```
   */
  function write(
    /**
     * Text to be written to clipboard.
     */
    text: string,
  ): void;
}

declare namespace Hints {
  /**
   * Use digits as hint label, with it set you could type text to filter
   * links, this API is to replace original setting like
   * `Hints.numericHints = true;`.
   *
   * Example:
   * ```typescript
   * Hints.setNumeric();
   * ```
   */
  function setNumeric(): void;

  /**
   * Set characters for generating hints, this API is to replace original
   * setting like `Hints.characters = "asdgqwertzxcvb";`.
   *
   * Example:
   * ```typescript
   * Hints.setCharacters("asdgqwertzxcvb");
   * ```
   */
  function setCharacters(
    /**
     * The characters for generating hints.
     */
    characters: string,
  ): void;

  /**
   * The default `onHintKey` implementation.
   *
   * @see `Hints.create`
   *
   * Example:
   * ```typescript
   * mapkey('q', 'click on images', function() {
   *     Hints.create("div.media_box img", Hints.dispatchMouseClick);
   * }, {domain: /weibo.com/i});
   * ```
   */
  function dispatchMouseClick(
    /**
     * The element for which the pressed hint is targeted.
     */
    element: HTMLElement,
  ): void;

  /**
   * Click element or create hints for elements to click.
   *
   * Example:
   * ```typescript
   * mapkey('zz', 'Hide replies', function() {
   *     Hints.click(document.querySelectorAll("#less-replies:not([hidden])"), true);
   * });
   * ```
   */
  function click(
    /**
     * Click on it if there is only one in the array or `force` parameter is
     * `true`, otherwise hints will be generated for them. If `links` is a
     * `string`, it will be used as css selector for `getClickableElements`.
     */
    links: string | HTMLElement[],

    /**
     * Force to click the first input element whether there are more than one
     * elements in `links` or not. (optional, default `false`)
     */
    force: boolean,
  ): void;
  }

  declare namespace Hints {
    /**
     * Use digits as hint label, with it set you could type text to filter
     * links, this API is to replace original setting like
     * `Hints.numericHints = true;`.
     *
     * Example:
     * ```typescript
     * Hints.setNumeric();
     * ```
     */
    function setNumeric(): void;

    /**
     * Set characters for generating hints, this API is to replace original
     * setting like `Hints.characters = "asdgqwertzxcvb";`.
     *
     * Example:
     * ```typescript
     * Hints.setCharacters("asdgqwertzxcvb");
     * ```
     */
    function setCharacters(
      /**
       * The characters for generating hints.
       */
      characters: string,
    ): void;

    /**
     * The default `onHintKey` implementation.
     *
     * @see `Hints.create`
     *
     * Example:
     * ```typescript
     * mapkey('q', 'click on images', function() {
     *     Hints.create("div.media_box img", Hints.dispatchMouseClick);
     * }, {domain: /weibo.com/i});
     * ```
     */
    function dispatchMouseClick(
      /**
       * The element for which the pressed hint is targeted.
       */
      element: HTMLElement,
    ): void;

    /**
     * Click element or create hints for elements to click.
     *
     * Example:
     * ```typescript
     * mapkey('zz', 'Hide replies', function() {
     *     Hints.click(document.querySelectorAll("#less-replies:not([hidden])"), true);
     * });
     * ```
     */
    function click(
      /**
       * Click on it if there is only one in the array or `force` parameter is
       * `true`, otherwise hints will be generated for them. If `links` is a
       * `string`, it will be used as css selector for `getClickableElements`.
       */
      links: string | HTMLElement[],

      /**
       * Force to click the first input element whether there are more than one
       * elements in `links` or not. (optional, default `false`)
       */
      force: boolean,
    ): void;
}
