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

var ACCESS_LEVELS = {
  GUEST: 10,
  REPORTER: 20,
  DEVELOPER: 30,
  MASTER: 40,
  OWNER: 50
};

var ResourceAccessRequests = function (_BaseModel) {
  _inherits(ResourceAccessRequests, _BaseModel);

  function ResourceAccessRequests(resourceType) {
    var _ref;

    _classCallCheck(this, ResourceAccessRequests);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ResourceAccessRequests.__proto__ || Object.getPrototypeOf(ResourceAccessRequests)).call.apply(_ref, [this].concat(args)));

    _this.resourceType = resourceType;
    _this.ACCESS_LEVELS = ACCESS_LEVELS;
    return _this;
  }

  _createClass(ResourceAccessRequests, [{
    key: 'all',
    value: function all(resourceId) {
      var rId = (0, _Utils.parse)(resourceId);

      return this.get(this.resourceType + '/' + rId + '/access_requests');
    }
  }, {
    key: 'request',
    value: function request(resourceId) {
      var rId = (0, _Utils.parse)(resourceId);

      return this.post(this.resourceType + '/' + rId + '/access_requests');
    }
  }, {
    key: 'approve',
    value: function approve(resourceId, userId, _ref2) {
      var _ref2$access_level = _ref2.access_level,
          access_level = _ref2$access_level === undefined ? 30 : _ref2$access_level;

      var _map = [resourceId, userId].map(_Utils.parse),
          _map2 = _slicedToArray(_map, 2),
          rId = _map2[0],
          uId = _map2[1];

      return this.post(this.resourceType + '/' + rId + '/access_requests/' + uId + '/approve', { access_level: access_level });
    }
  }, {
    key: 'deny',
    value: function deny(resourceId, userId) {
      var _map3 = [resourceId, userId].map(_Utils.parse),
          _map4 = _slicedToArray(_map3, 2),
          rId = _map4[0],
          uId = _map4[1];

      return this.delete(this.resourceType + '/' + rId + '/access_requests/' + uId + '/approve');
    }
  }]);

  return ResourceAccessRequests;
}(_BaseModel3.default);

exports.default = ResourceAccessRequests;