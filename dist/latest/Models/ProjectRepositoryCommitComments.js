'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectRepositoryCommitComments extends _BaseModel2.default {
  all(projectId, sha, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/commits/${sha}/comments`, options);
  }

  create(projectId, sha, note, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/repository/commits/${sha}/comments`, Object.assign({ note }, options));
  }
}

exports.default = ProjectRepositoryCommitComments;