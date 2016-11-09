'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = exports.FlexChild = exports.FlexParent = undefined;

var _defaultComponent = require('../../util/default-component');

var _defaultComponent2 = _interopRequireDefault(_defaultComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexParent = exports.FlexParent = _defaultComponent2.default;

var FlexChild = exports.FlexChild = _defaultComponent2.default;

var Flex = exports.Flex = { Parent: FlexParent, Child: FlexChild };

exports.default = Flex;