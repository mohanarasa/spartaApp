'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuText = exports.MenuItem = exports.Menu = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enums = require('../enums');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Menu component.
 * http://foundation.zurb.com/sites/docs/menu.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var Menu = exports.Menu = function Menu(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'menu', props.className, {
    'align-right': props.alignment === _enums.MenuAlignments.RIGHT,
    'align-center': props.alignment === _enums.MenuAlignments.CENTER,
    'icon-top': props.iconsOnTop,
    'expanded': props.isExpanded,
    'vertical': props.isVertical,
    'simple': props.isSimple,
    'nested': props.isNested,
    'dropdown': props.isDropdown,
    'medium-horizontal': props.horizontalOnMedium
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Menu.propTypes));

  return _react2.default.createElement('ul', _extends({}, passProps, { className: className }));
};

Menu.propTypes = _extends({}, _utils.GeneralPropTypes, {
  alignment: _react.PropTypes.oneOf((0, _utils.objectValues)(_enums.MenuAlignments)),
  iconsOnTop: _react.PropTypes.bool,
  isExpanded: _react.PropTypes.bool,
  isVertical: _react.PropTypes.bool,
  isDropdown: _react.PropTypes.bool,
  isSimple: _react.PropTypes.bool,
  isNested: _react.PropTypes.bool,
  horizontalOnMedium: _react.PropTypes.bool
});

/**
 * Menu item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var MenuItem = exports.MenuItem = function MenuItem(props) {
  var className = (0, _utils.createClassName)(props.className, {
    'active': props.isActive
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(MenuItem.propTypes));

  return _react2.default.createElement('li', _extends({}, passProps, { className: className }));
};

MenuItem.propTypes = _extends({}, _utils.GeneralPropTypes, {
  isActive: _react.PropTypes.bool
});

/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
var MenuText = exports.MenuText = function MenuText(props) {
  return _react2.default.createElement(MenuItem, _extends({}, props, { className: props.className || 'menu-text' }));
};