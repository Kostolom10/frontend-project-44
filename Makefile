brain-even:
	node bin/brain-even.js
publish:
	npm publish --dry-run
install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .