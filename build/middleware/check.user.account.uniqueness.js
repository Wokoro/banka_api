"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../src/models/user.model"));

/* eslint-disable no-else-return */
var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var email, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = req.body.email;
            _context.prev = 1;
            _context.next = 4;
            return _user["default"].findUser('email', email);

          case 4:
            user = _context.sent;

            if (user[0]) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", next());

          case 7:
            return _context.abrupt("return", res.status(409).send({
              status: 409,
              message: "".concat(email, " already exist")
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.send({
              message: "An error occured: ".concat(_context.t0)
            }));

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