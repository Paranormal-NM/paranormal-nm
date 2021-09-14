
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		'/apis',
		createProxyMiddleware({
			logLevel: 'debug',
			target: "http://137.184.8.97:8080",
			changeOrigin: true,
		})
	);
};


// 137.184.8.97 Mike