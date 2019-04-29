"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _account = _interopRequireDefault(require("../src/models/account.model"));

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var accountNumber, amount, result, account;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            accountNumber = req.params.accountNumber;
            amount = req.body.amount;
            _context.next = 4;
            return _account["default"].findAccount('accountnumber', accountNumber);

          case 4:
            result = _context.sent;
            account = result[0];

            if (!(Number(account.balance) < amount)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              status: 400,
              message: 'Insufficient fund'
            }));

          case 8:
            req.body.account = account;
            return _context.abrupt("return", next());

          case 10:
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