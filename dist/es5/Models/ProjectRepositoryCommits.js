'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseModel2 = require('./BaseModel');

var _BaseModel3 = _interopRequireDefault(_BaseModel2);

var _Utils = require('../Utils');

var _ProjectRepositoryCommitComments = require('./ProjectRepositoryCommitComments');

var _ProjectRepositoryCommitComments2 = _interopRequireDefault(_ProjectRepositoryCommitComments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectRepositoryCommits = function (_BaseModel) {
  _inherits(ProjectRepositoryCommits, _BaseModel);

  function ProjectRepositoryCommits() {
    var _ref;

    _classCallCheck(this, ProjectRepositoryCommits);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ProjectRepositoryCommits.__proto__ || Object.getPrototypeOf(ProjectRepositoryCommits)).call.apply(_ref, [this].concat(args)));

    _this.comments = new (Function.prototype.bind.apply(_ProjectRepositoryCommitComments2.default, [null].concat(args)))();
    return _this;
  }

  _createClass(ProjectRepositoryCommits, [{
    key: 'all',
    value: function all(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/commits', options);
    }
  }, {
    key: 'diff',
    value: function diff(projectId, sha) {
      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/commits/' + sha + '/diff');
    }
  }, {
    key: 'show',
    value: function show(projectId, sha) {
      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/commits/' + sha);
    }
  }, {
    key: 'statuses',
    value: function statuses(projectId, sha) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/commits/' + sha + '/statuses', options);
    }
  }]);

  return ProjectRepositoryCommits;
}(_BaseModel3.default);

exports.default = ProjectRepositoryCommits;