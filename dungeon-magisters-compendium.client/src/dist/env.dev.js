"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.audience = exports.clientId = exports.domain = exports.useSockets = exports.baseURL = exports.dev = void 0;
var dev = window.location.origin.includes('localhost');
exports.dev = dev;
var baseURL = dev ? 'http://localhost:3000' : '';
exports.baseURL = baseURL;
var useSockets = false;
exports.useSockets = useSockets;
var domain = 'kywant.us.auth0.com';
exports.domain = domain;
var clientId = 'LTPyVFpFD5y9fMjayzDrZvOuLg6hFsbn';
exports.clientId = clientId;
var audience = 'https://Loreheim/';
exports.audience = audience;
//# sourceMappingURL=env.dev.js.map
