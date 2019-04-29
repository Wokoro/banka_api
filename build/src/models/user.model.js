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

var _utils = require("../../utils/utils");

/* eslint-disable class-methods-use-this */

/* eslint-disable padded-blocks */

/* eslint-disable quotes */

/* eslint-disable no-plusplus */
var User =
/*#__PURE__*/
function () {
  function User() {
    (0, _classCallCheck2["default"])(this, User);
  }

  (0, _createClass2["default"])(User, null, [{
    key: "findUser",

    /**
    * Find a user my email
    * @param {string} email
    * @returns {User} User
    */
    value: function () {
      var _findUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(column, value) {
        var query, result, userRows;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "SELECT * FROM users WHERE ".concat(column, " = $1");
                _context.next = 3;
                return _db.client.query(query, [value]);

              case 3:
                result = _context.sent;
                _context.next = 6;
                return result.rows;

              case 6:
                userRows = _context.sent;
                return _context.abrupt("return", userRows);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findUser(_x, _x2) {
        return _findUser.apply(this, arguments);
      }

      return findUser;
    }()
    /**
     *  Create and save a given user in the database
     *  @params{string} lastName
     *  @params{string} firstName
     *  @params{string} email
     *  @params{string} password
     *  @params{string} type
     *  @params{boolean} isAdmin
     *  @params{string} phoneNumber
     *
     * @returns {Promise}
     */

  }, {
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(lastName, firstName, email, password, type, isAdmin, phoneNumber) {
        var query, userPassword, result, user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "INSERT INTO users(lastname, firstname, email, password, type, isadmin, phonenumber) values($1, $2, $3, $4, $5, $6, $7) RETURNING id, lastname, firstname, email, type, isadmin, phonenumber";
                userPassword = (0, _utils.hashPassword)(password);
                _context2.next = 4;
                return _db.client.query(query, [lastName, firstName, email, userPassword, type, isAdmin, phoneNumber]);

              case 4:
                result = _context2.sent;
                user = result.rows[0];
                user.token = (0, _utils.generateToken)({
                  id: user.id,
                  email: email,
                  isAdmin: isAdmin
                });
                return _context2.abrupt("return", result);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createUser(_x3, _x4, _x5, _x6, _x7, _x8, _x9) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }]);
  return User;
}();

var _default = User;
exports["default"] = _default;