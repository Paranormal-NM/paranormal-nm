

	const { createProxyMiddleware } = require('http-proxy-middleware');

	module.exports = function(app) {
		app.use(
			'/apis',
			createProxyMiddleware({
				logLevel: 'debug',

				target: "http://144.126.211.151:8080",

				changeOrigin: true,
			})
		);
	};

	// http://137.184.8.97:8080" mike