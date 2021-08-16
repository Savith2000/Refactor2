const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api","/api/*","/post"], //routes the proxy is looking for
    createProxyMiddleware({
      target: "http://localhost:3001", // proxy will serve data to target
    })
  );
};
