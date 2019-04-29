"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _transaction = _interopRequireDefault(require("../models/transaction.model"));

var _default = {
  /**
  * Function to get all transactions
  * @param {string} req
  * @param {string} res
  * @returns {object} returns an array of all transactions
  */
  getAllTransactions: function () {
    var _getAllTransactions = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res) {
      var transactions;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _transaction["default"].getAllTransactions();

            case 3:
              transactions = _context.sent;

              if (!(transactions.length > 0)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", res.json({
                status: 200,
                transactions: transactions
              }));

            case 6:
              return _context.abrupt("return", res.status(400).json({
                status: 400,
                message: 'No transation available'
              }));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(500).json({
                status: 500,
                message: "An error occored. ".concat(_context.t0)
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    function getAllTransactions(_x, _x2) {
      return _getAllTransactions.apply(this, arguments);
    }

    return getAllTransactions;
  }(),

  /**
  * Function to debit an account
  * @param {string} req
  * @param {string} res
  * @returns {object} returns the transaction details if succesful
  */
  debitAccount: function () {
    var _debitAccount = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res) {
      var _req$body, amount, balance, token, accountNumber, newBalance, transactionDetails;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, amount = _req$body.amount, balance = _req$body.balance, token = _req$body.token;
              accountNumber = req.params.accountNumber;
              newBalance = Number(balance) - Number(amount);
              _context2.prev = 3;
              _context2.next = 6;
              return _transaction["default"].createTransaction('debit', amount, token.id, balance, newBalance, accountNumber);

            case 6:
              transactionDetails = _context2.sent;
              res.status(200).json({
                message: 'Debit operation successful',
                status: 200,
                data: transactionDetails
              });
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](3);
              res.status(500).json({
                status: 500,
                message: "An error occured. ".concat(_context2.t0)
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 10]]);
    }));

    function debitAccount(_x3, _x4) {
      return _debitAccount.apply(this, arguments);
    }

    return debitAccount;
  }(),

  /**
  * Function to get a specific transaction
  * @param {string} req
  * @param {string} res
  * @returns {object} returns the transaction details if succesful
  */
  getTransaction: function () {
    var _getTransaction = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(req, res) {
      var transactionID, result, transaction;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              transactionID = req.params.transactionID;
              _context3.prev = 1;
              _context3.next = 4;
              return _transaction["default"].findTransaction('id', transactionID);

            case 4:
              result = _context3.sent;
              transaction = result[0];

              if (!(result.length > 0)) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt("return", res.json({
                status: 200,
                transaction: transaction
              }));

            case 8:
              return _context3.abrupt("return", res.json({
                status: 400,
                message: 'Transaction does not exist'
              }));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);
              return _context3.abrupt("return", res.json({
                status: 500,
                message: "An error occured. ".concat(_context3.t0)
              }));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 11]]);
    }));

    function getTransaction(_x5, _x6) {
      return _getTransaction.apply(this, arguments);
    }

    return getTransaction;
  }(),

  /**
  * Function credit a user account
  * @param {string} req
  * @param {string} res
  * @returns {object} returns transaction details
  */
  creditAccount: function () {
    var _creditAccount = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(req, res) {
      var _req$body2, amount, balance, token, accountNumber, newBalance, transactionDetails;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _req$body2 = req.body, amount = _req$body2.amount, balance = _req$body2.balance, token = _req$body2.token;
              accountNumber = req.params.accountNumber;
              newBalance = Number(balance) + Number.parseInt(amount, 10);
              _context4.prev = 3;
              _context4.next = 6;
              return _transaction["default"].createTransaction('credit', amount, token.id, balance, newBalance, accountNumber);

            case 6:
              transactionDetails = _context4.sent;
              res.status(200).json({
                message: 'Credit operation successful',
                status: 200,
                data: transactionDetails
              });
              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](3);
              res.status(500).json({
                status: 500,
                message: "An error occured. ".concat(_context4.t0)
              });

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 10]]);
    }));

    function creditAccount(_x7, _x8) {
      return _creditAccount.apply(this, arguments);
    }

    return creditAccount;
  }()
};
exports["default"] = _default;