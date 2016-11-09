'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBar = exports.TitleBarMenuIcon = exports.TitleBarTitle = exports.TitleBarItem = undefined;

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

var _menuIcon = require('../menu-icon');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var TitleBarItem = exports.TitleBarItem = function TitleBarItem(_ref) {
  var className = _ref.className;
  var position = _ref.position;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'position']);

  var classNames = (0, _classnames2.default)(className, cxStyles((0, _defineProperty3.default)({}, 'title-bar-' + position, (0, _includes2.default)(_constants.TITLE_BAR_POSITIONS, position))));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

TitleBarItem.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.TITLE_BAR_POSITIONS).isRequired
};

var TitleBarTitle = exports.TitleBarTitle = function TitleBarTitle(_ref2) {
  var className = _ref2.className;
  var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('title-bar-title'));

  return _react2.default.createElement('span', (0, _extends3.default)({}, restProps, { className: classNames }));
};

TitleBarTitle.propTypes = {
  className: _react.PropTypes.string
};

var TitleBarMenuIcon = exports.TitleBarMenuIcon = function TitleBarMenuIcon(_ref3) {
  var className = _ref3.className;
  var dark = _ref3.dark;
  var restProps = (0, _objectWithoutProperties3.default)(_ref3, ['className', 'dark']);

  var classNames = (0, _classnames2.default)(className, cxStyles('menu-icon', { dark: dark }));

  return _react2.default.createElement(_menuIcon.MenuIcon, (0, _extends3.default)({}, restProps, { className: classNames }));
};

TitleBarMenuIcon.propTypes = {
  className: _react.PropTypes.string,
  dark: _react.PropTypes.bool
};

var TitleBar = exports.TitleBar = function TitleBar(_ref4) {
  var className = _ref4.className;
  var restProps = (0, _objectWithoutProperties3.default)(_ref4, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('title-bar'));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

TitleBar.propTypes = {
  className: _react.PropTypes.string
};

TitleBar.Item = TitleBarItem;
TitleBar.Title = TitleBarTitle;
TitleBar.MenuIcon = TitleBarMenuIcon;

exports.default = TitleBar;