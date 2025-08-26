publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

.PHONY: install
install:
	npm ci

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

