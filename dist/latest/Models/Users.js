'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

var _UserKeys = require('./UserKeys');

var _UserKeys2 = _interopRequireDefault(_UserKeys);

var _ResourceCustomAttributes = require('./ResourceCustomAttributes');

var _ResourceCustomAttributes2 = _interopRequireDefault(_ResourceCustomAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Users extends _BaseModel2.default {
  constructor(...args) {
    super(...args);

    this.customAttributes = new _ResourceCustomAttributes2.default('users', ...args);
    this.keys = new _UserKeys2.default(...args);
  }

  all(options = {}) {
    return this.get('users', options);
  }

  create(options = {}) {
    return this.post('users', options);
  }

  current() {
    return this.get('user');
  }

  session(email, password) {
    return this.post('session', {
      email,
      password
    });
  }

  search(emailOrUsername) {
    return this.get('users', {
      search: emailOrUsername
    });
  }

  show(userId) {
    const uId = (0, _Utils.parse)(userId);

    return this.get(`users/${uId}`);
  }
}

exports.default = Users;