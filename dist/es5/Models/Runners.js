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

var Runners = function (_BaseModel) {
  _inherits(Runners, _BaseModel);

  function Runners() {
    _classCallCheck(this, Runners);

    return _possibleConstructorReturn(this, (Runners.__proto__ || Object.getPrototypeOf(Runners)).apply(this, arguments));
  }

  _createClass(Runners, [{
    key: 'all',
    value: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('runners/all', options);
    }
  }, {
    key: 'allOwned',
    value: function allOwned() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('runners', options);
    }
  }, {
    key: 'edit',
    value: function edit(runnerId, attributes) {
      var rId = (0, _Utils.parse)(runnerId);

      return this.put('runners/' + rId, attributes);
    }
  }, {
    key: 'remove',
    value: function remove(runnerId) {
      var rId = (0, _Utils.parse)(runnerId);

      return this.delete('runners/' + rId);
    }
  }, {
    key: 'show',
    value: function show(runnerId) {
      var rId = (0, _Utils.parse)(runnerId);

      return this.get('runners/' + rId);
    }
  }, {
    key: 'showJobs',
    value: function showJobs(runnerId) {
      var rId = (0, _Utils.parse)(runnerId);

      return this.get('runners/' + rId + '/jobs');
    }
  }]);

  return Runners;
}(_BaseModel3.default);

exports.default = Runners;