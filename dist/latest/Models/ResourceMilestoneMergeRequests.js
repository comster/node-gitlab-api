'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResourceMilestoneMergeRequests extends _BaseModel2.default {
  constructor(resourceType, ...args) {
    super(...args);

    this.resourceType = resourceType;
  }

  all(resourceId, milestoneId) {
    const [rId, mId] = [resourceId, milestoneId].map(_Utils.parse);

    return this.get(`${this.resourceType}/${rId}/milestones/${mId}/merge_requests`);
  }
}

exports.default = ResourceMilestoneMergeRequests;