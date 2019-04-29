"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = exports.isEmpty = exports.verifyToken = exports.passToken = exports.generateToken = exports.verifyPassword = exports.hashPassword = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var privateKey = process.env.PRI_KEY;

var generateToken = function generateToken(payload) {
  return _jsonwebtoken["default"].sign(payload, privateKey);
};

exports.generateToken = generateToken;

var verifyToken = function verifyToken(token) {
  return _jsonwebtoken["default"].verify(token, privateKey);
};

exports.verifyToken = verifyToken;

var passToken =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var rawToken, token, issureToken;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rawToken = req.headers.authorization || req.headers['x-access-token'] || req.body.token;
            token = rawToken.split(' ')[1];

            try {
              issureToken = verifyToken(token);

              if (issureToken) {
                req.body.token = issureToken;
                next();
              } else {
                res.status(400).json({
                  status: 400,
                  message: 'Invalid User token'
                });
              }
            } catch (error) {
              res.status(500).json({
                status: 500,
                message: "Server errror. ".concat(error)
              });
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function passToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Checks if both confirm password and password fields match
 * @param {string} values
 * @returns {boolean}
 *
 */


exports.passToken = passToken;

var isEmpty = function isEmpty(value) {
  return value === '' || typeof value === 'undefined';
};
/**
 * Trims a given input value
 * @param {string} values
 * @returns {String}
 *
 */


exports.isEmpty = isEmpty;

var trim = function trim(value) {
  return value.toString().trim();
};
/**
 * Hashes user password
 * @param {string} password
 * @returns {string}
 *
 */


exports.trim = trim;

var hashPassword = function hashPassword(password) {
  return _bcrypt["default"].hashSync(password, 10);
};
/**
 * Checks if both confirm password and password fields match
 * @param {string} values
 * @returns {boolean}
 *
 */


exports.hashPassword = hashPassword;

var verifyPassword = function verifyPassword(password, hashedPassword) {
  return verifyPassword(password, hashedPassword);
};

exports.verifyPassword = verifyPassword;