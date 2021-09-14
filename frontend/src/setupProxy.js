

	const { createProxyMiddleware } = require('http-proxy-middleware');

	module.exports = function(app) {
		app.use(
			'/apis',
			createProxyMiddleware({
				logLevel: 'debug',
				target: "http://143.244.181.107:8080",
				changeOrigin: true,
			})
		);
	};