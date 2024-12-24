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
    domain: RegExp;

    /**
     * Whether this action can be repeated by dot command.
     */
    repeatIgnore?: boolean;
  }

  /**
   * Create a shortcut in normal mode to execute your own action.
   *
   * Example:
   * ```typescript
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
    typescriptcode: () => void,

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
    typescriptcode: () => void,

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
   * ```typescript
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
   * ```typescript
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
    domain?: RegExp,
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
   * ```typescript
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
   * ```typescript
   * addSearchAlias(
   *   'd',
   *   'duckduckgo',
   *   'https://duckduckgo.com/?q=',
   *   's',
   *   'https://duckduckgo.com/ac/?q=',
   *   function (response) {
   *     var res = typescriptON.parse(response.text);
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
   * ```typescript
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
     * without opening the omnibar, for example `sod`. (optional, default `o`).
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
     * A search engine's search URL.
     */
    se: string,

    /**
     * Whether to search only within current site, need support from the
     * provided search engine. (optional, default `false`).
     */
    onlyThisSite?: boolean,

    /**
     * Whether to search in interactive mode, in case that you need some small
     * modification on the selected content. (optional, default `false`).
     */
    interactive?: boolean,

    /**
     * Only used with interactive mode, in such case the url from `se` is
     * ignored, SurfingKeys will construct search URL from the alias
     * registered by `addSearchAlias`. (optional, default `''`).
     */
    alias?: string,
  ): void;
}

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

  interface ICreateAttrs {
    /**
     * Whether to activate the new tab when a link is opened.
     */
    active?: boolean;

    /**
     *  Whether to open a link in a new tab.
     */
    tabbed?: boolean;

    /**
     * Whether to stay in hints mode after one hint is triggered.
     */
    multipleHits?: boolean;
  }

  /**
   * Create hints for elements to click.
   *
   * @returns {boolean} whether any hint is created for target elements.
   *
   * @see `Hints.dispatchMouseClick`
   *
   * Example:
   * ```typescript
   * mapkey('yA', '#7Copy a link URL to the clipboard', function() {
   *     Hints.create('*[href]', function(element) {
   *         Clipboard.write('[' + element.innerText + '](' + element.href + ')');
   *     });
   * });
   * ```
   */
  function create(
    /**
     * If `links` is a `string`, it will be used as css selector.
     */
    cssSelector: string | HTMLElement[],

    /**
     * A callback function on hint keys pressed.
     */
    onHintKey: () => void,

    attrs: ICreateAttrs | null,
  ): boolean;

  /**
   * Set styles for hints.
   *
   * Example:
   * ```typescript
   * Hints.style('border: solid 3px #552a48; color:#efe1eb; background: none; background-color: #552a48;');
   * Hints.style("div{border: solid 3px #707070; color:#efe1eb; background: none; background-color: #707070;} div.begin{color:red;}", "text");
   * ```
   */
  function style(
    /**
     * Styles for hints.
     */
    css: string,

    /**
     * Sub mode for hints, use text for hints mode to enter visual mode.
     * (optional, default `null`)
     */
    mode: string | null,
  ): void;
}

declare namespace Normal {
  /**
   * Enter PassThrough mode.
   */
  function passThrough(
    /**
     * How many milliseconds to linger in PassThrough mode, to ignore it will
     stay in PassThrough mode until an `escape` key is pressed.
     */
    timeout?: number,
  ): void;

  /**
   * Scroll within current target.
   */
  function scroll(
    type:
      | 'down'
      | 'up'
      | 'pageDown'
      | 'fullPageDown'
      | 'pageUp'
      | 'fullPageUp'
      | 'top'
      | 'bottom'
      | 'left'
      | 'right'
      | 'leftmost'
      | 'rightmost'
      | 'byRatio',
  ): void;

  /**
   * Feed keys into Normal mode.
   */
  function feedkeys(
    /**
     * The keys to be fed into Normal mode.
     */
    keys: string,
  );

  /**
   * Jump to a vim-like mark.
   */
  function jumpVIMark(
    /**
     * A vim-like mark.
     */
    mark: string,
  ): void;
}

declare namespace Visual {
  /**
   * Set styles for visual mode.
   *
   * Example:
   * ```typescript
   * Visual.style('marks', 'background-color: #89a1e2;');
   * Visual.style('cursor', 'background-color: #9065b7;');
   * ```
   */
  function style(
    /**
     * Element in visual mode, which can be marks and cursor.
     */
    element: string,

    /**
     * CSS style for the element.
     */
    style: string,
  ): void;
}

declare namespace Front {
  interface IOpenOmnibarOptions {
    /**
     * The sub type for the omnibar
     */
    type:
      | 'Bookmarks'
      | 'AddBookmark'
      | 'History'
      | 'URLs'
      | 'RecentlyClosed'
      | 'TabURLs'
      | 'Tabs'
      | 'Windows'
      | 'VIMarks'
      | 'SearchEngine'
      | 'Commands'
      | 'OmniQuery'
      | 'UserURLs';

    /**
     * TODO: Find out what this is for.
     */
    extra: any[];
  }

  /**
   * Open the omnibar.
   *
   * Example:
   * ```typescript
   * mapkey('ou', '#8Open AWS services', function() {
   *     var services = Array.from(top.document.querySelectorAll('#awsc-services-container li[data-service-href]')).map(function(li) {
   *         return {
   *             title: li.querySelector("span.service-label").textContent,
   *             url: li.getAttribute('data-service-href')
   *         };
   *     });
   *     if (services.length === 0) {
   *         services = Array.from(top.document.querySelectorAll('div[data-testid="awsc-nav-service-list"] li[data-testid]>a')).map(function(a) {
   *             return {
   *                 title: a.innerText,
   *                 url: a.href
   *             };
   *         });
   *     }
   *     Front.openOmnibar({type: "UserURLs", extra: services});
   * }, {domain: /console.amazonaws|console.aws.amazon.com/i});
   * ```
   */
  function openOmnibar(args: IOpenOmnibarOptions): void;

  interface IRegisterInlineQueryOptions {
    /**
     * The dictionary service url or a function to return the dictionary service
     * url.
     */
    url: string | (() => string);

    /**
     * A function to parse result from dictionary service and return a HTML
     * string to render explanation
     */
    parseResult: () => string;

    /**
     * In case your dictionary service needs authentication
     */
    headers?: Record<string, string>;
  }

  /**
   * Register an inline query.
   *
   * @see https://github.com/brookhong/Surfingkeys/wiki/Register-inline-query
   */
  function registerInlineQuery(args: IRegisterInlineQueryOptions): void;

  /**
   * Show message in banner.
   *
   * Example:
   * ```typescript
   * Front.showBanner(window.location.href);
   * ```
   */
  function showBanner(
    /**
     * The message to be displayed in banner.
     */
    message: string,

    /**
     * Milliseconds after which the banner will disappear. (optional, default
     * `1600`)
     */
    timeout?: number,
  ): void;

  /**
   * Show message in popup.
   */
  function showPopup(
    /**
     * The message to be displayed in popup.
     *
     * Example:
     * ```typescript
     * Front.showPopup(window.location.href);
     * ```
     */
    message: string,
  ): void;
}

/**
 * Get current browser name.
 */
function getBrowserName(): 'Chrome' | 'Firefox' | 'Safari';

/**
 * Check whether an element is in viewport.
 */
function isElementPartiallyInViewport(
  /**
   * The element to be checked.
   */
  elment: HTMLElement,

  /**
   * Whether to ignore size of the element, otherwise the element must be with
   * size 4*4. (optional, default false)
   */
  ignoreSize?: boolean,
): boolean;

/**
 * Get all clickable elements. SurfingKeys has its own logic to identify
 * clickable elements, such as a `HTMLAnchorElement` or elements with cursor as
 * pointer. This function provides two parameters to identify those clickable
 * elements that SurfingKeys failed to identify.
 *
 * @returns {HTMLElement[]} all clickable elements.
 *
 * Example:
 * ```typescript
 * const clickableElements = getClickableElements("[rel=link]", /click this/);
 * ```
 */
function getClickableElements(
  /**
   * Axtra css selector of those clickable elements.
   */
  cssSelector: string,

  /**
   * A regular expression that matches text of the clickable elements.
   */
  pattern: RegExp,
): HTMLElement[];

/**
 * Open links in new tabs.
 *
 * Example:
 * ```typescript
 * mapkey("<Space>", "pause/resume on youtube", function() {
 *     var btn = document.querySelector("button.ytp-ad-overlay-close-button") || document.querySelector("button.ytp-ad-skip-button") || document.querySelector('ytd-watch-flexy button.ytp-play-button');
 *     btn.click();
 * }, {domain: /youtube.com/i});
 * ```
 */
function tabOpenLink(
  /**
   * Links to be opened, the links should be split by `\n` if there are more
   * than one.
   */
  links: string,

  /**
   * How many tabs will be opened simultaneously, the rest will be queued and
   opened later whenever a tab is closed. (optional, default `5`)
   */
  simultaneousness: number,
): void;

/**
 * Insert javascript code into main world context.
 */
function insertJS(
  /**
   * A javascript function to be executed in main world context, or an URL of js
   * file.
   */
  code: string | (() => void),

  /**
   * A callback function after requested code executed.
   */
  onLoad: () => void,
): void;

/**
 * Map the key sequence `lhs` to `rhs` for mode `ctx` in ACE editor.
 *
 * Example:
 * ```typescript
 * aceVimMap('J', ':bn', 'normal');
 * ```
 */
function aceVimMap(
  /**
   * A key sequence to replace.
   */
  lhs: string,

  /**
   * A key sequence to be replaced.
   */
  rhs: string,

  /**
   * A mode such as `insert`, `normal`.
   */
  ctx: string,
): void;

/**
 * Add map key in ACE editor.
 *
 * Example:
 * ```typescript
 * addVimMapKey(
 *     {
 *         keys: 'n',
 *         type: 'motion',
 *         motion: 'moveByCharacters',
 *         motionArgs: {
 *             forward: false
 *         }
 *     },
 *
 *     {
 *         keys: 'e',
 *         type: 'motion',
 *         motion: 'moveByLines',
 *         motionArgs: {
 *             forward: true,
 *             linewise: true
 *         }
 *     }
 * );
 * ```
 */
function addVimMapKey(
  /**
   * Multiple objects to define key map in ACE, see more from
   * [ace/keyboard/vim.js](https://github.com/ajaxorg/ace/blob/ec450c03b51aba3724cf90bb133708078d1f3de6/lib/ace/keyboard/vim.js#L927-L1099)
   */
  objects: Rercod<string, any>,
): void;

/**
 * Call background `action` with `args`, the `callback` will be executed with
 * response from background.
 *
 * Example:
 * ```typescript
 * RUNTIME('getTabs', {queryInfo: {currentWindow: true}}, response => {
 *   console.log(response);
 * });
 * ```
 */
function RUNTIME(
  /**
   * A background action to be called.
   */
  action: string,

  /**
   * A object the parameters to be passed to the background action.
   */
  args: Record<string, any>,
  /**
   * A function to be executed with the result from the background action.
   */
  callback: () => void,
): void;
