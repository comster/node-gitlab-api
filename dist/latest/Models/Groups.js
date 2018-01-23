'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _GroupProjects = require('./GroupProjects');

var _GroupProjects2 = _interopRequireDefault(_GroupProjects);

var _ResourceAccessRequests = require('./ResourceAccessRequests');

var _ResourceAccessRequests2 = _interopRequireDefault(_ResourceAccessRequests);

var _ResourceCustomAttributes = require('./ResourceCustomAttributes');

var _ResourceCustomAttributes2 = _interopRequireDefault(_ResourceCustomAttributes);

var _ResourceMembers = require('./ResourceMembers');

var _ResourceMembers2 = _interopRequireDefault(_ResourceMembers);

var _ResourceMilestones = require('./ResourceMilestones');

var _ResourceMilestones2 = _interopRequireDefault(_ResourceMilestones);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Groups extends _BaseModel2.default {
  constructor(...args) {
    super(...args);

    this.projects = new _GroupProjects2.default(...args);
    this.accessRequests = new _ResourceAccessRequests2.default('groups', ...args);
    this.customAttributes = new _ResourceCustomAttributes2.default('groups', ...args);
    this.members = new _ResourceMembers2.default('groups', ...args);
    this.milestones = new _ResourceMilestones2.default('groups', ...args);
  }

  all(options = {}) {
    return this.get('groups', options);
  }

  allSubgroups(groupId, options = {}) {
    const gId = (0, _Utils.parse)(groupId);

    return this.get(`groups/${gId}/subgroups`, options);
  }

  show(groupId) {
    const gId = (0, _Utils.parse)(groupId);

    return this.get(`groups/${gId}`);
  }

  create(options = {}) {
    return this.post('groups', options);
  }

  remove(groupId) {
    const gId = (0, _Utils.parse)(groupId);

    return this.delete(`groups/${gId}`);
  }

  search(nameOrPath) {
    return this.get('groups', {
      search: nameOrPath
    });
  }
}

exports.default = Groups;