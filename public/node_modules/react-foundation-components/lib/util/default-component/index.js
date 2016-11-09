'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultComponent = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultComponent = exports.DefaultComponent = function DefaultComponent(_ref) {
  var ComponentClass = _ref.componentClass;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['componentClass']);
  return _react2.default.createElement(ComponentClass, restProps);
};

DefaultComponent.propTypes = {
  componentClass: _elementType2.default
};
DefaultComponent.defaultProps = {
  componentClass: 'div'
};

exports.default = DefaultComponent;