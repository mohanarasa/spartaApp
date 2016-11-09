'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Callout = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../util/constants');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Callout = exports.Callout = function Callout(_ref) {
  var _cxStyles;

  var className = _ref.className;
  var color = _ref.color;
  var size = _ref.size;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'color', 'size']);

  var classNames = (0, _classnames2.default)(className, cxStyles('callout', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, color, (0, _includes2.default)(_constants.COMPONENT_COLORS, color)), (0, _defineProperty3.default)(_cxStyles, size, (0, _includes2.default)(_constants.CALLOUT_SIZES, size)), _cxStyles)));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

Callout.propTypes = {
  className: _react.PropTypes.string,
  color: _react.PropTypes.oneOf(_constants.COMPONENT_COLORS),
  size: _react.PropTypes.oneOf(_constants.CALLOUT_SIZES)
};

exports.default = Callout;