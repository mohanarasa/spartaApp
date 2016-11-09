'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

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

var _bind = require('classnames');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../../util/constants');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Button = exports.Button = function Button(_ref) {
  var _cxStyles;

  var className = _ref.className;
  var color = _ref.color;
  var disabled = _ref.disabled;
  var dropdown = _ref.dropdown;
  var dropdownArrowOnly = _ref.dropdownArrowOnly;
  var expanded = _ref.expanded;
  var hollow = _ref.hollow;
  var href = _ref.href;
  var size = _ref.size;
  var target = _ref.target;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'color', 'disabled', 'dropdown', 'dropdownArrowOnly', 'expanded', 'hollow', 'href', 'size', 'target']);

  var classNames = (0, _classnames2.default)(className, cxStyles('button', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, color, (0, _includes2.default)(_constants.COMPONENT_COLORS, color)), (0, _defineProperty3.default)(_cxStyles, 'disabled', disabled), (0, _defineProperty3.default)(_cxStyles, 'dropdown', dropdown), (0, _defineProperty3.default)(_cxStyles, 'arrow-only', dropdown && dropdownArrowOnly), (0, _defineProperty3.default)(_cxStyles, 'expanded', expanded), (0, _defineProperty3.default)(_cxStyles, 'hollow', hollow), (0, _defineProperty3.default)(_cxStyles, size, (0, _includes2.default)(_constants.COMPONENT_SIZES, size)), _cxStyles)));

  if (href || target) {
    return _react2.default.createElement('a', (0, _extends3.default)({}, restProps, {
      'aria-disabled': disabled,
      className: classNames,
      href: href || '#',
      target: target,
      role: 'button'
    }));
  }

  return _react2.default.createElement('button', (0, _extends3.default)({}, restProps, { className: classNames, disabled: disabled }));
};

Button.propTypes = {
  className: _react.PropTypes.string,
  color: _react.PropTypes.oneOf(_constants.COMPONENT_COLORS),
  disabled: _react.PropTypes.bool,
  dropdown: _react.PropTypes.bool,
  dropdownArrowOnly: _react.PropTypes.bool,
  expanded: _react.PropTypes.bool,
  hollow: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES),
  target: _react.PropTypes.string
};
Button.defaultProps = {
  type: 'button'
};

exports.default = Button;