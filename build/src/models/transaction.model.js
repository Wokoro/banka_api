"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = require("../../database/db");

/* eslint-disable class-methods-use-this */

/* eslint-disable radix */

/* eslint-disable no-new */

/* eslint-disable no-useless-computed-key */

/* eslint-disable no-plusplus */

/* eslint-disable no-underscore-dangle */
var Transaction =
/*#__PURE__*/
function () {
  function Transaction() {
    (0, _classCallCheck2["default"])(this, Transaction);
  }

  (0, _createClass2["default"])(Transaction, null, [{
    key: "createTransaction",

    /**
    * Create transaction
    * @param {String} type
    * @param {Integer} amount
    * @param {Integer} cashierID
    * @param {Integer} oldBalance
    * @param {Integer} newBalance
    * @param {Integer} accountNumber
    * @returns {Transaction} return the details of trasaction
    */
    value: function () {
      var _createTransaction = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(type, amount, cashierID, oldBalance, newBalance, accountNumber) {
        var createdOn, query1, query2, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                createdOn = new Date();
                query1 = "INSERT INTO transactions(type, amount, cashier, oldbalance, newbalance, createdon, accountnumber) \n    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *";
                query2 = 'UPDATE accounts SET balance = $1 WHERE accountnumber=$2';

                _db.client.query(query2, [newBalance, accountNumber]);

                _context.next = 6;
                return _db.client.query(query1, [type, amount, cashierID, oldBalance, newBalance, createdOn, accountNumber]);

              case 6:
                result = _context.sent;
                return _context.abrupt("return", result.rows[0]);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createTransaction(_x, _x2, _x3, _x4, _x5, _x6) {
        return _createTransaction.apply(this, arguments);
      }

      return createTransaction;
    }()
    /**
    * Find a given transaction in the datastore
    * @param {Integer} id
    * @returns {Transaction} return the found transaction
    */

  }, {
    key: "findTransaction",
    value: function () {
      var _findTransaction = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(column, value) {
        var query, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "SELECT * FROM transactions WHERE  ".concat(column, " = $1");
                _context2.next = 3;
                return _db.client.query(query, [value]);

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result.rows);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function findTransaction(_x7, _x8) {
        return _findTransaction.apply(this, arguments);
      }

      return findTransaction;
    }()
    /**
    * Save account to datastore
    * @param {Account} account
    * @returns {Transactions} returns all transactions
    */

  }, {
    key: "getAllTransactions",
    value: function () {
      var _getAllTransactions = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var query, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = 'SELECT * FROM transactions';
                _context3.next = 3;
                return _db.client.query(query);

              case 3:
                result = _context3.sent;
                return _context3.abrupt("return", result.rows);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAllTransactions() {
        return _getAllTransactions.apply(this, arguments);
      }

      return getAllTransactions;
    }()
  }]);
  return Transaction;
}();

var _default = Transaction;
exports["default"] = _default;