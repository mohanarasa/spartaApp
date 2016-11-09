'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thumbnail = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames');

var _bind2 = _interopRequireDefault(_bind);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Thumbnail = exports.Thumbnail = function Thumbnail(_ref) {
  var alt = _ref.alt;
  var className = _ref.className;
  var _ref$role = _ref.role;
  var role = _ref$role === undefined ? alt ? null : 'presentation' : _ref$role;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['alt', 'className', 'role']);

  var classNames = (0, _classnames2.default)(className, cxStyles('thumbnail'));

  return _react2.default.createElement('img', (0, _extends3.default)({}, restProps, { alt: alt, className: classNames, role: role }));
};

Thumbnail.propTypes = {
  alt: _react.PropTypes.string,
  className: _react.PropTypes.string,
  role: _react.PropTypes.string
};

exports.default = Thumbnail;