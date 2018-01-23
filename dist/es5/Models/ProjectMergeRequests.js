'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseModel2 = require('./BaseModel');

var _BaseModel3 = _interopRequireDefault(_BaseModel2);

var _Utils = require('../Utils');

var _ProjectMergeRequestVersions = require('./ProjectMergeRequestVersions');

var _ProjectMergeRequestVersions2 = _interopRequireDefault(_ProjectMergeRequestVersions);

var _ProjectMergeRequestChanges = require('./ProjectMergeRequestChanges');

var _ProjectMergeRequestChanges2 = _interopRequireDefault(_ProjectMergeRequestChanges);

var _ProjectMergeRequestCommits = require('./ProjectMergeRequestCommits');

var _ProjectMergeRequestCommits2 = _interopRequireDefault(_ProjectMergeRequestCommits);

var _ResourceNotes = require('./ResourceNotes');

var _ResourceNotes2 = _interopRequireDefault(_ResourceNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectMergeRequests = function (_BaseModel) {
  _inherits(ProjectMergeRequests, _BaseModel);

  function ProjectMergeRequests() {
    var _ref;

    _classCallCheck(this, ProjectMergeRequests);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ProjectMergeRequests.__proto__ || Object.getPrototypeOf(ProjectMergeRequests)).call.apply(_ref, [this].concat(args)));

    _this.commits = new (Function.prototype.bind.apply(_ProjectMergeRequestCommits2.default, [null].concat(args)))();
    _this.changes = new (Function.prototype.bind.apply(_ProjectMergeRequestChanges2.default, [null].concat(args)))();
    _this.versions = new (Function.prototype.bind.apply(_ProjectMergeRequestVersions2.default, [null].concat(args)))();
    _this.notes = new (Function.prototype.bind.apply(_ResourceNotes2.default, [null].concat(['projects', 'merge_requests'], args)))();
    return _this;
  }

  _createClass(ProjectMergeRequests, [{
    key: 'accept',
    value: function accept(projectId, mergerequestId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map = [projectId, mergerequestId].map(_Utils.parse),
          _map2 = _slicedToArray(_map, 2),
          pId = _map2[0],
          mId = _map2[1];

      return this.put('projects/' + pId + '/merge_requests/' + mId + '/merge', options);
    }
  }, {
    key: 'all',
    value: function all(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/merge_requests', options);
    }
  }, {
    key: 'cancelOnPipelineSucess',
    value: function cancelOnPipelineSucess(projectId, mergerequestId) {
      var _map3 = [projectId, mergerequestId].map(_Utils.parse),
          _map4 = _slicedToArray(_map3, 2),
          pId = _map4[0],
          mId = _map4[1];

      return this.put('projects/' + pId + '/merge_requests/' + mId + '/cancel_merge_when_pipeline_succeeds');
    }
  }, {
    key: 'closesIssues',
    value: function closesIssues(projectId, mergerequestId) {
      var _map5 = [projectId, mergerequestId].map(_Utils.parse),
          _map6 = _slicedToArray(_map5, 2),
          pId = _map6[0],
          mId = _map6[1];

      return this.get('projects/' + pId + '/merge_requests/' + mId + '/closes_issues');
    }
  }, {
    key: 'create',
    value: function create(projectId, sourceBranch, targetBranch, title) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.post('projects/' + pId + '/merge_requests', Object.assign({
        id: pId,
        source_branch: sourceBranch,
        target_branch: targetBranch,
        title: title
      }, options));
    }
  }, {
    key: 'createTodo',
    value: function createTodo(projectId, mergerequestId) {
      var _map7 = [projectId, mergerequestId].map(_Utils.parse),
          _map8 = _slicedToArray(_map7, 2),
          pId = _map8[0],
          mId = _map8[1];

      return this.post('projects/' + pId + '/merge_requests/' + mId + '/todo');
    }
  }, {
    key: 'edit',
    value: function edit(projectId, mergerequestId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map9 = [projectId, mergerequestId].map(_Utils.parse),
          _map10 = _slicedToArray(_map9, 2),
          pId = _map10[0],
          mId = _map10[1];

      return this.put('projects/' + pId + '/merge_requests/' + mId, options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId, mergerequestId) {
      var _map11 = [projectId, mergerequestId].map(_Utils.parse),
          _map12 = _slicedToArray(_map11, 2),
          pId = _map12[0],
          mId = _map12[1];

      return this.delete('projects/' + pId + '/merge_requests/' + mId);
    }
  }, {
    key: 'show',
    value: function show(projectId, mergerequestId) {
      var _map13 = [projectId, mergerequestId].map(_Utils.parse),
          _map14 = _slicedToArray(_map13, 2),
          pId = _map14[0],
          mId = _map14[1];

      return this.get('projects/' + pId + '/merge_requests/' + mId);
    }
  }, {
    key: 'subscribe',
    value: function subscribe(projectId, mergerequestId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map15 = [projectId, mergerequestId].map(_Utils.parse),
          _map16 = _slicedToArray(_map15, 2),
          pId = _map16[0],
          mId = _map16[1];

      return this.post('projects/' + pId + '/merge_requests/' + mId + '/subscribe', options);
    }
  }, {
    key: 'resetSpentTime',
    value: function resetSpentTime(projectId, mergerequestId) {
      var _map17 = [projectId, mergerequestId].map(_Utils.parse),
          _map18 = _slicedToArray(_map17, 2),
          pId = _map18[0],
          mId = _map18[1];

      return this.post('projects/' + pId + '/merge_requests/' + mId + '/reset_spent_time');
    }
  }, {
    key: 'resetTimeEstimate',
    value: function resetTimeEstimate(projectId, mergerequestId) {
      var _map19 = [projectId, mergerequestId].map(_Utils.parse),
          _map20 = _slicedToArray(_map19, 2),
          pId = _map20[0],
          mId = _map20[1];

      return this.post('projects/' + pId + '/merge_requests/' + mId + '/reset_time_estimate');
    }
  }, {
    key: 'spentTime',
    value: function spentTime(projectId, mergerequestId, duration) {
      var _map21 = [projectId, mergerequestId].map(_Utils.parse),
          _map22 = _slicedToArray(_map21, 2),
          pId = _map22[0],
          mId = _map22[1];

      return this.post('projects/' + pId + '/merge_requests/' + mId + '/add_spent_time', { duration: duration });
    }
  }, {
    key: 'timeEstimate',
    value: function timeEstimate(projectId, mergerequestId, duration) {
      var _map23 = [projectId, mergerequestId].map(_Utils.parse),
          _map24 = _slicedToArray(_map23, 2),
          pId = _map24[0],
          mId = _map24[1];

      return this.post('projects/' + pId + '/merge_requests/' + mId + '/time_estimate', { duration: duration });
    }
  }, {
    key: 'timeStats',
    value: function timeStats(projectId, mergerequestId) {
      var _map25 = [projectId, mergerequestId].map(_Utils.parse),
          _map26 = _slicedToArray(_map25, 2),
          pId = _map26[0],
          mId = _map26[1];

      return this.get('projects/' + pId + '/merge_requests/' + mId + '/time_stats');
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(projectId, mergerequestId) {
      var _map27 = [projectId, mergerequestId].map(_Utils.parse),
          _map28 = _slicedToArray(_map27, 2),
          pId = _map28[0],
          mId = _map28[1];

      return this.delete('projects/' + pId + '/merge_requests/' + mId + '/unsubscribe');
    }
  }]);

  return ProjectMergeRequests;
}(_BaseModel3.default);

exports.default = ProjectMergeRequests;