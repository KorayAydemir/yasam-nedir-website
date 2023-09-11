start-dev-server:
	@echo "Starting dev server..."
	@nodemon -w ./src --exec "webpack -- --config ./webpack/webpack.server.dev.config.mjs && node ./build/server/yasam.nedir.back-end.app.js"

start-dev-client:
	@echo "Starting dev client..."
	#@webpack --config ./webpack/webpack.dev.config.mjs/ --watch
