'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Environments extends _BaseModel2.default {
  all(projectId, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/environments`, options);
  }
  edit(projectId, environmentId, options = {}) {
    const [pId, eId] = [projectId, environmentId].map(_Utils.parse);

    return this.put(`projects/${pId}/environments/${eId}`, options);
  }

  remove(projectId, environmentId) {
    const [pId, eId] = [projectId, environmentId].map(_Utils.parse);

    return this.delete(`projects/${pId}/environments/${eId}`);
  }

  stop(projectId, environmentId, options = {}) {
    const [pId, eId] = [projectId, environmentId].map(_Utils.parse);

    return this.post(`projects/${pId}/environments/${eId}/stop`, options);
  }
}

exports.default = Environments;