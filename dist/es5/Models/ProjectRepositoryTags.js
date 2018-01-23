'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseModel2 = require('./BaseModel');

var _BaseModel3 = _interopRequireDefault(_BaseModel2);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectRepositoryTags = function (_BaseModel) {
  _inherits(ProjectRepositoryTags, _BaseModel);

  function ProjectRepositoryTags() {
    _classCallCheck(this, ProjectRepositoryTags);

    return _possibleConstructorReturn(this, (ProjectRepositoryTags.__proto__ || Object.getPrototypeOf(ProjectRepositoryTags)).apply(this, arguments));
  }

  _createClass(ProjectRepositoryTags, [{
    key: 'all',
    value: function all(projectId) {
      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/tags');
    }
  }, {
    key: 'create',
    value: function create(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.post('projects/' + pId + '/repository/tags', options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId, tagName) {
      var pId = (0, _Utils.parse)(projectId);

      return this.delete('projects/' + pId + '/repository/tags/' + encodeURI(tagName));
    }
  }, {
    key: 'show',
    value: function show(projectId, tagName) {
      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/repository/tags/' + encodeURI(tagName));
    }
  }]);

  return ProjectRepositoryTags;
}(_BaseModel3.default);

exports.default = ProjectRepositoryTags;