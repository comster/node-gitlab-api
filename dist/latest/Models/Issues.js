'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Issues extends _BaseModel2.default {
  all(options = {}) {
    return this.get('issues', options);
  }
}

exports.default = Issues;