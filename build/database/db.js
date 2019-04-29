"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDBPool = initDBPool;
exports.dropTables = dropTables;
exports.client = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = require("dotenv");

var _pg = _interopRequireDefault(require("pg"));

/* eslint-disable object-curly-newline */

/* eslint-disable no-console */
(0, _dotenv.config)();
var configDB = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  max: process.env.DB_MAX,
  idleTimeoutMillis: process.env.DB_IDLETIMEOUTMILLIS
};
var pool = new _pg["default"].Pool(configDB);
var client = pool;
exports.client = client;
var userTable = "CREATE TABLE IF NOT EXISTS\n            users(\n              id SERIAL PRIMARY KEY UNIQUE,\n              email VARCHAR(128) NOT NULL UNIQUE,\n              firstName VARCHAR(128) NOT NULL,\n              lastName VARCHAR(128) NOT NULL,\n              password VARCHAR(128) NOT NULL,\n              type VARCHAR(128) NOT NULL,\n              isAdmin VARCHAR(128) NOT NULL,\n              phoneNumber VARCHAR(128) NOT NULL\n            );";
var accountTable = "CREATE TABLE IF NOT EXISTS\n              accounts(\n                accountNumber INT PRIMARY KEY UNIQUE,\n                userid INT REFERENCES users (id),\n                createdOn Date NOT NULL,\n                type VARCHAR(128) NOT NULL,\n                status VARCHAR(128) NOT NULL,\n                balance FLOAT NOT NULL\n              );";
var transactionTable = "CREATE TABLE IF NOT EXISTS\n                    transactions(\n                      id SERIAL PRIMARY KEY UNIQUE,\n                      accountNumber INT REFERENCES accounts (accountNumber),\n                      createdOn VARCHAR(128) NOT NULL,\n                      type VARCHAR(128) NOT NULL,\n                      cashier INT NOT NULL,\n                      amount FLOAT NOT NULL,\n                      oldBalance FLOAT NOT NULL,\n                      newBalance FLOAT NOT NULL\n                    );";

function initDBPool() {
  return _initDBPool.apply(this, arguments);
}

function _initDBPool() {
  _initDBPool = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return pool.query(userTable);

          case 3:
            _context.next = 5;
            return pool.query(accountTable);

          case 5:
            _context.next = 7;
            return pool.query(transactionTable);

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _initDBPool.apply(this, arguments);
}

function dropTables() {
  return _dropTables.apply(this, arguments);
}

function _dropTables() {
  _dropTables = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var query1, query2, query3;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query1 = 'TRUNCATE transactions CASCADE';
            query2 = 'TRUNCATE accounts CASCADE';
            query3 = 'TRUNCATE users CASCADE';
            _context2.prev = 3;
            _context2.next = 6;
            return pool.query(query1);

          case 6:
            _context2.next = 8;
            return pool.query(query2);

          case 8:
            _context2.next = 10;
            return pool.query(query3);

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));
  return _dropTables.apply(this, arguments);
}