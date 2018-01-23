'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectHooks extends _BaseModel2.default {
  all(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/hooks`);
  }

  show(projectId, hookId) {
    const [pId, hId] = [projectId, hookId].map(_Utils.parse);

    return this.get(`projects/${pId}/hooks/${hId}`);
  }

  add(projectId, url, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/hooks`, Object.assign({ url }, options));
  }

  edit(projectId, hookId, url, options = {}) {
    const [pId, hId] = [projectId, hookId].map(_Utils.parse);

    return this.put(`projects/${pId}/hooks/${hId}`, Object.assign({ url }, options));
  }

  remove(projectId, hookId) {
    const [pId, hId] = [projectId, hookId].map(_Utils.parse);

    return this.delete(`projects/${pId}/hooks/${hId}`);
  }
}

exports.default = ProjectHooks;