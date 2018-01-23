'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectRepositoryFiles extends _BaseModel2.default {
  create(projectId, filePath, branch, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/repository/files/${filePath}`, Object.assign({ branch }, options));
  }

  edit(projectId, filePath, branch, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.put(`projects/${pId}/repository/files/${filePath}`, Object.assign({ branch }, options));
  }

  remove(projectId, filePath, branch, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.delete(`projects/${pId}/repository/files/${filePath}`, Object.assign({ branch }, options));
  }

  show(projectId, filePath, ref) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/files/${filePath}`, { ref });
  }

  showRaw(projectId, filePath, ref) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/files/${filePath}/raw`, { ref });
  }
}

exports.default = ProjectRepositoryFiles;