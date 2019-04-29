"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAccountCreationFields = exports.accountNumberValidation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _account = _interopRequireDefault(require("../src/models/account.model"));

/* eslint-disable padded-blocks */

/* eslint-disable no-unused-expressions */

/**
 * Checks if opening balance value is greater than 0
 * @param {integer} opening balance
 * @returns {boolean} returns true or false
 */
var openingBalanceValidation = function openingBalanceValidation(balance) {
  return balance > 1000;
};

var checkType = function checkType(value) {
  return value === 'savings' || value === 'current';
};

var checkStatus = function checkStatus(value) {
  return value === 'domant' || value === 'draft' || value === 'active';
};
/**
 * validates the opening values
 * @param {integer} opening balance
 * @returns {boolean} returns true or false
 */


var validateAccountCreationFields = function validateAccountCreationFields(req, res, next) {
  var errorMessages = [];
  var _req$body = req.body,
      openingBalance = _req$body.openingBalance,
      status = _req$body.status,
      type = _req$body.type;
  var openingBalanceStat = openingBalanceValidation(openingBalance);
  var typeStat = checkType(type);
  var statStat = checkStatus(status);

  if (!openingBalanceStat) {
    errorMessages.push('Opening amount should be greater than 1000');
  }

  if (!typeStat) {
    errorMessages.push('Account type can either be savings or current');
  }

  if (!statStat) {
    errorMessages.push('Account stat can either be domant, active or draft');
  }

  if (errorMessages.length === 0) {
    return next();
  }

  return res.status(400).json({
    status: 400,
    message: errorMessages
  });
};
/**
 * validates the account number to be valid
 * @param {integer} acount number
 * @returns {boolean} returns account number if present
 */


exports.validateAccountCreationFields = validateAccountCreationFields;

var accountNumberValidation =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var accountNumber, accountNumberCheck1, accountNumberCheck2, result, account;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // esliint-disable-next-line prefer-destructuring
            // eslint-disable-next-line prefer-template
            accountNumber = '' + req.params.accountNumber;
            _context.prev = 1;
            accountNumberCheck1 = accountNumber.length === 10;
            accountNumberCheck2 = Number(accountNumber);

            if (!(!accountNumberCheck2 || !accountNumberCheck1)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              status: 400,
              message: 'Invalid account number. A valid account number should be an integer value and be 10 digits'
            }));

          case 6:
            _context.next = 8;
            return _account["default"].findAccount('accountnumber', accountNumber);

          case 8:
            result = _context.sent;
            account = result[0];

            if (!account) {
              _context.next = 13;
              break;
            }

            req.body.balance = account.balance;
            return _context.abrupt("return", next());

          case 13:
            return _context.abrupt("return", res.status(400).json({
              status: 404,
              message: 'Bank account do not exists'
            }));

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).json({
              status: 500,
              message: "Server error. ".concat(_context.t0)
            }));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 16]]);
  }));

  return function accountNumberValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.accountNumberValidation = accountNumberValidation;