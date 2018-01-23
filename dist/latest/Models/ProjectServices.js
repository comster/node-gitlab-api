'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectServices extends _BaseModel2.default {
  edit(projectId, serviceName, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.put(`projects/${pId}/services/${serviceName}`, options);
  }

  remove(projectId, serviceName) {
    const pId = (0, _Utils.parse)(projectId);

    return this.delete(`projects/${pId}/services/${serviceName}`);
  }

  show(projectId, serviceName) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/services/${serviceName}`);
  }
}

exports.default = ProjectServices;