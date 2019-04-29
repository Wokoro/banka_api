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
    var userEmailAddress, email, EMAIL_FIELD_REG, user1, user2;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userEmailAddress = req.params.userEmailAddress;
            email = req.body.token.email;
            EMAIL_FIELD_REG = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            _context.prev = 3;

            if (!EMAIL_FIELD_REG.test(userEmailAddress)) {
              _context.next = 21;
              break;
            }

            _context.next = 7;
            return _user["default"].findUser('email', userEmailAddress);

          case 7:
            user1 = _context.sent;
            _context.next = 10;
            return _user["default"].findUser('email', email);

          case 10:
            user2 = _context.sent;

            if (!(user2[0].type === 'staff')) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", next());

          case 13:
            if (!(userEmailAddress === email)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", next());

          case 15:
            if (user2[0]) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", res.json({
              status: 400,
              message: "".concat(email, " do not exist please signup")
            }));

          case 17:
            if (userEmailAddress === email) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", res.json({
              status: 400,
              message: 'Access restricted'
            }));

          case 19:
            if (user1[0]) {
              _context.next = 21;
              break;
            }

            return _context.abrupt("return", res.json({
              status: 400,
              message: "Resquested account ".concat(userEmailAddress, " does not exists")
            }));

          case 21:
            return _context.abrupt("return", res.json({
              status: 400,
              message: 'Invalid user email'
            }));

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](3);
            res.json({
              status: 500,
              message: "An error occured. ".concat(_context.t0)
            });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 24]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;