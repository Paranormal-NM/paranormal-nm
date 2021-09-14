
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