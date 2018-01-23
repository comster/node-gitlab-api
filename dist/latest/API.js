'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _Models = require('./Models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultRequest(url, endpoint, { headers, body, qs, formData, resolveWithFullResponse = false }) {
  const params = {
    url: `${url}${endpoint}`,
    headers,
    json: true
  };

  if (body) params.body = body;
  if (qs) params.qs = qs;
  if (formData) params.formData = formData;

  params.resolveWithFullResponse = resolveWithFullResponse;

  return params;
}

class API {
  constructor({ url = 'https://gitlab.com', token, oauthToken }) {
    this.url = `${url}/api/v4/`;
    this.headers = {};

    if (oauthToken) {
      this.headers.Authorization = `Bearer ${oauthToken}`;
    } else if (token) {
      this.headers['private-token'] = token;
    } else {
      throw new Error('`token` (private-token) or `oauth_token` is mandatory');
    }

    this.groups = new _Models.Groups(this);
    this.projects = new _Models.Projects(this);
    this.issues = new _Models.Issues(this);
    this.users = new _Models.Users(this);
    this.runners = new _Models.Runners(this);
  }

  get(endpoint, options, fullResponse) {
    return _requestPromise2.default.get(defaultRequest(this.url, endpoint, {
      headers: this.headers,
      qs: options,
      resolveWithFullResponse: fullResponse
    }));
  }

  post(endpoint, options) {
    return _requestPromise2.default.post(defaultRequest(this.url, endpoint, {
      headers: this.headers,
      body: options
    }));
  }

  postForm(endpoint, options) {
    return _requestPromise2.default.post(defaultRequest(this.url, endpoint, {
      headers: this.headers,
      formData: options
    }));
  }

  put(endpoint, options) {
    return _requestPromise2.default.put(defaultRequest(this.url, endpoint, {
      headers: this.headers,
      body: options
    }));
  }

  delete(endpoint, options) {
    return _requestPromise2.default.delete(defaultRequest(this.url, endpoint, {
      headers: this.headers,
      qs: options
    }));
  }
}

exports.default = API;