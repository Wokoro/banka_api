"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var swaggerDefinition = {
  info: {
    title: 'API for powering BANKA front-end',
    // Title of the documentation
    version: '1.0.0',
    // Version of the app
    description: 'This is the REST API for my product' // short description of the app

  },
  host: process.env.HOST,
  // the host or url of the app
  basePath: '/api/v1' // the basepath of your endpoint

}; // options for the swagger docs

var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./server/docs/**/*.yaml']
}; // initialize swagger-jsdoc

var _default = (0, _swaggerJsdoc["default"])(options);

exports["default"] = _default;