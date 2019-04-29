"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("./swagger.config"));

var _db = require("./database/db");

var _user = _interopRequireDefault(require("./src/routers/user.routes"));

var _account = _interopRequireDefault(require("./src/routers/account.routes"));

var _transaction = _interopRequireDefault(require("./src/routers/transaction.routes"));

/* eslint-disable import/first */

/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable consistent-return */

/* eslint-disable no-unused-expressions */
var app = (0, _express["default"])();
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
(0, _db.initDBPool)(); // Headers to allow CORS

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin', 'X-Request-With', 'Content-Type', 'Accept', 'Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
    return res.status(200).json({});
  }

  next();
}); // Routes defination

app.use('/api/v1/auth', _user["default"]);
app.use('/api/v1/user', _user["default"]);
app.use('/api/v1/transactions', _transaction["default"]);
app.use('/api/v1/', _account["default"]); // caching unsuported urls

app.use(function (req, res) {
  res.json({
    status: 404,
    message: 'Page not found'
  });
}); // caching unsuported urls

app.use(function (err, req, res, next) {
  if (err instanceof URIError) {
    var error = {};
    error.status = err.statusCode || 400;
    error.message = "Bad url, failed to decode url :".concat(req.url);
    return res.send({
      error: error
    });
  }

  res.json({
    status: 400,
    message: "".concat(err.constructor.name, ": error has occured")
  });
});
var server = app.listen(process.env.PORT, function () {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
var _default = server;
exports["default"] = _default;