'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = undefined;

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

var ButtonGroup = exports.ButtonGroup = function ButtonGroup(_ref) {
  var _cxStyles;

  var children = _ref.children;
  var className = _ref.className;
  var color = _ref.color;
  var expanded = _ref.expanded;
  var size = _ref.size;
  var stack = _ref.stack;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'color', 'expanded', 'size', 'stack']);

  var classNames = (0, _classnames2.default)(className, cxStyles('button-group', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, color, (0, _includes2.default)(_constants.COMPONENT_COLORS, color)), (0, _defineProperty3.default)(_cxStyles, 'expanded', expanded), (0, _defineProperty3.default)(_cxStyles, size, (0, _includes2.default)(_constants.COMPONENT_SIZES, size)), (0, _defineProperty3.default)(_cxStyles, 'stacked', stack && !(0, _includes2.default)(_constants.BUTTON_GROUP_STACK_SCREEN_SIZES, stack)), (0, _defineProperty3.default)(_cxStyles, 'stacked-for-' + stack, (0, _includes2.default)(_constants.BUTTON_GROUP_STACK_SCREEN_SIZES, stack)), _cxStyles)));
  var clonedChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return (0, _react.cloneElement)(child, { className: (0, _classnames2.default)(child.props.className, cxStyles('button')) });
    }

    return child;
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, restProps, { className: classNames }),
    clonedChildren
  );
};

ButtonGroup.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  color: _react.PropTypes.oneOf(_constants.COMPONENT_COLORS),
  expanded: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES),
  stack: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_constants.BUTTON_GROUP_STACK_SCREEN_SIZES)])
};

exports.default = ButtonGroup;