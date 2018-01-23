'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectDeployKeys extends _BaseModel2.default {
  add(projectId, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/deploy_keys`, options);
  }

  all(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/deploy_keys`);
  }

  show(projectId, keyId) {
    const [pId, kId] = [projectId, keyId].map(_Utils.parse);

    return this.get(`projects/${pId}/deploy_keys/${kId}`);
  }
}

exports.default = ProjectDeployKeys;