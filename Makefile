start-dev-server:
	@echo "Starting dev server..."
	@nodemon -w ./src -e ts,tsx,cjs --exec "webpack --config ./webpack/webpack.dev.config.mjs && node ./build/server/yasam.nedir.back-end.app.js"
