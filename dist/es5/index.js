'use strict';

var _API = require('./API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (_ref) {
  var url = _ref.url,
      token = _ref.token,
      oauthToken = _ref.oauthToken;
  return new _API2.default({ url: url, token: token, oauthToken: oauthToken });
};