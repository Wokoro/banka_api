"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(req, res, next) {
  var bearerHeader = req.headers.authorization || req.headers['x-access-token'] || req.body.token;

  if (bearerHeader) {
    var bearer = bearerHeader.split(' ');
    var bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.json({
      status: 403,
      message: 'Access denied login required'
    });
  }
};

exports["default"] = _default;