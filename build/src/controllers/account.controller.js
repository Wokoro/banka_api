"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _account = _interopRequireDefault(require("../models/account.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

/* eslint-disable no-console */

/* eslint-disable object-curly-newline */

/* eslint-disable padded-blocks */

/* eslint-disable indent */

/* eslint-disable no-unused-expressions */
var _default = {
  /**
  * Gets all bank accounts created
  * @param {string} req
  * @param {string} res
  * @returns {object} returns all accounts
  */
  getAllAccounts: function () {
    var _getAllAccounts = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res) {
      var accounts;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _account["default"].getAllAccounts();

            case 3:
              accounts = _context.sent;

              if (accounts.length === 0) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", res.json({
                message: 'Operation successful',
                status: 200,
                accounts: accounts
              }));

            case 6:
              return _context.abrupt("return", res.json({
                status: 400,
                message: 'No accounts created'
              }));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.json({
                status: 500,
                message: "An error occured. ".concat(_context.t0)
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    function getAllAccounts(_x, _x2) {
      return _getAllAccounts.apply(this, arguments);
    }

    return getAllAccounts;
  }(),

  /**
  * Function to get a specific transaction
  * @param {string} req
  * @param {string} res
  * @returns {object} returns the transaction details if succesful
  */
  getAccount: function () {
    var _getAccount = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res) {
      var accountNumber, account;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              accountNumber = req.params.accountNumber;
              _context2.prev = 1;
              _context2.next = 4;
              return _account["default"].findAccount('accountnumber', accountNumber);

            case 4:
              account = _context2.sent;
              res.json({
                status: 200,
                data: {
                  account: account[0]
                }
              });
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              res.json({
                status: 500,
                message: "An error occured. ".concat(_context2.t0)
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    function getAccount(_x3, _x4) {
      return _getAccount.apply(this, arguments);
    }

    return getAccount;
  }(),

  /**
  * function to create bank account
  * @param {string} req
  * @param {string} res
  * @returns {object} returns a response object
  */
  createAccount: function () {
    var _createAccount = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(req, res) {
      var _req$body$token, id, email, _req$body, type, status, openingBalance, _ref, accountnumber, result, _result$, firstname, lastname;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _req$body$token = req.body.token, id = _req$body$token.id, email = _req$body$token.email;
              _req$body = req.body, type = _req$body.type, status = _req$body.status, openingBalance = _req$body.openingBalance;
              _context3.prev = 2;
              _context3.next = 5;
              return _account["default"].createAccount(id, type, status, openingBalance);

            case 5:
              _ref = _context3.sent;
              accountnumber = _ref.accountnumber;
              _context3.next = 9;
              return _user["default"].findUser('id', id);

            case 9:
              result = _context3.sent;
              _result$ = result[0], firstname = _result$.firstname, lastname = _result$.lastname;
              res.json({
                message: 'Account Created',
                status: 200,
                data: {
                  accountnumber: accountnumber,
                  firstname: firstname,
                  lastname: lastname,
                  email: email,
                  type: type,
                  openingBalance: openingBalance
                }
              });
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](2);
              res.json({
                status: 500,
                message: "Unable to create account. ".concat(_context3.t0)
              });

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 14]]);
    }));

    function createAccount(_x5, _x6) {
      return _createAccount.apply(this, arguments);
    }

    return createAccount;
  }(),

  /**
  * function to delete bank account
  * @param {string} req
  * @param {string} res
  * @returns {object} returns an object
  */
  deleteAccount: function () {
    var _deleteAccount = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(req, res) {
      var accountNumber;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              accountNumber = req.params.accountNumber;
              _context4.prev = 1;
              _context4.next = 4;
              return _account["default"]["delete"](accountNumber);

            case 4:
              res.json({
                status: 200,
                message: 'Account Deleted'
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](1);
              res.json({
                status: 500,
                message: "Unable to Deleted account ".concat(_context4.t0)
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 7]]);
    }));

    function deleteAccount(_x7, _x8) {
      return _deleteAccount.apply(this, arguments);
    }

    return deleteAccount;
  }(),

  /**
  * Function to change the account state of a user
  * @param {string} req
  * @param {string} res
  * @returns {object} returns an array of all accounts
  */
  changeStatus: function () {
    var _changeStatus = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(req, res) {
      var accountNumber, status;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              accountNumber = req.params.accountNumber;
              _context5.prev = 1;
              _context5.next = 4;
              return _account["default"].changeStatus(accountNumber);

            case 4:
              status = _context5.sent;
              // for testing purposes;
              res.json({
                message: 'Account status changed',
                status: 200,
                data: {
                  status: status,
                  accountNumber: accountNumber
                }
              });
              _context5.next = 11;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);
              res.json({
                message: "An error occured. ".concat(_context5.t0),
                status: 500
              });

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 8]]);
    }));

    function changeStatus(_x9, _x10) {
      return _changeStatus.apply(this, arguments);
    }

    return changeStatus;
  }()
};
exports["default"] = _default;