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

var Environments = function (_BaseModel) {
  _inherits(Environments, _BaseModel);

  function Environments() {
    _classCallCheck(this, Environments);

    return _possibleConstructorReturn(this, (Environments.__proto__ || Object.getPrototypeOf(Environments)).apply(this, arguments));
  }

  _createClass(Environments, [{
    key: 'all',
    value: function all(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = (0, _Utils.parse)(projectId);

      return this.get('projects/' + pId + '/environments', options);
    }
  }, {
    key: 'edit',
    value: function edit(projectId, environmentId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map = [projectId, environmentId].map(_Utils.parse),
          _map2 = _slicedToArray(_map, 2),
          pId = _map2[0],
          eId = _map2[1];

      return this.put('projects/' + pId + '/environments/' + eId, options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId, environmentId) {
      var _map3 = [projectId, environmentId].map(_Utils.parse),
          _map4 = _slicedToArray(_map3, 2),
          pId = _map4[0],
          eId = _map4[1];

      return this.delete('projects/' + pId + '/environments/' + eId);
    }
  }, {
    key: 'stop',
    value: function stop(projectId, environmentId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map5 = [projectId, environmentId].map(_Utils.parse),
          _map6 = _slicedToArray(_map5, 2),
          pId = _map6[0],
          eId = _map6[1];

      return this.post('projects/' + pId + '/environments/' + eId + '/stop', options);
    }
  }]);

  return Environments;
}(_BaseModel3.default);

exports.default = Environments;