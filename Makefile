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
brain-calc:
	node bin/brain-calc.js 
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js