'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

var _ProjectRepositoryBranches = require('./ProjectRepositoryBranches');

var _ProjectRepositoryBranches2 = _interopRequireDefault(_ProjectRepositoryBranches);

var _ProjectRepositoryTags = require('./ProjectRepositoryTags');

var _ProjectRepositoryTags2 = _interopRequireDefault(_ProjectRepositoryTags);

var _ProjectRepositoryCommits = require('./ProjectRepositoryCommits');

var _ProjectRepositoryCommits2 = _interopRequireDefault(_ProjectRepositoryCommits);

var _ProjectRepositoryFiles = require('./ProjectRepositoryFiles');

var _ProjectRepositoryFiles2 = _interopRequireDefault(_ProjectRepositoryFiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProjectRepository extends _BaseModel2.default {
  constructor(...args) {
    super(...args);

    this.branches = new _ProjectRepositoryBranches2.default(...args);
    this.tags = new _ProjectRepositoryTags2.default(...args);
    this.commits = new _ProjectRepositoryCommits2.default(...args);
    this.files = new _ProjectRepositoryFiles2.default(...args);
  }

  compare(projectId, from, to) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/compare`, { from, to });
  }

  contributors(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/contributors`);
  }

  showArchive(projectId, { sha }) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/archive`, { sha });
  }

  showBlob(projectId, sha) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/blobs/${sha}`);
  }

  showBlobRaw(projectId, sha) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/blobs/${sha}/raw`);
  }

  tree(projectId, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}/repository/tree`, options);
  }
}

exports.default = ProjectRepository;