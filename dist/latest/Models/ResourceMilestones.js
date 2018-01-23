'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

var _ResourceMilestoneIssues = require('./ResourceMilestoneIssues');

var _ResourceMilestoneIssues2 = _interopRequireDefault(_ResourceMilestoneIssues);

var _ResourceMilestoneMergeRequests = require('./ResourceMilestoneMergeRequests');

var _ResourceMilestoneMergeRequests2 = _interopRequireDefault(_ResourceMilestoneMergeRequests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResourceMilestones extends _BaseModel2.default {
  constructor(resourceType, ...args) {
    super(...args);

    this.resourceType = resourceType;
    this.issues = new _ResourceMilestoneIssues2.default(resourceType, ...args);
    this.mergeRequests = new _ResourceMilestoneMergeRequests2.default(resourceType, ...args);
  }

  all(resourceId, options = {}) {
    const rId = (0, _Utils.parse)(resourceId);

    return this.get(`${this.resourceType}/${rId}/milestones`, options);
  }

  create(resourceId, title, options) {
    const rId = (0, _Utils.parse)(resourceId);

    return this.post(`${this.resourceType}/${rId}/milestones`, options);
  }

  edit(resourceId, milestoneId, options) {
    const [rId, mId] = [resourceId, milestoneId].map(_Utils.parse);

    return this.put(`${this.resourceType}/${rId}/milestones/${mId}`, options);
  }

  show(resourceId, milestoneId) {
    const [rId, mId] = [resourceId, milestoneId].map(_Utils.parse);

    return this.get(`${this.resourceType}/${rId}/milestones/${mId}`);
  }
}

exports.default = ResourceMilestones;