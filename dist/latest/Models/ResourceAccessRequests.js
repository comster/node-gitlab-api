'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ACCESS_LEVELS = {
  GUEST: 10,
  REPORTER: 20,
  DEVELOPER: 30,
  MASTER: 40,
  OWNER: 50
};

class ResourceAccessRequests extends _BaseModel2.default {
  constructor(resourceType, ...args) {
    super(...args);

    this.resourceType = resourceType;
    this.ACCESS_LEVELS = ACCESS_LEVELS;
  }

  all(resourceId) {
    const rId = (0, _Utils.parse)(resourceId);

    return this.get(`${this.resourceType}/${rId}/access_requests`);
  }

  request(resourceId) {
    const rId = (0, _Utils.parse)(resourceId);

    return this.post(`${this.resourceType}/${rId}/access_requests`);
  }

  approve(resourceId, userId, { access_level = 30 }) {
    const [rId, uId] = [resourceId, userId].map(_Utils.parse);

    return this.post(`${this.resourceType}/${rId}/access_requests/${uId}/approve`, { access_level });
  }

  deny(resourceId, userId) {
    const [rId, uId] = [resourceId, userId].map(_Utils.parse);

    return this.delete(`${this.resourceType}/${rId}/access_requests/${uId}/approve`);
  }
}

exports.default = ResourceAccessRequests;