install:
	npm install

lint:
	npx stylelint ./src/css/*.css
	npx stylelint ./src/scss/**/*.scss
	npx htmlhint ./src/*.html

fix-lint:
	npx stylelint --fix ./src/css/*.css
	npx stylelint --fix ./src/scss/**/*.scss

deploy:
	npx surge ./src/

build:
	npx gulp build

server:
	npx gulp server
