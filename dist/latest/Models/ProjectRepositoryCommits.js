'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

var _ProjectRepositoryCommitComments = require('./ProjectRepositoryCommitComments');

var _ProjectRepositoryCommitComments2 = _interopRequireDefault(_ProjectRepositoryCommitComments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectRepositoryCommits extends _BaseModel2.default {
  constructor(...args) {
    super(...args);

    this.comments = new _ProjectRepositoryCommitComments2.default(...args);
  }

  all(projectId, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/commits`, options);
  }

  diff(projectId, sha) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/commits/${sha}/diff`);
  }

  show(projectId, sha) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/commits/${sha}`);
  }

  statuses(projectId, sha, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/commits/${sha}/statuses`, options);
  }
}

exports.default = ProjectRepositoryCommits;