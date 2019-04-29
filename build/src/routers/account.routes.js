"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _account = _interopRequireDefault(require("../controllers/account.controller"));

var _auth = _interopRequireDefault(require("../../utils/auth.staff"));

var _utils = require("../../utils/utils");

var _account2 = require("../../middleware/account.validations");

var _auth2 = _interopRequireDefault(require("../../utils/auth.user"));

var _authenticateMail = _interopRequireDefault(require("../../middleware/authenticate.mail.presence"));

var _restric = _interopRequireDefault(require("../../middleware/restric.user"));

var _accountView = _interopRequireDefault(require("../../middleware/account.view.authentication"));

var router = _express["default"].Router();
/**
* @api {post} /api/v1/accounts Create Account
* @apiName Create new account
* @apiPermission user
* @apiParam  {String} [type] account type
* @apiParam  {String} [startBalance] start balance of account
* @apiParam  {String} [status] Active or domant
*/


router.post('/accounts', _account2.validateAccountCreationFields, _utils.passToken, _account["default"].createAccount);
/**
* @api {get} /api/v1/accounts/:accountNumber   gets an account
* @apiName Get account
* @apiPermission staff
*
*/

router.get('/accounts/:accountNumber', _account2.accountNumberValidation, _utils.passToken, _accountView["default"], _account["default"].getAccount);
/**
* @api {get} /api/v1/accounts   gets all accounts
* @apiName Get accounts
* @apiPermission admin
*
*/

router.get('/accounts', _utils.passToken, _restric["default"], _account["default"].getAllAccounts);
/**
* @api {patch} /api/v1/account/:accountNumber Change a specific account status
* @apiName Change account status
* @apiPermission admin or staff
*
*/

router.patch('/account/:accountNumber', _account2.accountNumberValidation, _utils.passToken, _auth2["default"], _account["default"].changeStatus);
/**
* @api {delete} /api/v1/account/:accountNumber delete specific account
* @apiName Delete account
* @apiPermission admin/staff
*/

router["delete"]('/accounts/:accountNumber', _utils.passToken, _account2.accountNumberValidation, _auth["default"], _account["default"].deleteAccount);
var _default = router;
exports["default"] = _default;