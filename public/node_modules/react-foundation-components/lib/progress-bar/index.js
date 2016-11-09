'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

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

var ProgressBar = exports.ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className;
  var color = _ref.color;
  var labelFormatter = _ref.labelFormatter;
  var max = _ref.max;
  var meterClassName = _ref.meterClassName;
  var meterStyle = _ref.meterStyle;
  var meterTextClassName = _ref.meterTextClassName;
  var meterTextStyle = _ref.meterTextStyle;
  var min = _ref.min;
  var value = _ref.value;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'color', 'labelFormatter', 'max', 'meterClassName', 'meterStyle', 'meterTextClassName', 'meterTextStyle', 'min', 'value']);

  var classNames = (0, _classnames2.default)(className, cxStyles('progress', (0, _defineProperty3.default)({}, color, (0, _includes2.default)(_constants.COMPONENT_COLORS, color))));
  var meterClassNames = (0, _classnames2.default)(meterClassName, cxStyles('progress-meter'));
  var boundedValue = Math.min(Math.max(min, value), max);
  var percent = (boundedValue - min) / (max - min);
  var width = Math.round(percent * 100 * 1000) / 1000;
  var label = null;

  if (labelFormatter) {
    var meterTextClassNames = (0, _classnames2.default)(meterTextClassName, cxStyles('progress-meter-text'));

    label = _react2.default.createElement(
      'span',
      { className: meterTextClassNames, style: meterTextStyle },
      labelFormatter(percent, boundedValue, min, max)
    );
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, restProps, {
      'aria-valuemax': max,
      'aria-valuemin': min,
      'aria-valuenow': boundedValue,
      'aria-valuetext': label,
      className: classNames,
      role: 'progressbar'
    }),
    _react2.default.createElement(
      'span',
      { className: meterClassNames, style: (0, _extends3.default)({}, meterStyle, { width: width + '%' }) },
      label
    )
  );
};

ProgressBar.propTypes = {
  className: _react.PropTypes.string,
  color: _react.PropTypes.oneOf(_constants.COMPONENT_COLORS),
  labelFormatter: _react.PropTypes.func,
  max: _react.PropTypes.number,
  meterClassName: _react.PropTypes.string,
  meterStyle: _react.PropTypes.object,
  meterTextClassName: _react.PropTypes.string,
  meterTextStyle: _react.PropTypes.object,
  min: _react.PropTypes.number,
  value: _react.PropTypes.number
};
ProgressBar.defaultProps = {
  max: 100,
  min: 0,
  value: 0
};

exports.default = ProgressBar;