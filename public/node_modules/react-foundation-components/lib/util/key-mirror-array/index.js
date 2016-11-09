"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyMirrorArray;
function keyMirrorArray(array) {
  var result = {};

  array.forEach(function (item) {
    result[item] = item;
  });

  return result;
}