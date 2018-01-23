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

var UserKeys = function (_BaseModel) {
  _inherits(UserKeys, _BaseModel);

  function UserKeys() {
    _classCallCheck(this, UserKeys);

    return _possibleConstructorReturn(this, (UserKeys.__proto__ || Object.getPrototypeOf(UserKeys)).apply(this, arguments));
  }

  _createClass(UserKeys, [{
    key: 'add',
    value: function add(userId, title, key) {
      var uId = (0, _Utils.parse)(userId);

      return this.post('users/' + uId + '/keys', {
        title: title,
        key: key
      });
    }
  }, {
    key: 'all',
    value: function all(userId) {
      var uId = (0, _Utils.parse)(userId);

      return this.get('users/' + uId + '/keys');
    }
  }]);

  return UserKeys;
}(_BaseModel3.default);

exports.default = UserKeys;