"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _account = _interopRequireDefault(require("../src/models/account.model"));

var _user = _interopRequireDefault(require("../src/models/user.model"));

var _transaction = _interopRequireDefault(require("../src/models/transaction.model"));

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var token, user, transactionID, transaction, accountnumber, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.body.token || req.headers.authorization || req.headers['x-access-token'];
            _context.prev = 1;

            if (!token) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return _user["default"].findUser('id', token.id);

          case 5:
            _context.t0 = _context.sent;
            _context.next = 9;
            break;

          case 8:
            _context.t0 = false;

          case 9:
            user = _context.t0;
            transactionID = req.params.transactionID;
            _context.next = 13;
            return _transaction["default"].findTransaction('id', transactionID);

          case 13:
            transaction = _context.sent;
            accountnumber = transaction[0].accountnumber;

            if (!(user[0].type === 'staff')) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", next());

          case 17:
            if (!(user[0].type === 'client')) {
              _context.next = 24;
              break;
            }

            _context.next = 20;
            return _account["default"].findAccount('accountnumber', accountnumber);

          case 20:
            result = _context.sent;

            if (!(result[0].userid === token.id)) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("return", next());

          case 23:
            return _context.abrupt("return", res.json({
              status: 401,
              message: 'Access denied can\'t access this account'
            }));

          case 24:
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t1 = _context["catch"](1);
            res.json({
              status: 500,
              message: "An error occured. ".concat(_context.t1)
            });

          case 29:
            return _context.abrupt("return", res.json({
              status: 401,
              message: 'Invalid User. Access denied'
            }));

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 26]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;