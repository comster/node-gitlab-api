'use strict';

var _API = require('./API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = ({ url, token, oauthToken }) => new _API2.default({ url, token, oauthToken });