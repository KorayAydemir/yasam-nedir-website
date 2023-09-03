start-dev-server:
	@echo "Starting dev server..."
	@babel ./src/server -d build/server -w

start-dev-client:
	@echo "Starting dev client..."
	@webpack --config ./webpack/webpack.dev.config.js/ --watch

build-server:
	@echo "Building server..."
	@babel ./src/server -d build/server

build-client:
	@echo "Building client..."
	@webpack --config ./webpack/webpack.prod.config.js/


