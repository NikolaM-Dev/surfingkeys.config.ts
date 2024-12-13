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
}
