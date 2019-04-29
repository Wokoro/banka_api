"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable guard-for-in */

/* eslint-disable no-restricted-syntax */

/* eslint-disable no-unused-expressions */
var _default = function _default(res, req, next) {
  var obj = res.body;

  for (var prop in obj) {
    if (typeof obj[prop] === 'string') {
      obj[prop] = obj[prop].trim();
    }
  }

  next();
};

exports["default"] = _default;