"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _transaction = _interopRequireDefault(require("../controllers/transaction.controller"));

var _account = require("../../middleware/account.validations");

var _checkAccount = _interopRequireDefault(require("../../middleware/check.account.balance"));

var _transaction2 = _interopRequireDefault(require("../../middleware/transaction.validation"));

var _transactionView = _interopRequireDefault(require("../../middleware/transaction.view.authentication"));

var _auth = _interopRequireDefault(require("../../utils/auth.staff"));

var _utils = require("../../utils/utils");

var _auth2 = _interopRequireDefault(require("../../utils/auth.user"));

var router = _express["default"].Router();
/**
* @api {post} /api/v1/transactions Create Account
* @apiName Get all transactions
* @apiPermission user
*
* @apiSuccess (200) {Object} get all transaction `transactions` object
*/


router.get('', _utils.passToken, _auth2["default"], _transaction["default"].getAllTransactions);
/**
* @api {post} /api/v1/transactions/:transactionID Get transaction
* @apiName Get a transaction
* @apiPermission user
*
* @apiSuccess (200) {Object} A transaction `transaction` object and status code
*/

router.get('/:transactionID', _transaction2["default"], _utils.passToken, _transactionView["default"], _transaction["default"].getTransaction);
/**
* @api {post} /api/v1/transactions/:accountNumber/debit Debit Account
* @apiName Debit an account
* @apiPermission user
*
* @apiParam  {Integer} [amount] amount
*
* @apiSuccess (200)
*/

router.post('/:accountNumber/debit', _account.accountNumberValidation, _checkAccount["default"], _utils.passToken, _auth["default"], _transaction["default"].debitAccount);
/**
* @api {post} /api/v1/transactions/:accountNumber/credit Credit Account
* @apiName Debit an account
* @apiPermission user
*
* @apiParam  {Integer} [amount] amount
*
* @apiSuccess (200)
*/

router.post('/:accountNumber/credit', _account.accountNumberValidation, _utils.passToken, _auth["default"], _transaction["default"].creditAccount);
var _default = router;
exports["default"] = _default;