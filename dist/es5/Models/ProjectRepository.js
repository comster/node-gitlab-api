'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseModel2 = require('./BaseModel');

var _BaseModel3 = _interopRequireDefault(_BaseModel2);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectRepository = function (_BaseModel) {
  _inherits(ProjectRepository, _BaseModel);

  function ProjectRepository() {
    var _ref;

    _classCallCheck(this, ProjectRepository);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ProjectRepository.__proto__ || Object.getPrototypeOf(ProjectRepository)).call.apply(_ref, [this].concat(args)));

    _this.branches = new (Function.prototype.bind.apply(_ProjectRepositoryBranches2.default, [null].concat(args)))();
    _this.tags = new (Function.prototype.bind.apply(_ProjectRepositoryTags2.default, [null].concat(args)))();
    _this.commits = new (Function.prototype.bind.apply(_ProjectRepositoryCommits2.default, [null].concat(args)))();
    _this.files = new (Function.prototype.bind.apply(_ProjectRepositoryFiles2.default, [null].concat(args)))();
    return _this;
  }

  _createClass(ProjectRepository, [{
    key: 'compare',
    value: function compare(projectId, from, to) {
      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/compare', { from: from, to: to });
    }
  }, {
    key: 'contributors',
    value: function contributors(projectId) {
      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/contributors');
    }
  }, {
    key: 'showArchive',
    value: function showArchive(projectId, _ref2) {
      var sha = _ref2.sha;

      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/archive', { sha: sha });
    }
  }, {
    key: 'showBlob',
    value: function showBlob(projectId, sha) {
      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/blobs/' + sha);
    }
  }, {
    key: 'showBlobRaw',
    value: function showBlobRaw(projectId, sha) {
      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/blobs/' + sha + '/raw');
    }
  }, {
    key: 'tree',
    value: function tree(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/tree', options);
    }
  }]);

  return ProjectRepository;
}(_BaseModel3.default);

exports.default = ProjectRepository;