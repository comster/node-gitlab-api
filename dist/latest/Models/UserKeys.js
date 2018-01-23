'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserKeys extends _BaseModel2.default {
  add(userId, title, key) {
    const uId = (0, _Utils.parse)(userId);

    return this.post(`users/${uId}/keys`, {
      title,
      key
    });
  }

  all(userId) {
    const uId = (0, _Utils.parse)(userId);

    return this.get(`users/${uId}/keys`);
  }
}

exports.default = UserKeys;