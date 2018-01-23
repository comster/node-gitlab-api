'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectRepositoryTags extends _BaseModel2.default {
  all(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/tags`);
  }

  create(projectId, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/repository/tags`, options);
  }

  remove(projectId, tagName) {
    const pId = (0, _Utils.parse)(projectId);

    return this.delete(`projects/${pId}/repository/tags/${encodeURI(tagName)}`);
  }

  show(projectId, tagName) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/tags/${encodeURI(tagName)}`);
  }
}

exports.default = ProjectRepositoryTags;