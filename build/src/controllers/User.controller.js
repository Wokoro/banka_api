"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _utils = require("../../utils/utils");

var _user = _interopRequireDefault(require("../models/user.model"));

var _account = _interopRequireDefault(require("../models/account.model"));

/* eslint-disable object-curly-newline */

/* eslint-disable no-unused-expressions */
var _default = {
  /**
   * Creates user account
   * @param {string} req
   * @param {string} res
   * @returns {object} object containing status code and created user details
   */
  createUser: function () {
    var _createUser = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res) {
      var _req$body, lastName, firstName, email, password, phoneNumber, type, isAdmin, result, user, id;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, lastName = _req$body.lastName, firstName = _req$body.firstName, email = _req$body.email, password = _req$body.password, phoneNumber = _req$body.phoneNumber, type = _req$body.type, isAdmin = _req$body.isAdmin;
              _context.prev = 1;
              _context.next = 4;
              return _user["default"].createUser(lastName, firstName, email, password, type, isAdmin, phoneNumber);

            case 4:
              result = _context.sent;
              user = result.rows[0];
              id = user.id;
              user.token = (0, _utils.generateToken)({
                id: id,
                email: email
              }, email);
              res.status(200).json({
                message: 'Signup successfully',
                status: 200,
                data: user
              });
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              res.status(500).json({
                status: 500,
                message: "An error occured. ".concat(_context.t0)
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    function createUser(_x, _x2) {
      return _createUser.apply(this, arguments);
    }

    return createUser;
  }(),

  /**
  * Signin a given user
  * @param {string} req
  * @param {string} res
  * @returns {object} object containing status code and signedup user
  */
  signinUser: function signinUser(req, res) {
    var _req$user = req.user,
        id = _req$user.id,
        email = _req$user.email,
        firstname = _req$user.firstname,
        lastname = _req$user.lastname,
        password = _req$user.password;
    return res.status(200).json({
      message: 'User signed in',
      status: 200,
      data: {
        token: (0, _utils.generateToken)({
          id: id,
          email: email
        }, email),
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      }
    });
  },

  /**
  * Display all user account(s)
  * @param {string} req
  * @param {string} res
  * @returns {object} object containing status code and user account(s) if successful
  */
  getAllUserAccounts: function () {
    var _getAllUserAccounts = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res) {
      var userEmailAddress, result, _ref, id, userAccounts;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userEmailAddress = req.params.userEmailAddress;
              _context2.prev = 1;
              _context2.next = 4;
              return _user["default"].findUser('email', userEmailAddress);

            case 4:
              result = _context2.sent;
              _context2.next = 7;
              return result[0];

            case 7:
              _ref = _context2.sent;
              id = _ref.id;
              _context2.next = 11;
              return _account["default"].findAccount('userid', id);

            case 11:
              userAccounts = _context2.sent;

              if (!(userAccounts.length === 0)) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                status: 400,
                message: 'No accounts created'
              }));

            case 14:
              return _context2.abrupt("return", res.status(200).json({
                status: 200,
                data: {
                  accounts: userAccounts
                }
              }));

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](1);
              return _context2.abrupt("return", res.status(500).json({
                status: 500,
                message: "An error occured. ".concat(_context2.t0)
              }));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 17]]);
    }));

    function getAllUserAccounts(_x3, _x4) {
      return _getAllUserAccounts.apply(this, arguments);
    }

    return getAllUserAccounts;
  }()
};
exports["default"] = _default;