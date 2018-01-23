'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _BaseModel2 = require('./BaseModel');

var _BaseModel3 = _interopRequireDefault(_BaseModel2);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_BaseModel) {
  _inherits(Projects, _BaseModel);

  function Projects() {
    var _ref;

    _classCallCheck(this, Projects);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Projects.__proto__ || Object.getPrototypeOf(Projects)).call.apply(_ref, [this].concat(args)));

    _this.hooks = new (Function.prototype.bind.apply(_ProjectHooks2.default, [null].concat(args)))();
    _this.issues = new (Function.prototype.bind.apply(_ProjectIssues2.default, [null].concat(args)))();
    _this.labels = new (Function.prototype.bind.apply(_ProjectLabels2.default, [null].concat(args)))();
    _this.repository = new (Function.prototype.bind.apply(_ProjectRepository2.default, [null].concat(args)))();
    _this.protectedBranches = new (Function.prototype.bind.apply(_ProjectProtectedBranches2.default, [null].concat(args)))();
    _this.deployKeys = new (Function.prototype.bind.apply(_ProjectDeployKeys2.default, [null].concat(args)))();
    _this.mergeRequests = new (Function.prototype.bind.apply(_ProjectMergeRequests2.default, [null].concat(args)))();
    _this.services = new (Function.prototype.bind.apply(_ProjectServices2.default, [null].concat(args)))();
    _this.variables = new (Function.prototype.bind.apply(_ProjectVariables2.default, [null].concat(args)))();
    _this.triggers = new (Function.prototype.bind.apply(_ProjectTriggers2.default, [null].concat(args)))();
    _this.pipelines = new (Function.prototype.bind.apply(_ProjectPipelines2.default, [null].concat(args)))();
    _this.jobs = new (Function.prototype.bind.apply(_ProjectJobs2.default, [null].concat(args)))();
    _this.environments = new (Function.prototype.bind.apply(_ProjectEnvironments2.default, [null].concat(args)))();
    _this.runners = new (Function.prototype.bind.apply(_ProjectRunners2.default, [null].concat(args)))();
    _this.customAttributes = new (Function.prototype.bind.apply(_ResourceCustomAttributes2.default, [null].concat(['projects'], args)))();
    _this.members = new (Function.prototype.bind.apply(_ResourceMembers2.default, [null].concat(['projects'], args)))();
    _this.accessRequests = new (Function.prototype.bind.apply(_ResourceAccessRequests2.default, [null].concat(['projects'], args)))();
    _this.milestones = new (Function.prototype.bind.apply(_ResourceMilestones2.default, [null].concat(['projects'], args)))();
    _this.snippets = new (Function.prototype.bind.apply(_ResourceNotes2.default, [null].concat(['projects', 'snippets'], args)))();
    return _this;
  }

  _createClass(Projects, [{
    key: 'all',
    value: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('projects', options);
    }
  }, {
    key: 'create',
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.userId) {
        var uId = (0, _Utils.parse)(options.userId);

        return this.post('projects/user/' + uId, options);
      }

      return this.post('projects', options);
    }
  }, {
    key: 'edit',
    value: function edit(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.put('projects/' + pId, options);
    }
  }, {
    key: 'fork',
    value: function fork(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.post('projects/' + pId + '/fork', options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId) {
      var pId = (0, _Utils.parse)(projectId);

      return this.delete('projects/' + pId);
    }
  }, {
    key: 'search',
    value: function search(projectName) {
      return this.get('projects', { search: projectName });
    }
  }, {
    key: 'share',
    value: function share(projectId, groupId, groupAccess, options) {
      var pId = (0, _Utils.parse)(projectId);

      if (!groupId || !groupAccess) throw new Error('Missing required arguments');

      options.group_id = groupId;
      options.group_access = groupAccess;

      return this.post('projects/' + pId + '/share', options);
    }
  }, {
    key: 'show',
    value: function show(projectId) {
      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId);
    }
  }, {
    key: 'star',
    value: function star(projectId) {
      var pId = (0, _Utils.parse)(projectId);

      return this.post('projects/' + pId + '/star');
    }
  }, {
    key: 'statuses',
    value: function statuses(projectId, sha, state) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.post('projects/' + pId + '/statuses/' + sha, Object.assign({ state: state }, options));
    }
  }, {
    key: 'unshare',
    value: function unshare(projectId, groupId) {
      var _map = [projectId, groupId].map(_Utils.parse),
          _map2 = _slicedToArray(_map, 2),
          pId = _map2[0],
          gId = _map2[1];

      return this.delete('projects/' + pId + '/share' + gId);
    }
  }, {
    key: 'unstar',
    value: function unstar(projectId) {
      var pId = (0, _Utils.parse)(projectId);

      return this.post('projects/' + pId + '/unstar');
    }
  }, {
    key: 'upload',
    value: function upload(projectId, filePath) {
      var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref2$fileName = _ref2.fileName,
          fileName = _ref2$fileName === undefined ? _path2.default.basename(filePath) : _ref2$fileName;

      var pId = (0, _Utils.parse)(projectId);
      var file = _fs2.default.readFileSync(filePath);

      return this.postForm('projects/' + pId + '/uploads', {
        file: {
          value: file,
          options: {
            filename: fileName,
            contentType: 'application/octet-stream'
          }
        }
      });
    }
  }]);

  return Projects;
}(_BaseModel3.default);

module.exports = Projects;