'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GroupProjects extends _BaseModel2.default {
  all(groupId, options = {}) {
    const gId = (0, _Utils.parse)(groupId);

    return this.get(`groups/${gId}/projects`, options);
  }

  add(groupId, projectId) {
    const [gId, pId] = [groupId, projectId].map(_Utils.parse);

    return this.post(`groups/${gId}/projects/${pId}`);
  }
}

exports.default = GroupProjects;