'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectVariables extends _BaseModel2.default {

  // https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/project_level_variables.md#list-project-variables

  all(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/variables`);
  }

  // https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/project_level_variables.md#show-variable-details

  //   show(projectId, variableKey) {
  //     const [pId, key] = [projectId, variableKey].map(parse);

  //     return this.get(`projects/${pId}/variables/${key}`);
  //   }

  // https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/project_level_variables.md#create-variable

  add(projectId, key, value, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/variables`, Object.assign({ key, value }, options));
  }

  edit(projectId, variableKey, url, options = {}) {
    const [pId, key] = [projectId, variableKey].map(_Utils.parse);

    return this.put(`projects/${pId}/variables/${key}`, Object.assign({ url }, options));
  }

  remove(projectId, variableKey) {
    const [pId, key] = [projectId, variableKey].map(_Utils.parse);

    return this.delete(`projects/${pId}/variables/${key}`);
  }
}

exports.default = ProjectVariables;