'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbItem = exports.Breadcrumb = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Breadcrumb = exports.Breadcrumb = function Breadcrumb(_ref) {
  var className = _ref.className;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('breadcrumbs'));

  return _react2.default.createElement('ul', (0, _extends3.default)({}, restProps, { className: classNames }));
};

Breadcrumb.propTypes = {
  className: _react.PropTypes.string
};

var BreadcrumbItem = exports.BreadcrumbItem = function BreadcrumbItem(_ref2) {
  var className = _ref2.className;
  var disabled = _ref2.disabled;
  var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['className', 'disabled']);

  var classNames = (0, _classnames2.default)(className, cxStyles({ disabled: disabled }));

  return _react2.default.createElement('li', (0, _extends3.default)({}, restProps, { className: classNames }));
};

BreadcrumbItem.propTypes = {
  className: _react.PropTypes.string,
  disabled: _react.PropTypes.bool
};

Breadcrumb.Item = BreadcrumbItem;

exports.default = Breadcrumb;