'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectProtectedBranches extends _BaseModel2.default {
  all(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/protected_branches`);
  }

  protect(projectId, branchName, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/protected_branches`, Object.assign(options, { name: branchName }));
  }

  show(projectId, branchName) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/protected_branches/${branchName}`);
  }

  unprotect(projectId, branchName) {
    const pId = (0, _Utils.parse)(projectId);

    return this.delete(`projects/${pId}/protected_branches/${branchName}`);
  }
}

exports.default = ProjectProtectedBranches;