default: firefox

# Build in watch mode
build_watch:
    bun run build:watch

# Build and copy the firefox config to the clipboard
firefox:
    bun run build
    cat ./dist/surfingkeys.config.js | xsel -ib
