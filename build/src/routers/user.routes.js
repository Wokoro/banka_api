"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _signin = _interopRequireDefault(require("../../middleware/signin.authentication"));

var _signup = _interopRequireDefault(require("../../middleware/signup.validation"));

var _checkUserAccount = _interopRequireDefault(require("../../middleware/check.user.account.uniqueness"));

var _authenticateMail = _interopRequireDefault(require("../../middleware/authenticate.mail.presence"));

var _remove = _interopRequireDefault(require("../../middleware/remove.padding"));

var _accountView = _interopRequireDefault(require("../../middleware/account.view.authentication"));

var _utils = require("../../utils/utils");

var _User = _interopRequireDefault(require("../controllers/User.controller"));

var router = _express["default"].Router();
/**
* @api {post} /api/v1/auth/signup Create new user account
* @apiName Creat user account
* @apiPermission user
*
* @apiParam  {object} user details
*/


router.post('/signup', _remove["default"], _checkUserAccount["default"], _signup["default"], _User["default"].createUser);
/**
* @api {post} /api/v1/auth/signin Sign a given user account
* @apiName Sign in user
* @apiPermission user
*
* @apiParam  {object} user signin details
*
* @apiSuccess (200) {Object} mixed `user account` object
*/

router.post('/signin', _signin["default"], _User["default"].signinUser);
/**
* @api {get} /api/v1/user/<user-email-address>/accounts  view accounts specific to a user
* @apiName View user account(s)
* @apiPermission user
*
* @apiParam  {object} user account(s) details
*
* @apiSuccess (200) {Object} mixed `user account(s)` object
*/

router.get('/:userEmailAddress/accounts', _utils.passToken, _authenticateMail["default"], _accountView["default"], _User["default"].getAllUserAccounts);
var _default = router;
exports["default"] = _default;