'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _Utils = require('../Utils');

var _ProjectHooks = require('./ProjectHooks');

var _ProjectHooks2 = _interopRequireDefault(_ProjectHooks);

var _ProjectIssues = require('./ProjectIssues');

var _ProjectIssues2 = _interopRequireDefault(_ProjectIssues);

var _ProjectLabels = require('./ProjectLabels');

var _ProjectLabels2 = _interopRequireDefault(_ProjectLabels);

var _ProjectRepository = require('./ProjectRepository');

var _ProjectRepository2 = _interopRequireDefault(_ProjectRepository);

var _ProjectProtectedBranches = require('./ProjectProtectedBranches');

var _ProjectProtectedBranches2 = _interopRequireDefault(_ProjectProtectedBranches);

var _ProjectDeployKeys = require('./ProjectDeployKeys');

var _ProjectDeployKeys2 = _interopRequireDefault(_ProjectDeployKeys);

var _ProjectMergeRequests = require('./ProjectMergeRequests');

var _ProjectMergeRequests2 = _interopRequireDefault(_ProjectMergeRequests);

var _ProjectServices = require('./ProjectServices');

var _ProjectServices2 = _interopRequireDefault(_ProjectServices);

var _ProjectVariables = require('./ProjectVariables');

var _ProjectVariables2 = _interopRequireDefault(_ProjectVariables);

var _ProjectTriggers = require('./ProjectTriggers');

var _ProjectTriggers2 = _interopRequireDefault(_ProjectTriggers);

var _ProjectRunners = require('./ProjectRunners');

var _ProjectRunners2 = _interopRequireDefault(_ProjectRunners);

var _ProjectPipelines = require('./ProjectPipelines');

var _ProjectPipelines2 = _interopRequireDefault(_ProjectPipelines);

var _ProjectJobs = require('./ProjectJobs');

var _ProjectJobs2 = _interopRequireDefault(_ProjectJobs);

var _ProjectEnvironments = require('./ProjectEnvironments');

var _ProjectEnvironments2 = _interopRequireDefault(_ProjectEnvironments);

var _ResourceCustomAttributes = require('./ResourceCustomAttributes');

var _ResourceCustomAttributes2 = _interopRequireDefault(_ResourceCustomAttributes);

var _ResourceMembers = require('./ResourceMembers');

var _ResourceMembers2 = _interopRequireDefault(_ResourceMembers);

var _ResourceAccessRequests = require('./ResourceAccessRequests');

var _ResourceAccessRequests2 = _interopRequireDefault(_ResourceAccessRequests);

var _ResourceMilestones = require('./ResourceMilestones');

var _ResourceMilestones2 = _interopRequireDefault(_ResourceMilestones);

var _ResourceNotes = require('./ResourceNotes');

var _ResourceNotes2 = _interopRequireDefault(_ResourceNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Projects extends _BaseModel2.default {
  constructor(...args) {
    super(...args);

    this.hooks = new _ProjectHooks2.default(...args);
    this.issues = new _ProjectIssues2.default(...args);
    this.labels = new _ProjectLabels2.default(...args);
    this.repository = new _ProjectRepository2.default(...args);
    this.protectedBranches = new _ProjectProtectedBranches2.default(...args);
    this.deployKeys = new _ProjectDeployKeys2.default(...args);
    this.mergeRequests = new _ProjectMergeRequests2.default(...args);
    this.services = new _ProjectServices2.default(...args);
    this.variables = new _ProjectVariables2.default(...args);
    this.triggers = new _ProjectTriggers2.default(...args);
    this.pipelines = new _ProjectPipelines2.default(...args);
    this.jobs = new _ProjectJobs2.default(...args);
    this.environments = new _ProjectEnvironments2.default(...args);
    this.runners = new _ProjectRunners2.default(...args);
    this.customAttributes = new _ResourceCustomAttributes2.default('projects', ...args);
    this.members = new _ResourceMembers2.default('projects', ...args);
    this.accessRequests = new _ResourceAccessRequests2.default('projects', ...args);
    this.milestones = new _ResourceMilestones2.default('projects', ...args);
    this.snippets = new _ResourceNotes2.default('projects', 'snippets', ...args);
  }

  all(options = {}) {
    return this.get('projects', options);
  }

  create(options = {}) {
    if (options.userId) {
      const uId = (0, _Utils.parse)(options.userId);

      return this.post(`projects/user/${uId}`, options);
    }

    return this.post('projects', options);
  }

  edit(projectId, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.put(`projects/${pId}`, options);
  }

  fork(projectId, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/fork`, options);
  }

  remove(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.delete(`projects/${pId}`);
  }

  search(projectName) {
    return this.get('projects', { search: projectName });
  }

  share(projectId, groupId, groupAccess, options) {
    const pId = (0, _Utils.parse)(projectId);

    if (!groupId || !groupAccess) throw new Error('Missing required arguments');

    options.group_id = groupId;
    options.group_access = groupAccess;

    return this.post(`projects/${pId}/share`, options);
  }

  show(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.get(`projects/${pId}`);
  }

  star(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/star`);
  }

  statuses(projectId, sha, state, options = {}) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/statuses/${sha}`, Object.assign({ state }, options));
  }

  unshare(projectId, groupId) {
    const [pId, gId] = [projectId, groupId].map(_Utils.parse);

    return this.delete(`projects/${pId}/share${gId}`);
  }

  unstar(projectId) {
    const pId = (0, _Utils.parse)(projectId);

    return this.post(`projects/${pId}/unstar`);
  }

  upload(projectId, filePath, { fileName = _path2.default.basename(filePath) } = {}) {
    const pId = (0, _Utils.parse)(projectId);
    const file = _fs2.default.readFileSync(filePath);

    return this.postForm(`projects/${pId}/uploads`, {
      file: {
        value: file,
        options: {
          filename: fileName,
          contentType: 'application/octet-stream'
        }
      }
    });
  }
}

module.exports = Projects;