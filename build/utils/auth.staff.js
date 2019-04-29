"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../src/models/user.model"));

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var token, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.body.token || req.headers.authorization || req.headers['x-access-token'];
            _context.next = 3;
            return _user["default"].findUser('id', token.id);

          case 3:
            user = _context.sent;

            if (!(typeof user[0] !== 'undefined')) {
              _context.next = 8;
              break;
            }

            if (!(user[0].type === 'staff')) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", next());

          case 7:
            return _context.abrupt("return", res.status(401).json({
              status: 401,
              message: 'User not a staff. Access denied'
            }));

          case 8:
            return _context.abrupt("return", res.status(400).json({
              status: 404,
              message: 'Staff account do not exits please signup'
            }));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;