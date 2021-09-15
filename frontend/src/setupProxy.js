

	const { createProxyMiddleware } = require('http-proxy-middleware');

	module.exports = function(app) {
		app.use(
			'/apis',
			createProxyMiddleware({
				logLevel: 'debug',
<<<<<<< HEAD
				target: "http://144.126.211.151:8080",
=======
				target: "http://137.184.8.97:8080",
>>>>>>> ddea1ba2081aa0f6b5e7e9220f788f01a9d54272
				changeOrigin: true,
			})
		);
	};

	// http://137.184.8.97:8080" mike