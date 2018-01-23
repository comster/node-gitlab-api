'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseModel2 = require('./BaseModel');

var _BaseModel3 = _interopRequireDefault(_BaseModel2);

var _Utils = require('../Utils');

var _UserKeys = require('./UserKeys');

var _UserKeys2 = _interopRequireDefault(_UserKeys);

var _ResourceCustomAttributes = require('./ResourceCustomAttributes');

var _ResourceCustomAttributes2 = _interopRequireDefault(_ResourceCustomAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_BaseModel) {
  _inherits(Users, _BaseModel);

  function Users() {
    var _ref;

    _classCallCheck(this, Users);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Users.__proto__ || Object.getPrototypeOf(Users)).call.apply(_ref, [this].concat(args)));

    _this.customAttributes = new (Function.prototype.bind.apply(_ResourceCustomAttributes2.default, [null].concat(['users'], args)))();
    _this.keys = new (Function.prototype.bind.apply(_UserKeys2.default, [null].concat(args)))();
    return _this;
  }

  _createClass(Users, [{
    key: 'all',
    value: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('users', options);
    }
  }, {
    key: 'create',
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.post('users', options);
    }
  }, {
    key: 'current',
    value: function current() {
      return this.get('user');
    }
  }, {
    key: 'session',
    value: function session(email, password) {
      return this.post('session', {
        email: email,
        password: password
      });
    }
  }, {
    key: 'search',
    value: function search(emailOrUsername) {
      return this.get('users', {
        search: emailOrUsername
      });
    }
  }, {
    key: 'show',
    value: function show(userId) {
      var uId = (0, _Utils.parse)(userId);

      return this.get('users/' + uId);
    }
  }]);

  return Users;
}(_BaseModel3.default);

exports.default = Users;