'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseModel2 = require('./BaseModel');

var _BaseModel3 = _interopRequireDefault(_BaseModel2);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectMergeRequestVersions = function (_BaseModel) {
  _inherits(ProjectMergeRequestVersions, _BaseModel);

  function ProjectMergeRequestVersions() {
    _classCallCheck(this, ProjectMergeRequestVersions);

    return _possibleConstructorReturn(this, (ProjectMergeRequestVersions.__proto__ || Object.getPrototypeOf(ProjectMergeRequestVersions)).apply(this, arguments));
  }

  _createClass(ProjectMergeRequestVersions, [{
    key: 'all',
    value: function all(projectId, mergerequestId) {
      var _map = [projectId, mergerequestId].map(_Utils.parse),
          _map2 = _slicedToArray(_map, 2),
          pId = _map2[0],
          mId = _map2[1];

      return this.get('projects/' + pId + '/merge_requests/' + mId + '/versions');
    }
  }, {
    key: 'show',
    value: function show(projectId, mergerequestId, versionId) {
      var _map3 = [projectId, mergerequestId, versionId].map(_Utils.parse),
          _map4 = _slicedToArray(_map3, 3),
          pId = _map4[0],
          mId = _map4[1],
          vId = _map4[2];

      return this.get('projects/' + pId + '/merge_requests/' + mId + '/versions/' + vId);
    }
  }]);

  return ProjectMergeRequestVersions;
}(_BaseModel3.default);

exports.default = ProjectMergeRequestVersions;