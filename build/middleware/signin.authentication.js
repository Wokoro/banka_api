"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../src/models/user.model"));

/* eslint-disable no-param-reassign */

/**
 * validaets users password and email
 * @param {string} req,
 * @param {string} res,
 * @param {string} next
 */
var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, email, password, result, user, userPassword;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.prev = 1;
            _context.next = 4;
            return _user["default"].findUser('email', email);

          case 4:
            result = _context.sent;
            user = result[0];
            userPassword = user ? _bcrypt["default"].compareSync(password, user.password) : false;

            if (user && userPassword) {
              delete user.password;
              req.user = user;
              next();
            } else {
              res.json({
                status: 400,
                message: 'User name or password incorrect'
              });
            }

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            res.json({
              status: 500,
              message: "Server error. ".concat(_context.t0)
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;