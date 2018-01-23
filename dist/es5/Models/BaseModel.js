'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parseLinkHeader = require('parse-link-header');

var _parseLinkHeader2 = _interopRequireDefault(_parseLinkHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

async function getAllPages(client, endpoint, options) {
  var results = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var response = await client.get(endpoint, options, true);

  if (!response.headers['x-page']) {
    return response;
  }

  var links = (0, _parseLinkHeader2.default)(response.headers.link);
  var limit = options.max_pages ? response.headers['x-page'] < options.max_pages : true;
  var moreResults = results.concat(response.body);

  if (links.next && limit) {
    return getAllPages(client, links.next.url.replace(client.url, ''), options, moreResults);
  }

  return moreResults;
}

var BaseModel = function () {
  function BaseModel(APIClient) {
    _classCallCheck(this, BaseModel);

    this.client = APIClient;
  }

  _createClass(BaseModel, [{
    key: 'get',
    value: function get(endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!options.page) {
        return getAllPages(this.client, endpoint, options);
      }

      return this.client.get(endpoint, options);
    }
  }, {
    key: 'post',
    value: function post(endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.client.post(endpoint, options);
    }
  }, {
    key: 'postForm',
    value: function postForm(endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.client.postForm(endpoint, options);
    }
  }, {
    key: 'put',
    value: function put(endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.client.put(endpoint, options);
    }
  }, {
    key: 'delete',
    value: function _delete(endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.client.delete(endpoint, options);
    }
  }]);

  return BaseModel;
}();

exports.default = BaseModel;