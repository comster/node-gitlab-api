'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MergeRequests extends _BaseModel2.default {
  all(projectId, options = {}) {
    return this.get('merge_requests', options);
  }
}

exports.default = MergeRequests;