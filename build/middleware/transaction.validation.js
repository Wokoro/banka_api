"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _transaction = _interopRequireDefault(require("../src/models/transaction.model"));

/* eslint-disable prefer-destructuring */

/**
 * validates the transaction exits
 * @param {integer} transaction number
 * @returns {boolean} returns transaction number if present
 */
var transactionNumberValidation =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var transactionID, transaction;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            transactionID = req.params.transactionID;
            _context.prev = 1;
            _context.next = 4;
            return _transaction["default"].findTransaction('id', transactionID);

          case 4:
            transaction = _context.sent;

            if (!transaction) {
              _context.next = 8;
              break;
            }

            req.body.transaction = transaction[0];
            return _context.abrupt("return", next());

          case 8:
            return _context.abrupt("return", res.json({
              status: 400,
              message: 'Transaction does not exists'
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.json({
              status: 500,
              message: "An error occured. ".concat(_context.t0)
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function transactionNumberValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = transactionNumberValidation;
exports["default"] = _default;