'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function parse(value) {
  if (typeof value === 'number') return value;else if (value.toString().includes('/')) return encodeURIComponent(value);

  return parseInt(value, 10);
}

exports.parse = parse;