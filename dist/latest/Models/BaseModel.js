'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseLinkHeader = require('parse-link-header');

var _parseLinkHeader2 = _interopRequireDefault(_parseLinkHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAllPages(client, endpoint, options, results = []) {
  const response = await client.get(endpoint, options, true);

  if (!response.headers['x-page']) {
    return response;
  }

  const links = (0, _parseLinkHeader2.default)(response.headers.link);
  const limit = options.max_pages ? response.headers['x-page'] < options.max_pages : true;
  const moreResults = results.concat(response.body);

  if (links.next && limit) {
    return getAllPages(client, links.next.url.replace(client.url, ''), options, moreResults);
  }

  return moreResults;
}

class BaseModel {
  constructor(APIClient) {
    this.client = APIClient;
  }

  get(endpoint, options = {}) {
    if (!options.page) {
      return getAllPages(this.client, endpoint, options);
    }

    return this.client.get(endpoint, options);
  }

  post(endpoint, options = {}) {
    return this.client.post(endpoint, options);
  }

  postForm(endpoint, options = {}) {
    return this.client.postForm(endpoint, options);
  }

  put(endpoint, options = {}) {
    return this.client.put(endpoint, options);
  }

  delete(endpoint, options = {}) {
    return this.client.delete(endpoint, options);
  }
}

exports.default = BaseModel;