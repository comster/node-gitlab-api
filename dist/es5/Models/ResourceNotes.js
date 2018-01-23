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

var ResourceNotes = function (_BaseModel) {
  _inherits(ResourceNotes, _BaseModel);

  function ResourceNotes(resourceType, resource2Type) {
    var _ref;

    _classCallCheck(this, ResourceNotes);

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ResourceNotes.__proto__ || Object.getPrototypeOf(ResourceNotes)).call.apply(_ref, [this].concat(args)));

    _this.resourceType = resourceType;
    _this.resource2Type = resource2Type;
    return _this;
  }

  _createClass(ResourceNotes, [{
    key: 'all',
    value: function all(resourceId, resource2Id) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map = [resourceId, resource2Id].map(_Utils.parse),
          _map2 = _slicedToArray(_map, 2),
          rId = _map2[0],
          r2Id = _map2[1];

      return this.get(this.resourceType + '/' + rId + '/' + this.resource2Type + '/' + r2Id + '/notes', options);
    }
  }, {
    key: 'create',
    value: function create(resourceId, resource2Id) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!options.body) throw new Error('Missing required property: body');

      var _map3 = [resourceId, resource2Id].map(_Utils.parse),
          _map4 = _slicedToArray(_map3, 2),
          rId = _map4[0],
          r2Id = _map4[1];

      return this.post(this.resourceType + '/' + rId + '/' + this.resource2Type + '/' + r2Id + '/notes', options);
    }
  }, {
    key: 'edit',
    value: function edit(resourceId, resource2Id, noteId) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (!options.body) throw new Error('Missing required property: body');

      var _map5 = [resourceId, resource2Id, noteId].map(_Utils.parse),
          _map6 = _slicedToArray(_map5, 3),
          rId = _map6[0],
          r2Id = _map6[1],
          nId = _map6[2];

      return this.put(this.resourceType + '/' + rId + '/' + this.resource2Type + '/' + r2Id + '/notes/' + nId, options);
    }
  }, {
    key: 'remove',
    value: function remove(resourceId, resource2Id, noteId) {
      var _map7 = [resourceId, resource2Id, noteId].map(_Utils.parse),
          _map8 = _slicedToArray(_map7, 3),
          rId = _map8[0],
          r2Id = _map8[1],
          nId = _map8[2];

      return this.delete(this.resourceType + '/' + rId + '/' + this.resource2Type + '/' + r2Id + '/notes/' + nId);
    }
  }, {
    key: 'show',
    value: function show(resourceId, resource2Id, noteId) {
      var _map9 = [resourceId, resource2Id, noteId].map(_Utils.parse),
          _map10 = _slicedToArray(_map9, 3),
          rId = _map10[0],
          r2Id = _map10[1],
          nId = _map10[2];

      return this.get(this.resourceType + '/' + rId + '/' + this.resource2Type + '/' + r2Id + '/notes/' + nId);
    }
  }]);

  return ResourceNotes;
}(_BaseModel3.default);

exports.default = ResourceNotes;