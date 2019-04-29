"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils/utils");

/* eslint-disable no-use-before-define */

/* eslint-disable space-before-function-paren */

/* eslint-disable prefer-const */

/* eslint-disable no-control-regex */

/* eslint-disable object-curly-newline */

/* eslint-disable arrow-body-style */
var TEXT_FIELD_REG = /[a-zA-Z\-'\s]+/;
var EMAIL_FIELD_REG = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var ERROR_MESSAGES = [];
/**
 * Checks if and email is valid or not
 * @param {string} email
 * @returns {string|null} matched string or null if nothing is fine
 */

var validateEmail = function validateEmail(email) {
  if ((0, _utils.isEmpty)(email)) {
    ERROR_MESSAGES.push('email field is empty');
  }

  if (!EMAIL_FIELD_REG.test(email)) {
    ERROR_MESSAGES.push('Invalid email address');
  }

  return true;
};
/**
 * Checks if firstName and lastName are valid
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string|null}
 */


var validateNameFields = function validateNameFields(lastName, firstName) {
  if ((0, _utils.isEmpty)(firstName)) {
    ERROR_MESSAGES.push('firstName field required');
  }

  if (!(0, _utils.isEmpty)(firstName) && !TEXT_FIELD_REG.test(firstName)) {
    ERROR_MESSAGES.push('Invalid first name');
  }

  if (!(0, _utils.isEmpty)(lastName) && !TEXT_FIELD_REG.test(lastName)) {
    ERROR_MESSAGES.push('Invalid last name');
  }

  if ((0, _utils.isEmpty)(lastName)) {
    ERROR_MESSAGES.push('lastName field required');
  }
};

function getErrorMessages() {
  return ERROR_MESSAGES;
}
/**
 * Checks if both confirm password and password fields match
 * @param {string} password
 * @param {string} confirmPassword
 * @returns {boolean}
 *
 */


function validatePassword(password, confirmPassword) {
  if ((0, _utils.isEmpty)(password)) {
    ERROR_MESSAGES.push('password field is required');
  }

  if ((0, _utils.isEmpty)(confirmPassword)) {
    ERROR_MESSAGES.push('confirm password field required');
  }

  if (!(password === confirmPassword)) {
    ERROR_MESSAGES.push('password and confirm password fields do not match');
  }
}
/**
 * Checks if both confirm password and password fields match
 * @param {string} req
 * @param {string} res
 *
 */


var signUpValidation = function signUpValidation(req, res, next) {
  var _req$body = req.body,
      lastName = _req$body.lastName,
      firstName = _req$body.firstName,
      email = _req$body.email,
      password = _req$body.password,
      confirmPassword = _req$body.confirmPassword;
  validateNameFields(lastName, firstName);
  validateEmail(email);
  validatePassword(password, confirmPassword);

  if (ERROR_MESSAGES.length === 0) {
    next();
  } else {
    res.status(400).json({
      status: 400,
      message: getErrorMessages()
    });
    ERROR_MESSAGES = [];
  }
};

var _default = signUpValidation;
exports["default"] = _default;