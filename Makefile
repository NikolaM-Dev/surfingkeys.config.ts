.PHONY: all firefox

all:
	bun run build:watch

firefox:
	bun run build
	cat ./dist/surfingkeys.config.js | xsel -ib
