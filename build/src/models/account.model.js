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

/* eslint-disable no-use-before-define */

/* eslint-disable radix */

/* eslint-disable no-plusplus */
var Account =
/*#__PURE__*/
function () {
  function Account() {
    (0, _classCallCheck2["default"])(this, Account);
  }

  (0, _createClass2["default"])(Account, null, [{
    key: "debitAccount",

    /**
    * Debit an account
    * @param {string} account
    * @returns {boolen} return new amount or false if balance is low
    */
    value: function () {
      var _debitAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(amount) {
        var accountNumber, account, balance, debitAmt, query, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                accountNumber = account.accountNumber;
                _context.next = 3;
                return Account.findAccount('accountnumber', accountNumber);

              case 3:
                account = _context.sent;
                balance = account.balance;
                debitAmt = Number(amount);
                balance -= debitAmt;
                query = 'UPDATE accounts SET accountbalance = $1 WHERE accountnumber = $2';
                _context.next = 10;
                return _db.client.query(query, [balance, accountNumber]);

              case 10:
                result = _context.sent;
                return _context.abrupt("return", result.rows[0]);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function debitAccount(_x) {
        return _debitAccount.apply(this, arguments);
      }

      return debitAccount;
    }()
    /**
    * Create an account
    * @param {string} account number
    * @returns {boolen} return new amount or false if balance is low
    */

  }, {
    key: "createAccount",
    value: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(ownerID, type, status, balance) {
        var accountNumber, createdOn, query, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                accountNumber = Account.genAccountNumber();
                createdOn = new Date();
                query = "INSERT INTO accounts(accountnumber, createdon, status, userid, type, balance) \n    values($1, $2, $3, $4, $5, $6) RETURNING accountnumber";
                _context2.next = 5;
                return _db.client.query(query, [accountNumber, createdOn, status, ownerID, type, balance]);

              case 5:
                result = _context2.sent;
                return _context2.abrupt("return", result.rows[0]);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createAccount(_x2, _x3, _x4, _x5) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
    /**
    * credit an account
    * @param {string} req
    * @returns {Integer} returns account balance
    */

  }, {
    key: "creditAccount",
    value: function () {
      var _creditAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(amount) {
        var accountNumber, account, balance, debitAmt, query, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                accountNumber = account.accountNumber;
                _context3.next = 3;
                return Account.findAccount('accountnumber', accountNumber);

              case 3:
                account = _context3.sent;
                balance = account.balance;
                debitAmt = Number(amount);
                balance += debitAmt;
                query = 'UPDATE accounts SET accountbalance = $1 WHERE accountnumber = $2';
                _context3.next = 10;
                return _db.client.query(query, [balance, accountNumber]);

              case 10:
                result = _context3.sent;
                return _context3.abrupt("return", result.rows[0]);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function creditAccount(_x6) {
        return _creditAccount.apply(this, arguments);
      }

      return creditAccount;
    }()
    /**
    * Changes account status
    * @returns {string} returns account status
    */

  }, {
    key: "changeStatus",
    value: function () {
      var _changeStatus = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(accountNumber) {
        var response, status, newStatus, query, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Account.findAccount('accountnumber', accountNumber);

              case 2:
                response = _context4.sent;
                status = response[0].status;
                newStatus = status === 'active' ? 'domant' : 'active';
                query = 'UPDATE accounts SET status = $1 WHERE accountnumber = $2 RETURNING status';
                _context4.next = 8;
                return _db.client.query(query, [newStatus, accountNumber]);

              case 8:
                result = _context4.sent;
                return _context4.abrupt("return", result.rows[0].status);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function changeStatus(_x7) {
        return _changeStatus.apply(this, arguments);
      }

      return changeStatus;
    }()
    /**
    * Delete a given account from datastore
    * @param {string} val
    */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(accountnumber) {
        var query, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = 'DELETE FROM accounts WHERE accountNumber = $1';
                _context5.next = 3;
                return _db.client.query(query, [accountnumber]);

              case 3:
                result = _context5.sent;
                return _context5.abrupt("return", result);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function _delete(_x8) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
    /**
    * Find a given account number
    * @param {Integer} accountNumber
    * @returns {Account} returns matched account
    */

  }, {
    key: "findAccount",
    value: function () {
      var _findAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(column, value) {
        var query, result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                query = "SELECT * FROM accounts WHERE ".concat(column, " = $1");
                _context6.next = 3;
                return _db.client.query(query, [value]);

              case 3:
                result = _context6.sent;
                return _context6.abrupt("return", result.rows);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function findAccount(_x9, _x10) {
        return _findAccount.apply(this, arguments);
      }

      return findAccount;
    }()
    /**
    * Get all account account numbers
    * @returns {Array} returns all account numbers
    */

  }, {
    key: "getAllAccounts",
    value: function () {
      var _getAllAccounts = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7() {
        var query, result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                query = 'SELECT * FROM accounts';
                _context7.next = 3;
                return _db.client.query(query);

              case 3:
                result = _context7.sent;
                return _context7.abrupt("return", result.rows);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getAllAccounts() {
        return _getAllAccounts.apply(this, arguments);
      }

      return getAllAccounts;
    }()
    /**
    * Function to generete random account number
    * @returns {Integer}
    */

  }, {
    key: "genAccountNumber",
    value: function genAccountNumber() {
      return Math.floor(Math.random() * (999999999 - 111111111) + 999999999);
    }
  }]);
  return Account;
}();

var _default = Account;
exports["default"] = _default;