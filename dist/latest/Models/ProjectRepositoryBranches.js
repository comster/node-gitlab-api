'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectRepositoryBranches extends _BaseModel2.default {
  all(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/branches`);
  }

  create(projectId, branchName, ref) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/repository/branches`, { branch: branchName, ref });
  }

  protect(projectId, branchName, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.put(`projects/${pId}/repository/branches/${branchName}/protect`, options);
  }

  remove(projectId, branchName) {
    const pId = (0, _Utils.parse)(projectId);

    return this.delete(`projects/${pId}/repository/branches/${branchName}`);
  }

  show(projectId, branchName) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/branches/${branchName}`);
  }

  unprotect(projectId, branchName) {
    const pId = (0, _Utils.parse)(projectId);

    return this.put(`projects/${pId}/repository/branches/${branchName}/unprotect`);
  }
}

exports.default = ProjectRepositoryBranches;