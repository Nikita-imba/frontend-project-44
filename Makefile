publish:
	npm publish --dry-run
brain-games:
	node bin/brain-games.js
 .PHONY: install 
 install:
	npm ci
